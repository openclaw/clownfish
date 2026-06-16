---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-339-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27637121910"
workflow_run_id: "27637121910"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27637121910"
head_sha: "66e6700c05453997f70accf18318303df61db275"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T17:56:48.527Z"
canonical: "https://github.com/openclaw/openclaw/issues/92816"
canonical_issue: "https://github.com/openclaw/openclaw/issues/92816"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-339-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27637121910](https://github.com/openclaw/clownfish/actions/runs/27637121910)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/92816

## Summary

#92816 is the only hydrated open candidate and remains the canonical issue. Current main at 7bf821a2eed08b014809a1f997028764f1ca98d9 already contains the narrow QQBot cron/TTS delivery protections, so the planned action is to close #92816 as fixed by current main with evidence and a reopen path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92816 | close_fixed_by_candidate | blocked | fixed_by_candidate | fixed_by_candidate close requires a merged fix PR unless allow_unmerged_fix_close: true |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #92816 | close_fixed_by_candidate | planned | fixed_by_candidate | The only hydrated candidate is the canonical issue, and the current main checkout already contains source-level fixes for the reported failure mode: cron TTS media is delivered through durable cron delivery, delivery accounting requires successful send results, and QQBot no-id send results are rejected. No merge or new fix PR is needed. |

## Needs Human

- none
