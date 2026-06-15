---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2186-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132409588"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132409588"
head_sha: "2a25e72cd9df0710ef893de8f25823a6a78be854"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.941Z"
canonical: "https://github.com/openclaw/openclaw/pull/40427"
canonical_issue: "https://github.com/openclaw/openclaw/issues/25574"
canonical_pr: "https://github.com/openclaw/openclaw/pull/40427"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2186-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132409588](https://github.com/openclaw/clownfish/actions/runs/25132409588)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/40427

## Summary

Hydrated state makes #40427 the current focused canonical PR for the config-warning dedupe family, with #25574 as the still-open root issue. No close/comment/label mutation is high-confidence in this pass: #40427 is not merge-ready due unresolved Codex feedback and failing checks, #38295 is broader with unresolved bot findings, #61105 is independent, #65649 is related but separate clobber-cap work, and #59520/#57979 are already closed historical context.

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
| #25574 | keep_canonical | planned | canonical | Keep the root issue open until the canonical warning-dedupe fix is repaired and landed. |
| #40427 | keep_canonical | planned | canonical | Best current canonical path for the warning-spam root cause, but not merge-ready. |
| #38295 | keep_related | planned | related | Related useful work with unique broader restart/reload scope; not safe to close as duplicate or make canonical in this dedupe pass. |
| #59520 | keep_closed | skipped | fixed_by_candidate | Closed historical context only. |
| #61105 | keep_independent | planned | independent | Independent config behavior gap; keep open outside this warning-dedupe cluster. |
| #65649 | keep_related | planned | related | Related follow-up PR with a plausible bug fix, but it is separate from the canonical warning-dedupe path and not merge-ready. |
| #57979 | keep_closed | skipped | duplicate | Obsolete closed representative; #40427 is the current open canonical PR. |

## Needs Human

- none
