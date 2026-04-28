---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156873-autonomous-smoke"
mode: "autonomous"
run_id: "25039876456"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25039876456"
head_sha: "ddeac017c7796b33e322eb33ea7297510fe2229d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-28T07:35:10.386Z"
canonical: "https://github.com/openclaw/openclaw/pull/60773"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/60773"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156873-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25039876456](https://github.com/openclaw/clownfish/actions/runs/25039876456)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/60773

## Summary

Classified the Control UI docs PR cluster from the hydrated preflight artifact. #60773 remains the canonical gatewayUrl encoding path, but it is not merge-ready because both Greptile and Codex identified destructive documentation truncation. Plan a narrow repair of #60773's contributor branch, keep #54671 open as related-but-separate Docker pairing documentation work, and do not act on already-closed #61331.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/60773 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #60773 | merge_canonical | blocked | fix_pr | merge requires CLOWNFISH_ALLOW_MERGE=1; labeled for human review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #54671 | keep_related | planned | related | Same Control UI documentation area, but distinct Docker pairing clarification rather than duplicate gatewayUrl encoding work. |
| #60773 | fix_needed | planned | canonical | Canonical PR is useful but blocked by destructive doc truncation and unresolved bot review findings; repair the contributor branch before any merge or closeout. |
| #61331 | keep_closed | skipped | superseded | Already-closed zh-CN generated-doc PR is historical evidence only and must not receive a mutation. |
| cluster:ghcrawl-156873-autonomous-smoke | build_fix_artifact | planned |  | A concrete repair plan is required before #60773 can become merge-ready. |

## Needs Human

- none
