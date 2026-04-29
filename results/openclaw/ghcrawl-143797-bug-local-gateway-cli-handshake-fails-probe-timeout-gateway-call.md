---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-143797-bug-local-gateway-cli-handshake-fails-probe-timeout-gateway-call"
mode: "autonomous"
run_id: "25105385679"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25105385679"
head_sha: "f4310f686a7c936b6d823e2f2236940847c8f999"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T11:27:11.545Z"
canonical: "https://github.com/openclaw/openclaw/issues/62762"
canonical_issue: "https://github.com/openclaw/openclaw/issues/62762"
canonical_pr: null
actions_total: 16
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-143797-bug-local-gateway-cli-handshake-fails-probe-timeout-gateway-call

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25105385679](https://github.com/openclaw/clownfish/actions/runs/25105385679)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/62762

## Summary

The closed representative #45560 should not be reopened. The hydrated state shows most original open candidates are now closed as fixed or superseded. #62762 is the best live canonical for the remaining gateway 1006/probe-vs-real-turn subfamily, while #68944 is a separate open CLI post-challenge hang that needs a narrow non-mutating fix artifact. #52336 remains related but browser-specific and stale/improved, #61095 is a separate exec-environment root cause, and #68614 is independent Google Chat work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 16 |
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
| #45560 | keep_closed | skipped | fixed_by_candidate | Representative is already closed and covered by current-main fixes; use newer open #62762 only for the remaining unfixed 1006/probe subfamily. |
| #62762 | keep_canonical | planned | canonical | Use #62762 as the live canonical issue for remaining gateway 1006/probe-vs-real-turn reports; no mutation is planned. |
| #45222 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no action. |
| #46008 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no action. |
| #48360 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main; no action. |
| #51357 | keep_closed | skipped | superseded | Already closed as superseded by live canonical #62762. |
| #51469 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed on main; no action. |
| #51679 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no action. |
| #52336 | keep_related | planned | related | Same gateway-close symptom family, but browser-service specific and not proven fixed or duplicative; keep open as related pending fresh repro. |
| #61554 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no action. |
| #67985 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no action. |
| #68642 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; #68944 remains a separate newer silent-failure path. |
| #61095 | keep_related | planned | related | Related symptom family but separate exec-environment root cause; keep open for its own fix path. |
| #68944 | fix_needed | planned | related | Separate open CLI Gateway client bug with no viable hydrated PR; build a narrow non-mutating fix artifact. |
| #68614 | keep_independent | planned | independent | Independent channel-specific PR; no merge or closure action from this cluster. |
| cluster:ghcrawl-143797-bug-local-gateway-cli-handshake-fails-probe-timeout-gateway-call | build_fix_artifact | planned | related | A narrow source change is needed for the open #68944 CLI post-challenge hang, but this job may only emit structured work. |

## Needs Human

- none
