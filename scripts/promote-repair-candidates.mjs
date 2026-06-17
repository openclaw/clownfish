#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, parseJob, parseSimpleYaml, repoRoot, validateJob } from "./lib.mjs";

const REPAIR_ACTIONS = new Set(["fix_needed", "build_fix_artifact", "open_fix_pr"]);
const EXECUTABLE_STRATEGIES = new Set(["repair_contributor_branch", "replace_uneditable_branch", "new_fix_pr"]);
const TERMINAL_FIX_STATUSES = new Set(["executed", "opened", "pushed", "merged", "closed", "already_closed"]);
const maxAutonomousFixFiles = Math.max(1, Number(process.env.CLOWNFISH_MAX_AUTONOMOUS_FIX_FILES ?? 8));

const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? "openclaw/openclaw");
const owner = repo.split("/")[0];
const resultsDir = path.resolve(repoRoot(), String(args["results-dir"] ?? args.results_dir ?? path.join("results", owner)));
const outDir = path.resolve(repoRoot(), String(args.out ?? path.join("jobs", owner, "inbox")));
const existingDir = path.resolve(repoRoot(), String(args["existing-dir"] ?? args.existing_dir ?? path.join("jobs", owner)));
const limit = numberArg("limit", 20);
const suffix = sanitizeSuffix(String(args.suffix ?? todayStamp()));
const write = Boolean(args.write);
const jsonOutput = Boolean(args.json);

if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) die("--repo must be owner/repo");
if (!fs.existsSync(resultsDir)) die(`results dir not found: ${path.relative(repoRoot(), resultsDir)}`);

const existingRefs = findExistingJobRefs([existingDir, outDir]);
const reports = listReports(resultsDir);
const latestCandidates = latestByTarget(reports.flatMap(candidateRowsFromReport));
const selected = [];
const skipped = [];

for (const candidate of latestCandidates) {
  const reason = promotionBlocker(candidate, existingRefs);
  if (reason) {
    skipped.push({ ...publicCandidate(candidate), reason });
    continue;
  }
  selected.push(candidate);
  if (selected.length >= limit) break;
}

if (write) fs.mkdirSync(outDir, { recursive: true });
const generated = selected.map((candidate) => writeJob(candidate));
const payload = {
  status: write ? "written" : "dry_run",
  repo,
  results_dir: path.relative(repoRoot(), resultsDir),
  out_dir: path.relative(repoRoot(), outDir),
  existing_dir: path.relative(repoRoot(), existingDir),
  generated,
  skipped,
  totals: {
    reports: reports.length,
    latest_candidates: latestCandidates.length,
    selected: selected.length,
    generated: generated.length,
    skipped: skipped.length,
    existing_refs: existingRefs.size,
  },
};

if (jsonOutput) {
  console.log(JSON.stringify(payload, null, 2));
} else {
  for (const item of generated) console.log(item.path);
  console.error(
    `status=${payload.status} reports=${reports.length} latest=${latestCandidates.length} selected=${selected.length} generated=${generated.length} skipped=${skipped.length}`,
  );
}

function listReports(root) {
  return fs
    .readdirSync(root, { recursive: true })
    .map((entry) => path.join(root, String(entry)))
    .filter((file) => file.endsWith(".md") && fs.statSync(file).isFile())
    .map((file) => readReport(file))
    .filter(Boolean);
}

function readReport(file) {
  const raw = fs.readFileSync(file, "utf8");
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!match) return null;
  let frontmatter;
  try {
    frontmatter = parseSimpleYaml(match[1]);
  } catch {
    return null;
  }
  const repairCandidate = repairCandidateFromMarkdown(match[2]);
  if (!repairCandidate) return null;
  return {
    file,
    relative: path.relative(repoRoot(), file),
    raw,
    frontmatter,
    repair_candidate: repairCandidate,
    published_at: dateValue(frontmatter.published_at),
    worker_actions: parseTable(match[2], "Worker Action Matrix"),
    fix_actions: parseTable(match[2], "Fix Execution Actions"),
  };
}

function repairCandidateFromMarkdown(body) {
  const match = body.match(/(?:^|\n)## Repair Candidate\n+```json\n([\s\S]*?)\n```\s*(?=\n## |\s*$)/);
  if (!match) return null;
  try {
    const parsed = JSON.parse(match[1]);
    return parsed && typeof parsed === "object" ? parsed.repair_candidate ?? parsed : null;
  } catch {
    return null;
  }
}

function candidateRowsFromReport(report) {
  const candidate = report.repair_candidate;
  const sourceRefs = normalizeRefs(candidate.source_refs ?? candidate.source_prs ?? candidate.refs ?? []);
  const target = normalizeRef(candidate.target ?? candidate.target_ref ?? sourceRefs[0]);
  const plannedActions = Array.isArray(candidate.planned_actions)
    ? candidate.planned_actions
    : [candidate.planned_action ?? candidate.action].filter(Boolean);
  return [{
    ...report,
    target,
    source_refs: sourceRefs,
    repair_strategy: String(candidate.repair_strategy ?? ""),
    planned_actions: plannedActions.map(String),
    candidate,
  }].filter((row) => row.target);
}

function latestByTarget(candidates) {
  const byTarget = new Map();
  for (const candidate of candidates) {
    const previous = byTarget.get(candidate.target);
    if (!previous || candidateSort(previous, candidate) < 0) byTarget.set(candidate.target, candidate);
  }
  return [...byTarget.values()].sort((left, right) => candidateSort(right, left));
}

function candidateSort(left, right) {
  return left.published_at - right.published_at || left.relative.localeCompare(right.relative);
}

function promotionBlocker(candidate, existingRefs) {
  if (candidate.frontmatter.repo !== repo) return "report repo does not match --repo";
  if (candidate.frontmatter.result_status !== "planned") return "result is not planned";
  if (!candidateIsComplete(candidate)) return "repair candidate is incomplete";
  if (!EXECUTABLE_STRATEGIES.has(candidate.repair_strategy)) return "repair strategy is not executable";
  if (!hasPlannedRepairAction(candidate)) return "no planned repair action";
  if (hasSecuritySignal(candidate)) return "security-sensitive candidate";
  if (hasHumanHold(candidate)) return "candidate requires human review";
  if (arrayOfStrings(candidate.candidate.likely_files).length > maxAutonomousFixFiles) {
    return `repair candidate exceeds autonomous file limit (${maxAutonomousFixFiles})`;
  }
  if (hasTerminalRepairOutcome(candidate)) return "repair already has a terminal outcome";
  if (candidate.source_refs.some((ref) => existingRefs.has(ref))) return "source ref already has a job";
  return "";
}

function candidateIsComplete(candidate) {
  const artifact = candidate.candidate;
  return (
    candidate.source_refs.length > 0 &&
    typeof artifact.summary === "string" &&
    artifact.summary.trim() !== "" &&
    typeof artifact.pr_title === "string" &&
    artifact.pr_title.trim() !== "" &&
    typeof artifact.pr_body === "string" &&
    artifact.pr_body.trim() !== "" &&
    arrayOfStrings(artifact.likely_files).length > 0 &&
    arrayOfStrings(artifact.validation_commands).length > 0 &&
    arrayOfStrings(artifact.credit_notes).length > 0
  );
}

function hasPlannedRepairAction(candidate) {
  if (candidate.planned_actions.some((action) => REPAIR_ACTIONS.has(action))) return true;
  return candidate.worker_actions.some(
    (action) => REPAIR_ACTIONS.has(action.action) && action.status === "planned" && normalizeRef(action.target) === candidate.target,
  );
}

function hasSecuritySignal(candidate) {
  if (candidate.candidate.security_sensitive === true || candidate.frontmatter.security_sensitive === true) return true;
  return candidate.worker_actions.some(
    (action) => action.action === "route_security" || action.classification === "security_sensitive",
  );
}

function hasHumanHold(candidate) {
  if (Number(candidate.frontmatter.needs_human_count ?? 0) > 0) return true;
  if (Array.isArray(candidate.candidate.needs_human) && candidate.candidate.needs_human.length > 0) return true;
  return candidate.worker_actions.some((action) => action.action === "needs_human");
}

function hasTerminalRepairOutcome(candidate) {
  if (TERMINAL_FIX_STATUSES.has(String(candidate.candidate.repair_status ?? "").toLowerCase())) return true;
  if (Number(candidate.frontmatter.fix_executed ?? 0) > 0) return true;
  return candidate.fix_actions.some((action) => TERMINAL_FIX_STATUSES.has(action.status));
}

function findExistingJobRefs(roots) {
  const refs = new Set();
  const files = new Set();
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for (const entry of fs.readdirSync(root, { recursive: true })) {
      const file = path.join(root, String(entry));
      if (!file.endsWith(".md") || !fs.statSync(file).isFile() || files.has(file)) continue;
      files.add(file);
      try {
        const job = parseJob(file);
        if (job.frontmatter.mode === "plan") continue;
        const allowedActions = new Set(job.frontmatter.allowed_actions ?? []);
        if (!allowedActions.has("fix") && !allowedActions.has("raise_pr")) continue;
        for (const ref of [...(job.frontmatter.canonical ?? []), ...(job.frontmatter.candidates ?? []), ...(job.frontmatter.cluster_refs ?? [])]) {
          const normalized = normalizeRef(ref);
          if (normalized) refs.add(normalized);
        }
      } catch {
        // Existing malformed files should not prevent a conservative promotion scan.
      }
    }
  }
  return refs;
}

function writeJob(candidate) {
  const clusterId = `repair-${candidate.target.slice(1)}-${sanitizeSuffix(candidate.frontmatter.cluster_id)}-${suffix}`;
  const filePath = path.join(outDir, `${clusterId}.md`);
  const relative = path.relative(repoRoot(), filePath);
  if (fs.existsSync(filePath)) die(`job already exists: ${relative}`);
  const markdown = renderJob(candidate, clusterId);
  if (write) {
    fs.writeFileSync(filePath, markdown, "utf8");
    const errors = validateJob(parseJob(filePath));
    if (errors.length > 0) {
      fs.rmSync(filePath, { force: true });
      die(`generated invalid job ${relative}: ${errors.join("; ")}`);
    }
  }
  return {
    path: relative,
    cluster_id: clusterId,
    target: candidate.target,
    source_refs: candidate.source_refs,
    repair_strategy: candidate.repair_strategy,
    source_report: candidate.relative,
  };
}

function renderJob(candidate, clusterId) {
  const artifact = candidate.candidate;
  const branch = `clownfish/${clusterId}`.slice(0, 120);
  const refs = candidate.source_refs;
  const provenance = [
    `- source report: ${candidate.relative}`,
    `- source cluster: ${candidate.frontmatter.cluster_id ?? "unknown"}`,
    `- source run: ${candidate.frontmatter.run_id ?? "unknown"}`,
    `- source job: ${artifact.source_job ?? candidate.frontmatter.source_job ?? "unknown"}`,
    `- repair strategy: ${candidate.repair_strategy}`,
  ];
  return [
    "---",
    `repo: ${quoteYaml(repo)}`,
    `cluster_id: ${quoteYaml(clusterId)}`,
    "mode: autonomous",
    "allowed_actions:",
    "  - fix",
    "  - raise_pr",
    "blocked_actions:",
    "  - comment",
    "  - label",
    "  - close",
    "  - merge",
    "  - force_push",
    "  - bypass_checks",
    "require_human_for:",
    "  - security_sensitive",
    "  - active_author_followup",
    "  - broad_code_delta",
    "canonical:",
    `  - ${quoteYaml(candidate.target)}`,
    "candidates:",
    ...refs.map((ref) => `  - ${quoteYaml(ref)}`),
    "cluster_refs:",
    ...refs.map((ref) => `  - ${quoteYaml(ref)}`),
    "allow_instant_close: false",
    "allow_fix_pr: true",
    "allow_merge: false",
    "allow_unmerged_fix_close: false",
    "allow_post_merge_close: false",
    "require_fix_before_close: true",
    "security_policy: central_security_only",
    "security_sensitive: false",
    `target_branch: ${quoteYaml(branch)}`,
    "source: planner_promotion",
    `source_result: ${quoteYaml(candidate.relative)}`,
    `source_cluster_id: ${quoteYaml(String(candidate.frontmatter.cluster_id ?? ""))}`,
    `source_run_id: ${quoteYaml(String(candidate.frontmatter.run_id ?? ""))}`,
    `repair_strategy: ${quoteYaml(candidate.repair_strategy)}`,
    "---",
    "",
    `# Repair Promotion ${candidate.target}`,
    "",
    "## Scope",
    "",
    artifact.summary.trim(),
    "",
    "## Provenance",
    "",
    ...provenance,
    "",
    "## Source Refs",
    "",
    ...refs.map((ref) => `- ${ref}`),
    "",
    "## Planned Repair",
    "",
    `- proposed PR title: ${artifact.pr_title.trim()}`,
    "",
    artifact.pr_body.trim(),
    "",
    "## Likely Files",
    "",
    ...arrayOfStrings(artifact.likely_files).map((file) => `- ${file}`),
    "",
    "## Validation",
    "",
    ...arrayOfStrings(artifact.validation_commands).map((command) => `- ${command}`),
    "",
    "## Credit",
    "",
    ...arrayOfStrings(artifact.credit_notes).map((note) => `- ${note}`),
    "",
    "## Guardrails",
    "",
    `- Re-fetch ${candidate.target} and current main before editing. This promotion is evidence, not a substitute for fresh preflight.`,
    "- Do not comment, label, close, merge, force-push, or bypass checks.",
    "- If the repair is no longer narrow, active, safe, or actionable, emit a blocked artifact with the exact reason.",
    "",
  ].join("\n");
}

function parseTable(body, heading) {
  const match = body.match(new RegExp(`(?:^|\\n)## ${escapeRegExp(heading)}\\n\\n([\\s\\S]*?)(?=\\n## |\\s*$)`));
  if (!match) return [];
  const lines = match[1]
    .split(/\r?\n/)
    .filter((line) => line.startsWith("|"))
    .map((line) => line.split("|").slice(1, -1).map((cell) => cell.trim()));
  if (lines.length < 3) return [];
  const header = lines[0].map((cell) => cell.toLowerCase());
  return lines.slice(2).map((row) => ({
    target: row[header.indexOf("target")] ?? "",
    action: row[header.indexOf("action")] ?? "",
    status: String(row[header.indexOf("status")] ?? "").toLowerCase(),
    classification: row[header.indexOf("classification")] ?? "",
  }));
}

function normalizeRefs(values) {
  return [...new Set((Array.isArray(values) ? values : [values]).map(normalizeRef).filter(Boolean))];
}

function normalizeRef(value) {
  const match = String(value ?? "").match(/github\.com\/[^/]+\/[^/]+\/(?:issues|pull)\/(\d+)\b|^#?(\d+)$/);
  return match ? `#${match[1] ?? match[2]}` : "";
}

function arrayOfStrings(value) {
  return (Array.isArray(value) ? value : []).filter((item) => typeof item === "string" && item.trim() !== "");
}

function dateValue(value) {
  const parsed = Date.parse(String(value ?? ""));
  return Number.isNaN(parsed) ? 0 : parsed;
}

function numberArg(name, fallback) {
  const raw = args[name] ?? args[name.replaceAll("-", "_")];
  if (raw === undefined || raw === true) return fallback;
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 0) die(`--${name} must be a non-negative integer`);
  return value;
}

function sanitizeSuffix(value) {
  const sanitized = value
    .toLowerCase()
    .replace(/[^a-z0-9._-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  if (!sanitized) die("suffix became empty after sanitizing");
  return sanitized;
}

function todayStamp() {
  return new Date().toISOString().slice(0, 10).replaceAll("-", "");
}

function quoteYaml(value) {
  return JSON.stringify(String(value));
}

function publicCandidate(candidate) {
  return {
    target: candidate.target,
    source_refs: candidate.source_refs,
    repair_strategy: candidate.repair_strategy,
    source_report: candidate.relative,
  };
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function die(message) {
  console.error(message);
  process.exit(1);
}
