---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-050
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
  - "#90069"
  - "#93292"
  - "#79148"
  - "#89792"
  - "#93277"
  - "#90542"
  - "#90577"
  - "#90618"
  - "#90625"
  - "#90626"
  - "#90636"
  - "#90637"
  - "#90641"
  - "#90661"
  - "#90740"
  - "#90770"
  - "#90779"
  - "#90817"
  - "#90827"
  - "#90828"
  - "#90887"
  - "#93299"
  - "#90561"
  - "#90867"
  - "#90932"
cluster_refs:
  - "#90069"
  - "#93292"
  - "#79148"
  - "#89792"
  - "#93277"
  - "#90542"
  - "#90577"
  - "#90618"
  - "#90625"
  - "#90626"
  - "#90636"
  - "#90637"
  - "#90641"
  - "#90661"
  - "#90740"
  - "#90770"
  - "#90779"
  - "#90817"
  - "#90827"
  - "#90828"
  - "#90887"
  - "#93299"
  - "#90561"
  - "#90867"
  - "#90932"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.797Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 50

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90069 docs: explain message tool turn termination

- bucket: needs_proof
- author: ffluk3
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T13:01:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Document that `visibleReplies: "message_tool"` maps to message-tool-only delivery. - Explain that successful implicit current-source `message(action="send")` calls terminate the turn. - Add sub-agent guidance to use explicit routing for intermediate

### #93292 feat(msteams): per-call topLevel override on send action for proactive new channel threads

- bucket: needs_proof
- author: leen109
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:05:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes the gap surfaced in #93288. ## Summary Adds a `topLevel: true` option to the msteams `message`/`send` action so the bot can post a fresh root post / new thread in a channel without flipping the static `channels.msteams.replyStyle` config (which is corre

### #79148 Respect configured inbound history cap

- bucket: needs_proof
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: S, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:10:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make inbound prompt history serialization use a caller-provided cap instead of the fixed 20-entry cap - pass the resolved group history limit from reply preparation, falling back to messages.groupChat.historyLimit - preserve Discord channel/accoun

### #89792 fix(gateway-client): unref WS socket in beginStop() to fix CLI hang (#88230)

- bucket: needs_proof
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:12:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw message send` hangs after successful delivery because the gateway client's WebSocket socket stays ref'd in the Node event loop. `beginStop()` calls `ws.close()` and starts the close handshake, but the underlying socket file descriptor rema

### #93277 [codex] Preserve Discord self-reply context

- bucket: needs_proof
- author: HaukeSchnau
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: M, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:14:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replace Discord self-reply preservation heuristics with an explicit OpenClaw reply-context marker on outbound cron notifications - record delivered Discord message IDs for marked payloads, then preserve only those bot-authored quote bodies when us

### #90542 fix(mentions): enforce scoped regex pattern allowlists

- bucket: needs_proof
- author: patrick-slimelab
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, channel: matrix, channel: slack, channel: telegram, channel: whatsapp-web, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:18:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Follow-up to #70864. ## Summary - Treat explicit provider `mentionPatterns.mode: "allow"` as an allowlist scoped by `allowIn` instead of enabling regex mention patterns everywhere except `denyIn`. - Preserve backward-compatible permissive behavior when no prov

### #90577 fix(ui): show session name in browser title

- bucket: needs_proof
- author: BSG2000
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:20:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Updates the Control UI browser tab title to include the active session name, for example `Release triage - OpenClaw Control`. - Keeps the static `OpenClaw Control` title when no session is selected. - Syncs the title when the active session change

### #90618 fix: recover stuck Control UI chat runs

- bucket: needs_proof
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, clawsweeper, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:22:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Repairs #42258 as the canonical fix path for #42213. - Keeps the stuck-run recovery scoped to the Control UI chat lifecycle and queued-message flush behavior. - Addresses hydrated Greptile findings: do not surface transient background probe failur

### #90625 docs: add supported iOS install path when public beta is full

- bucket: needs_proof
- author: tarsopsbot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: ios, size: XS, triage: needs-real-behavior-proof, P3, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T13:22:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Document the supported install path for the iOS node when the public beta or TestFlight capacity is full. Closes #90599 ## Changes - Add explicit wording to `docs/platforms/ios.md` stating that building the iOS app from source is the supported path

### #90626 fix(cron): default isolated agentTurn delivery to none, don't fail run on delivery error

- bucket: needs_proof
- author: olveww-dot
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: cli, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:22:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90378 Changes the default delivery mode for isolated `agentTurn` cron jobs from `"announce"` to `"none"`, and prevents delivery errors from failing the entire cron run. ## Problem When upgrading from 5.28 → 6.1, two issues cause cron jobs to

### #90636 fix(feishu): send p2p replies to user target

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:23:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - route Feishu p2p top-level replies through the sender `user:<open_id>` target instead of the p2p `oc_*` chat id - keep typing and reply-to lifecycle tied to the inbound message while suppressing reply metadata for DM sends - add regression coverag

### #90637 fix(nextcloud-talk): ignore signed non-message webhooks

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: nextcloud-talk, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:23:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - distinguish malformed webhook JSON / malformed supported Note payloads from signed Activity Streams events that are not chat messages - acknowledge signed non-message Talk events with 200 without dispatching them to the bot - add a signed Document

### #90641 fix(compaction): preserve assistant boundary replies

- bucket: needs_proof
- author: leno23
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:24:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve the summarized assistant reply immediately before a surviving pre-compaction user message when writing successor transcripts - move the successor compaction replay boundary to that preserved assistant so agent context stays `summary -> as

### #90661 feat(gateway): add controlUi.timezone for Control UI timestamp rendering

- bucket: needs_proof
- author: RishabhKodes
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:25:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** Control UI formats all timestamps client-side using browser-local `Date.toLocaleString()` APIs. Browsers with fingerprinting protection (hardened Firefox, Tor-derived configs) report UTC instead of the user's actual timezone. Chat tim

### #90740 Implement durable system-event fallback for subagent completion when handoff is still pending

- bucket: needs_proof
- author: bradfreels
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:28:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Replace the give-up branch in `subagent-announce-delivery.ts` (when the direct subagent-announce handoff fires `completion_handoff_pending`) with a durable fallback that enqueues the completion trigger into the requester's in-process system-event in

### #90770 fix(ui): thread agent scope through Skill Workshop proposals

- bucket: needs_proof
- author: joelnishanth
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:31:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Fix:** Skill Workshop GUI shows no proposals when using a non-default agent, while CLI `openclaw skills workshop --agent <id> list` works correctly - **Root cause:** `loadSkillWorkshopProposals` called `skills.proposals.list` with `{}` (no `agen

### #90779 fix(channels): restart gateway when channels.start fails for unloaded plugin

- bucket: needs_proof
- author: joelnishanth
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:31:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #90296 After `openclaw channels login --channel <plugin-channel>`, the CLI calls `channels.start` to reconcile the running gateway. If the channel plugin was installed or enabled **after** the gateway started, the plugin is not in the gateway'

### #90817 fix(agents): apply stale-run liveness check to aborted subagent orphan recovery

- bucket: needs_proof
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:32:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix #90766: stale subagent runs (>2h) with `abortedLastRun: true` were exempt from stale-unended pruning, causing very old aborted child sessions to be resurrected after long gateway downtime. Changes: - **`subagent-registry-helpers.ts`**: Remove th

### #90827 fix(memory-core): surface empty narrative generation instead of silent fallback (#90781)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:32:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Bug**: `memory-core` narrative generation logs a bare `WARN` ("produced no text") and silently writes a placeholder fallback diary entry whenever the subagent session returns no assistant text — operators cannot tell whether the model returned a

### #90828 fix(mac-gateway): route launchd plist stderr to log file instead of /dev/null (#90711)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:32:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - bug: post-5.28 generated `~/Library/LaunchAgents/ai.openclaw.gateway.plist` hardcoded `StandardErrorPath` to `/dev/null`, silently discarding all gateway stderr (prompt-cache diagnostics, model fallback warnings, liveness warnings) - fix: drop the

### #90887 fix(cron): route failure alerts to thread ids

- bucket: needs_proof
- author: azhangd
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, agents, size: L, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:34:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #89848 by adding per-job `failureAlert.threadId` through cron schemas, CLI edit, storage, gateway send plumbing, and agent tool exposure. - Route announce failure alerts to the explicit thread id, or inherit the primary delivery thread only

### #93299 fix(daemon): prove Windows schtasks launch without foreground listener [AI]

- bucket: needs_proof
- author: LiuwqGit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:41:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix Windows Scheduled Task launch verification so an unrelated foreground gateway listener no longer suppresses the Startup-style fallback after `schtasks /Run`. - Tighten launch evidence to require the managed task script process or a process who

### #90561 fix(agents): harden subagent announce retry and error handling

- bucket: needs_proof
- author: FradSer
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, triage: mock-only-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:42:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Increase retry budget from 3 to 5 attempts with longer exponential backoff (up to 30s) - Extend announce expiry from 5min to 10min, completion hard expiry from 30min to 45min - Add jitter to retry delays to prevent thundering herd scenarios - Extr

### #90867 fix(auto-reply): warn when /export-session only contains user messages (backend-delegated)

- bucket: needs_proof
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:44:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a session is driven by a CLI/ACP backend (e.g. Claude Code CLI), OpenClaw's own transcript only records the inbound user messages. `/export-session` would still produce a "successful" HTML export with empty summary stats and no assistant/tool/u

### #90932 fix(ui): scope local assistant avatar override to agent ID (fixes #90890)

- bucket: needs_proof
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T13:46:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Local assistant avatar overrides were stored under a single global `localStorage` key (`openclaw.control.assistant.v1`), so setting an avatar for one agent changed it for all agents. This PR scopes the override to the current agent ID and preserves
