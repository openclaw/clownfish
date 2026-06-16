---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260616T013940-011"
mode: "autonomous"
run_id: "27590650229"
workflow_run_id: "27590650229"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27590650229"
head_sha: "159a259d79f651da526767c13ba1f27b40151479"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T02:50:33.643Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-needs_proof-20260616T013940-011

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27590650229](https://github.com/openclaw/clownfish/actions/runs/27590650229)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Classified the PR inventory shard from hydrated preflight state. No shared canonical exists for this shard; close, merge, fix, and low-signal close paths are disabled or blocked by proof/review/security gates. Security-sensitive refs are routed individually, closed historical PRs are kept closed, and open non-security PRs remain open for maintainer/proof follow-up.

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
| #41275 | keep_related | planned | related | Keep open as a related candidate needing proof/review resolution; do not close or merge from this inventory shard. |
| #92704 | keep_closed | skipped | superseded | Already closed; no mutation should be planned. |
| #92714 | keep_related | planned | related | Keep open for maintainer/proof review; this shard cannot merge or repair it. |
| #43938 | keep_related | planned | related | Keep open as a related repair/proof candidate; no close or fix artifact is permitted by this job. |
| #90512 | keep_closed | skipped | fixed_by_candidate | Already closed as fixed by #91181; no mutation should be planned. |
| #92723 | route_security | planned | security_sensitive | Route exact security-sensitive ref to central OpenClaw security handling; do not mutate it. |
| #92755 | keep_related | planned | related | Keep open for maintainer/proof comparison with #92822; no safe close or merge action is available. |
| #92774 | needs_human | planned | needs_human | Actionable bot review and possible overlap with #93194 require maintainer/technical judgment; close or merge is unsafe from this shard. |
| #92756 | keep_related | planned | related | Keep open as a plausible focused fix needing proof; no close or fix path is allowed. |
| #92762 | route_security | planned | security_sensitive | Route exact security-sensitive PR to central security triage; do not close, comment, merge, or repair it in Clownfish. |
| #92374 | route_security | planned | security_sensitive | Route exact linked security issue to central OpenClaw security handling. |

## Needs Human

- #92774 has an actionable Codex bot P2 review finding plus related open PR #93194; maintainer/technical judgment is needed before any close, replacement, or canonical choice.
