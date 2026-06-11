---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-199237-agentic-merge"
mode: "autonomous"
run_id: "27345868950"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27345868950"
head_sha: "5e4eda59d5c8d409d75ebdb30ee7069c861f81df"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-11T12:20:57.825Z"
canonical: "https://github.com/openclaw/openclaw/tree/9a6c71a47d9526c677a325531dfc44adc054d9bb"
canonical_issue: null
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-199237-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27345868950](https://github.com/openclaw/clownfish/actions/runs/27345868950)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/9a6c71a47d9526c677a325531dfc44adc054d9bb

## Summary

Hydrated state shows #60063 open and #74498 as a linked open UI-side candidate. Current main at 9a6c71a47d9526c677a325531dfc44adc054d9bb already contains the narrow gateway streaming merge/replace support that #60063 proposes, so #60063 can be closed as already covered by current main. #74498 is related but distinct UI pre-tool segment work and should stay open for a separate follow-up. #46985 is unavailable/not hydratable and is blocked as an item-scoped needs_human hydration issue rather than treated as a closed ref. Closed refs are kept as evidence only; #47399 is security-sensitive and is routed without poisoning the non-security classification.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #60063 | close_fixed_by_candidate | blocked | fixed_by_candidate | fixed_by_candidate close requires a merged fix PR unless allow_unmerged_fix_close: true |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #60063 | close_fixed_by_candidate | planned | fixed_by_candidate | The useful #60063 implementation surface is already present on current main; merge is blocked by dirty state and failed proof, and no new fix PR is needed for this canonical gateway-streaming path. |
| #74498 | keep_related | planned | related | Related UI-only follow-up; not safe to close or merge as part of the #60063 current-main closeout. |
| #47399 | route_security | planned | security_sensitive | Security-sensitive ref must be routed item-scoped and not handled through ProjectClownfish cleanup. |
| #46985 | needs_human | blocked | needs_human | Blocked on refreshed hydration for #46985; the provided artifacts do not contain live kind or updated_at. |
| #47377 | keep_closed | skipped | superseded | Already closed. |
| #54374 | keep_closed | skipped | superseded | Already closed. |
| #63994 | keep_closed | skipped | superseded | Already closed. |
| #65457 | keep_closed | skipped | superseded | Already closed. |

## Needs Human

- none
