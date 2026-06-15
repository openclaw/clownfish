---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14436-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25130266961"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25130266961"
head_sha: "d8402244adeff9d7d53d01dc45e960e2851caca3"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.849Z"
canonical: "https://github.com/openclaw/openclaw/pull/54475"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/54475"
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14436-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25130266961](https://github.com/openclaw/clownfish/actions/runs/25130266961)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/54475

## Summary

Planned dedupe classification only. #54475 remains the canonical focused gateway PR for transient pre-hello close handling. #54774 is an overlapping PR by the same author and can be closed as superseded by #54475. #65641 is a related but independent gateway diagnostics/auth-semantics PR and should stay open. The linked #49109 is broader related cron/CLI work and should stay open outside this closeout. No merge or fix PR was planned because those actions are blocked by the job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #54774 | close_superseded | blocked | superseded | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #54475 | keep_canonical | planned | canonical | Best canonical path for the duplicate gateway pre-hello close family; merge remains out of scope because the job blocks merge actions and checks include failures/unknown mergeability. |
| #54774 | close_superseded | planned | superseded | High-confidence superseded PR: same author, same gateway root cause, overlapping files and tests, with #54475 selected as the canonical repaired branch. |
| #65641 | keep_related | planned | related | Related gateway diagnostics/auth-semantics work with unique remaining scope; keep open for revision or separate maintainer handling. |
| #49109 | keep_related | planned | related | Open linked related PR with unique cron helper work and broad scope; leave it open outside this dedupe closeout. |

## Needs Human

- none
