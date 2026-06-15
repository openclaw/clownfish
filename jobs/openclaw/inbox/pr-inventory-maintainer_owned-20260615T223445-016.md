---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T223445-016
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
  - "#89539"
  - "#89550"
  - "#89559"
  - "#89634"
  - "#89810"
  - "#90708"
  - "#90723"
  - "#91023"
  - "#91091"
  - "#93306"
  - "#87827"
  - "#88514"
  - "#89571"
  - "#89582"
  - "#89596"
  - "#89603"
  - "#89733"
  - "#89763"
  - "#89819"
  - "#89875"
  - "#91262"
  - "#91291"
  - "#91452"
  - "#91502"
  - "#91570"
cluster_refs:
  - "#89539"
  - "#89550"
  - "#89559"
  - "#89634"
  - "#89810"
  - "#90708"
  - "#90723"
  - "#91023"
  - "#91091"
  - "#93306"
  - "#87827"
  - "#88514"
  - "#89571"
  - "#89582"
  - "#89596"
  - "#89603"
  - "#89733"
  - "#89763"
  - "#89819"
  - "#89875"
  - "#91262"
  - "#91291"
  - "#91452"
  - "#91502"
  - "#91570"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T22:34:45.789Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 16

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89539 fix(agents): cap runtime tool schema list scans

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: M, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:13:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cap runtime tool schema list inspection before reading entries so oversized sparse/proxy tool lists cannot stall assistant startup, doctor, or effective inventory. - Add a list-level schema diagnostic sentinel so aggregate list failures are not at

### #89550 fix(channels): harden message action schema discovery

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:13:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden channel message action discovery against plugin-returned getters/proxies that throw while reading discovery fields. - Keep cross-channel message actions conservative when current-channel schema action lists are unreadable. - Preserve health

### #89559 fix(plugins): harden plugin tool shape reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:13:47Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden plugin tool runtime shape checks against hostile getters on tool names, descriptions, execute functions, and parameter schemas. - Keep malformed plugin tools isolated so a bad tool cannot poison valid sibling tools from the same plugin. - M

### #89634 fix(llm): guard unreadable tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:14:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add an LLM-core tool schema readability preflight before TypeBox conversion/compilation. - Report unreadable root, nested, array item, accessor, and non-enumerable schema keyword failures as unsupported tool-schema errors instead of leaking raw tr

### #89810 fix(plugins): guard plugin service metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, P2, rating: 🦐 gold shrimp, status: ⏳ waiting on author, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T14:14:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin service metadata before service startup so a malformed registry row cannot abort the whole service loop. - Log and skip unreadable service registrations while preserving valid service lifecycle behavior. - Preserve service ids such as

### #90708 test: stabilize maintainer prepare baseline

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, channel: telegram, maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:16:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Stabilizes the local maintainer prepare baseline failures seen while preparing #85791. - updates the node-host allow-always coverage test to use a supported direct executable fixture instead of a shell-wrapped interpreter command that is now rejecte

### #90723 feat(hooks): add Gmail Pub/Sub pull delivery mode

- bucket: maintainer_owned
- author: joshp123
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, cli, maintainer, size: L, triage:blocked, proof: sufficient, P2, rating: 🦞 diamond lobster, merge-risk: 🚨 compatibility, merge-risk: 🚨 message-delivery, status: 👀 ready for maintainer look, feature: ✨ showcase
- gitcrawl snapshot updated: 2026-06-15T14:16:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: # Human-written request i think you should now start drafting implementation for each of the tools in worktrees and then opening draft PRs against the repos, at least for gog and openclaw. can you do that using [$session-goal-writer](/nix/store/hcks99ivrjhg2pg

### #91023 fix(acp): scope Discord thread session keys

- bucket: maintainer_owned
- author: KatTate
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: jalehman
- labels: channel: discord, size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:19:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - preserve the runtime Discord thread id when a configured ACP binding matches via its parent channel id - keep sibling Discord threads under the same configured parent channel on distinct persistent ACP session keys - clear stale configured-format

### #91091 fix(memory): do not prune session index from a failed directory scan

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: amknight
- labels: extensions: memory-core, maintainer, size: L, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 session-state, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:20:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary A full memory sync treats source enumerations as the source of truth for **destructive** maintenance: stale-row pruning of the session and memory-file indexes (`files` + `chunks` + vectors + FTS), full reindex rebuilds, and exported-session reconcil

### #93306 fix(status): ignore stale context after model switch

- bucket: maintainer_owned
- author: hxy91819
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:21:22Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Purpose Manual session model switches should make `/status` report the context window for the newly selected model. The current status formatter can still trust a transcript/runtime snapshot from the previous model, so a session pinned to `ollama-cloud/glm-

### #87827 feat(feeds): add feed lifecycle tooling

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: 🛠️ actively grinding
- gitcrawl snapshot updated: 2026-06-15T14:44:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds feed publisher/subscriber lifecycle tooling on top of the feed source and install primitives. This PR adds: - `openclaw feeds validate <path-or-url>` and `feeds hash <path-or-url>`. - `openclaw feeds build --inventory <path> --out <path>` for d

### #88514 fix(gateway): avoid default provider auth startup prewarm

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: S, proof: sufficient, P1, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, merge-risk: 🚨 auth-provider, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:44:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR stops the gateway from running the provider-auth warm sweep by default during startup. The issue report shows Docker/WSL2 gateway event-loop starvation, local RPC timeouts, and a 284s provider-auth prewarm on 2026.5.22; current main had move

### #89571 fix(provider): harden provider tool schema hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: M, proof: sufficient, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:45:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Harden provider tool schema normalization against plugin-supplied tools with unreadable `parameters` fields. - Share guarded tool-field reads across Gemini, DeepSeek, and native OpenAI schema hooks so one poisoned tool does not stop sibling normal

### #89582 fix(agents): harden tool search schema catalog

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🧂 unranked krab, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:46:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - make Tool Search catalog fingerprinting tolerate unreadable schema objects - snapshot catalog parameters into JSON-safe metadata so describe/search cannot be poisoned by hostile schema proxies - add regression coverage proving a bad tool schema do

### #89596 fix(policy): recognize declared tool allowlists

- bucket: maintainer_owned
- author: giodl73-repo
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: L, P3, rating: 🧂 unranked krab, status: 📣 needs proof, merge-risk: 🚨 other
- gitcrawl snapshot updated: 2026-06-15T14:46:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Recognize declared tool allowlists while filtering unavailable tools out of the declared context. - Filter denied MCP namespaces from declared allowlists, including `bundle-mcp`, sanitized server prefixes such as `paperless__*`, and duplicate-safe

### #89603 fix(agents): quarantine unreadable tool schemas before normalization

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: commands, agents, maintainer, size: M, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:46:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Quarantine provider-un-normalizable tool schemas inside `createOpenClawCodingTools` before core/provider normalization can touch hostile descriptors. - Preserve pre-normalization diagnostics for embedded runs, compaction, doctor checks, and effect

### #89733 fix(agents): guard message provider tool name reads

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:46:55Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard `filterToolsByMessageProvider()` against tool descriptors whose `name` getter throws while provider allow/deny policy is applied. - Avoid reading descriptor names when no message-provider policy exists, preserving the original tool list for

### #89763 fix(gateway): guard plugin session action dispatch

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: M, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:47:04Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Guard plugin session action registry traversal in the gateway auth and dispatch paths so unreadable sibling action metadata cannot crash request handling. - Fail closed when the matching session action required scope metadata is unreadable, without i

### #89819 fix(node-host): guard plugin command metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:47:12Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Snapshot plugin node-host command registration metadata before listing or dispatching commands. - Skip malformed command rows so one stale plugin registration cannot hide healthy node-host commands. - Preserve handler receiver context for valid co

### #89875 fix(channels): guard loaded plugin metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🦪 silver shellfish, merge-risk: 🚨 availability, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:47:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - guard loaded channel plugin registry coercion against unreadable `id` and `meta` descriptors - preserve normal/frozen plugin object identity while using cached stable wrappers only for accessor or read-only malformed metadata cases - route read-pa

### #91262 fix(build): fall back to tsx for build TypeScript scripts

- bucket: maintainer_owned
- author: smoe-bot
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: vincentkoc
- labels: scripts, size: S, proof: supplied, proof: sufficient, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:49:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: This PR was triggered by @smoe hitting a real build failure on a Debian trixie host while moving beyond the packaged OpenClaw install and toward building OpenClaw directly from the git checkout. That host was running Debian’s Node.js 24 build, where `process.f

### #91291 fix(plugins): stabilize plugin tool schemas

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T14:51:24Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Snapshots plugin tool schemas and tool metadata before plugin-owned values can mutate or throw during later registry/MCP use. - Guards implicit registration names and provider SDK schema helpers so plugin tooling keeps clear ownership and stable diag

### #91452 Add claw-score agent skill

- bucket: maintainer_owned
- author: kevinslin
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: XL, P3, rating: 🧂 unranked krab, merge-risk: 🚨 automation, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T14:53:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - copy the `claw-score` agent skill from `claw/maintainers` branch `dev/kevinlin/claw-score-discrawl-scope` into `.agents/skills/claw-score` - allowlist `.agents/skills/claw-score/**` in `.gitignore` so the repo-owned skill can be tracked - remove t

### #91502 Add Crabline channel-driver QA seam

- bucket: maintainer_owned
- author: RomneyDa
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, extensions: qa-lab, P3, rating: 🦐 gold shrimp, merge-risk: 🚨 automation, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T14:55:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds the OpenClaw QA Lab seam for `--channel-driver crabline --channel telegram`, matching the SDK-side driver shape from `openclaw/crabline#1`. - Records channel-driver selection in `qa-suite-summary.json` and emits `crabline-channel-capability-m

### #91570 fix(e2e): tighten installer and plugin QA assertions

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, docker, maintainer, size: XL, P2, rating: 🐚 platinum hermit, merge-risk: 🚨 compatibility, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-15T15:01:56Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Tighten runner/deadcode guard coverage for Windows command shims and package script wrappers. - Fail installer/update paths on UI build and package-manager errors across shell, PowerShell, and CLI flows. - Harden onboarding, Kitchen Sink RPC, and
