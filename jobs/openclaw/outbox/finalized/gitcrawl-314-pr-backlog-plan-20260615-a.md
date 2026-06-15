---
repo: openclaw/openclaw
cluster_id: gitcrawl-314-pr-backlog-plan-20260615-a
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
  - "#27306"
candidates:
  - "#27306"
  - "#78879"
  - "#79498"
cluster_refs:
  - "#27306"
  - "#78879"
  - "#79498"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#79498"
canonical_hint: "gitcrawl representative #27306 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 314 on 2026-06-15. Security-signal refs #79498 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 314

Generated from local gitcrawl run cluster 314 for `openclaw/openclaw`.

Display title:

> [Feature]: Allow sandbox for main but keep sandbox for groups without security warning

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- security-signal refs requiring route_security: #79498
- representative: #27306, currently open in local store
- latest member update: 2026-06-14T04:46:07.452224Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #27306 [Feature]: Allow sandbox for main but keep sandbox for groups without security warning
- #78879 [Feature]: Doctor & docs should warn when sandbox / fs.workspaceOnly / sessions_send config is silently no-op with CLI runtimes (claude-cli in my case)
- #79498 [security-signal] fix(security): respect sandboxed group ingress
