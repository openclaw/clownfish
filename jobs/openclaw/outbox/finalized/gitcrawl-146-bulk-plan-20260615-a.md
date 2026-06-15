---
repo: openclaw/openclaw
cluster_id: gitcrawl-146-bulk-plan-20260615-a
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
  - "#90754"
candidates:
  - "#90701"
  - "#90754"
  - "#91036"
  - "#91543"
cluster_refs:
  - "#90701"
  - "#90754"
  - "#91036"
  - "#91543"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#91543"
canonical_hint: "gitcrawl representative #90754 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 146 on 2026-06-15. Security-signal refs #91543 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 146

Generated from local gitcrawl run cluster 146 for `openclaw/openclaw`.

Display title:

> feat(control-ui): add toggle to collapse/expand workspace files panel [AI-assisted]

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- security-signal refs requiring route_security: #91543
- representative: #90754, currently open in local store
- latest member update: 2026-06-14T04:46:05.185698Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90701 Feature Request: Toggle to hide/show the right-side Workspace panel in Control UI
- #90754 feat(control-ui): add toggle to collapse/expand workspace files panel [AI-assisted]
- #91036 [Feature]: web界面的右侧workspace里的文件显示栏 强烈建议增加按钮可以自动隐去 看着太烦了。
- #91543 [security-signal] feat: add collapsible workspace files rail
