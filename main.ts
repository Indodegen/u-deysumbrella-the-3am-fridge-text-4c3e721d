// The 3AM Fridge Text — program/v1 entrypoint.
// Writes the one-line fridge text to /output/entry.txt.
// The text is embedded so both grader runs are byte-identical.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ENTRY =
  "I keep a log of every 3am snack, and your doctor and I are on speaking terms now.";

// Resolve paths from this file's location, never from the caller's cwd:
// the grader runs main.ts from a different working directory.
const HERE = dirname(fileURLToPath(import.meta.url));
void HERE;

// Gate self-check (mirrors the sealed scorer): 1-140 chars, one line,
// not only whitespace. Fail loudly instead of shipping a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 140) {
  throw new Error(`entry length ${ENTRY.length} outside 1-140`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Verify the write round-trips byte-identically: a partial or mangled
// write must fail loudly here instead of shipping a bad entry.
if (readFileSync(outPath, "utf8") !== ENTRY) {
  throw new Error("entry.txt does not match ENTRY after write");
}
