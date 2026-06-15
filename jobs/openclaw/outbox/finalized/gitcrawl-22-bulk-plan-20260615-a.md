---
repo: openclaw/openclaw
cluster_id: gitcrawl-22-bulk-plan-20260615-a
mode: plan
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
  - "#92520"
candidates:
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
cluster_refs:
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
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#46252"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#75030"
  - "#81865"
  - "#83665"
  - "#89491"
  - "#90074"
  - "#90356"
  - "#91055"
  - "#91767"
  - "#92520"
  - "#92610"
canonical_hint: "gitcrawl representative #92520 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 22 on 2026-06-15. Security-signal refs #75030, #81865, #83665, #89491, #90074, #90356, #91055, #91767, #92520, #92610 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #46252 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 22

Generated from local gitcrawl run cluster 22 for `openclaw/openclaw`.

Display title:

> Fix Codex synthetic usage in status without local OpenAI profiles

Cluster shape from gitcrawl:

- total members: 25
- issues: 7
- pull requests: 18
- open candidates in local store: 24
- excluded existing-overlap refs: #46252
- security-signal refs requiring route_security: #75030, #81865, #83665, #89491, #90074, #90356, #91055, #91767, #92520, #92610
- representative: #92520, currently open in local store
- latest member update: 2026-06-14T04:46:07.390566Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

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
- #91767 [security-signal] Fix one-shot Codex app-server teardown
- #92227 fix(codex): avoid refreshing valid app-server OAuth
- #92506 [Bug]: /status usage missing for OpenAI Codex synthetic auth after 2026.6.6
- #92520 [security-signal] Fix Codex synthetic usage in status without local OpenAI profiles
- #92610 [security-signal] fix: include archived transcript lineage in session usage detail
- #92824 [codex] Fix OpenAI OAuth media routing

Existing-overlap context refs:

- #46252 Cost dashboard omits .jsonl.reset.<timestamp> archive files, severely undercounting daily spend for users of /new
