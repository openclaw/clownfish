---
repo: openclaw/openclaw
cluster_id: gitcrawl-1208-autonomous-drip-20260622c
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
  - "#80587"
candidates:
  - "#80587"
cluster_refs:
  - "#80587"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93080"
  - "#94020"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#94020"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #80587 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1208 on 2026-06-22. Existing-overlap refs #93080, #94020 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1208

Generated from local gitcrawl run cluster 1208 for `openclaw/openclaw`.

Display title:

> Docs: contradiction on whether `browser wait --load networkidle` is supported (browser-control.md vs browser.md)

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #93080, #94020
- security-signal refs requiring route_security: #94020
- representative: #80587, currently open in local store
- latest member update: 2026-06-19T02:13:00.727457Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80587 Docs: contradiction on whether `browser wait --load networkidle` is supported (browser-control.md vs browser.md)

Existing-overlap context refs:

- #93080 docs(browser): clarify networkidle is managed-browser only, not existing-session (fixes #80587)
- #94020 [security-signal] docs(browser): resolve networkidle contradiction across browser docs
