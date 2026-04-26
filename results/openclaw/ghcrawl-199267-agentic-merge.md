---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199267-agentic-merge"
mode: "autonomous"
run_id: "24968262940"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24968262940"
head_sha: "35f872793b4de7748d72852e171a8fc84e506e12"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T22:14:49.340Z"
canonical: "https://github.com/openclaw/openclaw/issues/47975"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47975"
canonical_pr: null
actions_total: 11
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-199267-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24968262940](https://github.com/openclaw/projectclownfish/actions/runs/24968262940)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/47975

## Summary

Hydrated state shows #47975 is still the best live canonical for stale completed subagent sessions causing UI/session unresponsiveness. No security-sensitive items or PR candidates are present. One narrow duplicate closeout is blocked by require_fix_before_close until a canonical fix PR exists; related lane, interrupt, crash-orphan, and performance reports stay open for their distinct scopes.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56516 | close_duplicate | skipped | duplicate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #47975 | keep_canonical | planned | canonical | Best surviving canonical issue for the stale completed-subagent session persistence family. |
| #56516 | close_duplicate | blocked | duplicate | Duplicate closeout is high-confidence but blocked until the canonical fix path exists. |
| #58534 | keep_related | planned | related | Same area and likely overlapping cleanup surface, but distinct performance scope and metrics require separate validation. |
| #58649 | keep_closed | skipped | fixed_by_candidate | Already closed refs must not receive close actions. |
| #67902 | keep_related | planned | related | Related stale-session cleanup surface with a distinct crash-orphan root cause and unhydrated fix evidence. |
| #47884 | keep_independent | planned | independent | Provider/runtime configuration failure is independent of stale subagent session cleanup. |
| #54488 | keep_related | planned | related | Related session responsiveness problem with distinct root cause and remediation path. |
| #56044 | keep_related | planned | related | Related operator-unresponsiveness report, but distinct control-plane/data-plane queueing scope. |
| #47975 | fix_needed | planned | canonical | Canonical issue remains open and real from hydrated evidence; a narrow fix PR should be prepared before duplicate closure. |
| cluster:ghcrawl-199267-agentic-merge | build_fix_artifact | planned |  | No hydrated canonical PR exists, and the duplicate closeout is fix-first blocked. |
| cluster:ghcrawl-199267-agentic-merge | open_fix_pr | planned |  | ProjectClownfish executor should open a new credited fix PR after implementing and validating the narrow artifact. |

## Needs Human

- none
