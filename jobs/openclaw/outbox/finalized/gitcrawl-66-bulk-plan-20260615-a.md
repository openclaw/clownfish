---
repo: openclaw/openclaw
cluster_id: gitcrawl-66-bulk-plan-20260615-a
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
  - "#88548"
candidates:
  - "#72805"
  - "#72829"
  - "#88548"
  - "#91728"
  - "#91869"
  - "#91870"
  - "#91875"
cluster_refs:
  - "#72805"
  - "#72829"
  - "#88548"
  - "#91728"
  - "#91869"
  - "#91870"
  - "#91875"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#72829"
canonical_hint: "gitcrawl representative #88548 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 66 on 2026-06-15. Security-signal refs #72829 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 66

Generated from local gitcrawl run cluster 66 for `openclaw/openclaw`.

Display title:

> GitHub Copilot: static default model list shadows live entitlement discovery

Cluster shape from gitcrawl:

- total members: 7
- issues: 3
- pull requests: 4
- open candidates in local store: 7
- security-signal refs requiring route_security: #72829
- representative: #88548, currently open in local store
- latest member update: 2026-06-14T04:46:06.566555Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #72805 GitHub Copilot provider: add gpt-5.5 and claude-opus-4.7-1m-internal to default model list
- #72829 [security-signal] Fix/copilot default models gpt 5 5 opus 1m
- #88548 GitHub Copilot: static default model list shadows live entitlement discovery
- #91728 fix(github-copilot): prefer live model catalog
- #91869 GitHub Copilot: claude-opus-4.8 hard-coded to 128K context (native 1M) + missing thinking support
- #91870 fix(github-copilot): claude-opus-4.8 is native 1M context + thinking (not 128K)
- #91875 fix(github-copilot): claude-opus-4.8 context window to 1M with reasoning support
