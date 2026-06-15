---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-14028-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25111555460"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25111555460"
head_sha: "60cc8447905ef4be2485e6e6b5b74c693d00fe45"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.798Z"
canonical: "https://github.com/openclaw/openclaw/issues/37661"
canonical_issue: "https://github.com/openclaw/openclaw/issues/37661"
canonical_pr: null
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-14028-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25111555460](https://github.com/openclaw/clownfish/actions/runs/25111555460)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/37661

## Summary

Hydrated preflight shows the closed representative #55019 is obsolete. #37661 is the best surviving open canonical for the repeated assistant-text/duplicate-delivery subfamily, while the other open refs are related but distinct active bugs or implementation candidates. No high-confidence close/comment/label mutations are planned.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #37661 | keep_canonical | planned | canonical | Best current open canonical for the active assistant text repetition and duplicate-delivery subfamily; no duplicate closeout is safe. |
| #44910 | keep_related | planned | related | Related to provider error leakage, but not a true duplicate of the closed server_error fix path and still has unique active work. |
| #63188 | keep_related | planned | related | Related to truncation and malformed final output, but it is a distinct subagent runtime feature/bug path and should not be closed into #37661 or #63210. |
| #63210 | keep_related | planned | related | Related to the same truncation family as #63188, but a different runtime surface with unique remaining work. |
| #66146 | keep_related | planned | related | Useful related implementation candidate, but not merge-ready or fixed-by evidence; this dedupe-only job cannot repair or merge it. |
| #64362 | keep_related | planned | related | Related delivery-loss symptom, but distinct session-lock root cause and not fixed by any landed candidate in this cluster. |
| #71903 | keep_related | planned | related | Relevant implementation candidate for the lock-cleanup subcluster, but it remains open for maintainer review and repair outside this dedupe-only job. |
| #68620 | keep_related | planned | related | Related session reliability and Telegram blocking issue, but it has a different root cause and unique remaining work. |

## Needs Human

- none
