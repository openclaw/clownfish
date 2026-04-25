#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, repoRoot } from "./lib.mjs";

const CLOSE_ACTIONS = new Set(["close", "close_duplicate", "close_superseded", "close_fixed_by_candidate"]);
const MUTATING_ACTIONS = new Set([
  "close",
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "label",
  "comment",
  "merge_candidate",
  "merge_canonical",
  "open_fix_pr",
  "post_merge_close",
]);

const args = parseArgs(process.argv.slice(2));
const inputs = args._;

if (inputs.length === 0) {
  console.error("usage: node scripts/review-results.mjs <result.json|run-dir|artifact-dir> [...]");
  process.exit(2);
}

const reports = inputs.flatMap((input) => reviewInput(path.resolve(input)));
const failed = reports.some((report) => report.status === "failed");
console.log(JSON.stringify({ status: failed ? "failed" : "passed", reports }, null, 2));
if (failed) process.exit(1);

function reviewInput(inputPath) {
  const resultPaths = findResultPaths(inputPath);
  if (resultPaths.length === 0) {
    return [
      {
        input: relative(inputPath),
        status: "failed",
        failures: ["no result.json found"],
        warnings: [],
      },
    ];
  }
  return resultPaths.map(reviewResult);
}

function findResultPaths(inputPath) {
  if (!fs.existsSync(inputPath)) return [];
  if (fs.statSync(inputPath).isFile()) {
    return path.basename(inputPath) === "result.json" ? [inputPath] : [];
  }
  const out = [];
  for (const entry of fs.readdirSync(inputPath, { recursive: true })) {
    const candidate = path.join(inputPath, String(entry));
    if (path.basename(candidate) === "result.json" && fs.statSync(candidate).isFile()) {
      out.push(candidate);
    }
  }
  return out.sort();
}

function reviewResult(resultPath) {
  const runDir = path.dirname(resultPath);
  const result = JSON.parse(fs.readFileSync(resultPath, "utf8"));
  const plan = readSiblingJson(runDir, "cluster-plan.json");
  const failures = [];
  const warnings = [];
  const itemByRef = new Map((plan?.items ?? []).map((item) => [item.ref, item]));
  const actionCounts = {};

  if (!Array.isArray(result.actions)) failures.push("result.actions must be an array");
  if (!result.repo) failures.push("result.repo is required");
  if (!result.cluster_id) failures.push("result.cluster_id is required");
  if (!result.mode) failures.push("result.mode is required");
  if (!plan) failures.push("missing cluster-plan.json preflight artifact");

  const actions = Array.isArray(result.actions) ? result.actions : [];
  for (const action of actions) {
    const name = String(action.action ?? "");
    actionCounts[name] = (actionCounts[name] ?? 0) + 1;
    const target = String(action.target ?? "");
    const item = itemByRef.get(target);

    if (!target) failures.push("action missing target");
    if (!name) failures.push(`${target || "unknown target"} missing action`);
    if (!action.idempotency_key) failures.push(`${target} missing idempotency_key`);
    if (!Array.isArray(action.evidence) || action.evidence.length === 0) {
      failures.push(`${target} missing evidence`);
    }
    if (!action.target_kind) failures.push(`${target} missing target_kind`);
    if (!action.target_updated_at) failures.push(`${target} missing target_updated_at`);
    if (item && action.target_updated_at && item.updated_at !== action.target_updated_at) {
      failures.push(`${target} target_updated_at does not match preflight`);
    }
    if (evidenceHasExternalUrl(action.evidence ?? [])) {
      failures.push(`${target} evidence contains non-GitHub external URL`);
    }

    if (result.mode === "plan" && action.status === "executed") {
      failures.push(`${target} has executed status in plan mode`);
    }
    if (result.mode === "plan" && MUTATING_ACTIONS.has(name) && action.status !== "planned") {
      failures.push(`${target} mutating recommendation is not planned-only`);
    }
    if (CLOSE_ACTIONS.has(name)) {
      if (!item) failures.push(`${target} close action missing preflight item`);
      if (item && item.state !== "open") failures.push(`${target} close action targets ${item.state} item`);
      if (action.status !== "planned") failures.push(`${target} close action status must be planned`);
      if (!action.canonical && !action.duplicate_of && !action.candidate_fix) {
        failures.push(`${target} close action missing canonical/duplicate/candidate target`);
      }
    }
  }

  if (result.canonical) {
    const canonical = itemByRef.get(normalizeRef(result.canonical));
    if (!canonical) warnings.push(`canonical ${result.canonical} was not in preflight`);
    if (canonical && canonical.state !== "open") failures.push(`canonical ${result.canonical} is ${canonical.state}`);
  }
  if ((result.needs_human ?? []).length > 0 && result.status === "planned") {
    warnings.push("planned result includes needs_human entries");
  }

  return {
    result: relative(resultPath),
    status: failures.length > 0 ? "failed" : "passed",
    mode: result.mode,
    cluster_id: result.cluster_id,
    result_status: result.status,
    actions: actions.length,
    action_counts: actionCounts,
    failures,
    warnings,
  };
}

function readSiblingJson(runDir, filename) {
  const direct = path.join(runDir, filename);
  if (fs.existsSync(direct)) return JSON.parse(fs.readFileSync(direct, "utf8"));
  for (const entry of fs.readdirSync(runDir, { recursive: true })) {
    const candidate = path.join(runDir, String(entry));
    if (path.basename(candidate) === filename && fs.statSync(candidate).isFile()) {
      return JSON.parse(fs.readFileSync(candidate, "utf8"));
    }
  }
  return null;
}

function evidenceHasExternalUrl(evidence) {
  return evidence.some((item) => {
    const text = typeof item === "string" ? item : JSON.stringify(item);
    const urls = text.match(/https?:\/\/[^\s)\]"']+/g) ?? [];
    return urls.some((url) => !url.includes("github.com/"));
  });
}

function normalizeRef(ref) {
  const match = String(ref).match(/#?(\d+)/);
  return match ? `#${match[1]}` : String(ref);
}

function relative(filePath) {
  const rel = path.relative(repoRoot(), filePath);
  return rel.startsWith("..") ? filePath : rel;
}
