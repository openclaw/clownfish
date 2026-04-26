---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165995-agentic-merge"
mode: "autonomous"
run_id: "24966289390"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24966289390"
head_sha: "6e11a010e50b4de51d656b802f08705765089b26"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T20:35:11.311Z"
canonical: "https://github.com/openclaw/openclaw/issues/43556"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43556"
canonical_pr: null
actions_total: 23
apply_executed: 0
apply_blocked: 1
apply_skipped: 5
needs_human_count: 0
---

# ghcrawl-165995-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24966289390](https://github.com/openclaw/projectclownfish/actions/runs/24966289390)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43556

## Summary

Hydrated state shows the original representative #59390 is already closed, while #43556 remains the best live canonical issue for the sessions_spawn runtime=subagent ACP-only streamTo hard-failure family. No merge is recommended: the useful implementation PRs #65282 and #68397 are closed, uneditable, and were replaced by an unhydrated PR #72331 mentioned only in comments, so #72331 cannot be used as candidate_fix here. Open duplicate closeouts are blocked by require_fix_before_close until a hydrated fix PR or merged fix is available; a narrow credited replacement fix artifact is emitted.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 23 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 5 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #56326 | close_duplicate | skipped | duplicate | action status is blocked |
| #61724 | close_duplicate | skipped | duplicate | action status is blocked |
| #63120 | close_duplicate | skipped | duplicate | action status is blocked |
| #64714 | close_duplicate | skipped | duplicate | action status is blocked |
| #67248 | close_duplicate | skipped | duplicate | action status is blocked |
| #72331 | merge_canonical | blocked | fix_pr | merge state status is UNSTABLE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #43556 | keep_canonical | planned | canonical | Best surviving live issue for the root cause while the implementation fix path is not yet hydrated as a candidate. |
| #56326 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR. |
| #61724 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR. |
| #63120 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR. |
| #64714 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR. |
| #67248 | close_duplicate | blocked | duplicate | Close is blocked on the canonical fix path or fix PR. |
| #59225 | keep_related | planned | related | Related broader schema-filtering work should remain open as a follow-up, not be closed in this bug-dedupe cluster. |
| #69170 | keep_related | planned | related | Useful related schema-hint work, but not the canonical implementation fix for the hard failure. |
| cluster:ghcrawl-165995-agentic-merge | fix_needed | planned |  | A narrow credited fix path is still needed in the structured result because no viable hydrated canonical PR exists. |
| cluster:ghcrawl-165995-agentic-merge | build_fix_artifact | planned |  | Build a narrow replacement/fix artifact for the executor to hydrate or create the canonical fix PR. |
| #53370 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #56193 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #59390 | keep_closed | skipped | duplicate | Closed representative is evidence only; #43556 is the live canonical issue. |
| #60965 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #68275 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #69166 | keep_closed | skipped | related | Already closed refs must not receive close actions; schema-hint work remains related to #69170. |
| #47115 | keep_closed | skipped | superseded | Closed broad contributor PR is historical evidence only and cannot be merged or closed again. |
| #53016 | keep_closed | skipped | duplicate | Already closed refs must not receive close actions. |
| #55483 | keep_closed | skipped | superseded | Closed dirty source PR is historical evidence and credit source, not a merge candidate. |
| #65282 | keep_closed | skipped | superseded | Already closed source PR must not receive a close action; #72331 is unhydrated and remains evidence only. |
| #66719 | keep_closed | skipped | related | Already closed related schema-level issue is historical evidence only. |
| #68397 | keep_closed | skipped | superseded | Already closed source PR must not receive a close action; unhydrated #72331 cannot be candidate_fix. |
| #69203 | keep_closed | skipped | superseded | Already closed PR is historical evidence only. |

## Needs Human

- none
