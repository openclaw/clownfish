---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2344-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132966407"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132966407"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.965Z"
canonical: "https://github.com/openclaw/openclaw/pull/39726"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/39726"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2344-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132966407](https://github.com/openclaw/clownfish/actions/runs/25132966407)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/39726

## Summary

Autonomous classification only; no GitHub mutation emitted. #39726 is the current canonical repair path for the narrow chat empty-success background exec wake behavior. #46926 and #54549 remain useful related PRs with distinct broader/API scope, and #64081 is an adjacent notification-policy follow-up. No high-confidence closeout is safe for this cluster.

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
| #39726 | keep_canonical | planned | canonical | Best current canonical path for this dedupe cluster: it is open, focused, maintainer-repairable, and has the clearest contributor-credit-preserving path. |
| #46926 | keep_related | planned | related | Related same symptom family, but broader default/config behavior remains distinct from the canonical #39726 path. |
| #54549 | keep_related | planned | related | Related alternate API design with unresolved review findings; keep open rather than close as duplicate or superseded. |
| #64081 | keep_related | planned | related | Adjacent notification policy follow-up, not the same root cause or candidate fix path as the exec background completion PRs. |

## Needs Human

- none
