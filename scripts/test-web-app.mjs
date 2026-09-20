import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const fail = [];
const ok = [];

const requiredWeb = [
  "web/index.html",
  "web/styles.css",
  "web/app.js",
  "web/premium.css",
  "web/ux.js",
  "_site/index.html",
  "_site/styles.css",
  "_site/app.js",
  "_site/premium.css",
  "_site/ux.js",
  "_site/.nojekyll",
];

for (const rel of requiredWeb) {
  if (!fs.existsSync(path.join(root, rel))) fail.push(`missing ${rel}`);
  else ok.push(rel);
}

const readJson = (rel) => JSON.parse(fs.readFileSync(path.join(root, rel), "utf8"));
const manifest = readJson("data/canonical/manifest.json");
if (manifest.schema_version !== "1.0.0") fail.push(`unsupported canonical schema ${manifest.schema_version}`);

const index = fs.readFileSync(path.join(root, "web/index.html"), "utf8");
for (const required of [
  'data-view="spectrum"',
  'data-view="connections"',
  'data-view="frontier"',
  'data-view="gaps"',
  'data-view="method"',
  'id="spectrum-chart"',
  'id="connection-graph"',
  'id="print-button"',
  'href="./premium.css"',
  'type="module" src="./app.js"',
  'type="module" src="./ux.js"',
]) {
  if (!index.includes(required)) fail.push(`index missing UI contract: ${required}`);
}

const app = fs.readFileSync(path.join(root, "web/app.js"), "utf8");
const ux = fs.readFileSync(path.join(root, "web/ux.js"), "utf8");
const premiumCss = fs.readFileSync(path.join(root, "web/premium.css"), "utf8");
for (const required of [
  '"manifest"',
  '"phenomena"',
  '"interactions"',
  '"frontier"',
  '"gaps"',
  '"sources"',
  '"energy_roles"',
  '"validations"',
  "What is oscillating?",
  "window.print()",
  "photonOverlay",
  "renderConnectionGraph",
  "renderFrontier",
  "renderGaps",
]) {
  if (!app.includes(required)) fail.push(`app missing behavior contract: ${required}`);
}

for (const required of [
  "Human Scale",
  "Earth & Space",
  "EM Spectrum",
  "Biological",
  "Quantum",
  "resolveLabelCollisions",
  "Related interactions",
  "No explicit canonical frontier relationship is registered.",
]) {
  if (!ux.includes(required)) fail.push(`UX layer missing behavior contract: ${required}`);
}

for (const required of [
  ".explore-panel",
  ".preset-button",
  ".selected-mark",
  ".is-mobile-sheet-open",
  "prefers-reduced-motion",
]) {
  if (!premiumCss.includes(required)) fail.push(`premium CSS missing presentation contract: ${required}`);
}

const bannedScientificIds = [
  "GEO-TIDE-SEMI",
  "EM-VISIBLE",
  "GW-LIGO",
  "P4-H013",
  "P4-F012",
];
for (const id of bannedScientificIds) {
  if (app.includes(id) || ux.includes(id)) fail.push(`scientific record ${id} is hard-coded in web application code`);
}

const files = { manifest: "manifest.json", ...manifest.files };
for (const [kind, filename] of Object.entries(files)) {
  const source = path.join(root, "data", "canonical", filename);
  const built = path.join(root, "_site", "data", filename);
  if (!fs.existsSync(source)) fail.push(`manifest source missing: ${kind} → ${filename}`);
  if (!fs.existsSync(built)) fail.push(`built canonical file missing: ${kind} → ${filename}`);
  if (fs.existsSync(source) && fs.existsSync(built)) {
    const digest = p => crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex");
    if (digest(source) !== digest(built)) fail.push(`built data differs from canonical source: ${filename}`);
  }
}

const phenomena = readJson("data/canonical/phenomena.json").records;
const ranges = readJson("data/canonical/ranges.json").records;
const interactions = readJson("data/canonical/interactions.json").records;
const frontier = readJson("data/canonical/frontier.json").records;
const gaps = readJson("data/canonical/gaps.json").records;

const counts = manifest.counts;
for (const [name, actual] of Object.entries({
  phenomena: phenomena.length,
  ranges: ranges.length,
  interactions: interactions.length,
  frontier: frontier.length,
  gaps: gaps.length,
})) {
  if (counts[name] !== actual) fail.push(`manifest/web input count mismatch for ${name}: ${counts[name]} != ${actual}`);
}

for (const record of frontier) {
  if (Number.isFinite(record.spectral?.min_hz) || Number.isFinite(record.spectral?.max_hz)) {
    fail.push(`frontier record ${record.id} contains numeric spectral endpoints; Phase 6 must not plot it as established spectrum`);
  }
}

if (fail.length) {
  console.error("Phase 6 web audit FAILED");
  for (const item of fail) console.error(" - " + item);
  process.exit(1);
}

console.log("Phase 6 web audit PASS");
console.log(JSON.stringify({
  schema_version: manifest.schema_version,
  phenomena: phenomena.length,
  ranges: ranges.length,
  interactions: interactions.length,
  frontier: frontier.length,
  gaps: gaps.length,
  built_files_verified: Object.keys(files).length,
}, null, 2));
