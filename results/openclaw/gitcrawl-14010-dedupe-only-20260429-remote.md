---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14010-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25110392814"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25110392814"
head_sha: "7d2adb9c59b8750974f50f0d9103e76d18fa9122"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.787Z"
canonical: "https://github.com/openclaw/openclaw/issues/53641"
canonical_issue: "https://github.com/openclaw/openclaw/issues/53641"
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

# gitcrawl-14010-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25110392814](https://github.com/openclaw/clownfish/actions/runs/25110392814)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/53641

## Summary

Preflight artifact at main abaa4326d81b56da1c468190a5006365b2a49cdc shows no security-sensitive hydrated refs. #53641 remains the canonical open issue for ordinary Discord message.send attachment false-success, narrowed by the hydrated Clawsweeper review to direct buffer-backed sends. The remaining open refs are related but split into distinct subfamilies: Discord MIME/WebP preservation (#41256/#41265), poll/components schema overexposure (#42820/#43015/#46455/#65301), Discord thread-reply aliases (#43570/#43574), and send media hydration candidates (#57335/#63578). No high-confidence close action is planned because each open issue has unique scope or is blocked on unmerged PRs with failing checks or actionable bot-review findings.

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
| #53641 | keep_canonical | planned | canonical | Best live canonical for the ordinary Discord message.send attachment false-success subfamily. |
| #57335 | keep_related | planned | related | Useful candidate for the canonical issue, but not close or merge ready. |
| #63578 | keep_related | planned | related | Related candidate that needs maintainer review/refinement; not duplicate or superseded in this cluster. |
| #41256 | keep_related | planned | related | Same Discord media area, but materially different root cause and fix surface from the canonical issue. |
| #41265 | keep_related | planned | related | Related implementation candidate for a separate MIME/WebP subfamily; merge and fixed-by closeout are blocked. |
| #42820 | keep_related | planned | related | Related message-tool schema subfamily with unique channel evidence; not a high-confidence duplicate close. |
| #43015 | keep_related | planned | related | Related schema-overexposure subfamily, broader than #42820 and not covered by current main. |
| #46455 | keep_related | planned | related | Keep open for the related schema subfamily; unresolved bot findings block merge or fixed-by closeout. |
| #65301 | keep_related | planned | related | Related cleaner poll-guard candidate, but not a replacement for all #43015 component/modal work and not merge ready. |
| #43570 | keep_related | planned | related | Related Discord attachment symptom, but unique thread-reply root cause and open paired PR. |
| #43574 | keep_related | planned | related | Useful narrow PR for a related subfamily, but checks and review proof are not clean. |

## Needs Human

- none
