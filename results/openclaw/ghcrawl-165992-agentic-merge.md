---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165992-agentic-merge"
mode: "autonomous"
run_id: "24950062671"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24950062671"
head_sha: "12ab95b1fdfe6e056ab88187fdfa1969a3306b20"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T06:29:54.813Z"
canonical: "https://github.com/openclaw/openclaw/issues/41985"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41985"
canonical_pr: null
actions_total: 18
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165992-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24950062671](https://github.com/openclaw/projectclownfish/actions/runs/24950062671)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41985

## Summary

Canonical remains https://github.com/openclaw/openclaw/issues/41985. The hydrated artifact shows current main still only supports image-scoped Control UI/WebChat attachments, several sibling duplicates were already closed to #41985 on 2026-04-26, and the remaining open items split into true duplicates versus broader related follow-ups. Because no viable PR is hydrated and `require_fix_before_close` is enabled, this result keeps open duplicates non-mutating, emits a narrow non-image upload fix artifact, and marks only PR opening as blocked on missing checkout/patch material.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41985 | fix_needed | planned | canonical | #41985 is still the best live canonical umbrella for the remaining non-image Control UI/WebChat attachment gap, so the cluster needs a fix path rather than more dedupe-only closure. |
| #41985 | build_fix_artifact | planned | canonical | Prepare a narrow new-fix-PR plan for non-image upload support end-to-end while leaving download, configurability, and broader composer UX follow-ups open. |
| #41985 | open_fix_pr | blocked | canonical | The new-fix-PR path is clear, but this run cannot actually open it because no checkout or implementation branch is available. |
| #30389 | keep_related | planned | related | Keep open as a related broader WebChat UX umbrella; it is not a pure duplicate of the remaining non-image upload issue. |
| #30759 | keep_related | planned | duplicate | Same root cause as #41985, but keep non-mutating because the job requires a fix PR or merged fix before fresh duplicate closures. |
| #36440 | keep_closed | skipped | related | Already-closed related precursor; keep as evidence only and do not emit any new closure action. |
| #41992 | keep_closed | skipped | duplicate | Already closed duplicate of #41985; do not emit a second close action. |
| #43242 | keep_closed | skipped | duplicate | Already closed duplicate of #41985; keep closed. |
| #47933 | keep_related | planned | related | Keep open as related because it includes download behavior beyond the narrow upload-only fix path. |
| #48700 | keep_related | planned | duplicate | Same remaining non-image upload root cause as #41985, but keep non-mutating until a fix PR exists. |
| #51045 | keep_closed | skipped | related | Already closed image-only predecessor; keep as related historical evidence only. |
| #56298 | keep_closed | skipped | duplicate | Already closed duplicate of #41985; keep closed. |
| #56344 | keep_related | planned | related | Keep open as a related follow-up because the family match is clear but the linked candidate PR signal is unverified in the artifact. |
| #63094 | keep_closed | skipped | duplicate | Already closed duplicate of #41985; keep closed. |
| #67622 | keep_closed | skipped | duplicate | Already closed duplicate of #41985; keep closed. |
| #69185 | keep_related | planned | related | Keep open as related because it extends beyond the high-confidence non-image document upload slice. |
| #69447 | keep_related | planned | duplicate | High-confidence duplicate of #41985, held open non-mutating until the fix path exists. |
| #70438 | keep_related | planned | related | Keep open as related because it tracks configuration/policy design beyond the basic non-image upload bug. |

## Needs Human

- none
