---
repo: openclaw/openclaw
cluster_id: gitcrawl-103-bulk-plan-20260615-a
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
  - "#86174"
candidates:
  - "#77440"
  - "#77690"
  - "#83565"
  - "#86174"
cluster_refs:
  - "#77440"
  - "#77690"
  - "#83565"
  - "#86174"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#51251"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #86174 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 103 on 2026-06-15. Existing-overlap refs #51251 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 103

Generated from local gitcrawl run cluster 103 for `openclaw/openclaw`.

Display title:

> [Bug]: WebChat + New Session displays default model but inherits parent's model override

Cluster shape from gitcrawl:

- total members: 5
- issues: 4
- pull requests: 1
- open candidates in local store: 4
- excluded existing-overlap refs: #51251
- representative: #86174, currently open in local store
- latest member update: 2026-06-14T04:46:07.386104Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77440 [Bug]: WebChat model selector shows global default instead of agent-specific default model
- #77690 [codex] Fix WebChat agent default model label
- #83565 Add per-turn (one-shot) model override to sessions.patch and chat-send payload
- #86174 [Bug]: WebChat + New Session displays default model but inherits parent's model override

Existing-overlap context refs:

- #51251 Session modelOverride persists across gateway restarts, silently overrides config default
