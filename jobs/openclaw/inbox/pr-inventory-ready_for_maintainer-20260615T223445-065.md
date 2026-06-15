---
repo: openclaw/openclaw
cluster_id: pr-inventory-ready_for_maintainer-20260615T223445-065
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
  - "#89800"
  - "#89806"
  - "#89818"
  - "#89855"
  - "#89864"
  - "#89882"
  - "#87487"
  - "#92899"
  - "#89966"
  - "#92731"
  - "#77848"
  - "#90885"
  - "#73594"
  - "#75179"
  - "#77973"
  - "#77987"
  - "#77999"
  - "#78090"
  - "#78105"
  - "#78113"
  - "#78115"
  - "#78139"
  - "#78199"
  - "#78411"
  - "#78436"
cluster_refs:
  - "#89800"
  - "#89806"
  - "#89818"
  - "#89855"
  - "#89864"
  - "#89882"
  - "#87487"
  - "#92899"
  - "#89966"
  - "#92731"
  - "#77848"
  - "#90885"
  - "#73594"
  - "#75179"
  - "#77973"
  - "#77987"
  - "#77999"
  - "#78090"
  - "#78105"
  - "#78113"
  - "#78115"
  - "#78139"
  - "#78199"
  - "#78411"
  - "#78436"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.800Z; bucket=ready_for_maintainer; no GitHub mutation is possible in plan mode."
---

# PR Inventory ready_for_maintainer 65

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89800 fix(agents): resolve webchat current session status

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Resolve semantic `session_status({ sessionKey: "current" })` against the full effective requester key before alias fallback. - Use the full requester key when synthesizing an unpersisted semantic-current fallback without `runSessionKey`. - Add Web

### #89806 fix(feishu): avoid axios interceptor internals

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: feishu, size: S, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:19:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Stop clearing `Lark.defaultHttpInstance.interceptors.request.handlers` at module load. - Register the Feishu User-Agent override through the public `request.use(...)` interceptor API. - Cover the import-time regression with a mocked interceptor th

### #89818 fix(providers): forward stop sequences in bundled Anthropic transports

- bucket: ready_for_maintainer
- author: masatohoshino
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, extensions: amazon-bedrock, extensions: anthropic-vertex, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:20:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Forwards `stop` sequences through the remaining **bundled Anthropic-family transports** that build their own request payload: Anthropic Vertex, Amazon Bedrock, and Amazon Bedrock Mantle. Each dropped the contractually-forwardable `stop` field (`pa

### #89855 fix(telegram): avoid duplicate dm chat window context

- bucket: ready_for_maintainer
- author: sweetcornna
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: telegram, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Telegram private DMs already route into a persistent OpenClaw session transcript, but the inbound prompt also injected the recent Telegram `chat_window` context on every plain DM turn. That duplicated prior messages inside each new user message and

### #89864 fix(mentions): support single-char CJK names in mention pattern matching

- bucket: ready_for_maintainer
- author: dwc1997
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(mentions): support single-char CJK names in mention pattern matching ## Summary **Problem:** The `\b` word boundary assertion in JavaScript regex does not recognise CJK characters as word characters. When an agent identity name is a single CJK character (e

### #89882 fix(plugins): rebuild missing installs on policy refresh

- bucket: ready_for_maintainer
- author: baskduf
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XL, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T16:55:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes #89606. `policy-changed` registry refresh can take a persisted fast path that only updates enablement. That is safe only when the persisted `plugins[]` view is complete. If persisted install records still point at recoverable path/npm plugins

### #87487 fix(cli): clarify mcp list registry scope

- bucket: ready_for_maintainer
- author: Alix-007
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, cli, size: XS, proof: supplied, proof: sufficient, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:01:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #65209 ## Summary - label human-readable `openclaw mcp list` output as OpenClaw-managed `mcp.servers` config - add a visible note that `openclaw mcp list` does not include mcporter servers from `config/mcporter.json` - clarify the matching MCP CLI docs -

### #92899 fix compaction timeout partial progress

- bucket: ready_for_maintainer
- author: mushuiyu886
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:06:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Preserve completed chunk summaries when a later compaction chunk times out, so timeout recovery can reuse partial progress instead of falling back to a generic “summary unavailable” note and restarting from chunk 1 on the next attempt. - Preserve

### #89966 docs: add firecrawl.dev links on the Firecrawl tool page

- bucket: ready_for_maintainer
- author: rakshith48
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T17:22:17Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: The Firecrawl tool page mentioned Firecrawl only as plain text (the only URLs were `api.firecrawl.dev` API endpoints inside code blocks). This adds two links to `docs/tools/firecrawl.md`: - the first **Firecrawl** brand mention in the intro → https://www.firec

### #92731 fix(doctor): skip top-level group-allowlist scan when sub-accounts exist

- bucket: ready_for_maintainer
- author: 425072024
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T17:32:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem**: `openclaw doctor` falsely warns "all group messages will be silently dropped" when top-level `groupAllowFrom` is empty but every sub-account has its own populated `groupAllowFrom`. Issue #92684. - **Root Cause**: `scanEmptyAllowlistPo

### #77848 fix: scope provider resolution caches to catalog runs

- bucket: ready_for_maintainer
- author: rolandrscheel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:31:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Scopes provider-resolution caches to a single provider-catalog/catalog-auth operation instead of relying on repeated uncached plugin/provider lookups. This adds an explicit `ProviderResolutionScope` and threads it through the provider catalog/auth/d

### #90885 fix(agent): resolve compaction model alias to canonical model ref

- bucket: ready_for_maintainer
- author: Pick-cat
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 🔁 re-review loop
- gitcrawl snapshot updated: 2026-06-14T18:42:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Auto-compaction dispatched a bare model alias (e.g. `gpt54mini`) as-is instead of resolving it to its canonical model reference, causing `Unknown model: openai/gpt54mini` errors - Resolve bare `agents.defaults.compaction.model` overrides through t

### #73594 feat(openrouter): inject cache_control for closed-source qwen models

- bucket: ready_for_maintainer
- author: simpx
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:59:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Extend the existing OpenRouter cache_control wrapper to cover Alibaba's closed-source qwen commercial line (`qwen3-max` / `qwen3-plus` / `qwen3-flash` and future versioned tiers), in addition to `anthropic/*` models. ## Why this is safe Closed-sourc

### #75179 fix(memory): incremental session sync (openclaw#40919) (openclaw#59577)

- bucket: ready_for_maintainer
- author: wr-web
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XL, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T18:59:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(memory): incremental session sync;fix bugs;move to extensions:memory-core (openclaw#40919) (openclaw#59577) ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <

### #77973 fix(gateway): cap agentRunCache to prevent unbounded growth under run fan-out

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:03:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #77976 ## Summary `src/gateway/server-methods/agent-job.ts` keeps an in-process `agentRunCache: Map<runId, AgentRunSnapshot>` populated by every terminal lifecycle event. There is a 10-minute TTL pruned on every `set` via `pruneAgentRunCache`, but **no

### #77987 fix(gateway): cap auth-rate-limit entries map under unique-IP flood

- bucket: ready_for_maintainer
- author: fede-kamel
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:04:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Closes #77986 ## Summary `src/gateway/auth-rate-limit.ts` keeps an in-memory `entries: Map<scope:ip, RateLimitEntry>` of failed auth attempts. There is a periodic `setInterval(prune)` (default 60s) that walks the Map and drops entries with empty attempts, but

### #77999 fix(memory): reopen closed sqlite handles

- bucket: ready_for_maintainer
- author: dmbyte
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:04:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Detect when a cached memory index manager holds a closed sqlite handle and reopen it before search/status/sync. - Drop closed cached managers before reuse. - Add a regression test that closes the underlying DB handle and verifies status/search rec

### #78090 docs: call out discord external plugin install

- bucket: ready_for_maintainer
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: XS, triage: needs-real-behavior-proof, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:08:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Documents the Discord external plugin install step in the Discord quick setup. The root package/Docker image no longer bundles the Discord runtime by default. A config-only `channels.discord` block can therefore leave Docker/npm users with Discord m

### #78105 fix(plugins): make empty-allowlist actionable for new users

- bucket: ready_for_maintainer
- author: pahuchi-joe
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: S, proof: supplied, proof: sufficient, P3, rating: 🦐 gold shrimp, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:09:07Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: On fresh installs, `plugins.allow is empty; discovered non-bundled plugins may auto-load: ...` and `loaded without install/load-path provenance` warnings list ids but give no remediation, and users routinely confuse channel ids (`feishu`)

### #78113 fix(agents): restore workspace-<id> sibling layout for non-default agents

- bucket: ready_for_maintainer
- author: jkf87
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: XS, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:09:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - **Problem:** PR #59789 changed `resolveAgentWorkspaceDir` so that non-default agents would use `agents.defaults.workspace` as a base, resulting in nested paths like `~/.openclaw/workspace/newbot/` instead of the expected sibling layout `~/.opencla

### #78115 feat: add worker trigger loop CLI contract

- bucket: ready_for_maintainer
- author: Gforce10-design
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, commands, size: S, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-14T19:09:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds the bounded `openclaw worker trigger loop` CLI contract. - Registers the worker command in the CLI command registry and descriptors. - Adds command and registry tests for the local contract path. ## Real behavior proof - Behavior or issue add

### #78139 fix(cron): hint after disable about list filtering disabled jobs

- bucket: ready_for_maintainer
- author: kate
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, proof: supplied, proof: sufficient, P3, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:10:05Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: `openclaw cron disable <id>` appears to delete recurring cron jobs because `openclaw cron list` hides disabled jobs by default. Users see a successful disable response, then `cron list` shows the job is gone, and reasonably conclude the j

### #78199 fix(config): tolerate stale model catalog entries

- bucket: ready_for_maintainer
- author: YannCedric
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, proof: supplied, proof: sufficient, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:11:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: A stale suppressed model entry in `agents.defaults.models` could make config validation fail even when that entry was only an inactive catalog/allowlist option. - Why it matters: Config validation failure can prevent the gateway from beco

### #78411 docs(concepts): standardize active memory related heading

- bucket: ready_for_maintainer
- author: GGzili
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, triage: refactor-only, proof: supplied, P3, rating: 🦞 diamond lobster, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-14T19:19:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Rename `## Related pages` to `## Related` in the Active memory concept doc - Align the page with the heading used by the rest of the docs set ## Real behavior proof **Behavior or issue addressed:** The Active memory concept doc used `## Related pa

### #78436 fix(agents): scope session-history guard to latest-user-answered

- bucket: ready_for_maintainer
- author: kenners22
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, proof: supplied, proof: sufficient, P2, rating: 🧂 unranked krab, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-14T19:20:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Addresses part of #69086 (session-history guard only; retry-prompt hook/override remains separate). ## Summary - scope the session-history guard to assistant messages that occur after the latest user message - inspect the transcript tail rather than only the f
