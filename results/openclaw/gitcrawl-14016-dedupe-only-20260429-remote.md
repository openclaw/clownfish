---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14016-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25110404670"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25110404670"
head_sha: "7d2adb9c59b8750974f50f0d9103e76d18fa9122"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.789Z"
canonical: "https://github.com/openclaw/openclaw/pull/38789"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43383"
canonical_pr: "https://github.com/openclaw/openclaw/pull/38789"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-14016-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25110404670](https://github.com/openclaw/clownfish/actions/runs/25110404670)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/38789

## Summary

Hydrated representative #55464 is closed historical context. No security-sensitive items were marked in preflight. The live cluster is over-broad: #43383/#38789 is the current canonical path for the sandbox non-rw skill prompt path bug, while #44051/#59219 is a separate managed-skills WSL path. No close actions are planned because the remaining open PRs are either distinct follow-up work, have unresolved review/check blockers, or need maintainer product judgment before closure or merge.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #38789 | keep_canonical | planned | canonical | Keep #38789 open as canonical for the #43383 sandbox skill prompt subcluster; merge/fix work is outside this job. |
| #43383 | keep_canonical | planned | canonical | Keep #43383 open as the canonical issue for validation and follow-up on #38789. |
| #40663 | keep_related | planned | related | Related sandbox path guidance work, but not a duplicate of the sandbox skill prompt path fix. |
| #44051 | keep_canonical | planned | canonical | Keep #44051 open as the canonical issue for the managed-skills WSL subcluster. |
| #59219 | keep_canonical | planned | canonical | Keep #59219 open as the current canonical implementation candidate for #44051. |
| #44077 | keep_independent | planned | independent | Independent issue; keep open and do not close as part of this skills-path dedupe cluster. |
| #44129 | keep_related | planned | related | Related but too broad for a high-confidence superseded close; keep open rather than losing unrelated contributor work. |
| #45912 | keep_related | planned | related | Related skills symlink policy work with unresolved review blocker; keep open. |
| #48034 | keep_related | planned | related | Related sandbox skills work, but distinct and currently blocked by review findings and failing checks. |
| #59688 | keep_related | planned | related | Related symlink handling PR; keep open because duplicate/superseded status is not proven. |
| #63312 | needs_human | planned | needs_human | Maintainer decision required for the user-managed .agents/skills symlink exception and documentation policy. |
| #66385 | needs_human | planned | needs_human | Maintainer decision required for configurable external skill-root allowlisting before any closure or merge path. |
| #67480 | keep_related | planned | related | Focused related skills-loader bug fix; keep open because it is distinct and still has review work before merge. |

## Needs Human

- #63312 needs maintainer decision on the user-managed .agents/skills symlink exception and documentation policy.
- #66385 needs maintainer decision on configurable external skill-root allowlisting and unresolved review findings.
