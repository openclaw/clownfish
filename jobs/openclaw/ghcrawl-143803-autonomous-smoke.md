---
repo: openclaw/openclaw
cluster_id: ghcrawl-143803-autonomous-smoke
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
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#57812"
candidates:
  - "#44935"
  - "#57471"
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
  - "#58496"
  - "#58510"
  - "#58531"
  - "#58532"
  - "#58556"
  - "#58578"
  - "#58600"
  - "#59213"
  - "#59252"
  - "#59303"
  - "#59861"
  - "#59928"
  - "#65676"
  - "#66530"
  - "#66951"
cluster_refs:
  - "#44935"
  - "#57471"
  - "#57812"
  - "#57906"
  - "#57961"
  - "#58045"
  - "#58069"
  - "#58213"
  - "#58232"
  - "#58258"
  - "#58288"
  - "#58303"
  - "#58308"
  - "#58392"
  - "#58496"
  - "#58510"
  - "#58531"
  - "#58532"
  - "#58556"
  - "#58578"
  - "#58600"
  - "#59213"
  - "#59252"
  - "#59303"
  - "#59861"
  - "#59928"
  - "#64083"
  - "#65234"
  - "#65676"
  - "#66530"
  - "#66951"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #57812 is open; worker must verify it is still the best live canonical."
notes: "Generated from ghcrawl run cluster 143803 on 2026-04-25."
---

# GHCrawl Cluster 143803

Generated from local ghcrawl run cluster 143803 for `openclaw/openclaw`.

Display title:

> LiveSessionModelSwitchError overrides model failover, creating infinite retry loop

Cluster shape from ghcrawl:

- total members: 31
- issues: 31
- pull requests: 0
- open candidates in local store: 28
- representative: #57812, currently open in local store
- latest member update: 2026-04-25T17:13:17.875Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #58258 Live model switch creates duplicate messages during cross-provider failover loop
- #64083 Fallback model sticks for entire session — no auto-recovery to primary
- #65234 Fallback models not attempted when session started on a different primary model (live session model switch skipped)

Open candidates:

- #44935 [Feature]: Auto-recover to primary model after fallback — with health probe, not blind switchback
- #57471 runWithModelFallback() treats LiveSessionModelSwitchError as candidate_failed, causing unnecessary fallback chain
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
- #58496 [Critical Bug] Session Model Override Prevents Fallback Mechanism
- #58510 resolvePersistedLiveSelection() overrides emergency failover decisions, causing infinite overload retry loops
- #58531 resolvePersistedLiveSelection() overrides emergency failover decisions, causing infinite overload retry loops
- #58532 resolvePersistedLiveSelection() overrides emergency failover decisions, causing infinite overload retry loops
- #58556 Live model switch check prevents model fallback from working
- #58578 [bug] Fallback chain aborted by premature primary restore when cooldown expires mid-flight
- #58600 LiveSessionModelSwitchError blocks fallback-driven cross-provider model changes
- #59213 Fallback model selection overridden by session model reconciliation — causes infinite 429 loop
- #59252 v2026.3.28: Rate-limited primary model causes LiveSessionModelSwitchError cascade, fallbacks never used
- #59303 Model fallback not triggered on 429 rate_limit_error — retries same provider indefinitely
- #59861 Provider quota/rate-limit errors should trigger model fallback chain, not crash the session
- #59928 [Bug]: Primary model not respected after fallback in OpenClaw 2026.4.2
- #65676 [Bug]: Model fallback never actually executes — live session model switch overrides fallback selection in a loop
- #66530 [Feature]: Primary model should be probed for recovery after fallback due to timeout
- #66951 Bug: Main agent falls back to 3rd-priority model (claude-sonnet) instead of 2nd (gpt-5.4-mini) on Ollama init failure
