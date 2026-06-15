---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2912-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142245877"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142245877"
head_sha: "4685439e0115b00b3c3895ee6c31b79d8ae00252"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:05:51.324Z"
canonical: "https://github.com/openclaw/openclaw/issues/45314"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45314"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2912-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142245877](https://github.com/openclaw/clownfish/actions/runs/25142245877)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/45314

## Summary

Hydrated state keeps #45314 as the live canonical issue for the early-abort responsePrefix template bug. The two open PRs are competing useful fixes: #45315 is narrower and non-draft but has unresolved bot review findings, while #45454 is draft, broader, and has multiple failing checks. No close, merge, label, comment, or fix action is safe from this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #45314 | keep_canonical | planned | canonical | The issue is the stable canonical tracking thread while the implementation PR choice remains unresolved. |
| #45315 | needs_human | blocked | needs_human | Maintainers need to decide whether #45315 is the canonical implementation despite the unresolved override/catalog gaps, or whether it should be revised or replaced by the broader session-aware approach. |
| #45454 | needs_human | blocked | needs_human | This is a useful competing implementation candidate, not a low-signal or safely superseded PR; choosing or closing it requires maintainer judgment. |

## Needs Human

- Choose the canonical implementation path for #45314: #45315 is the smaller non-draft PR but leaves catalog/session/channel override concerns unresolved, while #45454 is a broader draft session-aware implementation with failing checks.
