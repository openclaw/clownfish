---
repo: openclaw/openclaw
cluster_id: gitcrawl-157-autonomous-refresh-20260623a
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
canonical: []
candidates:
  - "#93600"
cluster_refs:
  - "#93600"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#57535"
  - "#80142"
  - "#92025"
  - "#92028"
  - "#92077"
  - "#92860"
  - "#93532"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#57535"
  - "#80142"
  - "#92077"
  - "#93532"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #80142 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 157 on 2026-06-23. Existing-overlap refs #57535, #80142, #92025, #92028, #92077, #92860, #93532 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 157

Generated from local gitcrawl run cluster 157 for `openclaw/openclaw`.

Display title:

> fix(skills): warn for untrusted local sources

Cluster shape from gitcrawl:

- total members: 8
- issues: 2
- pull requests: 6
- open candidates in local store: 1
- excluded existing-overlap refs: #57535, #80142, #92025, #92028, #92077, #92860, #93532
- security-signal refs requiring route_security: #57535, #80142, #92077, #93532
- representative: #80142, currently open in local store
- latest member update: 2026-06-19T02:13:01.240619Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93600 Verify installed ClawHub skill file hashes

Existing-overlap context refs:

- #57535 [security-signal] Proposal: Add security warning for untrusted skills loaded from local sources
- #80142 [security-signal] fix(skills): warn for untrusted local sources
- #92025 feat(skills): add per-section remediation hints to skills check
- #92028 feat(skills): report malformed SKILL.md files via `skills lint`
- #92077 [security-signal] skills/ClawHub: surface source, add lockfile, sandbox by default
- #92860 #92077: skills/ClawHub: add sourceUrl to skill metadata schema and CLI display
- #93532 [security-signal] Expose verified ClawHub source in skill verify output
