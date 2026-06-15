---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T131654-010
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
  - "#85264"
  - "#85403"
  - "#90908"
  - "#85359"
  - "#85404"
  - "#85471"
  - "#85478"
  - "#85788"
  - "#85845"
  - "#89990"
  - "#90054"
  - "#90061"
  - "#90077"
  - "#86094"
  - "#90238"
  - "#91291"
  - "#91506"
  - "#86285"
  - "#86360"
  - "#86540"
  - "#86541"
  - "#86793"
  - "#86795"
  - "#86796"
  - "#86797"
  - "#86932"
  - "#84172"
  - "#87433"
  - "#87437"
  - "#91023"
  - "#93114"
  - "#93076"
  - "#87764"
  - "#87774"
  - "#87814"
  - "#87824"
  - "#87825"
  - "#87826"
  - "#87827"
  - "#87850"
cluster_refs:
  - "#85264"
  - "#85403"
  - "#90908"
  - "#85359"
  - "#85404"
  - "#85471"
  - "#85478"
  - "#85788"
  - "#85845"
  - "#89990"
  - "#90054"
  - "#90061"
  - "#90077"
  - "#86094"
  - "#90238"
  - "#91291"
  - "#91506"
  - "#86285"
  - "#86360"
  - "#86540"
  - "#86541"
  - "#86793"
  - "#86795"
  - "#86796"
  - "#86797"
  - "#86932"
  - "#84172"
  - "#87433"
  - "#87437"
  - "#91023"
  - "#93114"
  - "#93076"
  - "#87764"
  - "#87774"
  - "#87814"
  - "#87824"
  - "#87825"
  - "#87826"
  - "#87827"
  - "#87850"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.473Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 10

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #85264 fix(infra): scope Windows path realpath caches

- bucket: maintainer_owned
- author: 211-lee
- author association: FIRST_TIMER
- draft: no
- assignees: vincentkoc
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:15:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Windows `lstat`/realpath calls are expensive enough that repeated path-boundary checks can dominate startup and agent-path flows. The original version tried to fix that with process-wide realpath caches, but those caches sit on plugin, skill, hook, 

### #85403 fix(telegram): suppress message-tool reply previews

- bucket: maintainer_owned
- author: jimdawdy-hub
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: docs, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, cli, scripts, commands, agents, size: XL, extensions: memory-wiki, proof: supplied, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T02:18:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #80520. Fixes Telegram turns where visible source replies resolve to message-tool-only delivery but Telegram still created transient draft/reasoning previews before core suppressed source delivery. - Share the harness `sourceVisibleReplies` def

### #90908 fix(model-fallback): don't rethrow provider-side AbortErrors as user cancellations

- bucket: maintainer_owned
- author: shengting
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: altaywtf
- labels: agents, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:33:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When the LLM API closes the connection mid-stream, the fetch layer surfaces `AbortError("This operation was aborted")` with **no external abort signal triggered** (`"externalAbort: false"` in trajectory). The existing guard `shouldRethrowAbort()` re

### #85359 feat(agents): add local skill route tool

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: shakkernerd
- labels: docs, agents, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:41:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `local_skill_route`, a read-only local tool that ranks available skills for the current user task and returns matched/ambiguous/nomatch guidance - wire the tool through `createOpenClawTools` from the per-run `skillsSnapshot`, and pass that sna

### #85404 fix(agents): serialize new-session resolution per session key

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: osolmaz
- labels: agents, size: S, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T02:41:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #84575 reports that two requests carrying the **same `x-openclaw-session-key`** at the OpenAI-compatible endpoints (`/v1/chat/completions`, `/v1/responses`) can run in **separate sessions** when the second arrives while the fir

### #85471 Suppress cron announce control replies

- bucket: maintainer_owned
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: steipete
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:43:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85421 ## Summary - Cron announce/direct delivery now uses the shared suppressed-control-reply predicate before sending outbound payloads, so token-only `NO_REPLY`, `ANNOUNCE_SKIP`, and `REPLY_SKIP` replies are treated as silent instead of leaking to ext

### #85478 fix(slack): soften benign search no-result progress

- bucket: maintainer_owned
- author: kesslerio
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: channel: discord, channel: matrix, channel: msteams, channel: slack, channel: telegram, agents, size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T02:44:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Slack progress for optional local context searches no longer presents clean `rg` no-match results as scary exit-code failures. Direct `rg` exit 1 and `find ... | xargs rg ...` exit 123 now carry a narrow `benign_no_result` classification through exec c

### #85788 Fix/spawned by cache leak

- bucket: maintainer_owned
- author: georgeboiko
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: gateway, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:55:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # fix(gateway): evict `spawnedByCache` on lifecycle end to prevent memory leak ## Summary - **Problem:** `spawnedByCache` — a `Map<string, string | null>` inside the `createAgentEventHandler` closure — has no eviction. Every unique subagent / ACP sessionKey is

### #85845 fix(msteams): route file.download.info links via graph shares

- bucket: maintainer_owned
- author: IWhatsskill
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: channel: msteams, size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T02:56:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: MSTeams `application/vnd.microsoft.teams.file.download.info` attachments can expose SharePoint/OneDrive `downloadUrl` values that require Graph auth, but the download path used those URLs directly. - Solution: Route eligible `downloadUrl`

### #89990 fix(gateway): isolate web login descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T03:03:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate plugin-owned web login gateway method discovery so malformed descriptor rows do not hide later healthy providers - add a regression covering a throwing descriptor `name` getter and an unreadable descriptor array row before a valid web-logi

### #90054 fix(gateway): isolate method descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:03:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard plugin/channel gateway method descriptor reads before listing method names or scopes - skip malformed descriptor rows while preserving healthy method discovery and QR-login provider resolution - keep plugin descriptor registry construction r

### #90061 fix(agent-runtime): guard prompt cache tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:03:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR keeps prompt-cache observability from crashing an agent turn when tool-name diagnostics encounter malformed tool rows. - Guard `collectPromptCacheToolNames()` against unreadable array rows and throwing `name` getters. - Preserve existing beh

### #90077 fix(plugins): guard provider discovery credential metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:03:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard provider-discovery credential probing so a malformed plugin row with unreadable `setup` or `providerAuthEnvVars` metadata is treated as having no env credential evidence. - Add a provider-discovery regression covering poisoned credential met

### #86094 feat(codex): diagnose native thread lifecycle

- bucket: maintainer_owned
- author: 100yenadmin
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, extensions: diagnostics-otel, agents, size: XL, extensions: codex, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:04:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is PR #3 in the Codex native-thread reuse stack, after #85978 and #86069. It does **not** change the 70k default guard, and it does **not** preserve bindings across context-engine compaction or successor transcript rollover yet. It makes Codex 

### #90238 fix(plugins): skip unreadable tool descriptor cache entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:05:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make plugin tool descriptor-cache capture best-effort when plugin-controlled descriptor fields throw - keep live plugin tools available even when their cache descriptor cannot be captured safely - add regression coverage for direct descriptor capt

### #91291 fix(plugins): stabilize plugin tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:05:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Snapshots plugin tool schemas and tool metadata before plugin-owned values can mutate or throw during later registry/MCP use. - Guards implicit registration names and provider SDK schema helpers so plugin tooling keeps clear ownership and stable diag

### #91506 Preserve shared QA suite flags across runners

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, extensions: qa-lab, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T03:08:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stacked on #91502. - Preserves shared QA suite selections across both built-in suite runners by forwarding `--channel-driver crabline --channel telegram` and `--enable-plugin` into the existing isolated runner wrapper. - Keeps the channel driver m

### #86285 fix(voice-call): avoid OpenAI realtime double greeting

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: voice-call, maintainer, size: M, extensions: openai, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:09:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #85846 ## Summary - Keep OpenAI outbound queued initial greetings on the active explicit ready-trigger path so the provider sends `conversation.item.create` followed by `response.create` after `session.updated`. - Fire the OpenAI `onReady()` callback bef

### #86360 fix(codex): honor bound agent exec host policy

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: jesse-merhi
- labels: maintainer, size: S, extensions: codex, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:18:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - store the binding agent id for newly created Codex app-server conversation bindings - pass the stored binding agent id into the Codex native execution guard - block bound app-server turns when that stored agent resolves to `tools.exec.host=node`, 

### #86540 fix: preserve subagent delivery after lock stalls

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: galiniliev
- labels: agents, maintainer, size: S, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:22:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserves suspended subagent final-delivery text into durable completion fallback state before expiring the outbox payload, so expiry is not a hard loss of the child result. - Distinguishes expiry after durable fallback preservation from true payl

### #86541 fix(telegram): ignore polling sleep gaps

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:22:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes Telegram polling liveness so the first watchdog tick after a long sleep/resume or event-loop pause resets the active `getUpdates` baseline instead of forcing a false active-stall restart. - Keeps active in-flight elapsed time on a monotonic 

### #86793 fix(gateway): lighten session event row snapshots

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:27:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - High-frequency session event broadcasts rebuild full gateway session rows, including child-session and transcript-heavy work that event snapshots do not always need. Why does this matter now? - Redacted profiler ev

### #86795 fix(sessions): defer maintenance preserve scans

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:27:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Session store saves call maintenance preserve providers even when entry maintenance does not need provider state, triggering expensive subagent registry reads on ordinary writes. Why does this matter now? - Redacte

### #86796 fix(plugins): suppress metadata cache hit scan spans

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XS, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:27:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Plugin metadata cache hits still emit plugins.metadata.scan diagnostics spans, flooding the timeline on hot paths even when the cached snapshot is reused. Why does this matter now? - Redacted profiler evidence show

### #86797 fix(plugins): cache installed manifest fingerprints

- bucket: maintainer_owned
- author: galiniliev
- author association: MEMBER
- draft: no
- assignees: galiniliev
- labels: maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T03:27:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? - Gateway plugin metadata hot paths repeatedly resolve and stat stable installed manifest/package metadata when fingerprinting the same installed plugin index object. Why does this matter now? - Redacted profiler evi

### #86932 fix(doctor): warn on stale prompt cache config

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, agents, maintainer, size: XL, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T03:31:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `openclaw doctor` warnings for cache-ttl configs whose selected chat model/provider cannot keep the prompt-cache window warm. - Covers direct Anthropic, Anthropic-compatible providers, Bedrock Claude, Google prompt-cache models, OpenAI-family

### #84172 fix(exec): rebuild command authorization on the Tree-sitter command planner

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: jesse-merhi
- labels: app: web-ui, gateway, agents, maintainer, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T03:56:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR rebuilds POSIX command authorization on the Tree-sitter command model. The ad hoc shell splitter that previously decided allowlist matches and allow-always persistence is replaced by a candidate planner (`planShellAuthorization`) built on th

### #87433 [codex] Honor all ack scope for room events

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: slack, channel: telegram, maintainer, size: S, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:11:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - lets Discord, Slack, and Telegram send the configured initial ack reaction for ambient `room_event` messages when `messages.ackReactionScope` is `"all"` - keeps lifecycle status reactions suppressed for room events unless that behavior is changed 

### #87437 draft: trusted Mantis proof head for #87425

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, extensions: qa-lab, proof: sufficient, mantis: telegram-visible-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T04:12:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Temporary trusted same-repo PR head for running secret-bearing Mantis Telegram Live proof for #87425. Do not merge. Evidence should be posted to #87425; this draft can be closed after the proof workflow has validated the candidate ref.

### #91023 fix(acp): scope Discord thread session keys

- bucket: maintainer_owned
- author: KatTate
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: jalehman
- labels: channel: discord, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T04:23:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve the runtime Discord thread id when a configured ACP binding matches via its parent channel id - keep sibling Discord threads under the same configured parent channel on distinct persistent ACP session keys - clear stale configured-format 

### #93114 test: fold script coverage into QA scenarios

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, docker, maintainer, size: L, extensions: qa-lab, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:33:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - move five RFC #10 candidates out of `test/scripts` into QA-owned e2e tests under `test/e2e/qa-lab` - update the matching QA scenario YAML files so `qa suite` executes the migrated e2e tests instead of `test/scripts` - delete the standalone plugin 

### #93076 fix(whatsapp): preserve auth on terminal disconnects

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: mcaxtr
- labels: channel: whatsapp-web, gateway, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T04:48:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve WhatsApp Web credentials on passive logged-out/conflict terminal monitor disconnects; the monitor now stops the listener without calling `logoutWeb`. - Remove the process-local terminal auth marker entirely and derive QR/CLI relink behavi

### #87764 feat: support owner-scoped ClawHub skill refs

- bucket: maintainer_owned
- author: Patrick-Erichsen
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, cli, agents, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:10:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Support owner-qualified ClawHub skill refs such as `@openclaw/demo` across OpenClaw skill install/update/verify flows. - Pass `ownerHandle` through ClawHub detail, download, resolve, and install calls when the user or stored origin metadata provid

### #87774 fix(feishu): preserve group route for mirrored oc replies

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, channel: feishu, size: S, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:11:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Refs #58537. This PR fixes the normal mirrored Feishu group-reply route path, but intentionally does not auto-close the broader issue because proactive bare-target sends and duplicate-session cleanup may remain separate maintainer scope. ## Summary - preserve 

### #87814 Fix config set slash args

- bucket: maintainer_owned
- author: sjf
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: discord, channel: telegram, maintainer, size: M, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:12:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reuse the shared command definition when Discord native command handlers rebuild `/config` text so slash args keep their parser and formatter. - Preserve Telegram native command payloads from raw message text when the framework-provided payload lo

### #87824 feat(feeds): add read-only feed discovery

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:12:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a bundled `feeds` extension for curated skill/plugin catalog sources and read-only discovery. This PR establishes the primitive without install enforcement: - Adds `plugins.entries.feeds.config.sources[]` for configured feed documents. - Adds f

### #87825 feat(feeds): install approved feed entries

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:12:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Builds on the read-only feeds discovery PR by allowing an operator to explicitly install one selected feed entry, then optionally require approved feed metadata for feed-backed installs. This PR keeps the install path explicit: - Adds `openclaw feed

### #87826 feat(policy): add feed catalog conformance

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof, extensions: policy
- gitcrawl snapshot updated: 2026-06-15T05:12:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds Policy conformance checks for feed catalog posture. This is config conformance, not runtime enforcement: - Adds `policy.jsonc` feed rules for required feed source ids. - Adds pinned-source and unsigned-source posture checks. - Adds feed evidenc

### #87827 feat(feeds): add feed lifecycle tooling

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:12:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds feed publisher/subscriber lifecycle tooling on top of the feed source and install primitives. This PR adds: - `openclaw feeds validate <path-or-url>` and `feeds hash <path-or-url>`. - `openclaw feeds build --inventory <path> --out <path>` for d

### #87850 fix(agents): avoid constructing lean local model tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:13:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Apply `localModelLean` before constructing the heavyweight built-in tool surface. - Skip constructing `browser`, `cron`, and `message` tools when lean mode denies them. - Pass the same lean denylist through plugin and inherited tool construction s

