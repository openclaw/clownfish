---
repo: openclaw/openclaw
cluster_id: gitcrawl-133-fresh-plan-ramp
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
canonical: []
candidates:
  - "#90418"
cluster_refs:
  - "#90418"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#90252"
  - "#90267"
  - "#90474"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #90267 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 133 on 2026-06-17. Existing-overlap refs #90252, #90267, #90474 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 133

Generated from local gitcrawl run cluster 133 for `openclaw/openclaw`.

Display title:

> fix(doctor): archive conflicting plugin install index

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #90252, #90267, #90474
- representative: #90267, currently open in local store
- latest member update: 2026-06-15T19:04:11.544662Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90418 [Bug]: Upgrade leaves repeated shared SQLite plugin install metadata conflict warnings for codex/discord

Existing-overlap context refs:

- #90252 fix(state-migrations): archive plugin install index on conflict instead of keeping it
- #90267 fix(doctor): archive conflicting plugin install index
- #90474 [security-signal] fix(state): retire superseded plugin install index
