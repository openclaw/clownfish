---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156598-autonomous-smoke"
mode: "autonomous"
run_id: "24987811841"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24987811841"
head_sha: "f677d095c70e025afb42e22cf29ae7b90caccf9c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T09:46:31.589Z"
canonical: "https://github.com/openclaw/openclaw/pull/72614"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/72614"
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 3
needs_human_count: 0
---

# ghcrawl-156598-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24987811841](https://github.com/openclaw/clownfish/actions/runs/24987811841)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72614

## Summary

Canonical drift resolved from closed representative #68397 to open ProjectClownfish PR #72614. #72614 is the right canonical fix path for the sessions_spawn runtime=subagent ACP-only field tolerance, but it is not merge-ready because current hydration shows unresolved bot/security-review material and no clean Codex /review merge preflight. Plan repairs #72614, routes security-sensitive #63121, keeps provider-schema work #66720 related, keeps unrelated #67276 independent, and blocks duplicate issue closeout until #72614 is clean or merged.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 3 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56326 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #61724 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |
| #63120 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #40102 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #56326 | close_fixed_by_candidate | blocked | fixed_by_candidate | require_fix_before_close and merge policy block closing duplicate issues until the canonical fix path is clean or merged. |
| #56342 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #58686 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #61724 | close_fixed_by_candidate | blocked | fixed_by_candidate | require_fix_before_close blocks closeout until the canonical fix PR is clean or merged. |
| #63120 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout should wait for the canonical PR to be clean or merged. |
| #63121 | route_security | planned | security_sensitive | Security-sensitive PR is out of scope for ProjectClownfish mutation. |
| #64787 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #65282 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #66720 | keep_related | planned | related | Related provider-compatibility work with distinct scope and unresolved review feedback; do not close or merge in this cluster. |
| #68397 | keep_closed | skipped | superseded | Closed representative drifted; #72614 is the live canonical path. |
| #69170 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #72614 | fix_needed | planned | canonical | Canonical PR is repairable but not merge-ready; autonomous policy requires fix_needed plus build_fix_artifact rather than keep_canonical only. |
| #59225 | keep_related | planned | related | Related but broader product/design work; leave open. |
| #67276 | keep_independent | planned | independent | Independent open PR; no ProjectClownfish action in this cluster. |
| cluster:ghcrawl-156598-autonomous-smoke | build_fix_artifact | planned |  | Executable repair plan is required for a maintainer-calibrated canonical PR that is not merge-ready. |

## Needs Human

- none
