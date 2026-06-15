---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-041
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
  - "#71885"
  - "#71902"
  - "#72005"
  - "#72254"
  - "#72351"
  - "#72449"
  - "#72510"
  - "#72513"
  - "#72771"
  - "#72987"
  - "#73159"
  - "#75679"
  - "#75786"
  - "#80146"
  - "#80651"
  - "#80789"
  - "#80921"
  - "#81147"
  - "#81293"
  - "#81374"
  - "#81531"
  - "#81613"
  - "#92995"
  - "#81766"
  - "#81939"
cluster_refs:
  - "#71885"
  - "#71902"
  - "#72005"
  - "#72254"
  - "#72351"
  - "#72449"
  - "#72510"
  - "#72513"
  - "#72771"
  - "#72987"
  - "#73159"
  - "#75679"
  - "#75786"
  - "#80146"
  - "#80651"
  - "#80789"
  - "#80921"
  - "#81147"
  - "#81293"
  - "#81374"
  - "#81531"
  - "#81613"
  - "#92995"
  - "#81766"
  - "#81939"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.795Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 41

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #71885 fix(tasks): serialize structured task values for sqlite

- bucket: needs_proof
- author: likewen-tech
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:32:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - serialize structured `TaskRecord.task` values before binding them into sqlite - preserve existing string task values unchanged - add regression coverage that object task payloads are stored as JSON strings instead of throwing during sqlite binding

### #71902 Add managed flow residue resolution

- bucket: needs_proof
- author: smartpurchasingexpert-droid
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: cli, commands, agents, stale, size: L, extensions: qa-lab, triage: refactor-only, triage: dirty-candidate, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:32:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add source-level resolution for managed TaskFlow terminal residue - expose `openclaw tasks flow resolve-residue` and residue readback/audit coverage - keep flow terminal residue resolution distinct from linked child task cleanup - allow queued non

### #72005 feat: server-rendered status footer and context threshold warnings

- bucket: needs_proof
- author: wearegoodthanks
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, stale, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:32:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Server-rendered status footer and one-shot context-usage warnings for outbound chat messages. Fixes the "model lies about its own runtime state" failure mode in #71984 by moving footer authorship below the LLM. ## Why Asking a model to append a stat

### #72254 fix(skills): clean up partially-copied skill dirs after sync failure

- bucket: needs_proof
- author: fancymatt
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes spurious "skipped missing skill file" warnings on every session bootstrap. ## Problem `syncSkillsToWorkspace` copies skills from the agent's source workspace into the sandbox target workspace. When a copy fails (e.g. the source is a stale `.sk

### #72351 fix(tui): handle zero history limit

- bucket: needs_proof
- author: Stedyclaw
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes `openclaw tui --history-limit 0` so it disables history loading locally instead of sending an invalid `chat.history` request to the gateway. Before this change, the TUI passed `limit: 0` through to the gateway, which rejected it because histor

### #72449 Fix/cron parse undefined

- bucket: needs_proof
- author: Eruditi
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, stale, size: S, triage: refactor-only, triage: blank-template, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #72510 fix(group-chat): wire multi-agent bot-targeting signals end-to-end (#56692)

- bucket: needs_proof
- author: Bojun-Vvibe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, stale, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #56692. ## Problem In a group chat with multiple bots, an agent can't tell which messages in the recent history were addressed to **itself** vs. another bot in the same group. `InboundHistory` and the reply context only carry sender / body / timestamp;

### #72513 fix(mattermost): handle post_edited websocket events (#71930)

- bucket: needs_proof
- author: Bojun-Vvibe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:33:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #71930. ## Problem In a Mattermost channel where the bot is already running, **adding an @mention by editing an existing message** never wakes the agent. The mention is simply ignored. ## Root cause The Mattermost WebSocket dispatcher at `extensions/mat

### #72771 feat(gateway): emit agent.run.status events for run observability

- bucket: needs_proof
- author: chinadbo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:34:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds `agent.run.status` gateway event emitted at agent run start and completion - Start payload: `agentId`, `sessionKey`, `model`, `startedAt` - Completion payload: `status` (completed/failed/interrupted), `durationMs`, token usage (input/output/c

### #72987 docs(compaction): document reserveTokensFloor default (20,000 tokens)

- bucket: needs_proof
- author: ayesha-aziz123
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, stale, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T06:34:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `reserveTokensFloor` under `agents.defaults.compaction` is used in `src/auto-reply/reply/agent-runner-memory.ts` (lines 393–395) with a fallback default of 20 000 tokens, but the configuration reference gave no indication of this default

### #73159 Add tool-call failure guardrails

- bucket: needs_proof
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, stale, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T06:35:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Implements guardrails for recurring OpenClaw tool-call failure classes from task 7d0f53dc.\n\nChanges:\n- read tool adds actionable guidance for missing-file ENOENT/ENOTDIR path failures\n- message tool rejects unsupported channel actions before dispatch when

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
