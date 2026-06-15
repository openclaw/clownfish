---
repo: openclaw/openclaw
cluster_id: gitcrawl-44-autonomous-issue-wave
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
  - "#84032"
candidates:
  - "#8190"
  - "#84032"
  - "#84637"
  - "#90036"
  - "#90420"
  - "#90462"
  - "#90471"
cluster_refs:
  - "#8190"
  - "#84032"
  - "#84637"
  - "#90036"
  - "#90420"
  - "#90462"
  - "#90471"
  - "#91552"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#88372"
  - "#90328"
  - "#90500"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #84032 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 44 on 2026-06-15. Existing-overlap refs #88372, #90328, #90500 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 44

Generated from local gitcrawl run cluster 44 for `openclaw/openclaw`.

Display title:

> Model picker should distinguish GPT provider/auth route from agent runtime

Cluster shape from gitcrawl:

- total members: 11
- issues: 9
- pull requests: 2
- open candidates in local store: 7
- excluded existing-overlap refs: #88372, #90328, #90500
- representative: #84032, currently open in local store
- latest member update: 2026-06-15T11:49:41.511817Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #91552 Codex app-server binding sidecar can retain stale GPT model across provider switches, causing embedded runs to dispatch zai/gpt-5.5

Open candidates:

- #8190 Feature: Global session reset on auth switch
- #84032 Model picker should distinguish GPT provider/auth route from agent runtime
- #84637 [Bug]: Codex runtime/harness is too easy to confuse with gpt-*-codex model fallbacks
- #90036 Session model route drifts from openai/gpt-5.5 to openai-codex/gpt-5.5 with native Codex runtime
- #90420 Codex runtime route is hard to verify after the 2026.6.1 openai-codex migration
- #90462 Fallback provider can become pinned in session metadata and trap a chat on unavailable LM Studio model
- #90471 [Bug]: Deleted provider session overrides persist in sessions.json — silent financial damage risk

Existing-overlap context refs:

- #88372 Windows provider switch leaves stale model/provider config and session cache
- #90328 [security-signal] Expose model picker agent runtimes
- #90500 [security-signal] Fix stale session routes for removed providers
