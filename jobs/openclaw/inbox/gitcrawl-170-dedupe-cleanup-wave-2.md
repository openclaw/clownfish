---
repo: openclaw/openclaw
cluster_id: gitcrawl-170-dedupe-cleanup-wave-2
mode: autonomous
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
  - "#87213"
candidates:
  - "#87213"
  - "#92141"
cluster_refs:
  - "#87213"
  - "#92141"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#61009"
  - "#87236"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #87213 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 170 on 2026-06-16. Existing-overlap refs #61009, #87236 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 170

Generated from local gitcrawl run cluster 170 for `openclaw/openclaw`.

Display title:

> [Bug]: exec(host=node) rejects same node when bound and requested selectors differ

Cluster shape from gitcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #61009, #87236
- representative: #87213, currently open in local store
- latest member update: 2026-06-15T19:04:12.759826Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87213 [Bug]: exec(host=node) rejects same node when bound and requested selectors differ
- #92141 [Bug]: WebChat/OpenAI Codex session does not expose host=node exec despite connected Windows node

Existing-overlap context refs:

- #61009 [Bug]: docs/tools/exec says host=node override is allowed from auto, but runtime rejects it
- #87236 fix(exec): canonicalize bound vs requested node selectors before rejecting host=node (#87213)
