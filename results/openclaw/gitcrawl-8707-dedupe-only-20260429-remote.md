---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-8707-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136887015"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136887015"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.300Z"
canonical: "https://github.com/openclaw/openclaw/pull/54564"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/54564"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-8707-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136887015](https://github.com/openclaw/clownfish/actions/runs/25136887015)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/54564

## Summary

Hydrated preflight at main 9a3a341d93721f808d9deeae6e39c727249d2824 shows every job candidate and hydrated context ref is already closed, so no close/comment/label mutation is valid. #54564 is the landed canonical for the Hetzner AllowTcpForwarding docs subfamily; #60773 is the landed canonical for the Control UI gatewayUrl encoding subfamily; #54656, #54671, and #54677 were already closed by a maintainer as low-signal/stale docs cleanup.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #37678 | keep_closed | skipped | independent | Already closed historical Fly docs PR; no mutation is valid. |
| #54557 | keep_closed | skipped | fixed_by_candidate | Already closed linked issue covered by merged PR #54564. |
| #54564 | keep_closed | skipped | canonical | Merged canonical PR for the Hetzner AllowTcpForwarding docs subfamily; no mutation is valid. |
| #54656 | keep_closed | skipped | independent | Representative is obsolete and already closed by maintainer; no open target remains. |
| #54671 | keep_closed | skipped | related | Already closed related Control UI docs PR; no mutation is valid. |
| #54677 | keep_closed | skipped | related | Already closed related Hetzner docs PR; no mutation is valid. |
| #54954 | keep_closed | skipped | superseded | Already closed superseded PR covered by merged #54564. |
| #60773 | keep_closed | skipped | canonical | Merged canonical PR for the Control UI gatewayUrl encoding subfamily; no mutation is valid. |
| #61331 | keep_closed | skipped | superseded | Already closed superseded PR covered by merged #60773. |

## Needs Human

- none
