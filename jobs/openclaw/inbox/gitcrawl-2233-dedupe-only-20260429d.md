---
repo: openclaw/openclaw
cluster_id: gitcrawl-2233-dedupe-only-20260429d
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
  - "#48613"
candidates:
  - "#45380"
  - "#52291"
  - "#62910"
cluster_refs:
  - "#44211"
  - "#44234"
  - "#45380"
  - "#45860"
  - "#48289"
  - "#48613"
  - "#48646"
  - "#52291"
  - "#53664"
  - "#55263"
  - "#62910"
  - "#67346"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #48613 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 2233 on 2026-04-30."
---

# Gitcrawl Cluster 2233

Generated from local gitcrawl run cluster 2233 for `openclaw/openclaw`.

Display title:

> Fix/compatible with native windows

Cluster shape from gitcrawl:

- total members: 12
- issues: 0
- pull requests: 12
- open candidates in local store: 3
- representative: #48613, currently closed in local store
- latest member update: 2026-04-29T20:41:59.906781287Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #44211 fix(build): use Git Bash wrapper for A2UI bundling on Windows
- #44234 docs(windows): note Git Bash requirement for A2UI builds
- #45860 fix(build): prefer usable POSIX shells for Windows bundling
- #48289 fix(win32): runner.cmd wrapped in double quotes to prevent spawn err
- #48613 Fix/compatible with native windows
- #48646 Fix/compatible with native windows
- #53664 Improve Windows source-dev support and make scripts cross-platform
- #55263 fix: use bare command name in shell mode to avoid Windows path-space …
- #67346 Scripts: use path.basename for pnpm to fix shell execution on Windows

Open candidates:

- #45380 Make env-prefixed npm scripts work on Windows
- #52291 fix(ui): make ui:build work on Windows
- #62910 fix(scripts): avoid DEP0190 when spawning .cmd files on Windows (Node.js v24)
