---
repo: openclaw/openclaw
cluster_id: gitcrawl-1050-small-dedupe-wave
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
  - "#92141"
candidates:
  - "#61009"
  - "#87213"
  - "#92141"
cluster_refs:
  - "#61009"
  - "#87213"
  - "#92141"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #92141 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1050 on 2026-06-19."
---

# Gitcrawl Cluster 1050

Generated from local gitcrawl run cluster 1050 for `openclaw/openclaw`.

Display title:

> [Bug]: WebChat/OpenAI Codex session does not expose host=node exec despite connected Windows node

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #92141, currently open in local store
- latest member update: 2026-06-19T02:13:00.151327Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #61009 [Bug]: docs/tools/exec says host=node override is allowed from auto, but runtime rejects it
- #87213 [Bug]: exec(host=node) rejects same node when bound and requested selectors differ
- #92141 [Bug]: WebChat/OpenAI Codex session does not expose host=node exec despite connected Windows node
