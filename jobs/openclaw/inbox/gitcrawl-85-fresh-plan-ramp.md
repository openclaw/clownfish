---
repo: openclaw/openclaw
cluster_id: gitcrawl-85-fresh-plan-ramp
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
  - "#42820"
  - "#79182"
cluster_refs:
  - "#42820"
  - "#79182"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#53641"
  - "#74164"
  - "#74169"
  - "#79200"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #79200 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 85 on 2026-06-17. Existing-overlap refs #53641, #74164, #74169, #79200 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 85

Generated from local gitcrawl run cluster 85 for `openclaw/openclaw`.

Display title:

> feat(cli): add --message-file flag to openclaw message send

Cluster shape from gitcrawl:

- total members: 6
- issues: 4
- pull requests: 2
- open candidates in local store: 2
- excluded existing-overlap refs: #53641, #74164, #74169, #79200
- representative: #79200, currently open in local store
- latest member update: 2026-06-15T19:04:12.640283Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42820 message tool: Feishu send action polluted by poll schema/guard prevents file send
- #79182 feat: openclaw message send --message-file <path>

Existing-overlap context refs:

- #53641 [Bug]: Discord message.send silently drops attachments while returning success/message id
- #74164 [Bug]: OpenClaw send message with big file via wecom show gateway timeout after 10000ms
- #74169 fix: increase default gateway call timeout from 10000ms to 15000ms
- #79200 [security-signal] feat(cli): add --message-file flag to openclaw message send
