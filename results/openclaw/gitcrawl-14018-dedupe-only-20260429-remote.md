---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14018-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25110409689"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25110409689"
head_sha: "7d2adb9c59b8750974f50f0d9103e76d18fa9122"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.794Z"
canonical: "https://github.com/openclaw/openclaw/issues/66957"
canonical_issue: "https://github.com/openclaw/openclaw/issues/66957"
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14018-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25110409689](https://github.com/openclaw/clownfish/actions/runs/25110409689)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/66957

## Summary

Autonomous dedupe pass only. The obsolete representative #48535 is closed and the hydrated open refs split into independent subfamilies, so no close, merge, or fix action is safe in this run. Current open canonical paths are #42797 for default gateway availability filtering, #62317 for OpenRouter phantom-provider status entries, and #66957 for models.mode replace implicit provider discovery; all other open refs are related or independent and should remain open.

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
| #10687 | keep_independent | planned | independent | Different product scope and root cause; leave open outside this dedupe cluster. |
| #39992 | keep_independent | planned | independent | Doctor diagnostics are independent from model picker dedupe and should not be closed here. |
| #42797 | keep_canonical | planned | canonical | Keep as the canonical open PR for the default gateway availability-filtering subfamily; no closure or merge action is safe. |
| #59693 | keep_related | planned | related | Related but not a duplicate or safe replacement; keep open for maintainer review instead of closing useful contributor work. |
| #62317 | keep_canonical | planned | canonical | Best canonical issue for the phantom-provider subfamily; keep open until a clean PR lands. |
| #62323 | keep_related | planned | related | Related implementation candidate for #62317, blocked from merge/closeout by failing checks and unresolved bot review findings. |
| #62481 | keep_related | planned | related | Keep related to #62317; do not close or merge a draft branch with unresolved review and failing checks. |
| #63552 | keep_related | planned | related | Related performance optimization, not the canonical replace-mode implicit-discovery fix. |
| #66305 | keep_independent | planned | independent | Independent model-catalog cache behavior; leave open and do not tie it to the replace-mode/model-picker dedupe family. |
| #66957 | keep_canonical | planned | canonical | Best open canonical issue for replace-mode implicit provider discovery; keep open until #73557 or another clean fix lands. |
| #73557 | keep_related | planned | related | Candidate fix for #66957, but failing checks and missing merge preflight block any merge or fixed-by-candidate closeout. |

## Needs Human

- none
