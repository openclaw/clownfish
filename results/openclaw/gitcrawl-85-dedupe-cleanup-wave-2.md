---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-85-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384387"
workflow_run_id: "27609384387"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384387"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:03:25.539Z"
canonical: "https://github.com/openclaw/openclaw/issues/79182"
canonical_issue: "https://github.com/openclaw/openclaw/issues/79182"
canonical_pr: "https://github.com/openclaw/openclaw/pull/79200"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-85-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384387](https://github.com/openclaw/clownfish/actions/runs/27609384387)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/79182

## Summary

Classified the hydrated refs without GitHub mutations. #79182 is the best remaining live canonical issue for the --message-file request; #79200 is the hydrated active implementation path but is an existing-overlap context ref owned by another job. #42820 is related message.send work with a different poll-schema guard root cause and should stay open. The security-sensitive linked PR #57335 is routed only to central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
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
| #42820 | keep_related | planned | related | Same message.send/attachment area, but meaningfully different root cause and user-visible failure from the --message-file canonical family. |
| #79182 | keep_canonical | planned | canonical | Best surviving actionable canonical issue among the remaining open refs for the --message-file feature request. |
| #79200 | keep_related | skipped | related | Context-only existing-overlap PR; do not mutate or claim ownership in this cluster. |
| #53641 | keep_closed | skipped | fixed_by_candidate | Already-closed historical context; no mutation planned. |
| #57335 | route_security | planned | security_sensitive | Quarantine only the exact security-sensitive linked ref; continue non-security classification for #42820 and #79182. |
| #63578 | keep_closed | skipped | superseded | Already-closed historical context; no mutation planned. |

## Needs Human

- none
