---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T0529-004
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
  - "#77213"
  - "#77542"
  - "#77559"
  - "#77672"
  - "#77891"
  - "#78054"
  - "#78099"
  - "#78591"
  - "#78631"
  - "#78789"
cluster_refs:
  - "#77213"
  - "#77542"
  - "#77559"
  - "#77672"
  - "#77891"
  - "#78054"
  - "#78099"
  - "#78591"
  - "#78631"
  - "#78789"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.600Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 4

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #77213 fix(secrets): degrade stale auth profile refs on startup

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #75814. - Keeps gateway startup online when a stale SecretRef exists only in a stored auth profile. - Degrades the affected runtime auth profile by removing the failed keyRef/tokenRef from the prepared snapshot, making it ineligible as missi

### #77542 [codex] add gateway stall diagnostics

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: slack, gateway, cli, scripts, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:24:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This adds higher-signal gateway stall diagnostics for slow Telegram turns where the transport is healthy but the Gateway/embedded Codex run stops making useful progress. Changes: - Add a lightweight diagnostic phase ring and emit `diagnostic.phase.c

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

