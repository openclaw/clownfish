---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T060018-006
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
  - "#77559"
  - "#77672"
  - "#77891"
  - "#78054"
  - "#78099"
  - "#78164"
  - "#78184"
  - "#78388"
  - "#78511"
  - "#78536"
cluster_refs:
  - "#77559"
  - "#77672"
  - "#77891"
  - "#78054"
  - "#78099"
  - "#78164"
  - "#78184"
  - "#78388"
  - "#78511"
  - "#78536"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.659Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 6

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #77559 [codex] Fix missing channel plugin diagnostics

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Treat missing catalog-backed `plugins.entries.*` channel plugins as repairable installs instead of stale config. - Keep `plugins.allow` on the existing stale-config warning path because `openclaw doctor --fix` does not repair allow-only references

### #77672 fix(webchat): unblock backend exec approvals

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, cli, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:24:49Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Let WebChat send `/approve ...` through the existing backend command path immediately while a run is blocked on approval. - Hydrate pending exec/plugin approval cards after Control UI reconnects. - Add CLI inspection affordances: `openclaw approvals 

### #77891 fix(sessions): unbind conversation bindings when missing transcripts are pruned

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:24:58Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: When `sessions cleanup --fix-missing` removes a session store entry because its transcript file is missing, the matching conversation binding in `current-conversations.json` is left intact. Subsequent messages resolve this stale bind

### #78054 fix: clarify group mentions target other people

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:25:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - tighten group-chat prompt rules so agents mostly lurk and do not answer every message - clarify that @mentions of other people are addressed to that person, not the agent - allow exceptions only for direct asks or concise corrections that prevent 

### #78099 chore(catalog): split Weixin entry from channel fix

- bucket: maintainer_owned
- author: odysseus0
- author association: MEMBER
- draft: no
- assignees: none
- labels: scripts, commands, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:25:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Split the non-bug-fix Weixin official external catalog addition back out of #77269. - Keep the channel-catalog install-records fix and its regression coverage intact on main. - Restore stale-plugin doctor tests to use `openclaw-weixin` as missing 

### #78164 Experiment with agent worker runtime isolation

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, maintainer, size: XL, proof: sufficient
- gitcrawl snapshot updated: 2026-05-14T05:25:06Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add an experimental Node worker runtime path for Pi agent attempts, enabled through `agents.defaults.experimental.runtimeIsolation.mode: "worker"` or `OPENCLAW_AGENT_RUNTIME_WORKER=1` - move attempt execution into a worker entrypoint with filesyst

### #78184 fix(exec): clean approval-pending chat prompts

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: docs, gateway, commands, agents, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:25:08Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This PR fixes the Telegram/Zollie approval loop symptom from the live test instance by separating two things that were being collapsed into one confusing chat prompt: - approval-pending gateway/node execs, where no command is running yet and the res

### #78388 fix(cli): reduce plugin hook fallback noise

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: cli, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:25:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - suppress the misleading `Also not a valid hook pack: package.json missing openclaw.hooks` suffix when plugin install fallback only proves a package lacks a hook-pack manifest - keep actionable hook-pack fallback details for real hook validation failu

### #78511 fix(gateway): skip health-monitor restart for terminal WhatsApp disconnects

- bucket: maintainer_owned
- author: openperf
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: whatsapp-web, gateway, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:25:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ### Summary - **Problem**: On multi-tenant gateways running ≥1 WhatsApp account, any account that receives a terminal disconnect (`loggedOut` 401, `connectionReplaced` 440) enters a perpetual restart loop — the health monitor calls `startChannel()` on every ch

### #78536 fix(slack): preserve buffered thread stream replies

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:25:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: Slack native streaming can keep short thread replies in the SDK buffer until finalization, and unexpected `chat.stopStream` failures before that flush can drop the generated reply. - Why it matters: #78061 reports Slack thread sessions ge

