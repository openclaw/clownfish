---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4725-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136005985"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136005985"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:05:51.251Z"
canonical: "https://github.com/openclaw/openclaw/pull/47216"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/47216"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-4725-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136005985](https://github.com/openclaw/clownfish/actions/runs/25136005985)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/pull/47216

## Summary

Hydrated preflight shows closed representative #40974 is obsolete and not the current canonical path. #47216 is the open canonical PR for the direct-webchat sender-metadata subfamily and should stay open. #52052 is a separate related Telegram sticker-handle PR, not a duplicate of #47216, but it needs maintainer contract direction before any merge/fixed-by-candidate closeout because review comments require aligning the surfaced key with accepted sendSticker arguments and two Windows checks are failing. No close, merge, fix, or PR-open actions are planned.

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
| #40974 | keep_closed | skipped | independent | Already closed and independent from the two open candidate PR subfamilies. |
| #47216 | keep_canonical | planned | canonical | Best current canonical path for the direct-webchat transport sender metadata bug; no duplicate closeout is available in this cluster. |
| #52052 | needs_human | blocked | needs_human | Specific maintainer decision required on the sticker handle contract key before automation can safely repair, merge, or close anything against this PR. |

## Needs Human

- #52052: choose the sticker handle contract strategy before any merge/fixed-by-candidate path: either surface an accepted fileId/stickerId key in conversation info or add/document sticker_file_id as an accepted alias in the shared schema and Telegram runtime; also resolve the failing Windows checks before merge.
