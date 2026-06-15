---
repo: openclaw/openclaw
cluster_id: gitcrawl-85-bulk-plan-20260615-a
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
  - "#79200"
candidates:
  - "#74164"
  - "#74169"
  - "#79182"
  - "#79200"
cluster_refs:
  - "#74164"
  - "#74169"
  - "#79182"
  - "#79200"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#42820"
  - "#53641"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#79200"
canonical_hint: "gitcrawl representative #79200 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 85 on 2026-06-15. Security-signal refs #79200 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #42820, #53641 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 85

Generated from local gitcrawl run cluster 85 for `openclaw/openclaw`.

Display title:

> feat(cli): add --message-file flag to openclaw message send

Cluster shape from gitcrawl:

- total members: 6
- issues: 4
- pull requests: 2
- open candidates in local store: 4
- excluded existing-overlap refs: #42820, #53641
- security-signal refs requiring route_security: #79200
- representative: #79200, currently open in local store
- latest member update: 2026-06-14T04:46:06.58007Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74164 [Bug]: OpenClaw send message with big file via wecom show gateway timeout after 10000ms
- #74169 fix: increase default gateway call timeout from 10000ms to 15000ms
- #79182 feat: openclaw message send --message-file <path>
- #79200 [security-signal] feat(cli): add --message-file flag to openclaw message send

Existing-overlap context refs:

- #42820 message tool: Feishu send action polluted by poll schema/guard prevents file send
- #53641 [Bug]: Discord message.send silently drops attachments while returning success/message id
