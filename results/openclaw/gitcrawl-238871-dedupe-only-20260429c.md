---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238871-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25107760143"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25107760143"
head_sha: "904a86eec936498f7b09cd1b845053509b2c784e"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T04:57:52.662Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# gitcrawl-238871-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25107760143](https://github.com/openclaw/clownfish/actions/runs/25107760143)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

No close/comment/label mutations are planned. #48945 and #40530 are conflicting open implementations for the same Feishu group thread mention policy, and the hydrated artifact shows unresolved review/CI blockers plus a maintainer product choice between the threadFollowUp and requireMentionInThread APIs. #63148 is related Feishu topic work but covers a distinct DM topic session-isolation gap and should stay open.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #48945 | needs_human | blocked | needs_human | Maintainer judgment is needed to choose the canonical Feishu group thread mention API and repair path before this PR can become the canonical close/merge target. |
| #40530 | needs_human | blocked | needs_human | Do not close or supersede #40530 until a maintainer chooses whether #40530's boolean API or #48945's active-topic policy is canonical. |
| #63148 | keep_related | planned | related | Keep #63148 open as related Feishu topic-session work with distinct DM-topic scope; it is not a duplicate or superseded by the group thread mention PRs. |

## Needs Human

- Choose the canonical Feishu group thread mention API between #48945 threadFollowUp and #40530 requireMentionInThread before any superseded closeout or landing path.
- If #48945 is selected, address the latest Codex P1 skipMentionForThread scope/reference blocker plus relevant CI failures before merge consideration.
