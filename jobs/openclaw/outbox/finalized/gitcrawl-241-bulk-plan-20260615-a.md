---
repo: openclaw/openclaw
cluster_id: gitcrawl-241-bulk-plan-20260615-a
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
  - "#87136"
candidates:
  - "#81856"
  - "#87136"
  - "#87932"
cluster_refs:
  - "#81856"
  - "#87136"
  - "#87932"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#87932"
canonical_hint: "gitcrawl representative #87136 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 241 on 2026-06-15. Security-signal refs #87932 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 241

Generated from local gitcrawl run cluster 241 for `openclaw/openclaw`.

Display title:

> compaction: absolute token thresholds break when switching models with different context windows

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- security-signal refs requiring route_security: #87932
- representative: #87136, currently open in local store
- latest member update: 2026-06-14T04:46:05.896134Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81856 Add absolute-token trigger for compaction (independent of model context window)
- #87136 compaction: absolute token thresholds break when switching models with different context windows
- #87932 [security-signal] feat(compaction): support percentage strings for token thresholds
