---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T154534-084
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
  - "#92521"
  - "#92574"
  - "#91408"
  - "#91955"
  - "#92610"
  - "#88743"
  - "#92230"
  - "#92694"
  - "#92649"
  - "#92584"
  - "#92647"
  - "#92733"
  - "#92251"
  - "#90633"
  - "#92817"
  - "#88899"
  - "#88905"
  - "#88919"
  - "#88953"
  - "#88681"
  - "#88916"
  - "#91457"
  - "#92877"
  - "#92873"
  - "#92819"
cluster_refs:
  - "#92521"
  - "#92574"
  - "#91408"
  - "#91955"
  - "#92610"
  - "#88743"
  - "#92230"
  - "#92694"
  - "#92649"
  - "#92584"
  - "#92647"
  - "#92733"
  - "#92251"
  - "#90633"
  - "#92817"
  - "#88899"
  - "#88905"
  - "#88919"
  - "#88953"
  - "#88681"
  - "#88916"
  - "#91457"
  - "#92877"
  - "#92873"
  - "#92819"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.210Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 84

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #92521 fix(agents): preserve runtime tool inheritance tokens

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T07:04:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve runtime-materialized allowlist tokens when spawned sessions inherit an effective parent tool surface. - Filter deferred MCP/LSP selectors through the same effective profile/agent/group/subagent/inherited policy layers before writing child

### #92574 test(browser): cover action-input CLI request bodies

- bucket: ready_for_maintainer
- author: yu-xin-c
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T07:15:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #83877. ## Real Behavior Proof Behavior addressed: Browser action-input CLI commands now have focused coverage for element request bodies, blank-ref validation, navigate/resize dispatch, fill/evaluate act bodies, and upload hook payloads. Real

### #91408 feat(channels/acp): support ACP bindings for direct-message peers

- bucket: ready_for_maintainer
- author: pablospe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, gateway, scripts, size: L, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T07:22:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Motivation OpenClaw can route a conversation to an **ACP backend** — an external agent runtime (the `acpx` agents: claude-code, codex, gemini, droid, opencode, or any custom ACP runtime) — via a `type:"acp"` binding. On Telegram, a `type:"acp"` binding curr

### #91955 fix(agents): keep BOOTSTRAP.md pending on preseeded managed workspaces [AI-assisted]

- bucket: ready_for_maintainer
- author: luyao618
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-13T07:23:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > 🤖 AI-assisted (built with Hermes orchestration; reviewer = 麻酱, code review = Codex CLI). Test level: fully tested. Prompt summary available on request. ## Summary - Problem: On a managed / GitOps / operator-style deployment (e.g. Kubernetes with a PVC-backe

### #92610 fix: include archived transcript lineage in session usage detail

- bucket: ready_for_maintainer
- author: harjothkhara
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T07:24:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #46252. This fixes per-session usage/cost **detail** for sessions that have an active `<id>.jsonl` transcript plus same-stem archives such as `<id>.jsonl.reset.<timestamp>` or `<id>.jsonl.deleted.<timestamp>` (created by `/new` and `/reset`). 

### #88743 docs(sms): add Twilio A2P delivery guidance

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: refactor-only, proof: supplied, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, channel: sms
- gitcrawl snapshot updated: 2026-06-13T08:46:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a short US A2P / 10DLC delivery section to the SMS channel docs. - Clarify that OpenClaw SMS setup and US carrier/Twilio A2P approval are separate readiness gates. - Add troubleshooting guidance for Twilio sends that are accepted by the API bu

### #92230 feat: add model switch choices to /model

- bucket: ready_for_maintainer
- author: clawSean
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T08:51:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add dynamic configured-model choices to the native `/model` command - enable the existing command argument menu path for `/model` so Slack can render model picks with its existing buttons/static_select/external_select machinery - keep bare `/model

### #92694 docs(nodes): add openclaw.json example for node exec config

- bucket: ready_for_maintainer
- author: 1052326311
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, plugin: file-transfer, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-13T15:20:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The /nodes page showed CLI config commands but was missing the equivalent openclaw.json example.\n\nAdded a json5 block with tools.exec.host/security/node before the existing CLI commands.\n\nCloses #92662

### #92649 feat(kimi): show code quota in usage status

- bucket: ready_for_maintainer
- author: litang9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: M, extensions: kimi-coding, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T15:25:50Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds Kimi Code usage reporting to the existing provider usage pipeline. - Adds a Kimi usage fetcher for `GET https://api.kimi.com/coding/v1/usages`. - Parses Kimi Code `5h` and `7d` quota windows into the existing usage snapshot shape. - Wires the b

### #92584 fix(gateway): stop accepting the Control UI token via ?token= query string

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T16:01:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Control UI assistant-media route (`/__openclaw__/assistant-media`) accepted the gateway shared secret — and paired operator device tokens — from a `?token=<redacted> URL query parameter (`allowQueryToken: true` in `src/gateway/control-ui.ts`). Secrets in

### #92647 fix(memory): attribute corpus=all timeouts to the slow branch instead of the provider

- bucket: ready_for_maintainer
- author: Bartok9
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-13T16:35:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - `memory_search` with `corpus=all` could hit the 15s tool deadline and return a "Memory search is unavailable due to an embedding/provider error" warning even when the embedding provider probe and every individual corpus searched successfully. - Th

### #92733 Support managed Skill Workshop updates

- bucket: ready_for_maintainer
- author: moeedahmed
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-13T17:04:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow Skill Workshop update/revise/apply flows for writable `openclaw-managed` skills under the user's OpenClaw skills directory - keep workspace skill support intact while preserving boundary checks for targets outside workspace/managed skills - 

### #92251 fix(agents): carry provenance through active subagent wakes

- bucket: ready_for_maintainer
- author: ooiuuii
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-13T23:36:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Refs #91356, #91330, #91333. Carry typed `inputProvenance` through active subagent wake steering so resumed requester turns keep an explicit inter-session provenance signal instead of arriving as untyped queued messages. This is intentionally narrow

### #90633 fix(codex): enforce OpenClaw policy for native tool surfaces

- bucket: ready_for_maintainer
- author: Kaspre
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: L, extensions: codex, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T00:56:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the Codex app-server policy-enforcement gap where OpenClaw `before_tool_call` / oc-firewall policy could be bypassed by Codex-owned native shell/file/MCP surfaces when native `PreToolUse` delivery is unavailable or not trusted. Changes: - Disa

### #92817 fix(cron): trust agent output when channel is unresolved without explicit delivery

- bucket: ready_for_maintainer
- author: fsdwen
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T01:20:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `--no-deliver` cron jobs that encounter recoverable tool warnings were marked `status: error` even when the agent successfully produced a final answer. The basic fix (`deliveryRequested === false`) was already implemented on main, but it missed the 

### #88899 fix(android): widen chat bubbles and render markdown consistently

- bucket: ready_for_maintainer
- author: Pluviobyte
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, app: web-ui, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T01:36:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #88014 by making the active Android `ChatScreen` bubbles use a readable 90% width instead of the previous 56% assistant / 64% user caps. - Routes active chat text through the existing `ChatMarkdown` renderer consistently, matching the siblin

### #88905 feat(dreaming): expose shadow-trial scoring in reports

- bucket: ready_for_maintainer
- author: iFiras-Max1
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:31:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Expose the PR3 shadow-trial scoring signal in the report artifact while keeping the Dreaming path report-only. This keeps the scoring helper private and only adds report metadata when a caller supplies `candidateScore`: - base score - shadow-trial delta - fina

### #88919 fix: allow preflight compaction to reenter session locks

- bucket: ready_for_maintainer
- author: plexustech2006
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:32:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow embedded preflight compaction to re-enter the same-process transcript write lock - add a regression guard so compaction's lock acquisition keeps `allowReentrant: true` ## Why When a visible chat turn times out near the context ceiling, a sam

### #88953 fix(exec): auto-approve recognized read-only boolean flags on default safe bins

- bucket: ready_for_maintainer
- author: yetval
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T02:33:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Default safe bins (`cut`, `head`, `tail`, `tr`, `uniq`, `wc`) exist to auto-approve **stdin-only text filters** without a manual approval prompt. But the short-option validator only had an *accept* path for **value-consuming** flags: `consumeShortOp

### #88681 Make runtime plugin startup stalls name in-flight plugins

- bucket: ready_for_maintainer
- author: alexzhu0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T03:09:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds diagnostic progress snapshots while runtime plugins load. - Threads runtime plugin progress into embedded-agent and cron execution phase reporting. - Appends attempted/completed/in-flight plugin ids to cron timeout messages only while the las

### #88916 [codex] Fix Telegram active-run ingress and legacy file SecretRefs

- bucket: ready_for_maintainer
- author: Hilo-Hilo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T03:46:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - route plain-text Telegram follow-ups in an active reply fence through a narrow ingress lane so they can reach queue/steer handling without waiting behind the running handler - share that active-run lane selection between the direct grammY runner a

### #91457 fix(control-ui): persist Set Default agent through config save

- bucket: ready_for_maintainer
- author: ZengWen-DT
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: M, triage: blank-template, proof: supplied, proof: sufficient, P2, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T05:07:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary The Agents page **Set Default** button did not persist the chosen default agent: clicking it only staged a config *form draft* and never wrote it back, so the selection was silently discarded on refresh. This PR routes the one-click action through t

### #92877 fix(usage): make built-in footer easier to wrap on Telegram

- bucket: ready_for_maintainer
- author: Marvinthebored
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T05:47:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Simplify the built-in `/usage full` default footer so Telegram has a cleaner wrap point. - Keep the model/provider/status badges compact and glue the context meter label to the meter. - Remove the default token-count and cache-percentage atoms fro

### #92873 test(diffs): add viewerState, toolbar toggle, shadow root, and hydrateProps tests (fixes #83915)

- bucket: ready_for_maintainer
- author: liuhao1024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, proof: supplied, proof: sufficient, extensions: diffs, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T05:48:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Add comprehensive test coverage for `extensions/diffs/src/viewer-client.ts` (361 lines, previously only bundle-content grep coverage). Covers four untested code paths: 1. **viewerState initialization** — theme/diffStyle/overflow seeding from `firstPayl

### #92819 Fix stale auto-fallback origin model selection

- bucket: ready_for_maintainer
- author: TurboTheTurtle
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, agents, size: L, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T07:22:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a shared stale auto-fallback-origin classifier so reply and agent-command selection agree when recorded fallback origin no longer matches the current primary. - Defers reply-side model/auth cleanup until after read-only slash/inline actions h

