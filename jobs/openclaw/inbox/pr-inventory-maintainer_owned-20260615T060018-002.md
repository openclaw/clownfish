---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T060018-002
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
  - "#68020"
  - "#68236"
  - "#68289"
  - "#69039"
  - "#69824"
  - "#70762"
  - "#70906"
  - "#70907"
  - "#70922"
  - "#71497"
cluster_refs:
  - "#68020"
  - "#68236"
  - "#68289"
  - "#69039"
  - "#69824"
  - "#70762"
  - "#70906"
  - "#70907"
  - "#70922"
  - "#71497"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.659Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 2

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #68020 fix(memory-core): silence expected operator.admin scope miss in dreaming cleanup

- bucket: maintainer_owned
- author: ImLukeF
- author association: CONTRIBUTOR
- draft: no
- assignees: vignesh07
- labels: extensions: memory-core, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:22:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Dreaming cron's narrative cleanup logs `memory-core: narrative session cleanup failed for <phase> phase: missing scope: operator.admin` on **every** dreaming cycle, making healthy instances look broken. Root cause: `subagent.deleteSession` dispatche

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

### #70762 refactor(agents): share hook history windows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XL
- gitcrawl snapshot updated: 2026-05-14T05:23:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## summary - add a shared bounded hook-history helper so cli and embedded runners stop drifting on llm_input/agent_end payload windows - switch cli session-history loading and embedded hook emission to the shared windowing logic - add a deterministic live cli-

### #70906 docs(codex): document native compaction hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:23:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document Codex native `PreCompact` / `PostCompact` hooks as Codex-owned command hooks - clarify that OpenClaw `before_compaction` / `after_compaction` remain adapter-level plugin hook events - note that OpenClaw uses the app-server compaction item

### #70907 docs(codex): document native model lifecycle hooks

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:23:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - document Codex native `PreModelRequest` / `PostModelResponse` hooks as Codex-owned command hooks - clarify that OpenClaw plugin `llm_input` / `llm_output` remain adapter-level compatibility events - call out that OpenClaw does not double-fire mode

### #70922 refactor(whatsapp): centralize account policy

- bucket: maintainer_owned
- author: mcaxtr
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:23:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a canonical WhatsApp-local account policy seam in `extensions/whatsapp/src/account-policy.ts` - migrate inbound policy, send, heartbeat recipient resolution, and action target auth to consume that seam instead of re-deriving multi-account poli

### #71497 fix(skills): refresh persisted snapshots after restart

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: agents, maintainer, size: XS, dedupe:parent
- gitcrawl snapshot updated: 2026-05-14T05:23:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Seed the process-local skills snapshot version at gateway/CLI startup instead of starting every process at version `0`. - Force persisted `version: 0` snapshots from older processes to refresh once after restart, covering both gateway reply and CL

