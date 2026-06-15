---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238893-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108033294"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108033294"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.681Z"
canonical: "https://github.com/openclaw/openclaw/issues/46776"
canonical_issue: "https://github.com/openclaw/openclaw/issues/46776"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238893-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108033294](https://github.com/openclaw/clownfish/actions/runs/25108033294)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/46776

## Summary

Hydrated state has no security-sensitive refs. #46776 remains the best live canonical issue for this dedupe cluster; #43563 is related but not a duplicate; #58107, #67687, and merged PR #67508 are already closed and receive no close mutations.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #46776 | keep_canonical | planned | canonical | The representative is still open and is the clearest canonical thread for this cluster; keep it open for maintainer product decisions and follow-up rather than closing or replacing it. |
| #43563 | keep_related | planned | related | Related Feishu multi-bot work, but not the same root cause as #46776's @all/multi-mention delivery and DM/group session-continuity report. |
| #58107 | keep_closed | skipped | fixed_by_candidate | Already closed as implemented by hydrated merged PR #67508; preserve as historical fixed-by-candidate evidence only. |
| #67687 | keep_closed | skipped | related | Related Feishu group delivery area, but it has a distinct requireMention/group-allowlist admission root cause and is already closed. |
| #67508 | keep_closed | skipped | related | Merged historical evidence for #58107 only; no merge, close, or post-merge action is allowed or needed here. |

## Needs Human

- none
