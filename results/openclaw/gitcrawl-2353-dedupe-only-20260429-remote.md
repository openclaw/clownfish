---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2353-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132974593"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132974593"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.968Z"
canonical: "https://github.com/openclaw/openclaw/issues/47487"
canonical_issue: "https://github.com/openclaw/openclaw/issues/47487"
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-2353-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132974593](https://github.com/openclaw/clownfish/actions/runs/25132974593)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/47487

## Summary

Closed representative #54109 is not a live canonical. The only live canonical issue in this cluster is #47487, but Clownfish should not close or fix around it until maintainers decide the intended global-versus-agent tools.exec/tools.fs access semantics. #69190 is related but has distinct browser-timeout reproduction gaps, and #55923 belongs to the separate fake-tool/placeholder-reply family. No close/comment/label mutation is planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #40069 | keep_closed | skipped | related | Closed context ref only; no close/comment/label action is valid. |
| #40082 | keep_closed | skipped | related | Closed historical issue; keep as evidence only. |
| #40150 | keep_closed | skipped | superseded | Closed superseded PR; no mutation is valid. |
| #40202 | keep_closed | skipped | related | Closed related PR; historical evidence only. |
| #40457 | keep_closed | skipped | related | Closed Kimi recovery context; no cluster mutation needed. |
| #47487 | needs_human | blocked | needs_human | Maintainer product-policy judgment is needed before Clownfish changes global versus agent tool access semantics or closes related reports. |
| #47991 | keep_closed | skipped | related | Closed useful fix attempt; keep as historical evidence for the canonical issue. |
| #54109 | keep_closed | skipped | independent | Closed representative is obsolete and not the live canonical for the opposite restricted-profile bypass. |
| #55923 | keep_related | planned | related | Related but distinct open PR; keep open and do not close or merge in this dedupe-only pass. |
| #68195 | keep_closed | skipped | related | Merged historical related PR; no action needed in this cluster. |
| #69190 | keep_related | planned | related | Related issue with unique reproduction gaps; keep open rather than close as duplicate. |

## Needs Human

- #47487 needs maintainer judgment on the intended global-versus-agent tools.exec/tools.fs semantics before Clownfish can plan a fix or close related reports.
