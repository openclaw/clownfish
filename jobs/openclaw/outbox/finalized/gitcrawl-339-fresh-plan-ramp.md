---
repo: openclaw/openclaw
cluster_id: gitcrawl-339-fresh-plan-ramp
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
canonical:
  - "#92816"
candidates:
  - "#92816"
cluster_refs:
  - "#92816"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92831"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #92816 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 339 on 2026-06-17. Existing-overlap refs #92831 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 339

Generated from local gitcrawl run cluster 339 for `openclaw/openclaw`.

Display title:

> [Bug]: 当tts设置为always时，cron会投递失败，但是结果会显示已投递

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #92831
- representative: #92816, currently open in local store
- latest member update: 2026-06-15T19:04:12.6142Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92816 [Bug]: 当tts设置为always时，cron会投递失败，但是结果会显示已投递

Existing-overlap context refs:

- #92831 fix(qqbot): honor durable media roots for cron TTS
