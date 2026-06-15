---
repo: openclaw/openclaw
cluster_id: gitcrawl-735-autonomous-issue-wave
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
  - "#80920"
candidates:
  - "#80920"
cluster_refs:
  - "#80920"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#80921"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #80920 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 735 on 2026-06-15. Existing-overlap refs #80921 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 735

Generated from local gitcrawl run cluster 735 for `openclaw/openclaw`.

Display title:

> Gateway hangs indefinitely on macOS Big Sur: canBindToHost("::1") has no timeout in net.ts

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #80921
- representative: #80920, currently open in local store
- latest member update: 2026-06-15T11:49:40.628946Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80920 Gateway hangs indefinitely on macOS Big Sur: canBindToHost("::1") has no timeout in net.ts

Existing-overlap context refs:

- #80921 fix(net): add 3s timeout to canBindToHost to prevent Big Sur startup hang
