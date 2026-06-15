---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4519-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136000782"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136000782"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:05:51.248Z"
canonical: "split: https://github.com/openclaw/openclaw/pull/58993 for DM/spaceType detection and https://github.com/openclaw/openclaw/pull/65058 for add-on lifecycle payload parsing"
canonical_issue: null
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-4519-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136000782](https://github.com/openclaw/clownfish/actions/runs/25136000782)

Workflow conclusion: success

Worker result: needs_human

Canonical: split: https://github.com/openclaw/openclaw/pull/58993 for DM/spaceType detection and https://github.com/openclaw/openclaw/pull/65058 for add-on lifecycle payload parsing

## Summary

No close, merge, label, or comment mutations are safe from this pass. The closed representative #40248 is historical only. The live cluster splits into two narrow canonical subfamilies, #58993 for Google Chat DM/spaceType detection and #65058 for add-on lifecycle payload parsing, while broad PR #42330 still needs maintainer judgment because it mixes unique product decisions with broad auth/logging/mention/media changes.

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
| Needs human | 1 |

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
| #40248 | keep_closed | skipped | superseded | Closed representative is obsolete historical context, not a live canonical target. |
| #42330 | needs_human | blocked | needs_human | This is not a true duplicate of #58993 or #65058, and deciding whether to salvage any unique reply-to default/auth/mention/media portions is a maintainer judgment call. |
| #58993 | keep_canonical | planned | canonical | Best canonical PR for the #58514 DM/spaceType detection subfamily, but merge is blocked by job policy and unresolved test-coverage feedback. |
| #58514 | keep_related | planned | fixed_by_candidate | The issue appears covered by #58993, but it should stay open until the candidate PR lands or maintainers otherwise close it. |
| #65058 | keep_canonical | planned | canonical | Best canonical PR for the add-on lifecycle payload parser subset, but not merge-ready in this dedupe-only job. |
| #65007 | keep_related | planned | related | Related broader issue should remain open; #65058 is only a partial parser fix, not the canonical resolution for the whole report. |

## Needs Human

- #42330 requires maintainer judgment: the broad PR is not a duplicate, contains unique reply-to default/product behavior, and includes broad auth/logging/mention/media changes with unresolved review-bot findings.
