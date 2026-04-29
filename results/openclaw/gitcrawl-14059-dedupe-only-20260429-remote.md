---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14059-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129114805"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129114805"
head_sha: "c6792f0250a6710fb4bca0bf6ba7777e5c4f0fbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-29T19:24:42.593Z"
canonical: "https://github.com/openclaw/openclaw/issues/51287"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51287"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14059-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129114805](https://github.com/openclaw/clownfish/actions/runs/25129114805)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/51287

## Summary

Canonical moved from closed #51292 to open issue #51287. No close actions are safe: #25789 is a useful but incomplete implementation PR that should stay open for maintainer review/repair, and #62284 is a related but distinct timed-approval feature request.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #25789 | keep_related | planned | related | Same feature family as #51287, but useful contributor work should remain open rather than be closed as a duplicate or superseded without a replacement path. |
| #49825 | keep_closed | skipped | superseded | Closed context ref only; historical evidence for the configurable approval-timeout family. |
| #51287 | keep_canonical | planned | canonical | Best surviving canonical issue for the remaining product/API request. |
| #51292 | keep_closed | skipped | superseded | Former representative is closed context only and is superseded by the open canonical issue #51287. |
| #60151 | keep_closed | skipped | independent | Closed independent context ref; no cluster mutation needed. |
| #62284 | keep_related | planned | related | Same exec approval area, but a meaningfully different feature scope; leave open as related rather than closing as duplicate. |

## Needs Human

- none
