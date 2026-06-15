---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14100-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25129754594"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25129754594"
head_sha: "57b657bc4ce868d681ea2ae867230254e2cbce60"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.831Z"
canonical: "https://github.com/openclaw/openclaw/pull/62308"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/62308"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14100-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25129754594](https://github.com/openclaw/clownfish/actions/runs/25129754594)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/62308

## Summary

Canonical remains open PR #62308 for the narrow macOS LaunchAgent ProcessType=Interactive fix. #58061 is a high-confidence duplicate issue and can be closed with credit preserved; #58070 is an overlapping useful contributor PR and should stay open as related rather than be closed. #62294/#62310 and #59710 are separate heartbeat reliability follow-ups and should stay open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #58061 | close_duplicate | blocked | duplicate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #62308 | keep_canonical | planned | canonical | Best surviving canonical path for the ProcessType=Interactive work, but not merge-ready or merge-eligible in this dedupe-only job. |
| #58061 | close_duplicate | planned | duplicate | Same user-visible macOS launchd/App Nap ProcessType root cause as canonical PR #62308, with no separate issue-thread work needed after #58070 is kept open for contributor credit and WorkingDirectory context. |
| #58070 | keep_related | planned | related | Overlapping but not safe to close as superseded in this pass; keep open for maintainer reconciliation and contributor credit. |
| #62294 | keep_related | planned | related | Related macOS heartbeat/App Nap family, but broader scheduler behavior remains a separate follow-up and should not be closed into this ProcessType-only dedupe cluster. |
| #62310 | keep_related | planned | related | Separate heartbeat scheduler implementation candidate with unresolved review/check blockers; keep it open outside this launchd plist dedupe cleanup. |
| #59710 | keep_independent | planned | independent | Different platform and likely different root cause from the macOS launchd ProcessType cluster. |

## Needs Human

- none
