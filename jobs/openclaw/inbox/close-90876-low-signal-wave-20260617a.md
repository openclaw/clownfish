---
repo: "openclaw/openclaw"
cluster_id: "close-90876-low-signal-wave-20260617a"
mode: autonomous
triage_policy: low_signal_prs
allowed_actions:
  - comment
  - close
blocked_actions:
  - label
  - merge
  - fix
  - raise_pr
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - maintainer_signal
  - active_author_followup
  - focused_bug_fix
  - green_checks
  - technical_correctness_judgment
canonical: []
candidates:
  - "#90876"
cluster_refs:
  - "#90876"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "Close only if #90876 remains inactive third-party ForAI documentation with no official-provider support signal."
source: "close_only_live_audit"
---

# Close Low-Signal PR #90876

Review only #90876 under `instructions/low-signal-prs.md`.

The audited PR is a first-time-contributor, docs-only third-party ForAI setup addition across six docs/index files, with no assignee, reviews, or human comment. Emit `close_low_signal` only when there is still no maintainer, provider, or author activity that makes the work actionable. Comment before closing; otherwise record the exact blocker.
