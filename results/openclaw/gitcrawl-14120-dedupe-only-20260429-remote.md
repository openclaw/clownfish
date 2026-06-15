---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14120-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129771398"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129771398"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.832Z"
canonical: "https://github.com/openclaw/openclaw/tree/dac72374944f35fb89e21dce0f3f2299f27d03c9"
canonical_issue: "https://github.com/openclaw/openclaw/issues/50759"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14120-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129771398](https://github.com/openclaw/clownfish/actions/runs/25129771398)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/dac72374944f35fb89e21dce0f3f2299f27d03c9

## Summary

Hydrated preflight shows the representative and both candidate PRs are already closed. No GitHub mutations are planned; the canonical path is current main at dac72374944f35fb89e21dce0f3f2299f27d03c9, which already carries the plugin-owned Ollama synthetic-auth behavior that replaced the older core-only PRs.

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
| #43945 | keep_closed | skipped | fixed_by_candidate | Already closed; closed refs must not receive close/comment mutations. |
| #43946 | keep_closed | skipped | related | Closed related context only; no mutation is valid. |
| #49030 | keep_closed | skipped | superseded | Already closed as superseded; no close action may be emitted for closed PRs. |
| #50759 | keep_closed | skipped | fixed_by_candidate | Already closed after verification; no mutation is valid. |
| #50910 | keep_closed | skipped | superseded | Already closed as superseded by current main; no close action may be emitted. |
| #51044 | keep_closed | skipped | superseded | Representative is obsolete and already closed; no mutation is valid. |

## Needs Human

- none
