---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T131654-001
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
  - "#46793"
  - "#55997"
  - "#84472"
  - "#58367"
  - "#58378"
  - "#59705"
  - "#85878"
  - "#85311"
  - "#88487"
  - "#88497"
  - "#88639"
  - "#89970"
  - "#89973"
  - "#89977"
  - "#89980"
  - "#89979"
  - "#90034"
  - "#90107"
  - "#90085"
  - "#90130"
  - "#90265"
  - "#90256"
  - "#90311"
  - "#90195"
  - "#90308"
  - "#90268"
  - "#90383"
  - "#90386"
  - "#90431"
  - "#90505"
  - "#91293"
  - "#91325"
  - "#91452"
  - "#91510"
  - "#91519"
  - "#91370"
  - "#91570"
  - "#91786"
  - "#91673"
  - "#91906"
cluster_refs:
  - "#46793"
  - "#55997"
  - "#84472"
  - "#58367"
  - "#58378"
  - "#59705"
  - "#85878"
  - "#85311"
  - "#88487"
  - "#88497"
  - "#88639"
  - "#89970"
  - "#89973"
  - "#89977"
  - "#89980"
  - "#89979"
  - "#90034"
  - "#90107"
  - "#90085"
  - "#90130"
  - "#90265"
  - "#90256"
  - "#90311"
  - "#90195"
  - "#90308"
  - "#90268"
  - "#90383"
  - "#90386"
  - "#90431"
  - "#90505"
  - "#91293"
  - "#91325"
  - "#91452"
  - "#91510"
  - "#91519"
  - "#91370"
  - "#91570"
  - "#91786"
  - "#91673"
  - "#91906"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T13:16:54.467Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 1

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #46793 Skills: apply tool policy to direct slash dispatch

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P1, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-22T18:07:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: direct `/skill` inline dispatch only applied the owner-only filter and skipped the rest of the tool-policy pipeline. - Why it matters: inline slash dispatch should honor the same allow/deny and policy composition rules as the rest of tool

### #55997 Gateway: require admin for chat.send reset

- bucket: maintainer_owned
- author: jacobtomlinson
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-05-22T19:36:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - align `chat.send` reset handling with the existing admin-only session reset boundary - add a gateway regression covering write-scoped `/reset` requests through `chat.send` ## Changes - reject internal `chat.send` `/new` and `/reset` requests unles

### #84472 Doctor: expose dry-run preview reports

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, commands, agents, maintainer, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 👀 ready for maintainer look, extensions: policy
- gitcrawl snapshot updated: 2026-05-22T22:22:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Expose the structured Doctor repair work through top-level dry-run, diff, and JSON preview reporting. This PR adds the user-facing preview surface for converted Doctor repairs: - `openclaw doctor --fix --dry-run` plans converted repairs without muta

### #58367 Gateway: preserve approved scope baseline during pairing

- bucket: maintainer_owned
- author: jacobtomlinson
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-24T18:42:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserves the approved operator scope baseline during silent pairing flows - requires explicit approval before a fresh shared-auth device gains newly requested operator scopes - adds regression coverage for fresh-device pairing and reconnect behav

### #58378 macOS: confirm discovered gateway trust

- bucket: maintainer_owned
- author: jacobtomlinson
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: macos, maintainer, size: L, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-24T18:42:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - require an explicit trust step before the macOS app applies discovered remote gateway selections - pin discovered direct WSS endpoints and tighten SSH host key checks for remote macOS flows ## Changes - added a macOS discovery trust support path f

### #59705 [codex] improve parallels windows smoke logging

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, maintainer, size: M, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-24T19:10:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What changed - added explicit Windows update phase markers in the npm-update Parallels helper so outer progress output reflects guest work - added guarded Windows helper launch retries plus incremental guest-log draining for the npm-update wrapper - applied

### #85878 fix(telegram): retain superseded draft previews

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: telegram, maintainer, size: XS, mantis: telegram-visible-proof, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:23:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Preserve Telegram draft previews that were superseded after a new generation already forced a new message. - Recreates #85825 on a maintainer branch because the original contributor branch no longer allows maintainer updates. Behavior addressed: Tel

### #85311 fix(auth-profiles): break self-reinforcing session auth override loop (#85126)

- bucket: maintainer_owned
- author: mlaihk
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: osolmaz
- labels: agents, size: XS, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-29T06:24:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Description Fixes a self-reinforcing loop in `resolveSessionAuthProfileOverride` that permanently pins a session to the wrong auth profile after a fallback occurs. ### Root Cause When a session falls back from its configured primary provider to a fallback (

### #88487 fix(build): externalize protobufjs from root bundle

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-31T00:46:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Externalize `protobufjs` from the unified tsdown graph so the diagnostics-otel/OpenTelemetry gRPC path does not force tsdown to resolve `protobufjs/ext/descriptor.js`'s JSON descriptor import. - Keep `diagnostics-otel` bundled dist artifacts intac

### #88497 fix(gateway): load auto-enabled channel plugins at startup

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-05-31T02:03:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Treat channels.<id>.enabled=true as explicit channel presence for startup discovery. - Keep deferred configured channel plugins in the post-bind full runtime startup scope after auto-enable. - Add regressions for enabled-only external channel config 

### #88639 docs: document gateway method types

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, commands, agents, maintainer, size: XL, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-31T16:52:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Continue the inline-comment pass after PR #88554 on a fresh branch from current `main`. - Document the gateway method type/helper contracts for post-handshake `connect` rejection, shared record/string normalization, and method request/client/conte

### #89970 fix(plugins): normalize setup probe reasons

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T18:55:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - normalize plugin setup auto-enable probe output before using string methods - ignore malformed non-string probe reasons while preserving trimming and de-duplication for valid strings - add a focused regression for mixed malformed probe output ## V

### #89973 fix(plugins): isolate doctor contract rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T18:56:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate per-row failures while resolving plugin doctor contracts - preserve scoped doctor contract matching by plugin id, channel id, and provider id - add regressions for unreadable manifest rows in unscoped and scoped doctor lookup ## Verificati

### #89977 fix(plugins): isolate bundle config rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-03T19:12:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable manifest registry rows while loading enabled bundle config - preserve existing bundle activation, config loading, merge, and diagnostic behavior for readable rows - add a provided-registry MCP regression with poisoned bundle met

### #89980 fix(trajectory): isolate manifest metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-03T19:20:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable manifest snapshot rows while building trajectory support metadata - preserve sorted plugin support metadata for healthy rows - add a trajectory metadata regression with a poisoned manifest row before a healthy plugin row ## Veri

### #89979 fix(config): isolate provider auto-enable rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T21:07:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable provider auto-enable manifest rows - preserve first-owner wins behavior for readable provider auto-enable metadata - add a provider auth auto-enable regression with a poisoned manifest row before a healthy provider plugin row ##

### #90034 fix(gateway): isolate session action scope lookup

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-03T22:35:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a guarded session-action registration lookup helper for gateway authorization and dispatch. - Skip unreadable plugin session-action rows while preserving the default write-scope behavior for missing, empty, or sparse `requiredScopes`. - Cover 

### #90107 fix(commands): guard model provider aliases

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T01:58:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard model provider alias collection against unreadable manifest model-catalog metadata. - Skip poisoned alias maps and alias target rows while preserving later healthy aliases. - Keep bundled source-peer fallback behind safe manifest `id` / `ori

### #90085 fix(gateway): guard model pricing metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T02:07:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard manifest `modelPricing.providers` reads while the gateway builds pricing policy context. - Skip malformed pricing metadata for one plugin without dropping healthy sibling policies. - Add a regression proving a poisoned manifest row no longer

### #90130 fix(auth): guard preferred provider metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, maintainer, size: S, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T02:57:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Prevent setup-provider preferred auth-choice lookup from crashing when a plugin provider object exposes unreadable metadata. - Pass inert provider/method snapshots into the fallback choice resolver so bad plugin objects are skipped before `provide

### #90265 fix(agents): guard system prompt tool schema stats

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T09:15:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard system prompt report generation against throwing tool `parameters` getters - guard tool schema property counting against throwing `properties` getters - preserve the existing zero-size/hash fallback for schemas that cannot be measured ## Rea

### #90256 fix(llm-core): guard tool argument schema validation

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-04T11:15:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard `validateToolArguments()` against unreadable plugin-provided tool parameter schemas. - Convert top-level `parameters` getter failures, nested schema getter failures, and schema-owned TypeBox/coercion operation failures into a stable unsuppor

### #90311 fix(mcp): quarantine unreadable plugin tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T12:12:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replace eager tool-object spreading in before_tool_call and abort wrappers with descriptor-preserving execution wrappers - keep plugin/class-backed tool schema getters lazy and bound to the original tool receiver while forwarding expected AgentToo

### #90195 fix(plugins): guard plugin tool descriptor reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-06-04T12:24:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard plugin tool descriptor reads so malformed `name`, `execute`, `description`, or `parameters` access cannot abort sibling tool resolution - pin each accepted plugin tool to one stable name before allow/deny policy, manifest filtering, metadata

### #90308 fix(diagnostics): reclaim zombie embedded-run counters left idle by handle-mismatch clears

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: M, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T12:40:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #90240 reports a 30+ minute session stall: after rapid back-to-back turns, `getActiveEmbeddedRunCount()` stays at 1 despite no active run. All subsequent inbound messages queue as follow-ups to a non-existent run; the session s

### #90268 fix(trajectory): guard tool schema capture

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-04T13:02:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard trajectory tool-definition capture against throwing tool `name`, `description`, and `parameters` getters. - Guard trajectory payload limiting against throwing nested object field getters, proxy object-key traps, and proxy array item traps. -

### #90383 fix(ollama): skip unreadable tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: L, extensions: ollama, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-04T15:24:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens native Ollama tool request construction so one unreadable, revoked, cyclic, or otherwise uncopyable tool schema is skipped instead of aborting the whole stream setup. - Preserves healthy sibling tools and valid large/readable schema shapes

### #90386 fix(mcp): skip unreadable plugin tools

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦪 silver shellfish, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-04T15:29:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Hardens the plugin tools MCP bridge so unreadable or unwrappable plugin tool descriptors are skipped during handler construction instead of crashing `listTools`. - Keeps healthy sibling plugin tools listed and callable through the MCP bridge, incl

### #90431 feat: expose node-hosted plugin tools

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, scripts, commands, agents, maintainer, size: XL, plugin: file-transfer, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-04T23:01:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add dynamic node-hosted plugin/MCP tools so a Gateway on one computer can expose tools registered by connected nodes on other computers. - Add `node.pluginTools.update`; node hosts publish their current `registerNodeHostCommand(...agentTool...)` i

### #90505 fix(agents): finalize killed subagent task rows via maintenance to avoid kill-vs-complete race

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-05T07:36:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: After `markSubagentRunTerminated` kills a subagent run, the mirrored task rows stay stuck in `running` indefinitely. The linked report describes both the parent `runtime='subagent'` row and the child `runtime='cli'` row for the same 

### #91293 fix(agents): snapshot session tool definitions

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: L, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-08T01:33:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Snapshots session tool definitions and registered extension tool definitions before agent runtime paths normalize or execute them. - Quarantines unreadable schema/name values while preserving healthy sibling tools and existing execution/error behavio

### #91325 fix(codex): extend skill_workshop dynamic-tool timeout above approval ceiling

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: size: XS, extensions: codex, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-08T14:23:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: `skill_workshop` lifecycle tool calls (apply/reject/quarantine) invoked from a Codex agent session fail with "OpenClaw dynamic tool call timed out after 90000ms while running tool skill_workshop" before the operator approval prompt c

### #91452 Add claw-score agent skill

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T21:15:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - copy the `claw-score` agent skill from `claw/maintainers` branch `dev/kevinlin/claw-score-discrawl-scope` into `.agents/skills/claw-score` - allowlist `.agents/skills/claw-score/**` in `.gitignore` so the repo-owned skill can be tracked - remove t

### #91510 Add claw score taxonomy

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T21:29:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add the repo-local `claw-score` taxonomy source at `.agents/skills/claw-score/taxonomy.yaml`. - Preserve the copied taxonomy as a standalone agent skill data file for OpenClaw maturity scorecard work. ## Verification - `git diff --check origin/mai

### #91519 feat(qa-lab): add Codex Slack approval scenarios

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: L, extensions: qa-lab, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-08T22:55:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add opt-in Slack QA scenarios for Codex Guardian command and file-change approvals. - Configure the Slack QA child Gateway to enable the Codex plugin, Guardian app-server mode, plugin approval forwarding, and Codex runtime selection for the select

### #91370 fix(agents): skip text-direct fallback for sessions_yield completions

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, size: S, P1, rating: 🦪 silver shellfish, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T01:41:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: Issue #90944 reports that when a `sessions_yield`-paused subagent completes, raw child text is delivered directly to the DM channel before the parent's intended resume reply. Users see a duplicate/out-of-order message: child output a

### #91570 fix(e2e): tighten installer and plugin QA assertions

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, docker, maintainer, size: XL, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-09T03:16:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Tighten runner/deadcode guard coverage for Windows command shims and package script wrappers. - Fail installer/update paths on UI build and package-manager errors across shell, PowerShell, and CLI flows. - Harden onboarding, Kitchen Sink RPC, and 

### #91786 fix(plugins): reconcile managed npm root overrides with managed peer pins

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: amknight
- labels: maintainer, size: L, P1, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T05:33:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #91772. 2026.6.5 started exporting the full `pnpm-workspace.yaml` override set (26 entries, including `hono: 4.12.18`) into managed plugin npm roots (392af2e612, 99e627b283), while `syncManagedNpmRootPeerDependencies()` kept preserving pre-exi

### #91673 fix(qqbot): read group toggle state from current config

- bucket: maintainer_owned
- author: sliverp
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, channel: qqbot, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T07:15:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Read `/bot-group-allways` status and no-op decisions from `runtime.config.current()` instead of the gateway account snapshot. - Keep QQBot default-account config compatibility aligned by honoring `channels.qqbot.accounts.default` for group default

### #91906 perf: skip subagent live stream parsing

- bucket: maintainer_owned
- author: lanzhi-lee
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, size: S, triage: mock-only-proof, P3, rating: 🦐 gold shrimp, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T09:13:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip per-chunk live visible-text parsing for subagent runs, which have no live preview consumer. - Thread `suppressLiveStreamOutput` from the subagent lane through the embedded runner and subscription path. - Preserve final `message_end` delivery 

