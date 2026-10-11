// Builds share/ask.html from share/ask.template.html by inlining every knowledge/*.md file.
// Run after knowledge changes: node share/build-ask.mjs
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const kdir = join(root, "knowledge");
const files = readdirSync(kdir).filter(f => f.endsWith(".md")).sort((a, b) =>
  // README first (glossary, client version), sources last
  (a === "README.md" ? -1 : b === "README.md" ? 1 : 0) ||
  (a === "sources.md" ? 1 : b === "sources.md" ? -1 : 0) || a.localeCompare(b));

const kb = files.map(f => ({ file: f, text: readFileSync(join(kdir, f), "utf8") }));
const client = (kb[0].text.match(/\*\*Current client:\*\*\s*([^\n]+)/) || [])[1] || "unknown";
const built = new Date().toISOString().slice(0, 10);

// JSON inside <script>: escape "<" so no file can close the tag early
const json = JSON.stringify({ built, client, files: kb }).replace(/</g, "\\u003c");

const tpl = readFileSync(join(root, "share", "ask.template.html"), "utf8");
if (!tpl.includes("/*KB*/null")) throw new Error("placeholder /*KB*/null missing in template");
const out = tpl.replace("/*KB*/null", () => json);
writeFileSync(join(root, "share", "ask.html"), out);
console.log(`ask.html: ${kb.length} files, ${(Buffer.byteLength(json) / 1024).toFixed(0)} KiB knowledge, built ${built}`);
