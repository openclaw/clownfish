---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-029
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
  - "#66067"
  - "#66098"
  - "#72677"
  - "#73462"
  - "#74643"
  - "#75918"
  - "#76020"
  - "#76445"
  - "#76614"
  - "#76634"
  - "#76646"
  - "#76732"
  - "#76922"
  - "#76928"
  - "#76941"
  - "#76975"
  - "#77109"
  - "#77318"
  - "#77361"
  - "#77415"
  - "#77442"
  - "#77445"
  - "#77513"
  - "#77540"
  - "#77549"
cluster_refs:
  - "#66067"
  - "#66098"
  - "#72677"
  - "#73462"
  - "#74643"
  - "#75918"
  - "#76020"
  - "#76445"
  - "#76614"
  - "#76634"
  - "#76646"
  - "#76732"
  - "#76922"
  - "#76928"
  - "#76941"
  - "#76975"
  - "#77109"
  - "#77318"
  - "#77361"
  - "#77415"
  - "#77442"
  - "#77445"
  - "#77513"
  - "#77540"
  - "#77549"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.792Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 29

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #66067 fix(tui): preserve spaces between thinking fragments

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: streamed thinking fragments were joined with single newlines, and the TUI markdown renderer collapsed those boundaries so adjacent sentences appeared smushed together - Why it matters: reasoning output in the terminal became hard to read

### #66098 fix(web-ui): respect effective chat defaults

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:44:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the Web UI only looked at persisted session overrides, so a new session could already be running with effective thinking/reasoning defaults while the chat header still rendered the fallback model label or hid reasoning incorrectly - Why i

### #72677 fix(cron): warn on main heartbeat handoff ghost runs

- bucket: needs_proof
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: matrix, app: web-ui, gateway, scripts, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:45:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #63106. ## Summary - Add a scoped warning for fast successful main-session `systemEvent` cron jobs using `wakeMode="next-heartbeat"`. - Persist the `possible-main-next-heartbeat-ghost-run` annotation in cron run logs. - Carry and render cron run-log warn

### #73462 fix: add auth profile listing

- bucket: needs_proof
- author: ishangodawatta
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:46:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw auth list` is currently unavailable for users trying to inspect saved model auth profiles. - Why it matters: scripts and troubleshooting flows need a read-only way to confirm configured auth profile ids without reading `auth-pro

### #74643 config: accept per-agent verboseDefault and elevatedDefault overrides (#73680)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:46:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `AgentEntrySchema` (per-agent `agents.list[]` shape) accepts `thinkingDefault`, `reasoningDefault`, and `fastModeDefault` per-agent, but does not declare `verboseDefault` or `elevatedDefault`. The runtime resolver chain already reads both

### #75918 feat(hooks): add persistent hook session mode

- bucket: needs_proof
- author: ryanrhughes
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, agents, size: L, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T19:46:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Revives the persistent hook-session work from the stale/closed #27193 against current `main`. Adds an explicit `sessionMode: "isolated" | "persistent"` option for hook-agent runs so webhook integrations with stable, scoped `sessionKey` values can op

### #76020 feat(feishu): add topicRequireMention for topic thread mention control

- bucket: needs_proof
- author: symonbaikov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:46:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Problem: requireMention in Feishu groups applies equally to normal group messages and topic thread replies, with no way to separate the two. Users who want to require @mention for new conversations but allow free replies inside started threads cannot

### #76445 Fix/cron duplicate name validation

- bucket: needs_proof
- author: habib-agentic-engineer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:48:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #76160 \`openclaw cron add\` and \`cron edit\` now enforce unique job names, preventing silent duplicate-name acceptance that could lead to dual-fire risk when both jobs remain enabled. ## Problem Previously, the cron service silently accepted jobs with

### #76614 fix(zalouser): surface send errors and recover from oversized style payloads

- bucket: needs_proof
- author: vinhnguyenthanhdn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalouser, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:48:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## TL;DR Zalo delivery failures were completely invisible: the monitor never checked send results, error codes were lost, and messages silently disappeared when styled payloads exceeded Zalo's size limit. --- ## Problem Three compounding gaps caused messages t

### #76634 fix(mattermost): resolve reply root before sending thread replies

- bucket: needs_proof
- author: AlfredIrving
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:48:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - resolve Mattermost replyTo post IDs before using them as root_id - map child reply posts to their actual thread root - avoid sending stale or cross-channel replyTo IDs as root_id - add Mattermost send tests for child roots, top-level roots, cross-

### #76646 fix(ui): make dreams diary day chips sticky to prevent scroll-away on long entries

- bucket: needs_proof
- author: Thatgfsj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:48:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #76638 — when a diary entry had long content (10+ paragraphs), the day-chip navigation bar at the top would be pushed out of the viewport, making it impossible to switch between dates. ## Root cause `.dreams-diary__daychips` used `position: re

### #76732 fix: prune all history images when current turn has fresh attachments

- bucket: needs_proof
- author: Clausinho
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:49:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When sending a new image for analysis, stale image data from previous conversation turns can contaminate the model's interpretation of the current image. Reported in #66702. ## Solution - Add `HistoryImagePruneOptions` interface with `preserveRecent

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

### #77109 fix(feishu): handle empty message content safely

- bucket: needs_proof
- author: Thiagocsoaresbh
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: XS, triage: needs-real-behavior-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:51:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Feishu group or direct message events can arrive with runtime-missing `message.content`, especially around empty or mention-only messages. - Why it matters: Some Feishu message paths assumed content was always a string and could call `.re

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
