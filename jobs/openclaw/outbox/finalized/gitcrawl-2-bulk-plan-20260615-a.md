---
repo: openclaw/openclaw
cluster_id: gitcrawl-2-bulk-plan-20260615-a
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
  - "#91499"
candidates:
  - "#38570"
  - "#60841"
  - "#74807"
  - "#76490"
  - "#77801"
  - "#78664"
  - "#81514"
  - "#81585"
  - "#83094"
  - "#84156"
  - "#84709"
  - "#84895"
  - "#85073"
  - "#85394"
  - "#87426"
  - "#87695"
  - "#87888"
  - "#88142"
  - "#88491"
  - "#88533"
  - "#88649"
  - "#88876"
  - "#88878"
  - "#88880"
  - "#88961"
  - "#89333"
  - "#89504"
  - "#91271"
  - "#91499"
  - "#91542"
  - "#91559"
  - "#91714"
  - "#92257"
  - "#92283"
  - "#92521"
  - "#92535"
  - "#92545"
  - "#92603"
cluster_refs:
  - "#38570"
  - "#60841"
  - "#74807"
  - "#76490"
  - "#77801"
  - "#78664"
  - "#81514"
  - "#81585"
  - "#83094"
  - "#84156"
  - "#84709"
  - "#84895"
  - "#85073"
  - "#85394"
  - "#87426"
  - "#87695"
  - "#87888"
  - "#88142"
  - "#88491"
  - "#88533"
  - "#88649"
  - "#88876"
  - "#88878"
  - "#88880"
  - "#88961"
  - "#89333"
  - "#89504"
  - "#91271"
  - "#91499"
  - "#91542"
  - "#91559"
  - "#91714"
  - "#92257"
  - "#92283"
  - "#92521"
  - "#92535"
  - "#92545"
  - "#92603"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#60842"
  - "#61735"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#83094"
  - "#84156"
  - "#84709"
  - "#85073"
  - "#85394"
  - "#88491"
  - "#89504"
  - "#91499"
  - "#92283"
  - "#92521"
  - "#92535"
  - "#92545"
  - "#92603"
canonical_hint: "gitcrawl representative #91499 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 2 on 2026-06-15. Security-signal refs #83094, #84156, #84709, #85073, #85394, #88491, #89504, #91499, #92283, #92521, #92535, #92545, #92603 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #60842, #61735 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 2

Generated from local gitcrawl run cluster 2 for `openclaw/openclaw`.

Display title:

> fix(cron): preserve scheduled turn tool policy [AI]

Cluster shape from gitcrawl:

- total members: 40
- issues: 9
- pull requests: 31
- open candidates in local store: 38
- excluded existing-overlap refs: #60842, #61735
- security-signal refs requiring route_security: #83094, #84156, #84709, #85073, #85394, #88491, #89504, #91499, #92283, #92521, #92535, #92545, #92603
- representative: #91499, currently open in local store
- latest member update: 2026-06-14T04:46:07.215666Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #38570 Inter-agent sessions_send: sender attributed as wrong agent (missing identity name)
- #60841 [Bug]: toolsAllow cannot re-expose core tools in embedded cron runs
- #74807 [Bug] Cron task summary ignores agent self-correction - picks tool error over final assistant reply
- #76490 fix(agents): route sessions_send A2A announce replies back to request…
- #77801 Tool policy pipeline falsely warns about plugin tools in alsoAllow
- #78664 perf(agents): cache provider tool schema normalization
- #81514 bug(cron): isolated-job status is non-deterministic when an agent recovers from a tool error
- #81585 fix(cron): make recovered tool errors order agnostic
- #83094 [security-signal] feat(agents): add sessions_send handoff acknowledgements
- #84156 [security-signal] fix(cron): respect recovered tool errors
- #84709 [security-signal] fix(cron): fail closed when required tools are unavailable
- #84895 Forward cron toolsAllow to CLI runs
- #85073 [security-signal] fix(cron): authorize isolated tool allowlist runs
- #85394 [security-signal] refactor(cron-tool): decompose into per-action tools (WOR-317)
- #87426 Cron delivery: synthesized "(agent) failed" summary paraphrases bash into garbled "step list"
- #87695 fix(types): unblock changed gate checks
- #87888 fix(agents): skip tool prep when models disable tools
- #88142 perf(agents): skip tool prep for toolless models
- #88491 [security-signal] test(agents): use neutral tool schema fixtures
- #88533 test(core): align changed gate type fixtures
- #88649 test(agents): use neutral tool schema fixtures
- #88876 fix(ci): restore cron schema snapshots
- #88878 fix(agents): project cron tool schemas for providers
- #88880 fix(agents): project nullable tool schemas for providers
- #88961 fix(agents): suppress enabled plugin tool allowlist warnings
- #89333 fix(tools): guard planner descriptor reads
- #89504 [security-signal] fix(agents): snapshot tool inventory display fields
- #91271 fix(agents): include requester identity in sessions_send context (Fixes #38570)
- #91499 [security-signal] fix(cron): preserve scheduled turn tool policy [AI]
- #91542 [Bug] Gemini (jjcc/openai-compat) rejects cron tool schema: anyOf properties missing type field in v2026.6.1
- #91559 fix(agents): clean Gemini tool schemas by model id
- #91714 fix(agents): apply Gemini schema cleaning for Gemini models via OpenAI-compat providers
- #92257 [Bug]: sessions_send with announce delivery injects Argus reply context into isolated cron session, causing agent feedback loop
- #92283 [security-signal] fix(agents): don't inject A2A turns into isolated-cron sessions_send (#92257)
- #92521 [security-signal] fix(agents): preserve runtime tool inheritance tokens
- #92535 [security-signal] [Bug]: isolated cron can deliver unavailable-tool self-debug to Telegram
- #92545 [security-signal] fix(cron): fail closed on repeated unavailable-tool self-debug (#92535) [AI-assisted]
- #92603 [security-signal] fix(cron): summarize shell failures directly

Existing-overlap context refs:

- #60842 [security-signal] fix(agents): re-expose toolsAllow core tools in embedded runs
- #61735 fix: apply Gemini schema cleaning when modelId indicates Gemini behind proxy
