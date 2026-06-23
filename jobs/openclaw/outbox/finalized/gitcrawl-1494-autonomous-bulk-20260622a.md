---
repo: openclaw/openclaw
cluster_id: gitcrawl-1494-autonomous-bulk-20260622a
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
canonical: []
candidates:
  - "#71257"
cluster_refs:
  - "#71257"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#40418"
  - "#69943"
  - "#69961"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#40418"
  - "#69943"
  - "#69961"
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #69943 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1494 on 2026-06-22. Existing-overlap refs #40418, #69943, #69961 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1494

Generated from local gitcrawl run cluster 1494 for `openclaw/openclaw`.

Display title:

> [Bug]: session-memory hook persists raw chat-template tokens and unparsed tool calls — re-injected context creates self-reinforcing poisoning loop, agents emit role tokens / NO_REPLY across all subsequent /new sessions

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #40418, #69943, #69961
- security-signal refs requiring route_security: #40418, #69943, #69961
- representative: #69943, currently open in local store
- latest member update: 2026-06-18T13:30:25.089254968Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71257 fix(session-memory): sanitize model artifacts before reuse

Existing-overlap context refs:

- #40418 [security-signal] Feature Request: Automated Session Memory Preservation & Synthesis
- #69943 [security-signal] [Bug]: session-memory hook persists raw chat-template tokens and unparsed tool calls — re-injected context creates self-reinforcing poisoning loop, agents emit role tokens / NO_REPLY across all subsequent /new sessions
- #69961 [security-signal] fix(hooks/session-memory): sanitize chat-template tokens + tool_call XML before persisting (closes #69943)
