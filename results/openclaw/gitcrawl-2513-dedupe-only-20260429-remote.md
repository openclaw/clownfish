---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2513-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25133534673"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25133534673"
head_sha: "70c8a777fa9eb04b416c45f07c80bfc38f2df21b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.986Z"
canonical: "https://github.com/openclaw/openclaw/pull/70936"
canonical_issue: "https://github.com/openclaw/openclaw/issues/51455"
canonical_pr: "https://github.com/openclaw/openclaw/pull/70936"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2513-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25133534673](https://github.com/openclaw/clownfish/actions/runs/25133534673)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/70936

## Summary

Closed representative #54447 is obsolete. The current non-security canonical path is open issue #51455 plus open repair PR #70936, which targets the active document-extract PDF fallback path. No close/comment/label mutations are planned because the only open PR in this cluster is canonical, the issue should remain open until the fix lands, closed context refs are historical only, #70936 has failing checks, and this job blocks merge/fix/raise_pr/post-merge closeout.

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
| #51455 | keep_canonical | planned | canonical | #51455 is the surviving canonical issue for the still-open PDF.js standard-font fallback bug. |
| #70936 | keep_canonical | planned | canonical | #70936 is the best current canonical PR, but this dedupe-only job must keep it open for maintainer review rather than merge or repair it. |
| #51465 | route_security | planned | security_sensitive | Quarantine the exact security-sensitive linked ref to central OpenClaw security handling. |
| #54447 | keep_closed | skipped | superseded | Closed historical PR; keep it closed as superseded by the current #51455/#70936 path. |
| #62175 | keep_closed | skipped | superseded | Closed historical PR; keep it closed as superseded by the current #51455/#70936 path. |
| #11427 | keep_closed | skipped | superseded | Closed historical PR; keep it closed as superseded by the current #51455/#70936 path. |

## Needs Human

- none
