---
repo: openclaw/openclaw
cluster_id: gitcrawl-140-bulk-plan-20260615-a
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
  - "#87151"
candidates:
  - "#87151"
  - "#90093"
  - "#90682"
  - "#92857"
cluster_refs:
  - "#87151"
  - "#90093"
  - "#90682"
  - "#92857"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#87151"
  - "#90682"
canonical_hint: "gitcrawl representative #87151 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 140 on 2026-06-15. Security-signal refs #87151, #90682 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 140

Generated from local gitcrawl run cluster 140 for `openclaw/openclaw`.

Display title:

> fix(openai-codex): omit encrypted reasoning replay for native responses

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 4
- security-signal refs requiring route_security: #87151, #90682
- representative: #87151, currently open in local store
- latest member update: 2026-06-14T04:46:04.645695Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87151 [security-signal] fix(openai-codex): omit encrypted reasoning replay for native responses
- #90093 openai-chatgpt-responses native replay sends encrypted reasoning and breaks next turn with invalid_encrypted_content
- #90682 [security-signal] fix(openai): preserve opaque reasoning transcript fields
- #92857 fix(openai): drop encrypted reasoning from history for Responses-family APIs (fixes #90093)
