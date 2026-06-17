---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-198-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27666807968"
workflow_run_id: "27666807968"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27666807968"
head_sha: "1cfa357bb6e2e0dc9f37fd20ef7f7b69b41271f5"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-17T05:04:11.264Z"
canonical: "https://github.com/openclaw/openclaw/pull/92287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92267"
canonical_pr: "https://github.com/openclaw/openclaw/pull/92287"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 1
---

# gitcrawl-198-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27666807968](https://github.com/openclaw/clownfish/actions/runs/27666807968)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/92287

## Summary

Hydrated state shows #92267 is a real source-level bug and #92287 is the best canonical fix path, but no merge or fixed-by-candidate closeout is safe in this run because the PR has a failing native Telegram proof check, unknown mergeability, and no clean Codex /review merge preflight.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92267 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92287 | keep_canonical | planned | canonical | #92287 is the canonical fix path, but failing proof check and missing merge preflight block merge automation. |
| #92267 | close_fixed_by_candidate | blocked | fixed_by_candidate | The issue is covered by hydrated PR #92287, but fixed-by-candidate closeout must wait until the canonical fix merges or is otherwise proven present on current main. |

## Needs Human

- Maintainer action is needed only for the blocked merge/closeout gate: #92287 has a failing `Run agentic native Telegram proof` check, mergeable_state is unknown, and there is no clean Codex /review merge preflight in the hydrated artifact.
