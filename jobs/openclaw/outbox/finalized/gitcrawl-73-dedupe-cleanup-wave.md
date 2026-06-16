---
repo: openclaw/openclaw
cluster_id: gitcrawl-73-dedupe-cleanup-wave
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
  - "#89973"
candidates:
  - "#77432"
  - "#77559"
  - "#89272"
  - "#89273"
  - "#89973"
  - "#89977"
  - "#92014"
cluster_refs:
  - "#77432"
  - "#77559"
  - "#89272"
  - "#89273"
  - "#89973"
  - "#89977"
  - "#92014"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #89973 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 73 on 2026-06-16."
---

# Gitcrawl Cluster 73

Generated from local gitcrawl run cluster 73 for `openclaw/openclaw`.

Display title:

> fix(plugins): isolate doctor contract rows

Cluster shape from gitcrawl:

- total members: 7
- issues: 0
- pull requests: 7
- open candidates in local store: 7
- representative: #89973, currently open in local store
- latest member update: 2026-06-15T19:04:12.293528Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77432 feat(doctor): warn about hidden provider catalog models
- #77559 [codex] Fix missing channel plugin diagnostics
- #89272 fix(doctor): sanitize bundle MCP schema diagnostics
- #89273 fix(doctor): sanitize provider catalog findings
- #89973 fix(plugins): isolate doctor contract rows
- #89977 fix(plugins): isolate bundle config rows
- #92014 fix(doctor): survive throwing plugin hooks and warn on build-version skew
