---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165992-agentic-merge"
mode: "autonomous"
run_id: "24950902071"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24950902071"
head_sha: "42a6ec80d618a9ebe18cd15d6c4d8786327c5373"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T07:21:30.663Z"
canonical: "https://github.com/openclaw/openclaw/issues/41985"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41985"
canonical_pr: null
actions_total: 13
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165992-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24950902071](https://github.com/openclaw/projectclownfish/actions/runs/24950902071)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41985

## Summary

As of 2026-04-26, #41985 remains the live maintainer-selected canonical umbrella for Control UI/WebChat non-image attachment support. Exact generic duplicates were already closed earlier on 2026-04-26; the remaining open refs each carry extra scope, so this plan keeps them open and builds a narrow first fix artifact for the end-to-end image-only pipeline described most precisely by #69447.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #30389 | keep_related | planned | related | Keep open as related. Closing to #41985 would discard remaining model-picker/skill-menu scope that is not resolved by the non-image attachment fix. |
| #30759 | keep_related | planned | related | Keep open as related. #30759 is in the same family as #41985, but it preserves narrower document-format and extraction expectations that are not safe to collapse automatically from the current artifact. |
| #41985 | keep_canonical | planned | canonical | Keep #41985 as the current canonical issue. It is live, maintainer-endorsed, and already anchors the duplicate family without being obsolete. |
| #41985 | fix_needed | planned | canonical | The canonical issue remains unresolved on current main and needs a new fix path rather than a merge or post-merge closeout. |
| #41992 | keep_closed | skipped | duplicate | Historical duplicate already closed in live state; no further mutation is valid. |
| #43242 | keep_closed | skipped | duplicate | Historical duplicate already closed in live state; no further mutation is valid. |
| #47933 | keep_related | planned | related | Keep open as related. Upload/download scope is broader than the immediate non-image upload root cause and is not a safe instant-close duplicate. |
| #48700 | keep_related | planned | related | Keep open as related. The issue is in the same family, but it preserves office-format expectations that the current artifact does not prove are fully represented by #41985. |
| #56298 | keep_closed | skipped | duplicate | Historical duplicate already closed in live state; no further mutation is valid. |
| #63094 | keep_closed | skipped | duplicate | Historical duplicate already closed in live state; no further mutation is valid. |
| #67622 | keep_closed | skipped | duplicate | Historical duplicate already closed in live state; no further mutation is valid. |
| #69185 | keep_related | planned | related | Keep open as related. #69185 carries broader product-scope and policy questions around arbitrary files and configuration, so it is not a safe duplicate closeout. |
| #69447 | build_fix_artifact | planned | related | Plan a new narrow fix artifact around #69447. It is the most actionable live issue for a first PR that fixes supported non-image uploads without collapsing broader follow-up scope. |

## Needs Human

- none
