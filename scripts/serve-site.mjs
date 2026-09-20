import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd(), "_site");
const port = Number(process.env.UFS_PORT || process.argv[2] || 8000);
const host = "127.0.0.1";

if (!fs.existsSync(root)) {
  console.error("UFS build not found: _site/");
  console.error("Run: node scripts/build-site.mjs");
  process.exit(1);
}

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8"
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^([/\\])+/, "");
  const candidate = path.resolve(root, normalized || "index.html");
  if (!candidate.startsWith(root + path.sep) && candidate !== root) return null;
  return candidate;
}

const server = http.createServer((req, res) => {
  try {
    let target = safePath(req.url || "/");
    if (!target) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
      target = path.join(target, "index.html");
    }

    if (!fs.existsSync(target) || !fs.statSync(target).isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const ext = path.extname(target).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mime[ext] || "application/octet-stream",
      "Cache-Control": "no-store, max-age=0",
      "X-Content-Type-Options": "nosniff"
    });
    fs.createReadStream(target).pipe(res);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Server error");
    console.error(error);
  }
});

server.listen(port, host, () => {
  console.log("");
  console.log("  Universal Frequency Spectrum");
  console.log("  ----------------------------");
  console.log(`  Local: http://localhost:${port}`);
  console.log("  Press Ctrl+C to stop.");
  console.log("");
});

process.on("SIGINT", () => {
  server.close(() => process.exit(0));
});
