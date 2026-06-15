---
repo: openclaw/openclaw
cluster_id: gitcrawl-240-pr-backlog-plan-20260615-a
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
  - "#91160"
candidates:
  - "#91160"
  - "#91220"
  - "#91376"
cluster_refs:
  - "#91160"
  - "#91220"
  - "#91376"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#91220"
  - "#91376"
canonical_hint: "gitcrawl representative #91160 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 240 on 2026-06-15. Security-signal refs #91220, #91376 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 240

Generated from local gitcrawl run cluster 240 for `openclaw/openclaw`.

Display title:

> [Feature]: Markdown lint

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #91220, #91376
- representative: #91160, currently open in local store
- latest member update: 2026-06-14T04:46:05.062258Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91160 [Feature]: Markdown lint
- #91220 [security-signal] fix(docs): lint workspace templates
- #91376 [security-signal] fix(docs): lint workspace templates
