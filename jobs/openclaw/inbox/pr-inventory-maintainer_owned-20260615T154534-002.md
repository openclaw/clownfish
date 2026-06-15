---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T154534-002
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
  - "#87695"
  - "#88121"
  - "#88292"
  - "#91957"
  - "#88533"
  - "#88589"
  - "#88621"
  - "#88649"
  - "#91878"
  - "#88673"
cluster_refs:
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
  - "#87695"
  - "#88121"
  - "#88292"
  - "#91957"
  - "#88533"
  - "#88589"
  - "#88621"
  - "#88649"
  - "#91878"
  - "#88673"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.195Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 2

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

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

### #87695 fix(types): unblock changed gate checks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T09:55:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds the optional approval-action marker that `approval-reaction-runtime` already reads. - Narrows package manifest cache stat handling through an explicit non-null local. - Unblocks `check:changed` type/lint gates that are currently blocking the 

### #88121 Lower profile tool policy filter audit logs

- bucket: maintainer_owned
- author: sjf
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, P3, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T13:41:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Log profile-stage tool catalog trimming at debug instead of info. - Keep explicit allow/deny, sender/group, provider policy removals, and sandbox tool blocks visible at info. Verification - Not run (single log-level routing change requested).

### #88292 fix(update): guard Windows task autostart during package updates

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, cli, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 availability, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T14:13:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - disables enabled Windows Scheduled Task autostart while a managed package update replaces the OpenClaw package tree - covers running, stopped, and unclassified installed task runtimes, including `--no-restart` stopped/unknown cases where the task 

### #91957 perf(sessions): share one enumeration across archive retention sweeps

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: M, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-10T14:51:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Every non-warn session-store save runs archived-transcript retention cleanup, and reset-archive retention **defaults on** (`resolveResetArchiveRetentionMs` falls back to `pruneAfterMs` when unset). So `saveSessionStoreUnlocked` invoked `cleanupArchi

### #88533 test(core): align changed gate type fixtures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:20:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR is currently parked as a narrow changed-gate fixture cleanup. It was useful while the schema-runtime PR was blocked by transient main drift, but newer main now enables stricter unsafe-assertion lint on the full changed test files. Making thi

### #88589 fix(cli): allow agent gateway auth overrides

- bucket: maintainer_owned
- author: mbelinky
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, cli, commands, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:20:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Add --url, --token, and --password overrides to openclaw agent. - Forward those overrides into the Gateway agent RPC and the follow-up abort RPC. - Document the overrides as per-invocation Gateway auth escapes for unavailable SecretRefs. Verification

### #88621 fix(types): restore current changed gate

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:21:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - updates the sanitize-session-history test harness type so tests can pass the runtime `model` metadata used by current callers - parses persisted device-auth token maps through the existing canonical token copier instead of returning raw `Record<st

### #88649 test(agents): use neutral tool schema fixtures

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, gateway, commands, agents, maintainer, size: M, extensions: codex, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T16:21:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - replaces private plugin/tool fixture names in tool-schema tests with neutral `fuzzplugin` / `mockplugin` names - keeps this PR test-only so follow-up runtime hardening can land separately ## Verification - `node scripts/run-vitest.mjs <14 changed 

### #91878 fix(codex): validate maintained app-server types

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: kevinslin
- labels: scripts, maintainer, size: M, extensions: codex, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 automation, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:40:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - validate OpenClaw's maintained Codex app-server request and raw inbound types against temporary TypeScript generated from the pinned Codex source - keep only the selected JSON schemas in the repository; no generated TypeScript files are committed 

### #88673 test(outbound): align implicit source reply sink

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: XS, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-10T17:43:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Updates the current-main outbound routing test to expect the internal source sink for implicit `message_tool_only` source replies. - Keeps explicit current-source sends covered by the following Slack plugin-delivery test. ## Verification - `node s

