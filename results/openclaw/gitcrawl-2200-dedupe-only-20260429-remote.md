---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2200-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132416793"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132416793"
head_sha: "2a25e72cd9df0710ef893de8f25823a6a78be854"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.944Z"
canonical: "https://github.com/openclaw/openclaw/issues/64760"
canonical_issue: "https://github.com/openclaw/openclaw/issues/64760"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2200-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132416793](https://github.com/openclaw/clownfish/actions/runs/25132416793)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/64760

## Summary

#64760 is the only live candidate and remains the canonical issue for the remaining skills prompt visibility optimization. The older issue refs and #47553 are closed historical evidence only. No close, label, merge, or fix action is safe here; implementation needs maintainer product direction before it can be scoped narrowly.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #64760 | keep_canonical | planned | canonical | Best surviving live issue for the remaining skills prompt visibility optimization. |
| cluster:gitcrawl-2200-dedupe-only-20260429-remote | needs_human | planned | needs_human | Maintainers need to choose the prompt visibility strategy and default behavior before a narrow implementation cluster can be created. |
| #39945 | keep_closed | skipped | related | Already closed historical context; no mutation is valid. |
| #51120 | keep_closed | skipped | related | Already closed historical context; no mutation is valid. |
| #58743 | keep_closed | skipped | related | Already closed historical context; no mutation is valid. |
| #47553 | keep_closed | skipped | related | Merged historical mitigation only; not a live candidate fix for the remaining canonical issue. |

## Needs Human

- #64760 needs maintainer product direction on whether to add explicit opt-in names-only prompt visibility, automatic task matching, another configurable strategy, or keep current compact behavior as the default before implementation is scoped.
