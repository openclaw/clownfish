---
repo: openclaw/openclaw
cluster_id: gitcrawl-1219-intake-20260621
mode: plan
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
canonical: []
candidates:
  - "#93770"
cluster_refs:
  - "#93770"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93579"
  - "#93838"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #93838 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1219 on 2026-06-21. Existing-overlap refs #93579, #93838 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1219

Generated from local gitcrawl run cluster 1219 for `openclaw/openclaw`.

Display title:

> fix(telegram): enhance richMessages config help text with troubleshooting guidance

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #93579, #93838
- representative: #93838, currently open in local store
- latest member update: 2026-06-19T02:13:00.617054Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93770 [Feature]: Add config option to disable Telegram Rich-Text (sendRichMessage)

Existing-overlap context refs:

- #93579 feat(telegram): add richMessagesAutoDetect opt-in config field
- #93838 [security-signal] fix(telegram): enhance richMessages config help text with troubleshooting guidance
