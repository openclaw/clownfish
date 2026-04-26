---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-207034-agentic-merge"
mode: "autonomous"
run_id: "24969052517"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24969052517"
head_sha: "0e4564f671623de117a9abb4813b36a385aecd45"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T23:11:47.435Z"
canonical: "https://github.com/openclaw/openclaw/issues/51065"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51065"
canonical_pr: null
actions_total: 10
apply_executed: 0
apply_blocked: 2
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-207034-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24969052517](https://github.com/openclaw/projectclownfish/actions/runs/24969052517)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/51065

## Summary

Hydrated artifact shows no security-sensitive refs. #51065 remains the best open canonical for failed mutating tool narrations leaking into Telegram. #39631 is a duplicate but closeout is blocked by require_fix_before_close until a replacement fix PR exists. #71575 is a related Telegram tool/progress chatter report that appears already fixed on current main per the hydrated #66161/#66188 closure evidence, so it can be closed as fixed by current main. The broader #39406 config-policy request should stay open as related product follow-up. No PR is merge-ready; closed contributor PRs are useful evidence but uneditable, stale, broad, or have unresolved bot findings, so a narrow credited replacement fix artifact is needed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Applied executions | 0 |
| Apply blocked | 2 |
| Apply skipped | 1 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #39631 | close_duplicate | skipped | duplicate | action status is blocked |
| #71575 | close_fixed_by_candidate | blocked | fixed_by_candidate | closure requires candidate_fix |
| #72410 | merge_canonical | blocked | fix_pr | merge state status is UNSTABLE |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #51065 | keep_canonical | planned | canonical | Best surviving open issue for the failed mutating-tool warning leak family. |
| #39631 | close_duplicate | blocked | duplicate | True duplicate of #51065, but closure is blocked on the canonical replacement fix path. |
| #71575 | close_fixed_by_candidate | planned | fixed_by_candidate | The intermediate tool/progress chatter surface is already implemented on current main; this does not need the new failed-mutating-tool warning fix. |
| #39406 | keep_related | planned | related | Related broader feature/policy request, not a duplicate of the Telegram failed-warning bug. |
| #39636 | keep_closed | skipped | superseded | Closed unmerged contributor PR; preserve credit in the replacement fix artifact instead of mutating the closed PR. |
| #39717 | keep_closed | skipped | superseded | Closed unsafe contributor PR; replacement should borrow only the narrow useful idea and address the bot findings. |
| #66161 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented on main. |
| #66188 | keep_closed | skipped | superseded | Already closed superseded PR; useful only as historical evidence for the intermediate chatter subfamily. |
| cluster:ghcrawl-207034-agentic-merge | fix_needed | planned |  | A narrow replacement fix PR is needed for the canonical failed mutating-tool warning leak. |
| cluster:ghcrawl-207034-agentic-merge | build_fix_artifact | planned |  | Create the narrow credited fix artifact for ProjectClownfish execution. |

## Needs Human

- none
