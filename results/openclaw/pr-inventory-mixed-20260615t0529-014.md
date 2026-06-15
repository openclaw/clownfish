---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-mixed-20260615T0529-014"
mode: "plan"
run_id: "27526343676"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27526343676"
head_sha: "575573c3a749b924aa260c57f419b6ec1b610ff8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:44:15.227Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 10
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-mixed-20260615T0529-014

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27526343676](https://github.com/openclaw/clownfish/actions/runs/27526343676)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification for 10 listed PRs. No GitHub mutations are planned beyond read-only routing/classification; security-sensitive open items are quarantined, closed items are kept closed, and independent PRs remain open for their normal proof/review path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 10 |
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
| #85159 | keep_related | planned | related | Related to the hydrated command-menu issue, but proof is still missing and the PR should remain open. |
| #85172 | keep_related | planned | related | Related to the Matrix direct-room routing family, but not clearly duplicate and still proof-blocked. |
| #85195 | keep_closed | skipped | fixed_by_candidate | Already closed; historical fixed-by-candidate evidence only. |
| #84819 | keep_closed | skipped | security_sensitive | Already closed; no ProjectClownfish mutation or routing action is needed for this closed PR. |
| #84525 | needs_human | planned | needs_human | Maintainer judgment is required for the provider auth/serialization contract before any merge path. |
| #84582 | keep_independent | planned | independent | Independent proof-blocked bugfix PR; keep open for normal proof/review. |
| #67421 | route_security | planned | security_sensitive | Open SSRF/security-boundary PR must be quarantined to central OpenClaw security handling. |
| #85345 | keep_independent | planned | independent | Independent maintainer-owned draft PR; keep open for maintainer review outside this cleanup shard. |
| #84977 | keep_independent | planned | independent | Independent active PR waiting on author/review follow-up; no cleanup closure is justified. |
| #84906 | route_security | planned | security_sensitive | Open security-boundary/provider PR should be routed to central OpenClaw security handling rather than backlog cleanup. |

## Needs Human

- #84525 requires maintainer judgment on the models.json auth marker/redaction contract before any merge path.
