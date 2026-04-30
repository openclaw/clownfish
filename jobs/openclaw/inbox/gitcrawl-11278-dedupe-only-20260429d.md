---
repo: openclaw/openclaw
cluster_id: gitcrawl-11278-dedupe-only-20260429d
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
  - "#63069"
candidates:
  - "#63069"
  - "#63082"
cluster_refs:
  - "#63069"
  - "#63082"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #63069 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 11278 on 2026-04-30."
---

# Gitcrawl Cluster 11278

Generated from local gitcrawl run cluster 11278 for `openclaw/openclaw`.

Display title:

> [Bug]: hell completion writes to wrong profile path when ZDOTDIR or XDG_CONFIG_HOME is set

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #63069, currently open in local store
- latest member update: 2026-04-29T20:41:59.894720156Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63069 [Bug]: hell completion writes to wrong profile path when ZDOTDIR or XDG_CONFIG_HOME is set
- #63082 fix(cli): respect ZDOTDIR and XDG_CONFIG_HOME in shell completion pro…
