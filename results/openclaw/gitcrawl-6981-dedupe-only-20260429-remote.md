---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-6981-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136847495"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136847495"
head_sha: "c207d367ab088fb89ca96c77cc23dd9c55875cc5"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.279Z"
canonical: "https://github.com/openclaw/openclaw/pull/44973"
canonical_issue: "https://github.com/openclaw/openclaw/issues/44922"
canonical_pr: "https://github.com/openclaw/openclaw/pull/44973"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-6981-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136847495](https://github.com/openclaw/clownfish/actions/runs/25136847495)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/44973

## Summary

Hydrated preflight shows no security-sensitive items. #44973 is the best narrow canonical implementation candidate for the open #44922 duplication bug; #39513 is related docs work and #48883 is broader related hardening with unresolved bot review blockers and failing checks, so no close, merge, or fix PR action is planned.

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
| #10538 | keep_closed | skipped |  | Already closed before this run; no ProjectClownfish close/comment action is valid. |
| #11726 | keep_closed | skipped |  | Already closed before this run; no ProjectClownfish close/comment action is valid. |
| #39513 | keep_related | planned | related | Same main-session cron prompt family, but docs/workaround scope is distinct from the narrow runtime duplication fix in #44973. |
| #44922 | keep_related | planned | fixed_by_candidate | Keep the issue open until the hydrated candidate fix lands or maintainers choose another implementation path. |
| #44973 | keep_canonical | planned | canonical | Best current canonical path for the concrete duplicate-wrapper bug; merge is blocked by job policy and missing merge preflight, not by duplicate classification. |
| #48883 | keep_related | planned | related | Related broader hardening candidate, not a safe duplicate/superseded closeout and not merge-ready under the hydrated review and check state. |

## Needs Human

- none
