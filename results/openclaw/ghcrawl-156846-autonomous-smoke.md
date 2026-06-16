---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156846-autonomous-smoke"
mode: "autonomous"
run_id: "27598130569"
workflow_run_id: "27598130569"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598130569"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:36:08.341Z"
canonical: "https://github.com/openclaw/openclaw/issues/50611"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50611"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156846-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598130569](https://github.com/openclaw/clownfish/actions/runs/27598130569)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/50611

## Summary

The hydrated artifact shows the representative PR #50694 and candidate PRs #51316/#65263 are already closed. Linked issue #50611 is still open and current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 still computes the memory-flush threshold from the raw reserveTokensFloor, so this cluster should move through a credited replacement fix PR rather than a merge or closeout.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | blocked |  | clownfish/ghcrawl-156846-autonomous-smoke | base branch advanced after validation and clownfish/ghcrawl-156846-autonomous-smoke needs a fresh rebase pass: Rebasing (1/2) error: could not apply a5fbf3fc... fix(compaction): clamp memory flush reserve floor to remaining headroom hint: Resolve all conflicts manually, mark them as resolved with hint: "git add/rm <conflicted_files>", then run "git rebase --continue". hint: You can instead skip this commit: run "git rebase --skip". hint: To abort and get back to the state before "git rebase", run "git rebase --abort". hint: Disable this message with "git config set advice.mergeConflict false" Could not apply a5fbf3fc... # fix(compaction): clamp memory flush reserve floor to remaining headroom |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #50611 | keep_canonical | planned | canonical | #50611 is the surviving open canonical issue for the memory-flush reserve floor bug. |
| #50694 | keep_closed | skipped | superseded | Closed PR #50694 is historical source-credit evidence for the replacement fix path, not a live mutation target. |
| #51316 | keep_closed | skipped | superseded | Closed PR #51316 is superseded by the canonical issue and replacement fix path. |
| #65263 | keep_closed | skipped | related | Closed PR #65263 is related historical context for reserve clamping, but not the live canonical fix for #50611. |
| cluster:ghcrawl-156846-autonomous-smoke | fix_needed | planned |  | A replacement fix is needed because the canonical issue is still open and current main still contains the memory-flush threshold bug. |
| cluster:ghcrawl-156846-autonomous-smoke | build_fix_artifact | planned |  | Build an executable, narrow fix artifact for the open canonical issue. |

## Needs Human

- none
