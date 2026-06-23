---
repo: openclaw/openclaw
cluster_id: gitcrawl-1147-autonomous-drip-20260622c
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
  - "#81078"
cluster_refs:
  - "#81078"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#62157"
  - "#93079"
  - "#93334"
  - "#93823"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #93079 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1147 on 2026-06-22. Existing-overlap refs #62157, #93079, #93334, #93823 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1147

Generated from local gitcrawl run cluster 1147 for `openclaw/openclaw`.

Display title:

> fix(reply): preserve unsent text-only finals after block pipeline streamed partial content (fixes #81078)

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 1
- excluded existing-overlap refs: #62157, #93079, #93334, #93823
- representative: #93079, currently open in local store
- latest member update: 2026-06-19T02:13:00.460603Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81078 [Bug]: WhatsApp block streaming can suppress complete final replies after partial stream delivery

Existing-overlap context refs:

- #62157 fix: only drop streamed payloads, not all final payloads
- #93079 fix(reply): preserve unsent text-only finals after block pipeline streamed partial content (fixes #81078)
- #93334 fix(whatsapp): notify user when trailing media send fails instead of silent drop
- #93823 fix(whatsapp): keep opening text chunk when first media fails on multi-chunk reply
