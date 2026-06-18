---
repo: openclaw/openclaw
cluster_id: gitcrawl-185-fresh-plan-20260618t161946z
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
  - "#90008"
cluster_refs:
  - "#90008"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#73814"
  - "#87799"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #87799 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 185 on 2026-06-18. Existing-overlap refs #73814, #87799 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 185

Generated from local gitcrawl run cluster 185 for `openclaw/openclaw`.

Display title:

> fix(install): harden stdin consumers to prevent pipe corruption in curl | bash

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #73814, #87799
- representative: #87799, currently open in local store
- latest member update: 2026-06-18T16:17:07.805652Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90008 Installer pipe corruption: gum spin child inherits piped script stdin

Existing-overlap context refs:

- #73814 [Bug]: Installer hangs and truncates function "warn_shell_path_missing_di" in install.sh presumably due to stdin consumption from "curl | bash"
- #87799 fix(install): harden stdin consumers to prevent pipe corruption in curl | bash
