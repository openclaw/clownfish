---
repo: openclaw/openclaw
cluster_id: gitcrawl-468-autonomous-issue-wave
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
  - "#86050"
candidates:
  - "#86050"
cluster_refs:
  - "#86050"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#86649"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #86050 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 468 on 2026-06-15. Existing-overlap refs #86649 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 468

Generated from local gitcrawl run cluster 468 for `openclaw/openclaw`.

Display title:

> [Bug]: Gateway buffers claude-cli stream events; surfaces only see the final assembled message

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #86649
- representative: #86050, currently open in local store
- latest member update: 2026-06-15T11:49:40.342267Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #86050 [Bug]: Gateway buffers claude-cli stream events; surfaces only see the final assembled message

Existing-overlap context refs:

- #86649 fix: relay Claude CLI assistant partial messages as streaming deltas
