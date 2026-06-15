---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T154534-047
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
  - "#64301"
  - "#64503"
  - "#64800"
  - "#78036"
  - "#78544"
  - "#65886"
  - "#78556"
  - "#66067"
  - "#66098"
  - "#67376"
  - "#68597"
  - "#72677"
  - "#73462"
  - "#74643"
  - "#75918"
  - "#76020"
  - "#76069"
  - "#76296"
  - "#76298"
  - "#76370"
  - "#76407"
  - "#76445"
  - "#76614"
  - "#76634"
  - "#76646"
cluster_refs:
  - "#64301"
  - "#64503"
  - "#64800"
  - "#78036"
  - "#78544"
  - "#65886"
  - "#78556"
  - "#66067"
  - "#66098"
  - "#67376"
  - "#68597"
  - "#72677"
  - "#73462"
  - "#74643"
  - "#75918"
  - "#76020"
  - "#76069"
  - "#76296"
  - "#76298"
  - "#76370"
  - "#76407"
  - "#76445"
  - "#76614"
  - "#76634"
  - "#76646"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.204Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 47

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #64301  fix: improve tool name normalization for malformed LLM outputs

- bucket: needs_proof
- author: hy1933
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:42:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: - **Problem:** Certain LLMs occasionally emit malformed tool names during streaming, appending structural prefixes (e.g., `functions`), stripping underscores, dropping leading characters, and appending ra

### #64503 fix(msteams): forward messageBack card actions (Action.Submit) to agent (#60952)

- bucket: needs_proof
- author: ndholakia
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: msteams, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Forward `Action.Submit` messageBack activities to the agent instead of dropping them as empty messages. Closes #60952. When a user clicks an `Action.Submit` button on an Adaptive Card in Teams, the click is sent as a messageBack activity (`type="mes

### #64800 fix(plugins): iterate all providers in wrapProviderStreamFn

- bucket: needs_proof
- author: klin3867
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** `wrapProviderStreamFn()` only checked a single provider via `resolveProviderHookPlugin()`. When a built-in provider (e.g. Anthropic) owned the provider ID, external plugins with matching `hookAliases` could never contribute their own 

### #78036 Drop stale conversation session bindings

- bucket: needs_proof
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #77871. ## Summary - validate runtime conversation binding targets before touching or rewriting routes - unbind stale runtime targets and fall back to the original route - unbind conversation bindings for session keys removed by applied session cleanup -

### #78544 fix(gateway): fail hot reload when channel stop times out

- bucket: needs_proof
- author: pronzcw
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a `failOnTimeout` stop option for channel shutdowns - make gateway hot reload fail fast when a channel does not stop within the abort timeout - leave timed-out channel runtime marked as not running instead of preserving a false running state -

### #65886 feat(tui): add configurable status line command rendering

- bucket: needs_proof
- author: nanami-he
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: OpenClaw's TUI has no user-extensible display area — users who want persistent status info (git branch, system metrics, MCP tool output) must rely on external tools like tmux. - **Why it matters**: A general-purpose status line create

### #78556 fix(memory-wiki): resolve bridge-relative lint links

- bucket: needs_proof
- author: greyschen76
- author association: FIRST_TIMER
- draft: no
- assignees: none
- labels: size: S, extensions: memory-wiki, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes Memory Wiki `wiki lint` false-positive `broken-wikilink` warnings for bridge-imported memory sources. Bridge-imported source pages preserve original relative Markdown links via `bridgeRelativePath`, while generated wiki source pages use saniti

### #66067 fix(tui): preserve spaces between thinking fragments

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:43:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: streamed thinking fragments were joined with single newlines, and the TUI markdown renderer collapsed those boundaries so adjacent sentences appeared smushed together - Why it matters: reasoning output in the terminal became hard to read 

### #66098 fix(web-ui): respect effective chat defaults

- bucket: needs_proof
- author: Rohan5commit
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:44:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the Web UI only looked at persisted session overrides, so a new session could already be running with effective thinking/reasoning defaults while the chat header still rendered the fallback model label or hid reasoning incorrectly - Why i

### #67376 fix(gateway): bind loopback MCP scope to per-backend bearer token (#64993)

- bucket: needs_proof
- author: parasol-aser
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, agents, size: L, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:44:31Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes loopback MCP scope spoofing (issue #64993, CWE-285/639/807/345, OWASP A01:2021). The loopback MCP HTTP server (`/mcp`) authenticated each request with a 32-byte bearer token but then read per-request **scope** (`sessionKey`, `accountId`, `mess

### #68597 fix(memory): block symlink escapes in memory_get

- bucket: needs_proof
- author: GaosCode
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:44:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `memory_get` could accept a path that lexically stayed under the workspace or an allowed extra path, but escaped through an intermediate directory symlink. - Why it matters: an agent using `memory_get` could be tricked into pulling conten

### #72677 fix(cron): warn on main heartbeat handoff ghost runs

- bucket: needs_proof
- author: liaoandi
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: matrix, app: web-ui, gateway, scripts, size: M, proof: supplied, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:45:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #63106. ## Summary - Add a scoped warning for fast successful main-session `systemEvent` cron jobs using `wakeMode="next-heartbeat"`. - Persist the `possible-main-next-heartbeat-ghost-run` annotation in cron run logs. - Carry and render cron run-log warn

### #73462 fix: add auth profile listing

- bucket: needs_proof
- author: ishangodawatta
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:46:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw auth list` is currently unavailable for users trying to inspect saved model auth profiles. - Why it matters: scripts and troubleshooting flows need a read-only way to confirm configured auth profile ids without reading `auth-pro

### #74643 config: accept per-agent verboseDefault and elevatedDefault overrides (#73680)

- bucket: needs_proof
- author: lonexreb
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: S, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:46:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `AgentEntrySchema` (per-agent `agents.list[]` shape) accepts `thinkingDefault`, `reasoningDefault`, and `fastModeDefault` per-agent, but does not declare `verboseDefault` or `elevatedDefault`. The runtime resolver chain already reads both

### #75918 feat(hooks): add persistent hook session mode

- bucket: needs_proof
- author: ryanrhughes
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, commands, agents, size: L, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-14T19:46:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Revives the persistent hook-session work from the stale/closed #27193 against current `main`. Adds an explicit `sessionMode: "isolated" | "persistent"` option for hook-agent runs so webhook integrations with stable, scoped `sessionKey` values can op

### #76020 feat(feishu): add topicRequireMention for topic thread mention control

- bucket: needs_proof
- author: symonbaikov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: feishu, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:46:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Problem: requireMention in Feishu groups applies equally to normal group messages and topic thread replies, with no way to separate the two. Users who want to require @mention for new conversations but allow free replies inside started threads cannot

### #76069 feat: add messaging window command

- bucket: needs_proof
- author: zarruk
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: L, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:47:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add `/messaging_window` and `/messaging-window` to manage inbound message batching windows from chat - support status, global defaults, per-channel overrides, off, reset, and friendly shorthands like `/messaging_window 3s`, `/messaging_window curr

### #76296 Add Android APK GitHub workflows

- bucket: needs_proof
- author: brannum
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: android, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:47:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a manually runnable Android APK build workflow for play/thirdParty debug/release variants - upload APK artifacts with SHA-256 logging - add a fork upstream-watch workflow and APK build instructions ## Verification - `./gradlew --no-daemon :app

### #76298 feat(cli): add openclaw experimental for toggling experimental config flags

- bucket: needs_proof
- author: rendrag-git
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, commands, size: XL, proof: supplied, mantis: telegram-visible-proof, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof, proof: 🎥 video
- gitcrawl snapshot updated: 2026-06-14T19:47:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > AI-assisted. Tested on pushed branch `115daf62fe`: focused Vitest coverage for config/CLI/chat/TUI passed, config schema check passed, the real `pnpm openclaw experimental --help` entrypoint resolved, the interactive CLI picker wrote a throwaway config with 

### #76370 fix(exec): hide policy controls from model args

- bucket: needs_proof
- author: neilofneils404
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:47:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Remove operator-only exec controls (`security`, `ask`, `host`, `elevated`, `node`) from the model-facing exec tool schema - Stop consuming those fields from exec tool-call args; configured tool defaults and approval defaults now remain the only po

### #76407 fix(diagnostics): rotate cache trace and payload JSONL logs

- bucket: needs_proof
- author: trialanderrorstudios
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:48:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add opt-in archive rotation to the queued JSONL writer while preserving cap-and-drop behavior for existing maxFileBytes-only callers. - Bound diagnostic JSONL sinks by default: cache trace rotates at 50 MB with 3 archives; Anthropic provider paylo

### #76445 Fix/cron duplicate name validation

- bucket: needs_proof
- author: habib-agentic-engineer
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:48:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #76160 \`openclaw cron add\` and \`cron edit\` now enforce unique job names, preventing silent duplicate-name acceptance that could lead to dual-fire risk when both jobs remain enabled. ## Problem Previously, the cron service silently accepted jobs with 

### #76614 fix(zalouser): surface send errors and recover from oversized style payloads

- bucket: needs_proof
- author: vinhnguyenthanhdn
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: zalouser, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:48:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## TL;DR Zalo delivery failures were completely invisible: the monitor never checked send results, error codes were lost, and messages silently disappeared when styled payloads exceeded Zalo's size limit. --- ## Problem Three compounding gaps caused messages t

### #76634 fix(mattermost): resolve reply root before sending thread replies

- bucket: needs_proof
- author: AlfredIrving
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: mattermost, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:48:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - resolve Mattermost replyTo post IDs before using them as root_id - map child reply posts to their actual thread root - avoid sending stale or cross-channel replyTo IDs as root_id - add Mattermost send tests for child roots, top-level roots, cross-

### #76646 fix(ui): make dreams diary day chips sticky to prevent scroll-away on long entries

- bucket: needs_proof
- author: Thatgfsj
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-14T19:48:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #76638 — when a diary entry had long content (10+ paragraphs), the day-chip navigation bar at the top would be pushed out of the viewport, making it impossible to switch between dates. ## Root cause `.dreams-diary__daychips` used `position: re

