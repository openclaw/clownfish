---
repo: openclaw/openclaw
cluster_id: gitcrawl-133-bulk-plan-20260615-a
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
  - "#90267"
candidates:
  - "#90252"
  - "#90267"
  - "#90418"
  - "#90474"
cluster_refs:
  - "#90252"
  - "#90267"
  - "#90418"
  - "#90474"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90474"
canonical_hint: "gitcrawl representative #90267 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 133 on 2026-06-15. Security-signal refs #90474 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 133

Generated from local gitcrawl run cluster 133 for `openclaw/openclaw`.

Display title:

> fix(doctor): archive conflicting plugin install index

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- security-signal refs requiring route_security: #90474
- representative: #90267, currently open in local store
- latest member update: 2026-06-14T04:46:05.357041Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90252 fix(state-migrations): archive plugin install index on conflict instead of keeping it
- #90267 fix(doctor): archive conflicting plugin install index
- #90418 [Bug]: Upgrade leaves repeated shared SQLite plugin install metadata conflict warnings for codex/discord
- #90474 [security-signal] fix(state): retire superseded plugin install index
