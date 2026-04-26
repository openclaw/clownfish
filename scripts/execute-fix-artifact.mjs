#!/usr/bin/env node
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { assertAllowedOwner, hasSecuritySignalText, parseArgs, parseJob, repoRoot, validateJob } from "./lib.mjs";

const FIX_ACTIONS = new Set(["fix_needed", "build_fix_artifact", "open_fix_pr"]);
const REPAIR_STRATEGIES = new Set(["repair_contributor_branch", "replace_uneditable_branch", "new_fix_pr"]);
const DEFAULT_BASE_BRANCH = "main";

const args = parseArgs(process.argv.slice(2));
const jobPath = args._[0];
const resultPathArg = args._[1];
const latest = Boolean(args.latest);
const dryRun = Boolean(args["dry-run"] || process.env.CLOWNFISH_FIX_DRY_RUN === "1");
const model = String(args.model ?? process.env.CLOWNFISH_MODEL ?? "gpt-5.4");
const codexTimeoutMs = Number(process.env.CLOWNFISH_FIX_CODEX_TIMEOUT_MS ?? 45 * 60 * 1000);

if (!jobPath) {
  console.error("usage: node scripts/execute-fix-artifact.mjs <job.md> [result.json] [--latest] [--dry-run]");
  process.exit(2);
}
if (!resultPathArg && !latest) {
  console.error("result path is required unless --latest is set");
  process.exit(2);
}

const job = parseJob(jobPath);
const jobErrors = validateJob(job);
if (jobErrors.length > 0) {
  console.error(jobErrors.join("\n"));
  process.exit(1);
}

assertAllowedOwner(job.frontmatter.repo, process.env.CLOWNFISH_ALLOWED_OWNER);

if (!["execute", "autonomous"].includes(job.frontmatter.mode)) {
  throw new Error("refusing fix execution: job frontmatter mode is not execute or autonomous");
}
if (process.env.CLOWNFISH_ALLOW_EXECUTE !== "1") {
  throw new Error("refusing fix execution: CLOWNFISH_ALLOW_EXECUTE must be 1");
}
if (process.env.CLOWNFISH_ALLOW_FIX_PR !== "1") {
  throw new Error("refusing fix execution: CLOWNFISH_ALLOW_FIX_PR must be 1");
}
if (!job.frontmatter.allowed_actions.includes("fix") || !job.frontmatter.allowed_actions.includes("raise_pr")) {
  throw new Error("refusing fix execution: job must allow fix and raise_pr");
}
if ((job.frontmatter.blocked_actions ?? []).includes("fix") || job.frontmatter.allow_fix_pr !== true) {
  throw new Error("refusing fix execution: fix is blocked by job frontmatter");
}

const resultPath = resultPathArg ? path.resolve(resultPathArg) : findLatestResultPath();
const result = JSON.parse(fs.readFileSync(resultPath, "utf8"));
if (result.repo !== job.frontmatter.repo) {
  throw new Error(`result repo ${result.repo} does not match job repo ${job.frontmatter.repo}`);
}
if (result.cluster_id !== job.frontmatter.cluster_id) {
  throw new Error(`result cluster ${result.cluster_id} does not match job cluster ${job.frontmatter.cluster_id}`);
}
if (result.mode !== job.frontmatter.mode) {
  throw new Error(`result mode ${result.mode} does not match job mode ${job.frontmatter.mode}`);
}

const plannedFixActions = (result.actions ?? []).filter(
  (action) => FIX_ACTIONS.has(String(action.action ?? "")) && action.status === "planned",
);
const report = {
  repo: result.repo,
  cluster_id: result.cluster_id,
  dry_run: dryRun,
  result_path: path.relative(repoRoot(), resultPath),
  executed_at: new Date().toISOString(),
  actions: [],
};

if (plannedFixActions.length === 0) {
  report.status = "skipped";
  report.reason = "no planned fix actions";
  writeReport(report, resultPath);
  process.exit(0);
}

const fixArtifact = validateFixArtifact(result.fix_artifact);
if (hasSecuritySignalText(job.raw, result.summary, fixArtifact, plannedFixActions)) {
  throw new Error("refusing fix execution: security-sensitive signal detected");
}

const workRoot =
  typeof args["work-dir"] === "string"
    ? path.resolve(args["work-dir"])
    : fs.mkdtempSync(path.join(os.tmpdir(), "projectclownfish-fix-"));
const targetDir =
  typeof args["target-dir"] === "string"
    ? path.resolve(args["target-dir"])
    : path.join(workRoot, result.repo.replace("/", "-"));

ensureTargetCheckout(result.repo, targetDir);
setupGitIdentity(targetDir);

let outcome;
if (fixArtifact.repair_strategy === "repair_contributor_branch") {
  try {
    outcome = executeRepairBranch({ fixArtifact, targetDir });
  } catch (error) {
    report.actions.push({
      action: "repair_contributor_branch",
      status: "failed",
      reason: error.message,
    });
    outcome = executeReplacementBranch({ fixArtifact, targetDir, supersedeSources: true, fallbackReason: error.message });
  }
} else {
  outcome = executeReplacementBranch({
    fixArtifact,
    targetDir,
    supersedeSources: fixArtifact.repair_strategy === "replace_uneditable_branch",
  });
}

report.status = outcome.status;
report.actions.push(outcome);
writeReport(report, resultPath);

function executeRepairBranch({ fixArtifact, targetDir }) {
  const sourcePr = firstSourcePullRequest(fixArtifact);
  const pull = fetchPullRequest(sourcePr.number);
  if (pull.state !== "open") throw new Error(`source PR #${sourcePr.number} is ${pull.state}`);
  if (pull.maintainer_can_modify !== true) throw new Error(`source PR #${sourcePr.number} has maintainer_can_modify=false`);
  if (!pull.head?.repo?.full_name || !pull.head?.ref) throw new Error(`source PR #${sourcePr.number} is missing head repo/ref`);

  const branch = safeBranchName(`projectclownfish/repair-${result.cluster_id}-${sourcePr.number}`);
  run("git", ["fetch", `https://github.com/${pull.head.repo.full_name}.git`, `${pull.head.ref}:${branch}`], { cwd: targetDir });
  run("git", ["checkout", branch], { cwd: targetDir });

  const commit = editValidateCommit({ fixArtifact, targetDir, branch, mode: "repair" });
  if (dryRun) {
    return {
      action: "repair_contributor_branch",
      status: "planned",
      target: sourcePr.url,
      commit,
    };
  }

  ghAuthSetupGit(targetDir);
  run("git", ["push", `https://github.com/${pull.head.repo.full_name}.git`, `HEAD:${pull.head.ref}`], { cwd: targetDir });
  const comment = [
    "ProjectClownfish pushed a narrow repair to this branch so the original contributor path can stay canonical.",
    "",
    `Source PR: ${sourcePr.url}`,
    `Validation: ${fixArtifact.validation_commands.join("; ")}`,
    "Contributor credit is preserved in the branch history and PR context.",
  ].join("\n");
  run("gh", ["pr", "comment", String(sourcePr.number), "--repo", result.repo, "--body", comment], { cwd: targetDir, env: ghEnv() });
  return {
    action: "repair_contributor_branch",
    status: "pushed",
    target: sourcePr.url,
    head_repo: pull.head.repo.full_name,
    head_ref: pull.head.ref,
    commit,
  };
}

function executeReplacementBranch({ fixArtifact, targetDir, supersedeSources, fallbackReason }) {
  const baseBranch = String(process.env.CLOWNFISH_FIX_BASE_BRANCH ?? DEFAULT_BASE_BRANCH);
  run("git", ["fetch", "origin", baseBranch], { cwd: targetDir });
  const branch = safeBranchName(`projectclownfish/${result.cluster_id}-fix`);
  run("git", ["checkout", "-B", branch, `origin/${baseBranch}`], { cwd: targetDir });

  const commit = editValidateCommit({ fixArtifact, targetDir, branch, mode: "replacement", fallbackReason });
  const body = replacementPrBody(fixArtifact, fallbackReason);
  if (dryRun) {
    return {
      action: "open_fix_pr",
      status: "planned",
      branch,
      commit,
      supersede_sources: supersedeSources ? fixArtifact.source_prs ?? [] : [],
    };
  }

  ghAuthSetupGit(targetDir);
  run("git", ["push", "--force-with-lease", "origin", `HEAD:${branch}`], { cwd: targetDir });
  const bodyPath = path.join(workRoot, "replacement-pr-body.md");
  fs.writeFileSync(bodyPath, body);
  const prUrl =
    findOpenPullRequestForBranch(branch, targetDir) ||
    run(
      "gh",
      ["pr", "create", "--repo", result.repo, "--base", baseBranch, "--head", branch, "--title", fixArtifact.pr_title, "--body-file", bodyPath],
      { cwd: targetDir, env: ghEnv() },
    ).trim();

  if (supersedeSources) {
    for (const source of fixArtifact.source_prs ?? []) {
      const parsed = parsePullRequestUrl(source);
      if (!parsed || parsed.repo !== result.repo) continue;
      const comment = [
        "ProjectClownfish could not safely update this branch, so it opened a narrow replacement PR instead.",
        "",
        `Replacement PR: ${prUrl}`,
        `Source PR: ${source}`,
        "Contributor credit is preserved in the replacement PR body and changelog plan.",
      ].join("\n");
      run("gh", ["pr", "comment", String(parsed.number), "--repo", result.repo, "--body", comment], {
        cwd: targetDir,
        env: ghEnv(),
      });
      run("gh", ["pr", "close", String(parsed.number), "--repo", result.repo], { cwd: targetDir, env: ghEnv() });
    }
  }

  return {
    action: "open_fix_pr",
    status: "opened",
    pr_url: prUrl,
    branch,
    commit,
    superseded_sources: supersedeSources ? fixArtifact.source_prs ?? [] : [],
  };
}

function editValidateCommit({ fixArtifact, targetDir, branch, mode, fallbackReason }) {
  const prompt = buildFixPrompt({ fixArtifact, branch, mode, fallbackReason });
  const summaryPath = path.join(workRoot, `${mode}-codex-summary.md`);
  const codexResult = spawnSync(
    "codex",
    [
      "exec",
      "--cd",
      targetDir,
      "--model",
      model,
      "--sandbox",
      "workspace-write",
      "-c",
      'approval_policy="never"',
      "--output-last-message",
      summaryPath,
      "--ephemeral",
      "--json",
      "-",
    ],
    {
      cwd: targetDir,
      input: prompt,
      encoding: "utf8",
      env: codexEnv(),
      timeout: codexTimeoutMs,
    },
  );
  fs.writeFileSync(path.join(workRoot, `${mode}-codex.jsonl`), codexResult.stdout ?? "");
  if (codexResult.stderr) fs.writeFileSync(path.join(workRoot, `${mode}-codex.stderr.log`), codexResult.stderr);
  if (codexResult.error?.code === "ETIMEDOUT") {
    throw new Error(`Codex fix worker timed out after ${codexTimeoutMs}ms`);
  }
  if (codexResult.status !== 0) {
    throw new Error(codexResult.stderr || codexResult.stdout || "Codex fix worker failed");
  }

  const status = run("git", ["status", "--porcelain"], { cwd: targetDir }).trim();
  if (!status) throw new Error("Codex produced no target repo changes");

  runAllowedValidationCommands(fixArtifact.validation_commands, targetDir);
  run("git", ["diff", "--check"], { cwd: targetDir });
  run("git", ["add", "--all"], { cwd: targetDir });
  run("git", ["commit", "-m", fixArtifact.pr_title], { cwd: targetDir });
  return run("git", ["rev-parse", "HEAD"], { cwd: targetDir }).trim();
}

function buildFixPrompt({ fixArtifact, branch, mode, fallbackReason }) {
  return [
    "You are editing the target repository for ProjectClownfish.",
    "",
    "Rules:",
    "- make the narrowest code change that satisfies the fix artifact;",
    "- stay inside likely_files unless the repo proves a nearby support file/test is required;",
    "- preserve contributor credit in changelog/docs when the fix is user-facing;",
    "- address review-bot concerns named in the artifact;",
    "- do not commit, push, open PRs, close PRs, or call gh;",
    "- do not touch security-sensitive code unless the artifact explicitly proves this is non-security work.",
    "",
    `Mode: ${mode}`,
    `Branch: ${branch}`,
    fallbackReason ? `Fallback reason: ${fallbackReason}` : "",
    "",
    "Fix artifact:",
    "```json",
    JSON.stringify(fixArtifact, null, 2),
    "```",
  ]
    .filter(Boolean)
    .join("\n");
}

function replacementPrBody(fixArtifact, fallbackReason) {
  const lines = [
    fixArtifact.pr_body.trim(),
    "",
    "ProjectClownfish replacement details:",
    `- Cluster: ${result.cluster_id}`,
    `- Source PRs: ${(fixArtifact.source_prs ?? []).join(", ") || "none"}`,
    `- Credit: ${fixArtifact.credit_notes.join("; ")}`,
    `- Validation: ${fixArtifact.validation_commands.join("; ")}`,
  ];
  if (fallbackReason) lines.push(`- Repair fallback: ${fallbackReason}`);
  return `${lines.join("\n")}\n`;
}

function validateFixArtifact(fixArtifact) {
  if (!fixArtifact || typeof fixArtifact !== "object") {
    throw new Error("fix execution requires fix_artifact");
  }
  for (const key of ["summary", "pr_title", "pr_body"]) {
    if (typeof fixArtifact[key] !== "string" || !fixArtifact[key].trim()) {
      throw new Error(`fix_artifact.${key} is required`);
    }
  }
  for (const key of ["affected_surfaces", "likely_files", "linked_refs", "validation_commands", "credit_notes"]) {
    if (!Array.isArray(fixArtifact[key]) || fixArtifact[key].length === 0) {
      throw new Error(`fix_artifact.${key} must be a non-empty list`);
    }
  }
  if (typeof fixArtifact.changelog_required !== "boolean") {
    throw new Error("fix_artifact.changelog_required must be boolean");
  }
  if (!REPAIR_STRATEGIES.has(fixArtifact.repair_strategy)) {
    throw new Error("fix_artifact.repair_strategy is not executable");
  }
  if (fixArtifact.repair_strategy !== "new_fix_pr" && (!Array.isArray(fixArtifact.source_prs) || fixArtifact.source_prs.length === 0)) {
    throw new Error("repair/replacement fix_artifact must list source_prs");
  }
  return fixArtifact;
}

function ensureTargetCheckout(repo, targetDir) {
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(path.dirname(targetDir), { recursive: true });
    run("gh", ["repo", "clone", repo, targetDir, "--", "--depth=1"], { cwd: repoRoot(), env: ghEnv() });
    return;
  }
  if (!fs.existsSync(path.join(targetDir, ".git"))) {
    throw new Error(`target dir is not a git checkout: ${targetDir}`);
  }
  const status = run("git", ["status", "--porcelain"], { cwd: targetDir }).trim();
  if (status) throw new Error(`target checkout has uncommitted changes: ${targetDir}`);
}

function setupGitIdentity(cwd) {
  run("git", ["config", "user.name", process.env.CLOWNFISH_GIT_USER_NAME ?? "projectclownfish"], { cwd });
  run("git", ["config", "user.email", process.env.CLOWNFISH_GIT_USER_EMAIL ?? "projectclownfish@users.noreply.github.com"], { cwd });
}

function runAllowedValidationCommands(commands, cwd) {
  for (const command of commands) {
    const parts = parseAllowedValidationCommand(command);
    run(parts[0], parts.slice(1), { cwd });
  }
}

function parseAllowedValidationCommand(command) {
  const text = String(command ?? "").trim();
  if (!text) throw new Error("empty validation command");
  if (/[`$;&|<>()[\]{}*?~]/.test(text)) {
    throw new Error(`unsafe validation command: ${text}`);
  }
  const parts = text.split(/\s+/);
  if (!["pnpm", "npm", "node", "git"].includes(parts[0])) {
    throw new Error(`unsupported validation command: ${text}`);
  }
  return parts;
}

function firstSourcePullRequest(fixArtifact) {
  for (const source of fixArtifact.source_prs ?? []) {
    const parsed = parsePullRequestUrl(source);
    if (parsed && parsed.repo === result.repo) return parsed;
  }
  throw new Error("fix_artifact.source_prs must include a source PR in the target repo");
}

function parsePullRequestUrl(value) {
  const match = String(value ?? "").match(/^https:\/\/github\.com\/([^/\s]+\/[^/\s]+)\/pull\/(\d+)/);
  if (!match) return null;
  return { repo: match[1], number: Number(match[2]), url: `https://github.com/${match[1]}/pull/${match[2]}` };
}

function fetchPullRequest(number) {
  return JSON.parse(run("gh", ["api", `repos/${result.repo}/pulls/${number}`], { cwd: repoRoot(), env: ghEnv() }));
}

function findOpenPullRequestForBranch(branch, cwd) {
  return run(
    "gh",
    ["pr", "list", "--repo", result.repo, "--head", branch, "--state", "open", "--json", "url", "--jq", ".[0].url // \"\""],
    { cwd, env: ghEnv() },
  ).trim();
}

function safeBranchName(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9/_-]+/g, "-")
    .replace(/\/+/g, "/")
    .replace(/^-+|-+$/g, "")
    .slice(0, 120);
}

function findLatestResultPath() {
  const runsRoot = path.join(repoRoot(), ".projectclownfish", "runs");
  if (!fs.existsSync(runsRoot)) throw new Error("no run directory exists");
  const candidates = [];
  for (const runName of fs.readdirSync(runsRoot)) {
    const candidate = path.join(runsRoot, runName, "result.json");
    if (fs.existsSync(candidate)) candidates.push({ path: candidate, mtimeMs: fs.statSync(candidate).mtimeMs });
  }
  candidates.sort((left, right) => right.mtimeMs - left.mtimeMs);
  if (!candidates[0]) throw new Error("no result.json files found");
  return candidates[0].path;
}

function writeReport(report, resultPath) {
  const reportPath =
    typeof args.report === "string"
      ? path.resolve(args.report)
      : path.join(path.dirname(resultPath), "fix-execution-report.json");
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`);
  console.log(JSON.stringify(report, null, 2));
}

function ghAuthSetupGit(cwd) {
  run("gh", ["auth", "setup-git"], { cwd, env: ghEnv() });
}

function ghEnv() {
  return { ...process.env, GH_TOKEN: process.env.CLOWNFISH_GH_TOKEN || process.env.GH_TOKEN };
}

function codexEnv() {
  const env = { ...process.env };
  delete env.GH_TOKEN;
  delete env.GITHUB_TOKEN;
  delete env.CLOWNFISH_GH_TOKEN;
  delete env.CLOWNFISH_READ_GH_TOKEN;
  delete env.CLOWNFISH_CODEX_GH_TOKEN;
  return env;
}

function run(command, commandArgs, options = {}) {
  const child = spawnSync(command, commandArgs, {
    cwd: options.cwd,
    env: options.env ?? process.env,
    input: options.input,
    encoding: "utf8",
  });
  if (child.status !== 0) {
    const detail = child.stderr || child.stdout || `${command} exited ${child.status}`;
    throw new Error(detail.trim());
  }
  return child.stdout ?? "";
}
