---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T223445-022
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
  - "#90550"
  - "#90617"
  - "#50250"
  - "#47087"
  - "#91414"
  - "#91545"
  - "#91596"
  - "#48690"
  - "#44098"
  - "#91655"
  - "#91459"
  - "#91812"
  - "#60402"
  - "#48278"
  - "#87691"
  - "#87707"
  - "#88270"
  - "#88506"
  - "#88507"
  - "#88522"
  - "#88531"
  - "#91994"
  - "#88651"
  - "#88668"
  - "#88684"
cluster_refs:
  - "#90550"
  - "#90617"
  - "#50250"
  - "#47087"
  - "#91414"
  - "#91545"
  - "#91596"
  - "#48690"
  - "#44098"
  - "#91655"
  - "#91459"
  - "#91812"
  - "#60402"
  - "#48278"
  - "#87691"
  - "#87707"
  - "#88270"
  - "#88506"
  - "#88507"
  - "#88522"
  - "#88531"
  - "#91994"
  - "#88651"
  - "#88668"
  - "#88684"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.790Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 22

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #90550 Fix: DX: Add Makefile or justfile for common development tasks

- bucket: needs_proof
- author: LimonTeaOK
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-05T04:56:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Resolves #59736. Summary: Agrega un Makefile conservador con tareas comunes y un help auto-documentado usando descripciones en el propio Makefile. Tests: - make help - make build - make test - make check - make dev Risks: - El repo podría no usar exactamente a

### #90617 Add Entroly context compression skill

- bucket: needs_proof
- author: juyterman1000
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: low-signal-docs, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-06-06T04:46:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What this PR adds Adds an **Entroly** skill to the skills directory — a local context compression engine that reduces LLM input tokens by 70-95% on large repos. ### How it works - Ranks repo files by query relevance (BM25 + entropy + dependency graph) - Sel

### #50250 fix(health): show gateway probe duration in text output

- bucket: needs_proof
- author: JonathanJing
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: XS, triage: needs-real-behavior-proof, P3, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T04:55:45Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - show gateway probe duration in the standard text output for `openclaw health` - keep `openclaw health --json` unchanged - add regression coverage for the text output ## Why `openclaw health --json` already includes `durationMs`, but the default hu

### #47087 Attach provenance to spawned subagent tasks

- bucket: needs_proof
- author: Christoffer91
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-07T05:02:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This adds explicit inter-session provenance to child tasks launched via `sessions_spawn`. Changes in this PR: - attach `inputProvenance` when `spawnSubagentDirect()` starts the child `agent` run - preserve requester session/channel lineage on the sp

### #91414 fix(agent): agents.defaults.model.fallbacks not inherited by isolated cron sessions

- bucket: needs_proof
- author: Linux2010
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-08T12:53:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #91362 ## Summary When `agents.defaults.model.fallbacks` is configured globally, isolated cron sessions did not inherit these fallbacks when the agent's model config is a plain string. ## Root Cause `resolveSelectedModelFallbacksOverride` returned `[]` f

### #91545 fix: use Start-Process FilePath on Windows

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T01:54:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - switch dashboard config-opening on Windows from `Start-Process -LiteralPath` to the supported `-FilePath` parameter - keep the existing single-quoted PowerShell escaping behavior - update the config command test to assert the working PowerShell in

### #91596 fix(memory): use local modelPath for status identity so custom local models aren't always dirty (fixes #91001)

- bucket: needs_proof
- author: ly-wang19
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:06:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** With `memorySearch.provider: "local"` and a custom `local.modelPath`, `openclaw memory status` always reports the index as **dirty** even right after a clean `memory index --force`. The index never looks "valid," so it appears to need

### #48690 fix: add task-level timeout to lane queue to prevent permanent session blocking

- bucket: needs_proof
- author: kyletabor
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:48:42Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add `Promise.race` timeout wrapper around `await entry.task()` in `pump()` to prevent hung promises from permanently jamming session lanes - New `CommandLaneTaskTimeoutError` error class for timed-out tasks - New `taskTimeoutMs` option on `enqueue

### #44098 fix(security): add default pidsLimit for sandbox containers

- bucket: needs_proof
- author: Jackey0903
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T04:54:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Sandbox containers were created without a default pidsLimit, making them vulnerable to fork bomb attacks that could exhaust host resources. ## Security Impact - **Prevents fork bomb attacks**: Malicious or compromised agents cannot execute `:(){ :|:

### #91655 fix(tools): sanitize url parameter in web_fetch to handle model formatting errors

- bucket: needs_proof
- author: akang1798
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T07:29:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Description This PR fixes a bug where `web_fetch` fails when the LLM generates a URL containing whitespaces (e.g., `"https:// docs.openclaw.ai"`). ### Rationale LLMs (especially smaller models) sometimes introduce spaces after protocol markers or surroundi

### #91459 fix(memory-wiki): include workspace in bridge artifact hash to prevent collisions

- bucket: needs_proof
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, extensions: memory-wiki, proof: supplied, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-09T13:44:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(memory-wiki): include workspace in bridge artifact hash to prevent collisions ## Summary **Problem:** When multiple workspaces produce artifacts with the same relative path (e.g. `memory/.dreams/events.jsonl`), the 8-char SHA1 hash suffix collided, causing

### #91812 fix(cron): report sqlite path in cron status

- bucket: needs_proof
- author: arkyu2077
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T02:28:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - report the SQLite state DB path from `cron.status` instead of the internal cron mirror JSON path - thread an optional user-facing `statusStorePath` into the cron service so status callers can override the display path without changing persistence

### #60402 fix: wake targeted ACP parent sessions when heartbeat is disabled

- bucket: needs_proof
- author: dapzthelegend
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: stale, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T06:06:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - allow targeted session wake requests (including `acp:spawn:*`) to execute even when periodic heartbeat scheduling is disabled - move targeted wake handling ahead of global heartbeat-disabled / empty-schedule guards in `startHeartbeatRunner` - add

### #48278 Config: scaffold compaction loop guard settings

- bucket: needs_proof
- author: xz0831
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T09:53:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: the loop-aware compaction guard plan needed a small, reviewable config/schema landing point before detector/runtime work. - Why it matters: separating config scaffolding from runtime behavior keeps review narrow and lets follow-up PRs bui

### #87691 fix(auto-reply): preserve post-compaction failure context in user-facing recovery message (#67750)

- bucket: needs_proof
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: mock-only-proof, P2, rating: 🦪 silver shellfish, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T09:55:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? When auto-compaction succeeds inside a turn and the retried run still fails (e.g. `LLM idle timeout (120s)`, fallback exhausted with billing-skipped candidates), `runAgentTurnWithFallback`'s catch path collapses the

### #87707 fix(auto-reply): direct-send text-only block replies when streaming off (#57225)

- bucket: needs_proof
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T09:55:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary What problem does this PR solve? When block streaming is disabled (the Discord, Telegram, msteams, IRC, Mattermost, Synology Chat, NextCloud Talk, Slack Block Kit, etc. default), the shared block-reply delivery handler in `src/auto-reply/reply/reply

### #88270 fix: retry loopback probes without device identity after pairing repair

- bucket: needs_proof
- author: koatomic88
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T13:44:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix a gateway probe edge case where a loopback probe with explicit gateway auth can get stuck in a pairing-repair path because the probe eagerly reuses cached device identity. The new behavior is narrow: - probe normally first, including cached devi

### #88506 feat: add per-agent compaction overrides

- bucket: needs_proof
- author: kklouzal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, gateway, extensions: memory-core, commands, agents, size: XL, extensions: codex, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:19:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds per-agent `compaction` and `contextPruning` overrides so each configured agent can resolve maintenance/runtime behavior from its active agent scope instead of always inheriting every value from `agents.defaults`. This is for multi-agent install

### #88507 feat(plugins): accept slot owner records

- bucket: needs_proof
- author: kklouzal
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, cli, commands, agents, size: L, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:19:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR implements the read-side normalization layer proposed in #70823: `plugins.slots.memory` and `plugins.slots.contextEngine` can now be read as either a bare plugin id string or an object-form ownership record with an `owner` field. What proble

### #88522 Fix Telegram active-run ingress sequencing

- bucket: needs_proof
- author: Hilo-Hilo
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: telegram, size: M, triage: needs-real-behavior-proof, mantis: telegram-visible-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:19:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary: - Let Telegram plain-text follow-ups enter an active-run ingress lane for the same account/chat/thread while an earlier handler is still running. - Keep media/media-group updates on the normal serialized lane. - Document the runtime behavior and add a

### #88531 Suggest closest edit match when oldText is missing

- bucket: needs_proof
- author: imwyvern
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, P3, rating: 🦐 gold shrimp, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T16:20:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add line-numbered closest-match hints when the edit tool cannot find an `oldText` block. - Reuse the edit diff failure path so execution and preview errors share the same hint wording. - Keep hint generation bounded for large files, oversized oldT

### #91994 Fix Docker setup repair before onboarding

- bucket: needs_proof
- author: j-sustr
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, scripts, docker, size: XS, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-06-10T17:31:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Run `openclaw doctor --fix` during Docker setup after data-dir permissions are repaired and before onboarding/config writes. - Cover the setup-time command ordering in the Docker setup E2E harness. This preserves the release-branch Docker update p

### #88651 fix: add memory leak protection for steer rate limit map

- bucket: needs_proof
- author: jokemanfire
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:42:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: **Add size-based eviction (max 1024 entries) and periodic stale sweep (every 60s) to prevent unbounded growth of the steerRateLimit Map.** ## Summary **What problem does this PR solve?** `steerRateLimit` Map 会随着每次 steer 操作插入新条目而无限制增长，导致长期运行后内存泄漏。 **Why does th

### #88668 [codex] Add per-DM active directive prompt

- bucket: needs_proof
- author: molle-png
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:43:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a DM-scoped active directive path so deployments can steer direct-message behavior for a turn without folding that directive into ambient group/subagent context. The new `agents.defaults.dmDirective` setting is routed as `extraSystemPromptDirec

### #88684 Keep agent web_search on runtime provider resolution

- bucket: needs_proof
- author: alexzhu0
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 auth-provider, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-10T17:43:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #87347 ## User-facing bug Agent-side `web_search` could report `web_search is disabled or no provider is available` even when the configured search provider was already loaded in the runtime and worked through other runtime-backed paths. The agent tool w
