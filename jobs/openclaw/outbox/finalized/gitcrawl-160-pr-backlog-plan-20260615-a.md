---
repo: openclaw/openclaw
cluster_id: gitcrawl-160-pr-backlog-plan-20260615-a
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
  - "#78911"
candidates:
  - "#78911"
  - "#78928"
  - "#86136"
  - "#86138"
cluster_refs:
  - "#78911"
  - "#78928"
  - "#86136"
  - "#86138"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#78928"
  - "#86138"
canonical_hint: "gitcrawl representative #78911 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 160 on 2026-06-15. Security-signal refs #78928, #86138 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 160

Generated from local gitcrawl run cluster 160 for `openclaw/openclaw`.

Display title:

> [Feature]: Allow operator tuning of agents.defaults.compaction.{keepRecentTokens,maxHistoryShare,maxActiveTranscriptBytes,recentTurnsPreserve,notifyUser} via gateway config.patch

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- security-signal refs requiring route_security: #78928, #86138
- representative: #78911, currently open in local store
- latest member update: 2026-06-14T04:46:07.021803Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #78911 [Feature]: Allow operator tuning of agents.defaults.compaction.{keepRecentTokens,maxHistoryShare,maxActiveTranscriptBytes,recentTurnsPreserve,notifyUser} via gateway config.patch
- #78928 [security-signal] fix(agents): allow compaction config tuning
- #86136 Allow agent config.patch to harden plugins.bundledDiscovery to allowlist
- #86138 [security-signal] Allow agents to harden bundled plugin discovery
