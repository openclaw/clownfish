---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-027"
mode: "plan"
run_id: "27551760290"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27551760290"
head_sha: "8a5b996ef10e2c54a93f0c70824bb3785eb43c75"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T14:08:35.816Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-needs_proof-20260615T131654-027

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27551760290](https://github.com/openclaw/clownfish/actions/runs/27551760290)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No canonical was selected because the job says this is not a dedupe cluster. Security-sensitive candidates are routed to central security handling; the already-closed candidate is kept closed; all other open candidates are kept independent because merge, fix, and low-signal closeout are disabled and the hydrated evidence does not support safe closure.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
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
| #89807 | keep_independent | planned | independent | Keep open for normal PR review/proof; no safe close or merge action is available in plan mode. |
| #76120 | keep_independent | planned | independent | Draft state and missing proof block merge/closeout; keep as independent backlog item. |
| #76495 | keep_independent | planned | independent | Keep open for proof and review; no duplicate/superseded evidence is hydrated. |
| #76668 | keep_independent | planned | independent | Keep open; this is a narrow docs-template PR but not safely closable or mergeable here. |
| #76806 | keep_independent | planned | independent | Keep open for proof and technical review; no safe inventory cleanup action applies. |
| #93024 | keep_independent | planned | independent | Keep open for channel-specific proof; merge and fixed-by-candidate closeout are blocked. |
| #41299 | keep_independent | planned | independent | Keep open for proof/review; no hydrated canonical supports closure. |
| #55592 | route_security | planned | security_sensitive | Quarantine this exact PR for central OpenClaw security handling; do not close, merge, label, or comment via Clownfish. |
| #59214 | route_security | planned | security_sensitive | Route only this exact PR to central security handling per preflight boundary. |
| #59898 | keep_independent | planned | independent | Keep open for focused proof and review; broad dirty candidate is not suitable for closure or merge here. |
| #61396 | keep_independent | planned | independent | Low-signal closeout is disabled by job frontmatter, so keep open as independent. |
| #64064 | keep_independent | planned | independent | Keep open for maintainer/product review and proof; not closable as duplicate in this shard. |
| #65398 | keep_independent | planned | independent | Keep open for author/maintainer repair; no closure action is safe. |
| #75554 | keep_independent | planned | independent | Keep open; broad feature/API work needs proof and review outside cleanup automation. |
| #68127 | keep_independent | planned | independent | Keep open for proof; no duplicate/superseded evidence is present. |
| #68197 | keep_independent | planned | independent | Keep open for channel behavior proof and normal review. |
| #68537 | keep_independent | planned | independent | Draft state and failed proof block merge; keep as independent. |
| #75127 | keep_independent | planned | independent | Keep open for proof and review; no closeout basis is present. |
| #75140 | route_security | planned | security_sensitive | Route this exact PR to central security handling; continue unrelated classifications. |
| #75218 | keep_independent | planned | independent | Keep open for provider feature review and proof; not a cleanup close candidate. |
| #75228 | route_security | planned | security_sensitive | Route to central security handling; no ProjectClownfish mutation. |
| #75299 | keep_independent | planned | independent | Keep open; clean checks alone are insufficient for merge or closure in this plan job. |
| #86551 | keep_independent | planned | independent | Keep open for proof/review; no close action applies to the open surviving PR. |
| #86554 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions; keep historical closed state. |
| #86898 | keep_independent | planned | independent | Keep open for technical repair and proof. |
| #87961 | keep_independent | planned | independent | Keep open for proof; no duplicate or low-signal closeout evidence is hydrated. |
| #92962 | keep_independent | planned | independent | Keep open for maintainer review; cannot recommend merge or closure. |
| #92983 | keep_independent | planned | independent | Keep open; similar-area PRs need maintainer/code review before selecting a canonical. |
| #92989 | keep_independent | planned | independent | Keep open; do not close or merge without a maintainer choice between similar PRs. |
| #90324 | route_security | planned | security_sensitive | Route to central security handling; no Clownfish mutation. |
| #93028 | keep_independent | planned | independent | Keep open for proof and review. |
| #60383 | route_security | planned | security_sensitive | Route this exact PR to central security handling and do not mutate it. |
| #76545 | keep_independent | planned | independent | Keep open for proof and review; not safe for inventory closure. |
| #70348 | keep_independent | planned | independent | Keep open for technical repair and proof. |
| #91462 | route_security | planned | security_sensitive | Route to central security handling; no closure or merge action. |
| #93045 | keep_independent | planned | independent | Keep open for maintainer review; no cleanup action applies. |
| #93030 | keep_independent | planned | independent | Keep open; clean candidate still needs normal maintainer merge gates. |
| #77653 | keep_independent | planned | independent | Keep open for proof and review. |
| #76140 | route_security | planned | security_sensitive | Route this exact PR to central security handling; keep unrelated items classified normally. |
| #54830 | keep_independent | planned | independent | Keep open; unique work is not safely closable and merge/fix are blocked. |

## Needs Human

- none
