---
repo: openclaw/openclaw
cluster_id: gitcrawl-2129-dedupe-only-20260429d
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
  - "#47707"
candidates:
  - "#47707"
  - "#58012"
cluster_refs:
  - "#47707"
  - "#58012"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #47707 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2129 on 2026-04-30."
---

# Gitcrawl Cluster 2129

Generated from local gitcrawl run cluster 2129 for `openclaw/openclaw`.

Display title:

> [Bug]: OpenRouter Mistral models fail with strict tool call ID requirements

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #47707, currently open in local store
- latest member update: 2026-04-24T18:56:30.558Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #47707 [Bug]: OpenRouter Mistral models fail with strict tool call ID requirements
- #58012 [Bug]: strict9 tool-call-id regression — Mistral via proxy providers fails again after provider-capabilities refactors
