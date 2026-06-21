---
repo: openclaw/openclaw
cluster_id: gitcrawl-1240-intake-20260621
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
  - "#92827"
candidates:
  - "#92827"
cluster_refs:
  - "#92827"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92872"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #92827 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1240 on 2026-06-21. Existing-overlap refs #92872 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1240

Generated from local gitcrawl run cluster 1240 for `openclaw/openclaw`.

Display title:

> [Bug]: 如果启用沙箱，agent无法将文件发送到webchat和QQBot

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #92872
- representative: #92827, currently open in local store
- latest member update: 2026-06-19T02:13:01.177688Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92827 [Bug]: 如果启用沙箱，agent无法将文件发送到webchat和QQBot

Existing-overlap context refs:

- #92872 [security-signal] fix(qqbot): allow scoped sandbox media sends
