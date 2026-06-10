import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("run-worker gives Codex JSON transcripts an explicit stdout buffer", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "run-worker.mjs"), "utf8");

  assert.match(source, /CLOWNFISH_CODEX_STDOUT_MAX_BUFFER_BYTES/);
  assert.match(source, /maxBuffer:\s*codexStdoutMaxBufferBytes/);
  assert.match(source, /child\.error\?\.code === "ENOBUFS"/);
});
