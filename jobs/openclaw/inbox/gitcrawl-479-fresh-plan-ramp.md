---
repo: openclaw/openclaw
cluster_id: gitcrawl-479-fresh-plan-ramp
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
  - "#92183"
candidates:
  - "#92183"
cluster_refs:
  - "#92183"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#92660"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #92183 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 479 on 2026-06-17. Existing-overlap refs #92660 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 479

Generated from local gitcrawl run cluster 479 for `openclaw/openclaw`.

Display title:

> [Bug]: plugins update --dryrun reports "up to date" while npm dist-tags.latest is newer

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #92660
- representative: #92183, currently open in local store
- latest member update: 2026-06-15T19:04:11.016988Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92183 [Bug]: plugins update --dryrun reports "up to date" while npm dist-tags.latest is newer

Existing-overlap context refs:

- #92660 [security-signal] fix(plugins): strip exact-version pin from install spec during dry-run update check (#92183)
