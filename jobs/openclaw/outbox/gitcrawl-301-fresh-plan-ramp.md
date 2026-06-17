---
repo: openclaw/openclaw
cluster_id: gitcrawl-301-fresh-plan-ramp
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
  - "#79155"
cluster_refs:
  - "#79155"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#81305"
  - "#84584"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #81305 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 301 on 2026-06-17. Existing-overlap refs #81305, #84584 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 301

Generated from local gitcrawl run cluster 301 for `openclaw/openclaw`.

Display title:

> fix(commands): preserve multiline slash skill args

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #81305, #84584
- representative: #81305, currently open in local store
- latest member update: 2026-06-15T19:04:12.25186Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #79155 Regression: multiline slash skill arguments are truncated after first newline

Existing-overlap context refs:

- #81305 [security-signal] fix(commands): preserve multiline slash skill args
- #84584 [security-signal] fix: enforce slash command boundaries
