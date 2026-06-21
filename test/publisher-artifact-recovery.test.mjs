import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("backfill skips worker-only downloads without result artifacts", () => {
  const fixture = makeFixture();
  writeFakeGh(fixture.bin);

  const run = spawnSync(
    process.execPath,
    [
      "scripts/backfill-cluster-results.mjs",
      "--repo",
      "openclaw/clownfish",
      "--workflow",
      "cluster-worker.yml",
      "--limit",
      "1",
      "--lookback",
      "1",
      "--out",
      fixture.artifacts,
      "--runs-json",
      fixture.runsJson,
    ],
    {
      cwd: repoRoot,
      env: { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}` },
      encoding: "utf8",
    },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  assert.deepEqual(JSON.parse(fs.readFileSync(fixture.runsJson, "utf8")), []);

  const manifest = JSON.parse(fs.readFileSync(path.join(fixture.artifacts, "backfill-manifest.json"), "utf8"));
  assert.equal(manifest.downloaded.length, 0);
  assert.equal(manifest.skipped.length, 1);
  assert.match(manifest.skipped[0].reason, /did not contain result\.json/);
  assert.equal(fs.existsSync(path.join(fixture.artifacts, "projectclownfish-100-1")), false);
});

test("filter retains only runs with a surviving result artifact", () => {
  const fixture = makeFixture();
  const validResult = path.join(fixture.artifacts, "projectclownfish-100-1", "result.json");
  const failedResult = path.join(fixture.artifacts, "projectclownfish-200-1", "result.json");
  fs.mkdirSync(path.dirname(validResult), { recursive: true });
  fs.mkdirSync(path.dirname(failedResult), { recursive: true });
  fs.writeFileSync(validResult, "{}\n");
  fs.writeFileSync(failedResult, "{}\n");
  fs.writeFileSync(
    fixture.runsJson,
    `${JSON.stringify([{ run_id: "100" }, { run_id: "200" }, { run_id: "300" }], null, 2)}\n`,
  );
  fs.writeFileSync(
    fixture.reviewReport,
    `${JSON.stringify(
      {
        reports: [{ status: "failed", result: failedResult }],
      },
      null,
      2,
    )}\n`,
  );

  const run = spawnSync(
    process.execPath,
    [
      "scripts/filter-reviewed-artifacts.mjs",
      fixture.artifacts,
      "--review-report",
      fixture.reviewReport,
      "--runs-json",
      fixture.runsJson,
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  assert.deepEqual(JSON.parse(fs.readFileSync(fixture.runsJson, "utf8")), [{ run_id: "100" }]);
  assert.equal(fs.existsSync(`${failedResult}.failed`), true);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(fixture.artifacts, "review-terminal.json"), "utf8")).rejections, []);
});

test("filter records a validated terminal review rejection by exact matrix child run id", () => {
  const fixture = makeFixture();
  const failedResult = path.join(fixture.artifacts, "projectclownfish-200-1-3", "result.json");
  fs.mkdirSync(path.dirname(failedResult), { recursive: true });
  fs.writeFileSync(failedResult, "{}\n");
  fs.writeFileSync(fixture.runsJson, `${JSON.stringify([{ run_id: "200" }], null, 2)}\n`);
  fs.writeFileSync(
    fixture.reviewReport,
    `${JSON.stringify(
      {
        reports: [
          {
            status: "failed",
            result: failedResult,
            terminal_rejection: {
              code: "high_risk_close_target",
              targets: ["#91444", "#91446"],
            },
          },
        ],
      },
      null,
      2,
    )}\n`,
  );

  const run = spawnSync(
    process.execPath,
    [
      "scripts/filter-reviewed-artifacts.mjs",
      fixture.artifacts,
      "--review-report",
      fixture.reviewReport,
      "--runs-json",
      fixture.runsJson,
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  assert.deepEqual(JSON.parse(fs.readFileSync(fixture.runsJson, "utf8")), []);
  assert.deepEqual(JSON.parse(fs.readFileSync(path.join(fixture.artifacts, "review-terminal.json"), "utf8")).rejections, [
    {
      run_id: "200-1-3",
      workflow_run_id: "200",
      run_attempt: "1",
      matrix_index: "3",
      code: "high_risk_close_target",
      targets: ["#91444", "#91446"],
    },
  ]);
});

test("publisher defaults to successful runs and exits before reviewing an empty filtered set", () => {
  const workflow = fs.readFileSync(path.join(repoRoot, ".github/workflows/publish-results.yml"), "utf8");

  assert.match(workflow, /default: "success"/);
  assert.match(workflow, /BACKFILL_CONCLUSION: \${{ github\.event\.inputs\.conclusion \|\| 'success' }}/);
  assert.match(
    workflow,
    /filter-reviewed-artifacts[\s\S]*No review-passing cluster results or terminal rejections to publish/,
  );
  assert.match(workflow, /Publishing terminal review rejections without normal result artifacts/);
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-publisher-"));
  const artifacts = path.join(root, "artifacts");
  const bin = path.join(root, "bin");
  fs.mkdirSync(artifacts, { recursive: true });
  fs.mkdirSync(bin, { recursive: true });
  return {
    artifacts,
    bin,
    reviewReport: path.join(artifacts, "review-results.json"),
    runsJson: path.join(artifacts, "runs.json"),
  };
}

function writeFakeGh(bin) {
  const script = `#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
if (args[0] === "run" && args[1] === "list") {
  process.stdout.write(JSON.stringify([{
    databaseId: 100,
    status: "completed",
    conclusion: "success",
    createdAt: "2026-06-16T00:00:00Z",
    updatedAt: "2026-06-16T00:01:00Z",
    headSha: "abc",
    url: "https://example.invalid/runs/100"
  }]));
  process.exit(0);
}
if (args[0] === "api") {
  process.stdout.write(JSON.stringify([{ artifacts: [{ name: "projectclownfish-worker-100-1", expired: false }] }]));
  process.exit(0);
}
if (args[0] === "run" && args[1] === "download") {
  const destination = args[args.indexOf("--dir") + 1];
  fs.mkdirSync(path.join(destination, "projectclownfish-worker-100-1"), { recursive: true });
  fs.writeFileSync(path.join(destination, "projectclownfish-worker-100-1", "worker.json"), "{}\\n");
  process.exit(0);
}
process.stderr.write(\`unexpected gh invocation: \${args.join(" ")}\\n\`);
process.exit(1);
`;
  const file = path.join(bin, "gh");
  fs.writeFileSync(file, script, { mode: 0o755 });
}
