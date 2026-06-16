function runSortKey(record) {
  const runId = Number(record.run_id);
  if (Number.isFinite(runId) && runId > 0) return runId;
  return Date.parse(record.published_at ?? "") || 0;
}

export function failedChildReason(record) {
  if (hasTerminalRecovery(record)) return null;
  if (
    (record.fix_actions ?? []).some(
      (action) =>
        ["failed", "blocked"].includes(action.status) &&
        action.retry_recommended === true &&
        action.recoverable_branch_pushed === true,
    )
  ) {
    return "recoverable fix execution failed";
  }
  return null;
}

export function selectRetryableFailedRuns(records, attempts, { allowRepeat = false } = {}) {
  const attemptedJobs = new Set((attempts ?? []).map((attempt) => attempt.source_job).filter(Boolean));
  const latestByJob = new Map();

  for (const record of records) {
    const sourceJob = record.source_job;
    if (!isActiveInboxJob(sourceJob)) continue;
    const current = latestByJob.get(sourceJob);
    if (!current || runSortKey(record) > runSortKey(current)) {
      latestByJob.set(sourceJob, record);
    }
  }

  return [...latestByJob.values()]
    .map((record) => ({ ...record, self_heal_reason: failedChildReason(record) }))
    .filter((record) => record.self_heal_reason !== null)
    .filter((record) => allowRepeat || !attemptedJobs.has(record.source_job))
    .sort((left, right) => runSortKey(right) - runSortKey(left));
}

function hasTerminalRecovery(record) {
  if ((record.apply_actions ?? []).some((action) => action.status === "executed")) return true;
  return (record.fix_actions ?? []).some((action) => ["opened", "executed", "merged"].includes(action.status));
}

export function isActiveInboxJob(sourceJob) {
  return String(sourceJob ?? "").replaceAll("\\", "/").includes("/inbox/");
}
