---
repo: openclaw/openclaw
cluster_id: gitcrawl-185-plan-wave-20260615-a
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
  - "#87799"
candidates:
  - "#73814"
  - "#87799"
  - "#90008"
cluster_refs:
  - "#73814"
  - "#87799"
  - "#90008"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #87799 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 185 on 2026-06-15."
---

# Gitcrawl Cluster 185

Generated from local gitcrawl run cluster 185 for `openclaw/openclaw`.

Display title:

> fix(install): harden stdin consumers to prevent pipe corruption in curl | bash

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #87799, currently open in local store
- latest member update: 2026-06-14T04:46:05.593797Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #73814 [Bug]: Installer hangs and truncates function "warn_shell_path_missing_di" in install.sh presumably due to stdin consumption from "curl | bash"
- #87799 fix(install): harden stdin consumers to prevent pipe corruption in curl | bash
- #90008 Installer pipe corruption: gum spin child inherits piped script stdin
