---
repo: openclaw/openclaw
cluster_id: gitcrawl-1141-intake-20260619
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
  - "#94434"
candidates:
  - "#94434"
cluster_refs:
  - "#94434"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94441"
  - "#94447"
  - "#94449"
  - "#94450"
  - "#94462"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94434 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1141 on 2026-06-19. Existing-overlap refs #94441, #94447, #94449, #94450, #94462 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1141

Generated from local gitcrawl run cluster 1141 for `openclaw/openclaw`.

Display title:

> [Bug]: exec workdir with leading ~ falls back and still executes command

Cluster shape from gitcrawl:

- total members: 6
- issues: 1
- pull requests: 5
- open candidates in local store: 1
- excluded existing-overlap refs: #94441, #94447, #94449, #94450, #94462
- representative: #94434, currently open in local store
- latest member update: 2026-06-18T16:17:06.837787Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94434 [Bug]: exec workdir with leading ~ falls back and still executes command

Existing-overlap context refs:

- #94441 fix(exec): fail invalid explicit workdir before running
- #94447 [security-signal] fix: exec workdir with leading ~ falls back and still executes command
- #94449 [security-signal] fix(exec): expand leading ~ in workdir to home directory
- #94450 [security-signal] fix(agents): expand leading tilde in exec workdir
- #94462 fix: expand leading tilde in exec workdir paths
