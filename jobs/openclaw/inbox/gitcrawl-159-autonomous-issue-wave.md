---
repo: openclaw/openclaw
cluster_id: gitcrawl-159-autonomous-issue-wave
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
  - "#80387"
candidates:
  - "#80387"
cluster_refs:
  - "#79048"
  - "#80387"
  - "#87864"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#80386"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #80387 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 159 on 2026-06-15. Existing-overlap refs #80386 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 159

Generated from local gitcrawl run cluster 159 for `openclaw/openclaw`.

Display title:

> [Bug]: Openclaw command disappears after brew upgrade installs a new Node major

Cluster shape from gitcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #80386
- representative: #80387, currently open in local store
- latest member update: 2026-06-15T11:49:40.650755Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #79048 [Bug]: Impossible to install on mac
- #87864 Bug: openclaw command not found after npm global install

Open candidates:

- #80387 [Bug]: Openclaw command disappears after brew upgrade installs a new Node major

Existing-overlap context refs:

- #80386 [security-signal] fix(update): Keep Openclaw alive across brew upgrade and other Node version bumps
