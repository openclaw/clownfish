---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2149-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131924572"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131924572"
head_sha: "d8a032e46d7a5449946bb8a8f542719694995636"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.939Z"
canonical: "https://github.com/openclaw/openclaw/pull/57565"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/57565"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2149-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131924572](https://github.com/openclaw/clownfish/actions/runs/25131924572)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/57565

## Summary

Hydrated state shows #55186 is obsolete and closed. #57565 is the best open canonical for the remaining Mattermost replyToMode/thread-delivery routing family, but it is not merge-ready and merge/fix actions are blocked by the job. No close/comment/label mutations are high-confidence for the open refs; the cluster splits into related and independent subfamilies.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #57565 | keep_canonical | planned | canonical | Best surviving canonical for the original thread-routing family, but not merge-ready in this dedupe-only job. |
| #57970 | keep_related | planned | related | Related prerequisite PR; keep open for its own review path. |
| #52120 | keep_related | planned | related | Related but distinct thread-context subcluster; not safe to close or merge here. |
| #45082 | keep_related | planned | related | Related follow-up issue, not a duplicate of the canonical thread-delivery PR. |
| #52236 | keep_related | planned | related | Partial related PR for the #45082 cron/heartbeat subcase; keep open. |
| #58439 | keep_independent | planned | independent | Independent useful PR; not dedupe-closeable in this cluster. |
| #57609 | keep_independent | planned | independent | Independent Mattermost bugfix PR; keep open. |
| #57607 | keep_independent | planned | independent | Independent issue with its own PR path; not closeable in this cluster. |
| #59791 | keep_closed | skipped | fixed_by_candidate | Historical context only. |
| #55186 | keep_closed | skipped | superseded | Closed historical representative; no mutation valid. |
| #55151 | keep_closed | skipped | superseded | Historical context only. |
| #60115 | keep_closed | skipped | superseded | Historical context only. |

## Needs Human

- none
