---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238897-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25108041917"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25108041917"
head_sha: "3ec6a205eb986741424344762fbc94babbdc2937"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:57:52.684Z"
canonical: "https://github.com/openclaw/openclaw/pull/73732"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/73732"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238897-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25108041917](https://github.com/openclaw/clownfish/actions/runs/25108041917)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73732

## Summary

No GitHub mutations are planned. The job seed refs are already closed in the hydrated live state, and merged PR #73732 is the canonical landed fix for the #63855/#66920 stale/group inbound-loss path. Open linked refs #7433 and #63939 remain related but distinct follow-up/config work.

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
| #48390 | keep_closed | skipped | fixed_by_candidate | Historical closed issue; no mutation is valid. |
| #63410 | keep_closed | skipped | superseded | Historical closed context ref; keep as evidence only. |
| #63855 | keep_closed | skipped | fixed_by_candidate | Representative issue is obsolete because the hydrated maintainer closeout ties it to merged PR #73732. |
| #66920 | keep_closed | skipped | fixed_by_candidate | Closed by maintainer as fixed by the merged canonical PR. |
| #7433 | keep_related | planned | related | Related WhatsApp/Baileys reliability work, not a duplicate and not fully covered by #73732. |
| #63939 | keep_related | planned | related | Related watchdog timeout configuration PR, distinct from the landed #73732 group inbound recovery fix. |
| #72621 | keep_closed | skipped | related | Merged historical related fix; no action needed. |
| #73732 | keep_closed | skipped | canonical | Canonical path for this cluster has already landed; keep as evidence only. |

## Needs Human

- none
