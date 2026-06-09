---
repo: openclaw/openclaw
cluster_id: gitcrawl-238784-dedupe-only-20260429
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
  - "#58496"
candidates:
  - "#57812"
  - "#57906"
  - "#57961"
  - "#58045"
  - "#58069"
  - "#58213"
  - "#58232"
  - "#58288"
  - "#58303"
  - "#58308"
  - "#58392"
  - "#58442"
  - "#58496"
  - "#58510"
  - "#58531"
  - "#58532"
  - "#58556"
  - "#58578"
  - "#58600"
  - "#59064"
  - "#59213"
  - "#59252"
  - "#59303"
  - "#59861"
  - "#59928"
  - "#65676"
  - "#66951"
  - "#67260"
cluster_refs:
  - "#57812"
  - "#57906"
  - "#57961"
  - "#58045"
  - "#58069"
  - "#58213"
  - "#58232"
  - "#58288"
  - "#58303"
  - "#58308"
  - "#58392"
  - "#58442"
  - "#58496"
  - "#58510"
  - "#58531"
  - "#58532"
  - "#58556"
  - "#58578"
  - "#58600"
  - "#59064"
  - "#59213"
  - "#59252"
  - "#59303"
  - "#59861"
  - "#59928"
  - "#65676"
  - "#66951"
  - "#67260"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #58496 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 238784 on 2026-04-29."
---

# Gitcrawl Cluster 238784

Generated from local gitcrawl run cluster 238784 for `openclaw/openclaw`.

Display title:

> [Critical Bug] Session Model Override Prevents Fallback Mechanism

Cluster shape from gitcrawl:

- total members: 28
- issues: 28
- pull requests: 0
- open candidates in local store: 28
- representative: #58496, currently open in local store
- latest member update: 2026-04-24T18:56:26.055Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57812 LiveSessionModelSwitchError overrides model failover, creating infinite retry loop
- #57906 Model fallback retries primary too aggressively before moving to next fallback
- #57961 [Bug]: Live session model switch detector blocks programmatic fallback during rate limits
- #58045 LiveSessionModelSwitchError prevents cross-provider model fallback
- #58069 [Bug]: Live session model switch overrides active fallback during rate-limit cooldown, creating infinite retry loop
- #58213 Bug: Session model preference overrides failover, causing infinite retry loop
- #58232 Bug: session level model override does not trigger fallback models on rate limit
- #58288 Fallback model fails mid-session with 'Live session model switch requested' after overloaded_error
- #58303 LiveSessionModelSwitch silently hijacks fallback in live sessions, creating infinite retry loop
- #58308 Fallback mechanism incorrectly requests primary model switch instead of using fallback model
- #58392 Model fallback fails when session has modelOverride: LiveSessionModelSwitchError not recognized as failover error
- #58442 [Bug]: Model failover fails to trigger on Coding Plan quota exceeded (429) errors, causing infinite message processing loops
- #58496 [Critical Bug] Session Model Override Prevents Fallback Mechanism
- #58510 resolvePersistedLiveSelection() overrides emergency failover decisions, causing infinite overload retry loops
- #58531 resolvePersistedLiveSelection() overrides emergency failover decisions, causing infinite overload retry loops
- #58532 resolvePersistedLiveSelection() overrides emergency failover decisions, causing infinite overload retry loops
- #58556 Live model switch check prevents model fallback from working
- #58578 [bug] Fallback chain aborted by premature primary restore when cooldown expires mid-flight
- #58600 LiveSessionModelSwitchError blocks fallback-driven cross-provider model changes
- #59064 Bug: Silent failure and fallback override when OpenAI usage limit (429) is hit
- #59213 Fallback model selection overridden by session model reconciliation — causes infinite 429 loop
- #59252 v2026.3.28: Rate-limited primary model causes LiveSessionModelSwitchError cascade, fallbacks never used
- #59303 Model fallback not triggered on 429 rate_limit_error — retries same provider indefinitely
- #59861 Provider quota/rate-limit errors should trigger model fallback chain, not crash the session
- #59928 [Bug]: Primary model not respected after fallback in OpenClaw 2026.4.2
- #65676 [Bug]: Model fallback never actually executes — live session model switch overrides fallback selection in a loop
- #66951 Bug: Main agent falls back to 3rd-priority model (claude-sonnet) instead of 2nd (gpt-5.4-mini) on Ollama init failure
- #67260 [Bug]: Native Ollama primary falls back in long-lived Telegram session while fresh runs succeed
