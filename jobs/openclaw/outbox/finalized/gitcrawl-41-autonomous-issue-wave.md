---
repo: openclaw/openclaw
cluster_id: gitcrawl-41-autonomous-issue-wave
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
canonical: []
candidates:
  - "#79034"
cluster_refs:
  - "#79034"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#79049"
  - "#80924"
  - "#80955"
  - "#81279"
  - "#81333"
  - "#81378"
  - "#81714"
  - "#81724"
  - "#81743"
  - "#86925"
  - "#91210"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #81279 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 41 on 2026-06-15. Existing-overlap refs #79049, #80924, #80955, #81279, #81333, #81378, #81714, #81724, #81743, #86925, #91210 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 41

Generated from local gitcrawl run cluster 41 for `openclaw/openclaw`.

Display title:

> ui(i18n): localize skills page grouping labels, status chips and missing prefixes for zh-CN

Cluster shape from gitcrawl:

- total members: 12
- issues: 1
- pull requests: 11
- open candidates in local store: 1
- excluded existing-overlap refs: #79049, #80924, #80955, #81279, #81333, #81378, #81714, #81724, #81743, #86925, #91210
- representative: #81279, currently open in local store
- latest member update: 2026-06-15T11:49:40.70728Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #79034 [UI]: Control UI metadata not localized for non-English users

Existing-overlap context refs:

- #79049 [security-signal] fix(ui): localize chat metadata labels
- #80924 [security-signal] feat(i18n): translate dreaming module UI strings to Simplified Chinese
- #80955 [security-signal] ui(i18n): localize chat page slash commands and composer for zh-CN
- #81279 [security-signal] ui(i18n): localize skills page grouping labels, status chips and missing prefixes for zh-CN
- #81333 [security-signal] feat(i18n): translate Nodes page UI strings to Simplified Chinese
- #81378 [security-signal] feat(i18n): translate cron page UI strings to Simplified Chinese
- #81714 [security-signal] ui(i18n): localize agents panels (overview and tools/skills) for zh-CN
- #81724 [security-signal] ui(i18n): localize overview, sessions, and channels pages for zh-CN
- #81743 [security-signal] feat(ui/i18n): add Chinese translations for config page
- #86925 [security-signal] i18n(zh-CN): Fix and unify Chinese translation
- #91210 fix(ui): localize skill workshop switcher
