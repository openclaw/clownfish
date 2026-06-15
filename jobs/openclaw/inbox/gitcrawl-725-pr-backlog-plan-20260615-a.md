---
repo: openclaw/openclaw
cluster_id: gitcrawl-725-pr-backlog-plan-20260615-a
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
  - "#81960"
candidates:
  - "#81960"
  - "#81961"
cluster_refs:
  - "#81960"
  - "#81961"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#81961"
canonical_hint: "gitcrawl representative #81960 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 725 on 2026-06-15. Security-signal refs #81961 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 725

Generated from local gitcrawl run cluster 725 for `openclaw/openclaw`.

Display title:

> [Feature]: Allow onboarding to configure multiple providers and models

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- security-signal refs requiring route_security: #81961
- representative: #81960, currently open in local store
- latest member update: 2026-06-14T04:46:07.246915Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81960 [Feature]: Allow onboarding to configure multiple providers and models
- #81961 [security-signal] [Feature]: Add a simple Dashboard UX to manage multiple model providers
