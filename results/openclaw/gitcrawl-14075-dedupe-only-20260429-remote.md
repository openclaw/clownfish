---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14075-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129121059"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129121059"
head_sha: "c6792f0250a6710fb4bca0bf6ba7777e5c4f0fbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.827Z"
canonical: "https://github.com/openclaw/openclaw/issues/40880"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40880"
canonical_pr: "https://github.com/openclaw/openclaw/pull/40950"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14075-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129121059](https://github.com/openclaw/clownfish/actions/runs/25129121059)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/40880

## Summary

Representative #55074 is already closed. The current open canonical issue is #40880, with #40950 as the useful but not merge-ready implementation candidate. #44814 is related WebUI attachment-limit work, not a duplicate of the MEDIA_MAX_BYTES store/sandbox staging issue. No close, label, merge, or fix mutations are planned for this pass.

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
| #40880 | keep_canonical | planned | canonical | Keep #40880 open as the canonical issue because the bug remains unresolved on current main and the open PR candidate has not landed. |
| #40950 | keep_canonical | planned | canonical | Keep #40950 open as the canonical PR candidate, but do not merge or close it because checks and review-bot findings block merge and this dedupe-only job does not allow fix work. |
| #44814 | keep_related | planned | related | Keep #44814 open as related work in the same size-limit family, but do not treat it as a duplicate or canonical fix for #40880. |
| #44757 | keep_closed | skipped | superseded | Already closed; retained only as related historical context for #44814. |
| #55068 | keep_closed | skipped | duplicate | Already closed as a duplicate of #40880; no mutation is valid. |
| #55074 | keep_closed | skipped | duplicate | Representative #55074 is obsolete because it is closed; #40880 replaces it as the open canonical issue. |
| #61880 | keep_closed | skipped | related | Already closed as fixed on current main for a related generated-media path; no mutation is valid. |

## Needs Human

- none
