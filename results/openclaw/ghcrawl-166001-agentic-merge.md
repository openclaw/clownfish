---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166001-agentic-merge"
mode: "autonomous"
run_id: "24946287163"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24946287163"
head_sha: "ee69c4d548d49371436383ab0781ed7138b9e5c0"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-04-26T02:35:29.937Z"
canonical: "https://github.com/openclaw/openclaw/pull/47362"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46647"
canonical_pr: "https://github.com/openclaw/openclaw/pull/47362"
actions_total: 10
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# ghcrawl-166001-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24946287163](https://github.com/openclaw/projectclownfish/actions/runs/24946287163)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/47362

## Summary

Representative #47362 remains the best live canonical PR for the Slack inline-buttons prompt subfamily linked from #46647, but no mutating actions are safe from this run: #47362 is blocked by a failing channels check, #45062 and #63940 are security-routed, and the remaining open items are distinct prompt-adjacent work that should stay open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 3 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #14432 | keep_related | planned | related | Keep open as related prompt work; not part of the canonical Slack fix path. |
| #45062 | needs_human | blocked | needs_human | Security-sensitive PR; outside ProjectClownfish mutation scope. |
| #47362 | keep_canonical | planned | canonical | Best live canonical PR for the prompt-level Slack interactiveReplies bug, but not merge-ready. |
| #52727 | keep_related | planned | related | Distinct prompt/skills change; keep open as related work. |
| #56951 | keep_related | planned | related | Keep open as related but not duplicate. |
| #57247 | keep_related | planned | related | Different prompt feature with unresolved review and check blockers; keep open as related work. |
| #60017 | keep_related | planned | related | Distinct reminder-guidance work; keep open without ProjectClownfish mutation. |
| #63940 | needs_human | blocked | needs_human | Security-sensitive PR; outside ProjectClownfish mutation scope. |
| #65777 | keep_related | planned | related | Useful adjacent prompt PR; keep open as related work without a merge recommendation. |
| #70605 | keep_related | planned | related | Distinct prompt-sanitization work; keep open as related without a merge recommendation. |

## Needs Human

- #45062 is security-sensitive from the hydrated review surface and must route to central OpenClaw security handling.
- #63940 is security-sensitive per the preflight security boundary and must route to central OpenClaw security handling.
- #47362 remains the live canonical PR for the Slack prompt bug, but merge and any fixed-by-candidate closeout are blocked by the failing `checks (node, channels, pnpm test:channels)` job.
