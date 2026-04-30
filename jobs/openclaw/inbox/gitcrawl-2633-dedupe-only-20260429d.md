---
repo: openclaw/openclaw
cluster_id: gitcrawl-2633-dedupe-only-20260429d
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
  - "#20802"
candidates:
  - "#20802"
  - "#61485"
cluster_refs:
  - "#20802"
  - "#61485"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #20802 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2633 on 2026-04-30."
---

# Gitcrawl Cluster 2633

Generated from local gitcrawl run cluster 2633 for `openclaw/openclaw`.

Display title:

> feat(hooks): upgrade llm_input, llm_output, and after_tool_call to modifying hooks

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- representative: #20802, currently open in local store
- latest member update: 2026-04-28T22:51:06.976196862Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #20802 feat(hooks): upgrade llm_input, llm_output, and after_tool_call to modifying hooks
- #61485 feat(plugins): upgrade llm_input/llm_output hooks from fire-and-forget to modifying
