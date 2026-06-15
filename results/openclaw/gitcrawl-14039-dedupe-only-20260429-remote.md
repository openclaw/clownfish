---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14039-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129101029"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129101029"
head_sha: "c6792f0250a6710fb4bca0bf6ba7777e5c4f0fbc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.811Z"
canonical: "https://github.com/openclaw/openclaw/issues/42099"
canonical_issue: "https://github.com/openclaw/openclaw/issues/42099"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14039-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129101029](https://github.com/openclaw/clownfish/actions/runs/25129101029)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/42099

## Summary

Closed representative #38544 is obsolete. Hydrated state shows #42099 is the live canonical issue for the manifest-registry false-positive duplicate plugin ID warning, with #72409 as an active but non-merge-ready implementation candidate. No instant close action is high-confidence: the open PRs are either broad, useful but review-blocked, or cover related doctor/plugin-auto-enable work rather than the same exact root cause.

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
| #38544 | keep_closed | skipped | superseded | Representative is closed; keep it as historical evidence and use the live open issue #42099 as the canonical tracker for this subfamily. |
| #42099 | keep_canonical | planned | canonical | Best live canonical tracker after the closed representative drifted out of date. |
| #39269 | keep_related | planned | related | Related but not a true duplicate; useful broad contributor work with unresolved review and failing checks must remain open. |
| #44735 | keep_related | planned | related | Related Feishu duplicate-warning family work, but it has a distinct doctor auto-enable root and unresolved functional review; no duplicate or superseded close is safe. |
| #58796 | keep_related | planned | related | Related manifest-registry work with unique scope and unresolved P1 review; keep open rather than close. |
| #69292 | keep_related | planned | related | Related doctor auto-enable subfamily, not a true duplicate of #42099; useful contributor work remains open with unresolved review semantics. |
| #72409 | keep_related | planned | related | Keep the active implementation candidate open; do not close or merge in this dedupe-only job. |

## Needs Human

- none
