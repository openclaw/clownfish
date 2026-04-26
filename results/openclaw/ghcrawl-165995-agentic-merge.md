---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165995-agentic-merge"
mode: "autonomous"
run_id: "24965340589"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24965340589"
head_sha: "1237dd5a9ac04c546e75b6d5e6513deacdfc6c7b"
workflow_conclusion: "failure"
result_status: "planned"
published_at: "2026-04-26T19:48:26.646Z"
canonical: "Replacement fix path for the runtime=subagent ACP-only-field failure; PR #72331 is mentioned in hydrated maintainer comments but was not hydrated, so action fields leave candidate_fix null until re-planned."
canonical_issue: null
canonical_pr: null
actions_total: 18
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165995-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24965340589](https://github.com/openclaw/projectclownfish/actions/runs/24965340589)

Workflow conclusion: failure

Worker result: planned

Canonical: Replacement fix path for the runtime=subagent ACP-only-field failure; PR #72331 is mentioned in hydrated maintainer comments but was not hydrated, so action fields leave candidate_fix null until re-planned.

## Summary

Hydrated state shows the original representative #59390 is already closed. The immediate runtime=subagent ACP-only-field failure is real and best covered by the narrow replacement-fix path derived from #65282 and #68397; #72331 is mentioned in hydrated maintainer comments but was not hydrated as an item, so it is evidence only and cannot be used as candidate_fix for closeout. Open duplicate closeouts are blocked on hydration of the canonical fix PR or an equivalent merged fix. #69170 is related schema-hint work, not the canonical behavior fix, and is dirty/failing checks.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| cluster:ghcrawl-165995-agentic-merge | fix_needed | planned |  | Canonical fix path exists only as an unhydrated replacement PR reference in comments; keep fix work explicit and block duplicate closeout until the replacement PR is hydrated or merged. |
| cluster:ghcrawl-165995-agentic-merge | build_fix_artifact | planned |  | A fix artifact is appropriate because the bug remains real from the artifact and no viable hydrated open canonical PR is available for automated merge. |
| #43556 | close_superseded | blocked | fixed_by_candidate | Close is blocked on the canonical fix path or fix PR hydration. |
| #53370 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions. |
| #56193 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions. |
| #56326 | close_superseded | blocked | fixed_by_candidate | Close is blocked on the canonical fix path or fix PR hydration. |
| #59390 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions. |
| #60965 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions. |
| #61724 | close_superseded | blocked | fixed_by_candidate | Close is blocked on the canonical fix path or fix PR hydration. |
| #63120 | close_superseded | blocked | fixed_by_candidate | Close is blocked on the canonical fix path or fix PR hydration. |
| #64714 | close_superseded | blocked | fixed_by_candidate | Close is blocked on the canonical fix path or fix PR hydration. |
| #67248 | close_superseded | blocked | fixed_by_candidate | Close is blocked on the canonical fix path or fix PR hydration. |
| #68275 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions. |
| #69166 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions. |
| #65282 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions; use this PR as credited source evidence for the replacement artifact. |
| #68397 | keep_closed | skipped | superseded | Already-closed refs must not receive close actions; use this PR as credited source evidence for the replacement artifact. |
| #69170 | keep_related | planned | related | Related schema-hint subcluster; failing checks and dirty state block merge, but the classification is clear. |
| #59225 | keep_related | planned | related | Related follow-up scope, not a duplicate close target for the immediate sessions_spawn hard-failure fix. |

## Needs Human

- none
