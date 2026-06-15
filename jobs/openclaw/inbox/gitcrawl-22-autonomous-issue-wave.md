---
repo: openclaw/openclaw
cluster_id: gitcrawl-22-autonomous-issue-wave
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
  - "#46252"
cluster_refs:
  - "#46252"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#75030"
  - "#76690"
  - "#81777"
  - "#81865"
  - "#83383"
  - "#83639"
  - "#83665"
  - "#86556"
  - "#87168"
  - "#87872"
  - "#88906"
  - "#89133"
  - "#89491"
  - "#90074"
  - "#90356"
  - "#91055"
  - "#91099"
  - "#91240"
  - "#91767"
  - "#92227"
  - "#92506"
  - "#92520"
  - "#92610"
  - "#92824"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #92520 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 22 on 2026-06-15. Existing-overlap refs #75030, #76690, #81777, #81865, #83383, #83639, #83665, #86556, #87168, #87872, #88906, #89133, #89491, #90074, #90356, #91055, #91099, #91240, #91767, #92227, #92506, #92520, #92610, #92824 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 22

Generated from local gitcrawl run cluster 22 for `openclaw/openclaw`.

Display title:

> Fix Codex synthetic usage in status without local OpenAI profiles

Cluster shape from gitcrawl:

- total members: 25
- issues: 7
- pull requests: 18
- open candidates in local store: 1
- excluded existing-overlap refs: #75030, #76690, #81777, #81865, #83383, #83639, #83665, #86556, #87168, #87872, #88906, #89133, #89491, #90074, #90356, #91055, #91099, #91240, #91767, #92227, #92506, #92520, #92610, #92824
- representative: #92520, currently open in local store
- latest member update: 2026-06-15T11:49:41.523416Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46252 Cost dashboard omits .jsonl.reset.<timestamp> archive files, severely undercounting daily spend for users of /new

Existing-overlap context refs:

- #75030 [security-signal] fix(auth): explain masked oauth profiles
- #76690 openai/gpt-image-2 via Codex OAuth fails: image_generation tool not found
- #81777 [codex] support session-isolated app-server clients
- #81865 [security-signal] [Bug]: OpenAI Codex OAuth can fail JSON parsing on compressed-looking response and hang after success
- #83383 fix(auth): clean refresh contention diagnostics
- #83639 fix(codex): harden app-server timeout recovery
- #83665 [security-signal] fix(codex): unwrap app-server auth token wrappers
- #86556 fix(codex): retire MCP app-server helpers
- #87168 Codex-authenticated installs can auto-select direct OpenAI for image media understanding without OPENAI_API_KEY
- #87872 Fix Codex zero-cost usage accounting
- #88906 fix(openai): allow Codex Spark via harness
- #89133 Restore GPT-5.3 Codex Spark OAuth routing
- #89491 [security-signal] fix(openai): harden Codex OAuth callback cleanup
- #90074 [security-signal] OpenAI image generation uses direct API-key route instead of Codex OAuth when explicit provider config exists
- #90356 [security-signal] fix(status): use legacy Codex OAuth profiles for OpenAI usage
- #91055 [security-signal] fix(codex): compact group context without losing mission
- #91099 Status line reports `api-key (env: OPENAI_API_KEY)` even when codex runtime is authenticated via ChatGPT
- #91240 fix: report Codex ChatGPT status auth
- #91767 Fix one-shot Codex app-server teardown
- #92227 fix(codex): avoid refreshing valid app-server OAuth
- #92506 [Bug]: /status usage missing for OpenAI Codex synthetic auth after 2026.6.6
- #92520 [security-signal] Fix Codex synthetic usage in status without local OpenAI profiles
- #92610 [security-signal] fix: include archived transcript lineage in session usage detail
- #92824 fix(media): route OAuth image defaults through Codex
