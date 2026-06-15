---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13459-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25109685055"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25109685055"
head_sha: "7ac7590296085c93e29434b3af3e919aa257e029"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.716Z"
canonical: "https://github.com/openclaw/openclaw/issues/40255"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40255"
canonical_pr: null
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-13459-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25109685055](https://github.com/openclaw/clownfish/actions/runs/25109685055)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/40255

## Summary

No GitHub mutations are planned. The closed representative #71077 is obsolete for this pass; #40255 is the live open canonical issue for the custom heartbeat prompt regression. #40756 is a narrow candidate fix for #40255, but it needs maintainer and bot-review resolution before it can own closure.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #26213 | keep_closed | skipped | related | Closed historical PR in the heartbeat/exec area, but not the same root cause as #40255. |
| #31388 | keep_closed | skipped | related | Closed historical PR with unresolved review findings; related area but not the current canonical issue. |
| #40255 | keep_canonical | planned | canonical | Keep #40255 open as the canonical issue until #40756 or an equivalent fix lands and post-merge closeout is allowed. |
| #40756 | needs_human | blocked | needs_human | Maintainer review is required before treating #40756 as the canonical fix path or closing #40255. |
| #46798 | keep_closed | skipped | related | Closed context issue; useful historical heartbeat evidence only. |
| #71077 | keep_closed | skipped | related | Closed representative is obsolete for this pass; #40255 is the only live open issue path. |

## Needs Human

- #40756 needs maintainer review before it can be treated as the canonical fix for #40255: ClawSweeper asks whether a separate non-overridable or tool-layer HEARTBEAT.md path guard is required, and Aisle raised an unresolved low de-duplication review finding.
