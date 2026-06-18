---
repo: openclaw/openclaw
cluster_id: gitcrawl-290-fresh-plan-20260618t161946z
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
canonical: []
candidates:
  - "#77574"
cluster_refs:
  - "#77574"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#75754"
  - "#77344"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #77344 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 290 on 2026-06-18. Existing-overlap refs #75754, #77344 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 290

Generated from local gitcrawl run cluster 290 for `openclaw/openclaw`.

Display title:

> [Bug]: Clawdock dashboard ignores Docker published gateway port

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #75754, #77344
- representative: #77344, currently open in local store
- latest member update: 2026-06-18T16:17:08.422481Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77574 [Bug]: clawdock-dashboard switches the running gateway image

Existing-overlap context refs:

- #75754 [security-signal] fix(clawdock): open dashboard via clawdock-dashboard on published port instead of hardcoded default port
- #77344 [Bug]: Clawdock dashboard ignores Docker published gateway port
