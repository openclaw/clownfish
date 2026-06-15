---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13583-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109710431"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109710431"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.733Z"
canonical: "https://github.com/openclaw/openclaw/issues/64224"
canonical_issue: "https://github.com/openclaw/openclaw/issues/64224"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-13583-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109710431](https://github.com/openclaw/clownfish/actions/runs/25109710431)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/64224

## Summary

Classified the hydrated open items only. #64224 is the best surviving open canonical for the remaining cooldown-scope family. #44353, #62022, and #64902 are related but distinct open issues with unique remaining work, so no instant close is safe. #72984 is a related active PR, but it needs maintainer judgment before repair or merge because review/CI blockers remain.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #64224 | keep_canonical | planned | canonical | #64224 is the clearest open representative for the unresolved provider/profile cooldown granularity problem after the original #55834 canonical was closed as implemented. |
| #44353 | keep_related | planned | related | Related fallback-family issue, but not a duplicate of #64224 and not safe to close because it has a distinct remaining subagent fallback propagation bug. |
| #62022 | keep_related | planned | related | Related auth-rotation issue with no high-confidence hydrated canonical fix target for closure in this dedupe-only pass. |
| #64902 | keep_related | planned | related | Related fallback observability issue, but it has a unique forensic logging scope and should remain open. |
| #72984 | needs_human | planned | needs_human | Maintainer judgment is needed for #72984's precedence and trust-design decision before Clownfish can repair or route it as a candidate fix. |

## Needs Human

- #72984 needs maintainer decision on the subagent model precedence change and session-lineage trust assumptions; it also has failing checks and unresolved bot review feedback.
