---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-07
mode: plan
triage_policy: low_signal_prs
allowed_actions:
  - comment
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - label
require_human_for:
  - security_sensitive
  - maintainer_signal
  - active_author_followup
  - focused_bug_fix
  - green_checks
  - technical_correctness_judgment
canonical: []
candidates:
  - "#73165"
  - "#73032"
  - "#73138"
  - "#73159"
  - "#75100"
cluster_refs:
  - "#73165"
  - "#73032"
  - "#73138"
  - "#73159"
  - "#75100"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.321Z."
---

# Low-Signal PR Sweep 7

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #73165 Add MCP readiness gate for advertised skills

- author: martins-oss
- updated: 2026-05-30T04:57:31Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - filters MCP-backed advertised skills behind verified readiness metadata - adds readiness parsing for skill metadata and config/mcp-readiness.json - adds dry-run smoke script for mcporter/readiness mismatch checks ## Verificatio
- changed files: not hydrated in gitcrawl

### #73032 feat(voiceclaw-realtime): add xAI Realtime Voice Agent provider (closes #73019)

- author: matthewtran172
- updated: 2026-05-30T04:57:35Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Tracks #73019. This is a draft PR opening the design proposed in #73019 for review. Adds support for xAI's Voice Agent API (`grok-voice-think-fast-1.0`) as a `/voiceclaw/realtime` provider — the same surface that ships `gemini-live.ts` toda
- changed files: not hydrated in gitcrawl

### #73138 Add observe-first MCP runtime guardrails

- author: martins-oss
- updated: 2026-05-30T04:58:18Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Adds observe-first MCP runtime guardrails around bundle MCP tool execution. - Tracks per-tool circuit state, budget/rate observations, and runtime snapshots. - Keeps production behavior observe-only; fail-closed enforcement is 
- changed files: not hydrated in gitcrawl

### #73159 Add tool-call failure guardrails

- author: martins-oss
- updated: 2026-05-30T04:59:30Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: Implements guardrails for recurring OpenClaw tool-call failure classes from task 7d0f53dc.\n\nChanges:\n- read tool adds actionable guidance for missing-file ENOENT/ENOTDIR path failures\n- message tool rejects unsupported channel actions b
- changed files: not hydrated in gitcrawl

### #75100 feat(feishu): add segment streaming mode

- author: joeia26
- updated: 2026-05-30T04:59:48Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Add an opt-in Feishu streaming delivery mode that accumulates model output and flushes complete segments at pause points, without changing the existing CardKit streaming-card default. ## Motivation Feishu currently uses `channels
- changed files: not hydrated in gitcrawl

