import fs from "node:fs";
import path from "node:path";

const engineDir = path.resolve("src/affectui-engine");
const indexFile = path.join(engineDir, "index-0fpbu-ki.js");
const indexCode = fs.readFileSync(indexFile, "utf8");

// Parse 177 components from index-0fpbu-ki.js
const regex = /slug:`([^`]+)`[\s\S]*?Preview:\(0,[^)]+\)\(\(\)=>u\(\(\)=>import\(`\.\/([^`]+)`\)/g;

const upstreamMap = new Map();
let match;
while ((match = regex.exec(indexCode)) !== null) {
  const [full, slug, classicDemo] = match;
  const rest = indexCode.slice(match.index, match.index + 1200);
  const cleanMatch = rest.match(/clean:\{Preview:\(0,[^)]+\)\(\(\)=>u\(\(\)=>import\(`\.\/(demo\.clean-[^`]+)`\)/);
  const cleanDemo = cleanMatch ? cleanMatch[1] : null;

  upstreamMap.set(slug, { slug, classicDemo, cleanDemo });
}

console.log(`Parsed ${upstreamMap.size} upstream components from index-0fpbu-ki.js`);

// Special secondary exports map
const specialExports = {
  "button": {
    classic: { inner: "i" },
    clean: { inner: "n" }
  },
  "stepper-form": {
    classic: { inner: "_", extras: "v as StepperField, y as StepperInput, x as StepperTags, S as StepperChoices, C as StepperReview" },
    clean: { inner: "_", extras: "v as StepperField, y as StepperInput, x as StepperTags, S as StepperChoices, C as StepperReview" }
  },
  "agent-cursors": {
    classic: { inner: "m", extras: "i as acceptSuggestion" },
    clean: { inner: "m", extras: "i as acceptSuggestion" }
  },
  "message-actions": {
    classic: { inner: "m", extras: "o as MessageText" },
    clean: { inner: "h", extras: "o as MessageText" }
  },
  "profile-menu": {
    classic: { inner: "o", extras: "l as SettingsIcon, f as LogoutIcon" },
    clean: { inner: "o", extras: "l as SettingsIcon, f as LogoutIcon" }
  },
  "tool-call-card": {
    classic: { inner: "i", extras: "a as ToolCallGroup" },
    clean: { inner: "r", extras: "n as ToolCallGroup" }
  },
  "data-table": {
    classic: { inner: "m", extras: "b as TextColumnIcon, x as TagColumnIcon" },
    clean: { inner: "o", extras: "n as TextColumnIcon, r as TagColumnIcon" }
  },
  "app-shell-flat": {
    classic: { inner: "p", extras: "o as WorkspacePanel" }
  },
  "app-shell": {
    classic: { inner: "o", extras: "a as WorkspacePanel" }
  }
};

function getInnerComponent(fileCode, slug) {
  if (slug === "metrics-dashboard") return "T";
  
  const exportDefaultMatch = fileCode.match(/export\s*\{([^}]+)\}/);
  let defaultIdent = null;
  if (exportDefaultMatch) {
    for (const part of exportDefaultMatch[1].split(",")) {
      const m = part.trim().match(/^([a-zA-Z0-9_$]+)\s+as\s+default$/);
      if (m) defaultIdent = m[1];
    }
  }
  if (!defaultIdent) {
    const directDefault = fileCode.match(/export\s+default\s+([a-zA-Z0-9_$]+);/);
    if (directDefault) defaultIdent = directDefault[1];
  }
  if (!defaultIdent) return null;

  const fnRegex = new RegExp("(?:function\\s+" + defaultIdent + "\\s*\\([^)]*\\)|var\\s+" + defaultIdent + "\\s*=\\s*function|const\\s+" + defaultIdent + "\\s*=\\s*\\([^)]*\\)\\s*=>)\\s*\\{([\\s\\S]*?)(?:\\n\\}\\s*export|\\}\\s*export|\\}\\s*function|\\}\\s*var|\\}\\s*const)");
  const fnMatch = fileCode.match(fnRegex);
  if (!fnMatch) return defaultIdent;
  const fnBody = fnMatch[1];

  const htmlTags = new Set(["`div`","\"div\"","`span`","\"span\"","`section`","\"section\"","`main`","\"main\"","`p`","\"p\"","`button`","\"button\"","`svg`","\"svg\"","`a`","\"a\"","`ul`","\"ul\"","`li`","\"li\"","`ol`","\"ol\"","`h1`","\"h1\"","`h2`","\"h2\"","`h3`","\"h3\"","`h4`","\"h4\"","`input`","\"input\"","`label`","\"label\"","`form`","\"form\"","`header`","\"header\"","`footer`","\"footer\"","`nav`","\"nav\"","`aside`","\"aside\"","`article`","\"article\"","`table`","\"table\"","`tbody`","\"tbody\"","`thead`","\"thead\"","`tr`","\"tr\"","`td`","\"td\"","`th`","\"th\""]);

  const jsxCalls = [...fnBody.matchAll(/\(0,\s*[a-zA-Z0-9_$]+(?:\.jsx|\.jsxs)\)\s*\(\s*([a-zA-Z0-9_$]+)\s*,\s*\{/g)]
    .map(m => m[1])
    .filter(name => !htmlTags.has(name) && !name.startsWith("`") && !name.startsWith("\""));

  if (jsxCalls.length === 0) {
    return defaultIdent;
  }
  return jsxCalls[jsxCalls.length - 1];
}

function patchChunk(fileName, slug, variant) {
  const filePath = path.join(engineDir, fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }
  let content = fs.readFileSync(filePath, "utf8");
  if (content.includes("__InnerComponent")) {
    // already patched
    return;
  }

  const special = specialExports[slug]?.[variant];
  let inner = special ? special.inner : getInnerComponent(content, slug);
  if (!inner) {
    throw new Error(`Could not determine inner component for ${slug} (${fileName})`);
  }

  let extraExports = special && special.extras ? `, ${special.extras}` : "";

  // Append export
  content = `${content}\nexport { ${inner} as __InnerComponent${extraExports} };\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

// 1. Patch all chunks
console.log("Patching chunks with __InnerComponent...");
let patchedCount = 0;
for (const [slug, item] of upstreamMap.entries()) {
  patchChunk(item.classicDemo, slug, "classic");
  patchedCount++;
  if (item.cleanDemo) {
    patchChunk(item.cleanDemo, slug, "clean");
    patchedCount++;
  }
}
console.log(`Successfully patched/verified ${patchedCount} chunk files.`);

// 2. Update src/component-manifest.json
const manifestPath = path.resolve("src/component-manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

const updatedManifest = manifest.map(item => {
  const up = upstreamMap.get(item.slug);
  if (!up) return item; // Handcrafted items
  return {
    ...item,
    classic: up.classicDemo,
    clean: up.cleanDemo || item.clean || null
  };
});

fs.writeFileSync(manifestPath, JSON.stringify(updatedManifest, null, 2) + "\n", "utf8");
console.log(`Updated component-manifest.json (183 elements, ${updatedManifest.filter(m=>m.clean).length} clean variants).`);

// 3. Update src/affectui-engine/catalog.js
const catalogPath = path.resolve("src/affectui-engine/catalog.js");
let catalogContent = fs.readFileSync(catalogPath, "utf8");

for (const [slug, up] of upstreamMap.entries()) {
  const slugRegex = new RegExp(`slug:\\s*"${slug}"[\\s\\S]*?\\n\\s*\\}`, "g");
  catalogContent = catalogContent.replace(slugRegex, (block) => {
    let updated = block.replace(/loadClassic:\s*\(\)\s*=>\s*import\("[^"]+"\)/, `loadClassic: () => import("./${up.classicDemo}")`);
    if (up.cleanDemo) {
      if (/loadClean:\s*\(\)\s*=>\s*import\("[^"]+"\)/.test(updated)) {
        updated = updated.replace(/loadClean:\s*\(\)\s*=>\s*import\("[^"]+"\)/, `loadClean: () => import("./${up.cleanDemo}")`);
      } else {
        // add loadClean
        updated = updated.replace(/loadClassic:[^,]+,/, (m) => `${m}\n    loadClean: () => import("./${up.cleanDemo}"),`);
      }
    }
    return updated;
  });
}

fs.writeFileSync(catalogPath, catalogContent, "utf8");
console.log("Updated src/affectui-engine/catalog.js dynamic imports.");
