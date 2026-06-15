---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T131654-042
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
  - "#73159"
  - "#74799"
  - "#75679"
  - "#75786"
  - "#80146"
  - "#80651"
  - "#80789"
  - "#80802"
  - "#80921"
  - "#81147"
  - "#81293"
  - "#81374"
  - "#81531"
  - "#81613"
  - "#92995"
  - "#72650"
  - "#81766"
  - "#81939"
  - "#81994"
  - "#82024"
  - "#82039"
  - "#82253"
  - "#93195"
  - "#70051"
  - "#93192"
  - "#72548"
  - "#85651"
  - "#92253"
  - "#90867"
  - "#88329"
  - "#82148"
  - "#36630"
  - "#38290"
  - "#41067"
  - "#43837"
  - "#44288"
  - "#44884"
  - "#46303"
  - "#46502"
  - "#47277"
cluster_refs:
  - "#73159"
  - "#74799"
  - "#75679"
  - "#75786"
  - "#80146"
  - "#80651"
  - "#80789"
  - "#80802"
  - "#80921"
  - "#81147"
  - "#81293"
  - "#81374"
  - "#81531"
  - "#81613"
  - "#92995"
  - "#72650"
  - "#81766"
  - "#81939"
  - "#81994"
  - "#82024"
  - "#82039"
  - "#82253"
  - "#93195"
  - "#70051"
  - "#93192"
  - "#72548"
  - "#85651"
  - "#92253"
  - "#90867"
  - "#88329"
  - "#82148"
  - "#36630"
  - "#38290"
  - "#41067"
  - "#43837"
  - "#44288"
  - "#44884"
  - "#46303"
  - "#46502"
  - "#47277"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.481Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 42

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #73159 Add tool-call failure guardrails

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:35:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Implements guardrails for recurring OpenClaw tool-call failure classes from task 7d0f53dc.\n\nChanges:\n- read tool adds actionable guidance for missing-file ENOENT/ENOTDIR path failures\n- message tool rejects unsupported channel actions before dispatch when 

### #74799 Add per-session runtime envelopes

- bucket: needs_proof
- author: trialanderrorstudios
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, app: web-ui, gateway, scripts, agents, stale, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:35:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Refs #74632 ## Summary - add an optional `envelope` object to `sessions.create` and `sessions.patch` - persist the envelope on `SessionEntry`, with `sessions.patch` replacing it and `envelope: null` clearing it - enforce the persisted envelope before tool exec

### #75679 fix(agents): canonicalize subagent list requester keys

- bucket: needs_proof
- author: sahilsatralkar
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:36:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #75786 fix(subagents): reconcile timed-out waits against child session state

- bucket: needs_proof
- author: carlos-443-diaz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:37:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #75785. ## Summary Reconcile timed-out `agent.wait` results against the persisted child session state before announcing subagent completion. This fixes a false-timeout path where the child run can finish successfully, but the parent-side completion hando

### #80146 fix(cron): scope all-run job names

- bucket: needs_proof
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, size: S, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:41:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #49175. `cron.runs` with `scope: "all"` still returns global run-log rows, but job-name enrichment now uses the same agent-scoped job visibility path as `cron.list` instead of reading every job through the unfiltered `cron.list()` shortcut. ##

### #80651 [runtime]: fix runtime override precedence over pinned harness

- bucket: needs_proof
- author: marchpure
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:42:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem We verified a session state where an explicit runtime override should have higher priority than an existing embedded harness pin, but the agent command path still used the stale `agentHarnessId` first. That can happen after a session has already bee

### #80789 feat(cli): add openclaw context map command

- bucket: needs_proof
- author: thesomewhatyou
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:43:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds `openclaw context map` — a CLI command that renders the same WinDirStat-style context treemap PNG that `/context map` sends in-chat, but from the terminal without needing a connected channel. ``` openclaw context map # most recently active sess

### #80802 [codex] Harden Talk, Canvas, and add macOS ambient overlay

- bucket: needs_proof
- author: tommie777
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, app: android, app: ios, app: macos, app: web-ui, gateway, scripts, size: XL, extensions: tts-local-cli, triage: dirty-candidate, triage: needs-real-behavior-proof, extensions: elevenlabs, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:43:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keeps the branch's existing Talk, Canvas, A2UI, and iOS control-room hardening work. - Adds the macOS Ambient Overlay first slice: click-through ambient panels, SwiftUI workspace sheet, `Control+Option+Space` activation, menu fallback, Escape dism

### #80921 fix(net): add 3s timeout to canBindToHost to prevent Big Sur startup hang

- bucket: needs_proof
- author: leegisang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:43:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem On macOS Big Sur (11.x), the gateway hangs indefinitely after logging `"starting HTTP server..."`. The root cause is in `canBindToHost()` in `src/gateway/net.ts`. When the gateway binds to `127.0.0.1`, `resolveGatewayListenHosts()` probes `::1` to d

### #81147 Harden package portability checks

- bucket: needs_proof
- author: RookAI471
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:43:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - add a shared package-local-path scanner for packaged dist text artifacts - wire the scanner into release pack validation and tarball integrity checks - add regression coverage for stale /Users, /home, and current package-root paths in dist output whi

### #81293 [codex] Add Control UI gateway request timeouts

- bucket: needs_proof
- author: THESPRYGUY
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: L, extensions: codex, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:44:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Add client-side request timeouts to the Control UI gateway RPC path. - Keep longer server-declared timeouts alive with grace while timing out unanswered default requests. - Record bounded CLIENT_TIMEOUT timing and clear timers on responses/flushes. V

### #81374 fix: allow silent cron empty replies

- bucket: needs_proof
- author: zuoanCo
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:45:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Pass isolated cron delivery.mode="none" through to the embedded runner as allowEmptyAssistantReplyAsSilent. - Add a focused regression test for the silent delivery executor path. - Update the unreleased changelog. Fixes #79069. ## Real behavior proo

### #81531 feat(memory-wiki): add hash field to WikiClaimEvidenceSchema for cryptographic source verification

- bucket: needs_proof
- author: netdirector
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: XS, extensions: memory-wiki, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:46:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Adds optional `hash` (SHA-256 string) to evidence entries, enabling downstream verification that wiki evidence hasn't drifted from its source file over time. ## Motivation When wiki claims reference source files (e.g., `memory/2026-05-12.md:1-18`), those files

### #81613 fix(steer): fallback to sibling direct/DM lanes when slash lane has no active run

- bucket: needs_proof
- author: freeter226
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:46:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #81594 When `/steer` targets a slash-command session lane but no active embedded run exists there, the command reports "no active run" even though the user has an active run on the sibling direct/DM lane for the same peer. ## Root Cause `resol

### #92995 fix(outbound): default to direct for DM-only channel plugins (fixes #92384)

- bucket: needs_proof
- author: XuZehan-iCenter
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:47:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #92384 ## Real behavior proof **Behavior or issue addressed:** WeChat channel creates duplicate sessions for the same DM peer - a correct `direct` session and a phantom `group` session. This happens because `detectTargetKind()` defaults bare target IDs t

### #72650 fix(exec-policy): accept trusted ~/.openclaw symlink at home boundary

- bucket: needs_proof
- author: Bojun-Vvibe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:47:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #72572. ## Problem The exec-approvals symlink hardening from #72377 only relaxed the restriction on the `OPENCLAW_HOME` root itself, so a symlinked `~/.openclaw` immediate child of a real home directory still trips `assertNoSymlinkPathComponents()`: \`\`

### #81766 feat(feishu): add old version document read support

- bucket: needs_proof
- author: kangjinghang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:47:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add transparent read support for legacy Feishu documents (type `doc`, URL format `/docs/:token`) that are not covered by the `@larksuiteoapi/node-sdk` docx API surface - The `readDoc` function auto-detects document version via the old doc meta API

### #81939 fix(commands): restore bare /new and /reset model fallthrough

- bucket: needs_proof
- author: COOLBGT
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:48:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Restore bare `/new` and `/reset` fallthrough to the model/startup path after reset hooks run. - Keep hook-routed reset replies terminal, so integrations that already sent a reset response do not also trigger a model turn. - Update reset command te

### #81994 feat(tools): add text-only profile

- bucket: needs_proof
- author: timwalterseh-max
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: S, proof: supplied, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:48:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a text-only tool profile that explicitly denies all tools. - Surfaces text-only in tool catalog/default profile metadata. - Allows managed screenwatch frames in local media roots. - Updates plugin trust audit coverage so text-only is treated 

### #82024 Fix noninteractive Control UI auto-builds

- bucket: needs_proof
- author: keshavbotagent
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, scripts, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:48:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary:\n- Run git-install dependency and Control UI build steps with CI plus pnpm confirm-modules-purge disabled.\n- Make scripts/ui.js auto-install dependencies noninteractively so gateway Control UI repair cannot block without a TTY.\n- Pass CI through the

### #82039 WhatsApp: separate outbound allowSendTo from inbound allowFrom

- bucket: needs_proof
- author: superWorldSavior
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, app: web-ui, gateway, commands, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:48:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: WhatsApp `allowFrom` currently gates both inbound DM access and direct-message outbound targets. - Why it matters: personal-number setups often need inbound locked to the owner while still allowing the agent to send outbound DMs to other 

### #82253 feat(slack): support per-channel replyToMode

- bucket: needs_proof
- author: truiem-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: slack, size: S, triage: dirty-candidate, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:49:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `replyToMode` to Slack per-channel config/schema/types and generated channel metadata - resolve channel config before account/chat-type fallback when determining Slack reply/thread mode - pass resolved channel config through the regex-mention 

### #93195 feat(sessions): add per-label summary to cleanup dry-run output (fixes #76826)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, P3, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:52:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Enhance `openclaw sessions cleanup --dry-run` output to include a summary grouped by session label, helping users understand cleanup impact before applying. ## Changes - **`sessions-table.ts`**: Added `label` and `displayName` fields to `SessionDisplayRow` typ

### #70051 [codex] suppress heartbeat-isolated exec self-wake loop

- bucket: needs_proof
- author: dashhuang
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:54:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Suppress node-level `exec` system-event replay for synthetic heartbeat-isolated sessions. When a heartbeat run is already executing inside a synthetic `:heartbeat` session, any internal `exec.started` / `exec.finished` / `exec.denied` node event sho

### #93192 fix(dreaming): filter already-emitted entries in light phase to prevent verbatim repeats (fixes #72096)

- bucket: needs_proof
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XS, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:55:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## fix(dreaming): filter already-emitted entries in light phase to prevent verbatim repeats (fixes #72096) During overnight dreaming, the light-phase work summary emits identical commit-list content every cycle because `recentEntries` is re-fetched from the sa

### #72548 feat(secrets): pluggable SecretRef sources via plugin SDK seam

- bucket: needs_proof
- author: akoscz
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: matrix, channel: telegram, app: web-ui, gateway, scripts, commands, agents, stale, size: XL, channel: qqbot, triage: needs-real-behavior-proof, dependencies-changed, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:55:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** OpenClaw's SecretRef contract was closed to three built-in sources (`env`/`file`/`exec`). Every new vendor backend (GCP Secret Manager, OS keyring, AWS Secrets Manager, HashiCorp Vault, native 1Password) required a core PR that touche

### #85651 feat(continuation): context-pressure-aware continuation (continue_work / continue_delegate / request_compaction)

- bucket: needs_proof
- author: karmafeast
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: imessage, channel: matrix, channel: mattermost, channel: msteams, channel: signal, channel: slack, channel: telegram, channel: voice-call, channel: whatsapp-web, app: web-ui, gateway, extensions: diagnostics-otel, extensions: memory-core, cli, scripts, commands, agents, size: XL, extensions: codex, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof, extensions: copilot
- gitcrawl snapshot updated: 2026-06-15T06:56:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Agent Self-Elected Turn Continuation > 🔖 design document: [`docs/design/continue-work-signal-v2.md`](https://github.com/karmaterminal/openclaw/blob/3b9f16d57f5/docs/design/continue-work-signal-v2.md) Persistent OpenClaw agents today are externally-pulsed e

### #92253 [codex] active-memory default to configured agents

- bucket: needs_proof
- author: Glucksberg
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:58:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Default Active Memory to configured OpenClaw agents when `plugins.entries.active-memory.config.agents` is omitted. - Fall back to the implicit `main` agent for minimal configs that do not define `agents.list`. - Preserve explicit empty `config.age

### #90867 fix(auto-reply): warn when /export-session only contains user messages (backend-delegated)

- bucket: needs_proof
- author: xydigit-sj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:59:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary When a session is driven by a CLI/ACP backend (e.g. Claude Code CLI), OpenClaw's own transcript only records the inbound user messages. `/export-session` would still produce a \"successful\" HTML export with empty summary stats and no assistant/tool

### #88329 fix: user-pinned model falls back to global chain on quota exhaustion

- bucket: needs_proof
- author: Knowcheng
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: docs, agents, size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:59:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When a user selects a model via \`/model <name>\`, \`modelOverride\` is stored in \`sessions.json\` with \`modelOverrideSource: \"user\"\`. The \`resolveEffectiveModelFallbacks\` function returns \`[]\` for user-sourced overrides, making \`hasFallba

### #82148 feat(agents): allow spawn fast mode overrides

- bucket: needs_proof
- author: jai
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:07:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `fastMode` override support to `sessions_spawn` - persist the override before first native subagent or ACP child turn - document fast-mode override behavior for subagents, ACP agents, and thinking config ## Real behavior proof - **Behavior or 

### #36630 fix(signal): complete bidirectional quote-reply support

- bucket: needs_proof
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, channel: imessage, channel: mattermost, channel: signal, channel: slack, channel: telegram, channel: whatsapp-web, app: web-ui, gateway, cli, agents, size: XL, extensions: memory-wiki, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:08:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds complete bidirectional Signal quote-reply support — both outbound (agent → user) and inbound (user → agent) quote context handling. ## Problem **Outbound (agent → user):** When the assistant includes reply tags (`[[reply_to_current]]`, `[[reply

### #38290 Gateway: allow extension origins in browser allowlist

- bucket: needs_proof
- author: brunowowk
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-15T07:08:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: `gateway.controlUi.allowedOrigins` could not explicitly allowlist `chrome-extension://<id>` because the origin checker normalized extension origins through `URL.origin`, which becomes `"null"` 

### #41067 Fix dashboard chat run recovery across reconnects

- bucket: needs_proof
- author: Elysium-Seeker
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: macos, app: web-ui, gateway, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:09:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes two closely related Gateway Dashboard chat reliability problems: 1. Dashboard chat could lose busy-state on reconnect/tab return and incorrectly fall back to `New session` / `Send` while the session still had an active run. 2. Gateway 

### #43837 feat: one-shot thinking level via `/think <level> <body>`

- bucket: needs_proof
- author: Astro-Han
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: L, triage: dirty-candidate, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:09:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `/think <level>` changes the session default permanently, requiring users to toggle back after a one-off deep-thinking request. - Why it matters: Users running cost-efficient defaults (e.g., `medium`) need occasional deeper thinking witho

### #44288 feat(backup): add exclude patterns, --smart-exclude, and protected path guards [ai]

- bucket: needs_proof
- author: brettdavies
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:10:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `openclaw backup create` has no way to exclude files/directories, causing (1) bloated archives from `venvs/`, `models/`, `logs/`, `completions/` and (2) silent backup stalls on installations with 4GB+ state directories (#42273, #41830

### #44884 security: gateway public network hardening

- bucket: needs_proof
- author: yeyanle6
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, commands, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:10:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Implements comprehensive security hardening for OpenClaw Gateway when exposed to public networks (e.g. `https://openclaw.allegro.earth/`). The existing security mechanisms (non-loopback auth enforcement, auth rate limiting, CORS checks) leave gaps t

### #46303 fix: drain inbound debounce buffer and followup queues before SIGUSR1 reload

- bucket: needs_proof
- author: joeykrug
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: bluebubbles, channel: discord, channel: msteams, channel: slack, channel: whatsapp-web, app: web-ui, gateway, cli, agents, channel: feishu, size: XL, extensions: memory-wiki, triage: dirty-candidate, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:10:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Problem When `config.patch` triggers a SIGUSR1 restart, two in-memory message buffers are silently wiped, causing inbound messages to be permanently lost: 1. **Inbound debounce buffers** — per-channel debounce timers (`createInboundDebouncer` closure-local 

### #46502 Rescue: add watchdog core service and cron engine

- bucket: needs_proof
- author: shichangs
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, cli, agents, size: XL, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:10:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw had no built-in isolated rescue watchdog that could detect an unhealthy managed gateway profile and repair it without going through the failing primary session. - Why it matters: the larger rescue-watchdog feature is hard to revi

### #47277 feat: add user-specific memory isolation

- bucket: needs_proof
- author: jung-geun
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, agents, size: XL, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T07:11:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds user-specific memory isolation to OpenClaw, enabling per-user memory files in multi-user environments. ## Changes ### Core Feature - **MemoryIsolationConfig** type added to `src/config/types.memory.ts` - `isolation.enabled` (default: `true`) to

