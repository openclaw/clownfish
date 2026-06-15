---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2028-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131876017"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131876017"
head_sha: "8b1a632d84d92da9b50a6637747f4ed65232ee08"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.924Z"
canonical: "https://github.com/openclaw/openclaw/pull/48320"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/48320"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2028-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131876017](https://github.com/openclaw/clownfish/actions/runs/25131876017)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/48320

## Summary

Representative #54120 is already closed and no cluster-wide closeout is safe. The hydrated open items split into distinct Windows subfamilies; #48320 is the clearest current canonical for the ACPX/plugin-sdk windowsHide subfamily, while the other open PRs remain related or independent follow-up work. No merge, fix PR, or close action is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #54120 | keep_closed | skipped | fixed_by_candidate | Closed representative is historical evidence only. |
| #40791 | route_security | planned | security_sensitive | Security-sensitive linked PR must be quarantined to central OpenClaw security handling. |
| #48320 | keep_canonical | planned | canonical | Best open canonical for the ACPX/plugin-sdk windowsHide subfamily, but not merge-ready. |
| #60678 | keep_related | planned | related | Related broad PR; closure is not high-confidence. |
| #43975 | keep_related | planned | related | Distinct Windows scheduled-task encoding subfamily; keep open. |
| #45870 | keep_related | planned | related | Related Windows runtime work with unresolved review findings; keep open. |
| #51486 | keep_related | planned | related | Distinct Windows schtasks runtime-status subfamily; keep open. |
| #38846 | keep_related | planned | related | Related exec-adjacent hardening work with unresolved review blockers; keep open. |
| #66062 | keep_closed | skipped | related | No live mutation is valid for a closed PR. |
| #52154 | keep_independent | planned | independent | Independent linked feature PR; leave open. |

## Needs Human

- none
