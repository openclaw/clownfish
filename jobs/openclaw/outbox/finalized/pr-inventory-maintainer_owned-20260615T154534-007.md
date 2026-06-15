---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-007
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
  - "#89720"
  - "#89730"
  - "#89737"
  - "#89753"
  - "#69039"
  - "#70906"
  - "#73365"
  - "#89458"
  - "#89632"
  - "#73724"
  - "#73751"
  - "#74163"
  - "#74761"
  - "#75427"
  - "#75614"
  - "#89769"
  - "#89775"
  - "#89782"
  - "#89789"
  - "#89794"
  - "#89824"
  - "#89829"
  - "#76027"
  - "#76221"
  - "#76235"
cluster_refs:
  - "#89720"
  - "#89730"
  - "#89737"
  - "#89753"
  - "#69039"
  - "#70906"
  - "#73365"
  - "#89458"
  - "#89632"
  - "#73724"
  - "#73751"
  - "#74163"
  - "#74761"
  - "#75427"
  - "#75614"
  - "#89769"
  - "#89775"
  - "#89782"
  - "#89789"
  - "#89794"
  - "#89824"
  - "#89829"
  - "#76027"
  - "#76221"
  - "#76235"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.196Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 7

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89720 fix(plugin-sdk): guard plain text tool name reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:37:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plain-text tool-call compatibility against unreadable tool `name` accessors in provider stream context. - Skip only malformed/unreadable context tool entries while preserving healthy sibling tool-call promotion. - Add regression coverage for

### #89730 fix(agents): guard lean tool name reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:37:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Catch-bound local-model lean tool name normalization so unreadable descriptors cannot crash lean filtering. - Drop malformed or empty-name descriptors only while lean filtering is active; disabled lean mode still returns the original tool array. - Ad

### #89737 fix(auto-reply): guard context report tool entries

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:37:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard cached context report tool entries before `/context detail` and `/context map` read tool names and size fields. - Reuse one normalized tool-report view for text diagnostics and the treemap renderer. - Add focused regressions for unreadable t

### #89753 fix(plugins): guard command spec projections

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:38:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot plugin command registrations before building command specs for `commands.list` and provider-native command surfaces. - Skip unreadable or malformed command registrations/fields instead of letting one bad plugin command crash projection or

### #69039 add option for MCP apps support

- bucket: maintainer_owned
- author: sallyom
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, agents, maintainer, size: XL, proof: sufficient, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T15:39:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw calls MCP servers, but ignores MCP Apps UI metadata/resources - Why it matters: MCP Apps turns trusted MCP servers into richer tool providers with purpose-built UI. Without host support, OpenClaw misses that part of the MCP ecosy

### #70906 docs(codex): document native compaction hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, maintainer, size: XS, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:40:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document Codex native `PreCompact` / `PostCompact` hooks as Codex-owned command hooks - clarify that OpenClaw `before_compaction` / `after_compaction` remain adapter-level plugin hook events - note that OpenClaw uses the app-server compaction item

### #73365 fix: allow steer messages during active non-streaming runs

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, clawsweeper, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:41:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replace the isStreaming-only steer/interrupt injection gate with lifecycle-aware active/stopped handling for embedded and reply runs. - Preserve the old conservative streaming fallback for handles that do not expose isStopped, addressing the lates

### #89458 fix(agents): guard system prompt tool reports

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T15:50:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens `buildSystemPromptReport` so diagnostic tool reporting cannot throw when a tool descriptor exposes throwing `name`, `description`, `label`, `parameters`, or hostile schema `properties` accessors/traps. - Preserves existing hashes, schema c

### #89632 fix(config): guard schema lookup traversal

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:50:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard config schema lookup traversal when schema maps or fields throw during property access/enumeration. - Omit unreadable lookup child maps instead of crashing, while preserving explicit `false` property schema handling. - Cover unreadable looku

### #73724 fix(cli): avoid false local gateway unreachable on probe timeout

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, cli, commands, maintainer, size: XL, clawsweeper, clawsweeper:automerge, clawsweeper:human-review, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-14T15:54:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - separate local gateway reachability from follow-up detail/read probe failures - add a bounded direct status-RPC fallback or degraded classification for local status/probe paths when the default probe times out or returns unknown capability but the

### #73751 fix(exec): decode Windows command output with codepage-aware streaming

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, clawsweeper, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:54:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fix Windows exec output mojibake for CJK locales by decoding captured command output with the active Windows code page instead of assuming UTF-8. - Preserve decoder state across stdout/stderr chunks or decode buffered byte streams so split GBK/Shi

### #74163 WORKING: All Microsoft Issues and PRs (refresh)

- bucket: maintainer_owned
- author: BradGroux
- author association: CONTRIBUTOR
- draft: no
- assignees: BradGroux
- labels: scripts, maintainer, size: L, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:56:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Microsoft Ecosystem Issues & PRs Tracker > **Purpose:** Living checklist for maintainers to track all open Microsoft-related issues and PRs (Teams, Windows, WSL, Azure, M365/SharePoint). > > **How to use:** > > - Mark items resolved by editing this PR body a

### #74761 docs: Document oMLX (Apple Silicon MLX) as memorySearch embedding provider

- bucket: maintainer_owned
- author: mppyes-ai
- author association: FIRST_TIMER
- draft: no
- assignees: osolmaz
- labels: docs, stale, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:05:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Resolves the documentation gap identified in #74732. Adds focused recipes for using oMLX (Apple Silicon MLX inference server) as a memorySearch embedding provider via the existing OpenAI-compatible adapter. ## Changes - `docs/concepts/memory-search.

### #75427 fix(signal): keep quiet SSE receive streams open

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: signal, maintainer, size: XS, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:15:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #75426. ## Summary - stop applying the default 10s header deadline to long-lived Signal SSE receive streams - keep explicit SSE deadlines available for tests/callers that request them - add regression coverage for quiet streams that do not send response 

### #75614 docs: consolidate remote testing around Crabbox

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: L, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:15:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #89769 fix(agents): guard tool inventory metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard effective tool inventory projection against unreadable plugin tool metadata rows. - Snapshot readable plugin-owned metadata before projection so malformed rows fall back to plain tool labels/descriptions. - Add focused coverage for an unreadabl

### #89775 fix(plugins): guard codex app extension factories

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard Codex app-server extension factory listing against unreadable active-registry entries. - Skip malformed/non-function factory rows while preserving healthy factories in order. - Add focused coverage for an unreadable factory sibling. Verificatio

### #89782 fix(plugins): guard binding resolved callbacks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:19:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard conversation-binding resolved callback registry reads before dispatch. - Skip malformed/unreadable callback registrations instead of letting one bad sibling prevent healthy callbacks. - Add a regression test where an unreadable callback regi

### #89789 fix(media): guard document extractor metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard document extractor metadata reads before MIME matching and extraction. - Skip malformed/unreadable extractor rows instead of letting one bad plugin entry prevent later healthy extractors. - Preserve method-style extractor `this` binding when

### #89794 fix(gateway): guard plugin UI descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard `plugins.uiDescriptors` descriptor projection so one malformed Control UI registration cannot crash the whole gateway response - skip unreadable or malformed UI descriptor rows while preserving healthy plugin descriptors - add a contract reg

### #89824 fix(gateway): guard plugin reload metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:20:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot plugin reload registration metadata before building gateway config reload rules. - Skip malformed reload registrations so one stale plugin row cannot abort reload planning. - Keep healthy plugin reload rules active after unreadable plugin

### #89829 fix(gateway): guard plugin node policy metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:20:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add guarded snapshots for plugin node host command and node.invoke policy metadata. - Keep healthy plugin node defaults, foreground restriction metadata, dangerous-command gating, and invoke policy handlers available when a stale plugin registrati

### #76027 [codex] feat(webchat): add gateway read aloud

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, maintainer, size: S, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T16:28:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a Control UI/WebChat assistant Read aloud action backed by the existing `tts.convert` Gateway RPC - play returned audio through the authenticated assistant-media route, so configured `messages.tts` providers are used instead of browser speech 

### #76221 [codex] Fix Anthropic Vertex npm audit regression

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, maintainer, size: M, clawsweeper:automerge, clawsweeper:human-review, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 🚀 automerge armed
- gitcrawl snapshot updated: 2026-06-14T16:33:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove the `@anthropic-ai/vertex-sdk` runtime dependency from the shipped OpenClaw package - replace it with a small local Anthropic Vertex client built on the existing `@anthropic-ai/sdk` and `google-auth-library@10.6.2` - update the lockfile so 

### #76235 [codex] Fix doctor completion cache plugin loading

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: XS, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T16:34:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the Windows `openclaw doctor` shell-completion cache path observed in the maintainer workshop: doctor was spawning `openclaw completion --write-state` without the plugin-command skip guard, so completion cache generation could load plugin CLI 

