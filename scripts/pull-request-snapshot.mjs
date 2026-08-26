const REST_MERGE_STATES = new Set(["CLEAN", "UNSTABLE", "BLOCKED", "BEHIND", "DIRTY", "DRAFT", "HAS_HOOKS", "UNKNOWN"]);
export function fetchSettledPullRequestSnapshot({ fetchPullRequest, fetchPullRequestView, attempts, delayMs, sleep, hasPendingView = () => false }) {
  let latest = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const pull = fetchPullRequest();
    const result = reconcile(pull, fetchPullRequestView());
    latest = { pull, view: { ...result.view, snapshotBlockReason: result.reason || null } };
    if (result.terminal || (!result.retry && !hasPendingView(latest.view))) return latest;
    if (attempt < attempts && delayMs > 0) sleep(delayMs);
  }
  return latest;
}
function reconcile(pull, view) {
  const [restHead, graphHead, restBase, graphBase] =
    [pull?.head?.sha, view?.headRefOid, pull?.base?.sha, view?.baseRefOid].map(sha);
  const identityReason = mismatch("head", restHead, graphHead) || mismatch("base", restBase, graphBase);
  if (identityReason) return result(view, identityReason, true);
  if (pull?.merged_at || view?.mergedAt || view?.state === "MERGED") return result(view);
  const restState = String(pull?.mergeable_state ?? "").toUpperCase();
  if (!REST_MERGE_STATES.has(restState)) return result(view, `unsupported REST merge state: ${restState || "missing"}`, false, true);
  const restMergeable = pull?.mergeable === true ? "MERGEABLE" : pull?.mergeable === false ? "CONFLICTING" : "";
  if (!restMergeable || restState === "UNKNOWN") return result(view, `REST mergeability did not settle: mergeable=${String(pull?.mergeable)}, state=${restState}`, true);
  const graphMergeable = String(view?.mergeable ?? "UNKNOWN").toUpperCase();
  const graphState = String(view?.mergeStateStatus ?? "UNKNOWN").toUpperCase();
  if (graphMergeable !== "UNKNOWN" && graphMergeable !== restMergeable) return result(view, `REST and GraphQL mergeability disagree: REST ${restMergeable}, GraphQL ${graphMergeable}`, true);
  if (graphState !== "UNKNOWN" && graphState !== restState) return result(view, `REST and GraphQL merge state disagree: REST ${restState}, GraphQL ${graphState}`, true);
  const restMerge = optionalSha(pull?.merge_commit_sha);
  const graphMerge = optionalSha(view?.potentialMergeCommit?.oid);
  if (restMerge.invalid || graphMerge.invalid) return result(view, "REST or GraphQL test merge SHA is invalid", false, true);
  if (restMerge.sha && graphMerge.sha && restMerge.sha !== graphMerge.sha) return result(view, `test merge differs between REST ${restMerge.sha} and GraphQL ${graphMerge.sha}`, true);
  return result({ ...view, mergeable: graphMergeable === "UNKNOWN" ? restMergeable : graphMergeable,
    mergeStateStatus: graphState === "UNKNOWN" ? restState : graphState });
}
function mismatch(label, rest, graph) {
  if (!rest || !graph) return `pull request ${label} identity is unavailable from REST or GraphQL`;
  return rest === graph ? "" : `pull request ${label} differs between REST ${rest} and GraphQL ${graph}`;
}
function sha(value) {
  return /^[0-9a-f]{40}$/.test(String(value ?? "").toLowerCase()) ? String(value).toLowerCase() : "";
}
function optionalSha(value) {
  if (value === null || value === undefined || value === "") return { sha: "", invalid: false };
  const normalized = sha(value);
  return { sha: normalized, invalid: !normalized };
}
function result(view, reason = "", retry = false, terminal = false) { return { view, reason, retry, terminal }; }
