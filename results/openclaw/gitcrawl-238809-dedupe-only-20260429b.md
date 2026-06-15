---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238809-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25102857048"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102857048"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.113Z"
canonical: "https://github.com/openclaw/openclaw/pull/73923"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41545"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73923"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238809-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102857048](https://github.com/openclaw/clownfish/actions/runs/25102857048)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73923

## Summary

Hydrated state shows the original representative #41546 is already closed, the linked bug #41545 remains open, and #73923 is the only open canonical fix PR. No GitHub mutations are planned: superseded PRs are already closed, the canonical issue stays open until the fix lands, and merge/fix/post-merge close actions are disabled for this job.

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
| #41545 | keep_canonical | planned | canonical | Canonical issue remains open until the hydrated canonical fix PR lands. |
| #41546 | keep_closed | skipped | superseded | Already closed as superseded by the current canonical PR. |
| #41552 | keep_closed | skipped | superseded | Already closed as superseded by the current canonical PR. |
| #41718 | keep_closed | skipped | superseded | Already closed as superseded by the current canonical PR. |
| #42001 | keep_closed | skipped | superseded | Already closed after replacement by the current canonical PR. |
| #73923 | keep_canonical | planned | canonical | Current canonical PR is open and viable for maintainer review, but this dedupe-only job cannot merge or repair it. |

## Needs Human

- none
