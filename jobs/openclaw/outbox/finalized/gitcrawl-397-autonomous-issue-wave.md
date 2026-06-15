---
repo: openclaw/openclaw
cluster_id: gitcrawl-397-autonomous-issue-wave
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#90881"
candidates:
  - "#90881"
  - "#91352"
cluster_refs:
  - "#90881"
  - "#91352"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90881"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #90881 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 397 on 2026-06-15. Security-signal refs #90881 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 397

Generated from local gitcrawl run cluster 397 for `openclaw/openclaw`.

Display title:

> doctor --fix migrates codex/gpt-5.5 to openai/gpt-5.5, then Codex app-server startup times out on 2026.6.1

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- security-signal refs requiring route_security: #90881
- representative: #90881, currently open in local store
- latest member update: 2026-06-15T11:49:41.292026Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90881 [security-signal] doctor --fix migrates codex/gpt-5.5 to openai/gpt-5.5, then Codex app-server startup times out on 2026.6.1
- #91352 [Bug]: OpenAI Codex OAuth migration leaves stale default profile and codexPlugins app inventory can fail Codex harness
