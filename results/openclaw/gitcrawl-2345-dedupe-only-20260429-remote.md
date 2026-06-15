---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2345-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25132968318"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25132968318"
head_sha: "e5e8212693f31b1f59eff0d60675a97be8c33e90"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.966Z"
canonical: "https://github.com/openclaw/openclaw/pull/38290"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/38290"
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-2345-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25132968318](https://github.com/openclaw/clownfish/actions/runs/25132968318)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/38290

## Summary

Representative #52477 is already closed; the current canonical path for the exact opaque-origin allowlist bug is open PR #38290, while #39739 and #46520 should stay open as related but not cleanly closable follow-ups.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #38290 | keep_canonical | planned | canonical | Best surviving canonical path for the exact opaque-origin allowlist bug; no merge or fix mutation is permitted in this dedupe-only job. |
| #39739 | keep_related | planned | related | Related gateway allowlist area, but not a true duplicate of #38290 because it asks for wildcard semantics. |
| #46520 | keep_related | planned | related | Same root-cause family as #38290, but unique reproduction and active work signal make it a related open follow-up rather than a high-confidence close target. |
| #39867 | keep_closed | skipped | superseded | Already closed historical PR; no mutation is valid. |
| #43596 | keep_closed | skipped | related | Already closed context ref; historical evidence only. |
| #52477 | keep_closed | skipped | superseded | Already closed canonical-hint issue; #38290 replaces it as the open canonical path. |
| #52531 | keep_closed | skipped | superseded | Already closed historical PR superseded by #38290. |
| #53599 | keep_independent | planned | independent | Different root cause and product scope; leave open outside this cluster. |
| #55840 | keep_independent | planned | independent | Adjacent browser-relay feature request, independent from the gateway origin allowlist bug. |

## Needs Human

- none
