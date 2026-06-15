---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-006
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
  - "#89581"
  - "#89329"
  - "#69824"
  - "#67818"
  - "#70907"
  - "#70922"
  - "#89647"
  - "#89657"
  - "#89673"
  - "#89406"
  - "#89493"
  - "#41375"
  - "#89518"
  - "#61960"
  - "#71497"
  - "#72409"
  - "#91952"
  - "#73374"
  - "#73385"
  - "#73390"
  - "#73401"
  - "#73402"
  - "#73403"
  - "#73606"
  - "#89717"
cluster_refs:
  - "#89581"
  - "#89329"
  - "#69824"
  - "#67818"
  - "#70907"
  - "#70922"
  - "#89647"
  - "#89657"
  - "#89673"
  - "#89406"
  - "#89493"
  - "#41375"
  - "#89518"
  - "#61960"
  - "#71497"
  - "#72409"
  - "#91952"
  - "#73374"
  - "#73385"
  - "#73390"
  - "#73401"
  - "#73402"
  - "#73403"
  - "#73606"
  - "#89717"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.195Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 6

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89581 refactor: use canonical transcript reader identity

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-14T14:24:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Routes transcript reader projections through a canonical transcript read scope instead of letting callers identify reads by transcript file path or basename. This keeps the implementation file-backed today while making reader callers storage-neutral fo

### #89329 fix(auto-reply): guard exported session tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:27:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard `/export-session` tool metadata projection so unreadable or non-JSON-serializable parameter schemas are skipped instead of crashing HTML generation. - Preserve serializable sibling tool descriptors in the exported session data and report the

### #69824 [RFC] ACP everywhere: consolidate all LLM/agent launches behind a single ACP runtime seam

- bucket: maintainer_owned
- author: visionik
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XS, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T14:35:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **RFC — not a merge candidate.** This PR adds `docs/refactor/acp-everywhere.md` as a proposal. Please do not merge until (a) the direction is agreed and (b) sandbox-capability modeling (see Cons) is agreed. After merge, phasing issues will be filed from the 

### #67818 fix(whatsapp): add QR login result codes and preflight hook

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, gateway, maintainer, size: M, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T14:36:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - Problem: after #67815, WhatsApp still lacked a clean shared QR-login contract for machine-readable non-QR outcomes and a gateway preflight seam to return them before stop/start. - Why it matters: caller

### #70907 docs(codex): document native model lifecycle hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, maintainer, size: XS, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T14:39:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document Codex native `PreModelRequest` / `PostModelResponse` hooks as Codex-owned command hooks - clarify that OpenClaw plugin `llm_input` / `llm_output` remain adapter-level compatibility events - call out that OpenClaw does not double-fire mode

### #70922 refactor(whatsapp): centralize account policy

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, maintainer, size: L, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:39:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a canonical WhatsApp-local account policy seam in `extensions/whatsapp/src/account-policy.ts` - migrate inbound policy, send, heartbeat recipient resolution, and action target auth to consume that seam instead of re-deriving multi-account poli

### #89647 fix(plugins): guard startup manifest channels

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:44:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard startup manifest channel/id reads so an unreadable plugin manifest channel list does not abort gateway startup planning. - Guard plugin registry alias collection across manifest ids, providers, channels, setup provider rows, CLI backends, mo

### #89657 fix(plugins): harden installed index stale metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T14:44:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden installed plugin index record building against stale manifest records with malformed contribution/startup metadata. - Keep valid contribution metadata intact while dropping malformed non-record/non-array fields instead of throwing during co

### #89673 fix(agents): reclaim session write-locks held past the holder's own maxHoldMs

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, size: XS, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:44:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #87483 reports that a session write-lock file held by a **live** gateway process persists for hours past `maxHoldMs`/`staleMs`; the watchdog never reclaims it, so later requests fail with `session file locked (timeout 60000ms):

### #89406 fix(agents): quarantine unreadable extension tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:48:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard `api.registerTool(...)` so unreadable extension tool descriptors are skipped instead of failing the whole extension load. - Preserve healthy tools, commands, and stateful method-style tool receivers after snapshotting registered tools. - Pro

### #89493 fix(mcp): quarantine invalid plugin tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T14:57:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard plugin MCP tool entries and descriptors before listing or wrapping them - project plugin MCP input schemas through the runtime tool-schema contract and quarantine unsupported schemas - normalize accepted MCP input schemas to include the MCP-

### #41375 fix(hooks): deliver internal hook replies on replyable surfaces

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, maintainer, size: M, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:06:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `event.messages` was documented as a generic user-reply channel, but only `/new` and `/reset` actually drained those messages. - Why it matters: `message:received` hooks could push reply text that was silently dropped, while other lifecyc

### #89518 refactor: migrate plugin transcript mirrors

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, extensions: codex, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof, extensions: copilot
- gitcrawl snapshot updated: 2026-06-14T15:09:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Migrate the Codex and Copilot transcript mirror/history consumers to the scoped public transcript target/writer APIs, stacked on the QMD session artifact identity branch (#89360). ## Why These plugin-owned mirrors need reads, write locks, appends, idem

### #61960 docs: require i18n postprocess before skip

- bucket: maintainer_owned
- author: hxy91819
- author association: MEMBER
- draft: no
- assignees: steipete
- labels: scripts, maintainer, size: M, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:10:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - require docs-i18n postprocess completion before localized outputs become skippable - mark newly written localized docs as `postprocess_version: pending` and finalize them only after locale-link postprocess succeeds - add regression coverage for th

### #71497 fix(skills): refresh persisted snapshots after restart

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, dedupe:parent, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:14:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Seed the process-local skills snapshot version at gateway/CLI startup instead of starting every process at version `0`. - Force persisted `version: 0` snapshots from older processes to refresh once after restart, covering both gateway reply and CL

### #72409 fix(plugins): suppress false duplicate-id warnings across origins

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, clawsweeper, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:18:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Carry forward the narrow #42192 fix for false duplicate plugin-id warnings across expected plugin discovery origins. - Preserve genuine duplicate diagnostics by updating origin-bucket tracking when a same-root candidate is promoted to a higher-pre

### #91952 feat(status): surface plugin health

- bucket: maintainer_owned
- author: jalehman
- author association: MEMBER
- draft: no
- assignees: jalehman
- labels: docs, agents, maintainer, size: XL, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T15:18:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add compact plugin health to `/status` and detailed `/status plugins` - surface plugin load errors, enabled dependency failures, diagnostic errors, context-engine quarantines, channel setup failures, and runtime tool-schema quarantines - keep comp

### #73374 fix: gate same-model retries to idempotent calls

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, agents, maintainer, size: L, clawsweeper, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:25:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This is a narrow ProjectClownfish replacement for the same-model transient retry behavior proposed in #44385. It preserves attribution to @nicolasgrasset and source PR https://github.com/openclaw/openclaw/pull/44385 while excluding unrelated outboun

### #73385 fix: gate sandbox write tools on writable workspace access

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, clawsweeper, P1, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:25:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #65316. This narrows sandboxed coding-tool availability so write, edit, and apply_patch are exposed only when the sandbox has an effective writable workspace target. The prior path/media issues tracked in #57230 and #59063 are already closed as implement

### #73390 Add configurable WebChat send shortcut

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, maintainer, size: M, clawsweeper, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T15:25:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes https://github.com/openclaw/openclaw/issues/8147. This adds a narrow WebChat/Control UI send-shortcut preference so users can avoid accidental sends while composing with IME or multi-line text. The implementation should update the composer keydown behavi

### #73401 fix(agents): load symlinked workspace bootstrap files

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: M, clawsweeper, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:26:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Load explicit fixed workspace bootstrap files such as AGENTS.md, SOUL.md, USER.md, and MEMORY.md when they are symlinks to readable regular files outside the workspace. - Keep the fallback scoped to fixed bootstrap files and preserve existing prot

### #73402 fix(tui): subscribe to live session transcript updates

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, clawsweeper, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:26:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #38829 by making the bundled TUI subscribe to live transcript updates for the active session. - Covers the duplicate reproduction in #43341 without widening the gateway hidden-run chat fanout boundary discussed on #41964. - Keeps #51691 as b

### #73403 fix(agent): route explicit channel targets per recipient

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, agents, maintainer, size: S, clawsweeper, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:27:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #41483 by deriving per-recipient agent session keys for `openclaw agent --agent ... --channel ... --to ...` instead of falling back to `agent:<id>:main`. - Preserves the existing #60614 behavior where `--session-id` takes precedence over the

### #73606 docs(rfd): @openclaw/call-sdk — provider-agnostic real-time call SDK

- bucket: maintainer_owned
- author: visionik
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XS, P3, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:32:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds an RFC + two companion design docs proposing **`@openclaw/call-sdk`** — a provider-agnostic real-time call SDK — and its binding into OpenClaw's `ChannelPlugin` model. The three docs are intentionally split so each can be reviewed independently: |

### #89717 fix(agents): avoid enumerating wrapped tool descriptors

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T15:37:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop before-tool-call and abort wrappers from spreading arbitrary active tool descriptors. - Add a shared wrapper descriptor copier that preserves the `AgentTool` contract fields plus wrapper-relevant optional metadata without enumerating hostile 

