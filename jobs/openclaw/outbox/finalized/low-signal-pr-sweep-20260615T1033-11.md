---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-11
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
  - "#75554"
  - "#79501"
  - "#80789"
  - "#81777"
  - "#87694"
cluster_refs:
  - "#75554"
  - "#79501"
  - "#80789"
  - "#81777"
  - "#87694"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-15T10:33:33.322Z."
---

# Low-Signal PR Sweep 11

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #75554 [codex] Add plugin task lifecycle API

- author: goldmar
- updated: 2026-06-02T04:10:46Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Adds a plugin-safe task run lifecycle API under `api.runtime.tasks.runs.bindSession(...).lifecycle` / `fromToolContext(...).lifecycle`. - Creates plugin-owned records as existing `cli` task runtime rows with required plugin-nam
- changed files: not hydrated in gitcrawl

### #79501 Add ambient initiative mode to heartbeat

- author: ZardLi1115
- updated: 2026-06-02T05:07:47Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Add `heartbeat.mode = "ambient"` as a low-priority initiative mode on top of the existing heartbeat runner. - Let the model decide on each scheduled wake whether to stay silent or proactively send a natural message, so OpenClaw
- changed files: not hydrated in gitcrawl

### #80789 feat(cli): add openclaw context map command

- author: thesomewhatyou
- updated: 2026-06-02T05:11:04Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds `openclaw context map` — a CLI command that renders the same WinDirStat-style context treemap PNG that `/context map` sends in-chat, but from the terminal without needing a connected channel. ``` openclaw context map # most 
- changed files: not hydrated in gitcrawl

### #81777 [codex] support session-isolated app-server clients

- author: henkterharmsel
- updated: 2026-06-02T05:16:40Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - add opt-in `appServer.clientIsolation=session` so Codex app-server clients and thread bindings can be isolated per OpenClaw runtime-policy session/topic instead of shared per agent - route run attempts, queued follow-ups, nativ
- changed files: not hydrated in gitcrawl

### #87694 fix(auth): tighten billing cooldown defaults to recover from multi-hour lockouts (#70903)

- author: sweetcornna
- updated: 2026-06-02T15:28:45Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Multi-hour persisted `disabledUntil` (old 5h base / 24h cap billing defaults) keeps users locked out of a provider for the full window even after billing is fixed. The call layer skips disabled profiles before any probe runs, s
- changed files: not hydrated in gitcrawl

