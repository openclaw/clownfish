---
repo: openclaw/openclaw
cluster_id: gitcrawl-102-bulk-plan-20260615-a
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
  - "#87923"
candidates:
  - "#87923"
  - "#87925"
  - "#91913"
  - "#92002"
  - "#92200"
cluster_refs:
  - "#87923"
  - "#87925"
  - "#91913"
  - "#92002"
  - "#92200"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92002"
canonical_hint: "gitcrawl representative #87923 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 102 on 2026-06-15. Security-signal refs #92002 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 102

Generated from local gitcrawl run cluster 102 for `openclaw/openclaw`.

Display title:

> fix(thinking): keep explicit session thinkingLevel when runtime downgrades (#87740)

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 5
- security-signal refs requiring route_security: #92002
- representative: #87923, currently open in local store
- latest member update: 2026-06-14T04:46:06.67123Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87923 fix(thinking): keep explicit session thinkingLevel when runtime downgrades (#87740)
- #87925 thinkingLevel: model switch silently downgrades and persists an inherited explicit override
- #91913 openai-completions legacy path drops `compat.reasoningEffortMap` and `thinkLevel`; LM Studio binary-thinking models silently fall back to thinking-on
- #92002 [security-signal] fix(lmstudio): deliver thinking "off" to binary-thinking models
- #92200 fix(openai-completions): fallback to compat.reasoningEffortMap when thinkingLevelMap is unset (fixes #91913)
