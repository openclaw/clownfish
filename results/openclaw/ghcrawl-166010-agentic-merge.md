---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-166010-agentic-merge"
mode: "autonomous"
run_id: "25103400152"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103400152"
head_sha: "244d9ed221dbf980a1e336f259732038b8ece2d8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T10:23:17.023Z"
canonical: "https://github.com/openclaw/openclaw/pull/72658"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37706"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72658"
actions_total: 14
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-166010-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103400152](https://github.com/openclaw/clownfish/actions/runs/25103400152)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/72658

## Summary

Canonical hint #49767 is obsolete because it is closed. The hydrated artifact shows the Feishu/Lark @all false-positive fix landed in merged PR #72658 on current main ae57eb635cb99e0a06068da1e9f22453a10e5dba, with #37706 and the overlapping contributor PRs already closed. No close, merge, or fix PR mutation is planned. Open #39568/#39569 are a related but separate Feishu reply-mention/thread-routing subcluster and should remain open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
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
| #72658 | keep_closed | skipped | canonical | Merged canonical fix already exists; closed/merged targets must not receive mutation actions. |
| #39568 | keep_related | planned | related | Related follow-up subcluster, not a duplicate of the @all broadcast fix cluster. |
| #39569 | keep_related | planned | related | Useful open contributor PR for a separate Feishu reply-mention issue; keep it open for its own repair path. |
| #37706 | keep_closed | skipped | fixed_by_candidate | Already closed after the canonical merged fix; no mutation is valid. |
| #44256 | keep_closed | skipped | superseded | Already closed as superseded by the credited replacement fix. |
| #49761 | keep_closed | skipped | fixed_by_candidate | Already closed duplicate/fixed-by-candidate context; no action remains. |
| #49767 | keep_closed | skipped | superseded | Representative PR is obsolete; #72658 is the landed canonical path. |
| #49770 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by the landed canonical fix on main. |
| #50144 | keep_closed | skipped | superseded | Already closed as superseded by the safer landed fix. |
| #50394 | keep_closed | skipped | superseded | Already superseded by the landed canonical replacement. |
| #50801 | keep_closed | skipped | superseded | Already superseded by the landed canonical fix. |
| #58867 | keep_closed | skipped | superseded | Already closed as superseded by #72658. |
| #59401 | keep_closed | skipped | fixed_by_candidate | Closed feature-shaped report is covered for the observable bug by #72658; exact optional config is outside this cluster. |
| #59422 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by current main for the observable behavior; exact config option remains separate product work if desired. |

## Needs Human

- none
