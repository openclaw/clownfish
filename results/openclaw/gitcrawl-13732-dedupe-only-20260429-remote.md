---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13732-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109766673"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109766673"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.755Z"
canonical: "https://github.com/openclaw/openclaw/pull/39610"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39610"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-13732-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109766673](https://github.com/openclaw/clownfish/actions/runs/25109766673)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39610

## Summary

Canonical path is open PR #39610. The representative issue #51312 and context issue #39579 are already closed, so no close actions are emitted. Merge/fix work is out of scope for this dedupe-only job and #39610 is not merge-ready from the hydrated artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
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
| #39610 | keep_canonical | planned | canonical | Best live canonical is the open implementation PR; keep it open for maintainer review and any branch repair outside this dedupe-only run. |
| #39579 | keep_closed | skipped | superseded | Historical context only; already closed as superseded by the canonical implementation PR. |
| #51312 | keep_closed | skipped | duplicate | The job's canonical hint is obsolete because #51312 is closed; #39610 is the surviving canonical path. |

## Needs Human

- none
