---
repo: openclaw/openclaw
cluster_id: gitcrawl-1176-autonomous-drip-20260622c
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
  - "#93568"
candidates:
  - "#93568"
cluster_refs:
  - "#93568"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93582"
  - "#93593"
  - "#93603"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #93568 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1176 on 2026-06-22. Existing-overlap refs #93582, #93593, #93603 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1176

Generated from local gitcrawl run cluster 1176 for `openclaw/openclaw`.

Display title:

> Configuring Weixin via channel setup installs plugin, then fails on plugins.allow instead of auto-allowlisting

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #93582, #93593, #93603
- representative: #93568, currently open in local store
- latest member update: 2026-06-19T02:13:00.619881Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93568 Configuring Weixin via channel setup installs plugin, then fails on plugins.allow instead of auto-allowlisting

Existing-overlap context refs:

- #93582 fix(plugins): auto-allowlist any explicitly selected plugin, not just ClickClack (fixes #93568)
- #93593 fix(plugins): extend allowlist bypass to all explicitly selected channel plugins
- #93603 fix(plugins): auto-allowlist explicitly selected plugins in setup flows
