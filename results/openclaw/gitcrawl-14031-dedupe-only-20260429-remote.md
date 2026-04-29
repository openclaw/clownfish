---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14031-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129092231"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129092231"
head_sha: "c6792f0250a6710fb4bca0bf6ba7777e5c4f0fbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T19:31:21.619Z"
canonical: "https://github.com/openclaw/openclaw/pull/68554"
canonical_issue: "https://github.com/openclaw/openclaw/issues/70857"
canonical_pr: "https://github.com/openclaw/openclaw/pull/68554"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14031-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129092231](https://github.com/openclaw/clownfish/actions/runs/25129092231)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/68554

## Summary

Representative #46561 is already closed and fixed on current main. The hydrated open set is over-broad rather than duplicate-clean: #68554 is the clearest open canonical PR for the lock-held/skipCache reread latency subfamily, #70857 stays open against it, and #51553, #60595, #68036, and #45438 remain related but not safe to close from this dedupe-only job. No GitHub mutations were performed or recommended beyond non-mutating keep classifications.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #46561 | keep_closed | skipped | fixed_by_candidate | Already closed in hydrated state; retained only to document that the representative is obsolete. |
| #68554 | keep_canonical | planned | canonical | Best open canonical PR for the session-store lock-held/skipCache reread latency subfamily; not mergeable by this job because merge and fix actions are blocked. |
| #70857 | keep_related | planned | related | Related issue should stay open until #68554 or an equivalent maintainer-owned fix lands and is validated. |
| #51553 | keep_related | planned | related | Useful related PR with distinct scope; keep open for maintainer review instead of dedupe closure. |
| #60595 | keep_related | planned | related | Related clone-performance PR; not safe to close as fixed or superseded from the hydrated evidence alone. |
| #68036 | keep_related | planned | related | Related performance PR with unresolved bot findings and failing checks; keep open for normal maintainer review. |
| #45438 | keep_related | planned | related | Related issue remains intentionally open after partial fix #73737; no close action is safe. |

## Needs Human

- none
