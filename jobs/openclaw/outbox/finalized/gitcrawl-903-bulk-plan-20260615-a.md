---
repo: openclaw/openclaw
cluster_id: gitcrawl-903-bulk-plan-20260615-a
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
  - "#80446"
candidates:
  - "#80446"
  - "#83254"
cluster_refs:
  - "#80446"
  - "#83254"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#83254"
canonical_hint: "gitcrawl representative #80446 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 903 on 2026-06-15. Security-signal refs #83254 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 903

Generated from local gitcrawl run cluster 903 for `openclaw/openclaw`.

Display title:

> Telegram outbound throttled by some ISPs — bare `undici` User-Agent is a low-cardinality fingerprint

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #83254
- representative: #80446, currently open in local store
- latest member update: 2026-06-14T04:46:06.950402Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80446 Telegram outbound throttled by some ISPs — bare `undici` User-Agent is a low-cardinality fingerprint
- #83254 [security-signal] fix(telegram): stamp bot api user agent
