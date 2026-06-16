---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-55-dedupe-cleanup-wave-2"
mode: "autonomous"
run_id: "27609384342"
workflow_run_id: "27609384342"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27609384342"
head_sha: "063b91b51477b9a3958bd940d26858d243770fdf"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:01:21.123Z"
canonical: "https://github.com/openclaw/openclaw/issues/63561"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63561"
canonical_pr: null
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-55-dedupe-cleanup-wave-2

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27609384342](https://github.com/openclaw/clownfish/actions/runs/27609384342)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63561

## Summary

Hydrated state shows current main at 55c047e77e70a7d414d6fe8cad55ecf978ebbcf2. The actionable open non-security refs are not high-confidence duplicates of one canonical issue: #63561 remains the best canonical for the original user-systemd false-unavailable report, while #79488 is independent skills config work, #79515 is a related but distinct stale systemd status-state bug, and #81410 is a related but distinct root-shell stale SUDO_USER scope bug. The linked PR #79538 carries security-shaped signals in its title and labels, so it is quarantined to central security handling as an exact PR ref and is not used as a closure or merge path in this close-only job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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
| #63561 | keep_canonical | planned | canonical | Keep #63561 open as the surviving canonical issue for the user-systemd false-unavailable family. |
| #79488 | keep_independent | planned | independent | This is a separate skills config parsing issue, not a duplicate of the gateway systemd cluster. |
| #79515 | keep_related | planned | related | Related systemd status-surface work, but not a true duplicate of #63561 and not safe to close in a close-only pass. |
| #81410 | keep_related | planned | related | Related gateway/systemd scope bug with distinct reproduction and fix shape; keep open. |
| #79538 | route_security | planned | security_sensitive | Quarantine the exact PR ref to central OpenClaw security handling; do not close, merge, or use it as a candidate fix in this ProjectClownfish cleanup job. |

## Needs Human

- none
