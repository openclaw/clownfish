---
repo: openclaw/openclaw
cluster_id: gitcrawl-549-fresh-plan-ramp
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
  - "#55563"
cluster_refs:
  - "#55563"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#54669"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #54669 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 549 on 2026-06-17. Existing-overlap refs #54669 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 549

Generated from local gitcrawl run cluster 549 for `openclaw/openclaw`.

Display title:

> [Field Report] Chrome 136+ binds CDP to [::1] (IPv6) on Windows — portproxy v4tov4 breaks silently

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #54669
- representative: #54669, currently open in local store
- latest member update: 2026-06-15T19:04:12.534077Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #55563 [v2026.3.24] Two regressions: browser tabs CLI syntax break + gateway cycling after doctor --fix

Existing-overlap context refs:

- #54669 [Field Report] Chrome 136+ binds CDP to [::1] (IPv6) on Windows — portproxy v4tov4 breaks silently
