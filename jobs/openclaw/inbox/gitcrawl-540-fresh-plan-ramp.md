---
repo: openclaw/openclaw
cluster_id: gitcrawl-540-fresh-plan-ramp
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
  - "#91677"
candidates:
  - "#91677"
cluster_refs:
  - "#91677"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92340"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #91677 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 540 on 2026-06-17. Existing-overlap refs #92340 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 540

Generated from local gitcrawl run cluster 540 for `openclaw/openclaw`.

Display title:

> Support Feishu VC bot invite events for automatic meeting join

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #92340
- representative: #91677, currently open in local store
- latest member update: 2026-06-15T19:04:11.869592Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91677 Support Feishu VC bot invite events for automatic meeting join

Existing-overlap context refs:

- #92340 [security-signal] feat(feishu): handle VC meeting invites
