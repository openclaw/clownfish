---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T060018-151
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
  - "#89929"
  - "#89931"
  - "#89933"
  - "#89936"
  - "#89940"
  - "#89945"
  - "#89946"
  - "#89948"
  - "#89961"
  - "#89963"
cluster_refs:
  - "#89929"
  - "#89931"
  - "#89933"
  - "#89936"
  - "#89940"
  - "#89945"
  - "#89946"
  - "#89948"
  - "#89961"
  - "#89963"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T06:00:18.673Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 151

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #89929 fix(plugins): guard setup backend metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T16:36:39Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable setup CLI backend manifest metadata to the affected plugin row - preserve enabled-plugin and bundled-only filtering for setup backend descriptor/runtime fallback lookup - add regression coverage for both descriptor lookup and ru

### #89931 fix(plugins): guard manifest contract metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T16:45:19Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate unreadable manifest contract metadata to the affected plugin row during runtime contract plugin resolution - preserve existing contract matching, bundled compatibility ids, enabled-plugin filtering, and stable sorting - add regression cove

### #89933 fix(plugins): guard synthetic auth metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T16:54:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable plugin metadata rows when resolving synthetic auth provider refs. - Apply the same guard to `contracts.externalAuthProviders` resolution for persisted manifest metadata and the active runtime registry. - Add regression coverage for

### #89936 fix(plugins): guard model suppression metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T17:05:52Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable manifest plugin rows while planning manifest-driven built-in model suppressions. - Build a narrow readable planner view after control-plane availability filtering, so one bad metadata row cannot prevent later valid suppressions fro

### #89940 fix(models): guard manifest model id metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T17:17:14Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Skip unreadable plugin records while collecting manifest model-id normalization policies. - Preserve policy collection from healthy records before and after a poisoned metadata row. - Add regression coverage for both throwing `modelIdNormalization

### #89945 fix(plugins): guard provider discovery metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T17:25:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard manifest model-catalog metadata reads during provider discovery so one unreadable plugin row is skipped instead of aborting discovery. - Keep healthy manifest static catalog entries available before and after a bad row. - Add a poisoned meta

### #89946 fix(plugins): guard provider policy metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T17:35:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard bundled provider policy owner resolution against unreadable per-plugin metadata rows. - Continue resolving later valid bundled provider policy owners after a malformed row. - Add a regression covering poisoned `providers` and `providerAuthAl

### #89948 fix(plugins): guard plugin id alias metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T17:41:51Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard plugin-registry config id alias collection against unreadable manifest metadata. - Skip only the malformed manifest alias row, while preserving healthy channel/provider aliases for config id normalization. - Add regression coverage for poiso

### #89961 fix(plugins): guard manifest suppression metadata

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T18:06:59Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Guard manifest built-in model suppression planning against unreadable per-plugin metadata. - Skip only malformed manifest rows while preserving healthy alias-owned suppression entries. - Add regression coverage for poisoned `origin` and `modelCata

### #89963 fix(plugins): isolate bundled channel metadata rows

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: maintainer, size: S, P2, rating: 🐚 platinum hermit, status: 👀 ready for maintainer look
- gitcrawl snapshot updated: 2026-06-03T18:22:02Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - isolate malformed bundled channel manifest rows while building bundled channel runtime metadata - keep later healthy bundled channel metadata discoverable when another row throws during metadata conversion - add a regression test for an unreadable

