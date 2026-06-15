---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2346-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132970875"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132970875"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.966Z"
canonical: "https://github.com/openclaw/openclaw/issues/39847"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39847"
canonical_pr: null
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2346-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132970875](https://github.com/openclaw/clownfish/actions/runs/25132970875)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/39847

## Summary

Canonical path is the open bug #39847, not the representative PR #39894. No close, merge, or fix action is safe in this dedupe-only job because #39894 is draft/broad and #50520/#51653 are overlapping same-author implementation candidates with unresolved bot-review sanitizer-scope findings and failing check jobs.

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
| #39847 | keep_canonical | planned | canonical | Best surviving canonical is the open root-cause issue; implementation PR choice remains unresolved. |
| #39894 | keep_related | planned | related | Same bug family, but not a safe canonical PR and not safe to close before a credited replacement or selected implementation path exists. |
| #50520 | needs_human | planned | needs_human | Maintainer must choose whether #50520 is the canonical repair path, whether to combine it with #51653, or whether to request a narrower outbound-only sanitizer. |
| #51653 | needs_human | planned | needs_human | This overlaps #50520 but has its own unresolved sanitizer-scope blocker; choosing between the PRs is the exact human decision. |
| #41355 | keep_related | planned | related | Related symptom family, but a distinct root cause and not closable in this cluster. |
| #28170 | keep_closed | skipped | related | Closed context only. |
| #30405 | keep_closed | skipped | related | Closed context only. |

## Needs Human

- Choose the canonical implementation path for #39847 between #50520 and #51653, or request a narrower repair that strips echoed inbound metadata before outbound delivery while preserving legitimate timestamp-prefixed replies and intentional quoted metadata examples.
