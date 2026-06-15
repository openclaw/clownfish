---
repo: openclaw/openclaw
cluster_id: pr-inventory-security_route_candidate-20260615T154534-125
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
  - "#79481"
  - "#79478"
  - "#87758"
cluster_refs:
  - "#79481"
  - "#79478"
  - "#87758"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T15:45:34.217Z; bucket=security_route_candidate; no GitHub mutation is possible in plan mode."
---

# PR Inventory security_route_candidate 125

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #79481 Hemant/55612 security audit dm exposure

- bucket: security_route_candidate
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, security, stale, size: S, triage: refactor-only, triage: blank-template, proof: supplied, proof: sufficient, P1, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, merge-risk: 🚨 security-boundary, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:04:09Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #55612 by treating open `dmPolicy` the same way open `groupPolicy` is treated for security exposure-matrix findings. - Keeps the change scoped to the security audit collector, audit docs, changelog, and trust-model regression tests. - Clarif

### #79478 fix(security): flag sensitive skill markdown network sends

- bucket: security_route_candidate
- author: HemantSudarshan
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: docs, gateway, security, stale, size: M, proof: supplied, proof: sufficient, P2, rating: 🦐 gold shrimp, merge-risk: 🚨 compatibility, status: ⏳ waiting on author
- gitcrawl snapshot updated: 2026-06-15T05:10:11Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a deep security-audit finding for installed skills whose `SKILL.md` asks for sensitive model-facing parameters while the skill code performs outbound network I/O - keep the check separate as `skills.markdown_sensitive_network` so existing code

### #87758 fix(security): harden web gateway against injection in fetched content (BQ-WEBGATE-001)

- bucket: security_route_candidate
- author: yozakura-ava
- author association: CONTRIBUTOR
- draft: no
- assignees: none
- labels: security, agents, stale, size: M, triage: needs-real-behavior-proof, P2, rating: 🧂 unranked krab, merge-risk: 🚨 automation, merge-risk: 🚨 compatibility, status: 📣 needs proof
- gitcrawl snapshot updated: 2026-06-15T05:13:36Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Harden the web-fetch and web-search tool paths against prompt injection carried in external HTML/text content. ### Changes - **Injection detection** (`src/security/external-content.ts`): extend the external-content safety module with multi-pattern i

