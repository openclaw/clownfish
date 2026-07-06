---
repo: openclaw/openclaw
cluster_id: gitcrawl-408-bulk-plan-20260615-a
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
  - "#67796"
candidates:
  - "#67796"
  - "#87964"
cluster_refs:
  - "#67796"
  - "#87964"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#87964"
canonical_hint: "gitcrawl representative #67796 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 408 on 2026-06-15. Security-signal refs #87964 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 408

Generated from local gitcrawl run cluster 408 for `openclaw/openclaw`.

Display title:

> fix(mattermost): support filePath and path as mediaUrl fallbacks in handleAction

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- security-signal refs requiring route_security: #87964
- representative: #67796, currently open in local store
- latest member update: 2026-06-14T04:46:06.033804Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #67796 fix(mattermost): support filePath and path as mediaUrl fallbacks in handleAction
- #87964 [security-signal] fix(mattermost): support filePath, buffer, and attachments in message send (fixes #87930)
