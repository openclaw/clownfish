---
repo: openclaw/openclaw
cluster_id: gitcrawl-5197-autonomous-drip
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
  - "#42630"
candidates:
  - "#63531"
cluster_refs:
  - "#42630"
  - "#63531"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #42630 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 5197 on 2026-07-06."
---

# Gitcrawl Cluster 5197

Generated from local gitcrawl run cluster 5197 for `openclaw/openclaw`.

Display title:

> Talk Mode: Support on-device TTS (iOS AVSpeechSynthesizer) as alternative to ElevenLabs

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 1
- representative: #42630, currently closed in local store
- latest member update: 2026-06-16T23:06:11.149585276Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #42630 Talk Mode: Support on-device TTS (iOS AVSpeechSynthesizer) as alternative to ElevenLabs

Open candidates:

- #63531 [Feature]: Add MLX Talk provider MVP for local macOS TTS
