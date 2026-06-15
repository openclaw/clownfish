---
repo: openclaw/openclaw
cluster_id: gitcrawl-165-bulk-plan-20260615-a
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
  - "#73032"
candidates:
  - "#71195"
  - "#73019"
  - "#73032"
  - "#91308"
cluster_refs:
  - "#71195"
  - "#73019"
  - "#73032"
  - "#91308"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#73019"
  - "#91308"
canonical_hint: "gitcrawl representative #73032 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 165 on 2026-06-15. Security-signal refs #73019, #91308 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 165

Generated from local gitcrawl run cluster 165 for `openclaw/openclaw`.

Display title:

> feat(voiceclaw-realtime): add xAI Realtime Voice Agent provider (closes #73019)

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- security-signal refs requiring route_security: #73019, #91308
- representative: #73032, currently open in local store
- latest member update: 2026-06-14T04:46:07.246358Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71195 feat(talk/macOS): add OpenAI Realtime (speech-to-speech) path for Talk Mode — parity with the voice-call plugin's phone experience
- #73019 [security-signal] Proposal: Add xAI Realtime Voice Agent support to /voiceclaw/realtime via shared OpenAI-Realtime-protocol adapter
- #73032 feat(voiceclaw-realtime): add xAI Realtime Voice Agent provider (closes #73019)
- #91308 [security-signal] feat(xai): add realtime voice provider
