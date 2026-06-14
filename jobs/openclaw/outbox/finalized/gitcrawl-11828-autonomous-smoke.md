---
repo: openclaw/openclaw
cluster_id: gitcrawl-11828-autonomous-smoke
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
  - "#64696"
candidates:
  - "#69700"
  - "#70986"
cluster_refs:
  - "#64696"
  - "#69700"
  - "#70986"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #64696 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 11828 on 2026-06-14."
---

# Gitcrawl Cluster 11828

Generated from local gitcrawl run cluster 11828 for `openclaw/openclaw`.

Display title:

> memory-wiki: bridge import and lint mishandle relative links, reply tags, and malformed cached source pages

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 2
- representative: #64696, currently closed in local store
- latest member update: 2026-06-12T05:42:51.368058981Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #64696 memory-wiki: bridge import and lint mishandle relative links, reply tags, and malformed cached source pages

Open candidates:

- #69700 memory-wiki lint: sources/ directory requires frontmatter on raw imported files
- #70986 memory-wiki lint: wikilink extractor is not markdown-aware; resolver never matches frontmatter titles
