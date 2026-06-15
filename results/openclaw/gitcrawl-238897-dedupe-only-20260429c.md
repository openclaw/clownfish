---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238897-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25103033768"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103033768"
head_sha: "c3cc5ac35d228f419caa5b1772e20efdca99c0e6"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:45:26.143Z"
canonical: "https://github.com/openclaw/openclaw/issues/63855"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63855"
canonical_pr: null
actions_total: 7
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

Run: [https://github.com/openclaw/clownfish/actions/runs/25103033768](https://github.com/openclaw/clownfish/actions/runs/25103033768)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63855

## Summary

Hydrated state supports keeping #63855 as the open canonical issue for stale WhatsApp inbound message loss. No high-confidence close action is available: #66920 is related but has a distinct group-only failure mode, #7433 is broader group/Baileys reliability work, #63939 is related watchdog configuration work with maintainer context and failing checks, and the remaining refs are already closed historical evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
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
| #63855 | keep_canonical | planned | canonical | Open canonical issue remains current and unresolved; no close, merge, or fix action is permitted or needed for pure dedupe routing. |
| #66920 | keep_related | planned | related | Same WhatsApp reliability family as #63855, but not a true duplicate because it preserves a distinct group-only failure mode and remaining work. |
| #48390 | keep_closed | skipped | fixed_by_candidate | Already-closed primary ref; closed refs must not receive close actions. |
| #7433 | keep_related | planned | related | Related WhatsApp group reliability work, but broader than the #63855 stale inbound-loss canonical issue and not a duplicate. |
| #63939 | keep_related | planned | related | Related watchdog configuration PR with active maintainer context and failing checks; it is not a close or merge candidate in this cluster. |
| #63410 | keep_closed | skipped | related | Already-closed linked context ref; closed refs are historical evidence only. |
| #72621 | keep_closed | skipped | related | Merged historical PR is useful evidence but not a target for mutation. |

## Needs Human

- none
