---
repo: openclaw/openclaw
cluster_id: gitcrawl-1096-intake-20260619
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
  - "#94127"
cluster_refs:
  - "#94127"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#57775"
  - "#78071"
  - "#88296"
  - "#88835"
  - "#88936"
  - "#88950"
  - "#88959"
  - "#89598"
  - "#89611"
  - "#89755"
  - "#89757"
  - "#89759"
  - "#89763"
  - "#89789"
  - "#89794"
  - "#89824"
  - "#89829"
  - "#89852"
  - "#89878"
  - "#89977"
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
  - "#90048"
  - "#90052"
  - "#90054"
  - "#90168"
  - "#92358"
  - "#93046"
  - "#94143"
  - "#94154"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #90054 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1096 on 2026-06-19. Existing-overlap refs #57775, #78071, #88296, #88835, #88936, #88950, #88959, #89598, #89611, #89755, #89757, #89759, #89763, #89789, #89794, #89824, #89829, #89852, #89878, #89977, #89979, #89983, #89988, #89990, #89991, #89993, #89999, #90002, #90005, #90026, #90034, #90048, #90052, #90054, #90168, #92358, #93046, #94143, #94154 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1096

Generated from local gitcrawl run cluster 1096 for `openclaw/openclaw`.

Display title:

> fix(gateway): isolate method descriptor rows

Cluster shape from gitcrawl:

- total members: 40
- issues: 2
- pull requests: 38
- open candidates in local store: 1
- excluded existing-overlap refs: #57775, #78071, #88296, #88835, #88936, #88950, #88959, #89598, #89611, #89755, #89757, #89759, #89763, #89789, #89794, #89824, #89829, #89852, #89878, #89977, #89979, #89983, #89988, #89990, #89991, #89993, #89999, #90002, #90005, #90026, #90034, #90048, #90052, #90054, #90168, #92358, #93046, #94143, #94154
- representative: #90054, currently open in local store
- latest member update: 2026-06-18T16:17:08.499302Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94127 [Bug]: openclaw gateway call <plugin-method> returns "unknown method" for plugin-registered RPC methods, even though plugins inspect --runtime confirms the registration

Existing-overlap context refs:

- #57775 Windows headless node host supports exec approvals via CLI, but nodes describe / Control UI do not advertise system.execApprovals.get/set
- #78071 test(gateway): cover reserved admin method scopes
- #88296 fix(gateway): advertise exec approval node commands
- #88835 fix(gateway): guard node approval policy writes
- #88936 fix(plugins): skip broken web provider factories
- #88950 fix(plugins): ignore throwing provider policy hooks
- #88959 fix(plugins): ignore throwing provider runtime hooks
- #89598 fix(gateway): ignore unreadable MCP union schema variants
- #89611 fix(gateway): ignore unreadable tool action schemas
- #89755 [security-signal] fix(gateway): guard node invoke plugin policies
- #89757 [security-signal] fix(gateway): guard node command policy metadata
- #89759 [security-signal] fix(gateway): guard plugin method scope metadata
- #89763 fix(gateway): guard plugin session action dispatch
- #89789 fix(media): guard document extractor metadata
- #89794 fix(gateway): guard plugin UI descriptors
- #89824 fix(gateway): guard plugin reload metadata
- #89829 [security-signal] fix(gateway): guard plugin node policy metadata
- #89852 fix(gateway): guard plugin session action lookups
- #89878 fix(plugins): isolate extractor artifact failures
- #89977 fix(plugins): isolate bundle config rows
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
- #90048 fix(plugins): isolate provider runtime rows
- #90052 fix(plugins): isolate capability provider rows
- #90054 fix(gateway): isolate method descriptor rows
- #90168 [security-signal] fix(gateway): guard reload metadata descriptors
- #92358 [security-signal] fix(gateway): resolve plugin method scope from channel-pinned registry in gateway mode
- #93046 [security-signal] fix(gateway): exclude background tasks from channel reload deferral [AI]
- #94143 fix(gateway): resolve plugin-registered gateway methods through live registry
- #94154 fix(gateway): resolve plugin-registered gateway methods through live registry
