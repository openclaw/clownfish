---
repo: openclaw/openclaw
cluster_id: gitcrawl-1306-intake-20260621b
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
  - "#88253"
candidates:
  - "#88253"
cluster_refs:
  - "#88253"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#93224"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #88253 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1306 on 2026-06-21. Existing-overlap refs #93224 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1306

Generated from local gitcrawl run cluster 1306 for `openclaw/openclaw`.

Display title:

> Sandboxed agents can't reply to channel DMs — message tool excluded from default sandbox allowlist; plain-text reply routes to internal webchat

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #93224
- representative: #88253, currently open in local store
- latest member update: 2026-06-19T02:13:01.013565Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #88253 Sandboxed agents can't reply to channel DMs — message tool excluded from default sandbox allowlist; plain-text reply routes to internal webchat

Existing-overlap context refs:

- #93224 [security-signal] [codex] Allow message tool in default sandbox allowlist
