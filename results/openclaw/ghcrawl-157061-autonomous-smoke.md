---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157061-autonomous-smoke"
mode: "autonomous"
run_id: "27598134346"
workflow_run_id: "27598134346"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598134346"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:19:29.390Z"
canonical: "https://github.com/openclaw/openclaw/issues/43095"
canonical_issue: "https://github.com/openclaw/openclaw/issues/43095"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-157061-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598134346](https://github.com/openclaw/clownfish/actions/runs/27598134346)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/43095

## Summary

No GitHub mutations are planned. The hydrated preflight shows both cluster seed refs are already closed, security-sensitive signal is absent, and current main 6aa83374d90d35226b9cf3577155c3876a91b4b3 already contains the accepted/pending behavior for soft sessions_send wait-window timeouts while preserving terminal timeout errors.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
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
| #43095 | keep_closed | skipped | canonical | #43095 remains the historical canonical issue for this cluster, but it is already closed and current main contains the narrow behavior change, so no fix PR or closeout action is needed. |
| #53527 | keep_closed | skipped | duplicate | #53527 is already closed and duplicates the same sessions_send delivered-but-no-inline-reply timeout ambiguity tracked by #43095. |

## Needs Human

- none
