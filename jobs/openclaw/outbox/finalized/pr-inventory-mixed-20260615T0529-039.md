---
repo: openclaw/openclaw
cluster_id: pr-inventory-mixed-20260615T0529-039
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
  - "#79568"
  - "#79398"
  - "#79378"
  - "#79186"
  - "#79141"
  - "#78247"
  - "#78130"
  - "#78090"
  - "#78072"
  - "#78071"
cluster_refs:
  - "#79568"
  - "#79398"
  - "#79378"
  - "#79186"
  - "#79141"
  - "#78247"
  - "#78130"
  - "#78090"
  - "#78072"
  - "#78071"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T05:29:43.604Z; bucket=mixed; no GitHub mutation is possible in plan mode."
---

# PR Inventory mixed 39

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #79568 docs(vps): move related links into standard Related section

- bucket: stale_unassigned
- author: GGzili
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, size: XS, triage: low-signal-docs, proof: supplied
- gitcrawl snapshot updated: 2026-05-29T06:31:25Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Move the VPS page's inline `Related pages:` links into the existing `## Related` section - Keep the Gateway remote access and Platforms hub links available from the page - Verify internal docs links still pass the repository docs-link audit ## Rea

### #79398 Add context compaction quality probes

- bucket: ready_for_maintainer
- author: martins-oss
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: M, proof: supplied, proof: sufficient
- gitcrawl snapshot updated: 2026-05-29T06:31:27Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a deterministic context-compaction quality probe harness - add three representative synthetic long-session scenarios - expose `npm run test:context-compaction-probes` for rollover/compaction canaries ## Real behavior proof - Behavior or issue 

### #79378 test(plugin-sdk): guard realtime voice exports

- bucket: needs_proof
- author: ifthikar-razik
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, size: XS, triage: risky-infra, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-05-29T06:31:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary\n- add plugin-sdk release guards for realtime voice runtime exports used by standalone voice-call plugins\n- add guards for security-runtime file-store helpers required by voice-call persistence/context loading\n\n## Why\nAIF-126 standalone voice-ca

### #79186 fix(slack): raise SocketMode ping timeouts

- bucket: needs_proof
- author: brandonlipman
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: channel: slack, size: XS, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-05-29T06:31:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Narrow config change. See commit message for the full failure mode (cron-induced CPU starvation → bolt-socket-mode pong miss → silent DM loss). Reproducible on macOS with sustained Node event-loop blocking on tier-2 hardware. No tests changed; the failure mode

### #79141 Clarify group chat style guidance

- bucket: stale_unassigned
- author: clawsweeper[bot]
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: scripts, docker, size: S, triage: refactor-only
- gitcrawl snapshot updated: 2026-05-29T06:31:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - shorten generated group-chat style guidance so agents sound more natural in messaging surfaces - replace channel-specific link-preview wording with generic preview-spam guidance - keep single useful links free to preview while steering multi-link 

### #78247 Include token usage in model usage summaries

- bucket: needs_proof
- author: AntSentry
- author association: FIRST_TIME_CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: S, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-05-29T06:32:03Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - include per-model token totals in `model-usage --mode all` text and JSON output when CodexBar model breakdowns expose token fields - support CodexBar-style token fields and OpenAI-style `prompt_tokens` / `completion_tokens` / `total_tokens` - repo

### #78130 fix(memory-core): exclude session-corpus files from short-term promotion (#77831)

- bucket: needs_proof
- author: Beandon13
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: extensions: memory-core, size: S, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-05-29T06:32:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Dreaming writes session transcripts to `memory/.dreams/session-corpus/` inside the memory tree. The short-term promotion system tracked these paths in the recall store correctly (so dreaming phases can measure organic recall frequency), but also a

### #78090 docs: call out discord external plugin install

- bucket: needs_proof
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, channel: discord, size: XS, triage: needs-real-behavior-proof
- gitcrawl snapshot updated: 2026-05-29T06:32:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Documents the Discord external plugin install step in the Discord quick setup. The root package/Docker image no longer bundles the Discord runtime by default. A config-only `channels.discord` block can therefore leave Docker/npm users with Discord m

### #78072 test(auto-reply): cover dock native identity links

- bucket: stale_unassigned
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: size: XS
- gitcrawl snapshot updated: 2026-05-29T06:32:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a focused dock-routing regression for provider-native direct peer IDs in `session.identityLinks`. - Covers the cross-channel peer-link path where a displayed sender id differs from the native direct user id. ## Verification - `PATH="/tmp/open

### #78071 test(gateway): cover reserved admin method scopes

- bucket: stale_unassigned
- author: bryce-d-greybeard
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: gateway, size: XS
- gitcrawl snapshot updated: 2026-05-29T06:32:23Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds a focused gateway method-scope regression harness for listed reserved-admin methods. - Verifies config, legacy exec approvals, wizard, and update methods resolve to `operator.admin` and reject `operator.write`. ## Verification - `PATH="/tmp/o

