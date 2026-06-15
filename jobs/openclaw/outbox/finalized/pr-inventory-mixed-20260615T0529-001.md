---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-001
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
  - "#62657"
  - "#63123"
  - "#63456"
  - "#65205"
  - "#66444"
  - "#66968"
  - "#68236"
  - "#68289"
  - "#69039"
  - "#69824"
cluster_refs:
  - "#62657"
  - "#63123"
  - "#63456"
  - "#65205"
  - "#66444"
  - "#66968"
  - "#68236"
  - "#68289"
  - "#69039"
  - "#69824"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.599Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 1

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #62657 fix(channel): guard setup catalog lookups

- bucket: maintainer_owned
- author: eleqtrizit
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:22:01Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guards the remaining channel-setup catalog lookups so setup-scoped plugin resolution only considers non-workspace entries by default - Keeps bundled channel setup behavior consistent across preload, discovery, and scoped reload paths ## Changes - 

### #63123 feat(ios): add background alive beacon support

- bucket: maintainer_owned
- author: ngutman
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: ios, gateway, maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:22:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: iOS background wakes did not give the gateway a durable, acked way to record that a node was recently alive unless a live websocket reconnect happened. - Why it matters: operators could not distinguish "currently connected" from "recently

### #63456 Scope workspace guidance to coding contexts

- bucket: stale_unassigned
- author: ImLukeF
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, maintainer, size: XL
- gitcrawl snapshot updated: 2026-05-14T05:22:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - scope repo-style workspace guidance to coding contexts only - stop injecting commit reminders for general assistant/product sessions - add tests covering coding vs non-coding prompt behavior ## Testing - pnpm exec vitest run src/agents/system-prom

### #65205 feat(discord): add canvas-first Discord Activities support

- bucket: maintainer_owned
- author: thewilloftheshadow
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, gateway, agents, maintainer, size: XL
- gitcrawl snapshot updated: 2026-05-14T05:22:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <summary>` and link the matching `Beta blocker: <plugin-name> - <summary>` issue labeled `beta-blocker`. Contribu

### #66444 fix(systemd): reconcile managed-env unit migrations

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, maintainer, size: XL
- gitcrawl snapshot updated: 2026-05-14T05:22:28Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - carry `#66295` onto current `main` - fix the two real migration regressions from review: rebuild malformed units when `ExecStart=` is missing, and reconcile stale `WorkingDirectory=` in-place instead of leaving `CHDIR` failures behind - remove the

### #66968 style: apply oxfmt formatting to 16 files

- bucket: maintainer_owned
- author: visionik
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, docker, agents, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:22:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Running `pnpm format:check` found 16 files with formatting drift. Applied `pnpm format` (`oxfmt --write`). No logic changes. Files touched: - `.agents/skills/openclaw-secret-scanning-maintainer/scripts/secret-scanning.mjs` - `docs/style.css` - `extensions/acti

### #68236 test(auth): add oauth e2e regression coverage

- bucket: maintainer_owned
- author: ngutman
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:22:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an OAuth auth-regressions e2e suite covering CLI and gateway auth-status surfaces - add targeted regression tests for stale auth order, shared refresh coordination, unhealthy status persistence, and recovery - document the deterministic OAuth 

### #68289 feat(workspace): add safe workspace reset command

- bucket: maintainer_owned
- author: Takhoffman
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, commands, maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:22:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a dedicated `openclaw workspace reset` command for safely trashing and reseeding a workspace - register the command in the core CLI and wire it through the existing onboard reset helpers - add focused command, helper, and CLI registration cove

### #69039 add option for MCP apps support

- bucket: maintainer_owned
- author: sallyom
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, gateway, agents, maintainer, size: XL
- gitcrawl snapshot updated: 2026-05-14T05:22:54Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: OpenClaw calls MCP servers, but ignores MCP Apps UI metadata/resources - Why it matters: MCP Apps turns trusted MCP servers into richer tool providers with purpose-built UI. Without host support, OpenClaw misses that part of the MCP ecosy

### #69824 [RFC] ACP everywhere: consolidate all LLM/agent launches behind a single ACP runtime seam

- bucket: maintainer_owned
- author: visionik
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:22:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: > **RFC — not a merge candidate.** This PR adds `docs/refactor/acp-everywhere.md` as a proposal. Please do not merge until (a) the direction is agreed and (b) sandbox-capability modeling (see Cons) is agreed. After merge, phasing issues will be filed from the 

