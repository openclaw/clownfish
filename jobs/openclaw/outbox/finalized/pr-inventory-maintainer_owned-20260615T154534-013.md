---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-013
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
  - "#77559"
  - "#77891"
  - "#80967"
  - "#82754"
  - "#83081"
  - "#90438"
  - "#90439"
  - "#89961"
  - "#90477"
  - "#90155"
  - "#90156"
  - "#90182"
  - "#78184"
  - "#78591"
  - "#90611"
  - "#83383"
  - "#83391"
  - "#83415"
  - "#83440"
  - "#83504"
  - "#83536"
  - "#83573"
  - "#83611"
  - "#80590"
  - "#90723"
cluster_refs:
  - "#77559"
  - "#77891"
  - "#80967"
  - "#82754"
  - "#83081"
  - "#90438"
  - "#90439"
  - "#89961"
  - "#90477"
  - "#90155"
  - "#90156"
  - "#90182"
  - "#78184"
  - "#78591"
  - "#90611"
  - "#83383"
  - "#83391"
  - "#83415"
  - "#83440"
  - "#83504"
  - "#83536"
  - "#83573"
  - "#83611"
  - "#80590"
  - "#90723"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.197Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 13

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #77559 [codex] Fix missing channel plugin diagnostics

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:04:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat missing catalog-backed `plugins.entries.*` channel plugins as repairable installs instead of stale config. - Keep `plugins.allow` on the existing stale-config warning path because `openclaw doctor --fix` does not repair allow-only references

### #77891 fix(sessions): unbind conversation bindings when missing transcripts are pruned

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:05:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: When `sessions cleanup --fix-missing` removes a session store entry because its transcript file is missing, the matching conversation binding in `current-conversations.json` is left intact. Subsequent messages resolve this stale bind

### #80967 Plugin SDK: add host-owned structured runtime LLM

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, agents, maintainer, size: XL, plugin: file-transfer, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:08:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rebase openclaw/openclaw#80203 onto current `main` after the plugin SDK/mainline drift. - Keep the host-owned `api.runtime.llm.completeStructured(...)` runtime lane with JSON/schema validation, optional image input, model/agent/profile trust gates

### #82754 Fix context overflow fallback to larger models

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, commands, agents, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:08:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #9986 by letting model fallback handle exhausted context overflow when a later configured fallback has a known larger effective context window. - classifies thrown and embedded context overflow as `context_overflow` failover only after inner c

### #83081 fix(channels): protect channel config repair paths

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc, shakkernerd
- labels: docs, channel: line, channel: matrix, channel: nextcloud-talk, channel: telegram, channel: whatsapp-web, gateway, cli, scripts, commands, docker, maintainer, channel: feishu, size: XL, channel: qqbot, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:13:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replace protected channel-key enumeration with structural ownership-root protection under concrete `channels.<id>` and `channels.<id>.accounts.<account>` roots - keep shared channel metadata (`channels.defaults`, `channels.modelByChannel`) outside

### #90438 refactor: add SQLite embedded run target adapter

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:16:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Implements the SQLite adapter side of the embedded-agent run/session target seam. The adapter resolves storage-neutral run/session targets through SQLite-backed session access while retaining the named active artifact boundary needed by current embedde

### #90439 refactor: add embedded run session target seam

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:16:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds a storage-neutral embedded-agent run/session target seam over the existing file-backed implementation. Internal helper runs can now target agent/session identity without requiring callers to construct or pass a `sessionFile` path as normal runtime

### #89961 fix(plugins): guard manifest suppression metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:17:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard manifest built-in model suppression planning against unreadable per-plugin metadata. - Skip only malformed manifest rows while preserving healthy alias-owned suppression entries. - Add regression coverage for poisoned `origin` and `modelCata

### #90477 fix: defer WhatsApp visible-reply typing until send start

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, maintainer, size: L, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:17:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary WhatsApp group turns that are configured for automatic visible replies can defer the actual user-visible send until the channel delivery layer decides the payload is really going out. Before this change, the reply lifecycle could start typing as soo

### #90155 fix(channels): guard legacy config rule metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:18:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden channel legacy config rule collection against malformed plugin-provided doctor metadata. - Skip unreadable rule rows, unreadable rule arrays, and throwing rule matchers instead of crashing config diagnostics. - Preserve healthy sibling rule

### #90156 fix(agent-runtime): guard prompt cache tool names

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:18:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden prompt-cache observability against hostile tool-name descriptors. - Treat unreadable and non-string tool names as absent while preserving the existing trim/filter behavior for healthy tools. - Keep the change scoped to diagnostics metadata;

### #90182 fix(plugins): isolate definition metadata failures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:18:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate failures while registering plugin definition metadata during full activation - roll back reload/node-host/security-audit metadata mutations before marking the offending plugin as errored - keep healthy sibling plugins loadable when a malfo

### #78184 fix(exec): clean approval-pending chat prompts

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, commands, agents, maintainer, size: M, mantis: telegram-visible-proof, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T23:36:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes the Telegram/Zollie approval loop symptom from the live test instance by separating two things that were being collapsed into one confusing chat prompt: - approval-pending gateway/node execs, where no command is running yet and the res

### #78591 fix(channels): list channel catalog status

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, commands, maintainer, size: M, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:36:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `openclaw channels list` so it lists channel surfaces only, instead of mixing in model/auth provider profiles. - includes bundled chat channels, trusted catalog channels, and configured channel ids - reports configured/enabled/installed status f

### #90611 feat(i18n): localize runtime user-facing copy

- bucket: maintainer_owned
- author: lanzhi-lee
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: imessage, app: web-ui, gateway, agents, size: L, extensions: qa-lab, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T23:53:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Localizes shared runtime/user-facing copy through the existing wizard i18n runtime translator and adds English, Simplified Chinese, and Traditional Chinese locale entries for the new runtime keys. ## What changed - Added runtime copy keys under `run

### #83383 fix(auth): clean refresh contention diagnostics

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:10:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Keep OAuth `refresh_contention` diagnostics deterministic by avoiding nested file-lock cause flattening in user-facing refresh failures. - Preserve programmatic `code` / `lockPath` on `OAuthManagerRefreshError` while redacting lock paths from mess

### #83391 fix(cli): harden config and command validation

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:10:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - harden operator-facing CLI validation for configure sections, channel log filters/line limits, agent timeouts, session active filters, and OpenRouter scan counts - improve setup/config diagnostics for invalid non-interactive setup, malformed inclu

### #83415 feat: add workspace checkpoints

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: shakkernerd
- labels: docs, cli, agents, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:10:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds hidden git-backed workspace checkpoints before `write`, `edit`, `apply_patch`, and `exec` tool calls. - Adds `openclaw checkpoints status/create/list/diff/restore` for manual checkpoint inspection and rollback. - Documents checkpoint config, 

### #83440 feat(cli): resolve pending exec approvals

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:11:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Add `openclaw approvals pending` / `openclaw approvals list` for runtime pending exec approval requests. - Add `openclaw approvals resolve <id> <decision>` / `respond` to submit `allow-once`, `allow-always`, `always`, or `deny` through the gateway ap

### #83504 Add Telegram provider setup flow

- bucket: maintainer_owned
- author: obviyus
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, scripts, commands, maintainer, size: XL, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:12:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Add owner-only Telegram `/providers` setup for private DMs. - Reuse provider auth/profile/config write paths through a private local setup runtime. - Consume pending secret replies before normal Telegram routing and attempt message deletion. - Harden

### #83536 test(qa-lab): trace Slack RTT ping pong

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, maintainer, size: XL, extensions: qa-lab, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T00:13:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Switch the Slack live canary to a ping/pong marker and measure RTT from Slack accepted timestamps when available. - Record observer lag, poll counts, gateway RSS samples, gateway phase traces, and optional heap checkpoints for Slack live runs. - Add 

### #83573 feat(mattermost): add /model dialog picker

- bucket: maintainer_owned
- author: mukhtharcm
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: mattermost, size: XL, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:14:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Mattermost `/oc_model` and `/oc_models` still relied on the older message picker, so they could not use Mattermost's richer dialog flow. - Why it matters: the Discord picker already feels native and multi-step; Mattermost needed a compara

### #83611 feat: add shared notification wake policy

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: telegram, maintainer, size: L, mantis: telegram-visible-proof, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:15:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Adds core `notificationWake.reactions` policy and config/schema metadata. - Routes Discord and Telegram reaction system events through a shared core helper, defaulting to queued-only behavior unless configured to wake or off. - Uses stable reaction k

### #80590 fix(codex): expose sandbox shell tools

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, extensions: codex, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T00:19:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Expose OpenClaw sandbox-routed shell access to Codex as `sandbox_exec` and `sandbox_process` only for active non-Docker sandbox backends such as SSH. - Keep Codex native shell enabled and keep plain OpenClaw `exec` / `process` filtered from Codex 

### #90723 feat(hooks): add Gmail Pub/Sub pull delivery mode

- bucket: maintainer_owned
- author: joshp123
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, cli, maintainer, size: L, triage:blocked, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T00:25:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Human-written request i think you should now start drafting implementation for each of the tools in worktrees and then opening draft PRs against the repos, at least for gog and openclaw. can you do that using [$session-goal-writer](/nix/store/hcks99ivrjhg2pg

