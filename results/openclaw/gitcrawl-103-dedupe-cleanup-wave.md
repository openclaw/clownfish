---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-103-dedupe-cleanup-wave"
mode: "autonomous"
run_id: "27608148058"
workflow_run_id: "27608148058"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27608148058"
head_sha: "d39befcd6309943509cd00e8e3cd0ee7c314e6be"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T09:34:59.779Z"
canonical: "https://github.com/openclaw/openclaw/issues/86174"
canonical_issue: "https://github.com/openclaw/openclaw/issues/86174"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# gitcrawl-103-dedupe-cleanup-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27608148058](https://github.com/openclaw/clownfish/actions/runs/27608148058)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/86174

## Summary

Classified the hydrated open candidates without GitHub mutation. #86174 remains the best live canonical issue for the WebChat new-session inherited model mismatch. #77440/#77690 are a separate related WebChat default-label lane, #51251 is a broader persistent session override/product-policy lane, and #83565 is a related but distinct public API feature request. No close actions are high-confidence because the open items retain distinct scope or have an unmerged draft PR with failing proof checks.

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
| Needs human | 3 |

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
| #86174 | keep_canonical | planned | canonical | Keep as canonical because it is the clearest surviving issue for the new-session inherited model mismatch, but implementation still depends on maintainer session model contract choice. |
| #51251 | keep_related | planned | related | Related, not duplicate: it has broader restart and explicit pin semantics that should stay open for maintainer product review. |
| #77440 | keep_related | planned | related | Related subfamily, not duplicate of #86174: the root is agent-specific default label resolution rather than parent-session override inheritance. Do not close because #77690 is open draft and not merged. |
| #77690 | keep_related | planned | related | Keep open as the related direct implementation candidate for #77440, but it is not merge-ready and cannot be repaired in this no-fix job. |
| #83565 | keep_related | planned | related | Related, not duplicate: this is an API/product feature request and should remain open for maintainer contract selection. |

## Needs Human

- #86174: maintainer needs to choose the permanent WebChat child-session model contract before implementation: explicit default/no-inherit state versus a scoped inheritance exception.
- #51251: maintainer product decision remains on how explicit or legacy session pins should interact with config changes, /new, reset, and clear/inherit behavior.
- #83565: maintainer API decision remains on whether one-shot model override belongs in sessions.patch, chat-send, or another Gateway contract.
