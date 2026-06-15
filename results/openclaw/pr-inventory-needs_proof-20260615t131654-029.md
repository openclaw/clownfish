---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-029"
mode: "plan"
run_id: "27549042827"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549042827"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.595Z"
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

# pr-inventory-needs_proof-20260615T131654-029

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549042827](https://github.com/openclaw/clownfish/actions/runs/27549042827)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected; open non-security PRs are kept independent pending real-behavior proof, and security-boundary/vulnerability-shaped PRs are routed to central security handling.

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
| #78124 | keep_independent | planned | independent | Independent open PR needing proof; no closure or merge is safe in plan mode. |
| #78129 | keep_independent | planned | independent | Independent open PR needing behavior proof. |
| #78130 | keep_independent | planned | independent | Independent open PR needing proof; no dedupe/closure path. |
| #78154 | keep_independent | planned | independent | Independent compatibility PR; keep open for proof/review. |
| #78226 | route_security | planned | security_sensitive | Exec approval revocation/policy writeback is an approval-boundary claim. |
| #78229 | keep_independent | planned | independent | Independent compatibility PR; OpenClaw security posture treats provider/capability gaps as non-security without boundary bypass. |
| #78253 | keep_independent | planned | independent | Independent integration/config PR needing proof. |
| #78277 | route_security | planned | security_sensitive | Bootstrap token resurrection is token/auth-boundary sensitive. |
| #78303 | route_security | planned | security_sensitive | Approval-boundary feature belongs in central security review before backlog automation. |
| #78342 | keep_independent | planned | independent | Keep open as independent; no permitted low-signal close action. |
| #78392 | route_security | planned | security_sensitive | Explicit vulnerability remediation is out of scope for ProjectClownfish backlog cleanup. |
| #78410 | keep_independent | planned | independent | Independent agent behavior PR; keep for proof/review. |
| #78440 | keep_independent | planned | independent | Independent extension/config PR. |
| #78453 | keep_independent | planned | independent | Independent session-state PR needing proof. |
| #78459 | keep_independent | planned | independent | Independent provider compatibility PR. |
| #78486 | keep_independent | planned | independent | Independent session behavior PR needing maintainer review/proof. |
| #78507 | keep_independent | planned | independent | Independent CLI diagnostic feature PR. |
| #78521 | route_security | planned | security_sensitive | Security-boundary handling should be routed to central OpenClaw security review. |
| #90038 | keep_independent | planned | independent | Independent channel bug PR needing real behavior proof. |
| #42908 | keep_independent | planned | independent | Independent Feishu behavior PR; merge/fixed-by closeout blocked by failed proof/checks. |
| #92135 | keep_independent | planned | independent | Independent provider compatibility PR. |
| #67331 | keep_independent | planned | independent | Independent hardening/parity PR; not a routed security report under the provided posture. |
| #93059 | keep_independent | planned | independent | Independent Telegram message-delivery PR. |
| #43951 | keep_independent | planned | independent | Independent gateway hook PR; keep open rather than supersede without an allowed replacement path. |
| #56785 | keep_independent | planned | independent | Independent DX bug PR needing proof. |
| #58732 | keep_independent | planned | independent | Independent utility enhancement PR. |
| #59821 | keep_independent | planned | independent | Independent stale compatibility PR; failed checks block merge or fixed-by closure. |
| #60445 | keep_independent | planned | independent | Independent message-delivery PR; failed proof/checks block merge or closeout. |
| #60922 | keep_independent | planned | independent | Independent broad config/provider PR needing proof and cleanup. |
| #77256 | keep_independent | planned | independent | Independent broad feature PR; not closable or mergeable in this shard. |
| #64301 | keep_independent | planned | independent | Independent agent compatibility PR needing proof/review resolution. |
| #64503 | keep_independent | planned | independent | Independent MS Teams message-delivery PR needing proof. |
| #64800 | keep_independent | planned | independent | Independent plugin/provider compatibility PR. |
| #78036 | keep_independent | planned | independent | Independent session/message-delivery PR needing proof. |
| #78544 | keep_independent | planned | independent | Independent gateway availability PR. |
| #65886 | keep_independent | planned | independent | Independent TUI feature PR; keep for proof/product review. |
| #78556 | keep_independent | planned | independent | Independent extension bug PR. |
| #66067 | keep_independent | planned | independent | Independent TUI bug PR; failed checks block merge/fixed-by closeout. |
| #66098 | keep_independent | planned | independent | Independent web-ui/session-state PR needing proof and check repair. |
| #67376 | route_security | planned | security_sensitive | Explicit auth/scope boundary-bypass claim is security-sensitive. |

## Needs Human

- none
