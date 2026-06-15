---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2251-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132444968"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132444968"
head_sha: "8b6ee7ffa77533bbae10cb97289fd78b142edfab"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.954Z"
canonical: "https://github.com/openclaw/openclaw/pull/48690"
canonical_issue: "https://github.com/openclaw/openclaw/issues/48488"
canonical_pr: "https://github.com/openclaw/openclaw/pull/48690"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2251-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132444968](https://github.com/openclaw/clownfish/actions/runs/25132444968)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/48690

## Summary

Classified the command-lane timeout cluster from the hydrated preflight artifact at main b83b639287298a67326f8c17cf1c1635b1d19e3d. #48488 remains the canonical open issue and #48690 remains the canonical repair PR, but no merge/fix is planned because the job is dedupe-only and #48690 still has unresolved review evidence. #52747 is quarantined to central security handling. No open non-security item is safe to close in this pass; #58244 and #68785 are distinct related command-queue work, and already-closed refs stay historical.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #48488 | keep_canonical | planned | canonical | Canonical issue stays open because the fix has not landed and #48690 is still under review. |
| #48690 | keep_canonical | planned | canonical | Best canonical PR, but not merge-ready and this dedupe-only job cannot repair or merge it. |
| #52747 | route_security | planned | security_sensitive | Security-sensitive PR is out of ProjectClownfish mutation scope; quarantine this item only and continue non-security classification. |
| #58244 | keep_related | planned | related | Related command-queue work with unique scope; not a duplicate or superseded by #48690. |
| #61732 | keep_closed | skipped | related | Already closed historical context; no closure action is valid. |
| #61774 | keep_closed | skipped | related | Already closed historical context; no closure action is valid. |
| #68381 | keep_closed | skipped | superseded | Already closed as superseded by the canonical #48690 path. |
| #68785 | keep_related | planned | related | Related but distinct command-queue feature work; not safe to close as a duplicate or superseded item in this cluster. |

## Needs Human

- none
