---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T131654-057
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
  - "#90050"
  - "#90060"
  - "#90063"
  - "#41284"
  - "#92955"
  - "#63919"
  - "#64490"
  - "#78094"
  - "#66257"
  - "#68986"
  - "#70944"
  - "#76094"
  - "#76666"
  - "#76744"
  - "#76920"
  - "#89817"
  - "#89859"
  - "#89899"
  - "#77158"
  - "#77184"
  - "#77232"
  - "#77325"
  - "#77339"
  - "#77432"
  - "#77537"
  - "#77538"
  - "#77638"
  - "#90118"
  - "#90122"
  - "#89816"
  - "#90151"
  - "#84794"
  - "#75961"
  - "#76811"
  - "#77127"
  - "#77875"
  - "#77877"
  - "#77904"
  - "#78606"
  - "#93038"
cluster_refs:
  - "#90050"
  - "#90060"
  - "#90063"
  - "#41284"
  - "#92955"
  - "#63919"
  - "#64490"
  - "#78094"
  - "#66257"
  - "#68986"
  - "#70944"
  - "#76094"
  - "#76666"
  - "#76744"
  - "#76920"
  - "#89817"
  - "#89859"
  - "#89899"
  - "#77158"
  - "#77184"
  - "#77232"
  - "#77325"
  - "#77339"
  - "#77432"
  - "#77537"
  - "#77538"
  - "#77638"
  - "#90118"
  - "#90122"
  - "#89816"
  - "#90151"
  - "#84794"
  - "#75961"
  - "#76811"
  - "#77127"
  - "#77875"
  - "#77877"
  - "#77904"
  - "#78606"
  - "#93038"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.485Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 57

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90050 fix(diagnostics-otel): populate Langfuse trace-level input/output from model calls

- bucket: ready_for_maintainer
- author: mycarrysun
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: diagnostics-otel, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:29:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What OpenClaw's `openclaw.run` root span carries no input/output — the conversation only lands on the nested `openclaw.model.call` span (`input.value` / `output.value`). In Langfuse this produces **two** blank-I/O symptoms: 1. **Traces list + trace header**

### #90060 fix(edit): preserve unrelated lines during fuzzy text matching

- bucket: ready_for_maintainer
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P0, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T19:29:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #89994 ## Summary When `applyEditsToNormalizedContent` needed fuzzy matching for any edit, it normalized the **entire file** via `normalizeForFuzzyMatch` and used that as the base for all splicing. This silently rewrote every line: stripping trailing whi

### #90063 fix(channels): clarify message receipt delivery evidence

- bucket: ready_for_maintainer
- author: pdurlej
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:29:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `createMessageReceiptDeliveryEvidence(...)` for turning a `MessageReceipt` into explicit operator-facing delivery evidence. - Re-export the helper through `openclaw/plugin-sdk/channel-outbound` for channel plugins/status surfaces. - Document t

### #41284 fix(ios): read IDEProvisioningTeamByIdentifier

- bucket: ready_for_maintainer
- author: fetzig
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:40:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > UPDATE: created this PR while trying out the openclaw iOS app. Everything worked out of the box except of `scripts/ios-team-id.sh`. So I thought this tiny fix might be of use. Reg. agents feedback about tests: Didn't wrote tests that execute python code sinc

### #92955 fix(opencode-go): load context windows from bundled catalog

- bucket: ready_for_maintainer
- author: NianJiuZst
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: XL, proof: supplied, proof: sufficient, extensions: opencode-go, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:41:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes the `opencode-go` sync context-window fallback so explicit provider lookups can read bundled refreshable catalog rows after config and cache misses. - Aligns the bundled OpenCode Go catalog with the requested 13 current models and keeps thos

### #63919 feat(gateway): wire coding tools into /tools/invoke HTTP surface

- bucket: ready_for_maintainer
- author: simonusa
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:42:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Builds on #85664. Narrow extension of the broader direct-invoke umbrella tracked in #37131. ## Summary Extends PR #85664's narrow read-only landing to also expose `write` and `edit` via the gateway direct-invoke surfaces (HTTP `POST /tools/invoke` AND SDK RPC 

### #64490 CLI: escape zsh completion descriptions

- bucket: ready_for_maintainer
- author: EdenKangdw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T19:42:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: <img width="620" height="177" alt="image" src="https://github.com/user-attachments/assets/df9f44fb-368a-4de3-abb5-89d714c5cca6" /> ## Summary ### Problem Zsh completion descriptions are emitted inside double-quoted `_arguments` specs, but `$` and backticks wer

### #78094 Fix stale inter-session orphan prompt merge

- bucket: ready_for_maintainer
- author: Patrax
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:43:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - drop orphaned trailing user leaves that came from inter-session provenance when a fresh prompt is already present - keep existing queued-user-message repair for normal user prompts intact - add regression coverage for stale inter-session messages 

### #66257 [codex] fix devices approve local fallback

- bucket: ready_for_maintainer
- author: SrJackCM
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:44:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - rebase the device approval fix onto current `main` after the recent gateway-side pairing changes - keep `devices approve` on the Gateway-first path so Gateway authorization, approval logging, and `device.pair.resolved` broadcasts are preserved - d

### #68986 fix: normalize visible assistant output before delivery

- bucket: ready_for_maintainer
- author: dutifulbob
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:45:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Gemma was sometimes leaking hidden internal text into Discord replies. This PR makes OpenClaw clean the final reply in one shared place before sending it. It adds regression tests for the real bad cases we saw, including leaked `<channel|>` markers 

### #70944 feat(discord): resolve trusted principals via identity links

- bucket: ready_for_maintainer
- author: ericberic
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:45:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Completes identity-links support for the Discord plugin. When a Discord message, component interaction, or native slash-command context arrives, the sender's stable Discord user ID is resolved through the agent's `session.identityLinks` config and p

### #76094 docs: add missing breakPreference field to blockStreamingChunk config example

- bucket: ready_for_maintainer
- author: ayesha-aziz123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:47:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `breakPreference` field exists in `BlockStreamingChunkConfig` (types.base.ts line 34) but is missing from the docs example - **Why it matters:** Users only see `minChars` and `maxChars` — `breakPreference` is invisible despite being a

### #76666 fix(memory, builtin backend): eagerly preload session transcript listeners at gateway startup

- bucket: ready_for_maintainer
- author: buyitsydney
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:48:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary (scope narrowed to builtin backend per Codex review) Eagerly preload `MemoryIndexManager` at gateway startup for every agent whose `agents.defaults.memorySearch.sources` (or per-agent overlay) includes `"sessions"`, **when using the builtin session-

### #76744 docs: standardize ACP behavior spelling

- bucket: ready_for_maintainer
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, clawsweeper, clawsweeper:autogenerated, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:49:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Standardize the ACP agents docs wording from `persistent behaviour` to `persistent behavior`. - Add a small Unreleased changelog entry for the docs fix. Issue: https://github.com/openclaw/openclaw/issues/76734 Credit: requested by @steipete in #76

### #76920 fix(telegram): preserve forum topic routing

- bucket: ready_for_maintainer
- author: kesslerio
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:50:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep Telegram thread-not-found fallback for General topic (`message_thread_id=1`), while failing closed for explicit non-General forum topic sends and direct/private topic sends. - Preserve Telegram topic routing for automatic async/heartbeat foll

### #89817 fix(commitments): preserve extraction batch on transient failure

- bucket: ready_for_maintainer
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:51:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The commitment extraction queue drains in batches: `drainCommitmentExtractionQueue` does `queue.splice(0, batchMaxItems)` to take a batch off the queue, then runs the extractor. If the extractor threw a **non-terminal** error (e.g. a transient model

### #89859 fix(gateway): honor remote status probe timeout

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:51:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #65355. `openclaw gateway status --timeout 30000` was still capping active non-loopback probes, including `gateway.remote.url` / `configRemote`, at 1500ms. This keeps the short budgets for inactive remote probes, inactive local loopback probes

### #89899 fix #89425: [Bug]: Missing extensions/speech-core/ in npm tarball (v2026.5.28) — "Unable to resolve bundled plugin public surface speech-core/runtime-api.js"

- bucket: ready_for_maintainer
- author: zhangguiping-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, extensions: qa-lab, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:51:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the npm runtime facade contract treated `speech-core/runtime-api.js` as an always-allowed bundled extension public surface, but `speech-core` is packaged as `packages/speech-core` and exposed through `plugin-sdk/tts-runtime`, not as `dist

### #77158 perf(qmd): persistent export-state cache + stat fast path in exportSessions

- bucket: ready_for_maintainer
- author: zeroaltitude
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, size: L, triage: refactor-only, triage: blank-template, triage: dirty-candidate, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:52:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** For agents with thousands of session transcripts, `QmdMemoryManager.exportSessions()` was the dominant gateway CPU consumer. Every boot and every QMD sync interval walked every session JSONL and called `buildSessionEntry()` per file, 

### #77184 feat(plugin-sdk): re-export StatusSummary, SessionStatus, and HeartbeatStatus from command-status

- bucket: ready_for_maintainer
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:52:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds three additive type re-exports to the existing `openclaw/plugin-sdk/command-status` entrypoint so plugins consuming gateway status RPCs (or formatting `/status` output) can bind against the canonical host shape: - `StatusSummary` (top-level `/s

### #77232 docs(agent-loop): document idle-timeout cost-runaway circuit breaker

- bucket: ready_for_maintainer
- author: adhirajhangal
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:52:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds a bullet to the Timeouts section of `docs/concepts/agent-loop.md` documenting the idle-timeout circuit breaker introduced in #76345. ## Why The existing Timeouts section explains that individual model requests abort on idle timeout, but says nothi

### #77325 fix(auto-reply): deliver text-prefix slash command replies visibly in groups (#77260)

- bucket: ready_for_maintainer
- author: jeffrey701
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:53:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Reported by @awayspam in #77260: in v2026.5.3-1, slash commands like `/new` and `/status` sent in Matrix groups (and other surfaces that emit `CommandSource: "text"`) silently process the action but never deliver the canned confirmation reply when 

### #77339 fix(auto-reply): clear runtime model cache on reset

- bucket: ready_for_maintainer
- author: mjamiv
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:54:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - clear cached runtime model/provider fields when /new or /reset creates a fresh auto-reply channel session - keep explicit preserved overrides and unrelated behavior overrides intact - add a persisted-store regression for #77322 plus changelog entry W

### #77432 feat(doctor): warn about hidden provider catalog models

- bucket: ready_for_maintainer
- author: sercada
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:55:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - mark provider-supplied supplemental model catalog rows with stable catalog provenance - add a warn-only doctor contribution for explicit agents.defaults.models allowlists hiding provider-supplied catalog models - classify the new doctor contributi

### #77537 [codex] Render TUI commentary progress events

- bucket: ready_for_maintainer
- author: grosen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T19:56:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - render `phase:"commentary"` assistant agent events in the TUI as live progress updates - track `pendingChatRunId` before `chat.send` resolves so early Codex/OpenAI commentary can attach to the active run - keep commentary out of final answers and 

### #77538 fix(gateway): bound connect frame auth.* fields at the protocol schema

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:56:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #77977 ## Summary The connect-frame schema at `src/gateway/protocol/schema/frames.ts` accepted `auth.token`, `auth.bootstrapToken`, `auth.deviceToken`, and `auth.password` as unbounded `Type.String()`. The only effective cap was the 64KB pre-auth frame 

### #77638 fix(agents): classify already-at-target edit follower as noop (#60816)

- bucket: ready_for_maintainer
- author: jeffrey701
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:57:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary Reported by @bboguri in #60816: when two identical edits run concurrently against the same file, the leader mutates the file successfully but the follower's `base.execute(...)` then throws `Could not find the exact text in <path>` because the leade

### #90118 [codex] docs(wizard): clarify provider key update path

- bucket: ready_for_maintainer
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:05:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an auth-choice-specific hint to the existing-config `Review and update` option so provider key updates are discoverable - document post-onboarding provider switching in the onboard CLI and wizard reference docs - add regression coverage for th

### #90122 fix(ui): collapse non-terminal internal tool errors

- bucket: ready_for_maintainer
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:05:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #89683. In Control UI / WebChat, a failed **internal** tool call was promoted to a prominent red **"Tool error"** banner in the chat timeline even when the turn produced a clean final assistant reply, for example a hidden shell search that exi

### #89816 docs(gateway): add launchd supervisor loop troubleshooting

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, gateway, size: XS, proof: supplied, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:06:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a macOS launchd troubleshooting section for the duplicate `ai.openclaw.gateway` / `ai.openclaw.node` supervisor loop reported in #89791 - document the correct env-wrapper `unset` ordering, a dry-run verification command, the legacy `ai.opencla

### #90151 docs: clarify OpenClaw vs Codex code mode

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:07:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Closes #83390. - Adds a side-by-side comparison table for OpenClaw code mode vs Codex Code Mode in `docs/reference/code-mode.md`. - Adds a reverse link from `docs/plugins/codex-harness.md` so Codex harness readers can find the comparison anchor. -

### #84794 Clean up isolated cron sessions after runs

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:08:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #84707. ## Summary - move isolated cron delete-after-run cleanup into a shared helper - call delete-after-run cleanup from the isolated runner `finally` block, so delivery mode `none`, runner errors, and other terminal paths also delete run sessions - ke

### #75961 Feat/discord slash command deploy 75888

- bucket: ready_for_maintainer
- author: ZakAnun
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: L, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:14:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #76811 fix(plugins): supplement ClawHub artifact metadata

- bucket: ready_for_maintainer
- author: dorukardahan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:14:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Accept current ClawHub artifact resolver responses where `artifact` is the package artifact summary shape. - When the resolver response has a legacy zip artifact but no archive verification metadata, load the version metadata and use its `sha256ha

### #77127 feat(tools/write): add append mode for agent writes

- bucket: ready_for_maintainer
- author: anyech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:15:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Revives and rebases the closed append-mode work from #75549 for the canonical data-loss issue #40001. The `write` tool currently overwrites existing files. OpenClaw has an append-only wrapper for memory-flush runs, but ordinary agent turns, cron ski

### #77875 fix(ui): add document MIME mappings (xlsx/docx/pptx/etc) for chat attachments — Bug #9

- bucket: ready_for_maintainer
- author: adapepper
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T20:18:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Sandpaw Bug #9 — Todd Bolyard's `go-yard` instance produced an Excel pricing analysis with his AI assistant ("Muffin"), but the browser only offered "Webpage Complete" as the Save As format for the `.xlsx`. The file was served with the wrong `Conten

### #77877 feat(gateway): managed outgoing attachments for documents (xlsx/pdf/docx) — Bug #9

- bucket: ready_for_maintainer
- author: adapepper
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:18:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Sandpaw Bug #9 — gateway-side fix. PR A ([#77875](https://github.com/openclaw/openclaw/pull/77875)) made the UI infer the right MIME for `.xlsx` / `.docx` / `.pptx` / `.pdf` etc. This PR ensures the gateway actually **serves** those documents with t

### #77904 fix(cli): exit after model inspection output

- bucket: ready_for_maintainer
- author: dorukardahan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:19:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a small one-shot CLI exit helper for default-runtime inspection commands - call it after successful `models list` and `models status` output paths - keep embedded/custom runtime callers untouched so capability probes and tests can keep control

### #78606 fix: keep origin-only approval delivery out of DMs

- bucket: ready_for_maintainer
- author: jar-vision-ai
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, channel: discord, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:21:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - keep native approval delivery in origin-only mode from falling back to approver DMs when the origin target cannot be resolved - preserve approver-DM delivery for DM-preferred/native DM modes - update approval delivery tests, Discord docs, and chan

### #93038 Add agent role eval harness

- bucket: ready_for_maintainer
- author: SnowBelt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:22:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a minimal agent role evaluation harness: CLI, workflow, workflow helper, reusable contract catalog, tests, and package scripts. - Creates a clean prerequisite for follow-up Browser Steward runtime-enforcement work without carrying the older 4

