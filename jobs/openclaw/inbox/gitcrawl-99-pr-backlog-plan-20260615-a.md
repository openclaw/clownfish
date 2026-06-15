---
repo: openclaw/openclaw
cluster_id: gitcrawl-99-pr-backlog-plan-20260615-a
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
canonical: []
candidates:
  - "#9835"
  - "#83164"
  - "#83169"
  - "#83611"
cluster_refs:
  - "#9835"
  - "#83164"
  - "#83169"
  - "#83611"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#47677"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#83169"
canonical_hint: "gitcrawl representative #47677 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 99 on 2026-06-15. Security-signal refs #83169 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #47677 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 99

Generated from local gitcrawl run cluster 99 for `openclaw/openclaw`.

Display title:

> Feature request: first-class Telegram reaction triggers for agent wake-up and execution

Cluster shape from gitcrawl:

- total members: 5
- issues: 3
- pull requests: 2
- open candidates in local store: 4
- excluded existing-overlap refs: #47677
- security-signal refs requiring route_security: #83169
- representative: #47677, currently open in local store
- latest member update: 2026-06-14T04:46:07.406206Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #9835 Feature: Telegram Reactions - Two-Way Support with Prompt Guidance
- #83164 Discord reaction-only inputs should wake the agent
- #83169 [security-signal] Discord: add reaction notification wake policy
- #83611 feat: add shared notification wake policy

Existing-overlap context refs:

- #47677 Feature request: first-class Telegram reaction triggers for agent wake-up and execution
