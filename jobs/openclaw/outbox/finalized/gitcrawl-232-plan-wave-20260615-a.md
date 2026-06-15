---
repo: openclaw/openclaw
cluster_id: gitcrawl-232-plan-wave-20260615-a
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
  - "#91723"
candidates:
  - "#90398"
  - "#91723"
  - "#91729"
cluster_refs:
  - "#90398"
  - "#91723"
  - "#91729"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #91723 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 232 on 2026-06-15."
---

# Gitcrawl Cluster 232

Generated from local gitcrawl run cluster 232 for `openclaw/openclaw`.

Display title:

> msteams: streaming double-posts replies over 4000 chars after SDK rebase (#76262 regressed #59297)

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #91723, currently open in local store
- latest member update: 2026-06-14T04:46:04.810802Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90398 [Bug]: Teams streaming delivers normal-length replies twice in 2026.5.28
- #91723 msteams: streaming double-posts replies over 4000 chars after SDK rebase (#76262 regressed #59297)
- #91729 fix(msteams): trim streamed prefix in long-reply fallback to stop >4000-char double-post (regressed #59297 in #76262)
