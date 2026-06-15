---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1883-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130800667"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130800667"
head_sha: "e60ec11ddea49c43b3b3d13770368f7be20dc559"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.883Z"
canonical: "https://github.com/openclaw/openclaw/issues/41609"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41609"
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

# gitcrawl-1883-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130800667](https://github.com/openclaw/clownfish/actions/runs/25130800667)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41609

## Summary

Classified the hydrated open job candidates without GitHub mutation. #41609 remains the live canonical Feishu direct inbound interactive-card parsing issue. No high-confidence close action is safe: #13175 is already closed, #54972/#56795/#60380/#60383 are related but non-duplicate or not merge-ready, and #66327 is an independent MS Teams PR.

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
| #13175 | keep_closed | skipped |  | Already closed in live state; no mutation is valid. |
| #41609 | keep_canonical | planned | canonical | Best surviving canonical for the direct inbound Feishu interactive-card parsing gap. |
| #54972 | keep_related | planned | related | Related Feishu card parsing work, but not a true duplicate of the direct inbound canonical issue. |
| #56795 | keep_related | planned | related | Useful related implementation candidate, but not merge-ready or closable in this dedupe-only run. |
| #60380 | keep_related | planned | related | Related parser subcase with unique reproduction details; keep open until its fix path is clean. |
| #60383 | keep_related | planned | related | Useful related PR, but not merge-ready and not safe to close or use for closeout. |
| #66327 | keep_independent | planned | independent | Different provider and root cause from the Feishu canonical family. |

## Needs Human

- none
