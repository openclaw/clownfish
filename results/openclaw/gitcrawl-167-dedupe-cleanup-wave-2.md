---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-167-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384012"
workflow_run_id: "27609384012"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384012"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.117Z"
canonical: "https://github.com/openclaw/openclaw/issues/77702"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77702"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-167-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384012](https://github.com/openclaw/clownfish/actions/runs/27609384012)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77702

## Summary

Hydrated state supports splitting this over-broad Telegram cluster. #77702 is the best live canonical for the original MEDIA attachment-loss family. #91383 is a related but distinct ordinary Telegram direct-reply Markdown/link text-loss report and should stay open. Linked PRs #92946 and #93059 are not safe close/merge targets in this close-only job: #92946 is a different Telegram rich-API compatibility PR with failing checks, and #93059 is a draft candidate for #91383 with failed proof checks and an unresolved ClawSweeper path-coverage blocker.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #77702 | keep_canonical | planned | canonical | Best live canonical for the MEDIA attachment-loss subfamily; no close action is appropriate. |
| #91383 | keep_related | planned | related | Related Telegram message-loss area, but not a duplicate of #77702 and not safe to close. |
| #92946 | keep_related | planned | related | Related Telegram delivery work, but different scope and failing checks block any fixed-by-candidate or merge-style conclusion. |
| #93059 | keep_related | planned | related | Useful linked candidate for #91383, but draft status, failing proof checks, and unresolved path coverage make it non-mergeable and not a basis for closing #91383 in this close-only job. |

## Needs Human

- none
