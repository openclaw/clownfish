#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execFile, execFileSync, spawnSync } from "node:child_process";
import { promisify } from "node:util";
import { parseArgs, parseJob, repoRoot } from "./lib.mjs";
import { hasSecuritySensitiveText } from "./security-sensitive.mjs";

const PASSING_CHECK_CONCLUSIONS = new Set(["SUCCESS", "SKIPPED", "NEUTRAL"]);
const CLEAN_MERGE_STATES = new Set(["CLEAN"]);
const IGNORED_CHECKS = new Set(["auto-response", "Labeler", "Stale"]);
const execFileAsync = promisify(execFile);
const args = parseArgs(process.argv.slice(2));
const repo = String(args.repo ?? "openclaw/openclaw");
const [owner, name] = repo.split("/");
const DEFAULT_LOW_SIGNAL_BLOCK_LABELS = [
  "proof:*",
  "status:*ready for maintainer look",
  "status:*waiting on author",
  "status:*needs proof",
  "triage: needs-real-behavior-proof",
  "triage: mock-only-proof",
  "rating:*platinum",
  "rating:*gold",
  "rating:*diamond",
  "clawsweeper:needs-*",
  "maintainer",
  "merge-risk:*",
];
const UPDATE_PULL_REQUEST_BRANCH_MUTATION = `
mutation UpdatePullRequestBranch(
  $pullRequestId: ID!
  $expectedHeadOid: GitObjectID!
  $updateMethod: PullRequestBranchUpdateMethod!
) {
  updatePullRequestBranch(
    input: {
      pullRequestId: $pullRequestId
      expectedHeadOid: $expectedHeadOid
      updateMethod: $updateMethod
    }
  ) {
    pullRequest {
      headRefOid
    }
  }
}`;
const outDir = path.resolve(String(args.out ?? path.join(repoRoot(), "jobs", owner, "inbox")));
const mode = String(args.mode ?? "autonomous");
const strategy = String(args.strategy ?? "triage");
const checksSuccessPreflight = Boolean(args["checks-success"] ?? args.checks_success);
const defaultExistingDir = checksSuccessPreflight ? path.join(repoRoot(), "jobs", owner) : outDir;
const existingDir = path.resolve(String(args["existing-dir"] ?? args.existing_dir ?? defaultExistingDir));
const existingResultsDir = path.resolve(
  String(args["existing-results-dir"] ?? args.existing_results_dir ?? path.join(repoRoot(), "results", owner)),
);
const existingResultsActionPolicy = String(
  args["existing-results-action-policy"] ?? args.existing_results_action_policy ?? "terminal",
);
const defaultInventorySource = checksSuccessPreflight
  ? "search"
  : strategy === "remediation" && mode === "autonomous"
    ? "pr-list"
    : "graphql";
const inventorySource = String(args["inventory-source"] ?? args.inventory_source ?? args.source ?? defaultInventorySource);
const limit = limitArg("limit", 100);
const requestedBatchSize = numberArg("batch-size", 5);
const sort = String(args.sort ?? "stale");
const bucketFilter = String(args.bucket ?? defaultBucketFor({ mode, strategy }));
const skipExisting = args["skip-existing"] !== "false";
const includeSecurity = Boolean(args["include-security-candidates"]);
const includeMergeRisk = Boolean(args["include-merge-risk-candidates"] ?? args.include_merge_risk_candidates);
const allowForcePush = strictBooleanFlag(
  args["allow-force-push"] ?? args.allow_force_push,
  "allow-force-push",
);
const repairOnlyMergeRiskInventory =
  strategy === "remediation" && includeMergeRisk && bucketFilter === "merge_risk_remediation";
const conflictingBranchRepairInventory =
  strategy === "remediation" && bucketFilter === "conflicting_branch_repair";
const batchSize = repairOnlyMergeRiskInventory || conflictingBranchRepairInventory ? 1 : requestedBatchSize;
const includeRefs = optionalRefsFile(args["include-refs-file"] ?? args.include_refs_file);
const hydrateIncludeRefs = Boolean(args["hydrate-include-refs"] ?? args.hydrate_include_refs);
const minScore = numberArg("min-score", 2);
const maxFiles = numberArg("max-files", 120);
const limitForHydration = limit === "all" ? 500 : Number(limit);
const hydrationConcurrency = boundedInteger(
  args["hydration-concurrency"] ??
    args.hydration_concurrency ??
    process.env.CLOWNFISH_GITHUB_IMPORT_HYDRATION_CONCURRENCY,
  4,
  "--hydration-concurrency",
  1,
  8,
);
const defaultSearchLimit = checksSuccessPreflight
  ? 1000
  : Math.min(Math.max(limitForHydration * 20, 200), 1000);
const searchLimit = numberArg("search-limit", defaultSearchLimit);
const prListFallbackSearchLimit = numberArg(
  "pr-list-fallback-search-limit",
  Math.min(searchLimit, Math.max(limitForHydration * 12, 120)),
);
const lowSignalHydrateLimit = numberArg("low-signal-hydrate-limit", Math.max(limitForHydration * 12, 300));
const checksSuccessRetryCooldownHours = numberArg("checks-success-retry-cooldown-hours", 72);
const refreshStaleChecksSuccessBranches = booleanFlag(
  args["refresh-stale-checks-success-branches"] ?? args.refresh_stale_checks_success_branches,
);
const blockedLowSignalLabelPatterns = compileLabelPatterns(
  argValues(process.argv.slice(2), ["block-label", "block_label"], args["block-label"] ?? args.block_label ?? DEFAULT_LOW_SIGNAL_BLOCK_LABELS),
);
const dryRun = Boolean(args["dry-run"] ?? args.dry_run);
const jsonOutput = Boolean(args.json);
const ghCommand = String(args["gh-bin"] ?? args.gh_bin ?? process.env.CLOWNFISH_GH_BIN ?? firstAvailableCommand(["ghx", "gh"]));
const checksSuccessRefreshes = [];
let checksSuccessMainSha = null;
let checksSuccessRefreshAttempts = 0;

if (!/^[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+$/.test(repo)) die("--repo must be owner/repo");
if (!["plan", "autonomous"].includes(mode)) die("--mode must be plan or autonomous");
if (!["graphql", "search", "pr-list"].includes(inventorySource)) die("--inventory-source must be graphql, search, or pr-list");
if (!["triage", "remediation", "low-signal"].includes(strategy)) die("--strategy must be triage, remediation, or low-signal");
if (checksSuccessPreflight && strategy !== "remediation") die("--checks-success requires --strategy remediation");
if (refreshStaleChecksSuccessBranches && !checksSuccessPreflight) {
  die("--refresh-stale-checks-success-branches requires --checks-success");
}
if (checksSuccessPreflight && inventorySource === "graphql") {
  die("--checks-success does not support --inventory-source graphql; use search or pr-list");
}
if (hydrateIncludeRefs && inventorySource !== "pr-list") die("--hydrate-include-refs requires --inventory-source pr-list");
if (hydrateIncludeRefs && !includeRefs) die("--hydrate-include-refs requires --include-refs-file");
if (!["stale", "recent", "bucket"].includes(sort)) die("--sort must be stale, recent, or bucket");
if (!["all", "terminal"].includes(existingResultsActionPolicy)) die("--existing-results-action-policy must be all or terminal");
if (allowForcePush && (mode !== "autonomous" || strategy !== "remediation")) {
  die("--allow-force-push requires autonomous remediation mode");
}

const existingRefs = skipExisting ? existingRefsForStrategy() : new Set();
if (skipExisting) mergeRefs(existingRefs, existingPublishedResultRefs(existingResultsDir, repo, existingResultsActionPolicy));
const existingConflictingRepairJobs =
  conflictingBranchRepairInventory && !dryRun
    ? conflictingRepairJobs([path.join(repoRoot(), "jobs", owner), outDir])
    : new Map();
const publishedConflictingRepairClusterIds =
  conflictingBranchRepairInventory && !dryRun
    ? publishedResultClusterIds(existingResultsDir, repo, "conflicting-branch-repair-")
    : new Set();
const checksSuccessAttempts =
  skipExisting && checksSuccessPreflight ? existingChecksSuccessAttempts(existingDir) : new Map();
if (checksSuccessPreflight) checksSuccessMainSha = fetchChecksSuccessMainSha();
const rawOpenPullRequests = await fetchOpenPullRequests();
if (strategy === "low-signal") hydrateLowSignalPullRequestFiles(rawOpenPullRequests);
const candidates = dedupeCandidates(
  rawOpenPullRequests
    .map(classifyCandidate)
  .filter((candidate) => !includeRefs || includeRefs.has(candidate.ref))
  .filter((candidate) => !skipExisting || !existingRefs.has(candidate.ref))
  .filter((candidate) => includeSecurity || candidate.bucket !== "security_route_candidate")
  .filter((candidate) => bucketFilter === "all" || candidate.bucket === bucketFilter),
).sort(compareCandidates);
const limitedCandidates = limit === "all" ? candidates : candidates.slice(0, limit);

const batches = [];
for (let index = 0; index < limitedCandidates.length; index += batchSize) {
  batches.push(limitedCandidates.slice(index, index + batchSize));
}

if (!dryRun) fs.mkdirSync(outDir, { recursive: true });
const generated = batches.map((batch, index) => writeJob(batch, index + 1)).filter(Boolean);

const payload = sanitizeJsonValue({
  generated,
  candidates: limitedCandidates,
  checks_success_refreshes: checksSuccessPreflight ? checksSuccessRefreshes : [],
  options: {
    repo,
    mode,
    strategy,
    dry_run: dryRun,
    limit,
    batch_size: batchSize,
    sort,
    bucket: bucketFilter,
    min_score: strategy === "low-signal" ? minScore : null,
    max_files: strategy === "low-signal" ? maxFiles : null,
    hydration_concurrency: hydrationConcurrency,
    low_signal_hydrate_limit: strategy === "low-signal" ? lowSignalHydrateLimit : null,
    low_signal_blocked_labels:
      strategy === "low-signal" ? blockedLowSignalLabelPatterns.map((pattern) => pattern.source) : [],
    skip_existing: skipExisting,
    include_security_candidates: includeSecurity,
    include_merge_risk_candidates: strategy === "remediation" ? includeMergeRisk : null,
    allow_force_push: strategy === "remediation" ? allowForcePush : null,
    checks_success_preflight: strategy === "remediation" ? checksSuccessPreflight : null,
    checks_success_retry_cooldown_hours: checksSuccessPreflight ? checksSuccessRetryCooldownHours : null,
    checks_success_main_sha: checksSuccessPreflight ? checksSuccessMainSha : null,
    refresh_stale_checks_success_branches: checksSuccessPreflight ? refreshStaleChecksSuccessBranches : null,
    search_limit: inventorySource === "search" ? searchLimit : null,
    include_refs_file: includeRefs
      ? path.relative(repoRoot(), path.resolve(String(args["include-refs-file"] ?? args.include_refs_file)))
      : null,
    hydrate_include_refs: hydrateIncludeRefs || null,
    inventory_source: inventorySource,
    pr_list_fallback_search_limit: inventorySource === "pr-list" ? prListFallbackSearchLimit : null,
    existing_results_action_policy: existingResultsActionPolicy,
    existing_dir: path.relative(repoRoot(), existingDir),
    existing_results_dir: path.relative(repoRoot(), existingResultsDir),
    gh_bin: ghCommand,
  },
  totals: {
    generated: generated.length,
    candidates: limitedCandidates.length,
    fetched_open_prs: fetchOpenPullRequests.cache?.length ?? null,
    include_refs: includeRefs?.size ?? null,
    existing_refs: existingRefs.size,
    checks_success_refresh_requested: checksSuccessRefreshes.filter((refresh) => refresh.status === "requested").length,
    checks_success_refresh_failed: checksSuccessRefreshes.filter((refresh) => refresh.status === "failed").length,
    checks_success_refresh_skipped: checksSuccessRefreshes.filter((refresh) => refresh.status === "skipped").length,
  },
});

if (jsonOutput) {
  console.log(JSON.stringify(payload, null, 2));
} else {
  for (const item of generated) console.log(item.path);
}

async function fetchOpenPullRequests() {
  if (fetchOpenPullRequests.cache) return fetchOpenPullRequests.cache;
  if (inventorySource === "search") {
    fetchOpenPullRequests.cache = await fetchOpenPullRequestsFromSearch();
    return fetchOpenPullRequests.cache;
  }
  if (inventorySource === "pr-list") {
    fetchOpenPullRequests.cache = await fetchOpenPullRequestsFromPrList();
    return fetchOpenPullRequests.cache;
  }
  const query = `query($endCursor:String){
    repository(owner:${jsonString(owner)}, name:${jsonString(name)}) {
      pullRequests(states:OPEN, first:100, after:$endCursor, orderBy:{field:UPDATED_AT, direction:ASC}) {
        nodes {
          number
          title
          url
          createdAt
          updatedAt
          isDraft
          changedFiles
          additions
          deletions
          author { login }
          authorAssociation
          labels(first:30) { nodes { name } }
          assignees(first:10) { nodes { login } }
          comments(first:1) { totalCount }
          reviews(first:1) { totalCount }
        }
        pageInfo { hasNextPage endCursor }
      }
    }
  }`;
  const pulls = [];
  let endCursor = null;
  for (;;) {
    const args = ["api", "graphql", "-f", `query=${query}`];
    if (endCursor) args.push("-F", `endCursor=${endCursor}`);
    const page = ghJsonWithRetry(args, { operation: "fetch open pull request inventory page" });
    const pullRequests = page?.data?.repository?.pullRequests;
    pulls.push(...(pullRequests?.nodes ?? []));
    if (!pullRequests?.pageInfo?.hasNextPage) break;
    endCursor = pullRequests.pageInfo.endCursor;
    if (!endCursor) throw new Error("GitHub open PR pagination returned hasNextPage without endCursor");
  }
  fetchOpenPullRequests.cache = pulls;
  return pulls;
}

async function fetchOpenPullRequestsFromSearch() {
  const fields = [
    "assignees",
    "author",
    "authorAssociation",
    "body",
    "commentsCount",
    "createdAt",
    "isDraft",
    "labels",
    "number",
    "title",
    "updatedAt",
    "url",
  ].join(",");
  const ghArgs = [
    "search",
    "prs",
    "--repo",
    repo,
    "--state",
    "open",
    "--sort",
    "updated",
    "--order",
    sort === "recent" ? "desc" : "asc",
    "--limit",
    String(searchLimit),
    "--json",
    fields,
  ];
  if (checksSuccessPreflight) {
    ghArgs.push("--base", "main", "--checks", "success");
  } else if (conflictingBranchRepairInventory) {
    ghArgs.push("--base", "main");
  } else if (strategy === "remediation") {
    ghArgs.push("--label", "status: 👀 ready for maintainer look", "--label", "proof: sufficient");
  }
  const pulls = ghJsonWithRetry(ghArgs, { operation: "search open pull request inventory" });
  if (!Array.isArray(pulls)) throw new Error("GitHub PR search returned a non-array payload");
  const normalized = pulls.map(normalizeSearchPullRequest);
  if (!checksSuccessPreflight) return normalized;
  return await hydrateChecksSuccessPullRequests(
    normalized
      .filter((pull) => !prListMergeBlocker(pull, { requireExactHead: false }))
      .filter((pull) => shouldRetryChecksSuccessPullRequest(pull)),
  );
}

async function hydrateChecksSuccessPullRequests(pulls) {
  const hydratedPulls = [];
  for (let index = 0; index < pulls.length; index += hydrationConcurrency) {
    const window = pulls.slice(index, index + hydrationConcurrency);
    const outcomes = await hydratePullRequestWindow(window, hydrateChecksSuccessPullRequest);
    let acceptedLimitReached = false;

    for (const { pull, hydrated, error } of outcomes) {
      if (error) {
        const retryable = isRetryableGhError(error);
        const missing = isMissingPullRequestError(error);
        if (!retryable && !missing) throw error;
        const failure = retryable ? "failed after retries" : "could not be hydrated";
        console.error(`hydrate pull request #${pull.number} ${failure}; skipping candidate`);
        continue;
      }
      if (acceptedLimitReached || !hydrated) continue;
      const normalized = normalizePrListPullRequest(hydrated);
      if (!acceptHydratedChecksSuccessPullRequest(normalized)) continue;
      hydratedPulls.push(normalized);
      if (limit !== "all" && hydratedPulls.length >= limitForHydration) acceptedLimitReached = true;
    }

    if (acceptedLimitReached) break;
  }
  return hydratedPulls;
}

function acceptHydratedChecksSuccessPullRequest(pull) {
  const ref = `#${pull.number}`;
  const headSha = normalizedGitSha(pull.headRefOid);
  if (!headSha) {
    console.error(`skip pull request ${ref} after hydration: head SHA unavailable`);
    return false;
  }

  const baseSha = normalizedGitSha(pull.baseRefOid);
  if (!baseSha) {
    recordChecksSuccessRefresh(pull, {
      status: "skipped",
      reason: "base_snapshot_unavailable",
      headSha,
      baseSha: null,
    });
    console.error(`skip pull request ${ref} after hydration: base snapshot unavailable`);
    return false;
  }

  if (baseSha !== checksSuccessMainSha) {
    return refreshStaleChecksSuccessPullRequest(pull, { headSha, baseSha });
  }

  const hasUnsettledMergeability = hasUnknownMergeability(pull);
  const blockerView = hasUnsettledMergeability ? omitUnknownMergeability(pull) : pull;
  if (prListMergeBlocker(blockerView)) {
    console.error(`skip pull request ${ref} after hydration: ${hydratedPullRequestSummary(pull)}`);
    return false;
  }
  if (hasUnsettledMergeability) {
    console.error(
      `pull request ${ref} mergeability remains UNKNOWN after polling; deferring exact decision to external preflight`,
    );
  }
  return true;
}

function refreshStaleChecksSuccessPullRequest(pull, { headSha, baseSha }) {
  const ref = `#${pull.number}`;
  if (hasUnknownMergeability(pull)) {
    recordChecksSuccessRefresh(pull, {
      status: "skipped",
      reason: "mergeability_unknown",
      headSha,
      baseSha,
    });
    console.error(`skip stale-base pull request ${ref}: mergeability is ambiguous`);
    return false;
  }

  const refreshBlockerView =
    String(pull.mergeStateStatus ?? "").toUpperCase() === "BEHIND"
      ? { ...pull, mergeStateStatus: "CLEAN" }
      : pull;
  if (prListMergeBlocker(refreshBlockerView)) {
    recordChecksSuccessRefresh(pull, {
      status: "skipped",
      reason: "preflight_blocker",
      headSha,
      baseSha,
    });
    console.error(`skip stale-base pull request ${ref}: ${hydratedPullRequestSummary(pull)}`);
    return false;
  }

  if (!refreshStaleChecksSuccessBranches) {
    recordChecksSuccessRefresh(pull, {
      status: "skipped",
      reason: "refresh_disabled",
      headSha,
      baseSha,
    });
    console.error(`skip stale-base pull request ${ref}: branch refresh is disabled`);
    return false;
  }
  if (dryRun) {
    recordChecksSuccessRefresh(pull, {
      status: "skipped",
      reason: "dry_run",
      headSha,
      baseSha,
    });
    console.error(`skip stale-base pull request ${ref}: dry-run does not update branches`);
    return false;
  }
  if (pull.maintainerCanModify !== true) {
    recordChecksSuccessRefresh(pull, {
      status: "skipped",
      reason: pull.maintainerCanModify === false ? "maintainer_cannot_modify" : "maintainer_modify_permission_unknown",
      headSha,
      baseSha,
    });
    console.error(`skip stale-base pull request ${ref}: maintainer branch write is unavailable`);
    return false;
  }
  const pullRequestId = String(pull.id ?? "").trim();
  if (!pullRequestId) {
    recordChecksSuccessRefresh(pull, {
      status: "skipped",
      reason: "pull_request_id_unavailable",
      headSha,
      baseSha,
    });
    console.error(`skip stale-base pull request ${ref}: GraphQL node ID unavailable`);
    return false;
  }
  if (checksSuccessRefreshAttempts >= limitForHydration) {
    recordChecksSuccessRefresh(pull, {
      status: "skipped",
      reason: "refresh_limit_reached",
      headSha,
      baseSha,
    });
    console.error(`skip stale-base pull request ${ref}: branch refresh limit reached`);
    return false;
  }

  checksSuccessRefreshAttempts += 1;
  try {
    ghRaw([
      "api",
      "graphql",
      "-f",
      `query=${UPDATE_PULL_REQUEST_BRANCH_MUTATION}`,
      "-F",
      `pullRequestId=${pullRequestId}`,
      "-F",
      `expectedHeadOid=${headSha}`,
      "-F",
      "updateMethod=REBASE",
    ]);
    recordChecksSuccessRefresh(pull, {
      status: "requested",
      reason: "stale_base",
      headSha,
      baseSha,
    });
    console.error(`requested rebase refresh for stale-base pull request ${ref} at head ${headSha}`);
  } catch (error) {
    const reason = checksSuccessRefreshFailureReason(error);
    recordChecksSuccessRefresh(pull, {
      status: "failed",
      reason,
      headSha,
      baseSha,
    });
    console.error(`skip stale-base pull request ${ref}: ${reason}`);
  }
  return false;
}

function recordChecksSuccessRefresh(pull, { status, reason, headSha, baseSha }) {
  checksSuccessRefreshes.push({
    ref: `#${pull.number}`,
    status,
    reason,
    expected_head_sha: headSha,
    base_ref_oid: baseSha,
    live_main_sha: checksSuccessMainSha,
    update_method: status === "requested" || status === "failed" ? "rebase" : null,
  });
}

function checksSuccessRefreshFailureReason(error) {
  const message = String(error?.stderr ?? error?.message ?? error);
  if (/HTTP 403|Resource not accessible|forbidden|not permitted/i.test(message)) return "update_branch_forbidden";
  if (/HTTP 409|Conflict/i.test(message)) return "update_branch_conflict";
  if (/HTTP 422|expectedHeadOid|expected head|Validation Failed/i.test(message)) return "update_branch_rejected";
  return "update_branch_failed";
}

function fetchChecksSuccessMainSha() {
  const payload = ghJsonWithRetry(["api", `repos/${repo}/git/ref/heads/main`], {
    operation: "fetch checks-success main SHA",
  });
  const sha = normalizedGitSha(payload?.object?.sha);
  if (!sha) throw new Error(`GitHub ref heads/main for ${repo} did not return a 40-character SHA`);
  return sha;
}

function normalizedGitSha(value) {
  const sha = String(value ?? "").trim().toLowerCase();
  return /^[0-9a-f]{40}$/.test(sha) ? sha : null;
}

async function hydrateChecksSuccessPullRequest(number) {
  const attempts = numberFromEnv("CLOWNFISH_CHECKS_SUCCESS_MERGEABILITY_POLL_ATTEMPTS", 3);
  const delayMs = nonNegativeNumberFromEnv("CLOWNFISH_CHECKS_SUCCESS_MERGEABILITY_POLL_DELAY_MS", 1_000);
  let hydrated = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    hydrated = await hydratePullRequestForPrListFallbackAsync(number);
    if (!hasUnknownMergeability(hydrated)) return hydrated;
    if (attempt < attempts) {
      console.error(`pull request #${number} mergeability is UNKNOWN on attempt ${attempt}/${attempts}; polling`);
      if (delayMs > 0) await sleepMsAsync(delayMs);
    }
  }
  return hydrated;
}

function hasUnknownMergeability(pull) {
  return [pull?.mergeable, pull?.mergeStateStatus].some(isUnknownMergeabilityValue);
}

function omitUnknownMergeability(pull) {
  return {
    ...pull,
    mergeable: isUnknownMergeabilityValue(pull.mergeable) ? null : pull.mergeable,
    mergeStateStatus: isUnknownMergeabilityValue(pull.mergeStateStatus) ? null : pull.mergeStateStatus,
  };
}

function isUnknownMergeabilityValue(value) {
  return String(value ?? "").toUpperCase() === "UNKNOWN";
}

function hydratedPullRequestSummary(pull) {
  const failingChecks = latestStatusChecks(pull.statusCheckRollup ?? [])
    .filter(isFailingCheck)
    .map(checkName);
  return [
    `mergeable=${String(pull.mergeable ?? "missing")}`,
    `merge_state=${String(pull.mergeStateStatus ?? "missing")}`,
    `review=${String(pull.reviewDecision ?? "missing")}`,
    `base=${String(pull.baseRefName ?? "missing")}`,
    `draft=${Boolean(pull.isDraft)}`,
    `failing_checks=${failingChecks.join(",") || "none"}`,
  ].join(" ");
}

async function fetchOpenPullRequestsFromPrList() {
  if (hydrateIncludeRefs) {
    const pulls = fetchOpenPullRequestsFromIncludedRefs();
    if (!checksSuccessPreflight) return pulls;
    return pulls
      .filter((pull) => shouldRetryChecksSuccessPullRequest(pull))
      .filter(acceptHydratedChecksSuccessPullRequest);
  }

  const search = String(
    args.search ??
      args["pr-list-search"] ??
      args.pr_list_search ??
      remediationPrListSearchQuery(),
  );
  let pulls;
  if (conflictingBranchRepairInventory) {
    pulls = await fetchOpenPullRequestsFromPrListFallback();
  } else {
    try {
      pulls = ghJsonWithRetry(
        [
          "pr",
          "list",
          "--repo",
          repo,
          "--state",
          "open",
          "--search",
          search,
          "--limit",
          String(searchLimit),
          "--json",
          prListFields(),
        ],
        { operation: "list open pull request inventory" },
      );
    } catch (error) {
      if (!isRetryableGhError(error)) throw error;
      console.error("list open pull request inventory failed after retries; falling back to search plus per-PR hydration");
      pulls = await fetchOpenPullRequestsFromPrListFallback();
    }
  }
  if (!Array.isArray(pulls)) throw new Error("GitHub PR list returned a non-array payload");
  const normalized = pulls.map(normalizePrListPullRequest);
  if (checksSuccessPreflight) {
    return normalized
      .filter((pull) => shouldRetryChecksSuccessPullRequest(pull))
      .filter(acceptHydratedChecksSuccessPullRequest);
  }
  if (conflictingBranchRepairInventory) return normalized;
  return normalized.filter((pull) => !prListMergeBlocker(pull));
}

function fetchOpenPullRequestsFromIncludedRefs() {
  const pulls = [];
  for (const ref of includeRefs) {
    let hydrated;
    try {
      hydrated = hydratePullRequestForPrListFallback(Number(ref.slice(1)));
    } catch (error) {
      if (!isRetryableGhError(error)) throw error;
      console.error(`hydrate pull request ${ref} failed after retries; skipping candidate`);
      continue;
    }
    if (!hydrated) continue;
    const normalized = normalizePrListPullRequest(hydrated);
    if (!checksSuccessPreflight && !conflictingBranchRepairInventory && prListMergeBlocker(normalized)) continue;
    pulls.push(normalized);
    if (limit !== "all" && pulls.length >= limitForHydration) break;
  }
  return pulls;
}

async function fetchOpenPullRequestsFromPrListFallback() {
  const searchCandidates = (await fetchOpenPullRequestsFromSearch())
    .filter((pull) => {
      const ref = `#${pull.number}`;
      if (includeRefs && !includeRefs.has(ref)) return false;
      if (skipExisting && existingRefs.has(ref)) return false;
      const labels = labelNames(pull.labels);
      if (!includeSecurity && hasExactSecuritySignal({ title: pull.title, labels })) return false;
      return true;
    })
    .slice(0, prListFallbackSearchLimit);
  const pulls = [];
  for (let index = 0; index < searchCandidates.length; index += hydrationConcurrency) {
    const window = searchCandidates.slice(index, index + hydrationConcurrency);
    const outcomes = await hydratePullRequestWindow(window, hydratePullRequestForPrListFallbackAsync);
    let acceptedLimitReached = false;

    for (const { pull, hydrated, error } of outcomes) {
      if (error) {
        if (!isRetryableGhError(error)) throw error;
        console.error(`hydrate pull request #${pull.number} failed after retries; skipping candidate`);
        continue;
      }
      if (acceptedLimitReached || !hydrated) continue;
      const normalized = normalizePrListPullRequest(hydrated);
      if (!conflictingBranchRepairInventory && prListMergeBlocker(normalized)) continue;
      if (conflictingBranchRepairInventory && !conflictingBranchRepairProfile(normalized)) continue;
      pulls.push(hydrated);
      if (limit !== "all" && pulls.length >= limitForHydration) acceptedLimitReached = true;
    }

    if (acceptedLimitReached) break;
  }
  return pulls;
}

async function hydratePullRequestWindow(pulls, hydrate) {
  return await Promise.all(
    pulls.map(async (pull) => {
      try {
        return { pull, hydrated: await hydrate(pull.number), error: null };
      } catch (error) {
        return { pull, hydrated: null, error };
      }
    }),
  );
}

function hydratePullRequestForPrListFallback(number) {
  const pull = ghJsonWithRetry(
    [
      "pr",
      "view",
      String(number),
      "--repo",
      repo,
      "--json",
      prListFields(),
    ],
    { operation: `hydrate pull request #${number}` },
  );
  if (!pull || typeof pull !== "object") return null;
  return pull;
}

async function hydratePullRequestForPrListFallbackAsync(number) {
  const pull = await ghJsonWithRetryAsync(
    [
      "pr",
      "view",
      String(number),
      "--repo",
      repo,
      "--json",
      prListFields(),
    ],
    { operation: `hydrate pull request #${number}` },
  );
  if (!pull || typeof pull !== "object") return null;
  return pull;
}

function prListFields() {
  return [
    "assignees",
    "author",
    "baseRefName",
    "baseRefOid",
    "body",
    "changedFiles",
    "createdAt",
    "deletions",
    "additions",
    "headRefOid",
    "id",
    "isDraft",
    "labels",
    "maintainerCanModify",
    "mergeable",
    "mergeStateStatus",
    "number",
    "comments",
    "reviewDecision",
    "statusCheckRollup",
    "title",
    "updatedAt",
    "url",
  ].join(",");
}

function remediationPrListSearchQuery() {
  if (strategy !== "remediation") return "state:open";
  if (conflictingBranchRepairInventory) return "state:open base:main sort:updated-asc";
  if (checksSuccessPreflight) {
    return [
      "state:open",
      "base:main",
      "status:success",
      '-label:"maintainer"',
      '-label:"status: ⏳ waiting on author"',
      '-label:"status: 📣 needs proof"',
      '-label:"status: 🔁 re-review loop"',
      '-label:"status: 🛠️ actively grinding"',
      '-label:"status: 🚀 automerge armed"',
      '-label:"triage: needs-real-behavior-proof"',
      '-label:"triage: mock-only-proof"',
    ].join(" ");
  }
  return [
    'label:"status: 👀 ready for maintainer look"',
    'label:"proof: sufficient"',
    "base:main",
    '-label:"status: ⏳ waiting on author"',
    '-label:"status: 📣 needs proof"',
    '-label:"triage: needs-real-behavior-proof"',
    '-label:"triage: mock-only-proof"',
  ].join(" ");
}

function normalizeSearchPullRequest(raw) {
  return {
    number: raw.number,
    title: raw.title,
    url: raw.url,
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
    isDraft: raw.isDraft,
    changedFiles: raw.changedFiles,
    additions: raw.additions,
    deletions: raw.deletions,
    author: typeof raw.author === "string" ? { login: raw.author } : raw.author,
    authorAssociation: raw.authorAssociation,
    body: raw.body,
    labels: { nodes: arrayNodes(raw.labels, "name") },
    assignees: { nodes: arrayNodes(raw.assignees, "login") },
    comments: { totalCount: commentCount(raw) },
    reviews: { totalCount: Number(raw.reviewsCount ?? raw.reviews?.totalCount ?? 0) },
  };
}

function normalizePrListPullRequest(raw) {
  return {
    id: raw.id,
    number: raw.number,
    title: raw.title,
    url: raw.url,
    createdAt: raw.createdAt,
    updatedAt: raw.updatedAt,
    isDraft: raw.isDraft,
    changedFiles: raw.changedFiles,
    additions: raw.additions,
    deletions: raw.deletions,
    author: typeof raw.author === "string" ? { login: raw.author } : raw.author,
    authorAssociation: raw.authorAssociation,
    baseRefName: raw.baseRefName,
    baseRefOid: raw.baseRefOid,
    headRefOid: raw.headRefOid,
    mergeable: raw.mergeable,
    mergeStateStatus: raw.mergeStateStatus,
    reviewDecision: raw.reviewDecision,
    maintainerCanModify: raw.maintainerCanModify,
    statusCheckRollup: raw.statusCheckRollup,
    body: raw.body,
    labels: { nodes: arrayNodes(raw.labels, "name") },
    assignees: { nodes: arrayNodes(raw.assignees, "login") },
    comments: normalizeComments(raw.comments, raw.commentsCount),
    reviews: { totalCount: Number(raw.reviewsCount ?? raw.reviews?.totalCount ?? 0) },
  };
}

function normalizeComments(value, explicitCount = null) {
  const source = Array.isArray(value) ? value : Array.isArray(value?.nodes) ? value.nodes : [];
  const nodes = source
    .map((comment) => {
      if (!comment || typeof comment !== "object") return null;
      return {
        author: {
          login: asciiString(comment.author?.login ?? comment.user?.login ?? ""),
        },
        body: asciiString(comment.body ?? ""),
        createdAt: nullableAscii(comment.createdAt ?? comment.created_at),
        updatedAt: nullableAscii(comment.updatedAt ?? comment.updated_at),
        url: nullableAscii(comment.url ?? comment.html_url),
      };
    })
    .filter(Boolean);
  const totalCount = Number(explicitCount ?? value?.totalCount ?? nodes.length);
  return {
    totalCount: Number.isFinite(totalCount) ? totalCount : nodes.length,
    nodes,
  };
}

function prListMergeBlocker(raw, { requireExactHead = checksSuccessPreflight } = {}) {
  if (strategy !== "remediation") return false;
  const labels = labelNames(raw.labels);
  const mergeRisk = hasMergeRiskLabel(labels);
  if (hasExactSecuritySignal({ title: raw.title, labels }) || hasSecuritySensitiveText(raw.title, raw.body ?? "", labels)) return true;
  if (!includeMergeRisk && mergeRisk) return true;
  if (raw.isDraft) return true;
  if (checksSuccessPreflight) {
    const authorAssociation = asciiString(raw.authorAssociation ?? "");
    const unexpectedAssignee = assigneeNames(raw.assignees).some((login) => login.toLowerCase() !== "vincentkoc");
    if (requireExactHead && !/^[0-9a-f]{40}$/i.test(String(raw.headRefOid ?? ""))) return true;
    if (isMaintainerAssociated(authorAssociation) || hasMaintainerLabel(labels)) return true;
    if (unexpectedAssignee) return true;
    if (hasStatusBlockedLabel(labels)) return true;
    if (hasChecksSuccessScopeBlocker(raw.title, labels)) return true;
  }
  if (raw.baseRefName && raw.baseRefName !== "main") return true;
  if (includeMergeRisk && mergeRisk) return false;
  if (["CHANGES_REQUESTED", "REVIEW_REQUIRED"].includes(String(raw.reviewDecision ?? ""))) return true;
  if (raw.mergeable && raw.mergeable !== "MERGEABLE") return true;
  if (raw.mergeStateStatus && !isAcceptableMergeState(raw)) return true;
  return latestStatusChecks(raw.statusCheckRollup ?? []).some(isFailingCheck);
}

function isFailingCheck(check) {
  const name = checkName(check);
  if (IGNORED_CHECKS.has(name) || IGNORED_CHECKS.has(String(check.workflowName ?? ""))) return false;
  const status = String(check.status ?? check.state ?? "").toUpperCase();
  const conclusion = String(check.conclusion ?? "").toUpperCase();
  return ["COMPLETED", "SUCCESS"].includes(status) && conclusion && !PASSING_CHECK_CONCLUSIONS.has(conclusion);
}

function isAcceptableMergeState(view) {
  const state = String(view.mergeStateStatus ?? "");
  if (CLEAN_MERGE_STATES.has(state)) return true;
  return state === "UNSTABLE" && view.mergeable === "MERGEABLE" && latestStatusChecks(view.statusCheckRollup ?? []).every((check) => !isFailingCheck(check));
}

function latestStatusChecks(checks) {
  const latest = new Map();
  for (const check of checks) {
    const key = `${String(check.workflowName ?? "")}\0${checkName(check)}`;
    const prior = latest.get(key);
    if (!prior || checkTimestamp(check) >= checkTimestamp(prior)) latest.set(key, check);
  }
  return [...latest.values()];
}

function checkTimestamp(check) {
  const value = Date.parse(String(check.completedAt ?? check.completed_at ?? check.startedAt ?? check.started_at ?? ""));
  return Number.isFinite(value) ? value : 0;
}

function checkName(check) {
  return String(check.name ?? check.context ?? "unknown check");
}

function commentCount(raw) {
  if (Array.isArray(raw.comments)) return raw.comments.length;
  return Number(raw.commentsCount ?? raw.comments?.totalCount ?? 0);
}

function hasMaintainerLabel(labels) {
  return labels.some((label) => /^maintainer$/i.test(label));
}

function hasStatusBlockedLabel(labels) {
  return labels.some((label) => /needs proof|re-review loop|actively grinding|waiting on author|automerge armed/i.test(label));
}

function arrayNodes(value, key) {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      if (typeof item === "string") return { [key]: item };
      if (item && typeof item === "object") return item;
      return null;
    })
    .filter(Boolean);
}

function classifyCandidate(raw) {
  const labels = labelNames(raw.labels);
  const assignees = assigneeNames(raw.assignees);
  const title = asciiString(raw.title ?? "");
  const authorAssociation = asciiString(raw.authorAssociation ?? "");
  const body = asciiString(raw.body ?? "");
  const files = Array.isArray(raw.files) ? raw.files.map(asciiString).filter(Boolean) : [];
  const repairProfile = conflictingBranchRepairInventory ? conflictingBranchRepairProfile(raw) : null;
  const bucket = repairProfile
    ? "conflicting_branch_repair"
    : chooseBucket({ raw, title, labels, assignees, authorAssociation });
  const base = {
    number: Number(raw.number),
    ref: `#${raw.number}`,
    title,
    author: asciiString(raw.author?.login ?? ""),
    author_association: authorAssociation || null,
    head_sha: nullableAscii(raw.headRefOid),
    labels,
    assignees,
    is_draft: Boolean(raw.isDraft),
    created_at: nullableAscii(raw.createdAt),
    updated_at: nullableAscii(raw.updatedAt),
    url: asciiString(raw.url ?? ""),
    body_excerpt: excerpt(body),
    files,
    file_count: files.length,
    comments: Number(raw.comments?.totalCount ?? 0),
    reviews: Number(raw.reviews?.totalCount ?? 0),
    changed_files: Number(raw.changedFiles ?? files.length),
    additions: Number(raw.additions ?? 0),
    deletions: Number(raw.deletions ?? 0),
    bucket,
    repair_profile: repairProfile,
  };
  return strategy === "low-signal" ? classifyLowSignalCandidate(base, { raw, body }) : base;
}

function conflictingBranchRepairProfile(raw) {
  const labels = labelNames(raw.labels);
  if (raw.baseRefName !== "main") return null;
  if (Boolean(raw.isDraft)) return null;
  if (raw.maintainerCanModify !== true) return null;
  if (hasExactSecuritySignal({ title: asciiString(raw.title ?? ""), labels })) return null;

  const mergeable = String(raw.mergeable ?? "").toUpperCase();
  const mergeStateStatus = String(raw.mergeStateStatus ?? "").toUpperCase();
  if (mergeable !== "CONFLICTING" && mergeStateStatus !== "DIRTY") return null;

  const headSha = normalizedGitSha(raw.headRefOid);
  if (!headSha) return null;

  const decisions = [];
  for (const [index, comment] of (raw.comments?.nodes ?? []).entries()) {
    const author = String(comment?.author?.login ?? comment?.user?.login ?? "").toLowerCase();
    if (!["clawsweeper", "clawsweeper[bot]"].includes(author)) continue;
    const body = String(comment?.body ?? "");
    const markers = parseClawSweeperDecisionMarkers(body);
    if (!markers) continue;
    let profile = null;
    if (
      markers.some(
        (marker) =>
          markerMatchesPull(marker, raw, headSha) &&
          ((marker.kind === "action" &&
            ["fix-required", "repair-required", "address-review", "fix-ci"].includes(marker.action)) ||
            (marker.kind === "verdict" &&
              ["needs-changes", "changes-requested", "fix-required", "repair-required"].includes(marker.action))),
      )
    ) {
      profile = "review_fix";
    } else if (isExactHeadReadyReview({ body, markers, raw, headSha })) {
      profile = "rebase_only";
    }
    if (!profile) continue;
    const timestamp = Date.parse(comment?.updatedAt ?? comment?.updated_at ?? comment?.createdAt ?? comment?.created_at ?? "");
    decisions.push({
      profile,
      timestamp: Number.isFinite(timestamp) ? timestamp : Number.NEGATIVE_INFINITY,
      index,
    });
  }
  decisions.sort((left, right) => left.timestamp - right.timestamp || left.index - right.index);
  return decisions.at(-1)?.profile ?? null;
}

function parseClawSweeperDecisionMarkers(body) {
  const text = String(body ?? "");
  const openers = text.match(/<!--\s*clawsweeper-(?:action|verdict):/gi) ?? [];
  const matches = [
    ...text.matchAll(/<!--\s*clawsweeper-(action|verdict):\s*([a-z0-9_-]+)\s+([^>]*)-->/gi),
  ];
  if (openers.length !== matches.length) return null;

  const markers = [];
  for (const match of matches) {
    const attrs = parseStrictMarkerAttributes(match[3]);
    if (!attrs) return null;
    markers.push({
      kind: match[1].toLowerCase(),
      action: match[2].toLowerCase(),
      attrs,
    });
  }
  return markers;
}

function parseStrictMarkerAttributes(input) {
  const attrs = {};
  const tokens = String(input ?? "").trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return null;
  for (const token of tokens) {
    const match = token.match(/^([a-z0-9_-]+)=([^\s=]+)$/i);
    if (!match) return null;
    const key = match[1].toLowerCase();
    if (Object.hasOwn(attrs, key)) return null;
    attrs[key] = match[2];
  }
  return attrs;
}

function markerMatchesPull(marker, raw, headSha) {
  return (
    marker.attrs.item === String(raw.number) &&
    marker.attrs.sha?.toLowerCase() === headSha &&
    marker.attrs.confidence === "high"
  );
}

function isExactHeadReadyReview({ body, markers, raw, headSha }) {
  if (markers.some((marker) => marker.kind === "action")) return false;
  const verdicts = markers.filter((marker) => marker.kind === "verdict");
  if (
    verdicts.length !== 1 ||
    verdicts[0].action !== "needs-human" ||
    !markerMatchesPull(verdicts[0], raw, headSha)
  ) {
    return false;
  }

  const reviewOpeners = String(body).match(/<!--\s*clawsweeper-review(?=\s)/gi) ?? [];
  const reviews = [...String(body).matchAll(/<!--\s*clawsweeper-review\s+([^>]*)-->/gi)];
  if (reviewOpeners.length !== 1 || reviews.length !== 1) return false;
  const reviewAttrs = parseStrictMarkerAttributes(reviews[0][1]);
  if (!reviewAttrs || reviewAttrs.item !== String(raw.number)) return false;

  const normalized = String(body).trim().toLowerCase();
  const firstLine = normalized.split(/\r?\n/, 1)[0].trim();
  return (
    /^codex review:\s*needs maintainer review before merge\./.test(firstLine) &&
    /result:\s*ready for maintainer review\./.test(normalized) &&
    /(review metrics:\*\*\s*none identified|review metrics:\s*none identified|no (?:clawsweeper |automated )?repair(?: job| lane)? is (?:needed|indicated)|no concrete (?:code finding|contributor-facing blocker left)|remaining action is normal maintainer review)/.test(
      normalized,
    )
  );
}

function dedupeCandidates(candidates) {
  const byRef = new Map();
  for (const candidate of candidates) {
    const existing = byRef.get(candidate.ref);
    if (!existing || String(candidate.updated_at).localeCompare(String(existing.updated_at)) > 0) {
      byRef.set(candidate.ref, candidate);
    }
  }
  return [...byRef.values()];
}

function hydrateLowSignalPullRequestFiles(rawPullRequests) {
  const selected = rawPullRequests
    .filter((raw) => !hasLowSignalPrefilterBlocker(raw))
    .sort((left, right) => String(left.updatedAt ?? "").localeCompare(String(right.updatedAt ?? "")))
    .slice(0, lowSignalHydrateLimit);
  if (selected.length === 0) return;

  const filesByNumber = fetchLivePullRequestFiles(selected.map((raw) => Number(raw.number)));
  for (const raw of selected) {
    raw.files = filesByNumber.get(Number(raw.number)) ?? [];
  }
}

function hasLowSignalPrefilterBlocker(raw) {
  const labels = labelNames(raw.labels);
  const assignees = assigneeNames(raw.assignees);
  const title = asciiString(raw.title ?? "");
  const body = asciiString(raw.body ?? "");
  const authorAssociation = asciiString(raw.authorAssociation ?? "");
  if (isMaintainerAssociated(authorAssociation)) return true;
  if (Boolean(raw.isDraft)) return true;
  if (assignees.length > 0) return true;
  if (daysSince(raw.createdAt) < 14) return true;
  if (hasExactSecuritySignal({ title, labels })) return true;
  return labels.some((label) => {
    const normalized = normalizeLabel(label);
    return blockedLowSignalLabelPatterns.some((pattern) => pattern.test(normalized));
  });
}

function fetchLivePullRequestFiles(numbers) {
  const out = new Map();
  const uniqueNumbers = [...new Set(numbers.filter(Number.isInteger))];
  for (let index = 0; index < uniqueNumbers.length; index += 25) {
    const batch = uniqueNumbers.slice(index, index + 25);
    const payload = ghJsonWithRetry(["api", "graphql", "-f", `query=${renderPullRequestFilesQuery(batch)}`], {
      operation: "hydrate low-signal PR files",
    });
    const fatalErrors = (payload.errors ?? []).filter(
      (error) => !/^Could not resolve to a PullRequest with the number of \d+\.$/.test(String(error.message ?? "")),
    );
    if (fatalErrors.length > 0) {
      throw new Error(`GitHub GraphQL failed while hydrating PR files: ${fatalErrors.map((error) => error.message).join("; ")}`);
    }
    for (const number of batch) {
      const node = payload.data?.repository?.[`pr${number}`];
      if (!node) continue;
      const files = (node.files?.nodes ?? []).map((file) => asciiString(file.path ?? "")).filter(Boolean);
      if (node.files?.pageInfo?.hasNextPage) files.push("__truncated__");
      out.set(number, files);
      const raw = fetchOpenPullRequests.cache?.find((item) => Number(item.number) === number);
      if (raw) raw.body = node.body ?? "";
    }
  }
  return out;
}

function renderPullRequestFilesQuery(numbers) {
  return `query {
  repository(owner: ${jsonString(owner)}, name: ${jsonString(name)}) {
${numbers
  .map(
    (number) => `    pr${number}: pullRequest(number: ${number}) {
      body
      files(first: 100) {
        nodes { path }
        pageInfo { hasNextPage }
      }
    }`,
  )
  .join("\n")}
  }
}`;
}

function classifyLowSignalCandidate(base, { body }) {
  const signals = [];
  const blockers = [];
  const files = base.files;
  const labels = base.labels.map((label) => normalizeLabel(label));

  if (base.bucket === "security_route_candidate" || hasSecuritySensitiveText(base.title, body, base.labels)) {
    blockers.push("security-sensitive text or labels");
  }
  if (isMaintainerAssociated(base.author_association)) blockers.push(`author association is ${base.author_association}`);
  if (base.is_draft) blockers.push("draft PR");
  if (base.assignees.length > 0) blockers.push("assigned PR");
  if (daysSince(base.created_at) < 14) blockers.push("new PR");
  if (base.changed_files > maxFiles || files.length > maxFiles || files.includes("__truncated__")) {
    blockers.push("too many or truncated changed files");
  }
  for (const label of base.labels) {
    const normalized = normalizeLabel(label);
    const blockedBy = blockedLowSignalLabelPatterns.find((pattern) => pattern.test(normalized));
    if (blockedBy) blockers.push(`close-blocking label: ${label}`);
  }

  addSignal(signals, blankTemplateSignal(body), "blank_template");
  addSignal(signals, labels.includes("triage: blank-template"), "blank_template");
  addSignal(signals, docsOnlySignal(base.title, files), "docs_only");
  addSignal(signals, testsOnlySignal(base.title, files), "test_only");
  addSignal(signals, refactorOnlySignal(base.title, body, files), "refactor_or_cleanup");
  addSignal(signals, labels.includes("triage: refactor-only"), "refactor_or_cleanup");
  addSignal(signals, labels.includes("triage: external-plugin-candidate"), "third_party_or_external_capability");
  addSignal(signals, riskyInfraSignal(base.title, files), "risky_infra");
  addSignal(signals, dirtyBranchSignal(files), "dirty_branch");
  addSignal(signals, labels.includes("triage: dirty-candidate"), "dirty_branch");

  const hasConcreteFix = /\b(fix(?:es)?|root cause|repro|regression|bug|problem)\b/i.test(`${base.title}\n${body}`);
  if (hasConcreteFix && signals.length === 1 && !signals.includes("blank_template")) {
    blockers.push("possible focused fix needs human review");
  }

  const score = blockers.length > 0 ? 0 : signals.length;
  return {
    ...base,
    bucket: score >= minScore ? "low_signal_candidate" : "low_signal_blocked",
    score,
    signals,
    blockers,
  };
}

function chooseBucket({ raw, title, labels, assignees, authorAssociation }) {
  if (strategy === "low-signal") return "low_signal_candidate";
  if (hasExactSecuritySignal({ title, labels })) return "security_route_candidate";
  if (isMaintainerAssociated(authorAssociation) || (!checksSuccessPreflight && assignees.length > 0)) {
    return "maintainer_owned";
  }
  if (Boolean(raw.isDraft)) return "draft";
  if (labels.some((label) => /needs-real-behavior-proof|needs proof|mock-only-proof|waiting on author/i.test(label))) {
    return "needs_proof";
  }
  if (strategy === "remediation" && hasMergeRiskLabel(labels)) {
    return includeMergeRisk ? "merge_risk_remediation" : "needs_human";
  }
  if (strategy === "remediation" && hasRemediationNoiseTitle(title)) {
    return "needs_human";
  }
  if (labels.some((label) => /proof:\s*sufficient|ready for maintainer look/i.test(label))) {
    return "ready_for_maintainer";
  }
  if (daysSince(raw.updatedAt) >= 14) return "stale_unassigned";
  return "recent_active";
}

function writeJob(batch, index) {
  if (conflictingBranchRepairInventory) return writeConflictingBranchRepairJob(batch, index);
  const now = new Date();
  const stamp = now.toISOString().replace(/[-:.]/g, "").slice(0, 15);
  const bucket = batch.every((item) => item.bucket === batch[0].bucket) ? batch[0].bucket : "mixed";
  const lowSignal = strategy === "low-signal";
  const inventoryScope = skipExisting
    ? "open pull requests not already represented in Clownfish jobs or results"
    : "open pull requests, including previously represented PRs being refreshed against live GitHub state";
  const clusterId = `live-pr-inventory-${stamp}-${String(index).padStart(3, "0")}`;
  const filePath = path.join(outDir, `${clusterId}.md`);
  const refs = batch.map((candidate) => candidate.ref);
  const remediation = strategy === "remediation";
  const autonomousRemediation = remediation && mode === "autonomous";
  const allowGuardedForcePush = autonomousRemediation && allowForcePush;
  const mergeRiskRemediation = remediation && batch.some((candidate) => hasMergeRiskLabel(candidate.labels));
  const allowedActions = remediation
    ? mergeRiskRemediation
      ? ["fix", "raise_pr", ...(allowGuardedForcePush ? ["force_push"] : [])]
      : ["merge", "fix", "raise_pr", ...(allowGuardedForcePush ? ["force_push"] : [])]
    : lowSignal
      ? ["comment", "close"]
      : ["comment", "label", "close"];
  const blockedActions = remediation
    ? [
        "comment",
        "label",
        "close",
        ...(mergeRiskRemediation ? ["merge"] : []),
        ...(allowGuardedForcePush ? [] : ["force_push"]),
        "bypass_checks",
      ]
    : lowSignal
      ? ["force_push", "bypass_checks", "merge", "fix", "raise_pr", "label"]
    : ["force_push", "bypass_checks", "merge", "fix", "raise_pr"];
  const requireHumanFor = remediation
    ? ["security_sensitive", "unclear_canonical", "broad_code_delta", "active_author_followup"]
    : lowSignal
      ? [
          "security_sensitive",
          "maintainer_signal",
          "active_author_followup",
          "focused_bug_fix",
          "green_checks",
          "technical_correctness_judgment",
        ]
    : [
        "security_sensitive",
        "maintainer_signal",
        "active_author_followup",
        "green_checks",
        "focused_bug_fix",
        "technical_correctness_judgment",
      ];
  const markdown = [
    "---",
    `repo: ${repo}`,
    `cluster_id: ${clusterId}`,
    `mode: ${mode}`,
    ...(checksSuccessPreflight
      ? ["expected_head_shas:", ...yamlList(batch.map((candidate) => `${candidate.ref}=${candidate.head_sha}`))]
      : []),
    ...(lowSignal ? ["triage_policy: low_signal_prs"] : []),
    "allowed_actions:",
    ...yamlList(allowedActions),
    "blocked_actions:",
    ...yamlList(blockedActions),
    "require_human_for:",
    ...yamlList(requireHumanFor),
    "canonical: []",
    "candidates:",
    ...yamlList(refs),
    "cluster_refs:",
    ...yamlList(refs),
    "security_policy: central_security_only",
    "security_sensitive: false",
    `allow_instant_close: ${remediation || lowSignal ? "false" : "true"}`,
    ...(lowSignal ? ["allow_low_signal_pr_close: true"] : []),
    `allow_fix_pr: ${remediation ? "true" : "false"}`,
    `allow_merge: ${remediation && !mergeRiskRemediation ? "true" : "false"}`,
    `allow_post_merge_close: false`,
    `require_fix_before_close: false`,
    `canonical_hint: ${quoteYaml(
      checksSuccessPreflight
        ? "This is a fresh PR external-preflight shard. Classify each PR independently. If the PR is otherwise merge-shaped but lacks deterministic exact-head validation and Codex review, emit a blocked merge_candidate with reason external_merge_preflight_required."
        : mergeRiskRemediation
          ? "This is a repair-only merge-risk remediation shard. Classify each PR independently. Do not emit merge_candidate; emit a bounded fix_artifact only for a concrete repair, otherwise keep or route the PR."
        : remediation
        ? "This is a fresh PR remediation inventory shard. Classify each PR independently. A complete merge preflight is required only for a merge recommendation; a repair requires a complete executable fix artifact."
        : lowSignal
          ? "No canonical is needed; this is an opt-in low-signal PR cleanup sweep generated from live GitHub inventory."
        : "This is a live PR inventory shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical.",
    )}`,
    `notes: ${quoteYaml(
      checksSuccessPreflight
        ? `Generated from live GitHub checks-success PR inventory on ${now.toISOString()}; bucket=${bucket}; filtered for external merge preflight candidates with no obvious maintainer-author, status, security, merge-risk, check, or mergeability blockers.`
        : remediation
          ? `Generated from live GitHub open PR inventory on ${now.toISOString()}; bucket=${bucket}; ${
            autonomousRemediation
              ? "autonomous remediation assessment. Mutations are limited to deterministic merge/fix gates."
              : "plan-only remediation assessment. No GitHub mutation is permitted from this job."
          }${mergeRiskRemediation ? " Merge-risk candidates are repair-only and must not be merged from this shard." : ""}`
          : lowSignal
            ? `Generated from live GitHub open PR inventory on ${now.toISOString()}; bucket=${bucket}; low-signal candidates were prefiltered for stale unassigned PRs. Maintainer comments and reviews are still rechecked by the worker and applicator before close.`
            : `Generated from live GitHub open PR inventory on ${now.toISOString()}; bucket=${bucket}; only safe close/comment/label actions are allowed.`,
    )}`,
    "---",
    "",
    `# ${checksSuccessPreflight ? "Checks-Success PR External Preflight" : remediation ? "PR Remediation Inventory" : lowSignal ? "Low-Signal PR Sweep" : "Live PR Inventory"} ${index}`,
    "",
    checksSuccessPreflight
      ? "This is a high-volume autonomous external-preflight shard over fresh checks-success pull requests."
      : remediation
        ? `This is a high-volume ${autonomousRemediation ? "autonomous" : "plan-only"} remediation shard over fresh ${mergeRiskRemediation ? "merge-risk repair" : "maintainer-ready"} pull requests.`
        : lowSignal
          ? "This is an opt-in low-signal cleanup shard over stale open pull requests from live GitHub inventory."
          : `This is a high-volume live inventory shard over ${inventoryScope}.`,
    "",
    "## Goal",
    "",
    checksSuccessPreflight
      ? `Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit a planned merge only with complete merge preflight. If the only missing proof is deterministic exact-head validation and Codex \`/review\`, emit a blocked \`merge_candidate\` with reason \`external_merge_preflight_required\`, \`expected_head_sha\`, \`target_updated_at\`, and concrete evidence. The deterministic executor will run external merge preflight and guarded apply. Route security-sensitive PRs centrally and use \`needs_human\` only for unclear scope, active author follow-up, broad work, or another specific maintainer decision.`
      : mergeRiskRemediation
        ? `Hydrate live GitHub state for each listed PR and produce a current repair path. Do not emit \`merge_candidate\`; these PRs have live merge-risk labels and this shard blocks merge. Emit bounded \`fix_needed\` plus \`build_fix_artifact\` and \`open_fix_pr\` only for a concrete repair with a complete executable \`fix_artifact\`; otherwise classify the PR \`keep_related\`, \`keep_independent\`, \`route_security\`, or \`needs_human\`. Use \`needs_human\` only for unclear scope, active author follow-up, broad work, or another specific maintainer decision. In autonomous mode, the deterministic executor owns any fix PR mutation after re-fetching live state.`
      : remediation
        ? `Hydrate live GitHub state for each listed PR and produce a current finalization path. Emit \`merge_candidate\` only with a complete merge preflight. If a PR is otherwise merge-shaped but lacks deterministic exact-head validation and Codex \`/review\`, emit a blocked \`merge_candidate\` with reason \`external_merge_preflight_required\`, \`expected_head_sha\`, \`target_updated_at\`, and concrete evidence so the executor can run the external merge preflight. Missing merge preflight alone is not a \`needs_human\` reason. Emit bounded \`fix_needed\` plus \`build_fix_artifact\` and \`open_fix_pr\` only for a concrete repair with a complete executable \`fix_artifact\`; otherwise classify the PR \`keep_related\` or \`keep_independent\`. Use \`needs_human\` only for unclear scope, active author follow-up, broad work, or another specific maintainer decision. Route security-sensitive PRs centrally. ${
          autonomousRemediation
            ? "In autonomous mode, the deterministic applicator/executor owns the actual merge or fix PR mutation after re-fetching live state and enforcing merge preflight."
            : "Do not perform mutations: this job is plan-only."
        }`
      : lowSignal
        ? "Use `instructions/low-signal-prs.md`. Review only the listed open pull requests. Emit `close_low_signal` with `classification: \"low_signal\"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`. The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions."
      : "Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. Do not merge, fix, or raise PRs.",
    "",
    "## Inventory",
    "",
    ...batch.flatMap(candidateBlock),
    "",
  ].join("\n");

  if (!dryRun) fs.writeFileSync(filePath, cleanGeneratedMarkdown(markdown));
  return {
    path: path.relative(repoRoot(), filePath),
    cluster_id: clusterId,
    bucket,
    candidates: refs,
    dry_run: dryRun,
  };
}

function writeConflictingBranchRepairJob(batch, index) {
  if (batch.length !== 1) throw new Error("conflicting branch repair jobs must be singleton");
  const candidate = batch[0];
  const clusterId = `conflicting-branch-repair-${candidate.number}-${candidate.head_sha}`;
  const existingJobPath = existingConflictingRepairJobs.get(clusterId);
  if (!dryRun && existingJobPath) {
    if (publishedConflictingRepairClusterIds.has(clusterId)) return null;
    return {
      path: path.relative(repoRoot(), existingJobPath),
      cluster_id: clusterId,
      bucket: "conflicting_branch_repair",
      candidates: [candidate.ref],
      retry: true,
      dry_run: false,
    };
  }
  const filePath = path.join(outDir, `${clusterId}.md`);
  const rebaseOnly = candidate.repair_profile === "rebase_only";
  const calibration = rebaseOnly
    ? "Rebase the current maintainer-editable contributor branch onto current main, validate it, and run Codex /review. Preserve the existing contributor change and do not broaden the PR."
    : "Repair the exact-current-head actionable ClawSweeper finding on the maintainer-editable contributor branch, rebase it onto current main, validate it, and run Codex /review without broadening the PR.";
  const goal = rebaseOnly
    ? "Rebase the existing maintainer-editable contributor branch onto current main. Preserve the current implementation, resolve only rebase conflicts, run changed-surface validation and Codex `/review`, then push the repaired contributor branch."
    : "Address the exact-current-head actionable ClawSweeper finding on the existing maintainer-editable contributor branch. Keep the repair bounded to that finding, rebase onto current main, run changed-surface validation and Codex `/review`, then push the repaired contributor branch.";
  const markdown = [
    "---",
    `repo: ${repo}`,
    `cluster_id: ${clusterId}`,
    `mode: ${mode}`,
    "allowed_actions:",
    ...yamlList(["fix", "raise_pr", "force_push"]),
    "blocked_actions:",
    ...yamlList(["bypass_checks", "comment", "label", "close", "merge"]),
    "require_human_for:",
    ...yamlList(["security_sensitive", "failing_checks", "unresolved_review_threads", "broad_code_delta"]),
    "maintainer_calibration:",
    ...yamlList([calibration]),
    "canonical:",
    ...yamlList([candidate.ref]),
    "candidates:",
    ...yamlList([candidate.ref]),
    "cluster_refs:",
    ...yamlList([candidate.ref]),
    "expected_head_shas:",
    ...yamlList([`${candidate.ref}=${candidate.head_sha}`]),
    "allow_instant_close: false",
    "allow_fix_pr: true",
    "allow_merge: false",
    "allow_post_merge_close: false",
    "require_fix_before_close: false",
    "repair_strategy: repair_contributor_branch",
    ...(rebaseOnly ? ["rebase_only: true"] : []),
    "security_policy: central_security_only",
    "security_sensitive: false",
    `canonical_hint: ${quoteYaml(
      `${candidate.ref} is the sole canonical PR. Repair its maintainer-editable contributor branch against current main before any separate exact-head merge finalization.`,
    )}`,
    `notes: ${quoteYaml(
      `Generated from live GitHub conflicting branch repair intake; profile=${candidate.repair_profile}; exact reviewed head=${candidate.head_sha}. Do not merge, close, label, comment, create a replacement PR, or expand scope.`,
    )}`,
    "---",
    "",
    `# Conflicting branch repair: ${candidate.ref}`,
    "",
    `Re-hydrate ${candidate.ref} and emit \`fix_needed\` plus a complete \`build_fix_artifact\` using \`repair_strategy: repair_contributor_branch\`.`,
    "",
    goal,
    "",
    "Do not merge, close, label, comment, create a replacement PR, or broaden the PR.",
    "",
    "## Inventory",
    "",
    ...candidateBlock(candidate),
    "",
  ].join("\n");

  if (!dryRun) {
    fs.writeFileSync(filePath, cleanGeneratedMarkdown(markdown));
    existingConflictingRepairJobs.set(clusterId, filePath);
  }
  return {
    path: path.relative(repoRoot(), filePath),
    cluster_id: clusterId,
    bucket: "conflicting_branch_repair",
    candidates: [candidate.ref],
    dry_run: dryRun,
  };
}

function defaultBucketFor({ mode, strategy }) {
  if (checksSuccessPreflight) return "all";
  if (strategy === "remediation") return "ready_for_maintainer";
  if (strategy === "low-signal") return "low_signal_candidate";
  return mode === "autonomous" ? "stale_unassigned" : "all";
}

function candidateBlock(candidate) {
  return [
    `### ${candidate.ref} ${candidate.title}`,
    "",
    `- bucket: ${candidate.bucket}`,
    ...(candidate.repair_profile ? [`- repair profile: ${candidate.repair_profile}`] : []),
    `- author: ${candidate.author || "unknown"}`,
    `- author association: ${candidate.author_association || "unknown"}`,
    `- draft: ${candidate.is_draft ? "yes" : "no"}`,
    `- assignees: ${candidate.assignees.join(", ") || "none"}`,
    `- labels: ${candidate.labels.join(", ") || "none"}`,
    `- live updated: ${candidate.updated_at || "unknown"}`,
    `- live url: ${candidate.url || "unknown"}`,
    "",
  ];
}

function existingMentionedRefs(roots) {
  const refs = new Set();
  const visited = new Set();
  for (const root of roots) {
    if (!fs.existsSync(root) || visited.has(root)) continue;
    visited.add(root);
    for (const file of markdownJobFiles(root)) addStructuredJobRefs(refs, file);
  }
  return refs;
}

function conflictingRepairJobs(roots) {
  const jobs = new Map();
  const visited = new Set();
  for (const root of roots) {
    if (!fs.existsSync(root) || visited.has(root)) continue;
    visited.add(root);
    for (const file of markdownJobFiles(root)) {
      try {
        const clusterId = String(parseJob(file).frontmatter.cluster_id ?? "");
        if (clusterId.startsWith("conflicting-branch-repair-") && !jobs.has(clusterId)) jobs.set(clusterId, file);
      } catch {
        // Non-job markdown does not participate in conflicting repair deduplication.
      }
    }
  }
  return jobs;
}

function publishedResultClusterIds(root, targetRepo, prefix) {
  const clusterIds = new Set();
  if (!fs.existsSync(root)) return clusterIds;
  for (const entry of fs.readdirSync(root, { recursive: true })) {
    const file = path.join(root, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    const raw = fs.readFileSync(file, "utf8");
    const frontmatter = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!frontmatter) continue;
    const parsed = parsePublishedResultFrontmatter(frontmatter[1]);
    if (String(parsed.repo ?? "") !== targetRepo) continue;
    const clusterId = String(parsed.cluster_id ?? "");
    if (clusterId.startsWith(prefix)) clusterIds.add(clusterId);
  }
  return clusterIds;
}

function existingRefsForStrategy() {
  if (checksSuccessPreflight) return new Set();
  if (strategy === "low-signal") return existingLowSignalRefs();
  return existingMentionedRefs([existingDir]);
}

function existingChecksSuccessAttempts(root) {
  const attempts = new Map();
  if (!fs.existsSync(root)) return attempts;
  for (const file of markdownJobFiles(root)) {
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes("# Checks-Success PR External Preflight")) continue;
    try {
      if (String(parseJob(file).frontmatter.repo ?? "") !== repo) continue;
    } catch {
      continue;
    }
    const generatedAt = Date.parse(
      text.match(/Generated from live GitHub checks-success PR inventory on ([^;"]+)/)?.[1] ?? "",
    );
    if (!Number.isFinite(generatedAt)) continue;
    for (const section of text.split(/^### /m).slice(1)) {
      const ref = section.match(/^(#\d+)\b/)?.[1];
      const updatedAt = section.match(/^- live updated:\s*(.+)$/m)?.[1]?.trim();
      if (!ref || !updatedAt) continue;
      const prior = attempts.get(ref);
      if (!prior || generatedAt > prior.generatedAt) attempts.set(ref, { generatedAt, updatedAt });
    }
  }
  return attempts;
}

function shouldRetryChecksSuccessPullRequest(pull) {
  const ref = `#${pull.number}`;
  if (existingRefs.has(ref)) return false;
  const attempt = checksSuccessAttempts.get(ref);
  if (!attempt) return true;
  const updatedAt = String(pull.updatedAt ?? "");
  if (!updatedAt || updatedAt !== attempt.updatedAt) return true;
  const cooldownMs = checksSuccessRetryCooldownHours * 60 * 60 * 1000;
  return Date.now() - attempt.generatedAt >= cooldownMs;
}

function existingLowSignalRefs() {
  const jobsDir = path.join(repoRoot(), "jobs");
  const refs = new Set();
  if (!fs.existsSync(jobsDir)) return refs;
  for (const file of markdownJobFiles(jobsDir)) {
    const text = fs.readFileSync(file, "utf8");
    if (!text.includes("triage_policy: low_signal_prs")) continue;
    for (const match of text.matchAll(/#(\d+)\b/g)) refs.add(`#${match[1]}`);
  }
  return refs;
}

function addStructuredJobRefs(refs, file) {
  try {
    const job = parseJob(file);
    for (const ref of [...normalizeRefs(job.frontmatter.candidates), ...normalizeRefs(job.frontmatter.cluster_refs)]) {
      refs.add(ref);
    }
  } catch {
    // Result markdown and ad hoc reports are not necessarily job files.
  }
}

function existingPublishedResultRefs(root, targetRepo, actionPolicy) {
  if (!fs.existsSync(root)) return new Set();
  const refs = new Set();
  for (const entry of fs.readdirSync(root, { recursive: true })) {
    const file = path.join(root, String(entry));
    if (!file.endsWith(".md") || !fs.statSync(file).isFile()) continue;
    const raw = fs.readFileSync(file, "utf8");
    const frontmatter = raw.match(/^---\n([\s\S]*?)\n---\n?/);
    if (!frontmatter) continue;
    const parsed = parsePublishedResultFrontmatter(frontmatter[1]);
    if (String(parsed.repo ?? "") !== targetRepo) continue;
    for (const ref of publishedResultRefs(raw, actionPolicy)) refs.add(ref);
  }
  return refs;
}

function publishedResultRefs(markdown, actionPolicy) {
  if (actionPolicy === "all") return workerActionRows(markdown).map((row) => row.target);
  const refs = new Set();
  for (const row of applyActionRows(markdown)) {
    if (row.status === "executed") refs.add(row.target);
  }
  for (const row of workerActionRows(markdown)) {
    if (row.action === "keep_closed" || row.action === "route_security") refs.add(row.target);
  }
  return [...refs];
}

function mergeRefs(target, source) {
  for (const ref of source) target.add(ref);
  return target;
}

function parsePublishedResultFrontmatter(text) {
  const out = {};
  for (const line of text.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!match) continue;
    out[match[1]] = String(match[2] ?? "").trim().replace(/^"(.*)"$/, "$1");
  }
  return out;
}

function applyActionRows(markdown) {
  return actionTableRows(markdown, "Apply Actions");
}

function workerActionRows(markdown) {
  return actionTableRows(markdown, "Worker Action Matrix");
}

function actionTableRows(markdown, headingName) {
  const heading = markdown.match(new RegExp(`^## ${escapeRegExp(headingName)}[^\\n]*\\n`, "m"));
  if (!heading) return [];
  const rest = markdown.slice((heading.index ?? 0) + heading[0].length);
  const nextHeading = rest.search(/\n## /);
  const section = nextHeading >= 0 ? rest.slice(0, nextHeading) : rest;
  return section
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.startsWith("| #"))
    .map(parseActionRow)
    .filter(Boolean);
}

function parseActionRow(line) {
  const cells = line
    .split("|")
    .slice(1, -1)
    .map((cell) => cell.trim());
  if (cells.length < 3) return null;
  return {
    target: cells[0],
    action: cells[1],
    status: cells[2],
  };
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function markdownJobFiles(root) {
  const files = [];
  for (const entry of fs.readdirSync(root, { recursive: true })) {
    const file = path.join(root, String(entry));
    if (!fs.statSync(file).isFile()) continue;
    if (file.endsWith(".md")) files.push(file);
  }
  return files;
}

function normalizeRefs(values) {
  if (!Array.isArray(values)) return [];
  return values
    .map((value) => String(value ?? "").trim())
    .filter((value) => /^#\d+$/.test(value));
}

function optionalRefsFile(filePath) {
  if (!filePath) return null;
  const absolutePath = path.resolve(String(filePath));
  const refs = new Set(
    fs
      .readFileSync(absolutePath, "utf8")
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("# "))
      .map((line) => (line.match(/^#?\d+$/) ? `#${line.replace(/^#/, "")}` : line))
      .filter((line) => /^#\d+$/.test(line)),
  );
  if (refs.size === 0) throw new Error(`--include-refs-file ${absolutePath} did not contain any refs`);
  return refs;
}

function compareCandidates(left, right) {
  if (sort === "recent") return String(right.updated_at).localeCompare(String(left.updated_at));
  if (sort === "bucket") return left.bucket.localeCompare(right.bucket) || staleCompare(left, right);
  return staleCompare(left, right);
}

function staleCompare(left, right) {
  return String(left.updated_at).localeCompare(String(right.updated_at));
}

function hasExactSecuritySignal({ title, labels }) {
  const exactSecurityLabel = labels.some((label) =>
    /^(?:security|security[-_: ]sensitive|security[:/].+|type:\s*security|kind:\s*security|impact:\s*security|clawsweeper:needs-security-review)$/i.test(label),
  );
  return exactSecurityLabel || hasSecuritySensitiveText(title, "", labels);
}

function hasMergeRiskLabel(labels) {
  return labels.some((label) => /^merge-risk:/i.test(String(label ?? "").trim()));
}

function hasRemediationNoiseTitle(title) {
  return /^(?:test|tests|docs|doc|chore|refactor|style|lint|ci)(?:\(.+?\))?:/i.test(String(title ?? "").trim());
}

function hasChecksSuccessScopeBlocker(title, labels) {
  if (hasRemediationNoiseTitle(title) || /^feat(?:\(.+?\))?:/i.test(String(title ?? "").trim())) return true;
  if (!labels.some((label) => /^rating:\s*(?:platinum|diamond)\b/i.test(String(label ?? "").trim()))) return true;
  return labels.some((label) =>
    /^(?:app:\s*web-ui|docs|size:\s*XL|feature:|P(?:[3-9]|[1-9]\d+)\b)/i.test(String(label ?? "").trim()),
  );
}

function isMaintainerAssociated(value) {
  return ["OWNER", "MEMBER", "COLLABORATOR"].includes(String(value ?? "").toUpperCase());
}

function daysSince(value) {
  const time = Date.parse(value ?? "");
  if (!Number.isFinite(time)) return 0;
  return Math.floor((Date.now() - time) / (24 * 60 * 60 * 1000));
}

function labelNames(value) {
  return (value?.nodes ?? [])
    .map((label) => label?.name)
    .filter(Boolean)
    .map(asciiString);
}

function assigneeNames(value) {
  return (value?.nodes ?? [])
    .map((assignee) => assignee?.login)
    .filter(Boolean)
    .map(asciiString);
}

function numberArg(name, fallback) {
  const value = Number(args[name] ?? fallback);
  if (!Number.isInteger(value) || value < 1) throw new Error(`--${name} must be a positive integer`);
  return value;
}

function boundedInteger(value, fallback, label, minimum, maximum) {
  if (value === undefined || value === null || value === "") return fallback;
  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < minimum || parsed > maximum) {
    throw new Error(`${label} must be an integer from ${minimum} to ${maximum}`);
  }
  return parsed;
}

function booleanFlag(value) {
  if (value === true) return true;
  if (value === false || value == null) return false;
  return ["1", "true", "yes", "on"].includes(String(value).trim().toLowerCase());
}

function strictBooleanFlag(value, name) {
  if (value === true) return true;
  if (value === false || value == null) return false;
  const normalized = String(value).trim().toLowerCase();
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;
  die(`--${name} must be true or false`);
}

function limitArg(name, fallback) {
  const raw = args[name] ?? fallback;
  if (String(raw).toLowerCase() === "all") return "all";
  const value = Number(raw);
  if (!Number.isInteger(value) || value < 1) throw new Error(`--${name} must be a positive integer or all`);
  return value;
}

function yamlList(values) {
  if (values.length === 0) return ["  []"];
  return values.map((value) => `  - ${quoteYaml(value)}`);
}

function quoteYaml(value) {
  return JSON.stringify(asciiString(value));
}

function jsonString(value) {
  return JSON.stringify(String(value));
}

function ghRaw(ghArgs) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  return execFileSync(ghCommand, ghArgs, {
    cwd: repoRoot(),
    env,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 128 * 1024 * 1024,
    timeout: Number(process.env.CLOWNFISH_GITHUB_IMPORT_PAGE_TIMEOUT_MS ?? 180_000),
  });
}

async function ghRawAsync(ghArgs) {
  const env = { ...process.env, NO_COLOR: "1", CLICOLOR: "0" };
  delete env.FORCE_COLOR;
  const { stdout } = await execFileAsync(ghCommand, ghArgs, {
    cwd: repoRoot(),
    env,
    encoding: "utf8",
    maxBuffer: 128 * 1024 * 1024,
    timeout: Number(process.env.CLOWNFISH_GITHUB_IMPORT_PAGE_TIMEOUT_MS ?? 180_000),
  });
  return stdout;
}

function ghJsonWithRetry(ghArgs, { operation }) {
  const attempts = numberFromEnv("CLOWNFISH_GITHUB_IMPORT_RETRIES", 4);
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return JSON.parse(stripAnsi(ghRaw(ghArgs)) || "null");
    } catch (error) {
      lastError = error;
      if (attempt === attempts || !isRetryableGhError(error)) break;
      const delayMs = Math.min(30_000, 1_000 * 2 ** (attempt - 1));
      console.error(`${operation} failed on attempt ${attempt}/${attempts}; retrying in ${delayMs}ms`);
      sleepMs(delayMs);
    }
  }
  throw lastError;
}

async function ghJsonWithRetryAsync(ghArgs, { operation }) {
  const attempts = numberFromEnv("CLOWNFISH_GITHUB_IMPORT_RETRIES", 4);
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return JSON.parse(stripAnsi(await ghRawAsync(ghArgs)) || "null");
    } catch (error) {
      lastError = error;
      if (attempt === attempts || !isRetryableGhError(error)) break;
      const delayMs = Math.min(30_000, 1_000 * 2 ** (attempt - 1));
      console.error(`${operation} failed on attempt ${attempt}/${attempts}; retrying in ${delayMs}ms`);
      await sleepMsAsync(delayMs);
    }
  }
  throw lastError;
}

function isRetryableGhError(error) {
  const message = String(error?.stderr ?? error?.message ?? error);
  return /timed out|timeout|TLS handshake|connection reset|502 Bad Gateway|503 Service Unavailable|504 Gateway Timeout|secondary rate|Something went wrong while executing your query/i.test(
    message,
  );
}

function isMissingPullRequestError(error) {
  const message = String(error?.stderr ?? error?.message ?? error);
  return /Could not resolve to a PullRequest with the number of \d+\.|HTTP 404: Not Found/i.test(message);
}

function numberFromEnv(name, fallback) {
  const value = Number(process.env[name] ?? fallback);
  if (!Number.isInteger(value) || value < 1) return fallback;
  return value;
}

function nonNegativeNumberFromEnv(name, fallback) {
  const value = Number(process.env[name] ?? fallback);
  if (!Number.isInteger(value) || value < 0) return fallback;
  return value;
}

function sleepMs(milliseconds) {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, milliseconds);
}

function sleepMsAsync(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function stripAnsi(text) {
  return String(text ?? "").replace(/\u001b\[[0-9;]*m/g, "");
}

function cleanGeneratedMarkdown(value) {
  return String(value).replace(/[ \t]+$/gm, "").replace(/\n+$/, "\n");
}

function nullableAscii(value) {
  if (value == null) return null;
  return asciiString(value);
}

function sanitizeJsonValue(value) {
  if (typeof value === "string") return asciiString(value);
  if (Array.isArray(value)) return value.map(sanitizeJsonValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [asciiString(key), sanitizeJsonValue(item)]));
  }
  return value;
}

function excerpt(value, max = 240) {
  const text = asciiString(value);
  return text.length > max ? `${text.slice(0, max - 3)}...` : text;
}

function argValues(argv, names, fallback) {
  const keys = new Set(names.map((name) => `--${name}`));
  const values = [];
  for (let index = 0; index < argv.length; index += 1) {
    const item = argv[index];
    const equalMatch = item.match(/^(--[^=]+)=(.*)$/);
    if (equalMatch) {
      if (keys.has(equalMatch[1])) values.push(equalMatch[2]);
      continue;
    }
    if (!keys.has(item)) continue;
    const next = argv[index + 1];
    if (next && !next.startsWith("--")) {
      values.push(next);
      index += 1;
    } else {
      values.push("true");
    }
  }
  return values.length > 0 ? values : fallback;
}

function compileLabelPatterns(values) {
  return listArgValues(values).map((value) => {
    const normalized = normalizeLabel(value);
    if (normalized.includes("*")) return new RegExp(`^${normalized.split("*").map(escapeRegExp).join(".*")}$`);
    return new RegExp(`^${escapeRegExp(normalized)}$`);
  });
}

function listArgValues(value) {
  const values = Array.isArray(value) ? value : [value];
  return values
    .flatMap((item) => String(item ?? "").split(/[\n,]/))
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeLabel(label) {
  return String(label ?? "").toLowerCase().replace(/\s+/g, " ").trim();
}

function blankTemplateSignal(body) {
  const text = String(body ?? "");
  if (/Describe the problem and fix in 2.?5 bullets:\s*[\r\n]+\s*-\s*Problem:\s*[\r\n]+\s*-\s*Fix:/i.test(text)) {
    return true;
  }
  const placeholders = ["Problem:", "Why it matters:", "Describe the problem and fix"];
  return placeholders.filter((placeholder) => text.includes(placeholder)).length >= 2 && text.length < 700;
}

function docsOnlySignal(title, files) {
  return /\bdocs?\b/i.test(title) && files.length > 0 && files.every((file) => isDocsPath(file));
}

function testsOnlySignal(title, files) {
  return /\btest\b/i.test(title) && files.length > 0 && files.every((file) => isTestPath(file));
}

function refactorOnlySignal(title, body, files) {
  return /\b(refactor|cleanup|format|chore)\b/i.test(title) && !/#\d+\b/.test(`${title}\n${body}`) && files.length > 0;
}

function riskyInfraSignal(title, files) {
  return (
    /\b(ci|infra|docker|build|release|workflow)\b/i.test(title) &&
    files.some((file) => /^\.github\/|^Dockerfile|^scripts\/|^fly\.|^render\.|^docker-compose/.test(file))
  );
}

function dirtyBranchSignal(files) {
  if (files.length < 12) return false;
  const topLevels = new Set(files.map((file) => file.split("/")[0]));
  return topLevels.size >= 4 || (files.some((file) => file.includes(".generated")) && topLevels.size >= 2);
}

function isDocsPath(file) {
  return /(^docs\/|^README|\.md$|\.mdx$|^skills\/|^\.github\/ISSUE_TEMPLATE)/.test(file);
}

function isTestPath(file) {
  return /(\.test\.|\.spec\.|__tests__|^test\/|^test-fixtures\/)/.test(file);
}

function addSignal(signals, enabled, name) {
  if (enabled && !signals.includes(name)) signals.push(name);
}

function asciiString(value) {
  return String(value ?? "")
    .replace(/[^\x09\x0a\x0d\x20-\x7e]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function firstAvailableCommand(commands) {
  for (const command of commands) {
    const result = spawnSync(command, ["--version"], { cwd: repoRoot(), stdio: "ignore" });
    if (result.status === 0) return command;
  }
  return commands[0];
}

function die(message) {
  console.error(message);
  process.exit(2);
}
