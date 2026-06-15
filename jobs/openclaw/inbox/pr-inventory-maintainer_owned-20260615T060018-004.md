---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T060018-004
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
  - maintainer_signal
  - active_author_followup
  - technical_correctness_judgment
canonical: []
candidates:
  - "#73403"
  - "#73606"
  - "#73724"
  - "#74041"
  - "#74176"
  - "#74402"
  - "#75614"
  - "#76027"
  - "#76115"
  - "#76221"
cluster_refs:
  - "#73403"
  - "#73606"
  - "#73724"
  - "#74041"
  - "#74176"
  - "#74402"
  - "#75614"
  - "#76027"
  - "#76115"
  - "#76221"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.659Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 4

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #73403 fix(agent): route explicit channel targets per recipient

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, agents, maintainer, size: S, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #41483 by deriving per-recipient agent session keys for `openclaw agent --agent ... --channel ... --to ...` instead of falling back to `agent:<id>:main`. - Preserves the existing #60614 behavior where `--session-id` takes precedence over the

### #73606 docs(rfd): @openclaw/call-sdk — provider-agnostic real-time call SDK

- bucket: maintainer_owned
- author: visionik
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:23:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds an RFC + two companion design docs proposing **`@openclaw/call-sdk`** — a provider-agnostic real-time call SDK — and its binding into OpenClaw's `ChannelPlugin` model. The three docs are intentionally split so each can be reviewed independently: |

### #73724 fix(cli): avoid false local gateway unreachable on probe timeout

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, cli, commands, maintainer, size: XL, clawsweeper, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:23:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - separate local gateway reachability from follow-up detail/read probe failures - add a bounded direct status-RPC fallback or degraded classification for local status/probe paths when the default probe times out or returns unknown capability but the

### #74041 [codex] Route generated media through assistant delivery

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, agents, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:23:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove the async media completion direct-send path and its `tools.media.asyncCompletion.directSend` config surface - keep async music/video completion as a requester-session wake so the assistant receives the generated paths and owns the follow-up

### #74176 feat(telegram): support mini app URL buttons

- bucket: maintainer_owned
- author: obviyus
- author association: MEMBER
- draft: no
- assignees: obviyus
- labels: docs, channel: telegram, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:23:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reuse shared presentation URL buttons in Telegram inline keyboards. - Render direct-chat HTTPS presentation buttons as Telegram Mini App web_app buttons. - Document the Telegram HTTPS, private-chat, and initData constraints. ## Validation - pnpm t

### #74402 fix(agents): route async media completions through wake media

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:24:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop async media completion wakes from instructing the parent to call the message tool - rely on structured media carried by the wake, with MEDIA lines only as fallback - assert fallback instructions no longer mention message-tool delivery or NO_R

### #75614 docs: consolidate remote testing around Crabbox

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:24:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #76027 [codex] feat(webchat): add gateway read aloud

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a Control UI/WebChat assistant Read aloud action backed by the existing `tts.convert` Gateway RPC - play returned audio through the authenticated assistant-media route, so configured `messages.tts` providers are used instead of browser speech 

### #76115 fix(diagnostics): experiment with stuck session aborts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:24:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds experimental `diagnostics.stuckSessionAbortMs` for a second-stage stalled/stuck recovery threshold. - Keeps warn-threshold recovery observe-only for active work, but lets the longer experimental threshold abort active embedded reply work or r

### #76221 [codex] Fix Anthropic Vertex npm audit regression

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, maintainer, size: M, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:24:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove the `@anthropic-ai/vertex-sdk` runtime dependency from the shipped OpenClaw package - replace it with a small local Anthropic Vertex client built on the existing `@anthropic-ai/sdk` and `google-auth-library@10.6.2` - update the lockfile so 

