---
repo: openclaw/openclaw
cluster_id: pr-inventory-recent_active-20260615T131654-077
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
  - "#92591"
  - "#92035"
  - "#91721"
  - "#92697"
  - "#88845"
  - "#92860"
  - "#74564"
  - "#75403"
  - "#75148"
  - "#89515"
  - "#91448"
  - "#92953"
  - "#78010"
  - "#78031"
  - "#90079"
  - "#76082"
  - "#93034"
  - "#90101"
  - "#77629"
  - "#79141"
  - "#79846"
  - "#90841"
  - "#80924"
  - "#81305"
  - "#81362"
  - "#59694"
  - "#79273"
  - "#93106"
  - "#68280"
  - "#84560"
  - "#87932"
  - "#73923"
  - "#73925"
  - "#73948"
  - "#87247"
  - "#91192"
  - "#89409"
  - "#90745"
  - "#73982"
  - "#73987"
cluster_refs:
  - "#92591"
  - "#92035"
  - "#91721"
  - "#92697"
  - "#88845"
  - "#92860"
  - "#74564"
  - "#75403"
  - "#75148"
  - "#89515"
  - "#91448"
  - "#92953"
  - "#78010"
  - "#78031"
  - "#90079"
  - "#76082"
  - "#93034"
  - "#90101"
  - "#77629"
  - "#79141"
  - "#79846"
  - "#90841"
  - "#80924"
  - "#81305"
  - "#81362"
  - "#59694"
  - "#79273"
  - "#93106"
  - "#68280"
  - "#84560"
  - "#87932"
  - "#73923"
  - "#73925"
  - "#73948"
  - "#87247"
  - "#91192"
  - "#89409"
  - "#90745"
  - "#73982"
  - "#73987"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.490Z; bucket=recent_active; no GitHub mutation is possible in plan mode."
---

# PR Inventory recent_active 77

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92591 feat(msteams): respond to channel messages by keyword without an @mention

- bucket: recent_active
- author: colton-octaria
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T04:11:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The MS Teams channel is the only group-capable channel that ignores `messages.groupChat.mentionPatterns`. Discord, Slack and WhatsApp each expose a per-provider `mentionPatterns` policy that scopes those patterns and treats a text match as an implic

### #92035 feat(memory): apply temporal decay to QMD search results

- bucket: recent_active
- author: fall4knight
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, size: M, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-13T04:25:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem `memorySearch.query.hybrid.temporalDecay` currently only applies in the builtin hybrid engine merge path (`mergeHybridResults` in `hybrid.ts`). When `memory.backend = "qmd"` — the backend the docs recommend for advanced recall — search results skip 

### #91721 fix(logging): prune non-idle stale diagnostic session states

- bucket: recent_active
- author: chengzhichao-xydt
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-13T07:23:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When `requestStuckSessionRecovery()` fails with `status: "failed"`, the diagnostic session state stays non-idle forever because `recoveryOutcomeMutatesSessionState()` returns `false` and `applyRecoveryOutcomeToDiagnosticState()` returns early. The e

### #92697 feat(sessions): surface blocked and stale session run statuses

- bucket: recent_active
- author: Hidetsugu55
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, app: web-ui, gateway, agents, size: L, extensions: memory-wiki, proof: supplied, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-13T14:19:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds two session run statuses so stuck and orphaned sessions are recognizable in `sessions.list` and the Control UI: - **`blocked`** — the blocked-liveness watchdog now maps to a distinct *terminal* status instead of being folded into `failed`. A ru

### #88845 Require signed beta desktop distribution

- bucket: recent_active
- author: reidmcgill
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: googlechat, channel: imessage, channel: line, channel: matrix, channel: mattermost, channel: msteams, channel: nextcloud-talk, channel: nostr, channel: signal, channel: slack, channel: telegram, channel: tlon, channel: voice-call, channel: whatsapp-web, channel: zalo, channel: zalouser, gateway, extensions: copilot-proxy, extensions: diagnostics-otel, extensions: llm-task, extensions: lobster, extensions: memory-core, extensions: memory-lancedb, extensions: open-prose, scripts, agents, channel: feishu, channel: twitch, channel: irc, size: XL, extensions: acpx, extensions: anthropic, extensions: openai, extensions: minimax, extensions: cloudflare-ai-gateway, extensions: byteplus, extensions: huggingface, extensions: kimi-coding, extensions: moonshot, extensions: synthetic, extensions: together, extensions: venice, extensions: volcengine, extensions: xiaomi, extensions: kilocode, extensions: nvidia, extensions: qianfan, extensions: vercel-ai-gateway, extensions: fal, extensions: tavily, extensions: duckduckgo, extensions: deepseek, channel: qqbot, extensions: stepfun, channel: qa-channel, extensions: qa-lab, extensions: memory-wiki, extensions: webhooks, extensions: arcee, extensions: codex, extensions: lmstudio, extensions: tokenjuice, extensions: tencent, plugin: bonjour, plugin: google-meet, extensions: senseaudio, extensions: tts-local-cli, extensions: litellm, extensions: inworld, extensions: gradium, plugin: azure-speech, triage: dirty-candidate, extensions: diagnostics-prometheus, plugin: migrate-hermes, channel: synology-chat, plugin: migrate-claude, extensions: cerebras, extensions: deepinfra, plugin: file-transfer, proof: supplied, extensions: oc-path, extensions: amazon-bedrock, extensions: anthropic-vertex, dependencies-changed, extensions: admin-http-rpc, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: 🛠️ actively grinding, extensions: policy, plugin: pixverse, extensions: codex-supervisor, extensions: copilot, plugin: workboard, extensions: gmi, extensions: novita, channel: sms
- gitcrawl snapshot updated: 2026-06-14T01:34:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Point beta and alpha desktop builds at channel-specific Sparkle appcasts. - Make `scripts/make_appcast.sh` honor beta/alpha appcast output paths. - Require signed beta desktop assets plus `appcast-beta.xml` in the beta verifier. - Add `--desktop-o

### #92860 #92077: skills/ClawHub: add sourceUrl to skill metadata schema and CLI display

- bucket: recent_active
- author: mmyzwl
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, size: XS, proof: supplied, P3, rating: 🌊 off-meta tidepool, merge-risk: 🚨 automation
- gitcrawl snapshot updated: 2026-06-14T05:18:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a `sourceUrl` field to skill metadata, allowing skill authors to declare a link to their source code repository in `SKILL.md` frontmatter (via `metadata.openclaw.sourceUrl`). This is the first deliverable for ClawHub provenance transparency (as

### #74564 fix: use agent auth scope in /models provider data

- bucket: recent_active
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, clawsweeper, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, status: needs maintainer proof decision
- gitcrawl snapshot updated: 2026-06-14T11:02:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This replaces and credits #74525 with the same narrow fix path: `/models` should use the target agent auth scope when building visible provider data for agent-scoped sessions. ## What changed - Derive or pass the target agent auth directory at the s

### #75403 fix: making typing start fire-and-forget allows cleanup/idle to run before a persistent typin...

- bucket: recent_active
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, clawsweeper, clawsweeper:commit-finding, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: needs maintainer proof decision
- gitcrawl snapshot updated: 2026-06-14T11:02:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one concrete regression: making typing start fire-and-forget allows cleanup/idle to run before a persistent typing indicator has finished starting, so the stop path can no-op and leave the indicator behind. ## What ClawSweeper Is Fixing - **Me

### #75148 fix: fallback path user-visible bug

- bucket: recent_active
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, clawsweeper, clawsweeper:commit-finding, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:10:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Found one user-visible bug in the new fallback path: some channel flows still keep replies private even when the `message` tool is unavailable, so the intended “surface private group replies” behavior is bypassed. ## What ClawSweeper Is Fixing - **M

### #89515 docs: add third-party UIs page

- bucket: recent_active
- author: intrepid37
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T16:41:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a Third-party UIs docs page under Web interfaces - List DeepClaw UI as a community dashboard for OpenClaw Gateway - Add connection guidance and a security checklist for external UIs - Link the new page from the Web docs overview Closes #88920 

### #91448 fix(cron): validate Telegram delivery target is numeric chat ID

- bucket: recent_active
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-14T18:43:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted (Claude). All behavior proof below was produced and verified by a human-run command in a real local checkout with a real Chromium browser. ## Summary - **Problem:** The cron dashboard accepted arbitrary text for Telegram announce delivery "To" fi

### #92953 fix(read): reuse strict-utf8-then-codepage decoder for non-UTF-8 text files (fixes #92664)

- bucket: recent_active
- author: zenglingbiao
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-14T18:46:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: The session `read` tool decodes all text files as UTF-8 via `buffer.toString("utf-8")`. On Chinese Windows (and other non-UTF-8 locales), GBK-encoded text files produce mojibake (garbled characters) instead of readable Chinese text. 

### #78010 docs(backup): document manual restore steps

- bucket: recent_active
- author: Beandon13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:05:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a "Restore from a backup archive" section to `docs/cli/backup.md` that covers inspecting, same-machine restore, and new-machine restore using `tar` + the embedded `manifest.json`. - Explicitly documents that `openclaw backup` does not ship a 

### #78031 feat(bootstrap): teach compact writing style for workspace templates

- bucket: recent_active
- author: jimdawdy-hub
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:05:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary **Problem:** Default workspace templates are verbose. On current `main`, `SOUL.md` + `AGENTS.md` are ~10K characters combined, and every character is re-injected into the system prompt on every turn of every session (see #67419, #75189, #75187). **W

### #90079 Fix Discord native empty reply fallback for compact commands

- bucket: recent_active
- author: AliAbuelkheir
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: discord, size: XS, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-14T19:30:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Gate the Discord native empty-visible-reply fallback on the shared dispatcher `noVisibleReplyFallbackEligible` signal. - Keep the warning for genuinely fallback-eligible empty command dispatches. - Add a Discord native `/compact` regression coveri

### #76082 docs(capabilities): define workspace discovery convention

- bucket: recent_active
- author: MertBasar0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:47:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: workspace-local integrations and durable procedures can be documented ad hoc, so agents may miss valid local capability paths before saying a task is unsupported. - Why it matters: users with b

### #93034 fix(cli): tolerate deleted startup cwd

- bucket: recent_active
- author: llljjjwww333
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, scripts, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-14T19:58:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #73676 Adds a small safe cwd helper for startup paths that may run after the invoking directory has been deleted. CLI/runtime dotenv loading now skips project-local `.env` when `process.cwd()` fails while still loading global env, PATH bootstrap no longe

### #90101 feat: add runtime self context config and tool

- bucket: recent_active
- author: napetrov
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: XL, triage: low-signal-docs, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 🛠️ actively grinding, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T20:04:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Related issue Implementation slice for https://github.com/openclaw/openclaw/issues/89537. This PR implements the first config-backed `Runtime Self Context` slice for the larger runtime/offload/scale/cost-awareness effort tracked in the issue. ## Related PRs

### #77629 docs(plugins): clarify hook runtime activation

- bucket: recent_active
- author: Beandon13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:16:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document that chat-path hooks such as `before_dispatch` only run when Gateway startup planning actually loads the plugin into the messaging runtime - tie the hook docs back to the manifest activation contract, especially `activation.onCapabilities

### #79141 Clarify group chat style guidance

- bucket: recent_active
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, docker, size: S, triage: refactor-only, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:38:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - shorten generated group-chat style guidance so agents sound more natural in messaging surfaces - replace channel-specific link-preview wording with generic preview-spam guidance - keep single useful links free to preview while steering multi-link 

### #79846 docs: add troubleshooting table to getting-started guide

- bucket: recent_active
- author: RockENZO
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: refactor-only, proof: supplied, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:14:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a concise troubleshooting table to the [Getting Started](https://docs.openclaw.ai/start/getting-started) guide covering the four most common first-run blockers: missing command, gateway not starting, model auth errors, and outdated Node versi

### #90841 fix(control-ui): validate Telegram cron To against full target contract (#90467)

- bucket: recent_active
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: mock-only-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-14T21:59:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds save-time Control UI validation for the cron **announce → To** field when the delivery channel is Telegram, so a cron job cannot be saved with a recipient Telegram can never deliver to. Previously the announce `To` field accepted any string and

### #80924 feat(i18n): translate dreaming module UI strings to Simplified Chinese

- bucket: recent_active
- author: git-jxj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, proof: supplied, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-14T22:00:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Dreaming module diary UI had hardcoded English strings and incomplete Chinese translations (restartConfirmation was still in English). - Why it matters: Non-English users see mixed-language UI in the Dreaming tab. - What changed: Extracte

### #81305 fix(commands): preserve multiline slash skill args

- bucket: recent_active
- author: web3blind
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-14T22:14:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #79155 by preserving multiline payload text after the first slash-command line during command body normalization. - Keeps command-head normalization intact for aliases, colon syntax, and Telegram-style `@bot` suffix cleanup. - Adds regressio

### #81362 fix(infra): guard workspace skill scanning against filesystem errors

- bucket: recent_active
- author: davidangularme
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary
- gitcrawl snapshot updated: 2026-06-14T22:15:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What bug this fixes In `refreshRemoteNodeBinsUncoalesced` (`src/infra/skills-remote.ts`), the workspace directory scanning — `listAgentWorkspaceDirs` + the `loadWorkspaceSkillEntries` loop (old lines 332–342) — ran **before** the `try` block that starts wit

### #59694 Add prototype pollution guard to resolveConfigPath

- bucket: recent_active
- author: YonganZhang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P2, rating: 🦪 silver shellfish, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-14T23:25:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `resolveConfigPath` in `src/shared/config-eval.ts` traverses config objects by dot-separated path strings (e.g. `"foo.bar.baz"`), but does not check whether any path segment is a dangerous prototype key (`__proto__`, `prototype`, or `constructor`). 

### #79273 docs(secrets): document POSIX allowInsecurePath behavior

- bucket: recent_active
- author: RajvardhanPatil07
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, P3, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-14T23:29:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Document that SecretRef file and exec provider paths on POSIX normally must be owned by the gateway user uid. - Clarify that trusted root-owned system-package binaries may need allowInsecurePath: true. - Keep the warning that allowInsecurePath sho

### #93106 docs(gateway): add cloud-orchestrator plus local-text-workers pattern

- bucket: recent_active
- author: ZengWen-DT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T01:43:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a docs page for the cloud-orchestrator plus local-text-workers pattern: a tool-using cloud model orchestrates while local models do bounded text-only work (drafting, summarizing, refactoring). - Composes existing guidance (local models, sub-a

### #68280 fix(gateway): fail fast on missing local probe auth

- bucket: recent_active
- author: amittell
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, commands, size: L, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-15T03:52:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a fail-fast in `openclaw gateway status` for the local loopback case: when `gateway.auth.mode` requires credentials but neither the persisted token nor an interactive credential can be resolved, the status command synthesises a failed probe wit

### #84560 feat(cli): support --dm-policy and --dm-allowlist in channels add

- bucket: recent_active
- author: akang1798
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: googlechat, channel: imessage, channel: line, channel: matrix, channel: mattermost, channel: msteams, channel: nextcloud-talk, channel: nostr, channel: signal, channel: slack, channel: telegram, channel: tlon, channel: voice-call, channel: whatsapp-web, channel: zalo, channel: zalouser, app: ios, app: macos, gateway, extensions: copilot-proxy, extensions: diagnostics-otel, extensions: llm-task, extensions: lobster, extensions: memory-core, extensions: memory-lancedb, extensions: open-prose, cli, commands, channel: feishu, channel: twitch, channel: irc, extensions: acpx, extensions: anthropic, extensions: openai, extensions: minimax, extensions: cloudflare-ai-gateway, extensions: byteplus, extensions: huggingface, extensions: kimi-coding, extensions: moonshot, extensions: synthetic, extensions: together, extensions: venice, extensions: volcengine, extensions: xiaomi, extensions: kilocode, extensions: nvidia, extensions: qianfan, extensions: vercel-ai-gateway, extensions: fal, extensions: tavily, extensions: duckduckgo, extensions: deepseek, channel: qqbot, extensions: stepfun, channel: qa-channel, extensions: qa-lab, extensions: memory-wiki, extensions: webhooks, extensions: arcee, extensions: codex, extensions: lmstudio, extensions: tokenjuice, extensions: tencent, plugin: bonjour, plugin: google-meet, extensions: senseaudio, extensions: tts-local-cli, extensions: litellm, extensions: inworld, extensions: gradium, plugin: azure-speech, extensions: diagnostics-prometheus, plugin: migrate-hermes, channel: synology-chat, plugin: migrate-claude, extensions: cerebras, extensions: deepinfra, plugin: file-transfer, extensions: oc-path, extensions: amazon-bedrock, extensions: anthropic-vertex, extensions: brave, extensions: chutes, extensions: diffs, extensions: elevenlabs, extensions: firecrawl, extensions: github-copilot, extensions: google, extensions: microsoft, extensions: mistral, extensions: ollama, extensions: opencode, extensions: opencode-go, extensions: openrouter, extensions: openshell, dependencies-changed, extensions: admin-http-rpc
- gitcrawl snapshot updated: 2026-06-15T05:05:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR adds support for `--dm-policy` and `--dm-allowlist` flags to the `channels add` command. This is part of the fix for #79553, enabling non-interactive configuration of DM policies. Note: Corresponding logic changes in plugins may be required to consume 

### #87932 feat(compaction): support percentage strings for token thresholds

- bucket: recent_active
- author: tanshanshan
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, proof: supplied, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state
- gitcrawl snapshot updated: 2026-06-15T05:14:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Four compaction parameters (`reserveTokens`, `keepRecentTokens`, `reserveTokensFloor`, `softThresholdTokens`) use absolute token counts that don't scale with the model's context window. Switching from a 1M-token model to a 200K-token mode

### #73923 fix(ui): preserve gateway token during safe websocket url edits

- bucket: recent_active
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, clawsweeper, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:24:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #41545 by preserving the Gateway Token while the user makes harmless same-normalized-endpoint WebSocket URL edits in Overview > Gateway Access. - Clears or reloads the token when the normalized gateway endpoint changes so a gateway-scoped cr

### #73925 fix(gateway): bound websocket auth after valid connect

- bucket: recent_active
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, stale, size: M, clawsweeper, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:24:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Repair contributor PR #49751 in place. Plan: - Rebase the existing branch onto current main 381c2e1d1a3bbc5c41383e6d66b094bbdf3a6bf0. - Keep clearing the preauth timer only after a valid connect frame is received. - Keep a bounded connect-auth watchdog so stal

### #73948 fix(security): align audit symlink_escape boundary with skill loader

- bucket: recent_active
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, stale, size: XS, clawsweeper, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T07:24:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - align the skills.workspace.symlink_escape audit probe with the workspace skills-directory realpath enforced by the skill loader - update title/detail/remediation copy so the finding consistently names the skills directory boundary - add the inside

### #87247 docs: clarify LanceDB dreaming settings vs vector-native plugins

- bucket: recent_active
- author: airbing11
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T07:59:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a short "LanceDB and dreaming" note to `docs/concepts/dreaming.md`: - A selected memory-slot plugin may expose dreaming **settings** when it owns `plugins.slots.memory`. - That is separate from LanceDB-**vector-native** dreaming behavior; for t

### #91192 fix(tts): allow trusted local media in message_tool_only mode

- bucket: recent_active
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-15T08:28:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes openclaw/openclaw#83636. Trusted local TTS media generated by tools can be dropped in `message_tool_only` room-event flows because the media was attached to message-tool source-reply transcript mirrors or consumed through suppressed block deli

### #89409 [codex] docs(memory-wiki): clarify sources wrapper contract

- bucket: recent_active
- author: spacegeologist
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:04:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Closes #69700. Clarifies the Memory Wiki `sources/` contract so the docs match the current lint, ingest, compile, and search behavior: - describe `sources/` as structured source-page wrappers, not arbitrary raw Markdown storage - explain that source

### #90745 fix: carry reply metadata into runtime context

- bucket: recent_active
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-15T10:32:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a first-class current-turn reply metadata payload to `CurrentInboundPromptContext` so Telegram/forum reply facts survive the reply prompt/runtime handoff as structured OpenClaw metadata. This is the Morty patch shape, polished for upstream: - s

### #73982 fix(chat-bash): inherit exec policy defaults

- bucket: recent_active
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, clawsweeper, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:47:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - repair #50392 so `/bash` chat sessions inherit the effective `tools.exec` defaults used by the exec tool - include security, ask, path prepend, safe-bin settings/profiles, strict inline eval, approval running notice timing, timeout, and notificati

### #73987 fix(control-ui): share gateway token scope across loopback hosts

- bucket: recent_active
- author: openclaw-clownfish[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, clawsweeper, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T10:47:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Repair the existing #43254 branch rather than replacing it. This keeps gateway tokens in sessionStorage, shares token scope only across true same-machine loopback aliases, and preserves protocol, port, and pathname boundaries so distinct local gateways remain 

