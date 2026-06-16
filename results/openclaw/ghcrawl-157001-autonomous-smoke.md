---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-157001-autonomous-smoke"
mode: "autonomous"
run_id: "27598132613"
workflow_run_id: "27598132613"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27598132613"
head_sha: "3456041b23c90140b1b609eea90480f39847d880"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:19:29.371Z"
canonical: "https://github.com/openclaw/openclaw/issues/39900"
canonical_issue: "https://github.com/openclaw/openclaw/issues/39900"
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

# ghcrawl-157001-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27598132613](https://github.com/openclaw/clownfish/actions/runs/27598132613)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/39900

## Summary

No GitHub mutations are planned. The hydrated preflight shows both seed issues are already closed, #39909 was already closed as a duplicate of #39900, and current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains the OpenAI-compatible TTS extraBody/extra_body fix for #39900.

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
| #39900 | keep_closed | skipped | canonical | Canonical issue is already closed and current main contains the requested provider-local fix, so no fix PR, close, comment, label, merge, or post-merge action is needed. |
| #39909 | keep_closed | skipped | duplicate | Duplicate candidate is already closed against hydrated canonical #39900. |
| #5423 | keep_closed | skipped | related | Closed related context; no mutation is valid or needed. |
| #26952 | keep_closed | skipped | related | Closed related provider-parameter context; no mutation is valid or needed. |
| #34321 | keep_closed | skipped | related | Merged related predecessor; no mutation is valid or needed. |
| #39226 | keep_closed | skipped | related | Merged related TTS config work; no mutation is valid or needed. |
| #62233 | keep_closed | skipped | related | Merged related OpenAI-compatible TTS provider work; no mutation is valid or needed. |

## Needs Human

- none
