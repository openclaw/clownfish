---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-2791-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "27585129035"
workflow_run_id: "27585129035"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27585129035"
head_sha: "029567b88e02d3fb42050a9ee72b98ee92930545"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T00:20:07.496Z"
canonical: "#43661"
canonical_issue: "#43661"
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 3
---

# gitcrawl-2791-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27585129035](https://github.com/openclaw/clownfish/actions/runs/27585129035)

Workflow conclusion: success

Worker result: planned

Canonical: #43661

## Summary

Autonomous plan only. The original representative #42158 is closed on live preflight state, so #43661 is the best surviving canonical for the active stuck-session timeout/retry/duplicate-send lane. No close, merge, or fix actions are planned: the open items are related but not true duplicates, and several require maintainer/product choices or linked PR review before closure.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 3 |

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
| #42158 | keep_closed | skipped |  | Original representative is obsolete because it is already closed. |
| #43661 | keep_canonical | planned | canonical | Best surviving canonical for the active timeout retry and duplicate-send lane. |
| #45686 | keep_closed | skipped | superseded | Closed before this run; no mutation is valid. |
| #48238 | keep_related | planned | related | Related compaction resilience work, but not the same root cause as #43661 and not closable as a duplicate. |
| #48278 | keep_related | planned | related | Related open PR for #48238, but not mergeable or closable in this dedupe-only job. |
| #54383 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed; no action needed. |
| #58838 | keep_related | planned | related | Related active bug with an open linked PR; keep open until the candidate PR is reviewed and lands or is replaced. |
| #64960 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. |
| #64962 | keep_closed | skipped |  | Already closed; any reopening or policy decision is outside this close-only cluster pass. |
| #67750 | keep_related | planned | related | Related open compaction timeout recovery issue, but not a duplicate and not closable from hydrated state. |
| #86900 | keep_related | planned | related | Valid related candidate PR for #58838, but this job blocks merge and fix actions. |

## Needs Human

- #43661 needs maintainer/product direction for durable logical-send identity and retry semantics before a safe fix can be queued.
- #48238 needs maintainer/product direction on the loop-aware guard/reset policy and a sanitized repro or proof path.
- #64962 was closed by stale automation despite prior evidence of a valid policy-dependent recovery gap; reopening or choosing a lossy escalation ladder is a maintainer decision outside this close-only pass.
