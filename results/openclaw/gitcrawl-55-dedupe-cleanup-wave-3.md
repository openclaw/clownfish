---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-55-dedupe-cleanup-wave-3"
mode: "autonomous"
run_id: "27610223192"
workflow_run_id: "27610223192"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27610223192"
head_sha: "aa9af7b43a4e7ef8014e3f9de64f82296378ea4c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T10:16:39.465Z"
canonical: "https://github.com/openclaw/openclaw/issues/63561"
canonical_issue: "https://github.com/openclaw/openclaw/issues/63561"
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-55-dedupe-cleanup-wave-3

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27610223192](https://github.com/openclaw/clownfish/actions/runs/27610223192)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/63561

## Summary

No mutating closeout is safe for this mixed cluster. #63561 remains the open canonical gateway/systemd false-unavailable tracker. #79488 is an independent skills config bug, #79515 is a related but distinct stale systemd status bug, and #81410 is a related but distinct root-shell stale SUDO_USER scope bug. No security-sensitive hydrated refs were detected, and fix/merge/post-merge actions are disabled for this job.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #63561 | keep_canonical | planned | canonical | Best surviving canonical issue for the gateway/systemd false-unavailable family; keep open for maintainer/live-repro follow-up. |
| #79488 | keep_independent | planned | independent | Independent skills/config parsing bug; not a duplicate of the gateway/systemd canonical and not safe to close in this cluster. |
| #79515 | keep_related | planned | related | Related gateway/systemd status bug with a distinct root cause and an open unmerged candidate PR; keep open rather than close as duplicate or fixed. |
| #81410 | keep_related | planned | related | Related but distinct root-shell stale SUDO_USER scope bug; keep open because it has unique reproduction details and no fix lane is allowed here. |

## Needs Human

- none
