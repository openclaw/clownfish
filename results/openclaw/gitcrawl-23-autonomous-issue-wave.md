---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-23-autonomous-issue-wave"
mode: "autonomous"
run_id: "27566224846"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27566224846"
head_sha: "9a3d85c9b40c660c9605ee702b491a28c5368505"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T18:08:51.654Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 9
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-23-autonomous-issue-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27566224846](https://github.com/openclaw/clownfish/actions/runs/27566224846)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Cluster is over-broad and splits into several live non-duplicate subfamilies. No close, merge, or new fix PR is safe from this pass: each open seed issue already has a hydrated linked PR or needs maintainer/product review, and require_fix_before_close blocks issue closeout until a fix lands. Security-sensitive linked PR #92726 is quarantined only for central security handling.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 9 |
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
| #70788 | keep_canonical | planned | canonical | Keep as the live tracker for the Startup-folder fallback flash until linked PR #91249 lands or is replaced. |
| #77804 | keep_canonical | planned | canonical | Keep as the canonical tracker for the doctor invalid-config exit-code contract until linked PR #81829 is repaired, reviewed, and merged. |
| #79166 | keep_canonical | planned | canonical | Keep open as an independent feature/product tracker; it is not a duplicate of the Windows daemon or doctor bug-fix issues in this cluster. |
| #80435 | keep_canonical | planned | canonical | Keep as the live tracker for the doctor trailer bug until linked PR #80455 lands or is replaced. |
| #84600 | keep_canonical | planned | canonical | Keep as canonical for the findstr restart-helper window/hang issue until #91273 or another safe fix lands. |
| #87993 | keep_canonical | planned | canonical | Keep as canonical for the update-time Scheduled Task autostart race; no closeout is safe before the linked fix lands. |
| #89231 | keep_canonical | planned | canonical | Keep as canonical for the scheduled-task visible-console default; linked PR #89380 needs repair/proof before closeout. |
| #91144 | keep_canonical | planned | canonical | Keep as canonical for the foreground-listener false-positive launch evidence bug until linked PR #93299 lands or is replaced. |
| #92726 | route_security | planned | security_sensitive | Security-sensitive linked PR is out of scope for Clownfish backlog cleanup and must be routed centrally without mutation. |

## Needs Human

- none
