---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238856-dedupe-only-20260429c"
mode: "autonomous"
run_id: "27317560720"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27317560720"
head_sha: "f36a48c9bff6114bf9daea886e92434f3dbb368f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-11T01:30:32.015Z"
canonical: "https://github.com/openclaw/openclaw/issues/63956"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63956"
canonical_pr: null
actions_total: 8
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

Run: [https://github.com/openclaw/clownfish/actions/runs/27317560720](https://github.com/openclaw/clownfish/actions/runs/27317560720)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63956

## Summary

No GitHub mutations planned. The hydrated preflight shows the original representative #72578 and prior cluster issues #71992/#72963 are already closed, so they are historical evidence only. The only live seed issue is #63956, and it tracks a distinct in-flight streaming layout problem rather than the already-closed final-history duplicate-message family. Keep #63956 as the current open canonical for this cluster; keep the linked umbrella #69208 related; do not open a fix artifact because fix and raise_pr are blocked for this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #63956 | keep_canonical | planned | canonical | #63956 is the only open seed ref and has a distinct unresolved streaming-layout scope; no close, merge, or fix action satisfies the job gates. |
| #69208 | keep_related | planned | related | Related umbrella, but not a true duplicate target for the current live seed issue. |
| #63986 | keep_closed | skipped | related | Closed contributor PR is useful historical evidence for #63956 but cannot receive a close action or serve as a live candidate fix in this no-fix/no-merge job. |
| #34164 | keep_closed | skipped | related | Historical related PR for a different duplicate-render slice; already closed and not a viable candidate. |
| #72004 | keep_closed | skipped | related | Historical related PR; already closed, and merge/fix actions are blocked by this job. |
| #71992 | keep_closed | skipped | related | Closed related issue; no live closure target remains. |
| #72578 | keep_closed | skipped | related | Original representative is obsolete as a live canonical because it is already closed. |
| #72963 | keep_closed | skipped | duplicate | Already closed duplicate of #72578; historical evidence only. |

## Needs Human

- none
