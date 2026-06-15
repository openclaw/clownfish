---
repo: openclaw/openclaw
cluster_id: gitcrawl-120-plan-ramp
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
  - "#85846"
candidates:
  - "#85846"
  - "#85847"
  - "#85932"
  - "#86285"
  - "#90749"
cluster_refs:
  - "#85846"
  - "#85847"
  - "#85932"
  - "#86285"
  - "#90749"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #85846 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 120 on 2026-06-14."
---

# Gitcrawl Cluster 120

Generated from local gitcrawl run cluster 120 for `openclaw/openclaw`.

Display title:

> [voice-call] OpenAI realtime: outbound calls greet caller twice — `triggerGreeting` + `server_vad.create_response` both fire `response.create`

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 5
- representative: #85846, currently open in local store
- latest member update: 2026-06-14T04:46:07.081026Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #85846 [voice-call] OpenAI realtime: outbound calls greet caller twice — `triggerGreeting` + `server_vad.create_response` both fire `response.create`
- #85847 [voice-call] First-turn latency degraded by ~2-3s: realtime provider WebSocket opens on Twilio Media Stream upgrade, not during TwiML webhook
- #85932 fix(voice-call): suppress duplicate OpenAI initial greeting (#85846)
- #86285 fix(voice-call): avoid OpenAI realtime double greeting
- #90749 Fix realtime voice-call barge-in cancellation
