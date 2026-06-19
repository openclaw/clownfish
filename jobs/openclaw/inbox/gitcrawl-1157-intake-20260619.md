---
repo: openclaw/openclaw
cluster_id: gitcrawl-1157-intake-20260619
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
  - "#94458"
cluster_refs:
  - "#94458"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#41152"
  - "#92185"
  - "#94477"
  - "#94567"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94567 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1157 on 2026-06-19. Existing-overlap refs #41152, #92185, #94477, #94567 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1157

Generated from local gitcrawl run cluster 1157 for `openclaw/openclaw`.

Display title:

> Preserve aborted sessions across restart opt-in

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #41152, #92185, #94477, #94567
- representative: #94567, currently open in local store
- latest member update: 2026-06-18T16:17:07.628275Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94458 lossless-claw bootstraps into quarantine after every Gateway restart due to new sessionId generating fresh JSONL file

Existing-overlap context refs:

- #41152 [security-signal] Async exec result delivery truncates output to ~400 chars and strips newlines
- #92185 [security-signal] fix(exec): preserve approved gateway output
- #94477 [security-signal] [AI] fix(session): add session.restartContinuation config to preserve sessionId across Gateway restart
- #94567 [security-signal] Preserve aborted sessions across restart opt-in
