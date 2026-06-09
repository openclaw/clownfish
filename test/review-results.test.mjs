import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("review-results fails worker infrastructure auth blocks", () => {
  const dir = makeResultDir({
    status: "blocked",
    summary:
      "2026-06-09T05:41:01Z ERROR codex_api::endpoint::responses_websocket: failed to connect to websocket: HTTP error: 401 Unauthorized, url: wss://api.openai.com/v1/responses",
    needs_human: ["HTTP error: 401 Unauthorized"],
  });

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /worker infrastructure blocked/);
  assert.match(result.stdout, /401 Unauthorized/);
});

test("review-results fails explicit worker failed status", () => {
  const dir = makeResultDir({
    status: "failed",
    summary: "worker produced an invalid terminal result",
  });

  const result = review(dir);

  assert.notEqual(result.status, 0);
  assert.match(result.stdout, /worker result status is failed/);
});

test("review-results allows actionless blocked maintainer decisions", () => {
  const dir = makeResultDir({
    status: "blocked",
    summary: "needs maintainer choice between two live canonical issues",
    needs_human: ["choose canonical issue"],
  });

  const result = review(dir);

  assert.equal(result.status, 0, result.stdout || result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});

function makeResultDir(overrides) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-review-"));
  const result = {
    status: "planned",
    repo: "openclaw/openclaw",
    cluster_id: "cluster-test",
    mode: "plan",
    summary: "test result",
    actions: [],
    needs_human: [],
    ...overrides,
  };
  fs.writeFileSync(path.join(dir, "result.json"), `${JSON.stringify(result, null, 2)}\n`);
  return dir;
}

function review(dir) {
  return spawnSync(process.execPath, ["scripts/review-results.mjs", dir], {
    cwd: repoRoot,
    encoding: "utf8",
  });
}
