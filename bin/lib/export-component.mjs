import fs from "node:fs";
import path from "node:path";
import { init, parse } from "es-module-lexer";
import postcss from "postcss";
import valueParser from "postcss-value-parser";

const external = /^(react|react-dom)(\/|$)/;
const remote = /^(?:[a-z]+:|\/\/|#)/i;

// Preserve source-relative layout so copied modules keep their adapter protocol and singleton state.
export async function collectComponentFiles(root, entry, { styles = true } = {}) {
  await init;
  const files = new Map();
  const visiting = new Set();
  const inside = file => file.startsWith(root + path.sep);
  const resolve = (specifier, importer) => {
    let file = specifier.startsWith("/")
      ? path.join(root, "public", specifier)
      : path.resolve(path.dirname(importer), specifier);
    file = file.split(/[?#]/)[0];
    if (!fs.existsSync(file) && file.endsWith(".js") && fs.existsSync(file.slice(0, -3) + ".d.ts")) file = file.slice(0, -3) + ".d.ts";
    if (!inside(file) || !fs.existsSync(file) || !fs.statSync(file).isFile()) throw new Error(`Missing local dependency ${specifier} in ${path.relative(root, importer)}`);
    return file;
  };
  async function visit(file) {
    if (visiting.has(file)) return;
    visiting.add(file);
    let contents = fs.readFileSync(file);
    const suffix = path.extname(file);
    if (suffix === ".css") {
      const ast = postcss.parse(contents.toString(), { from: file });
      const dependencies = [];
      function rewrite(value, isImport = false) {
        const parsed = valueParser(value);
        parsed.walk(node => {
          let specifier;
          if (node.type === "function" && node.value.toLowerCase() === "url") {
            const child = node.nodes.find(n => n.type === "string" || n.type === "word");
            if (!child) return false;
            specifier = child.value;
            if (remote.test(specifier)) return false;
            const dependency = resolve(specifier, file);
            dependencies.push(dependency);
            child.value = path.relative(path.dirname(file), dependency).split(path.sep).join("/");
            return false;
          }
          if (isImport && node.type === "string") {
            specifier = node.value;
            if (!remote.test(specifier)) dependencies.push(resolve(specifier, file));
          }
        });
        return parsed.toString();
      }
      ast.walkAtRules("import", rule => { rule.params = rewrite(rule.params, true); });
      ast.walkDecls(decl => { decl.value = rewrite(decl.value); });
      contents = Buffer.from(ast.toString());
      for (const dep of dependencies) await visit(dep);
      if (fs.existsSync(file + ".d.ts")) await visit(file + ".d.ts");
    } else if (/\.(?:js|mjs)$/.test(file) && !file.endsWith(".d.ts")) {
      const [imports] = parse(contents.toString());
      for (const imp of imports) {
        if (!imp.specifier) {
          if (imp.type === "dynamic") throw new Error(`Non-literal dynamic import in ${file}`);
          continue;
        }
        if (imp.specifier.startsWith(".") || imp.specifier.startsWith("/")) await visit(resolve(imp.specifier, file));
        else if (!external.test(imp.specifier)) throw new Error(`Undeclared external dependency ${imp.specifier} in ${file}`);
      }
      const dts = file.slice(0, -3) + ".d.ts";
      if (fs.existsSync(dts)) await visit(dts);
    } else if (file.endsWith(".d.ts")) {
      for (const match of contents.toString().matchAll(/\bfrom\s+["']([^"']+)["']/g)) {
        if (match[1].startsWith(".")) await visit(resolve(match[1], file));
        else if (!external.test(match[1])) throw new Error(`Undeclared type dependency ${match[1]}`);
      }
    }
    files.set(path.relative(root, file), contents);
  }
  await visit(path.resolve(root, entry));
  if (styles) await visit(path.join(root, "src/styles.css"));
  return files;
}

export async function exportComponent(root, item, variant, targetDir, usePackage = false) {
  if (variant === "clean" && !item.clean) throw new Error(`${item.slug} has no Clean variant`);
  const subpath = `ui/${variant === "clean" ? "clean/" : ""}${item.slug}`;
  const sourceEntry = `src/components/${subpath}.js`;
  const specifier = usePackage ? `@aether-ui/react/${subpath}` : `./_engine/${sourceEntry}`;
  // Collect before writing to avoid reporting success with an incomplete dependency graph.
  const files = usePackage ? new Map() : await collectComponentFiles(root, sourceEntry);
  fs.mkdirSync(targetDir, { recursive: true });
  for (const [relative, contents] of files) {
    const output = path.join(targetDir, "_engine", relative);
    fs.mkdirSync(path.dirname(output), { recursive: true });
    fs.writeFileSync(output, contents);
  }
  if (!usePackage) fs.writeFileSync(path.join(targetDir, "_engine/package.json"), '{"type":"module"}\n');
  const style = usePackage ? "@aether-ui/react/styles.css" : "./_engine/src/styles.css";
  const code = `// Generated AetherUI ${variant} component; React and React DOM are host dependencies.\nimport "${style}";\nexport * from "${specifier}";\nexport { default } from "${specifier}";\n`;
  fs.writeFileSync(path.join(targetDir, `${item.slug}.tsx`), code);
  fs.writeFileSync(path.join(targetDir, `${item.slug}.d.ts`), `export * from "${specifier}";\nexport { default } from "${specifier}";\n`);
  return { files: files.size, entry: path.join(targetDir, `${item.slug}.tsx`) };
}
