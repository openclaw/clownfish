---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-004
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
  - "#90109"
  - "#90112"
  - "#90114"
  - "#90120"
  - "#90136"
  - "#90150"
  - "#77542"
  - "#77672"
  - "#78631"
  - "#78789"
  - "#78857"
  - "#78875"
  - "#90135"
  - "#90153"
  - "#90160"
  - "#90168"
  - "#90194"
  - "#79198"
  - "#89852"
  - "#89999"
  - "#79518"
  - "#89983"
  - "#80199"
  - "#80515"
  - "#80774"
cluster_refs:
  - "#90109"
  - "#90112"
  - "#90114"
  - "#90120"
  - "#90136"
  - "#90150"
  - "#77542"
  - "#77672"
  - "#78631"
  - "#78789"
  - "#78857"
  - "#78875"
  - "#90135"
  - "#90153"
  - "#90160"
  - "#90168"
  - "#90194"
  - "#79198"
  - "#89852"
  - "#89999"
  - "#79518"
  - "#89983"
  - "#80199"
  - "#80515"
  - "#80774"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.787Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 4

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90109 fix(commands): guard manifest catalog filters

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, maintainer, size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:04:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard provider-filtered manifest model catalog loading against unreadable manifest `id` accessors. - Skip malformed manifest rows before narrowing the registry by plugin id. - Add a regression test proving a healthy later provider catalog still lo

### #90112 fix(commands): guard provider catalog aliases

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:05:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard model-list provider static-catalog filter matching against unreadable provider discovery id/alias fields. - Skip malformed discovery provider rows while preserving healthy later provider aliases and hook aliases. - Add a regression test for

### #90114 fix(telegram): suppress failure fallback when source delivery is message-tool-only

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, size: XS, mantis: telegram-visible-proof, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:05:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #90091 reports that Telegram group turns using `message_tool_only` source delivery still emit a spurious `"No response generated. Please try again."` fallback message after the agent already delivered the visible reply via the

### #90120 fix(plugins): guard provider contract metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:05:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent provider contract registry helpers from crashing when one plugin returns a provider object with throwing or malformed `id`, `aliases`, or `hookAliases` metadata. - Keep healthy provider contract entries usable for alias resolution, direct

### #90136 fix(plugins): guard manifest activation planning

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:06:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guards manifest activation planning against unreadable manifest rows before owner policy or trigger matching runs. - Preserves existing activation trigger behavior by snapshotting only the fields the planner already reads: id, origin, activation h

### #90150 fix(doctor): guard tool allowlist manifest metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:06:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guards doctor tool-allowlist manifest scans against unreadable plugin ids and tool-contract metadata. - Keeps healthy manifest owners visible so doctor can still warn when a configured tool is owned by a plugin outside `plugins.allow`. - Adds regr

### #77542 [codex] add gateway stall diagnostics

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: slack, gateway, cli, scripts, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T20:15:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This adds higher-signal gateway stall diagnostics for slow Telegram turns where the transport is healthy but the Gateway/embedded Codex run stops making useful progress. Changes: - Add a lightweight diagnostic phase ring and emit `diagnostic.phase.c

### #77672 fix(webchat): unblock backend exec approvals

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, cli, maintainer, size: M, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:16:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Let WebChat send `/approve ...` through the existing backend command path immediately while a run is blocked on approval. - Hydrate pending exec/plugin approval cards after Control UI reconnects. - Add CLI inspection affordances: `openclaw approvals

### #78631 test(plugins): cover stale OpenClaw peer repair during install

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:22:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This adds an e2e regression for the dirty managed-npm state that can make `openclaw plugins install @opik/opik-openclaw` fail with `ERESOLVE` after prior host-peer plugin installs. The fixture mirrors the bad state from the live box: - a Codex-like

### #78789 fix(status): reduce deep status manifest scans

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, commands, agents, maintainer, size: XL, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:26:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reuse the gateway startup plugin metadata snapshot for compatible direct metadata loads so deep status paths avoid repeatedly restatting bundled plugin manifests. - Carry bundled manifests discovered during plugin discovery into channel catalog me

### #78857 perf(agents): trim agent tool helper queues

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: channel: slack, channel: telegram, app: web-ui, gateway, agents, maintainer, size: XL, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:29:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cherry-pick the agents/tools performance bucket onto main. - Replace queue `shift()`/array-chain hot paths in OpenAI WebSocket streaming, tool-call id resolution, agent reply/tool helpers, Slack, Telegram, SDK, and bundled channel helper assembly.

### #78875 perf(plugins): trim catalog and setup normalization

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: channel: discord, channel: mattermost, channel: slack, channel: telegram, gateway, agents, maintainer, size: XL, extensions: qa-lab, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:30:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replays the catalog/plugin/setup normalization bucket onto current `main`. - Keeps the catalog/setup, plugin control-plane, setup formatter, channel catalog, and plugin helper rewrites. - Intentionally omits the stale package-entry-resolution hunk

### #90135 fix(plugins): guard manifest owner metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:33:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent manifest command-alias and tool-owner lookup from crashing when one manifest registry row exposes unreadable metadata. - Keep owner resolution best-effort: skip only the unreadable row and continue to healthy plugin rows. - Preserve existi

### #90153 fix(doctor): isolate channel doctor hook failures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: cli, commands, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:44:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent channel plugin doctor hooks from crashing doctor preview, repair, mutable allowlist, stale cleanup, and config-sequence paths. - Convert plugin-owned doctor hook failures into sanitized channel-scoped warnings where doctor has a warning su

### #90160 fix(channels): guard pairing adapter metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:45:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden channel pairing adapter lookup against malformed plugin metadata. - Treat a throwing `plugin.pairing` descriptor as unsupported for that plugin instead of crashing pairing channel listing or direct adapter lookup. - Preserve healthy pairing

### #90168 fix(gateway): guard reload metadata descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:45:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens gateway config reload planning against malformed channel/plugin reload metadata. - Keeps healthy channel/plugin reload rules usable when one descriptor is unreadable. - Fails closed for unreadable plugin reload registrations on plugin cont

### #90194 fix(cron): sweep isolated-target base cron sessions under sessionRetention

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:46:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #89666 reports that `cron.sessionRetention` has no effect when all cron jobs use `sessionTarget: isolated`. Sessions under `agent:main:cron:<jobId>` accumulate indefinitely — the reporter confirmed 43 sessions spanning all prio

### #79198 refactor(plugins): expose loaded runtime metadata

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: M, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:54:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: later prepared-runtime migrations need loaded provider, channel, public metadata, and outbound adapter facts from Gateway startup, but those facts were not exposed through one stable loaded-runtime surface. - Why it matters: without this

### #89852 fix(gateway): guard plugin session action lookups

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T20:56:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin session action registry lookup during least-privilege scope resolution so unreadable stale rows do not block later healthy registrations. - Guard the matching `plugins.sessionAction` dispatch lookup for the same stale-row case. - Add

### #89999 fix(plugins): isolate CLI descriptor rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T20:57:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate plugin-owned CLI descriptor rows during lazy plugin CLI registration - skip unreadable descriptor rows and descriptors with unreadable required fields while preserving healthy lazy command roots - add focused regression coverage for poison

### #79518 Prefer task-tracked Codex delegation

- bucket: maintainer_owned
- author: mbelinky
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, extensions: codex, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:03:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a Codex app-server developer-instruction guardrail that prefers OpenClaw `sessions_spawn` for delegated/background/"let me know when done" work when that dynamic tool is available. - Keep native Codex `spawnAgent` available for explicit Codex-

### #89983 fix(agents): isolate provider attribution manifest rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:21:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard provider attribution manifest metadata reads so one unreadable plugin-owned provider endpoint or request row cannot abort native provider routing classification. - Preserve healthy manifest rows for endpoint classes, provider families, and c

### #80199 Prioritize foreground command queue work

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, maintainer, size: M, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T21:23:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Add Low/Normal/High priority scheduling inside command lanes while preserving FIFO order within a priority. - Promote old low/normal entries after the starvation threshold so background work cannot wait forever. - Mark user/manual embedded runs high

### #80515 refactor(whatsapp): add canonical target facts

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, maintainer, size: L, P3, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T21:35:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2-5 bullets: - Problem: WhatsApp target handling was split across normalization, outbound authorization, session routing, action context checks, send JID conversion, and composing-presence decisions. - Why it matters:

### #80774 [codex] Add manifest plugin auth requirements

- bucket: maintainer_owned
- author: scoootscooob
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:41:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add optional native plugin manifest `authRequirements` metadata for provider credentials, channel accounts, external services, and host runtime capabilities. - Carry the metadata through manifest registry records and export `collectPluginAuthRequi
