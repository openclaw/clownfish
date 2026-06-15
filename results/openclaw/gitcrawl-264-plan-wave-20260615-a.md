---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-264-plan-wave-20260615-a"
mode: "plan"
run_id: "27516719653"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27516719653"
head_sha: "6bb552b68729da7580c0ee53a6e211c17d1b2e3a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:43:28.379Z"
canonical: "#89899"
canonical_issue: "#89425"
canonical_pr: "#89899"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-264-plan-wave-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27516719653](https://github.com/openclaw/clownfish/actions/runs/27516719653)

Workflow conclusion: success

Worker result: planned

Canonical: #89899

## Summary

Plan only: keep #89899 as the live canonical PR for the speech-core bundled public-surface packaging/facade mismatch. #89425 is covered by #89899, #92355 is superseded by #89899, #88853 is related but mixed with a separate poll/send-schema change, and #92240 is already closed.

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
| #89899 | keep_canonical | planned | canonical | Best live canonical fix path for the speech-core bundled public-surface packaging/facade mismatch. Merge is not planned because this job is plan mode and merge is blocked by frontmatter. |
| #89425 | close_fixed_by_candidate | planned | fixed_by_candidate | The issue is covered by the hydrated passing candidate fix #89899, which should own validation and follow-up. |
| #92355 | close_superseded | planned | superseded | The PR addresses the same symptom but is superseded by #89899, which fixes the packaged contract rather than adding a fallback to a path not shipped in the installed root artifact. |
| #88853 | keep_related | planned | related | Related mixed PR: speech-core overlap is covered by #89899, but the poll/send-schema portion needs a separate hydrated follow-up path before any closeout decision. |
| #92240 | keep_closed | skipped | duplicate | Historical duplicate context only; no action should be applied to an already-closed ref. |

## Needs Human

- none
