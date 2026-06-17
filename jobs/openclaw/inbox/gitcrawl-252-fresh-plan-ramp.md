---
repo: openclaw/openclaw
cluster_id: gitcrawl-252-fresh-plan-ramp
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
  - "#90643"
candidates:
  - "#90643"
cluster_refs:
  - "#90643"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#90237"
  - "#90648"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #90643 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 252 on 2026-06-17. Existing-overlap refs #90237, #90648 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 252

Generated from local gitcrawl run cluster 252 for `openclaw/openclaw`.

Display title:

> Discord mention aliases rewrite @handle inside fenced code when body contains triple-backtick literal

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #90237, #90648
- representative: #90643, currently open in local store
- latest member update: 2026-06-15T19:04:12.805852Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90643 Discord mention aliases rewrite @handle inside fenced code when body contains triple-backtick literal

Existing-overlap context refs:

- #90237 feat: add scoped mention pattern policy
- #90648 fix(discord): protect mention aliases in code fences
