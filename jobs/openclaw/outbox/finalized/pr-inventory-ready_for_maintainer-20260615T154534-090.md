---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-090
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
  - "#77987"
  - "#77999"
  - "#78090"
  - "#78105"
  - "#78113"
  - "#78115"
  - "#78139"
  - "#78199"
  - "#78411"
  - "#78436"
  - "#78438"
  - "#78452"
  - "#78554"
  - "#90033"
  - "#90041"
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
cluster_refs:
  - "#77987"
  - "#77999"
  - "#78090"
  - "#78105"
  - "#78113"
  - "#78115"
  - "#78139"
  - "#78199"
  - "#78411"
  - "#78436"
  - "#78438"
  - "#78452"
  - "#78554"
  - "#90033"
  - "#90041"
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
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.211Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 90

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #77987 fix(gateway): cap auth-rate-limit entries map under unique-IP flood

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:04:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #77986 ## Summary `src/gateway/auth-rate-limit.ts` keeps an in-memory `entries: Map<scope:ip, RateLimitEntry>` of failed auth attempts. There is a periodic `setInterval(prune)` (default 60s) that walks the Map and drops entries with empty attempts, but 

### #77999 fix(memory): reopen closed sqlite handles

- bucket: ready_for_maintainer
- author: dmbyte
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:04:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Detect when a cached memory index manager holds a closed sqlite handle and reopen it before search/status/sync. - Drop closed cached managers before reuse. - Add a regression test that closes the underlying DB handle and verifies status/search rec

### #78090 docs: call out discord external plugin install

- bucket: ready_for_maintainer
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:08:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Documents the Discord external plugin install step in the Discord quick setup. The root package/Docker image no longer bundles the Discord runtime by default. A config-only `channels.discord` block can therefore leave Docker/npm users with Discord m

### #78105 fix(plugins): make empty-allowlist actionable for new users

- bucket: ready_for_maintainer
- author: pahuchi-joe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:09:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: On fresh installs, `plugins.allow is empty; discovered non-bundled plugins may auto-load: ...` and `loaded without install/load-path provenance` warnings list ids but give no remediation, and users routinely confuse channel ids (`feishu`)

### #78113 fix(agents): restore workspace-<id> sibling layout for non-default agents

- bucket: ready_for_maintainer
- author: jkf87
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:09:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** PR #59789 changed `resolveAgentWorkspaceDir` so that non-default agents would use `agents.defaults.workspace` as a base, resulting in nested paths like `~/.openclaw/workspace/newbot/` instead of the expected sibling layout `~/.opencla

### #78115 feat: add worker trigger loop CLI contract

- bucket: ready_for_maintainer
- author: Gforce10-design
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T19:09:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds the bounded `openclaw worker trigger loop` CLI contract. - Registers the worker command in the CLI command registry and descriptors. - Adds command and registry tests for the local contract path. ## Real behavior proof - Behavior or issue add

### #78139 fix(cron): hint after disable about list filtering disabled jobs

- bucket: ready_for_maintainer
- author: kate
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:10:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw cron disable <id>` appears to delete recurring cron jobs because `openclaw cron list` hides disabled jobs by default. Users see a successful disable response, then `cron list` shows the job is gone, and reasonably conclude the j

### #78199 fix(config): tolerate stale model catalog entries

- bucket: ready_for_maintainer
- author: YannCedric
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:11:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: A stale suppressed model entry in `agents.defaults.models` could make config validation fail even when that entry was only an inactive catalog/allowlist option. - Why it matters: Config validation failure can prevent the gateway from beco

### #78411 docs(concepts): standardize active memory related heading

- bucket: ready_for_maintainer
- author: GGzili
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: refactor-only, proof: supplied, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:19:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rename `## Related pages` to `## Related` in the Active memory concept doc - Align the page with the heading used by the rest of the docs set ## Real behavior proof **Behavior or issue addressed:** The Active memory concept doc used `## Related pa

### #78436 fix(agents): scope session-history guard to latest-user-answered

- bucket: ready_for_maintainer
- author: kenners22
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:20:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Addresses part of #69086 (session-history guard only; retry-prompt hook/override remains separate). ## Summary - scope the session-history guard to assistant messages that occur after the latest user message - inspect the transcript tail rather than only the f

### #78438 fix(telegram): add OPENCLAW_TELEGRAM_FORCE_IPV4 opt-in env var

- bucket: ready_for_maintainer
- author: glasswings-lang
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: XS, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:20:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Some hosts (notably Windows 11 with broken or partial IPv6 connectivity) see Telegram polling stalls because the dual-stack happy-eyeballs attempt sits in the IPv6 half-open state long enough to wedge the long-poll dispatcher pool. The existing stic

### #78452 feat(whatsapp): add native location send + action routing

- bucket: ready_for_maintainer
- author: cpena28
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: whatsapp-web, app: web-ui, gateway, cli, agents, size: XL, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:21:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add native location send support to WhatsApp outbound adapter (`sendLocation`) - wire `message.send` latitude/longitude flow through gateway + outbound runner - expose WhatsApp `location` action in plugin action runtime - add validation and tests 

### #78554 fix(googlechat): fix googlechat grant_type

- bucket: ready_for_maintainer
- author: donbowman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: googlechat, size: M, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T19:25:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary in recent refactor of gaxios, Google chat was broken. #77307 has more details. - Resolves the `unsupported_grant_type` error by ensuring we instantiate the exact same version of `Gaxios` that `google-auth-library` uses internally. - Previously, the 

### #90033 fix(llm): apply model.compat.sendSessionAffinityHeaders at openai-tra…

- bucket: ready_for_maintainer
- author: obuchowski
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:28:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary * Fix a regression where [model.compat.sendSessionAffinityHeaders](https://github.com/openclaw/openclaw/blob/main/packages/llm-core/src/types.ts#L403-L404) stopped being honored after the major inference “gate” moved from `src/llm/providers/openai-c

### #90041 fix(subagents): prevent message_tool_only from swallowing subagent completion message (AI-assisted)

- bucket: ready_for_maintainer
- author: GanglyPuma22
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, proof: sufficient, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T19:28:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Three coordinated fixes that together ensure subagent completions reliably reach the user in group chats, topic threads, and DMs — regardless of group-chat delivery mode configuration (`message_tool_only`). 1. **Lifecycle honesty (agent-command.ts):** Classify

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

