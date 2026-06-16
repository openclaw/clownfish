---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-13982-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585128354"
workflow_run_id: "27585128354"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585128354"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.415Z"
canonical: "#54155"
canonical_issue: "#54155"
canonical_pr: null
actions_total: 19
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-13982-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585128354](https://github.com/openclaw/clownfish/actions/runs/27585128354)

Workflow conclusion: success

Worker result: planned

Canonical: #54155

## Summary

Planned non-mutating classification only. The representative #45440 is already closed, so #54155 is the best current broad canonical for the live gateway RSS/session-accumulation lane. No close actions are high-confidence for the remaining open candidates because the open items split into distinct shutdown, session-store, and native-memory lanes, with several carrying explicit maintainer/product-decision signals.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 19 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #45440 | keep_closed | skipped | superseded | Obsolete closed representative; use the current open broad tracker #54155 as canonical for this pass. |
| #54155 | keep_canonical | planned | canonical | Best surviving broad canonical for this cluster after closed #45440. |
| #38721 | keep_independent | planned | independent | Different shutdown lifecycle root cause; not a duplicate of the memory/session canonical. |
| #45718 | keep_related | planned | related | Related session-bloat lane, but not safe to close into #54155 or #55334 because remaining behavior and linked implementation path require maintainer/product decision. |
| #55334 | keep_related | planned | related | Keep as a focused session-store subtracker under the broader #54155 memory/RSS family. |
| #67393 | needs_human | planned | needs_human | Specific maintainer judgment is required for native-memory/VIRT interpretation and profiling direction. |
| #85788 | keep_related | planned | related | Useful related narrow PR, but merge is blocked by job policy and missing proof; it does not close the canonical broad memory tracker. |
| #51977 | keep_closed | skipped | duplicate | Historical duplicate already closed. |
| #52092 | keep_closed | skipped | fixed_by_candidate | Historical fixed issue already closed. |
| #57349 | keep_closed | skipped | related | Related historical context only. |
| #58534 | keep_closed | skipped | duplicate | Historical closed duplicate; unhydrated duplicate target kept as evidence only. |
| #59839 | keep_closed | skipped | fixed_by_candidate | Historical fixed issue already closed. |
| #60542 | keep_closed | skipped | related | Closed related context only. |
| #62625 | keep_closed | skipped | related | Closed related context only. |
| #64767 | keep_closed | skipped | fixed_by_candidate | Historical fixed issue already closed; mentioned PR is not a hydrated primary item for candidate_fix. |
| #65668 | keep_closed | skipped | independent | Closed independent restart/supervisor context. |
| #69451 | keep_closed | skipped | related | Closed related session-memory context only. |
| #69599 | keep_closed | skipped | related | Closed related Control UI session-state context only. |
| #71227 | keep_closed | skipped | duplicate | Historical duplicate already closed. |

## Needs Human

- #67393 needs maintainer-directed Linux startup profiling and a decision on whether high VIRT at gateway startup is an OpenClaw bug or expected native memory reservation.
