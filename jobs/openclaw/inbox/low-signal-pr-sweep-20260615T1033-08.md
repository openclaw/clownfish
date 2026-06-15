---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260615T1033-08
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
  - "#75140"
  - "#76634"
  - "#75871"
  - "#77549"
  - "#77256"
cluster_refs:
  - "#75140"
  - "#76634"
  - "#75871"
  - "#77549"
  - "#77256"
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

# Low-Signal PR Sweep 8

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #75140 feat(memory-core): record terminal task outcomes for dreaming feedback

- author: keane-751892
- updated: 2026-05-30T05:00:53Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds a plugin-sdk seam (`openclaw/plugin-sdk/task-events`) that lets plugins subscribe to the task registry's lifecycle events without owning the singleton observer that tests rely on. Multiple listeners can register in parallel 
- changed files: not hydrated in gitcrawl

### #76634 fix(mattermost): resolve reply root before sending thread replies

- author: AlfredIrving
- updated: 2026-05-31T05:00:46Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - resolve Mattermost replyTo post IDs before using them as root_id - map child reply posts to their actual thread root - avoid sending stale or cross-channel replyTo IDs as root_id - add Mattermost send tests for child roots, top
- changed files: not hydrated in gitcrawl

### #75871 OP-014: progressive skill disclosure (default-legacy, opt-in via skills.promptMode)

- author: aderius
- updated: 2026-05-31T05:02:27Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary Adds **progressive skill disclosure** as an opt-in overlay on the existing skill loading path, plus prompt-assembly and tool-call telemetry to support safer pilot evaluation. Two commits: - `f643ff03` — `feat: add progressive ski
- changed files: not hydrated in gitcrawl

### #77549 Improve hosted Docker runtime baseline

- author: robbybuilds
- updated: 2026-05-31T05:14:10Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - improve the hosted Docker runtime baseline with Python/pip/venv, common CLI tools, writable npm/pip homes, and optional browser/Docker-CLI build args - add hosted runtime guards for Docker deployments: disable mDNS/Bonjour, len
- changed files: not hydrated in gitcrawl

### #77256 feat(plugins): add before_model_call preflight hook

- author: m888m
- updated: 2026-05-31T05:14:12Z
- score: 1
- signals: third_party_or_external_capability
- files: 0
- body excerpt: ## Summary - Adds a typed, fail-closed `before_model_call` hook at Pi, CLI, and Codex app-server model submission boundaries. - Gates non-bundled plugin conversation access behind `plugins.entries.<id>.hooks.allowConversationAccess`. - Alig
- changed files: not hydrated in gitcrawl

