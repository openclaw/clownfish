---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-4373-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25135991021"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25135991021"
head_sha: "ed3c070f16b94246f3b571063f0ecb9ffa228dd1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.243Z"
canonical: "https://github.com/openclaw/openclaw/issues/68113"
canonical_issue: "https://github.com/openclaw/openclaw/issues/68113"
canonical_pr: "https://github.com/openclaw/openclaw/pull/68089"
actions_total: 13
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-4373-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25135991021](https://github.com/openclaw/clownfish/actions/runs/25135991021)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/68113

## Summary

Hydrated state shows the original representative #39261 is closed and should stay historical. The active Mattermost 503 regression canonical is #68113 with open implementation candidate #68089. The WebUI /model status/list reports form a related but separate subcluster around #46894. No high-confidence close action is safe for open useful PRs in this run; #65624 is quarantined to security triage only.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 13 |
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
| #68113 | keep_canonical | planned | canonical |  |
| #68089 | keep_canonical | planned | canonical | Canonical implementation candidate, but not merge-ready in this dedupe-only job. |
| #46894 | keep_related | planned | related | Related subcluster, not a duplicate of the Mattermost canonical. |
| #46895 | keep_related | planned | related | Useful but currently blocked implementation candidate in a related subcluster. |
| #47069 | keep_related | planned | related | Best visible candidate in the related WebUI subcluster, but not a merge or close target here. |
| #65624 | route_security | planned | security_sensitive | Security-sensitive linked ref; no dedupe close, merge, comment, or fix action should be applied by Clownfish. |
| #32467 | keep_closed | skipped | fixed_by_candidate | Already closed/merged; closed context refs are evidence only. |
| #39261 | keep_closed | skipped | fixed_by_candidate | Already closed; do not reopen or close again. |
| #50625 | keep_closed | skipped | independent | Already closed and independent historical context. |
| #51126 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action allowed. |
| #53354 | keep_closed | skipped | fixed_by_candidate | Already closed; closed context only. |
| #69038 | keep_closed | skipped | superseded | Already closed superseded PR. |
| #70145 | keep_closed | skipped | duplicate | Already closed duplicate of #68113. |

## Needs Human

- none
