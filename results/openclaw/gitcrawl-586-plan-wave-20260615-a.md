---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-586-plan-wave-20260615-a"
mode: "plan"
run_id: "27516860768"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516860768"
head_sha: "1aabb2d816f9888d8a4f648c6fa800f88117c1b4"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:27:57.056Z"
canonical: "#91168"
canonical_issue: null
canonical_pr: "#91168"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-586-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516860768](https://github.com/openclaw/clownfish/actions/runs/27516860768)

Workflow conclusion: success

Worker result: planned

Canonical: #91168

## Summary

Read-only plan: #91168 remains the live canonical for the narrow TUI/gateway CLI-routing label work. #91211 is a broader related follow-up with failing checks and review-bot blockers, while #90328 and #91177 are hydrated linked refs with related but distinct scope. No security-sensitive refs were detected and no mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #91168 | keep_canonical | planned | canonical | #91168 is the best surviving canonical for the narrow CLI-routing label root cause, but merge is out of scope and not preflight-clean. |
| #91211 | keep_related | planned | related | #91211 is not a duplicate because it has unique OAuth/API classification scope, but failing checks and bot review blockers make it unsuitable as canonical or merge/fixed-by-candidate path. |
| #90328 | keep_related | planned | related | #90328 is related runtime-visibility work with distinct WebUI/protocol scope, so it should remain separate from the #91168 canonical path. |
| #91177 | keep_related | planned | related | #91177 is in the same CLI/provider/runtime visibility family but has a different root cause and should not be closed or merged as part of this cluster. |

## Needs Human

- none
