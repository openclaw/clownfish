---
repo: openclaw/openclaw
cluster_id: gitcrawl-256-bulk-plan-20260615-a
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
  - "#90209"
candidates:
  - "#90209"
  - "#90216"
  - "#90960"
cluster_refs:
  - "#90209"
  - "#90216"
  - "#90960"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90960"
canonical_hint: "gitcrawl representative #90209 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 256 on 2026-06-15. Security-signal refs #90960 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 256

Generated from local gitcrawl run cluster 256 for `openclaw/openclaw`.

Display title:

> google-vertex: Missing image and video generation contracts in plugin manifest

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 3
- security-signal refs requiring route_security: #90960
- representative: #90209, currently open in local store
- latest member update: 2026-06-14T04:46:05.400029Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90209 google-vertex: Missing image and video generation contracts in plugin manifest
- #90216 [codex] fix(google): register Vertex media generation contracts
- #90960 [security-signal] fix(google): enable vertex image and video generation
