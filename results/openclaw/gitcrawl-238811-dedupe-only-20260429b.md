---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238811-dedupe-only-20260429b"
mode: "autonomous"
run_id: "25107681199"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107681199"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.639Z"
canonical: "https://github.com/openclaw/openclaw/issues/41609"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41609"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73203"
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 0
---

# gitcrawl-238811-dedupe-only-20260429b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107681199](https://github.com/openclaw/clownfish/actions/runs/25107681199)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41609

## Summary

The original canonical hint #42218 is already closed. The live cluster splits into two open paths: broad direct inbound Feishu interactive-card parsing remains tracked by #41609 with #56795 as a blocked implementation candidate, while the residual post-format/text-tag/nested-array parser gap is best carried by #73203. No high-confidence close is ready; #60380 closeout is blocked until #73203 validates or lands.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #60380 | close_fixed_by_candidate | skipped | fixed_by_candidate | Likely covered by #73203, but candidate validation has not cleared and the PR has not landed. |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41609 | keep_canonical | planned | canonical | #41609 is the best live canonical issue for the broad direct inbound interactive-card parsing gap after #42218 drifted closed. |
| #42218 | keep_closed | skipped | superseded | Closed representative is historical evidence only. |
| #45936 | keep_closed | skipped | superseded | Already-closed dirty candidate; no mutation permitted. |
| #48281 | keep_closed | skipped | duplicate | Historical duplicate evidence only. |
| #55466 | keep_closed | skipped | related | Closed related implementation context; no mutation permitted. |
| #56795 | keep_related | planned | related | Useful open implementation candidate for #41609, but not merge-ready and not a duplicate close target. |
| #60380 | close_fixed_by_candidate | blocked | fixed_by_candidate | Likely covered by #73203, but candidate validation has not cleared and the PR has not landed. |
| #60383 | keep_related | planned | related | Related contributor PR with useful overlapping scope, but not safe to close or merge in this dedupe-only job. |
| #72397 | route_security | planned | security_sensitive | Security-shaped evidence appears on this exact linked item, so it should be handled by central OpenClaw security triage only. |
| #73203 | keep_canonical | planned | canonical | Best live canonical PR for the residual #60380 post-format/text-tag/nested-array parser gap, but it must remain open until validation clears. |

## Needs Human

- none
