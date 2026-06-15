---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-977-plan-wave-20260615-b"
mode: "plan"
run_id: "27519132423"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27519132423"
head_sha: "191e9d5b392c737bb75a3481f897eef031892f3c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:10:12.701Z"
canonical: "#83636"
canonical_issue: "#83636"
canonical_pr: "#91192"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-977-plan-wave-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27519132423](https://github.com/openclaw/clownfish/actions/runs/27519132423)

Workflow conclusion: success

Worker result: planned

Canonical: #83636

## Summary

Plan-only classification completed from the hydrated preflight artifact. #83636 remains the open canonical bug report. #91192 is the open related implementation candidate for the same TTS auto-delivery bug, but merge/fix actions are blocked by job policy and no closure is planned.

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
| #83636 | keep_canonical | planned | canonical | Keep #83636 as the canonical issue because it is open, hydrated, contains the source reproduction, and the linked PR is an implementation candidate rather than a replacement canonical discussion thread. |
| #91192 | keep_related | planned | related | Keep #91192 related to the canonical issue as the active implementation candidate. Do not emit merge_candidate because merge is blocked by the job and required merge preflight proof, including a passed Codex /review, is not present in the artifact. |

## Needs Human

- none
