---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-048
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
  - "#76732"
  - "#76843"
  - "#76909"
  - "#76922"
  - "#76928"
  - "#76941"
  - "#76975"
  - "#77006"
  - "#77109"
  - "#77211"
  - "#77225"
  - "#77229"
  - "#77318"
  - "#77361"
  - "#77415"
  - "#77442"
  - "#77445"
  - "#77505"
  - "#77513"
  - "#77540"
  - "#77549"
  - "#77639"
  - "#77690"
  - "#77748"
  - "#93056"
cluster_refs:
  - "#76732"
  - "#76843"
  - "#76909"
  - "#76922"
  - "#76928"
  - "#76941"
  - "#76975"
  - "#77006"
  - "#77109"
  - "#77211"
  - "#77225"
  - "#77229"
  - "#77318"
  - "#77361"
  - "#77415"
  - "#77442"
  - "#77445"
  - "#77505"
  - "#77513"
  - "#77540"
  - "#77549"
  - "#77639"
  - "#77690"
  - "#77748"
  - "#93056"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.204Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 48

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #76732 fix: prune all history images when current turn has fresh attachments

- bucket: needs_proof
- author: Clausinho
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:49:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When sending a new image for analysis, stale image data from previous conversation turns can contaminate the model's interpretation of the current image. Reported in #66702. ## Solution - Add `HistoryImagePruneOptions` interface with `preserveRecent

### #76843 docs: document Docker migration workflow and local overlay

- bucket: needs_proof
- author: AbdullahFageeh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, docker, size: S, triage: low-signal-docs, triage: docs-discoverability, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:49:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the repo root README did not summarize the Docker setup and migration flow, and this migrated setup also depended on a local Docker overlay for absolute-path compatibility. - Why it matters: it makes the Docker migration path discoverable

### #76909 feat(plugins): add system-tier plugin discovery for machine-wide policy  enforcement"

- bucket: needs_proof
- author: amirkutcher
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:49:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a new `"system"` plugin origin loaded from a machine-wide directory (`/etc/openclaw/plugins` on Linux/Mac, `%ProgramData%\OpenClaw\plugins` on Windows) - System plugins are immune to user config (deny/allow lists, per-entry disable, global to

### #76922 fix(cli): exit after hooks inspection output

- bucket: needs_proof
- author: dorukardahan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:50:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - port #70255 onto current main - keep hooks list/info/check/enable/disable and bare `hooks` as one-shot CLI commands - keep relay plus deprecated install/update behavior unchanged - add the missing changelog entry ## Why Plugin diagnostics can load

### #76928 feat(plugins): let hooks prefer auth profiles

- bucket: needs_proof
- author: dorukardahan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:50:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `authProfileOverride` to model-resolve hook results alongside provider/model overrides - keep explicit user-pinned auth profiles protected from hook rotation - preserve legacy auto auth-profile markers through queued follow-up runs so they do 

### #76941 Fix external channel follow-up transcript continuity

- bucket: needs_proof
- author: ericksoninco
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:50:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Route external delivery-channel messages that arrive during a streaming run through the follow-up queue instead of live embedded steering. - Preserve live embedded steering for the internal webchat surface. - Add a regression test for Telegram-sty

### #76975 fix(telegram): allow callback acknowledgement text

- bucket: needs_proof
- author: hyspacex
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:50:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add optional `channels.telegram.callbackAck` config for Telegram inline keyboard callbacks - Pass configured ack text immediately to `answerCallbackQuery` as a Telegram toast, with optional `showAlert` - Document the new config and add regression 

### #77006 fix(acpx): allow explicit Codex home override

- bucket: needs_proof
- author: NikolaFC
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, extensions: acpx, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:50:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add ACPX `codexHome` config plus `OPENCLAW_ACPX_CODEX_HOME` env override for the Codex ACP wrapper - keep the existing isolated `CODEX_HOME` default when no override is configured - document the override in the ACP router skill and plugin manifest

### #77109 fix(feishu): handle empty message content safely

- bucket: needs_proof
- author: Thiagocsoaresbh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:51:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu group or direct message events can arrive with runtime-missing `message.content`, especially around empty or mention-only messages. - Why it matters: Some Feishu message paths assumed content was always a string and could call `.re

### #77211 fix(telegram): preserve default tool progress when preview streaming is off

- bucket: needs_proof
- author: kevinlasnh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:52:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop suppressing default tool progress messages when Telegram preview streaming is disabled. - Continue suppressing default progress while an answer draft stream exists, avoiding duplicate progress messages during active previews. - Update the Tel

### #77225 feat(sessions): auto-generate session titles via AI summarization

- bucket: needs_proof
- author: zhanggttry
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, triage: dirty-candidate, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:52:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Auto-generate session titles via AI summarization after a configurable number of turns. ## Real behavior proof **Behavior or issue addressed**: Sessions default to truncated first-user-message titles, which are often unhelpful. After N turns, a ligh

### #77229 fix(acp): keep ACP bridge off stale paired gateway-client baseline (#74650)

- bucket: needs_proof
- author: adhirajhangal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:52:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Root cause `src/acp/server.ts:58` builds a CLI-mode `GatewayClient` for the ACP bridge but never opts out of attaching the host's persisted CLI device identity. On hosts where that paired identity has a lower scope than the Gateway expects for ACP, the clie

### #77318 fix(loop-detection): block run-scoped consecutive cross-tool error cascades

- bucket: needs_proof
- author: Shockang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:53:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a run-scoped consecutive cross-tool error detector to tool loop detection - keep the change scoped to runtime behavior, diagnostics, tests, changelog, and loop-detection docs - exclude the later review-only follow-up fixes so this PR stays nar

### #77361 fix(barnacle): resync candidate labels on ready_for_review, remove stale labels

- bucket: needs_proof
- author: dchekmarev
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, clawsweeper:automerge, clawsweeper:human-review, triage: needs-real-behavior-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 automation, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-14T19:54:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Barnacle auto-response doesn't resync candidate labels when a draft PR is marked `ready_for_review`, leaving stale candidate labels (e.g. `triage: blank-template`) on PRs with meaningful bodies. - Why it matters: Draft PRs auto-labeled wi

### #77415 fix(subagents): report startup and completion lifecycle edges

- bucket: needs_proof
- author: neilofneils404
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:55:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - tighten subagent completion announce cleanup so late completion paths do not race cleanup - emit first-progress/startup-failed lifecycle signals for embedded subagent startup - cover startup failure/progress paths in subagent lifecycle and PI embe

### #77442 fix(session): persist delivery context for inbound non-direct sessions

- bucket: needs_proof
- author: Beandon13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:55:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Persist inbound delivery context for non-direct sessions even when callers omit `updateLastRoute`. - Derive the fallback route from inbound context (`OriginatingChannel`, `OriginatingTo`, `Provider`/`Surface`, plus `AccountId` and `MessageThreadId

### #77445 fix(agents): persist delivered assistant text [AI]

- bucket: needs_proof
- author: sercada
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:56:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: tool-using embedded-agent turns can deliver final assistant text through `assistantTexts` without a matching durable assistant text message. - Why it matters: the next user turn can lose the answer the user already saw, so transcript cont

### #77505 [codex] feat(ui): render HTML assistant responses in sandboxed iframe

- bucket: needs_proof
- author: wolph
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:56:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Complete assistant-generated HTML documents now render in Control UI chat as sandboxed previews instead of raw inline markup. The source stays available in a disclosure, and expanded tool-result HTML uses the same preview path. AI-assisted by Codex 

### #77513 [codex] fix(telegram): sync native commands to private and group scopes [AI]

- bucket: needs_proof
- author: wolph
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T19:56:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Telegram native slash-command menus are now synced and cleared for default, private-chat, and group-chat scopes. This prevents private chats from retaining stale command menus when the bot updates or disables native commands. AI-assisted by Codex GP

### #77540 perf(gateway): cache session, node, and cron list lookups

- bucket: needs_proof
- author: NikolaFC
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, triage: dirty-candidate, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:57:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a short-lived cache for `sessions.list` results and manifest normalization lookups - coalesce session-list cache fills and invalidate on session mutations/events - add short-lived cache/coalescing for `node.list` / `node.describe` pairing-list

### #77549 Improve hosted Docker runtime baseline

- bucket: needs_proof
- author: robbybuilds
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: telegram, app: web-ui, scripts, commands, docker, agents, size: XL, triage: dirty-candidate, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:57:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - improve the hosted Docker runtime baseline with Python/pip/venv, common CLI tools, writable npm/pip homes, and optional browser/Docker-CLI build args - add hosted runtime guards for Docker deployments: disable mDNS/Bonjour, lenient channel config 

### #77639 fix(discord): reset custom trigger sessions safely

- bucket: needs_proof
- author: yfge
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:58:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - emit reset hooks for matched custom resetTriggers like `!new` / `!reset` instead of only slash commands - rotate generated/default reset transcripts to the new session id while preserving only validated explicit `sessionFile` paths - add regressio

### #77690 [codex] Fix WebChat agent default model label

- bucket: needs_proof
- author: hyspacex
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:58:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Resolve the WebChat model selector's `Default (...)` label from the active agent's configured primary model before falling back to session/global defaults. - Keep the active-session row fallback for default-selected sessions when the agents list has 

### #77748 fix: Codex startup plugins + WhatsApp history & Docker Codex OAuth

- bucket: needs_proof
- author: markmhendrickson
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, scripts, docker, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:00:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Two related fixes for **Docker + Codex** operation and **WhatsApp** agents: 1. **Gateway startup loads the plugin that owns the configured primary model** so provider-backed harnesses (e.g. Codex) register **before** channels start handling traffic.

### #93056 fix(agents): sync stale this.model snapshot after /model switch

- bucket: needs_proof
- author: samson910022
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:05:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #92415 — AgentSession.this.model goes stale when /model switch writes to session store but the in-memory session never re-reads it. ## Root Cause pplyModelOverrideToSessionEntry() in model-overrides.ts writes a providerOverride/modelOverride 

