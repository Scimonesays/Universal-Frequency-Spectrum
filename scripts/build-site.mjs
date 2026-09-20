import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const out = path.join(root, "_site");
const web = path.join(root, "web");
const canonical = path.join(root, "data", "canonical");

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.cpSync(web, out, { recursive: true });

const manifest = JSON.parse(fs.readFileSync(path.join(canonical, "manifest.json"), "utf8"));
const dataOut = path.join(out, "data");
fs.mkdirSync(dataOut, { recursive: true });

const canonicalFiles = new Set(["manifest.json", ...Object.values(manifest.files)]);
for (const filename of canonicalFiles) {
  const source = path.join(canonical, filename);
  if (!fs.existsSync(source)) throw new Error(`Canonical build input missing: ${source}`);
  fs.copyFileSync(source, path.join(dataOut, filename));
}

fs.writeFileSync(path.join(out, ".nojekyll"), "");
console.log(`Built Phase 6 site with ${canonicalFiles.size} canonical JSON files → _site/`);
