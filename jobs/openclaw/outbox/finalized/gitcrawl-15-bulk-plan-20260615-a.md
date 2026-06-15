---
repo: openclaw/openclaw
cluster_id: gitcrawl-15-bulk-plan-20260615-a
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
  - "#83940"
candidates:
  - "#54948"
  - "#54982"
  - "#54985"
  - "#55542"
  - "#59285"
  - "#59360"
  - "#61961"
  - "#63375"
  - "#67610"
  - "#69562"
  - "#72449"
  - "#72454"
  - "#74081"
  - "#74791"
  - "#74794"
  - "#78342"
  - "#78343"
  - "#78827"
  - "#80125"
  - "#83689"
  - "#83940"
  - "#84122"
  - "#84123"
  - "#84962"
  - "#85034"
  - "#85261"
  - "#85335"
  - "#85467"
  - "#87300"
  - "#89680"
  - "#89687"
  - "#90879"
  - "#91069"
  - "#91407"
  - "#92128"
  - "#92542"
cluster_refs:
  - "#54948"
  - "#54982"
  - "#54985"
  - "#55542"
  - "#59285"
  - "#59360"
  - "#61961"
  - "#63375"
  - "#67610"
  - "#69562"
  - "#72449"
  - "#72454"
  - "#74081"
  - "#74791"
  - "#74794"
  - "#78342"
  - "#78343"
  - "#78827"
  - "#80125"
  - "#83689"
  - "#83940"
  - "#84122"
  - "#84123"
  - "#84962"
  - "#85034"
  - "#85261"
  - "#85335"
  - "#85467"
  - "#87300"
  - "#89680"
  - "#89687"
  - "#90879"
  - "#91069"
  - "#91407"
  - "#92128"
  - "#92542"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#67623"
  - "#68060"
  - "#68565"
  - "#69491"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#54948"
  - "#54982"
  - "#54985"
  - "#55542"
  - "#59285"
  - "#61961"
  - "#63375"
  - "#69562"
  - "#72449"
  - "#72454"
  - "#74081"
  - "#74791"
  - "#74794"
  - "#78342"
  - "#78343"
  - "#78827"
  - "#80125"
  - "#83689"
  - "#83940"
  - "#84122"
  - "#84123"
  - "#84962"
  - "#85034"
  - "#85261"
  - "#85335"
  - "#85467"
  - "#87300"
  - "#89680"
  - "#89687"
  - "#90879"
  - "#91069"
  - "#91407"
  - "#92128"
  - "#92542"
canonical_hint: "gitcrawl representative #83940 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 15 on 2026-06-15. Security-signal refs #54948, #54982, #54985, #55542, #59285, #61961, #63375, #69562, #72449, #72454, #74081, #74791, #74794, #78342, #78343, #78827, #80125, #83689, #83940, #84122, #84123, #84962, #85034, #85261, #85335, #85467, #87300, #89680, #89687, #90879, #91069, #91407, #92128, #92542 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #67623, #68060, #68565, #69491 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 15

Generated from local gitcrawl run cluster 15 for `openclaw/openclaw`.

Display title:

> Feat/cron consecutive skips tracking

Cluster shape from gitcrawl:

- total members: 40
- issues: 2
- pull requests: 38
- open candidates in local store: 36
- excluded existing-overlap refs: #67623, #68060, #68565, #69491
- security-signal refs requiring route_security: #54948, #54982, #54985, #55542, #59285, #61961, #63375, #69562, #72449, #72454, #74081, #74791, #74794, #78342, #78343, #78827, #80125, #83689, #83940, #84122, #84123, #84962, #85034, #85261, #85335, #85467, #87300, #89680, #89687, #90879, #91069, #91407, #92128, #92542
- representative: #83940, currently open in local store
- latest member update: 2026-06-14T04:46:07.373905Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #54948 [security-signal] fix(ui): strip ANSI codes in log panel and avoid spurious agent-index…
- #54982 [security-signal] feat: preserve intermediate streaming output in TUI
- #54985 [security-signal] feat(gateway): add LLM request context headers for AI gateway integra…
- #55542 [security-signal] chore: replace sharp with @napi-rs/image to simplify deps
- #59285 [security-signal] Clarify optional cleanup hints in gateway status output
- #59360 Feishu card message footer causes agent name to appear at message start (Markdown definition list parsing)
- #61961 [security-signal] feat(tools): add 'readonly' tool profile for non-mutating agent access
- #63375 [security-signal] docs: add logging best practices for plugin developers
- #67610 [Bug]: requireSandboxBackendFactory throw error after sandbox plugin registered in openclaw starting stage
- #69562 [security-signal] fix: validate cron announce account ids
- #72449 [security-signal] Fix/cron parse undefined
- #72454 [security-signal] Fix/minimax 529 overloaded failover
- #74081 [security-signal] feat(config): coerce ${VAR} to a string array when the env value is a…
- #74791 [security-signal] feat(pairing): allow OPENCLAW_PAIRING_PENDING_MAX and OPENCLAW_PAIRIN…
- #74794 [security-signal] fix(cron): infer delivery.to when only delivery.channel is set on ann…
- #78342 [security-signal] fix: scope agent admin gateway calls
- #78343 [security-signal] chore(openshell): drop local openshell dependency
- #78827 [security-signal] fix(agents): handle MiniMax prompt_cache_hit_tokens in normalizeUsage
- #80125 [security-signal] Fix/core bug audit
- #83689 [security-signal] fix(pi-embedded-runner): handle concatenated tool-call argument JSON
- #83940 [security-signal] Feat/cron consecutive skips tracking
- #84122 [security-signal] fix(feishu): use middle-dot separator in card note footer
- #84123 [security-signal] feat(google-vertex): support per-model location override
- #84962 [security-signal] Railway/fix control UI origin
- #85034 [security-signal] feat(commands): move /new to the top of native command menu
- #85261 [security-signal] fix(gateway): streaming double-finalization, replace-event accumulation, session-key 400, module cache retry, trusted-proxy case sensitivity
- #85335 [security-signal] feat(cron): add acpTurn for isolated ACP cron jobs
- #85467 [security-signal] fix(embedded-runner): wrap agent.processEvents in session write lock
- #87300 [security-signal] feat: group model select with collapsible panel in Control UI
- #89680 [security-signal] fix(feishu): redact audited content before send
- #89687 [security-signal] fix(feishu): scope queues by topic sessions
- #90879 [security-signal] Feature/jarvis rebranding voice enhancement
- #91069 [security-signal] Feat/mordiem document reader skill
- #91407 [security-signal] Feature/whatsapp group tool
- #92128 [security-signal] fix(feishu): prefer native thread id for topic sessions
- #92542 [security-signal] feat(sessions): auto-prune orphan store pointers during periodic main…

Existing-overlap context refs:

- #67623 [security-signal] fix: Change the scope of the variable SANDBOX_BACKEND_FACTORIES from …
- #68060 [security-signal] feat(memory-lancedb): add smart extraction with atomic fact decomposition
- #68565 [security-signal] fix(agents/anthropic-replay): preserve signed/redacted thinking block…
- #69491 [security-signal] feat(amazon-bedrock): forward default Anthropic betas through the bedrock-converse stream route
