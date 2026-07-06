import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");
const script = path.join(repoRoot, "scripts", "assert-mutation-integrity.mjs");

test("mutation integrity fails on retryable applicator blocks", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-mutation-integrity-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.writeFileSync(
    path.join(root, "apply-report.json"),
    `${JSON.stringify(
      {
        actions: [
          {
            target: "#99842",
            action: "merge_canonical",
            status: "blocked",
            retry_recommended: true,
            transient_error: "github_rate_limit",
            reason: "GitHub rate limit while applying action",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const result = spawnSync(process.execPath, [script, root], {
    cwd: repoRoot,
    encoding: "utf8",
  });

  assert.equal(result.status, 1);
  assert.match(result.stderr, /retryable mutation failures require another run/);
  assert.match(result.stderr, /github_rate_limit/);
});

test("mutation integrity accepts terminal and non-retryable report rows", (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-mutation-integrity-"));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  fs.writeFileSync(
    path.join(root, "external-merge-preflight-report.json"),
    `${JSON.stringify(
      {
        actions: [
          {
            target: "#99842",
            status: "executed",
            apply_actions: [
              {
                target: "#99842",
                action: "merge_canonical",
                status: "executed",
              },
            ],
          },
          {
            target: "#98852",
            action: "merge_canonical",
            status: "blocked",
            retry_recommended: false,
            reason: "merge conflict",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  fs.writeFileSync(
    path.join(root, "apply-report.json"),
    `${JSON.stringify(
      {
        actions: [
          {
            target: "#99842",
            action: "merge_canonical",
            status: "executed",
          },
        ],
        apply_attempts: [
          {
            actions: [
              {
                target: "#99842",
                action: "merge_canonical",
                status: "blocked",
                retry_recommended: true,
                transient_error: "github_rate_limit",
              },
            ],
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const result = spawnSync(process.execPath, [script, root], {
    cwd: repoRoot,
    encoding: "utf8",
  });

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /"status": "passed"/);
});
