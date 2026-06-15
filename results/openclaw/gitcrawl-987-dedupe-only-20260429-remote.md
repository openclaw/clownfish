---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-987-dedupe-only-20260429-remote"
mode: "autonomous"
run_id: "25137288585"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25137288585"
head_sha: "ca8a3303df8e547d7f06bee2c26da230fe0cdb72"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.309Z"
canonical: "https://github.com/openclaw/openclaw/pull/70422"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/70422"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-987-dedupe-only-20260429-remote

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25137288585](https://github.com/openclaw/clownfish/actions/runs/25137288585)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/70422

## Summary

Hydrated state makes #70422 the only open in-scope MiniMax VLM canonical path. The stale representative #69691 and the listed candidate PRs #65453/#67234 are already closed, so no close action is emitted for them. Linked #46380 is scoped to security handling because it is an SSRF/key-exfiltration PR.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #70422 | keep_canonical | planned | canonical | Current open canonical PR for the remaining MiniMax VLM allowlist/routing work; keep open. |
| #46380 | route_security | planned | security_sensitive | Security-shaped linked PR should be handled by central OpenClaw security triage, not this dedupe-only cluster. |
| #65453 | keep_closed | skipped | related | Already closed related catalog-path PR; no action. |
| #67234 | keep_closed | skipped | superseded | Already closed overlapping predecessor; no action. |
| #68485 | keep_closed | skipped | related | Already closed related catalog-path PR; no action. |
| #69691 | keep_closed | skipped | superseded | Stale closed representative superseded by open #70422. |
| #53575 | keep_closed | skipped | related | Already closed related MiniMax image-routing report; no action. |
| #54400 | keep_closed | skipped | related | Already closed related MiniMax provider image-tool report; no action. |
| #64244 | keep_closed | skipped | related | Already closed related MiniMax regression report; no action. |
| #65424 | keep_closed | skipped | related | Already closed related catalog/attachment report; no action. |
| #69648 | keep_closed | skipped | related | Already closed related issue; no action. |
| #39 | keep_closed | skipped | independent | Unrelated closed linked ref; no action. |

## Needs Human

- none
