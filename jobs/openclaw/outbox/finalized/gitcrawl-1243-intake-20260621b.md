---
repo: openclaw/openclaw
cluster_id: gitcrawl-1243-intake-20260621b
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
  - "#42351"
candidates:
  - "#42351"
cluster_refs:
  - "#42351"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92893"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #42351 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1243 on 2026-06-21. Existing-overlap refs #92893 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1243

Generated from local gitcrawl run cluster 1243 for `openclaw/openclaw`.

Display title:

> Gateway 重启 - 缺少 bot_p2p_chat_entered_v1 事件处理器

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #92893
- representative: #42351, currently open in local store
- latest member update: 2026-06-15T19:04:12.647591Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42351 Gateway 重启 - 缺少 bot_p2p_chat_entered_v1 事件处理器

Existing-overlap context refs:

- #92893 fix(feishu): ignore bot_p2p_chat_entered_v1 events to prevent gateway restarts (fixes #42351)
