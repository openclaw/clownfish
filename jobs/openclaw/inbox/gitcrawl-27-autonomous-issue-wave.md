---
repo: openclaw/openclaw
cluster_id: gitcrawl-27-autonomous-issue-wave
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
  - "#72015"
  - "#72359"
  - "#75930"
  - "#78500"
  - "#86996"
  - "#88077"
  - "#90466"
  - "#92013"
cluster_refs:
  - "#72015"
  - "#72359"
  - "#75930"
  - "#76333"
  - "#77723"
  - "#78500"
  - "#81465"
  - "#86996"
  - "#88077"
  - "#90454"
  - "#90466"
  - "#92013"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#77831"
  - "#78130"
  - "#87182"
  - "#87206"
  - "#87306"
  - "#88078"
  - "#90739"
  - "#90781"
  - "#90827"
  - "#92099"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #87182 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 27 on 2026-06-15. Existing-overlap refs #77831, #78130, #87182, #87206, #87306, #88078, #90739, #90781, #90827, #92099 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 27

Generated from local gitcrawl run cluster 27 for `openclaw/openclaw`.

Display title:

> [Bug] memory-core dreaming: stable narrative session is archived by post-completion cleanup before host plugin can call getSessionMessages → narrative text lost

Cluster shape from gitcrawl:

- total members: 22
- issues: 16
- pull requests: 6
- open candidates in local store: 8
- excluded existing-overlap refs: #77831, #78130, #87182, #87206, #87306, #88078, #90739, #90781, #90827, #92099
- representative: #87182, currently open in local store
- latest member update: 2026-06-15T11:49:41.490519Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #76333 Dreaming narrative phases reliably timeout — `NARRATIVE_TIMEOUT_MS` (60s) too small for current embedded-agent prep cost
- #77723 Bug: memory-core Dreaming cleanup still leaves narrative session trajectory residue on 2026.5.3-1
- #81465 Dreaming narrative generation always falls back; DREAMS.md never gets real entries
- #90454 active-memory plugin discards verbose sub-agent responses as status=unavailable, surface_error reason=none

Open candidates:

- #72015 Reliability: active-memory blocks replies and QMD boot initialization can overload multi-agent gateways
- #72359 Active Memory: add single-shot mode (no embedded agent loop) for low-latency preflight injection
- #75930 Dreaming narrative generation fails for all but 1 agent due to concurrent fire-and-forget API calls
- #78500 [Bug]: active-memory eligibility gate accepts dreaming-narrative session keys, busts 45s lane budget on cron
- #86996 Active Memory + Codex app-server path causes long response latency, hook timeouts, startup aborts, and gateway event-loop stalls
- #88077 [Bug]: Active Memory recall context uses full OpenClaw prompt envelope
- #90466 [Bug]:memory-core dreaming on 2026.6.1: session-corpus contains .jsonl.deleted.* paths; narrative phase writes fallback despite valid prose responses
- #92013 Active Memory `queryMode: "message"` can receive full assembled request envelopes; needs latest-message cap or slim-intent field

Existing-overlap context refs:

- #77831 [Bug]: memory-core dreaming pollutes MEMORY.md and vector store with session-corpus data
- #78130 fix(memory-core): exclude session-corpus files from short-term promotion (#77831)
- #87182 [Bug] memory-core dreaming: stable narrative session is archived by post-completion cleanup before host plugin can call getSessionMessages → narrative text lost
- #87206 [security-signal] fix(memory-core): recover narrative text from trajectory when session archived early (#87182)
- #87306 memory-core: `narrative generation produced no text` warnings fire even when assistant messages contain extractable text
- #88078 [security-signal] fix(active-memory): trim recall prompt envelope
- #90739 [security-signal] fix(active-memory): preserve verbose recall summaries
- #90781 [Bug]: memory-core narrative generation silently produces no text and writes fallback diary entries (light/rem/deep phases)
- #90827 fix(memory-core): surface empty narrative generation instead of silent fallback (#90781)
- #92099 [security-signal] feat(active-memory): add messageMaxChars config to cap latest user message in message mode
