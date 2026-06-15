---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-96-plan-ramp"
mode: "plan"
run_id: "27516236165"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516236165"
head_sha: "55c1d70c5da8da84c47be43e492f5bca34739d4e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.358Z"
canonical: "#92440"
canonical_issue: null
canonical_pr: "#92440"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-96-plan-ramp

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516236165](https://github.com/openclaw/clownfish/actions/runs/27516236165)

Workflow conclusion: success

Worker result: planned

Canonical: #92440

## Summary

Plan mode classification for gitcrawl cluster 96. The security-sensitive issue #92374 is routed out of Clownfish handling. Among the non-security PRs for the same dispatcher hook gap, #92440 is the best open canonical candidate because it has the narrow 2-file fix, supplied proof, and a passing Real behavior proof check; #92392 remains related historical context but is blocked by missing proof/failing Real behavior proof, and #90371/#92762 overlap the same root cause but have failing proof checks or dirty/unknown merge state.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #92374 | route_security | planned | security_sensitive | Security-sensitive issue is outside Clownfish backlog cleanup and must be routed to central OpenClaw security handling. |
| #92440 | keep_canonical | planned | canonical | Best live non-security canonical PR for the code fix, but merge is blocked by plan mode, merge being disallowed, and missing merge_preflight/Codex review proof. |
| #92392 | keep_related | planned | related | Same fix family as the canonical candidate, but not safe to supersede or close in this plan because closeout is not requested and #92392 was the job's canonical hint; keep related to #92440 instead of forcing a mutation. |
| #90371 | keep_related | planned | related | Overlapping useful PR in the same fix family, but failing checks and dirty merge state block merge or closure actions in this plan. |
| #92762 | keep_related | planned | related | Related overlapping PR with useful evidence, but failing proof check and missing merge preflight block merge or fixed-by-candidate closure. |

## Needs Human

- none
