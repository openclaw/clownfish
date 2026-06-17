#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { parseArgs, parseJob, repoRoot } from "./lib.mjs";
import { hasSecuritySensitiveText, securityTextFromItem } from "./security-sensitive.mjs";

const CLOSE_ACTIONS = new Set([
  "close",
  "close_duplicate",
  "close_superseded",
  "close_fixed_by_candidate",
  "close_low_signal",
  "post_merge_close",
]);
const MERGE_ACTIONS = new Set(["merge_candidate", "merge_canonical"]);
const ROUTE_SECURITY_ACTIONS = new Set(["route_security"]);
const FIX_REPAIR_STRATEGIES = new Set([
  "repair_contributor_branch",
  "replace_uneditable_branch",
  "new_fix_pr",
  "already_fixed_on_main",
  "needs_human",
]);
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
const FIX_ACTIONS = new Set(["fix_needed", "build_fix_artifact", "open_fix_pr"]);
const NON_MUTATING_KEEP_ACTIONS = new Set(["keep_canonical", "keep_related", "keep_independent", "keep_closed"]);

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
  const sourceJob = readSourceJob(plan);
  const failures = [];
  const warnings = [];
  const itemByRef = buildItemMap(plan, result.repo);
  const actionCounts = {};

  if (!Array.isArray(result.actions)) failures.push("result.actions must be an array");
  if (!result.repo) failures.push("result.repo is required");
  if (!result.cluster_id) failures.push("result.cluster_id is required");
  if (!result.mode) failures.push("result.mode is required");
  const actions = Array.isArray(result.actions) ? result.actions : [];
  if (!plan && actions.length > 0) {
    failures.push("missing cluster-plan.json preflight artifact");
  } else if (!plan) {
    warnings.push("missing cluster-plan.json preflight artifact for actionless result");
  }
  if (result.status === "executed") {
    failures.push("worker result status must not be executed; only the applicator records execution");
  }
  if (result.status === "failed") {
    failures.push("worker result status is failed");
  }
  if (isInfrastructureBlockedResult(result, actions)) {
    failures.push(`worker infrastructure blocked: ${firstLine(result.summary) || "unknown worker failure"}`);
  }

  const closeActions = [];
  const fixActions = [];
  const mergeActions = [];
  const hasFixPath = actions.some((action) => FIX_ACTIONS.has(String(action.action ?? "")) && ["planned", "blocked"].includes(action.status));
  for (const action of actions) {
    const name = String(action.action ?? "");
    actionCounts[name] = (actionCounts[name] ?? 0) + 1;
    const target = String(action.target ?? "");
    const item = itemByRef.get(target);
    const clusterScopedAction = isClusterScopedAction(action, result);
    const unavailableNeedsHuman = isUnavailableNeedsHumanAction(action);
    const unavailableSecurityRoute = isUnavailableSecurityRouteAction(action, item);
    const unavailableNonMutatingPlanAction = isUnavailableNonMutatingPlanAction(action, item, result);

    if (!target) failures.push("action missing target");
    if (target.includes(",")) failures.push(`${target} action target must be a single ref, not a comma-separated list`);
    if (!name) failures.push(`${target || "unknown target"} missing action`);
    if (!action.idempotency_key) failures.push(`${target} missing idempotency_key`);
    if (!Array.isArray(action.evidence) || action.evidence.length === 0) {
      failures.push(`${target} missing evidence`);
    }
    if (
      !clusterScopedAction &&
      !unavailableNeedsHuman &&
      !unavailableSecurityRoute &&
      !unavailableNonMutatingPlanAction &&
      !action.target_kind
    ) {
      failures.push(`${target} missing target_kind`);
    }
    if (
      !clusterScopedAction &&
      !unavailableNeedsHuman &&
      !unavailableSecurityRoute &&
      !unavailableNonMutatingPlanAction &&
      !action.target_updated_at
    ) {
      failures.push(`${target} missing target_updated_at`);
    }
    if (!clusterScopedAction && item && action.target_updated_at && item.updated_at !== action.target_updated_at) {
      if (unavailableNonMutatingPlanAction && !item.updated_at) {
        warnings.push(`${target} target_updated_at ignored because preflight item was unavailable`);
      } else {
        failures.push(`${target} target_updated_at does not match preflight`);
      }
    }
    if (evidenceHasExternalUrl(action.evidence ?? [])) {
      failures.push(`${target} evidence contains non-GitHub external URL`);
    }
    if (item?.security_sensitive && MUTATING_ACTIONS.has(name)) {
      failures.push(`${target} mutating action targets security-sensitive item`);
    }
    if (
      !clusterScopedAction &&
      !isSkippedClosedContextAction(action, item) &&
      isSecuritySensitiveActionContext(action, item) &&
      name !== "route_security"
    ) {
      failures.push(`${target} security-sensitive target must use route_security`);
    }
    if (ROUTE_SECURITY_ACTIONS.has(name)) {
      if (action.classification !== "security_sensitive") {
        failures.push(`${target} route_security action must use security_sensitive classification`);
      }
      if (action.status !== "skipped" && action.status !== "planned") {
        failures.push(`${target} route_security action status must be skipped or planned`);
      }
      if (item && item.security_sensitive !== true && !unavailableSecurityRoute) {
        failures.push(`${target} route_security target was not marked security_sensitive in preflight`);
      } else if (item && item.security_sensitive !== true) {
        warnings.push(`${target} route_security target was not marked security_sensitive in preflight`);
      }
    }
    if (
      !clusterScopedAction &&
      name === "needs_human" &&
      /security-sensitive|security boundary|central .*security|security triage/i.test(String(action.reason ?? ""))
    ) {
      failures.push(`${target} security routing must use route_security instead of needs_human`);
    }

    if (action.status === "executed") {
      failures.push(`${target} action status must not be executed; only the applicator records execution`);
    }
    const blockedMergeCandidate = MERGE_ACTIONS.has(name) && action.status === "blocked";
    if (result.mode === "plan" && MUTATING_ACTIONS.has(name) && action.status !== "planned" && !blockedMergeCandidate) {
      failures.push(`${target} mutating recommendation is not planned-only`);
    }
    if (CLOSE_ACTIONS.has(name)) {
      closeActions.push(action);
      if (!item) failures.push(`${target} close action missing preflight item`);
      if (item && item.state !== "open") failures.push(`${target} close action targets ${item.state} item`);
      if (action.status !== "planned" && !isFixFirstBlockedCloseAction(action, hasFixPath)) {
        failures.push(`${target} close action status must be planned or fix-first blocked`);
      }
      const canonicalRef = normalizeRef(action.canonical ?? action.duplicate_of);
      const candidateRef = normalizeRef(action.candidate_fix ?? action.fixed_by ?? action.fix_candidate);
      if (name === "close_low_signal") {
        if (action.classification !== "low_signal") {
          failures.push(`${target} low-signal close action must use low_signal classification`);
        }
        if (action.target_kind !== "pull_request") {
          failures.push(`${target} low-signal close action must target a pull request`);
        }
      } else if (!canonicalRef && !candidateRef && !isFixFirstBlockedCloseAction(action, hasFixPath)) {
        failures.push(`${target} close action missing canonical/duplicate/candidate target`);
      }
      if (
        item?.kind === "pull_request" &&
        ["close_superseded", "close_fixed_by_candidate", "post_merge_close"].includes(name)
      ) {
        const comment = String(action.comment ?? "");
        if (!/\bcredit|attribut|thanks @|thank you @|source PR\b/i.test(comment)) {
          failures.push(`${target} PR closeout comment must preserve contributor credit`);
        }
      }
      if (canonicalRef) {
        const canonicalItem = itemByRef.get(canonicalRef);
        if (!canonicalItem) failures.push(`${target} close action canonical ${canonicalRef} missing preflight item`);
        if (canonicalRef === normalizeRef(target) && !allowsSelfCanonicalCurrentMainCloseout(action)) {
          failures.push(`${target} close action canonical points at itself`);
        }
      }
      if (candidateRef) {
        const candidateItem = itemByRef.get(candidateRef);
        if (!candidateItem) failures.push(`${target} close action candidate ${candidateRef} missing preflight item`);
        if (candidateRef === normalizeRef(target) && !isBlockedReplacementSourceCloseout(action, result)) {
          failures.push(`${target} close action candidate points at itself`);
        }
      }
    }
    if (FIX_ACTIONS.has(name)) {
      fixActions.push(action);
    }
    if (MERGE_ACTIONS.has(name)) {
      mergeActions.push(action);
      if (!item) failures.push(`${target} merge action missing preflight item`);
      if (item && item.state !== "open") failures.push(`${target} merge action targets ${item.state} item`);
      if (item && item.kind !== "pull_request") failures.push(`${target} merge action target is ${item.kind}`);
      if (action.target_kind !== "pull_request") failures.push(`${target} merge action requires pull_request target_kind`);
      if (action.status !== "planned" && action.status !== "blocked") {
        failures.push(`${target} merge action status must be planned or blocked`);
      }
    }
  }

  if (fixActions.length > 0) {
    validateFixActionPermissions(sourceJob, fixActions, failures);
    validateFixArtifact(result.fix_artifact, failures);
  }
  const plannedMergeActions = mergeActions.filter((action) => action.status === "planned");
  if (plannedMergeActions.length > 0) {
    validateMergePreflight(result.merge_preflight, plannedMergeActions, failures);
  }
  validateCalibratedPrFinalization({
    job: sourceJob,
    result,
    itemByRef,
    fixActions,
    mergeActions,
    failures,
  });

  if (result.canonical) {
    const canonicalRef = normalizeRef(result.canonical);
    const canonical = itemByRef.get(canonicalRef);
    if (!canonical) warnings.push(`canonical ${result.canonical} was not in preflight`);
    if (canonical && canonical.state !== "open") {
      const usedByUnsafeCloseAction = closeActions.some((action) => {
        const actionCanonical = normalizeRef(action.canonical ?? action.duplicate_of);
        const actionCandidate = normalizeRef(action.candidate_fix ?? action.fixed_by ?? action.fix_candidate);
        if (actionCanonical !== canonicalRef && actionCandidate !== canonicalRef) return false;
        return !allowsHistoricalCanonicalForCloseout(action);
      });
      if (usedByUnsafeCloseAction) {
        failures.push(`canonical ${result.canonical} is ${canonical.state}`);
      } else {
        warnings.push(`canonical ${result.canonical} is ${canonical.state}; treating as historical evidence only`);
      }
    }
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

function validateCalibratedPrFinalization({ job, result, itemByRef, fixActions, mergeActions, failures }) {
  if (!Array.isArray(job?.frontmatter?.maintainer_calibration) || job.frontmatter.maintainer_calibration.length === 0) {
    return;
  }
  const canonicalPrRef = normalizeRef(result.canonical_pr ?? result.canonical);
  if (!canonicalPrRef) return;
  const canonicalItem = itemByRef.get(canonicalPrRef);
  if (!canonicalItem || canonicalItem.kind !== "pull_request" || canonicalItem.state !== "open") return;
  const hasPlannedMerge = mergeActions.some(
    (action) => normalizeRef(action.target) === canonicalPrRef && action.status === "planned",
  );
  const hasPlannedFix = fixActions.some((action) => ["planned"].includes(String(action.status ?? "")));
  if (hasPlannedMerge || hasPlannedFix) return;
  failures.push(
    `${canonicalPrRef} calibrated canonical PR requires either a planned merge action with merge_preflight or a planned fix action with repair_contributor_branch/new_fix_pr fix_artifact`,
  );
}

function isClusterScopedAction(action, result) {
  const name = String(action.action ?? "");
  const target = String(action.target ?? "");
  return (FIX_ACTIONS.has(name) || name === "needs_human") && (target === `cluster:${result.cluster_id}` || target === result.cluster_id);
}

function isUnavailableNeedsHumanAction(action) {
  if (action.action !== "needs_human") return false;
  if (action.status !== "planned" && action.status !== "blocked") return false;
  const text = [action.reason, action.comment, ...(action.evidence ?? [])].join("\n");
  return /\b(404|not found|unavailable|could not hydrate|missing live|refreshed hydration)\b/i.test(text);
}

function isUnavailableSecurityRouteAction(action, item) {
  if (action.action !== "route_security") return false;
  if (action.status !== "planned" && action.status !== "skipped") return false;
  if (action.classification !== "security_sensitive") return false;
  if (item?.state !== "unavailable") return false;
  const text = [action.reason, action.comment, ...(action.evidence ?? []), item.hydration_error].join("\n");
  return /\b(rate limit|HTTP 403|unavailable|could not hydrate|missing live|hydration failed)\b/i.test(text);
}

function isSecuritySensitiveActionContext(action, item) {
  if (item?.security_sensitive === true) return true;
  if (NON_MUTATING_KEEP_ACTIONS.has(String(action.action ?? ""))) {
    return hasSecuritySensitiveText(securityTextFromItem(item), action.classification);
  }
  return hasSecuritySensitiveText(
    securityTextFromItem(item),
    action.classification,
    nonSecurityAssertionStrippedText(action.reason),
    nonSecurityAssertionStrippedText(action.comment),
    (action.evidence ?? []).map(nonSecurityAssertionStrippedText),
  );
}

function isSkippedClosedContextAction(action, item) {
  return action.action === "keep_closed" && action.status === "skipped" && item?.state === "closed";
}

function nonSecurityAssertionStrippedText(value) {
  return String(value ?? "")
    .replace(/\bsecurity[-_\s]?sensitive\s*[=:]\s*(?:false|0|no)\b/gi, "non-security classification")
    .replace(/\bsecuritySensitive\s*[=:]\s*(?:false|0|no)\b/g, "non-security classification")
    .replace(
      /\bsecurity[-_\s]?boundary(?:\s+(?:preflight|review|artifact|policy|check)){0,4}\s+(?:reports?|reported|shows?|showed|found|finds|has|had)\s+(?:no|zero)\s+security[-_\s]?sensitive\s+(?:signal|signals|refs?|items?|target|targets)\b/gi,
      "non-security classification",
    )
    .replace(
      /\bsecurity[-_\s]?boundary\s+(?:reports?|reported|shows?|showed|found|finds|has|had)\s+(?:no|zero)\s+security[-_\s]?sensitive\s+(?:job\s+)?(?:signal|signals|refs?|items?|target|targets)\b/gi,
      "non-security classification",
    )
    .replace(
      /\b(?:any\s+)?security[-_\s]?sensitive\s+(?:linked|related|other|unrelated|separate|adjacent)\s+(?:implementation\s+path|refs?|issues?|prs?|items?|targets?|work)\s+(?:is|are|was|were)?\s*(?:quarantined|routed|handled|triaged|excluded)(?:\s+separately|\s+elsewhere)?\b/gi,
      "separate security context",
    )
    .replace(
      /\b(?:linked|related|other|unrelated|separate|adjacent)\s+security[-_\s]?sensitive\s+(?:implementation\s+path|refs?|issues?|prs?|items?|targets?|work)\s+(?:is|are|was|were)?\s*(?:quarantined|routed|handled|triaged|excluded)?(?:\s+separately|\s+elsewhere)?\b/gi,
      "separate security context",
    )
    .replace(
      /\b(?:linked|related|other|unrelated|separate|adjacent)[^.]{0,80}\bsecurity[-_\s]?sensitive\b[^.]{0,80}\b(?:quarantined|routed|handled|triaged|excluded|refs?|issues?|prs?|items?|targets?|implementation\s+path)\b/gi,
      "separate security context",
    )
    .replace(
      /\b(?:existing\s+)?(?:linked|related|other|unrelated|separate|adjacent)[^.]{0,120}\b(?:quarantined|routed|handled|triaged|excluded)[^.]{0,120}\b(?:central\s+security|security[-_\s]?(?:sensitive|signal|boundary)|merge-risk:\s*[^\n,;]*security)\b/gi,
      "separate security context",
    )
    .replace(
      /\b(?:existing\s+)?(?:linked|related|other|unrelated|separate|adjacent)[^.]{0,120}\b(?:central\s+security|security[-_\s]?(?:sensitive|signal|boundary)|merge-risk:\s*[^\n,;]*security)[^.]{0,120}\b(?:quarantined|routed|handled|triaged|excluded)\b/gi,
      "separate security context",
    )
    .replace(
      /\b(?:linked|related|other|unrelated|separate|adjacent)[^.]{0,80}\b(?:hydrated|marked|classified|flagged|listed)\s+as\s+security[-_\s]?sensitive[^.]{0,80}\b(?:quarantined|routed|handled|triaged|excluded)\b/gi,
      "separate security context",
    )
    .replace(
      /\bsecurity[-_\s]?sensitive\b[^.]{0,80}\b(?:linked|related|other|unrelated|separate|adjacent)[^.]{0,80}\b(?:quarantined|routed|handled|triaged|excluded|refs?|issues?|prs?|items?|targets?|implementation\s+path)\b/gi,
      "separate security context",
    )
    .replace(
      /\b(?:route|routed|quarantine|quarantined|handle|handled|triage|triaged)\s+(?:only\s+)?(?:the\s+)?(?:linked|related|other|unrelated|separate|adjacent|exact)\s+security[-_\s]?sensitive\s+(?:refs?|issues?|prs?|items?|targets?)\b/gi,
      "separate security context",
    )
    .replace(
      /\b(?:validator|preflight|worker|plan|reviewer)?\s*(?:output\s+)?(?:did\s+not|does\s+not|didn't|is\s+not|was\s+not|not)\s+(?:mark|classify|flag|treat|identify|detect)[^.]{0,120}\bsecurity[-_\s]?sensitive(?:\s+target|\s+ref|\s+item)?\b/gi,
      "non-security classification",
    )
    .replace(
      /\b(?:no|without|absent)\s+(?:deterministic\s+|live\s+|preflight\s+)?security[-_\s]?sensitive\s+(?:signal|signals|refs?|items?|target|targets)\b/gi,
      "non-security classification",
    )
    .replace(
      /\bsecurity[-_\s]?sensitive\s+(?:refs?|issues?|items?|targets?)\s+(?:are\s+)?(?:resolved|absent|cleared)\b/gi,
      "non-security classification",
    );
}

function isUnavailableNonMutatingPlanAction(action, item, result) {
  if (result.mode !== "plan") return false;
  if (item?.state !== "unavailable") return false;
  if (!["planned", "skipped", "blocked"].includes(String(action.status ?? ""))) return false;
  const name = String(action.action ?? "");
  if (MUTATING_ACTIONS.has(name) || CLOSE_ACTIONS.has(name) || MERGE_ACTIONS.has(name)) return false;
  return true;
}

function isInfrastructureBlockedResult(result, actions) {
  if (result.status !== "blocked") return false;
  if (actions.length > 0) return false;
  const text = [result.summary, ...(Array.isArray(result.needs_human) ? result.needs_human : [])].join("\n");
  return /\b(Codex worker timed out|Codex worker exited|HTTP error:\s*401|401 Unauthorized|Unauthorized|failed to connect to websocket|OPENAI_API_KEY|CODEX_API_KEY|API key|authentication|auth failed|login failed)\b/i.test(
    text,
  );
}

function firstLine(value) {
  return String(value ?? "").split(/\r?\n/, 1)[0].trim();
}

function isFixFirstBlockedCloseAction(action, hasClusterFixPath) {
  if (action.status !== "blocked") return false;
  const text = [action.reason, action.comment, action.idempotency_key, ...(action.evidence ?? [])].join("\n");
  const hasFixFirstText =
    /fix[- ]first|blocked-by-fix-first|requires? a fix|requires? ProjectClownfish fix|fix PR|fix path|canonical fix (?:path|landing|lands?)|canonical repair (?:path|landing|lands?)|merged canonical fix|hydrated merged fix PR|replacement PR|replacement fix|pending .*fix|after .*fix .*lands?|open_fix_pr|build_fix_artifact/i.test(
      text,
    );
  return hasFixFirstText || (hasClusterFixPath && /blocked|wait|pending/i.test(text));
}

function allowsSelfCanonicalCurrentMainCloseout(action) {
  if (action.action !== "close_fixed_by_candidate" && action.action !== "post_merge_close") return false;
  if (action.classification && action.classification !== "fixed_by_candidate") return false;
  const candidateRef = normalizeRef(action.candidate_fix ?? action.fixed_by ?? action.fix_candidate);
  if (candidateRef) return false;
  const text = [action.reason, action.comment, action.idempotency_key, ...(action.evidence ?? [])].join("\n");
  return /\b(current main|already fixed|already covered|fixed-by-current-main|main already)\b/i.test(text);
}

function validateFixActionPermissions(job, fixActions, failures) {
  if (fixActions.length === 0) return;
  if (!job) {
    failures.push("fix actions require source job permissions");
    return;
  }

  const allowedActions = new Set(job.frontmatter.allowed_actions ?? []);
  const blockedActions = new Set(job.frontmatter.blocked_actions ?? []);
  const blockers = [];
  if (!allowedActions.has("fix")) blockers.push("allowed_actions lacks fix");
  if (!allowedActions.has("raise_pr")) blockers.push("allowed_actions lacks raise_pr");
  if (blockedActions.has("fix")) blockers.push("blocked_actions includes fix");
  if (blockedActions.has("raise_pr")) blockers.push("blocked_actions includes raise_pr");
  if (job.frontmatter.allow_fix_pr !== true) blockers.push("allow_fix_pr is not true");
  if (blockers.length === 0) return;

  const actionList = fixActions
    .map((action) => `${action.action ?? "unknown"}:${action.target ?? "unknown"}`)
    .join(", ");
  failures.push(`fix actions are not permitted by job frontmatter (${blockers.join("; ")}): ${actionList}`);
}

function validateMergePreflight(mergePreflight, mergeActions, failures) {
  if (!Array.isArray(mergePreflight)) {
    failures.push("merge action requires merge_preflight");
    return;
  }
  const preflightByTarget = new Map();
  for (const item of mergePreflight) {
    const target = normalizeRef(item?.target);
    if (target) preflightByTarget.set(target, item);
  }
  for (const action of mergeActions) {
    const target = normalizeRef(action.target);
    const preflight = preflightByTarget.get(target);
    if (!preflight) {
      failures.push(`${target} merge action missing merge_preflight entry`);
      continue;
    }
    if (preflight.security_status !== "cleared") {
      failures.push(`${target} merge_preflight.security_status must be cleared`);
    }
    if (preflight.comments_status !== "resolved") {
      failures.push(`${target} merge_preflight.comments_status must be resolved`);
    }
    if (preflight.bot_comments_status !== "resolved") {
      failures.push(`${target} merge_preflight.bot_comments_status must be resolved`);
    }
    for (const key of [
      "security_evidence",
      "comments_evidence",
      "bot_comments_evidence",
      "validation_commands",
    ]) {
      if (!Array.isArray(preflight[key]) || preflight[key].length === 0) {
        failures.push(`${target} merge_preflight.${key} must be a non-empty list`);
      }
    }
    const codexReview = preflight.codex_review;
    if (!codexReview || typeof codexReview !== "object") {
      failures.push(`${target} merge_preflight.codex_review is required`);
      continue;
    }
    if (codexReview.command !== "/review") {
      failures.push(`${target} merge_preflight.codex_review.command must be /review`);
    }
    if (!["passed", "clean"].includes(codexReview.status)) {
      failures.push(`${target} merge_preflight.codex_review.status must be passed or clean`);
    }
    if (codexReview.findings_addressed !== true) {
      failures.push(`${target} merge_preflight.codex_review.findings_addressed must be true`);
    }
    if (!Array.isArray(codexReview.evidence) || codexReview.evidence.length === 0) {
      failures.push(`${target} merge_preflight.codex_review.evidence must be a non-empty list`);
    } else if (!codexReview.evidence.some((entry) => /\/review|codex review/i.test(String(entry)))) {
      failures.push(`${target} merge_preflight.codex_review.evidence must mention /review or Codex review`);
    }
  }
}

function isBlockedReplacementSourceCloseout(action, result) {
  if (action.action !== "close_superseded" || action.status !== "blocked") return false;
  if (result.fix_artifact?.repair_strategy !== "replace_uneditable_branch") return false;
  const target = normalizeRef(action.target);
  if (!target) return false;
  const sourceRefs = new Set((result.fix_artifact.source_prs ?? []).map(normalizeRef).filter(Boolean));
  if (!sourceRefs.has(target)) return false;
  return (result.actions ?? []).some(
    (candidate) =>
      candidate.action === "open_fix_pr" &&
      candidate.status === "planned" &&
      normalizeRef(candidate.candidate_fix) === target,
  );
}

function allowsHistoricalCanonicalForCloseout(action) {
  const name = String(action.action ?? "");
  if (!["close_fixed_by_candidate", "close_superseded", "post_merge_close"].includes(name)) return false;
  if (action.status !== "planned") return false;
  const classification = String(action.classification ?? "");
  if (classification && !["fixed_by_candidate", "superseded"].includes(classification)) return false;
  const candidateRef = normalizeRef(action.candidate_fix ?? action.fixed_by ?? action.fix_candidate);
  if (!candidateRef) return false;
  const evidenceText = [action.reason, action.comment, ...(action.evidence ?? [])].join("\n");
  return /\b(fixed|implemented|merged|landed|current main|already present|closeout)\b/i.test(evidenceText);
}

function validateFixArtifact(fixArtifact, failures) {
  if (!fixArtifact || typeof fixArtifact !== "object") {
    failures.push("fix action requires fix_artifact");
    return;
  }
  for (const key of ["summary", "pr_title", "pr_body"]) {
    if (typeof fixArtifact[key] !== "string" || fixArtifact[key].trim() === "") {
      failures.push(`fix_artifact.${key} is required`);
    }
  }
  for (const key of ["affected_surfaces", "likely_files", "linked_refs", "validation_commands", "credit_notes"]) {
    if (!Array.isArray(fixArtifact[key]) || fixArtifact[key].length === 0) {
      failures.push(`fix_artifact.${key} must be a non-empty list`);
    }
  }
  if (typeof fixArtifact.changelog_required !== "boolean") {
    failures.push("fix_artifact.changelog_required must be boolean");
  }
  if (!FIX_REPAIR_STRATEGIES.has(fixArtifact.repair_strategy)) {
    failures.push("fix_artifact.repair_strategy is required");
  }
  if (fixArtifact.repair_strategy === "replace_uneditable_branch") {
    if (!Array.isArray(fixArtifact.source_prs) || fixArtifact.source_prs.length === 0) {
      failures.push("replacement fix artifact must list source_prs");
    }
    if (!Array.isArray(fixArtifact.branch_update_blockers) || fixArtifact.branch_update_blockers.length === 0) {
      failures.push("replacement fix artifact must list branch_update_blockers");
    }
    const creditText = [
      ...(fixArtifact.credit_notes ?? []),
      fixArtifact.pr_body ?? "",
      ...(fixArtifact.source_prs ?? []),
    ].join("\n");
    if (!/https:\/\/github\.com\/[^/\s]+\/[^/\s]+\/pull\/\d+/.test(creditText)) {
      failures.push("replacement fix artifact credit must include original PR URL");
    }
  }
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

function readSourceJob(plan) {
  if (!plan?.source_job) return null;
  try {
    return parseJob(path.join(repoRoot(), plan.source_job));
  } catch {
    return null;
  }
}

function buildItemMap(plan, repo) {
  const items = plan?.item_matrix ?? plan?.items ?? [];
  const out = new Map();
  for (const item of items) {
    const ref = normalizeRef(item.ref ?? item.target ?? item.url);
    if (!ref) continue;
    out.set(ref, item);
    out.set(`https://github.com/${repo}/issues/${ref.slice(1)}`, item);
    out.set(`https://github.com/${repo}/pull/${ref.slice(1)}`, item);
  }
  return out;
}

function evidenceHasExternalUrl(evidence) {
  return evidence.some((item) => {
    const text = typeof item === "string" ? item : JSON.stringify(item);
    const urls = text.match(/https?:\/\/[^\s)\]"']+/g) ?? [];
    return urls.some(isExternalUrl);
  });
}

function isExternalUrl(value) {
  try {
    return new URL(value).hostname !== "github.com";
  } catch {
    return false;
  }
}

function normalizeRef(ref) {
  const match = String(ref).match(/(?:issues|pull)\/(\d+)\b|^#?(\d+)$/);
  if (!match) return "";
  return `#${match[1] ?? match[2]}`;
}

function relative(filePath) {
  const rel = path.relative(repoRoot(), filePath);
  return rel.startsWith("..") ? filePath : rel;
}
