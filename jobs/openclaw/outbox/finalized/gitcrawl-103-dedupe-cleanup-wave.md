---
repo: openclaw/openclaw
cluster_id: gitcrawl-103-dedupe-cleanup-wave
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
  - "#86174"
candidates:
  - "#51251"
  - "#77440"
  - "#77690"
  - "#83565"
  - "#86174"
cluster_refs:
  - "#51251"
  - "#77440"
  - "#77690"
  - "#83565"
  - "#86174"
overlap_policy: "skip-full"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #86174 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 103 on 2026-06-16."
---

# Gitcrawl Cluster 103

Generated from local gitcrawl run cluster 103 for `openclaw/openclaw`.

Display title:

> [Bug]: WebChat + New Session displays default model but inherits parent's model override

Cluster shape from gitcrawl:

- total members: 5
- issues: 4
- pull requests: 1
- open candidates in local store: 5
- representative: #86174, currently open in local store
- latest member update: 2026-06-15T19:04:12.293056Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #51251 Session modelOverride persists across gateway restarts, silently overrides config default
- #77440 [Bug]: WebChat model selector shows global default instead of agent-specific default model
- #77690 [codex] Fix WebChat agent default model label
- #83565 Add per-turn (one-shot) model override to sessions.patch and chat-send payload
- #86174 [Bug]: WebChat + New Session displays default model but inherits parent's model override
