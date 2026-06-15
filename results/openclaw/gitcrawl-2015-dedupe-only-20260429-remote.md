---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2015-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25131343500"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25131343500"
head_sha: "b5784ec6f81e07c69dcfb868449f4f451549e38e"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.919Z"
canonical: "https://github.com/openclaw/openclaw/issues/38622"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38622"
canonical_pr: null
actions_total: 15
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2015-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25131343500](https://github.com/openclaw/clownfish/actions/runs/25131343500)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/38622

## Summary

Hydrated artifact main SHA 60c2a9055037a31c43fc03392b2806031e574413 shows the closed representative #53547 is obsolete for this pass. The current non-security canonical issue for duplicate routing is #38622. #40210 is a high-confidence duplicate of #38622 and can be closed with a credit-preserving comment. #29387 is a related but distinct agentDir warning/loading issue and should stay open. Security-shaped PR review evidence is scoped to #73401 and #73988 for central security routing; closed context refs remain untouched.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 15 |
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
| #40210 | close_duplicate | blocked | duplicate | target changed since worker review |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #38622 | keep_canonical | planned | canonical | Use #38622 as the open canonical issue for workspace bootstrap symlink reports. |
| #40210 | close_duplicate | planned | duplicate | High-confidence duplicate closeout is allowed because the canonical issue remains open and live. |
| #29387 | keep_related | planned | related | Related bootstrap-loading family, not a duplicate of the workspace-symlink canonical issue. |
| #72871 | keep_related | planned | related | Useful related PR, but not merge-ready and merge/fix actions are blocked for this job. |
| #64472 | keep_related | planned | related | Keep as related follow-up rather than expanding closeout beyond the job's open candidates. |
| #73401 | route_security | planned | security_sensitive | Security-shaped review evidence touches credential/sensitive-path boundary behavior. |
| #73988 | route_security | planned | security_sensitive | Security-sensitive PR evidence must be quarantined to central OpenClaw security handling. |
| #29450 | keep_closed | skipped | superseded | Closed historical candidate only; no mutation is valid. |
| #29545 | keep_closed | skipped | superseded | Closed historical candidate only; no mutation is valid. |
| #38653 | keep_closed | skipped | superseded | Closed historical candidate only; no mutation is valid. |
| #40230 | keep_closed | skipped | superseded | Closed historical candidate only; no mutation is valid. |
| #43528 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no mutation is valid. |
| #53547 | keep_closed | skipped | fixed_by_candidate | Closed representative is obsolete for this open-candidate pass. |
| #64173 | keep_closed | skipped | fixed_by_candidate | Closed context ref; no mutation is valid. |
| #69994 | keep_closed | skipped | related | Closed context ref; no mutation is valid. |

## Needs Human

- none
