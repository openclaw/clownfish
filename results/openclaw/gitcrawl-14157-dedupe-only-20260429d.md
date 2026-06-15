---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14157-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142051504"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142051504"
head_sha: "a0b870a07f2988db4b233d32e6ac2590b6afdb2d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.315Z"
canonical: "https://github.com/openclaw/openclaw/pull/58591"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/58591"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14157-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142051504](https://github.com/openclaw/clownfish/actions/runs/25142051504)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/58591

## Summary

Canonical path is the open focused PR #58591 for Feishu reply attachment mediaLocalRoots propagation. The cluster is over-broad: #39520/#39523 are related Feishu local-roots config work, #49082/#51375 overlap with #58591 but are kept open because the canonical path has not landed and instant close is disabled, #50244/#50361 are independent reply-dispatcher work, and the card-table refs form a separate related subcluster. #50429 is quarantined to central security handling. No merge, fix PR, or instant close is planned because the job blocks merge/fix/raise_pr and disables instant close.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #58591 | keep_canonical | planned | canonical | #58591 is the best surviving canonical PR for the job's display title and canonical hint. Merge is not emitted because allow_merge=false and there is no merge preflight with Codex /review. |
| #39520 | keep_related | planned | related | Related Feishu local-media configuration work, but not the same narrow root cause as #58591. |
| #39523 | keep_related | planned | related | Related provider config fallback work with unresolved review blockers; keep open outside the #58591 canonical path. |
| #49082 | keep_related | planned | related | Overlaps the #58591 canonical path, but this action is downgraded to non-mutating keep_related because instant close is disabled and the canonical PR is still open; contributor credit from https://github.com/openclaw/openclaw/pull/49082 should be preserved in any future closeout. |
| #50244 | keep_independent | planned | independent | Independent reply-dispatcher logging improvement, not a duplicate of the mediaLocalRoots attachment fix. |
| #50361 | keep_independent | planned | independent | Independent draft PR for Feishu duplicate final dedupe; keep out of the #58591 dedupe path. |
| #50429 | route_security | planned | security_sensitive | Scoped quarantine to central OpenClaw security handling; unrelated non-security refs remain classified. |
| #51375 | keep_related | planned | related | Overlaps the #58591 canonical path, but this action is downgraded to non-mutating keep_related because instant close is disabled and the canonical PR is still open; contributor credit from https://github.com/openclaw/openclaw/pull/51375 should be preserved in any future closeout. |
| #70651 | keep_closed | skipped | related | Already closed; included only to record that no mutation is planned. |
| #39506 | keep_closed | skipped | related | Already closed linked context; no closure or comment action is valid. |
| #42809 | keep_related | planned | related | Related Feishu card-table work, not a duplicate of the mediaLocalRoots attachment fix. |
| #43690 | keep_related | planned | related | Related open issue for a separate Feishu card-table-limit subcluster; keep open. |
| #73651 | keep_related | planned | related | Related card-table fallback candidate; keep separate from this cluster's canonical mediaLocalRoots path. |

## Needs Human

- none
