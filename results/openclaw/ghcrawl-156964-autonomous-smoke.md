---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156964-autonomous-smoke"
mode: "autonomous"
run_id: "25102789215"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102789215"
head_sha: "9a08eb9ac982c5d395ca81610998f5f78efc9ef6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.106Z"
canonical: "https://github.com/openclaw/openclaw/issues/37855"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37855"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156964-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102789215](https://github.com/openclaw/clownfish/actions/runs/25102789215)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/37855

## Summary

No GitHub mutation is planned. The live preflight artifact shows both seed issues are already closed; #37855 is the historical canonical/disposition thread, #47903 was already closed as its duplicate, and the linked contributor PRs are closed unmerged context only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #37855 | keep_closed | skipped | canonical | Representative #37855 is no longer open; keep it as the historical canonical/disposition thread and do not mutate a closed issue. |
| #47903 | keep_closed | skipped | duplicate | Already closed duplicate of the historical canonical issue; no further action is allowed or needed. |
| #37881 | keep_closed | skipped | superseded | Closed contributor PR is historical evidence only; it is not a viable merge or fix target in this run. |
| #37885 | keep_closed | skipped | superseded | Closed contributor PR is not a live merge target, and the canonical core issue has since been closed as plugin-surface work. |

## Needs Human

- none
