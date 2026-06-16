---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-117-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27621454535"
workflow_run_id: "27621454535"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27621454535"
head_sha: "5c1cfa936860dd59b65eecce00e5079b5bfc9d4a"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T13:39:34.992Z"
canonical: "https://github.com/openclaw/openclaw/issues/66360"
canonical_issue: "https://github.com/openclaw/openclaw/issues/66360"
canonical_pr: null
actions_total: 1
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-117-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27621454535](https://github.com/openclaw/clownfish/actions/runs/27621454535)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/66360

## Summary

#66360 is the only open hydrated actionable ref and remains the canonical issue for the raw active transcript .jsonl retention policy gap. Current main still has adjacent compaction and session-directory budget controls, but no clear raw byte/line cap under session.maintenance for active referenced transcripts. No close, merge, label, comment, or fix PR action is planned because the hydrated ClawSweeper review and labels identify an unresolved maintainer product decision, and the implementation would require a broader config/schema/docs/tests policy change rather than a narrow autonomous fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 1 |
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
| #66360 | keep_canonical | planned | canonical | Keep #66360 open as canonical. It is a real product-policy gap, not a duplicate closeout candidate, and the safe next step is maintainer direction on whether to add an opt-in raw active transcript retention cap or document compaction/disk-budget behavior as the supported policy. |

## Needs Human

- #66360: maintainer product direction is still required before implementation: decide whether OpenClaw should add a raw active transcript .jsonl byte/line retention cap under session.maintenance, rely on maxActiveTranscriptBytes compaction and disk-budget cleanup, or document compaction-only behavior as intentional.
