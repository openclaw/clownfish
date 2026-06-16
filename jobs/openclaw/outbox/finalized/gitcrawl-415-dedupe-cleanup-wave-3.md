---
repo: openclaw/openclaw
cluster_id: gitcrawl-415-dedupe-cleanup-wave-3
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
  - "#38439"
candidates:
  - "#38439"
cluster_refs:
  - "#38439"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#41201"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #38439 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 415 on 2026-06-16. Existing-overlap refs #41201 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 415

Generated from local gitcrawl run cluster 415 for `openclaw/openclaw`.

Display title:

> [Bug] Webchat avatar endpoint /avatar/{agentId} returns 404 even with valid IDENTITY.md avatar

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #41201
- representative: #38439, currently open in local store
- latest member update: 2026-06-15T19:04:12.687626Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38439 [Bug] Webchat avatar endpoint /avatar/{agentId} returns 404 even with valid IDENTITY.md avatar

Existing-overlap context refs:

- #41201 [Bug]: Control UI Avatar not displaying (broken image)
