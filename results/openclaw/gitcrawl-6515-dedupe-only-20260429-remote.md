---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-6515-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25136447566"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25136447566"
head_sha: "421ddc981e12f60cbb3ea60e4527004e3a033e79"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.274Z"
canonical: "https://github.com/openclaw/openclaw/pull/73933"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73933"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-6515-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25136447566](https://github.com/openclaw/clownfish/actions/runs/25136447566)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73933

## Summary

Hydrated state shows the original representative #47398 is already closed and its replacement #73933 is merged, so #73933 is the canonical diagnostic fix. The remaining open PRs are a separate pairing allowlist stat-error subcluster: #63324 is the best open canonical path, #51556 is related but not closable because its readFileSync behavior remains distinct, and #63423 is the broader cleanup umbrella. No GitHub mutations are planned.

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
| #47398 | keep_closed | skipped | fixed_by_candidate | No closure action is valid because #47398 is already closed; #73933 is the landed canonical path for this diagnostics family. |
| #73933 | keep_closed | skipped | canonical | Already-merged replacement PR is the canonical diagnostics fix; post-merge closeout is disabled for this job and no mutation is needed. |
| #51556 | keep_related | planned | related | Related to the #63324 stat-error subcluster, but not closable in this dedupe-only pass. |
| #63324 | keep_canonical | planned | canonical | Best open canonical PR for the separate pairing stat-error subcluster; keep open for maintainer review and update. |
| #63423 | keep_related | planned | related | Broader related follow-up issue, not a duplicate of the diagnostics fix or the pairing-specific PR. |

## Needs Human

- none
