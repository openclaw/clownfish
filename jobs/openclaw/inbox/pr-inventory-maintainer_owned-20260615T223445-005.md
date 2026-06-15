---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-005
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
  - "#90224"
  - "#90232"
  - "#90258"
  - "#90274"
  - "#90026"
  - "#90161"
  - "#90298"
  - "#86637"
  - "#90332"
  - "#90406"
  - "#90062"
  - "#90099"
  - "#82160"
  - "#82386"
  - "#77559"
  - "#77891"
  - "#82754"
  - "#83081"
  - "#90439"
  - "#89961"
  - "#90477"
  - "#90155"
  - "#90156"
  - "#90182"
  - "#78591"
cluster_refs:
  - "#90224"
  - "#90232"
  - "#90258"
  - "#90274"
  - "#90026"
  - "#90161"
  - "#90298"
  - "#86637"
  - "#90332"
  - "#90406"
  - "#90062"
  - "#90099"
  - "#82160"
  - "#82386"
  - "#77559"
  - "#77891"
  - "#82754"
  - "#83081"
  - "#90439"
  - "#89961"
  - "#90477"
  - "#90155"
  - "#90156"
  - "#90182"
  - "#78591"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.787Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 5

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90224 fix(agents): skip unreadable tool search catalog entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:58:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot Tool Search catalog tool metadata before registering hidden catalog entries. - Skip a single catalog target when its name/schema descriptor is unreadable, while still cataloging healthy sibling tools. - Apply the same filtering to client-

### #90232 fix(plugin-sdk): guard provider tool schema helpers

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:58:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - harden provider SDK tool-schema normalization/inspection against unreadable tool schema fields - preserve unreadable tools unchanged while continuing to normalize/diagnose healthy sibling tools - add regression coverage for top-level `parameters`

### #90258 fix(qr): stabilize terminal colors

- bucket: maintainer_owned
- author: sliverp
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XS, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look, proof: 📸 screenshot
- gitcrawl snapshot updated: 2026-06-14T21:59:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes terminal QR rendering so large QR codes keep a stable white background and black foreground even in terminals with dark or remapped ANSI themes. - Replaces the default qrcode terminal renderer for full-size QR output with OpenClaw’s own matr

### #90274 fix(agents): preserve unreadable wrapped tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:00:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve unreadable extension `ToolDefinition.parameters` through wrapping without crashing wrapper construction - preserve unreadable `AgentTool.parameters` when synthesizing session tool definitions - avoid substituting a fake valid schema so do

### #90026 fix(gateway): guard channel method descriptor projection

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:00:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a shared channel gateway method-name projection helper that ignores unreadable plugin metadata accessors. - Route web-login provider discovery, advertised gateway method listing, and startup channel method listing through the guarded projectio

### #90161 fix(channels): guard loaded channel registry metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:14:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden loaded channel registry projection against malformed plugin metadata. - Skip loaded channel plugins with unreadable ids, fall back when `meta.order` is unreadable, and apply the same guarded id/meta reads to the hot direct-read path. - Pres

### #90298 fix(qa-lab): guard parity stable hashes

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, extensions: qa-lab, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:24:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Extracts the QA-lab parity stable hash into one shared helper used by both harness parity and runtime parity. - Guards stable hashing against unreadable object fields, unreadable array entries, and cycles so one bad captured tool schema cannot cra

### #86637 fix(agents): cap DSML recovery buffer to prevent unbounded memory growth

- bucket: maintainer_owned
- author: SebTardif
- author association: CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: agents, size: S, proof: supplied, P1, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:24:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #90015 ## Summary The `createDeepSeekDsmlToolCallRecoverer()` accumulates text in a buffer while waiting for a DSML close token. A malicious or buggy provider response could send an extremely large DSML body without ever closing it, causing unbounded mem

### #90332 fix(codex): guard trajectory tool schema capture

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, extensions: codex, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:25:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard Codex app-server trajectory tool-definition capture against throwing tool `name`, `description`, and `inputSchema` getters. - Keep descriptor reads one-shot, skip tools without readable names, and omit unreadable optional descriptions. - Bou

### #90406 fix(google): skip unreadable tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, extensions: google, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:26:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - harden shared Google/Gemini tool schema projection by materializing schemas before payload construction and skipping unreadable, cyclic, or oversized declarations - apply the same schema guard to the Google plugin transport and realtime voice decl

### #90062 fix(agent): infer agent from fresh session keys

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: S, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:26:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #89746. Gateway `agent` requests that supplied a fresh explicit session key such as `agent:main:probe-*` could reach dispatch without carrying the agent id embedded in the key. Existing session resolution could still create the session row, bu

### #90099 fix(plugin-sdk): guard facade registry rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:26:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin SDK facade registry lookups so malformed manifest rows are skipped instead of aborting facade module resolution. - Apply the same row normalization to facade activation metadata lookup, preserving id, root basename, and channel fallba

### #82160 fix(codex): wait for migrated plugin inventory

- bucket: maintainer_owned
- author: rubencu
- author association: CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: stale, size: M, extensions: codex, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:54:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Codex migration could stop target plugin discovery as soon as `openai-curated` appeared, even if the selected plugin entry had not loaded yet. - Why it matters: a transient partial target `plugin/list` response could report a source-insta

### #82386 docs: sync maintainer roster source

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T23:00:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replace the stale partial maintainer list in CONTRIBUTING.md with the current GitHub Maintainer team roster - document the source-of-truth split: GitHub team membership for the public roster, private Discord #maintainer-whois for human-readable ma

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

### #78591 fix(channels): list channel catalog status

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, commands, maintainer, size: M, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T23:36:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `openclaw channels list` so it lists channel surfaces only, instead of mixing in model/auth provider profiles. - includes bundled chat channels, trusted catalog channels, and configured channel ids - reports configured/enabled/installed status f
