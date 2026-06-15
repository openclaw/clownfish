---
repo: openclaw/openclaw
cluster_id: gitcrawl-76-pr-backlog-plan-20260615-a
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#78965"
candidates:
  - "#12505"
  - "#58730"
  - "#62937"
  - "#70573"
  - "#76707"
  - "#78965"
  - "#78981"
cluster_refs:
  - "#12505"
  - "#58730"
  - "#62937"
  - "#70573"
  - "#76707"
  - "#78965"
  - "#78981"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#12505"
  - "#62937"
  - "#70573"
  - "#78965"
  - "#78981"
canonical_hint: "gitcrawl representative #78965 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 76 on 2026-06-15. Security-signal refs #12505, #62937, #70573, #78965, #78981 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 76

Generated from local gitcrawl run cluster 76 for `openclaw/openclaw`.

Display title:

> [Feature]: Local user sandbox backend for per-agent Unix account isolation

Cluster shape from gitcrawl:

- total members: 7
- issues: 5
- pull requests: 2
- open candidates in local store: 7
- security-signal refs requiring route_security: #12505, #62937, #70573, #78965, #78981
- representative: #78965, currently open in local store
- latest member update: 2026-06-14T04:46:07.517666Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #12505 [security-signal] [Feature Request] Unified Built-in Sandbox with Multi-Platform Support and Tiered Presets
- #58730 [Feature Request] exec() sandbox isolation and tool permission model — lessons from Claude Code source leak
- #62937 [security-signal] feat(exec): macOS sandbox-exec wrapper for host process isolation
- #70573 [security-signal] [Bug]: Security Issue: Agent Privacy Isolation Bypass via Direct File Read
- #76707 [UX]: doctor --fix can repair the wrong Unix home when live gateway runs under another user
- #78965 [security-signal] [Feature]: Local user sandbox backend for per-agent Unix account isolation
- #78981 [security-signal] Add su-backed user sandbox backend
