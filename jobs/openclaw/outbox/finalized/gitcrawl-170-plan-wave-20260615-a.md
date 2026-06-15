---
repo: openclaw/openclaw
cluster_id: gitcrawl-170-plan-wave-20260615-a
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
  - "#87213"
candidates:
  - "#61009"
  - "#87213"
  - "#87236"
  - "#92141"
cluster_refs:
  - "#61009"
  - "#87213"
  - "#87236"
  - "#92141"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #87213 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 170 on 2026-06-15."
---

# Gitcrawl Cluster 170

Generated from local gitcrawl run cluster 170 for `openclaw/openclaw`.

Display title:

> [Bug]: exec(host=node) rejects same node when bound and requested selectors differ

Cluster shape from gitcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 4
- representative: #87213, currently open in local store
- latest member update: 2026-06-14T04:46:06.891741Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #61009 [Bug]: docs/tools/exec says host=node override is allowed from auto, but runtime rejects it
- #87213 [Bug]: exec(host=node) rejects same node when bound and requested selectors differ
- #87236 fix(exec): canonicalize bound vs requested node selectors before rejecting host=node (#87213)
- #92141 [Bug]: WebChat/OpenAI Codex session does not expose host=node exec despite connected Windows node
