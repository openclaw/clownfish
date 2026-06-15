---
repo: openclaw/openclaw
cluster_id: gitcrawl-743-plan-wave-20260615-b
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
  - "#74382"
candidates:
  - "#74382"
  - "#74891"
cluster_refs:
  - "#74382"
  - "#74891"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #74382 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 743 on 2026-06-15."
---

# Gitcrawl Cluster 743

Generated from local gitcrawl run cluster 743 for `openclaw/openclaw`.

Display title:

> [Bug]: Asks for OpenAI Whisper/ElevenLabs API key even though initial list says KEY not needed

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #74382, currently open in local store
- latest member update: 2026-06-14T04:46:06.024345Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74382 [Bug]: Asks for OpenAI Whisper/ElevenLabs API key even though initial list says KEY not needed
- #74891 fix(onboard): skip API-key prompt when user skipped installing the skill (#74382)
