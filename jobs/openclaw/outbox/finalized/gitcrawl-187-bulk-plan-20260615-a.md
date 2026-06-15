---
repo: openclaw/openclaw
cluster_id: gitcrawl-187-bulk-plan-20260615-a
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
  - "#43935"
candidates:
  - "#43935"
  - "#90865"
cluster_refs:
  - "#43935"
  - "#90865"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#43938"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #43935 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 187 on 2026-06-15. Existing-overlap refs #43938 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 187

Generated from local gitcrawl run cluster 187 for `openclaw/openclaw`.

Display title:

> Gateway: account-scoped channel config changes restart the entire channel and can disrupt active traffic

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #43938
- representative: #43935, currently open in local store
- latest member update: 2026-06-14T04:46:05.219923Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #43935 Gateway: account-scoped channel config changes restart the entire channel and can disrupt active traffic
- #90865 Discord plugin: channels added to channels.discord.guilds.*.channels.* post-startup are never subscribed (requires full gateway restart)

Existing-overlap context refs:

- #43938 fix(gateway): use account-scoped reload for channel account changes
