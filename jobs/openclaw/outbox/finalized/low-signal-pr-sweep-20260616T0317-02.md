---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260616T0317-02
mode: autonomous
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
  - "#89932"
cluster_refs:
  - "#89932"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-16T03:17:16.610Z."
---

# Low-Signal PR Sweep 2

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #89932 docs: document Skill Workshop tool visibility rules

- author: baskduf
- updated: 2026-06-15T11:47:56Z
- score: 2
- signals: docs_only, third_party_or_external_capability
- files: 3
- body excerpt: ## Summary - Clarify that `skill_workshop` is already included in `tools.profile: "coding"`. - Document the correct fixes for restrictive profiles, provider-scoped profiles, exact allowlists, and sandboxed runs. - Update the tool profile/gr
- changed files: docs/gateway/config-tools.md, docs/gateway/sandbox-vs-tool-policy-vs-elevated.md, docs/tools/skill-workshop.md

