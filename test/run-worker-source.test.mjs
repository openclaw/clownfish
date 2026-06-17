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

test("run-worker verifies a supplied target checkout before using it for Codex", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "run-worker.mjs"), "utf8");

  assert.match(source, /const targetCheckout = resolveTargetCheckout\(job\.frontmatter\.repo\);/);
  assert.match(source, /if \(targetCheckout\.error\) \{\s*writeBlockedResult\(targetCheckout\.error\);/s);
  assert.match(source, /\["rev-parse", "--is-inside-work-tree"\]/);
  assert.match(source, /\["config", "--get", "remote\.origin\.url"\]/);
  assert.match(source, /CLOWNFISH_TARGET_CHECKOUT origin repo mismatch/);
  assert.match(source, /const codexWorkingDir = targetCheckout\.path \?\? repoRoot\(\);/);
});

test("run-worker runs Codex from the verified target checkout", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "run-worker.mjs"), "utf8");

  assert.match(source, /"--cd",\s*codexWorkingDir/);
  assert.match(source, /spawnSync\("codex", codexArgs, \{\s*cwd: codexWorkingDir,/s);
});

test("run-worker uses an Actions-safe sandbox without exposing credentials to Codex", () => {
  const source = fs.readFileSync(path.join(repoRoot, "scripts", "run-worker.mjs"), "utf8");

  assert.match(
    source,
    /const defaultCodexWorkerSandbox = process\.env\.GITHUB_ACTIONS === "true" \? "danger-full-access" : "read-only";/,
  );
  assert.match(source, /CLOWNFISH_CODEX_WORKER_SANDBOX \?\? defaultCodexWorkerSandbox/);
  assert.match(source, /"--sandbox",\s*codexWorkerSandbox/);
  assert.match(source, /if \(process\.env\.GITHUB_ACTIONS === "true"\) \{\s*delete env\.OPENAI_API_KEY;\s*delete env\.CODEX_API_KEY;/s);
});
