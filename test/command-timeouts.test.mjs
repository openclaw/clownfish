import assert from "node:assert/strict";
import { execFileSync, spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import vm from "node:vm";
import * as lib from "../scripts/lib.mjs";

const root = path.resolve(import.meta.dirname, "..");

function fixture(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-command-timeout-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const gh = path.join(dir, "gh");
  const calls = path.join(dir, "calls");
  const quotedCalls = "'" + calls.replaceAll("'", "'\\''") + "'";
  fs.writeFileSync(gh, `#!/bin/sh
if [ "$1" = --version ]; then exit 0; fi
printf 'call\\n' >> ${quotedCalls}
trap '' TERM
exec /bin/sleep 2
`, { mode: 0o755 });
  assert.equal(spawnSync(gh, ["--version"], { timeout: 10000 }).status, 0);
  return { dir, gh, calls };
}

function functions(file, names, context) {
  const source = fs.readFileSync(path.join(root, "scripts", file), "utf8");
  const bodies = names.map((name) => {
    const body = source.match(new RegExp(`^(?:async )?function ${name}\\([^]*?^\\}`, "m"))?.[0];
    assert.ok(body, `missing ${name} in ${file}`);
    return body;
  });
  return vm.runInNewContext(`${bodies.join("\n")}\n({${names.join(",")}})`, context);
}

const cases = [
  ["apply-result.mjs", ["ghOnce", "ghWithRetry"], "ghWithRetry", [["api", "fixture"]]],
  ["post-flight.mjs", ["ghWithRetry"], "ghWithRetry", [["api", "fixture"]]],
  ["finalize-open-prs.mjs", ["ghJson"], "ghJson", [["api", "fixture"]]],
  ["finalize-open-prs.mjs", ["dispatchRepair"], "dispatchRepair", [{ job_path: "fixture.md", mode: "plan" }]],
  ["comment-router.mjs", ["ghText"], "ghText", [["api", "fixture"]]],
  ["comment-router.mjs", ["dispatchRepair"], "dispatchRepair", [{ target: { job_path: "fixture.md", mode: "plan" } }]],
  ["comment-router.mjs", ["dispatchClawSweeperReview"], "dispatchClawSweeperReview", [{ repo: "example/repo", issue_number: 1 }]],
  ["comment-router.mjs", ["executeAutomerge"], "executeAutomerge", [{ repo: "example/repo", issue_number: 1, target: {} }]],
  ["publish-backlog.mjs", ["ghJson"], "ghJson", [["api", "fixture"]]],
];

for (const [file, names, entry, args] of cases) {
  test(`${file} ${entry} bounds a stalled child without retrying`, (t) => {
    const f = fixture(t);
    const env = { PATH: path.dirname(process.execPath), CLOWNFISH_GH_EXEC_TIMEOUT_MS: "500" };
    const context = {
      ...lib, execFileSync, spawnSync, fs, path, process: { ...process, env },
      repoRoot: () => f.dir, ghEnv: () => env, githubCliEnv: () => env,
      ghCommand: f.gh, workflow: "fixture.yml", clownfishRepo: "example/clownfish",
      clawsweeperRepo: "example/reviewer", clawsweeperWorkflow: "review.yml",
      runner: "fixture", executionRunner: "fixture", model: "fixture",
      stripAnsi: (value) => String(value ?? ""), shouldRetryGh: () => true,
      isTransientGhError: () => true, ghRetries: 2, ghRetryBaseMs: 1,
      childOptions: {},
      sleepMs: () => { throw new Error("unexpected retry"); },
      fetchPullRequestView: () => ({ labels: [], headRefOid: "a".repeat(40) }),
      validateAutomergeReadiness: () => null, automergeGateBlockReason: () => null,
      buildAutomergeMergeArgs: () => ["pr", "merge", "1"],
      console: { error() {}, warn() {} },
    };
    // Preserve the production command names while routing every child to the fixture.
    context.execFileSync = (_command, argv, options) => execFileSync(f.gh, argv, options);
    context.spawnSync = (_command, argv, options) => spawnSync(f.gh, argv, options);
    if (lib.execFileSyncWithTimeout) context.execFileSyncWithTimeout = (_command, argv, options) =>
      lib.execFileSyncWithTimeout(f.gh, argv, { ...options, timeout: 500 });
    if (lib.spawnSyncWithTimeout) context.spawnSyncWithTimeout = (_command, argv, options) =>
      lib.spawnSyncWithTimeout(f.gh, argv, { ...options, timeout: 500 });
    const api = functions(file, names, context);
    const start = Date.now();
    assert.throws(() => api[entry](...args), /timed out after 500ms/);
    assert.ok(Date.now() - start < 1800);
    assert.equal(fs.readFileSync(f.calls, "utf8"), "call\n");
  });
}

test("capacity waits enforce one deadline across all status queries", (t) => {
  const f = fixture(t);
  fs.writeFileSync(f.gh, `#!/bin/sh
if [ "$1" = --version ]; then exit 0; fi
printf 'call\\n' >> '${f.calls}'
/bin/sleep 0.2
printf '[{"workflow_runs":[]}]'
`, { mode: 0o755 });
  assert.equal(spawnSync(f.gh, ["--version"], { timeout: 10000 }).status, 0);
  const started = Date.now();
  assert.throws(() => lib.waitForLiveWorkerCapacity({
    repo: "example/repo", ghCommand: f.gh, timeoutMs: 500, pollMs: 1,
  }), /timed out waiting/);
  assert.ok(Date.now() - started < 1800);
  assert.ok(fs.readFileSync(f.calls, "utf8").trim().split("\n").length < 5);
});

test("async dispatch bounds children and reports the timeout", async (t) => {
  const f = fixture(t);
  const api = functions("dispatch-jobs.mjs", ["runCommand"], {
    ...lib, spawn, process, setTimeout, clearTimeout,
    repoRoot: () => f.dir,
  });
  const started = Date.now();
  const result = await api.runCommand(f.gh, [], "fixture.md", 1, null, null, 500);
  assert.notEqual(result.status, 0);
  assert.equal(result.timed_out, true);
  assert.match(result.stderr, /timed out after 500ms/);
  assert.ok(Date.now() - started < 1800);
});

test("unknown dispatch outcomes are retained and excluded from failed retry selection", () => {
  const api = functions("dispatch-jobs.mjs", ["dispatchAttempt"], {
    dispatchBatchId: "batch", repo: "example/repo", workflow: "worker.yml",
    repositoryBatchDispatch: false, repositoryWorkerDispatch: false,
    mode: "plan", runner: "fixture", executionRunner: "fixture", model: "fixture",
    ref: "main", headSha: "a".repeat(40), dispatchEvent: "workflow", stripAnsi: (value) => value,
  });
  const attempt = api.dispatchAttempt({ relative: "job.md", position: 1, timed_out: true, stderr: "timed out" }, "failed");
  assert.equal(attempt.status, "unknown");
  assert.equal(attempt.timed_out, true);
  const queue = functions("queue-status.mjs", ["filterByAttempt"], { attemptFilter: "failed" });
  assert.equal(queue.filterByAttempt([{ latest_dispatch_attempt: attempt }]).length, 0);
});

for (const [file, name] of [
  ["dispatch-jobs.mjs", "listRepoSecrets"], ["dispatch-jobs.mjs", "listRepoVariables"],
  ["queue-status.mjs", "readSecretNames"], ["queue-status.mjs", "readVariableNames"],
]) {
  test(`${file} ${name} warns when inspection times out`, (t) => {
    const f = fixture(t);
    const warnings = [];
    const context = {
      ...lib, execFileSync, spawnSync,
      execFileSyncWithTimeout: (command, argv, options) => lib.execFileSyncWithTimeout(command, argv, { ...options, timeout: 500 }),
      spawnSyncWithTimeout: (command, argv, options) => lib.spawnSyncWithTimeout(command, argv, { ...options, timeout: 500 }),
      repoRoot: () => f.dir, stripAnsi: (value) => String(value ?? ""),
      ghCommand: file === "queue-status.mjs" ? () => f.gh : f.gh,
      console: { warn: (message) => warnings.push(message) },
    };
    const api = functions(file, [name], context);
    assert.equal(api[name]("example/repo"), null);
    assert.match(warnings.join("\n"), /timed out after 500ms/);
    assert.equal(fs.readFileSync(f.calls, "utf8"), "call\n");
  });
}

test("dispatch reports a closed input pipe instead of crashing the process", async () => {
  const api = functions("dispatch-jobs.mjs", ["runCommand"], {
    ...lib, spawn, process, setTimeout, clearTimeout, repoRoot: () => root,
  });
  const result = await api.runCommand("/bin/sh", ["-c", "exec 0<&-; sleep 0.1"], "fixture", 1, "x".repeat(16 * 1024 * 1024));
  assert.equal(result.status, 1);
  assert.match(result.stderr, /EPIPE|ECONNRESET|write/);
});

test("invalid timeout settings cannot disable the subprocess deadline", () => {
  for (const value of ["", "0", "-1", "Infinity", "NaN", "1.5", String(2 ** 31)]) {
    assert.equal(lib.subprocessTimeoutMs(value), 120000);
  }
  assert.equal(lib.subprocessTimeoutMs("5000"), 5000);
});

for (const runner of ["execFileSyncWithTimeout", "spawnSyncWithTimeout"]) {
  test(`${runner} terminates descendants on timeout`, { skip: process.platform === "win32" }, (t) => {
    const f = fixture(t);
    const pidFile = path.join(f.dir, "descendant.pid");
    t.after(() => {
      if (fs.existsSync(pidFile)) {
        try { process.kill(Number(fs.readFileSync(pidFile, "utf8")), "SIGKILL"); } catch (error) {
          if (error.code !== "ESRCH") throw error;
        }
      }
    });
    const args = ["-c", '/bin/sleep 10 & echo $! > "$1"; wait', "fixture", pidFile];
    let timedOut;
    try {
      timedOut = lib[runner]("/bin/sh", args, { timeout: 500, encoding: "utf8" }).error;
    } catch (error) { timedOut = error; }
    assert.equal(timedOut?.code, "ETIMEDOUT");
    const pid = fs.readFileSync(pidFile, "utf8").trim();
    const state = spawnSync("ps", ["-o", "stat=", "-p", pid], { encoding: "utf8" }).stdout.trim();
    assert.ok(!state || state.startsWith("Z"), `descendant still running: ${state}`);
  });
}

test("unknown auto-repair dispatches still consume the per-head budget", () => {
  const command = { repo: "example/repo", issue_number: 1, target: { head_sha: "a".repeat(40) } };
  const api = functions("comment-router.mjs", ["autoRepairAlreadyPlanned"], {
    ledger: { commands: [{ ...command, intent: "clawsweeper_auto_repair", status: "unknown" }] },
    autoRepairHeadKey: () => "head", latestAutomergeResumeAt: () => 0,
    isAfterResumeBoundary: () => true, maxAutoRepairsPerPr: 5, maxAutoRepairsPerHead: 1,
    plannedAutoRepairHeads: new Set(),
  });
  assert.match(api.autoRepairAlreadyPlanned(command), /already attempted.*this PR head/);
});
