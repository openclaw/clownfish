---
repo: openclaw/openclaw
cluster_id: gitcrawl-415-small-dedupe-wave
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
  - "#38439"
candidates:
  - "#38439"
  - "#41201"
cluster_refs:
  - "#38439"
  - "#41201"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #38439 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 415 on 2026-06-19."
---

# Gitcrawl Cluster 415

Generated from local gitcrawl run cluster 415 for `openclaw/openclaw`.

Display title:

> [Bug] Webchat avatar endpoint /avatar/{agentId} returns 404 even with valid IDENTITY.md avatar

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #38439, currently open in local store
- latest member update: 2026-06-19T02:13:00.664719Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38439 [Bug] Webchat avatar endpoint /avatar/{agentId} returns 404 even with valid IDENTITY.md avatar
- #41201 [Bug]: Control UI Avatar not displaying (broken image)
