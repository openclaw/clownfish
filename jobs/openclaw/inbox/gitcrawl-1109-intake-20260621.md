---
repo: openclaw/openclaw
cluster_id: gitcrawl-1109-intake-20260621
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
  - "#94426"
cluster_refs:
  - "#94426"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94379"
  - "#94394"
  - "#94399"
  - "#94415"
  - "#94448"
  - "#94456"
  - "#94463"
  - "#94469"
  - "#94471"
  - "#94596"
  - "#94602"
  - "#94604"
  - "#94607"
  - "#94611"
  - "#94613"
  - "#94616"
  - "#94630"
  - "#94635"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #94394 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1109 on 2026-06-21. Existing-overlap refs #94379, #94394, #94399, #94415, #94448, #94456, #94463, #94469, #94471, #94596, #94602, #94604, #94607, #94611, #94613, #94616, #94630, #94635 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1109

Generated from local gitcrawl run cluster 1109 for `openclaw/openclaw`.

Display title:

> fix(infra): probe 127.0.0.1 in ensurePortAvailable to detect IPv4-only occupants

Cluster shape from gitcrawl:

- total members: 19
- issues: 3
- pull requests: 16
- open candidates in local store: 1
- excluded existing-overlap refs: #94379, #94394, #94399, #94415, #94448, #94456, #94463, #94469, #94471, #94596, #94602, #94604, #94607, #94611, #94613, #94616, #94630, #94635
- representative: #94394, currently open in local store
- latest member update: 2026-06-19T02:13:00.321652Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94426 isPortBusy preflight misses IPv4-only occupant (same address-family flaw as #94379)

Existing-overlap context refs:

- #94379 [security-signal] [Bug]: ensurePortAvailable() pre-flight misses IPv4-only loopback occupant → Chrome CDP bind fails with misleading "HTTP 401"
- #94394 [security-signal] fix(infra): probe 127.0.0.1 in ensurePortAvailable to detect IPv4-only occupants
- #94399 fix(ports): specify IPv4 loopback host in ensurePortAvailable
- #94415 fix(ports): probe all address families in ensurePortAvailable
- #94448 fix(cli): add IPv4 loopback host to isPortBusy
- #94456 [security-signal] fix(cli): route isPortBusy through checkPortInUse to detect IPv4-only occupants
- #94463 [security-signal] fix: isPortBusy preflight misses IPv4-only occupant
- #94469 [security-signal] fix(cli): isPortBusy probes all 4 address families to catch IPv4-only listeners
- #94471 fix: #94426 isPortBusy probes all address families via checkPortInUse
- #94596 ensurePortAvailable in startSshPortForward misses IPv4-only occupants (same address-family flaw as #94379)
- #94602 fix(infra): pin ensurePortAvailable to 127.0.0.1 in startSshPortForward
- #94604 [security-signal] fix(ssh-tunnel): pass 127.0.0.1 host to ensurePortAvailable in startSshPortForward
- #94607 fix(ssh): scope tunnel port preflight to loopback (#94603)
- #94611 fix(infra): pin ensurePortAvailable to 127.0.0.1 in startSshPortForward (fixes #94596)
- #94613 fix(ssh-tunnel): pin ensurePortAvailable to IPv4 loopback
- #94616 fix(ssh): bind ensurePortAvailable to IPv4 loopback
- #94630 [security-signal] fix(infra): bind ensurePortAvailable to 127.0.0.1 in startSshPortForward
- #94635 [security-signal] fix(infra): pass 127.0.0.1 to ensurePortAvailable in SSH tunnel start
