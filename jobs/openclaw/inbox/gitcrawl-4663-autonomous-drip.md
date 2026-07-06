---
repo: openclaw/openclaw
cluster_id: gitcrawl-4663-autonomous-drip
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#40759"
candidates:
  - "#56227"
cluster_refs:
  - "#40759"
  - "#56227"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #40759 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 4663 on 2026-07-06."
---

# Gitcrawl Cluster 4663

Generated from local gitcrawl run cluster 4663 for `openclaw/openclaw`.

Display title:

> Gateway restart fails with state_dir migration conflict

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- representative: #40759, currently closed in local store
- latest member update: 2026-06-18T09:04:19.546665658Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #40759 Gateway restart fails with state_dir migration conflict

Open candidates:

- #56227 Gateway restart failure should keep previous instance running to avoid total disconnect
