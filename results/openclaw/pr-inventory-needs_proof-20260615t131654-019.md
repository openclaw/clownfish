---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-019"
mode: "plan"
run_id: "27549042369"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549042369"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.566Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 39
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-needs_proof-20260615T131654-019

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549042369](https://github.com/openclaw/clownfish/actions/runs/27549042369)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The job explicitly says this is not a dedupe cluster and has no canonical; low-signal closeout, merge, fix, and raise_pr are disabled. I classified each hydrated open PR independently, routed exact security-sensitive/boundary-shaped items to central security handling, and emitted no mutating close/merge/fix action.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 39 |
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
| #92065 | keep_independent | planned | independent | Distinct memory-core behavior PR needing normal review/proof; no duplicate or superseding canonical was hydrated. |
| #46895 | keep_independent | planned | independent | Independent UI slash-command PR; insufficient evidence for close, merge, or duplicate classification. |
| #92072 | keep_independent | planned | independent | Distinct gateway/provider compatibility PR needing proof; keep in backlog rather than close. |
| #92023 | route_security | planned | security_sensitive | Exact PR concerns secret/credential policy coverage; central security handling should decide scope. |
| #92021 | route_security | planned | security_sensitive | Contains explicit SSRF/credential-exfiltration claim. |
| #88828 | keep_independent | planned | independent | Useful but independent gateway lifecycle PR; keep for normal review/repair. |
| #92091 | keep_independent | planned | independent | Broad independent Discord feature/fix; not a duplicate and not merge-ready. |
| #92036 | keep_independent | planned | independent | Distinct fal provider fix; keep for focused review and check repair. |
| #92025 | keep_independent | planned | independent | Independent CLI usability change needing proof; keep open. |
| #92028 | keep_independent | planned | independent | Independent skills feature PR requiring technical review and proof. |
| #92128 | keep_independent | planned | independent | Distinct channel/session behavior PR; keep independent. |
| #92149 | route_security | planned | security_sensitive | Touches gateway identity/auth signature boundary. |
| #92164 | keep_independent | planned | independent | Distinct memory-core search fix; keep for proof and check repair. |
| #92188 | keep_independent | planned | independent | Independent diagnostic cleanup fix; keep for normal check repair/review. |
| #92202 | keep_independent | planned | independent | Draft independent PR needing validation; keep open, do not close contributor work. |
| #92179 | keep_independent | planned | independent | Independent TUI rendering improvement requiring proof. |
| #92167 | keep_independent | planned | independent | Independent multi-surface media fix; keep for docs/check repair. |
| #92221 | keep_independent | planned | independent | Independent broad draft feature PR needing maintainer review/proof. |
| #92254 | keep_independent | planned | independent | Independent channel model-picker bugfix; keep for proof. |
| #92203 | keep_independent | planned | independent | Independent plugin startup/auth-backend fix; keep for review/proof. |
| #92090 | keep_independent | planned | independent | Independent cron marker fix; keep for check repair and review. |
| #92303 | keep_independent | planned | independent | Independent stuck-session recovery fix needing proof. |
| #92298 | route_security | planned | security_sensitive | Possible cross-account auth/profile state exposure. |
| #92310 | keep_independent | planned | independent | Independent Telegram delivery fix needing proof. |
| #92334 | keep_independent | planned | independent | Independent exec-adjacent behavior fix; keep for review/proof rather than route whole cluster. |
| #92349 | keep_independent | planned | independent | Independent Feishu message-delivery PR needing proof. |
| #92354 | route_security | planned | security_sensitive | Possible sensitive internal-reasoning exposure. |
| #92358 | keep_independent | planned | independent | Independent gateway method-scope fix needing proof. |
| #92359 | keep_independent | planned | independent | Independent schema compatibility fix needing proof. |
| #92371 | route_security | planned | security_sensitive | Security-boundary-labeled Codex session-continuity change. |
| #92355 | keep_independent | planned | independent | Independent focused plugin availability fix; keep for maintainer review. |
| #92370 | route_security | planned | security_sensitive | Approval/security-boundary-shaped behavior change. |
| #92388 | keep_independent | planned | independent | Independent session compaction bugfix needing proof. |
| #92392 | keep_independent | planned | independent | Independent auto-reply dispatch hook fix needing proof. |
| #92351 | keep_independent | planned | independent | Independent availability/message-delivery fix; keep for normal review. |
| #92432 | keep_independent | planned | independent | Independent QA-lab fix needing proof and technical review. |
| #90637 | keep_independent | planned | independent | Useful draft contributor PR; keep independent. |
| #92342 | keep_independent | planned | independent | Broad independent draft reliability build requiring separate maintainer review. |
| #92466 | keep_independent | planned | independent | Independent third-party provider integration needing dependency/proof review. |

## Needs Human

- none
