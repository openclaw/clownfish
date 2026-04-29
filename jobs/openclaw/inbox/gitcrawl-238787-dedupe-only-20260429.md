---
repo: openclaw/openclaw
cluster_id: gitcrawl-238787-dedupe-only-20260429
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
  - "#38650"
candidates:
  - "#38650"
  - "#38981"
  - "#40230"
  - "#51277"
  - "#62938"
  - "#64473"
  - "#65736"
  - "#68417"
  - "#70819"
  - "#72650"
  - "#72713"
  - "#73401"
  - "#73988"
cluster_refs:
  - "#38650"
  - "#38981"
  - "#40230"
  - "#51277"
  - "#62938"
  - "#64473"
  - "#65736"
  - "#68417"
  - "#70819"
  - "#72650"
  - "#72713"
  - "#73401"
  - "#73988"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #38650 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238787 on 2026-04-29."
---

# Gitcrawl Cluster 238787

Generated from local gitcrawl run cluster 238787 for `openclaw/openclaw`.

Display title:

> fix: allow symlinks in workspace files

Cluster shape from gitcrawl:

- total members: 13
- issues: 0
- pull requests: 13
- open candidates in local store: 13
- representative: #38650, currently open in local store
- latest member update: 2026-04-29T08:43:39.185Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38650 fix: allow symlinks in workspace files
- #38981 feat(agents): add workspaceConfig.allowedExternalPaths for trusted symlinked workspace files
- #40230 fix(agents): follow symlinks when loading workspace bootstrap files
- #51277 fix: allow symlinks to openclaw root sibling dirs
- #62938 fix(exec-approvals): respect OPENCLAW_STATE_DIR for store paths
- #64473 fix: allow symlinks within ~/.openclaw directory in boundary path checks
- #65736 fix(exec): respect OPENCLAW_STATE_DIR for exec approvals
- #68417 fix(exec-approvals): allow ~/.openclaw symlink when OPENCLAW_STATE_DIR is set
- #70819 fix(plugins): allow trusted openclaw peer symlinks
- #72650 fix(exec-policy): accept trusted ~/.openclaw symlink at home boundary
- #72713 [codex] fix: allow trusted .openclaw symlink
- #73401 fix(agents): load symlinked workspace bootstrap files
- #73988 fix(agents): load symlinked workspace bootstrap files
