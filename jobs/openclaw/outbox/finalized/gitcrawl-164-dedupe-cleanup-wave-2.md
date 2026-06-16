---
repo: openclaw/openclaw
cluster_id: gitcrawl-164-dedupe-cleanup-wave-2
mode: autonomous
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
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#87352"
candidates:
  - "#87352"
cluster_refs:
  - "#87352"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#87504"
  - "#91266"
  - "#91325"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #87352 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 164 on 2026-06-16. Existing-overlap refs #87504, #91266, #91325 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 164

Generated from local gitcrawl run cluster 164 for `openclaw/openclaw`.

Display title:

> [Bug]: Skill Workshop autoCapture agent_end reviews time out and block hooks on routine sessions

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #87504, #91266, #91325
- representative: #87352, currently open in local store
- latest member update: 2026-06-15T19:04:11.856376Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #87352 [Bug]: Skill Workshop autoCapture agent_end reviews time out and block hooks on routine sessions

Existing-overlap context refs:

- #87504 [security-signal] fix(skill-workshop): align agent_end hook timeout with max reviewer timeout
- #91266 [Bug]: Skill Workshop agent-tool apply times out because approval wait exceeds tool watchdog
- #91325 fix(codex): extend skill_workshop dynamic-tool timeout above approval ceiling
