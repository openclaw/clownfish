---
repo: openclaw/openclaw
cluster_id: gitcrawl-102-dedupe-cleanup-wave
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
  - "#87923"
candidates:
  - "#87923"
  - "#87925"
cluster_refs:
  - "#87923"
  - "#87925"
  - "#91913"
  - "#92002"
  - "#92200"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #87923 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 102 on 2026-06-16."
---

# Gitcrawl Cluster 102

Generated from local gitcrawl run cluster 102 for `openclaw/openclaw`.

Display title:

> fix(thinking): keep explicit session thinkingLevel when runtime downgrades (#87740)

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 2
- representative: #87923, currently open in local store
- latest member update: 2026-06-15T19:04:11.839179Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #91913 openai-completions legacy path drops `compat.reasoningEffortMap` and `thinkLevel`; LM Studio binary-thinking models silently fall back to thinking-on
- #92002 fix(lmstudio): deliver thinking "off" to binary-thinking models
- #92200 fix(openai-completions): fallback to compat.reasoningEffortMap when thinkingLevelMap is unset (fixes #91913)

Open candidates:

- #87923 fix(thinking): keep explicit session thinkingLevel when runtime downgrades (#87740)
- #87925 thinkingLevel: model switch silently downgrades and persists an inherited explicit override
