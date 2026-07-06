---
repo: openclaw/openclaw
cluster_id: gitcrawl-297-bulk-plan-20260615-a
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
  - "#73394"
candidates:
  - "#73278"
  - "#73279"
  - "#73394"
cluster_refs:
  - "#73278"
  - "#73279"
  - "#73394"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#73279"
  - "#73394"
canonical_hint: "gitcrawl representative #73394 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 297 on 2026-06-15. Security-signal refs #73279, #73394 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 297

Generated from local gitcrawl run cluster 297 for `openclaw/openclaw`.

Display title:

> fix(codex,discord): stop duplicate channel reply when autoThread routes to a thread

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #73279, #73394
- representative: #73394, currently open in local store
- latest member update: 2026-06-14T04:46:06.602128Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #73278 [Bug]: Discord autoThread mentions can produce duplicate parent-channel and thread replies
- #73279 [security-signal] [codex] Fix Discord current-conversation reply guidance
- #73394 [security-signal] fix(codex,discord): stop duplicate channel reply when autoThread routes to a thread
