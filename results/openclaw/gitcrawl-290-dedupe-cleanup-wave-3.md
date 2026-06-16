---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-290-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610220923"
workflow_run_id: "27610220923"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610220923"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.430Z"
canonical: "https://github.com/openclaw/openclaw/issues/77344"
canonical_issue: "https://github.com/openclaw/openclaw/issues/77344"
canonical_pr: "https://github.com/openclaw/openclaw/pull/75754"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-290-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610220923](https://github.com/openclaw/clownfish/actions/runs/27610220923)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/77344

## Summary

Classified the two actionable open candidate issues. #77344 remains the canonical issue for the Docker-published dashboard port bug, with #75754 as hydrated existing-overlap repair context only. #77574 is related ClawDock dashboard work but not a duplicate: it concerns dependency startup/image switching from the dashboard lookup path, not published host-port URL rewriting. No close, merge, label, or fix-PR action is planned because the only non-canonical candidate has distinct remaining work and fix/merge actions are blocked by the job.

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
| #77344 | keep_canonical | planned | canonical | #77344 is the best live canonical thread for the published gateway port bug; keep it open so the hydrated repair path or a later replacement can own validation. |
| #77574 | keep_related | planned | related | #77574 should stay open as related follow-up work rather than be closed as a duplicate of #77344. |

## Needs Human

- none
