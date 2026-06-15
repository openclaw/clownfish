---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T060018-007
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
  - "#78591"
  - "#78631"
  - "#78789"
  - "#78857"
  - "#78875"
  - "#78981"
  - "#79198"
  - "#79518"
  - "#79818"
  - "#80110"
cluster_refs:
  - "#78591"
  - "#78631"
  - "#78789"
  - "#78857"
  - "#78875"
  - "#78981"
  - "#79198"
  - "#79518"
  - "#79818"
  - "#80110"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.660Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 7

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #78591 fix(channels): list channel catalog status

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, commands, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:25:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fix `openclaw channels list` so it lists channel surfaces only, instead of mixing in model/auth provider profiles. - includes bundled chat channels, trusted catalog channels, and configured channel ids - reports configured/enabled/installed status f

### #78631 test(plugins): cover stale OpenClaw peer repair during install

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:25:26Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This adds an e2e regression for the dirty managed-npm state that can make `openclaw plugins install @opik/opik-openclaw` fail with `ERESOLVE` after prior host-peer plugin installs. The fixture mirrors the bad state from the live box: - a Codex-like 

### #78789 fix(status): reduce deep status manifest scans

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, extensions: memory-core, scripts, commands, agents, maintainer, size: XL
- gitcrawl snapshot updated: 2026-05-14T05:25:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reuse the gateway startup plugin metadata snapshot for compatible direct metadata loads so deep status paths avoid repeatedly restatting bundled plugin manifests. - Carry bundled manifests discovered during plugin discovery into channel catalog me

### #78857 perf(agents): trim agent tool helper queues

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: channel: slack, channel: telegram, app: web-ui, gateway, agents, maintainer, size: XL
- gitcrawl snapshot updated: 2026-05-14T05:25:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Cherry-pick the agents/tools performance bucket onto main. - Replace queue `shift()`/array-chain hot paths in OpenAI WebSocket streaming, tool-call id resolution, agent reply/tool helpers, Slack, Telegram, SDK, and bundled channel helper assembly.

### #78875 perf(plugins): trim catalog and setup normalization

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: channel: discord, channel: mattermost, channel: slack, channel: telegram, gateway, agents, maintainer, size: XL, extensions: qa-lab
- gitcrawl snapshot updated: 2026-05-14T05:25:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Replays the catalog/plugin/setup normalization bucket onto current `main`. - Keeps the catalog/setup, plugin control-plane, setup formatter, channel catalog, and plugin helper rewrites. - Intentionally omits the stale package-entry-resolution hunk

### #78981 Add su-backed user sandbox backend

- bucket: maintainer_owned
- author: jacobtomlinson
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, docker, agents, maintainer, size: XL, proof: override
- gitcrawl snapshot updated: 2026-05-14T05:25:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw could isolate agents through Docker, SSH, or OpenShell, but had no local Unix-account sandbox for hosts that already manage per-agent users. - Why it matters: Local system users can provide practical file/process isolation withou

### #79198 refactor(plugins): expose loaded runtime metadata

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, agents, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:25:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: later prepared-runtime migrations need loaded provider, channel, public metadata, and outbound adapter facts from Gateway startup, but those facts were not exposed through one stable loaded-runtime surface. - Why it matters: without this 

### #79518 Prefer task-tracked Codex delegation

- bucket: maintainer_owned
- author: mbelinky
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, extensions: codex
- gitcrawl snapshot updated: 2026-05-14T05:25:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Add a Codex app-server developer-instruction guardrail that prefers OpenClaw `sessions_spawn` for delegated/background/"let me know when done" work when that dynamic tool is available. - Keep native Codex `spawnAgent` available for explicit Codex-

### #79818 feat(slack): expand message action parity

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: slack, agents, maintainer, size: XL, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:25:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds opt-in Slack message actions for search, channel discovery, permalinks, scheduled and ephemeral delivery, files, bookmarks, reminders, and canvases. - Adds Slack send controls for reply broadcast and unfurl preferences. - Gates Slack search d

### #80110 fix(agents): suppress raw subagent tool output

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, maintainer, size: S, proof: sufficient
- gitcrawl snapshot updated: 2026-05-14T05:25:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Closes #79986 - Replaces #80049 with the maintainer patch for the same reported behavior - [x] This PR fixes a bug or regression This keeps the correct core fix from #80049: `selectSubagentOutputText()` must not fall through to `snapshot.latestRaw

