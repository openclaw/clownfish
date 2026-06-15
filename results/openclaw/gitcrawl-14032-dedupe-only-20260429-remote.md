---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14032-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129094069"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129094069"
head_sha: "c6792f0250a6710fb4bca0bf6ba7777e5c4f0fbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.804Z"
canonical: "https://github.com/openclaw/openclaw/pull/46947"
canonical_issue: "https://github.com/openclaw/openclaw/issues/45846"
canonical_pr: "https://github.com/openclaw/openclaw/pull/46947"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14032-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129094069](https://github.com/openclaw/clownfish/actions/runs/25129094069)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/46947

## Summary

Closed representative #46025 is historical context; current main already carries the context-notice SVG sizing fix. The best open canonical path in the remaining hydrated overflow family is #45846 with narrow PR #46947. No close, merge, label, or fix actions are safe or needed for this dedupe-only job; the other open refs are related follow-up work or independent UI/sandbox work.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #45846 | keep_canonical | planned | canonical | Keep as the canonical open issue for the image-sizing subfamily; #46947 is open and not landed, so no fixed-by-candidate closeout is valid. |
| #46947 | keep_canonical | planned | canonical | Use #46947 as the open canonical PR for the remaining sidebar-image overflow work, but do not merge or close anything from this worker result. |
| #47187 | keep_related | planned | related | Not a true duplicate of #46025 or #46947 because it carries unique remaining UI cleanup work; leave open for maintainer follow-up. |
| #68422 | keep_independent | planned | independent | Independent open UI fix with its own canonical issue path; do not close or merge it as part of this dedupe-only cluster. |
| #44077 | keep_independent | planned | independent | Unrelated linked issue; keep open and independent, with no security quarantine or dedupe closeout from this cluster. |

## Needs Human

- none
