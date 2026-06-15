---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-191-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520825974"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520825974"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:47:39.912Z"
canonical: "#85696"
canonical_issue: null
canonical_pr: "#85696"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-191-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520825974](https://github.com/openclaw/clownfish/actions/runs/27520825974)

Workflow conclusion: success

Worker result: planned

Canonical: #85696

## Summary

Plan-mode classification for the three job-listed open candidates. #85696 remains the best live canonical PR for the non-security static-catalog embedded model fast path, while job-provided security-signal refs #84783 and #88837 are quarantined for central security handling as instructed.

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
| #85696 | keep_canonical | planned | canonical | Best hydrated non-security canonical remains open, focused, and directly tied to the reported model-resolution fast path; plan mode and blocked merge action prevent any merge recommendation. |
| #84783 | route_security | planned | security_sensitive | Security-signal ref is quarantined exactly as instructed; no close, label, comment, merge, or fix action is planned for this item. |
| #88837 | route_security | planned | security_sensitive | Security-signal ref is quarantined exactly as instructed; failing checks also block any merge or fixed-by-candidate closeout for this PR. |

## Needs Human

- none
