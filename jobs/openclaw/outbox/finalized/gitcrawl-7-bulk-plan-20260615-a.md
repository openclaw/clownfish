---
repo: openclaw/openclaw
cluster_id: gitcrawl-7-bulk-plan-20260615-a
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
  - "#89829"
candidates:
  - "#88835"
  - "#88936"
  - "#88950"
  - "#88959"
  - "#89098"
  - "#89753"
  - "#89755"
  - "#89757"
  - "#89759"
  - "#89763"
  - "#89794"
  - "#89795"
  - "#89798"
  - "#89805"
  - "#89810"
  - "#89819"
  - "#89824"
  - "#89829"
  - "#89836"
  - "#89852"
  - "#89857"
  - "#89898"
  - "#89979"
  - "#89983"
  - "#89988"
  - "#89990"
  - "#89991"
  - "#89993"
  - "#89999"
  - "#90002"
  - "#90005"
  - "#90026"
  - "#90034"
  - "#90039"
  - "#90048"
  - "#90052"
  - "#90054"
  - "#90168"
  - "#90182"
  - "#92358"
cluster_refs:
  - "#88835"
  - "#88936"
  - "#88950"
  - "#88959"
  - "#89098"
  - "#89753"
  - "#89755"
  - "#89757"
  - "#89759"
  - "#89763"
  - "#89794"
  - "#89795"
  - "#89798"
  - "#89805"
  - "#89810"
  - "#89819"
  - "#89824"
  - "#89829"
  - "#89836"
  - "#89852"
  - "#89857"
  - "#89898"
  - "#89979"
  - "#89983"
  - "#89988"
  - "#89990"
  - "#89991"
  - "#89993"
  - "#89999"
  - "#90002"
  - "#90005"
  - "#90026"
  - "#90034"
  - "#90039"
  - "#90048"
  - "#90052"
  - "#90054"
  - "#90168"
  - "#90182"
  - "#92358"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89759"
  - "#89829"
  - "#90168"
canonical_hint: "gitcrawl representative #89829 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 7 on 2026-06-15. Security-signal refs #89759, #89829, #90168 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 7

Generated from local gitcrawl run cluster 7 for `openclaw/openclaw`.

Display title:

> fix(gateway): guard plugin node policy metadata

Cluster shape from gitcrawl:

- total members: 40
- issues: 0
- pull requests: 40
- open candidates in local store: 40
- security-signal refs requiring route_security: #89759, #89829, #90168
- representative: #89829, currently open in local store
- latest member update: 2026-06-14T04:46:06.088167Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #88835 fix(gateway): guard node approval policy writes
- #88936 fix(plugins): skip broken web provider factories
- #88950 fix(plugins): ignore throwing provider policy hooks
- #88959 fix(plugins): ignore throwing provider runtime hooks
- #89098 fix(gateway): guard tools catalog descriptors
- #89753 fix(plugins): guard command spec projections
- #89755 fix(gateway): guard node invoke plugin policies
- #89757 fix(gateway): guard node command policy metadata
- #89759 [security-signal] fix(gateway): guard plugin method scope metadata
- #89763 fix(gateway): guard plugin session action dispatch
- #89794 fix(gateway): guard plugin UI descriptors
- #89795 fix(plugins): guard host cleanup extension metadata
- #89798 fix(plugins): guard agent event subscription metadata
- #89805 fix(plugins): guard typed hook metadata
- #89810 fix(plugins): guard plugin service metadata
- #89819 fix(node-host): guard plugin command metadata
- #89824 fix(gateway): guard plugin reload metadata
- #89829 [security-signal] fix(gateway): guard plugin node policy metadata
- #89836 fix(security): guard plugin audit collector metadata
- #89852 fix(gateway): guard plugin session action lookups
- #89857 fix(plugins): guard runtime lifecycle cleanup metadata
- #89898 fix(plugins): guard plugin service registration metadata
- #89979 fix(config): isolate provider auto-enable rows
- #89983 fix(agents): isolate provider attribution manifest rows
- #89988 fix(gateway): isolate control UI descriptor rows
- #89990 fix(gateway): isolate web login descriptor rows
- #89991 fix(gateway): isolate method list rows
- #89993 fix(plugins): isolate inspect gateway descriptor rows
- #89999 fix(plugins): isolate CLI descriptor rows
- #90002 fix(plugins): isolate CLI metadata rows
- #90005 fix(plugins): isolate captured CLI metadata rows
- #90026 fix(gateway): guard channel method descriptor projection
- #90034 fix(gateway): isolate session action scope lookup
- #90039 fix(plugins): isolate command spec projection
- #90048 fix(plugins): isolate provider runtime rows
- #90052 fix(plugins): isolate capability provider rows
- #90054 fix(gateway): isolate method descriptor rows
- #90168 [security-signal] fix(gateway): guard reload metadata descriptors
- #90182 fix(plugins): isolate definition metadata failures
- #92358 fix(gateway): resolve plugin method scope from channel-pinned registry in gateway mode
