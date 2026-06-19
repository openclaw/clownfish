---
repo: openclaw/openclaw
cluster_id: gitcrawl-1178-intake-20260619
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
  - "#94202"
candidates:
  - "#94202"
cluster_refs:
  - "#94202"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94232"
  - "#94325"
  - "#94531"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94202 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1178 on 2026-06-19. Existing-overlap refs #94232, #94325, #94531 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1178

Generated from local gitcrawl run cluster 1178 for `openclaw/openclaw`.

Display title:

> [Bug]: UI glitch: config is not visible

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #94232, #94325, #94531
- representative: #94202, currently open in local store
- latest member update: 2026-06-18T16:17:07.054501Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94202 [Bug]: UI glitch: config is not visible

Existing-overlap context refs:

- #94232 [security-signal] fix(ui): make raw config textarea scrollable in settings view
- #94325 [security-signal] fix: UI glitch: config is not visible
- #94531 [security-signal] fix: always show raw config in settings (fixes #94202)
