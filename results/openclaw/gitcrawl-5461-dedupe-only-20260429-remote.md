---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-5461-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136421744"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136421744"
head_sha: "648e71ed1e7bd7c58c0085195d8e3302fdbfa10f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:05:51.263Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-5461-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136421744](https://github.com/openclaw/clownfish/actions/runs/25136421744)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

No GitHub mutations planned. The closed representative #43533 is obsolete, but the hydrated artifact leaves the current PR canonical ambiguous between #61675 and #71792; both are active repaired contributor branches for the same automatic daily/idle session-memory gap. Older overlapping PRs should stay open until that choice is explicit, and #56362 is a separate Discord reset-trigger bug.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #42677 | keep_related | planned | related | Same root-cause family, but not safe to close or supersede while the canonical fix PR is ambiguous. |
| #50933 | keep_related | planned | related | Overlapping useful contributor work should remain open until the maintainer selects the canonical fix path. |
| #56362 | keep_related | planned | related | Different root cause and affected workflow; leave open as a related but separate subcluster. |
| #61675 | needs_human | blocked | needs_human | Maintainer needs to choose whether #61675 or #71792 is the canonical fix path. |
| #71792 | needs_human | blocked | needs_human | Maintainer needs to choose whether #71792 or #61675 is the canonical fix path. |
| #43533 | keep_closed | skipped | superseded | Already closed; no closure/comment/label action is valid. |
| #62094 | keep_closed | skipped | independent | Already closed and not part of the open canonical PR decision. |

## Needs Human

- Select the canonical fix path between #61675 and #71792. Both are open, maintainer-can-modify, repaired contributor branches for the automatic daily/idle session-memory gap, and the artifact contains explicit maintainer/ClawSweeper context supporting each as a possible canonical path.
- After the canonical PR is selected or merged, re-run closeout for overlapping useful PRs #42677 and #50933 with contributor-credit-preserving comments.
