---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238856-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25102945423"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25102945423"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.131Z"
canonical: "https://github.com/openclaw/openclaw/issues/71992"
canonical_issue: "https://github.com/openclaw/openclaw/issues/71992"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72004"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238856-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25102945423](https://github.com/openclaw/clownfish/actions/runs/25102945423)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/71992

## Summary

Hydrated evidence shows an over-broad Control UI duplication cluster. Treat #71992 plus open PR #72004 as the canonical path for the assistant final-render race, and keep the other open refs related because they preserve distinct streaming-layout, user-message/history-merge, or umbrella-scope evidence. No close, merge, fix, or PR actions are planned.

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
| #63956 | keep_related | planned | related | Keep open as a related Control UI streaming-rendering bug with a different symptom and likely fix surface. |
| #69208 | keep_related | planned | related | Keep as a related umbrella/index issue; it is not a duplicate target for this focused dedupe pass. |
| #71992 | keep_canonical | planned | canonical | Best canonical issue for the assistant final-render duplicate race; keep open until #72004 or an equivalent fix lands. |
| #72004 | keep_canonical | planned | canonical | Keep as the canonical repair candidate for #71992; merge is out of scope for this job. |
| #72578 | keep_related | planned | related | Keep open as related, not duplicate; it carries unique user-message and content-shape dedupe evidence. |
| #72963 | keep_related | planned | related | Keep open as related pending validation after #72004 and the already-closed TTS fix path are accounted for. |

## Needs Human

- none
