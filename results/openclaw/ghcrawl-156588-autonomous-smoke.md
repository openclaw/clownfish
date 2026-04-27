---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156588-autonomous-smoke"
mode: "autonomous"
run_id: "24987090794"
run_url: "https://github.com/openclaw/clownfish/actions/runs/24987090794"
head_sha: "3e2fd13363b486f8485ca909bf84ab36ee9ff77c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-27T09:40:56.163Z"
canonical: "https://github.com/openclaw/openclaw/issues/46871"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46871"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72619"
actions_total: 20
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# ghcrawl-156588-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/24987090794](https://github.com/openclaw/clownfish/actions/runs/24987090794)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46871

## Summary

Classified the hydrated cluster around the nodes list/status mismatch. The live canonical issue is #46871 and the calibrated canonical repair PR is #72619, but #72619 is not merge-ready because it has failing checks, missing merge preflight, and unresolved review-bot/security-shaped findings that must be handled by the repair executor. No GitHub mutations were performed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 20 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/72619 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #51051 | close_superseded | skipped | superseded | action status is blocked |
| #72619 | merge_canonical | executed | fix_pr | merged by ProjectClownfish post-flight |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #46871 | keep_canonical | planned | canonical | Best surviving issue for the nodes list/status mismatch family. |
| #72619 | fix_needed | planned | canonical | Canonical PR is repairable but not merge-ready; autonomous mode requires an executable repair artifact rather than merge or passive keep-open. |
| cluster:ghcrawl-156588-autonomous-smoke | build_fix_artifact | planned |  | Repair the maintainer-calibrated canonical PR before merge or closeout. |
| #51051 | close_superseded | blocked | superseded | Superseded by the canonical #72619 repair path, but close is blocked on the canonical fix path. |
| #46894 | keep_related | planned | related | Related command-word collision cluster, but independent from the nodes canonical path. |
| #46895 | keep_related | planned | related | Separate /model WebUI subfamily with unresolved review findings. |
| #47069 | keep_related | planned | related | Separate /model WebUI subfamily; keep open for its own review path. |
| #51270 | keep_related | planned | related | Separate TUI /model command subfamily; not duplicate of the nodes canonical issue. |
| #49989 | keep_independent | planned | independent | Different component and root cause. |
| #50847 | keep_closed | skipped | duplicate | Already closed historical evidence only. |
| #50871 | keep_closed | skipped | superseded | Already closed; no mutation allowed. |
| #50970 | keep_closed | skipped | superseded | Representative is obsolete and already closed. |
| #51027 | keep_closed | skipped | related | Closed mixed-scope PR, historical evidence only. |
| #51053 | keep_closed | skipped | superseded | Already closed; no mutation allowed. |
| #51126 | keep_closed | skipped | related | Closed related /model issue; historical evidence only. |
| #51507 | keep_closed | skipped | independent | Closed unrelated issue; no mutation allowed. |
| #51536 | keep_closed | skipped | independent | Closed unrelated PR; historical evidence only. |
| #65706 | keep_closed | skipped | duplicate | Already closed duplicate evidence only. |
| #65772 | keep_closed | skipped | superseded | Already closed replacement source PR; no mutation allowed. |
| #71462 | keep_closed | skipped | independent | Closed unrelated merged PR. |

## Needs Human

- none
