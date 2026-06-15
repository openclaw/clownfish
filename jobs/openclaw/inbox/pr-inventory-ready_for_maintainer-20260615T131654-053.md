---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-053
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
  - "#88743"
  - "#92230"
  - "#92694"
  - "#92649"
  - "#92584"
  - "#92647"
  - "#92733"
  - "#92251"
  - "#90633"
  - "#92817"
  - "#88899"
  - "#88905"
  - "#88919"
  - "#88953"
  - "#88681"
  - "#88916"
  - "#91457"
  - "#92877"
  - "#92873"
  - "#92819"
  - "#92883"
  - "#50177"
  - "#51067"
  - "#92613"
  - "#90998"
  - "#92399"
  - "#90846"
  - "#90864"
  - "#90923"
  - "#89345"
  - "#89369"
  - "#88815"
  - "#76092"
  - "#89469"
  - "#50520"
  - "#63634"
  - "#92957"
  - "#90709"
  - "#92081"
  - "#41892"
cluster_refs:
  - "#88743"
  - "#92230"
  - "#92694"
  - "#92649"
  - "#92584"
  - "#92647"
  - "#92733"
  - "#92251"
  - "#90633"
  - "#92817"
  - "#88899"
  - "#88905"
  - "#88919"
  - "#88953"
  - "#88681"
  - "#88916"
  - "#91457"
  - "#92877"
  - "#92873"
  - "#92819"
  - "#92883"
  - "#50177"
  - "#51067"
  - "#92613"
  - "#90998"
  - "#92399"
  - "#90846"
  - "#90864"
  - "#90923"
  - "#89345"
  - "#89369"
  - "#88815"
  - "#76092"
  - "#89469"
  - "#50520"
  - "#63634"
  - "#92957"
  - "#90709"
  - "#92081"
  - "#41892"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.484Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 53

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #88743 docs(sms): add Twilio A2P delivery guidance

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: refactor-only, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, channel: sms
- gitcrawl snapshot updated: 2026-06-13T08:46:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a short US A2P / 10DLC delivery section to the SMS channel docs. - Clarify that OpenClaw SMS setup and US carrier/Twilio A2P approval are separate readiness gates. - Add troubleshooting guidance for Twilio sends that are accepted by the API bu

### #92230 feat: add model switch choices to /model

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T08:51:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add dynamic configured-model choices to the native `/model` command - enable the existing command argument menu path for `/model` so Slack can render model picks with its existing buttons/static_select/external_select machinery - keep bare `/model

### #92694 docs(nodes): add openclaw.json example for node exec config

- bucket: ready_for_maintainer
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-13T15:20:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The /nodes page showed CLI config commands but was missing the equivalent openclaw.json example.\n\nAdded a json5 block with tools.exec.host/security/node before the existing CLI commands.\n\nCloses #92662

### #92649 feat(kimi): show code quota in usage status

- bucket: ready_for_maintainer
- author: litang9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, extensions: kimi-coding, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T15:25:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds Kimi Code usage reporting to the existing provider usage pipeline. - Adds a Kimi usage fetcher for `GET https://api.kimi.com/coding/v1/usages`. - Parses Kimi Code `5h` and `7d` quota windows into the existing usage snapshot shape. - Wires the b

### #92584 fix(gateway): stop accepting the Control UI token via ?token= query string

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T16:01:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Control UI assistant-media route (`/__openclaw__/assistant-media`) accepted the gateway shared secret — and paired operator device tokens — from a `?token=<redacted> URL query parameter (`allowQueryToken: true` in `src/gateway/control-ui.ts`). Secrets in

### #92647 fix(memory): attribute corpus=all timeouts to the slow branch instead of the provider

- bucket: ready_for_maintainer
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-13T16:35:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `memory_search` with `corpus=all` could hit the 15s tool deadline and return a "Memory search is unavailable due to an embedding/provider error" warning even when the embedding provider probe and every individual corpus searched successfully. - Th

### #92733 Support managed Skill Workshop updates

- bucket: ready_for_maintainer
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-13T17:04:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow Skill Workshop update/revise/apply flows for writable `openclaw-managed` skills under the user's OpenClaw skills directory - keep workspace skill support intact while preserving boundary checks for targets outside workspace/managed skills - 

### #92251 fix(agents): carry provenance through active subagent wakes

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T23:36:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #91356, #91330, #91333. Carry typed `inputProvenance` through active subagent wake steering so resumed requester turns keep an explicit inter-session provenance signal instead of arriving as untyped queued messages. This is intentionally narrow

### #90633 fix(codex): enforce OpenClaw policy for native tool surfaces

- bucket: ready_for_maintainer
- author: Kaspre
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T00:56:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the Codex app-server policy-enforcement gap where OpenClaw `before_tool_call` / oc-firewall policy could be bypassed by Codex-owned native shell/file/MCP surfaces when native `PreToolUse` delivery is unavailable or not trusted. Changes: - Disa

### #92817 fix(cron): trust agent output when channel is unresolved without explicit delivery

- bucket: ready_for_maintainer
- author: fsdwen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T01:20:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `--no-deliver` cron jobs that encounter recoverable tool warnings were marked `status: error` even when the agent successfully produced a final answer. The basic fix (`deliveryRequested === false`) was already implemented on main, but it missed the 

### #88899 fix(android): widen chat bubbles and render markdown consistently

- bucket: ready_for_maintainer
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T01:36:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #88014 by making the active Android `ChatScreen` bubbles use a readable 90% width instead of the previous 56% assistant / 64% user caps. - Routes active chat text through the existing `ChatMarkdown` renderer consistently, matching the siblin

### #88905 feat(dreaming): expose shadow-trial scoring in reports

- bucket: ready_for_maintainer
- author: iFiras-Max1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:31:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Expose the PR3 shadow-trial scoring signal in the report artifact while keeping the Dreaming path report-only. This keeps the scoring helper private and only adds report metadata when a caller supplies `candidateScore`: - base score - shadow-trial delta - fina

### #88919 fix: allow preflight compaction to reenter session locks

- bucket: ready_for_maintainer
- author: plexustech2006
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:32:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow embedded preflight compaction to re-enter the same-process transcript write lock - add a regression guard so compaction's lock acquisition keeps `allowReentrant: true` ## Why When a visible chat turn times out near the context ceiling, a sam

### #88953 fix(exec): auto-approve recognized read-only boolean flags on default safe bins

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:33:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Default safe bins (`cut`, `head`, `tail`, `tr`, `uniq`, `wc`) exist to auto-approve **stdin-only text filters** without a manual approval prompt. But the short-option validator only had an *accept* path for **value-consuming** flags: `consumeShortOp

### #88681 Make runtime plugin startup stalls name in-flight plugins

- bucket: ready_for_maintainer
- author: alexzhu0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T03:09:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds diagnostic progress snapshots while runtime plugins load. - Threads runtime plugin progress into embedded-agent and cron execution phase reporting. - Appends attempted/completed/in-flight plugin ids to cron timeout messages only while the las

### #88916 [codex] Fix Telegram active-run ingress and legacy file SecretRefs

- bucket: ready_for_maintainer
- author: Hilo-Hilo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T03:46:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - route plain-text Telegram follow-ups in an active reply fence through a narrow ingress lane so they can reach queue/steer handling without waiting behind the running handler - share that active-run lane selection between the direct grammY runner a

### #91457 fix(control-ui): persist Set Default agent through config save

- bucket: ready_for_maintainer
- author: ZengWen-DT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: blank-template, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T05:07:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Agents page **Set Default** button did not persist the chosen default agent: clicking it only staged a config *form draft* and never wrote it back, so the selection was silently discarded on refresh. This PR routes the one-click action through t

### #92877 fix(usage): make built-in footer easier to wrap on Telegram

- bucket: ready_for_maintainer
- author: Marvinthebored
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T05:47:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Simplify the built-in `/usage full` default footer so Telegram has a cleaner wrap point. - Keep the model/provider/status badges compact and glue the context meter label to the meter. - Remove the default token-count and cache-percentage atoms fro

### #92873 test(diffs): add viewerState, toolbar toggle, shadow root, and hydrateProps tests (fixes #83915)

- bucket: ready_for_maintainer
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, extensions: diffs, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T05:48:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Add comprehensive test coverage for `extensions/diffs/src/viewer-client.ts` (361 lines, previously only bundle-content grep coverage). Covers four untested code paths: 1. **viewerState initialization** — theme/diffStyle/overflow seeding from `firstPayl

### #92819 Fix stale auto-fallback origin model selection

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T07:22:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a shared stale auto-fallback-origin classifier so reply and agent-command selection agree when recorded fallback origin no longer matches the current primary. - Defers reply-side model/auth cleanup until after read-only slash/inline actions h

### #92883 fix(security): audit open dm tool exposure

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T07:26:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #55612. Extends the security exposure matrix from only `groupPolicy="open"` to all open inbound conversation policies that can expose tools: - `channels.<id>.groupPolicy` - `channels.<id>.dmPolicy` - legacy `channels.<id>.dm.policy` - the same

### #50177 fix(webchat): slash menu clipped by overflow and missing keyboard scroll

- bucket: ready_for_maintainer
- author: RickyTong1
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: refactor-only, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, proof: 🎥 video, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T07:34:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: The webchat slash command menu (`/`) is completely invisible — typing `/` changes the input border color and arrow-key selection works, but the dropdown never appears. This is because `.agent-chat__input` uses `overflow: hidden` (for text

### #51067 feat(gateway): add configurable Control UI title

- bucket: ready_for_maintainer
- author: ryan-dyer-sp
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, stale, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T07:35:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: Allow users to set a custom browser tab title for the Control UI via the gateway.controlUi.title config option. Useful when running multiple OpenClaw instances to distinguish between tabs. ## Change Type 

### #92613 fix(agents): cap tool results at LLM boundary

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T08:13:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cap provider-boundary replay to the latest 24 `toolResult` messages so histories with 25+ completed tool results do not cross the model boundary intact. - Drop the matching oldest assistant tool-call blocks when old tool results are omitted, avoid

### #90998 fix(sms): authorize text slash commands

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look, channel: sms
- gitcrawl snapshot updated: 2026-06-14T08:13:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Native SMS direct messages that begin with text slash commands now carry command-turn metadata and command authorization into the inbound reply pipeline. This makes allowlisted/pairing-approved SMS senders follow the same command handoff shape used 

### #92399 fix(llm): collapse cumulative openai-responses message snapshots instead of concatenating [AI-assisted]

- bucket: ready_for_maintainer
- author: amersheeny
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T08:58:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91959 — Bedrock Mantle's `openai-responses` endpoint (GPT-5.x with reasoning enabled) re-emits the assistant message as many **cumulative snapshot items**, each a strict prefix-superset of the previous one, instead of a single final message i

### #90846 fix(media): stop pruning media on write; let the configured timer do it

- bucket: ready_for_maintainer
- author: lundog
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T09:55:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `saveMediaSource` ran an inline `cleanOldMedia(DEFAULT_TTL_MS, { recursive: false })` on every call. Two problems compounded: 1. `DEFAULT_TTL_MS` is **2 minutes**, hardcoded — it ignores the configurable `media.ttlHours` retention. 2. `cleanOldMedia

### #90864 fix(tasks): accept completion summaries with result markers

- bucket: ready_for_maintainer
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T09:56:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Make the required-completion classifier accept summaries that begin with progress narration but contain a real result/report/verification marker later in the text. This keeps genuine progress-only messages blocked, while avoiding false `Required com

### #90923 fix(daemon): write LaunchAgent plist to boot volume when home is on external APFS

- bucket: ready_for_maintainer
- author: 849261680
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T11:15:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary macOS `launchd` refuses to bootstrap a LaunchAgent plist that lives on an external APFS volume (`Bootstrap failed: 5: Input/output error`). When a user's `$HOME` is on an external drive, `openclaw gateway install` always fails. This PR makes the mac

### #89345 fix(backup): resolve legacy hardlink targets by link subtree (follow-up to #89328)

- bucket: ready_for_maintainer
- author: hoobnn
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:32:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Follow-up to #89328 (merged as 5be282e459), which still leaves the originally reported failure in place. `backup verify` rejected previously valid backups containing internal hardlinks with `Archive hardlink target is outside the declared archive ro

### #89369 fix(agents): persist forked transcript when parent branch has no assistant turn

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T11:33:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A subagent spawned with `context="fork"` (and the realtime voice-consult fork and the reply-session fork) could silently start with an **empty** transcript, dropping the parent conversation it was meant to inherit, with no error surfaced. This happe

### #88815 feat: channel echo / session pinning

- bucket: ready_for_maintainer
- author: anagnorisis2peripeteia
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, app: web-ui, gateway, cli, scripts, commands, size: XL, triage: refactor-only, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T11:36:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Pin-from-here: channel-agnostic turn mirroring A session can mirror its turns to other threads bound to the **same** session. You run `/pin on` in a thread; from then on, when any other thread of that session drives a turn, this thread receives it — rendere

### #76092 fix(daemon): prefer bundled node for gateway service

- bucket: ready_for_maintainer
- author: Squirbie
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, proof: supplied, proof: sufficient
- gitcrawl snapshot updated: 2026-06-14T11:39:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prefer an installed OpenClaw bundled Node runtime from the active state dir when generating gateway service runtime paths. - Validate discovered `tools/node-v*/bin/node` candidates before using them. - Fall back to the current/system Node behavior

### #89469 feat(agents): inherit requester model for subagents

- bucket: ready_for_maintainer
- author: Gausons
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T12:17:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Let native subagent spawns resolve `model: "inherit"` from the requester session's active model, including model context passed through `sessions_spawn` and persisted requester session state fallback. - Normalize inherited provider/model refs so p

### #50520 fix(outbound): strip inbound metadata before delivery

- bucket: ready_for_maintainer
- author: p3nchan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T12:39:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #39847. Related to #41355, #30405, #28170. When an LLM echoes internal metadata blocks (e.g., `Conversation info (untrusted metadata):`, `Sender (untrusted metadata):`) in its response, the outbound delivery pipeline sends them verbatim to the

### #63634 fix: accept valid MCP tool schemas without strict inputSchema.type check

- bucket: ready_for_maintainer
- author: zozo123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T12:44:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes MCP server loading failure when tools have `inputSchema` without explicit `type: "object"`. Closes #63602 ## Changes - `listAllTools` validates each `tools/list` page **once** with `RelaxedListToolsResultSchema` and catalogs **that same valida

### #92957 feat(gateway): add agents.setDefault RPC method

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, commands, size: M, proof: supplied, proof: sufficient, extensions: admin-http-rpc, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T12:52:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary There is no dedicated Gateway RPC to change the default agent. `agents.list` already returns a read-only `defaultId` and full CRUD exists (`agents.create`/`agents.update`/`agents.delete`), but `agents.update` does not accept a `default` field, so th

### #90709 feat(Signal): support note-to-self ingress

- bucket: ready_for_maintainer
- author: recallmenot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: signal, channel: telegram, app: web-ui, gateway, extensions: memory-core, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T12:56:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary ### What problem does this PR solve? - Adds explicit Signal `ingressMode: "note-to-self"` support so linked-device `signal-cli` setups can use the operator's Signal Note to Self chat as the OpenClaw conversation surface. - Removes the practical need

### #92081 feat(msteams): Teams voice (CVI) + chat + governance integration

- bucket: ready_for_maintainer
- author: ahenawy
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: msteams, channel: voice-call, size: XL, extensions: openai, proof: supplied, proof: sufficient, extensions: elevenlabs, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T13:00:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **Stacked on #91438 — review the increment** (`b98d5a0a7a…fdb99003cb`, 51 commits): the foundation is #91438. The full diff includes #91438's commits only until that PR lands; this branch then rebases to exactly the increment. A commit→feature map is below. 

### #41892 feat(control-ui): add cron calendar timeline view

- bucket: ready_for_maintainer
- author: xvchris
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: XL, proof: sufficient, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author, proof: 📸 screenshot, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T13:08:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a 24h timeline strip to the Cron Jobs page in the Control UI, providing an at-a-glance view of today's scheduled tasks. Closes #40644 ## Screenshots ### Dark Theme — Full View ![Full page dark](https://raw.githubusercontent.com/xvchris/cron-cal

