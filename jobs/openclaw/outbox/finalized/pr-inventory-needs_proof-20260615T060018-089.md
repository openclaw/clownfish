---
repo: openclaw/openclaw
cluster_id: pr-inventory-needs_proof-20260615T060018-089
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
  - "#76065"
  - "#75796"
  - "#75179"
  - "#76473"
  - "#74425"
  - "#75545"
  - "#75714"
  - "#75247"
  - "#76034"
  - "#75786"
cluster_refs:
  - "#76065"
  - "#75796"
  - "#75179"
  - "#76473"
  - "#74425"
  - "#75545"
  - "#75714"
  - "#75247"
  - "#76034"
  - "#75786"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.668Z; bucket=needs_proof; no GitHub mutation is possible in plan mode."
---

# PR Inventory needs_proof 89

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #76065 fix(deps): add Zod v4 override to resolve @jimp/* transitives

- bucket: needs_proof
- author: skwalb12
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS, triage: risky-infra, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-05-31T04:59:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: @jimp/* packages depend on zod@3.25.76 (transitive), while the project uses zod@^4.4.1. This causes type conflicts and dual version issues. Add pnpm override to force all zod dependencies to use v4. **Changes:** - Add "zod": "^4.4.1" to pnpm.overrides in packa

### #75796 Protect macOS config fallback from redacted secret clobbering

- bucket: needs_proof
- author: duhman
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, app: macos, gateway, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - protect the macOS local config-file fallback from persisting `__OPENCLAW_REDACTED__` - render redacted sentinels as blank in the macOS config UI binding - add regression coverage for direct save, array recursion, orphan sentinel rejection, and loc

### #75179 fix(memory): incremental session sync (openclaw#40919) (openclaw#59577)

- bucket: needs_proof
- author: wr-web
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: XL, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:13Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: fix(memory): incremental session sync;fix bugs;move to extensions:memory-core (openclaw#40919) (openclaw#59577) ## Summary Describe the problem and fix in 2–5 bullets: If this PR fixes a plugin beta-release blocker, title it `fix(<plugin-id>): beta blocker - <

### #76473 Warn on high-frequency cron schedules (<30m)

- bucket: needs_proof
- author: LindalyX-Lee
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, cli, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - extract a shared high-frequency `every` warning helper - warn on high-frequency `every` schedules in CLI `cron add` and `cron edit` - warn on high-frequency `every` schedules in Gateway `cron.add` and `cron.update` - align the Gateway warning call

### #74425 fix: ensure CLI processes exit after command completion on Windows

- bucket: needs_proof
- author: 1yihui
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof, P1, rating: 🧂 unranked krab, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-05-31T04:59:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes CLI processes (node.exe openclaw.mjs) remaining alive after command execution on Windows. The CLI entrypoint was missing process.exit() calls after commands completed, causing processes to hang. ## Changes - Added explicit `process.exit(proces

### #75545 fix(gateway): make `gateway start` idempotent when already running

- bucket: needs_proof
- author: PfanP
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, extensions: memory-core, cli, commands, agents, size: S, triage: needs-real-behavior-proof, P1, rating: 🌊 off-meta tidepool, merge-risk: 🚨 compatibility
- gitcrawl snapshot updated: 2026-05-31T04:59:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #60087. ## Summary If you have `openclaw gateway start` in your `~/.profile` (the setup hint adds it), every exec tool call ends up SIGTERM'ing the running gateway and dropping your WebSocket session. The chain: ``` exec tool → bash -l -c "env -0" (PATH 

### #75714 fix(agents): normalize MCP EmbeddedResource content into text at bundle-MCP boundary

- bucket: needs_proof
- author: Seenfinity
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #75674. ## Bug / behavior being fixed MCP tools that return `EmbeddedResource` blocks (`type: "resource"`) reach the model as a `(see attached image)` placeholder instead of the actual resource payload. Reporter (@Jedi-Pz) traced the problem and the claw

### #75247 fix(cli/update): stop reporting clean working tree when porcelain shows dirty entries

- bucket: needs_proof
- author: delorenj
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: cli, size: S, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary `openclaw update` would print `✓ Working directory is clean` and *then* immediately bail with `Update Result: SKIPPED — Reason: dirty`. Two checks disagreeing in the same run, which made it impossible to tell what was actually wrong (it's almost alw

### #76034 feat(config-ui): add basic/advanced field split and doc-link affordance

- bucket: needs_proof
- author: symonbaikov
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: app: web-ui, gateway, size: M, triage: needs-real-behavior-proof, rating: 🌊 off-meta tidepool
- gitcrawl snapshot updated: 2026-05-31T04:59:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ● - [x] Add FIELD_ADVANCED set in schema.hints.ts to mark technical config fields (auth cooldowns, gateway infra knobs, diagnostics subsections, etc.) as advanced, so the config form can hide them by default - [x] Add docLink field to ConfigUiHint type for fut

### #75786 fix(subagents): reconcile timed-out waits against child session state

- bucket: needs_proof
- author: carlos-443-diaz
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: agents, size: S, triage: needs-real-behavior-proof, P2, rating: 🌊 off-meta tidepool, merge-risk: 🚨 session-state, merge-risk: 🚨 message-delivery
- gitcrawl snapshot updated: 2026-05-31T04:59:33Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #75785. ## Summary Reconcile timed-out `agent.wait` results against the persisted child session state before announcing subagent completion. This fixes a false-timeout path where the child run can finish successfully, but the parent-side completion hando

