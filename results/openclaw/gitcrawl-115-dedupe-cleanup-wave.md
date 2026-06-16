---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-115-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608149657"
workflow_run_id: "27608149657"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608149657"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:36:29.394Z"
canonical: "https://github.com/openclaw/openclaw/issues/78165"
canonical_issue: "https://github.com/openclaw/openclaw/issues/78165"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-115-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608149657](https://github.com/openclaw/clownfish/actions/runs/27608149657)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/78165

## Summary

Classified the live hydrated cluster without mutations. #78165 remains the canonical open WhatsApp start-account/event-loop stall tracker. The other open issues are related but not safe duplicate closeouts: #77443 keeps distinct Windows first-inbound/resource-loader stall evidence, #78419 is owned by open PR #78511 but cannot close until a fix lands, and #80177 is a related dispatch-status contract problem. Security-sensitive linked issue #9544 is routed only to central security handling. No merge, fix, PR, or post-merge action is planned because the job blocks those actions.

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
| #78165 | keep_canonical | planned | canonical | Best surviving canonical issue for the WhatsApp start-account event-loop stall family. |
| #77443 | keep_related | planned | related | Related symptom family, but it carries distinct reproduction and suspected source path, so duplicate closure would lose useful context. |
| #78419 | keep_related | planned | fixed_by_candidate | Covered by an open candidate PR, but fixed-by-candidate closeout is not safe until the candidate lands. |
| #78511 | keep_related | planned | related | Useful related candidate PR for the #78419 subfamily, but not mergeable or closable in this job. |
| #80177 | keep_related | planned | related | Related downstream symptom, but not a duplicate of the startup stall canonical because it has distinct status-contract work. |
| #9544 | route_security | planned | security_sensitive | Security-sensitive linked auth-state migration must route to central OpenClaw security handling and must not be handled by cleanup automation. |

## Needs Human

- none
