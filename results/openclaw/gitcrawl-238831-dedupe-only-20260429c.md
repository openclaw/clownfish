---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238831-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107713986"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107713986"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.651Z"
canonical: "https://github.com/openclaw/openclaw/issues/25592"
canonical_issue: "https://github.com/openclaw/openclaw/issues/25592"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238831-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107713986](https://github.com/openclaw/clownfish/actions/runs/25107713986)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/25592

## Summary

Hydrated preflight shows the original representative #51065 is now closed. #25592 is the best live canonical for the broad channel text/tool-call leakage family. No close/comment/label mutations are planned because #71575 has distinct Telegram tool-progress behavior and the other candidate refs are already closed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #25592 | keep_canonical | planned | canonical | #25592 is the current live canonical issue for the broad messaging-channel intermediate text leakage family. |
| #51065 | keep_closed | skipped | duplicate | Already closed; keep as historical duplicate evidence under the live canonical #25592. |
| #66161 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented; no mutation is valid, and the referenced main commit is not a hydrated PR ref for candidate_fix. |
| #71575 | keep_related | planned | related | Related to #25592's channel-leak family, but not a safe duplicate closeout because it tracks a distinct Telegram-owned tool-progress/default-preview behavior with unique current-main evidence. |

## Needs Human

- none
