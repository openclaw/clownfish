---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T154534-091"
mode: "plan"
run_id: "27560323972"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27560323972"
head_sha: "61d2d7a61eeb9d8fe22ed20cc15f46b2ff4a4bb2"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T16:28:29.467Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# pr-inventory-ready_for_maintainer-20260615T154534-091

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27560323972](https://github.com/openclaw/clownfish/actions/runs/27560323972)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. The job explicitly says this is not a dedupe cluster, no shared canonical should be invented, merge/fix/raise_pr are blocked, and low-signal/instant close are disabled. Hydrated open PRs are kept as independent maintainer-review items; missing compacted refs are kept independent without mutating actions because target_updated_at was unavailable from the preflight artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
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
| #70944 | keep_independent | planned | independent | Independent feature PR requiring maintainer review; no duplicate/superseding canonical is hydrated and merge is blocked in plan job. |
| #76094 | keep_independent | planned | independent | Small docs PR should stay open for maintainer judgment; close-style action is not allowed by this run's close permissions. |
| #76666 | keep_independent | planned | independent | Independent bug-fix PR with a failing proof check; keep for maintainer/author follow-up rather than close or merge. |
| #76744 | keep_independent | planned | independent | Independent one-line docs PR; no canonical duplicate is hydrated and no mutation is appropriate in plan mode. |
| #76920 | keep_independent | planned | independent | Independent compatibility-sensitive PR with a failing Telegram proof check; keep for maintainer review. |
| #89817 | keep_independent | planned | independent | Independent narrow bug-fix PR; merge is blocked by job frontmatter so classification remains non-mutating. |
| #89859 | keep_independent | planned | independent | Non-mutating independent classification only; live preflight state is unavailable, so no close/merge/fix action is planned. |
| #89899 | keep_independent | planned | independent | Non-mutating independent classification only; live preflight state is unavailable. |
| #77158 | keep_independent | planned | independent | Independent large performance/state change requiring maintainer review; no closure or merge action is appropriate. |
| #77184 | keep_independent | planned | independent | Independent additive API PR; keep for maintainer review because merge is blocked. |
| #77232 | keep_independent | planned | independent | Independent docs PR with failing proof/checks; keep for author or maintainer follow-up rather than close. |
| #77325 | keep_independent | planned | independent | Independent bug-fix PR with waiting-on-author label and a failing check; keep open. |
| #77339 | keep_independent | planned | independent | Independent narrow bug-fix PR; keep for maintainer review. |
| #77432 | keep_independent | planned | independent | Independent feature/diagnostic PR; keep for maintainer review. |
| #77537 | keep_independent | planned | independent | Independent TUI PR with failing proof check; keep for maintainer/author follow-up. |
| #77538 | route_security | planned | security_sensitive | Auth/token protocol bounds are security-shaped enough to quarantine this exact PR, even though the artifact summary did not flag the broader cluster as security-sensitive. |
| #77638 | keep_independent | planned | independent | Independent bug-fix PR with waiting-on-author label and a failing check; keep open. |
| #90118 | keep_independent | planned | independent | Non-mutating independent classification only; live preflight state is unavailable. |
| #90122 | keep_independent | planned | independent | Non-mutating independent classification only; live preflight state is unavailable. |
| #89816 | keep_independent | planned | independent | Independent docs PR; keep for maintainer review. |
| #90151 | keep_independent | planned | independent | Non-mutating independent classification only; live preflight state is unavailable. |
| #84794 | keep_independent | planned | independent | Independent narrow bug-fix PR; keep for maintainer review. |
| #75961 | keep_independent | planned | independent | Independent large Discord feature PR; keep for maintainer review, with no merge action because merge is blocked. |
| #76811 | keep_independent | planned | independent | Independent plugin bug-fix PR; keep for maintainer review because review-bot detail is incomplete and merge is blocked. |
| #77127 | keep_independent | planned | independent | Independent P1 feature/bug-fix PR with historical linked context; keep for maintainer review and preserve contributor credit. |

## Needs Human

- none
