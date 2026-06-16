---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13974-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585128872"
workflow_run_id: "27585128872"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585128872"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.486Z"
canonical: "#52186"
canonical_issue: "#52186"
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13974-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585128872](https://github.com/openclaw/clownfish/actions/runs/27585128872)

Workflow conclusion: success

Worker result: planned

Canonical: #52186

## Summary

No executable close/comment/label action is safe or needed for this pass. The obsolete representative #63706 is closed. Of the job-listed candidates, six are already closed in the hydrated live state and #52186 is the only open candidate; it is the current open canonical for the remaining TTS provider fallback/stickiness policy work. Related open linked items #42539, #57297, and #83636 are distinct follow-up threads, not duplicates to close in this cluster.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #63706 | keep_closed | skipped | superseded | Already closed canonical representative; do not emit a closure action. |
| #52186 | keep_canonical | planned | canonical | This is the only open job-listed candidate and it owns the remaining provider fallback/stickiness policy work. |
| #44833 | keep_closed | skipped | fixed_by_candidate | Already closed and resolved by a hydrated fix PR; no close action is valid. |
| #46015 | keep_closed | skipped | superseded | Already closed as superseded by the current canonical #52186; no close action is valid. |
| #47587 | keep_closed | skipped | fixed_by_candidate | Already closed by a hydrated fix PR; no close action is valid. |
| #57296 | keep_closed | skipped | related | Already closed and not the same remaining root cause as #52186; no close action is valid. |
| #61590 | keep_closed | skipped | superseded | Already closed as superseded by narrower follow-up threads; no close action is valid. |
| #63753 | keep_closed | skipped | fixed_by_candidate | Already closed and belongs to a distinct macOS Talk routing fix path; no close action is valid. |
| #42539 | keep_related | planned | related | Related TTS policy work, but a different delivery-mode/product decision from provider fallback stickiness. |
| #57297 | keep_related | planned | related | Related TTS diagnostics work, not a duplicate of #52186's provider fallback policy issue. |
| #83636 | keep_related | planned | related | Related TTS delivery work, but a separate root cause and active fix lane from #52186. |

## Needs Human

- none
