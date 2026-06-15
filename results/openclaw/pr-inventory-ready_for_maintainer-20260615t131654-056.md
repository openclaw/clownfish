---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-056"
mode: "plan"
run_id: "27549046390"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549046390"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.746Z"
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

# pr-inventory-ready_for_maintainer-20260615T131654-056

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549046390](https://github.com/openclaw/clownfish/actions/runs/27549046390)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No canonical was selected because the job explicitly says this is not a dedupe cluster. Emitted one non-mutating action for each listed PR: 39 PRs should remain independent maintainer-review items, and #89935 should be routed to central security handling because its stated scope is raw credential-bearing or signed media URLs in logs/user-visible errors. No close, merge, label, comment, or fix PR actions are planned.

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
| #89396 | keep_independent | planned | independent | Independent maintainer-review PR; keep open in plan mode. |
| #74320 | keep_independent | planned | independent | Small independent fix with passing evidence; preserve for normal maintainer review. |
| #75469 | keep_independent | planned | independent | Independent ClawSweeper fix candidate; keep open for maintainer review. |
| #89935 | route_security | planned | security_sensitive | The PR appears to handle potential sensitive URL exposure, so it is out of scope for ProjectClownfish backlog cleanup. |
| #89962 | keep_independent | planned | independent | Independent message-delivery fix; keep open for maintainer review. |
| #89966 | keep_independent | planned | low_signal | Low-signal docs PR, but closeout is disabled and live hydrated state is unavailable. |
| #89967 | keep_independent | planned | independent | Independent compatibility fix; keep open for maintainer review. |
| #89334 | keep_independent | planned | low_signal | Low-signal/refactor-only docs PR, but closeout is disabled and live hydrated state is unavailable. |
| #69346 | keep_independent | planned | independent | Independent PR with unresolved validation/review risk; keep open rather than close or merge. |
| #92731 | keep_independent | planned | independent | Independent command compatibility fix awaiting author/maintainer path. |
| #92654 | keep_independent | planned | independent | Independent feature PR; keep open for maintainer product review. |
| #89752 | keep_independent | planned | independent | Independent session-state fix with waiting-on-author status; keep open. |
| #90552 | keep_independent | planned | independent | Independent session metadata fix; keep open for maintainer review. |
| #91728 | keep_independent | planned | independent | Independent provider compatibility PR; keep open for maintainer review. |
| #77848 | keep_independent | planned | independent | Independent provider-cache PR; keep open for maintainer/author follow-up. |
| #76873 | keep_independent | planned | independent | Independent Discord routing fix; keep open for maintainer review. |
| #89443 | keep_independent | planned | independent | Independent active-memory behavior fix; keep open. |
| #90885 | keep_independent | planned | independent | Independent agent/provider fix in re-review loop; keep open. |
| #89981 | keep_independent | planned | independent | Independent diagnostics fix; keep open. |
| #89992 | keep_independent | planned | independent | Independent config/editor usability feature; keep open for maintainer review. |
| #90030 | keep_independent | planned | independent | Independent memory-core compatibility fix; keep open. |
| #73594 | keep_independent | planned | independent | Independent provider feature/fix with failing proof; keep open. |
| #75179 | keep_independent | planned | independent | Broad independent memory PR with failing proof; keep open for author/maintainer follow-up. |
| #75223 | keep_independent | planned | independent | Independent clean ClawSweeper fix candidate; keep open for maintainer review because merge is blocked. |
| #77973 | keep_independent | planned | independent | Independent gateway availability hardening/fix; keep open for maintainer review. |
| #77987 | keep_independent | planned | independent | Independent gateway rate-limit hardening/fix; keep open for maintainer review. |
| #77999 | keep_independent | planned | independent | Independent memory-core fix candidate; keep open for maintainer review. |
| #78090 | keep_independent | planned | independent | Independent docs PR with failing proof; keep open. |
| #78105 | keep_independent | planned | independent | Independent plugin usability fix; keep open for maintainer review. |
| #78113 | keep_independent | planned | independent | Independent agents compatibility fix; keep open for author/maintainer follow-up. |
| #78115 | keep_independent | planned | independent | Independent CLI feature with failing automation; keep open. |
| #78139 | keep_independent | planned | independent | Independent CLI UX fix; keep open for maintainer review. |
| #78199 | keep_independent | planned | independent | Independent config/provider fix with failing check; keep open. |
| #78411 | keep_independent | planned | low_signal | Low-signal docs cleanup, but closeout is disabled; keep open. |
| #78436 | keep_independent | planned | independent | Independent partial agents fix; keep open for author/maintainer follow-up. |
| #78438 | keep_independent | planned | independent | Independent Telegram connectivity fix; keep open for maintainer review. |
| #78452 | keep_independent | planned | independent | Broad independent feature PR; keep open for maintainer product review. |
| #78554 | keep_independent | planned | independent | Independent channel auth-provider compatibility fix; keep open. |
| #90033 | keep_independent | planned | independent | Independent LLM compatibility fix; keep open for maintainer review. |
| #90041 | keep_independent | planned | independent | Independent message-delivery PR waiting on author; keep open. |

## Needs Human

- none
