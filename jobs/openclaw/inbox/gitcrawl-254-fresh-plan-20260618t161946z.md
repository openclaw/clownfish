---
repo: openclaw/openclaw
cluster_id: gitcrawl-254-fresh-plan-20260618t161946z
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
  - "#90548"
candidates:
  - "#75767"
  - "#90548"
cluster_refs:
  - "#75767"
  - "#90548"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#90622"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #90548 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 254 on 2026-06-18. Existing-overlap refs #90622 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 254

Generated from local gitcrawl run cluster 254 for `openclaw/openclaw`.

Display title:

> macOS: per-port lsof port-health polling can saturate launchservicesd and trigger a WindowServer watchdog reboot

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #90622
- representative: #90548, currently open in local store
- latest member update: 2026-06-18T16:17:07.75698Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #75767 openclaw gateway restart hangs on macOS with SMB-mounted volumes (lsof stat() timeout)
- #90548 macOS: per-port lsof port-health polling can saturate launchservicesd and trigger a WindowServer watchdog reboot

Existing-overlap context refs:

- #90622 [security-signal] fix(ports): batch macOS lsof listener inspection to one spawn per cycle
