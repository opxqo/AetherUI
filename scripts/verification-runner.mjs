export async function runStep(title, fn, log = console.log) {
  log(`${title} ...`);
  await fn();
  log(`${title}: PASSED`);
}
