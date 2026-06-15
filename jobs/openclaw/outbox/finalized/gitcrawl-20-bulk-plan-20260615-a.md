---
repo: openclaw/openclaw
cluster_id: gitcrawl-20-bulk-plan-20260615-a
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
  - "#78562"
candidates:
  - "#45503"
  - "#70334"
  - "#75740"
  - "#78380"
  - "#78562"
  - "#80638"
  - "#80639"
  - "#80889"
  - "#81182"
  - "#81190"
  - "#84536"
  - "#84602"
  - "#84777"
  - "#87402"
  - "#87996"
  - "#88870"
  - "#88925"
  - "#89051"
  - "#89160"
  - "#89528"
  - "#89604"
  - "#90526"
  - "#92043"
  - "#92194"
  - "#92270"
  - "#92303"
  - "#92519"
  - "#92598"
  - "#92712"
cluster_refs:
  - "#45503"
  - "#70334"
  - "#75740"
  - "#78380"
  - "#78562"
  - "#80638"
  - "#80639"
  - "#80889"
  - "#81182"
  - "#81190"
  - "#84536"
  - "#84602"
  - "#84777"
  - "#87402"
  - "#87996"
  - "#88870"
  - "#88925"
  - "#89051"
  - "#89160"
  - "#89528"
  - "#89604"
  - "#90526"
  - "#92043"
  - "#92194"
  - "#92270"
  - "#92303"
  - "#92519"
  - "#92598"
  - "#92712"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#63216"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#81190"
canonical_hint: "gitcrawl representative #78562 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 20 on 2026-06-15. Security-signal refs #81190 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #63216 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 20

Generated from local gitcrawl run cluster 20 for `openclaw/openclaw`.

Display title:

> Repeated tool-loop context overflows cause successive auto-compactions after successful compaction (v2026.5.5)

Cluster shape from gitcrawl:

- total members: 30
- issues: 22
- pull requests: 8
- open candidates in local store: 29
- excluded existing-overlap refs: #63216
- security-signal refs requiring route_security: #81190
- representative: #78562, currently open in local store
- latest member update: 2026-06-14T04:46:07.225489Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #45503 Manual context clearing for tool results
- #70334 Session lock stuck in 'processing' after context overflow compaction succeeds
- #75740 Embedded agent auto-compaction retries without reducing 873k-token Paperclip prompt
- #78380 Gateway self-restart from chat turn drops in-flight Telegram/Discord replies
- #78562 Repeated tool-loop context overflows cause successive auto-compactions after successful compaction (v2026.5.5)
- #80638 Make MAX_OVERFLOW_COMPACTION_ATTEMPTS config-driven (currently hardcoded to 3)
- #80639 Expose PREEMPTIVE_OVERFLOW_RATIO as a config knob (currently hardcoded to 0.9)
- #80889 fix(compaction): make overflow tuning configurable
- #81182 Overflow recovery should truncate tool results before waiting full auto-compaction timeout
- #81190 [security-signal] fix(agents): truncate tool results before overflow compaction
- #84536 Bug: Preemptive context overflow silently kills embedded sessions without notifying user
- #84602 fix(agents): surface user-visible error when embedded session is stuck or overflows context (#84536)
- #84777 Bug: Compaction causes Pi runtime deadlock — agent freezes across all channels after summary generation
- #87402 Gateway restart treats managed listener as port conflict; embedded Codex direct session can wedge during compaction/rebind
- #87996 Vertex beta INVALID_ARGUMENT can wedge long sessions without actionable recovery
- #88870 Stuck-session recovery aborts long-but-active agent runs at warnMs×3 (~6min) with misleading "Reply operation aborted by user" reason
- #88925 Fix stuck-session recovery aborts for active reply runs
- #89051 [Bug]: Embedded agent session silently hangs after auto-compaction with no error logging or recovery
- #89160 fix(agents): detect truncated API responses to prevent silent session hang
- #89528 [Bug]: `--safe --skip-deferral` can still wait on restart reply drain for its own tool/final replies
- #89604 fix(gateway): skip pending reply drain on skip-deferral restart
- #90526 [Bug]: Auto-compaction silently fails after context overflow (attempt 1/3 with no follow-up)
- #92043 Bug: 180s compaction timeout is a single wall clock over the whole chunk pipeline with no partial-progress reuse, so a legitimately-long compaction fails identically every turn 
- #92194 Safe restart can age into forced restart and skip active-work drain
- #92270 [Bug]: Stuck-session recovery never releases: status=aborted with released=0 on every event — wedges survive five correct-target aborts (~14h) and four ghost-target aborts (~16h) until an external restart or user /reset [2026.5.28]
- #92303 fix(recovery): reset command lane when abort leaves pre-existing task blocked
- #92519 [Bug]: Session stuck in permanent busy state after mid-turn gateway restart — no auto-recovery, only /new or /reset clears it
- #92598 Discord compaction still fails with provider_error_4xx after #90496 closure on 2026.6.5
- #92712 [Bug]: Session stuck in permanent busy state after mid-turn gateway restart — no auto-recovery, only /new or /reset clears it

Existing-overlap context refs:

- #63216 [Bug]: Repeated hard resets on same session key despite high reserveTokensFloor; retry loop re-injects bootstrap context
