---
repo: openclaw/openclaw
cluster_id: gitcrawl-592-dedupe-only-20260429d
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
  - "#39722"
candidates:
  - "#39722"
  - "#39790"
cluster_refs:
  - "#39722"
  - "#39790"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #39722 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 592 on 2026-04-30."
---

# Gitcrawl Cluster 592

Generated from local gitcrawl run cluster 592 for `openclaw/openclaw`.

Display title:

> TUI /sessions list: gateway-injected inbound metadata block used as session title (shows 'untrusted metadata' for all sessions)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #39722, currently open in local store
- latest member update: 2026-04-28T22:51:07.556833413Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39722 TUI /sessions list: gateway-injected inbound metadata block used as session title (shows 'untrusted metadata' for all sessions)
- #39790 fix(gateway): strip inbound metadata from TUI session titles and prefer external displayName
