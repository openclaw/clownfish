---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-035"
mode: "plan"
run_id: "27549043320"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549043320"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.633Z"
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

# pr-inventory-needs_proof-20260615T131654-035

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549043320](https://github.com/openclaw/clownfish/actions/runs/27549043320)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. No shared canonical was selected because the job says this is not a dedupe cluster. All hydrated open PRs are classified independently except #83754, which is routed to central security handling because its own title/body describe apiKey secret leakage. No close, merge, label, comment, fix, or PR-raising action is planned.

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
| #79192 | keep_independent | planned | independent | Useful broad feature PR; classify independently rather than inventing a canonical or close path. |
| #83174 | keep_independent | planned | independent | Distinct gateway readiness PR; keep open for proof/check repair. |
| #83178 | keep_independent | planned | independent | Independent narrow fix candidate, not a duplicate or superseded item in this shard. |
| #83203 | keep_independent | planned | independent | Independent gateway streaming fix needing proof; no close or merge action is safe. |
| #83242 | keep_independent | planned | independent | Independent UI PR; uneditable branch and failing proof prevent merge-style planning. |
| #83254 | keep_independent | planned | independent | Independent Telegram fix candidate; keep open for maintainer review. |
| #83295 | keep_independent | planned | independent | Independent performance PR with failing proof/checks; no dedupe or close basis. |
| #83306 | keep_independent | planned | independent | Independent Browserbase feature PR; keep open for focused proof and maintainer review. |
| #83458 | keep_independent | planned | independent | Independent Feishu fix; failing checks block merge/fixed-by-candidate closeout. |
| #83537 | keep_independent | planned | independent | Independent diagnostics PR; keep open because proof/types are not clean. |
| #83629 | keep_independent | planned | independent | Independent sessions fix; failing check prevents merge planning. |
| #83630 | keep_independent | planned | independent | Independent narrow fix candidate; keep open. |
| #83665 | keep_independent | planned | independent | Independent auth-provider compatibility fix; failing proof blocks merge/fixed-by-candidate actions. |
| #83689 | keep_independent | planned | independent | Keep open as independent because close_low_signal is not allowed and a focused diff exists. |
| #83703 | keep_independent | planned | independent | Independent automation PR; no duplicate/superseded evidence. |
| #83715 | keep_independent | planned | independent | Independent draft PR needing author/proof work. |
| #83754 | route_security | planned | security_sensitive | The PR itself is about API key leakage, so this exact item is out of scope for Clownfish backlog cleanup. |
| #83819 | keep_independent | planned | independent | Independent draft availability PR needing proof/author follow-up. |
| #83826 | keep_independent | planned | independent | Independent test-flake PR; keep open until proof gate is resolved. |
| #83862 | keep_independent | planned | independent | Independent CLI availability fix; failing proof blocks merge/fixed-by-candidate action. |
| #90095 | keep_independent | planned | independent | Independent Telegram message-delivery fix candidate. |
| #90371 | keep_independent | planned | independent | Independent message-delivery fix; failing proof/build blocks merge planning. |
| #90511 | keep_independent | planned | independent | Independent Discord compatibility/authorization PR; failing checks block merge or closeout. |
| #90542 | keep_independent | planned | independent | Independent multi-channel message-delivery PR; failing proof blocks merge-style action. |
| #90561 | keep_independent | planned | independent | Independent availability PR with broad failing validation; keep open for proof/check repair. |
| #90577 | keep_independent | planned | independent | Independent UI polish/fix PR; no duplicate or superseded evidence. |
| #90582 | keep_independent | planned | independent | Independent session metadata fix; failing checks block merge/closeout. |
| #90603 | keep_independent | planned | independent | Independent compatibility/path-discovery fix; failing checks block merge-style action. |
| #90618 | keep_independent | planned | independent | Independent replacement fix PR; merge/fix actions are blocked by job frontmatter and failing check. |
| #90636 | keep_independent | planned | independent | Independent draft Feishu fix; keep open for author/maintainer progression. |
| #90641 | keep_independent | planned | independent | Independent draft session-state fix; keep open. |
| #90661 | keep_independent | planned | independent | Independent feature/config PR with failing validation; not suitable for close/merge planning. |
| #90683 | keep_independent | planned | independent | Independent agent availability fix candidate. |
| #90700 | keep_independent | planned | independent | Independent MCP availability PR; failing validation blocks merge/fixed-by-candidate closeout. |
| #91211 | keep_independent | planned | independent | Independent model-picker feature/fix PR; keep open for validation repair. |
| #92966 | keep_independent | planned | independent | Independent session-memory fix needing proof; no close basis. |
| #93082 | keep_independent | planned | independent | Independent UI fix needing proof; no duplicate/superseded evidence. |
| #93083 | keep_independent | planned | independent | Independent session routing fix candidate. |
| #93086 | keep_independent | planned | independent | Independent agents text-sanitization fix; failing lint blocks merge planning. |
| #93091 | keep_independent | planned | independent | Independent Feishu filename fix candidate. |

## Needs Human

- none
