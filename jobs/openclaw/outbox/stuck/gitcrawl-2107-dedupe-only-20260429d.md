---
repo: openclaw/openclaw
cluster_id: gitcrawl-2107-dedupe-only-20260429d
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
  - "#42012"
candidates:
  - "#47387"
  - "#60565"
  - "#63633"
cluster_refs:
  - "#42012"
  - "#44182"
  - "#47387"
  - "#60565"
  - "#63633"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #42012 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2107 on 2026-04-30."
---

# Gitcrawl Cluster 2107

Generated from local gitcrawl run cluster 2107 for `openclaw/openclaw`.

Display title:

> Fix Telegram media proxy support

Cluster shape from gitcrawl:

- total members: 5
- issues: 0
- pull requests: 5
- open candidates in local store: 3
- representative: #42012, currently closed in local store
- latest member update: 2026-04-28T11:40:35.73620376Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42012 Fix Telegram media proxy support
- #44182 fix(telegram): preserve explicit proxy fetch transport

Open candidates:

- #47387 fix(telegram): route outbound media downloads through proxy transport
- #60565 fix: Telegram media download fails when proxy is socks5
- #63633 fix: support socks5/socks4 proxy via undici Socks5ProxyAgent
