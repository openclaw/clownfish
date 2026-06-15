---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-012
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
  - "#89852"
  - "#89999"
  - "#79518"
  - "#89983"
  - "#80199"
  - "#80515"
  - "#80774"
  - "#80922"
  - "#81104"
  - "#90224"
  - "#90232"
  - "#90258"
  - "#90274"
  - "#90026"
  - "#92578"
  - "#90161"
  - "#39065"
  - "#90298"
  - "#86637"
  - "#90332"
  - "#90406"
  - "#90062"
  - "#90099"
  - "#82160"
  - "#82386"
cluster_refs:
  - "#89852"
  - "#89999"
  - "#79518"
  - "#89983"
  - "#80199"
  - "#80515"
  - "#80774"
  - "#80922"
  - "#81104"
  - "#90224"
  - "#90232"
  - "#90258"
  - "#90274"
  - "#90026"
  - "#92578"
  - "#90161"
  - "#39065"
  - "#90298"
  - "#86637"
  - "#90332"
  - "#90406"
  - "#90062"
  - "#90099"
  - "#82160"
  - "#82386"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.197Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 12

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #80922 Route allow-always through command authorization planner

- bucket: maintainer_owned
- author: jesse-merhi
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: XL, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T21:46:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add the command authorization planner contract and Tree-sitter-backed POSIX planner corpus. - Route POSIX allowlist evaluation, allow-always persistence, approval display summaries, control-command rejection, and enforced shell rendering through t

### #81104 Policy: add runtime audit metadata and attestation enforcement

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, agents, maintainer, size: XL, proof: sufficient, extensions: oc-path, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: ⏳ waiting on author, proof: 📸 screenshot, extensions: policy
- gitcrawl snapshot updated: 2026-06-14T21:51:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Policy: add runtime audit metadata and attestation enforcement Branch: `policy-runtime-audit` GitHub base: `main` Logical base: `policy-conformance-examples` Current draft: https://github.com/openclaw/openclaw/pull/81104 Draft status: final policy runtime/au

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

### #92578 refactor(whatsapp): add inbound admission foundation

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, maintainer, size: L, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:12:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a public-safe WhatsApp inbound `admission` envelope for accepted `WebInboundMessage` callbacks - build admission from the resolved ingress/access-control result and attach it in the real web inbox monitor path - keep blocked access-control res

### #90161 fix(channels): guard loaded channel registry metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T22:14:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden loaded channel registry projection against malformed plugin metadata. - Skip loaded channel plugins with unreadable ids, fall back when `meta.order` is unreadable, and apply the same guarded id/meta reads to the hot direct-read path. - Pres

### #39065 Security: add configurable unpaired DM responses

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: channel: bluebubbles, channel: discord, channel: googlechat, channel: imessage, channel: mattermost, channel: nextcloud-talk, channel: signal, channel: slack, channel: telegram, channel: whatsapp-web, channel: zalo, channel: zalouser, maintainer, channel: feishu, channel: irc, size: M, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T22:19:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: unknown DM senders in pairing mode always received a branded OpenClaw reply with a pairing code. - Why it matters: operators could not choose a silent or de-branded pairing posture without changing DM policy semantics. - What changed: add

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

