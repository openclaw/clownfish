---
repo: openclaw/openclaw
cluster_id: gitcrawl-14-bulk-plan-20260615-a
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
  - "#86053"
candidates:
  - "#80590"
  - "#83229"
  - "#83367"
  - "#83369"
  - "#84874"
  - "#85213"
  - "#85975"
  - "#86023"
  - "#86053"
  - "#86094"
  - "#86160"
  - "#88175"
  - "#88206"
  - "#88332"
  - "#88336"
  - "#88353"
  - "#88407"
  - "#89004"
  - "#89067"
  - "#89068"
  - "#89072"
  - "#89292"
  - "#89296"
  - "#89301"
  - "#89329"
  - "#89737"
  - "#89747"
  - "#89837"
  - "#89980"
  - "#90268"
  - "#90332"
  - "#90633"
  - "#90805"
  - "#90868"
  - "#90994"
  - "#91289"
  - "#91774"
  - "#92238"
  - "#92294"
  - "#92847"
cluster_refs:
  - "#80590"
  - "#83229"
  - "#83367"
  - "#83369"
  - "#84874"
  - "#85213"
  - "#85975"
  - "#86023"
  - "#86053"
  - "#86094"
  - "#86160"
  - "#88175"
  - "#88206"
  - "#88332"
  - "#88336"
  - "#88353"
  - "#88407"
  - "#89004"
  - "#89067"
  - "#89068"
  - "#89072"
  - "#89292"
  - "#89296"
  - "#89301"
  - "#89329"
  - "#89737"
  - "#89747"
  - "#89837"
  - "#89980"
  - "#90268"
  - "#90332"
  - "#90633"
  - "#90805"
  - "#90868"
  - "#90994"
  - "#91289"
  - "#91774"
  - "#92238"
  - "#92294"
  - "#92847"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#83367"
  - "#83369"
  - "#84874"
  - "#85213"
  - "#86053"
  - "#86094"
  - "#86160"
  - "#88336"
  - "#90633"
  - "#90805"
  - "#90868"
  - "#90994"
canonical_hint: "gitcrawl representative #86053 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 14 on 2026-06-15. Security-signal refs #83367, #83369, #84874, #85213, #86053, #86094, #86160, #88336, #90633, #90805, #90868, #90994 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 14

Generated from local gitcrawl run cluster 14 for `openclaw/openclaw`.

Display title:

> fix(codex): honor explicit native tool allowlists

Cluster shape from gitcrawl:

- total members: 40
- issues: 7
- pull requests: 33
- open candidates in local store: 40
- security-signal refs requiring route_security: #83367, #83369, #84874, #85213, #86053, #86094, #86160, #88336, #90633, #90805, #90868, #90994
- representative: #86053, currently open in local store
- latest member update: 2026-06-14T04:46:07.38689Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80590 fix(codex): expose sandbox shell tools
- #83229 fix(codex): prefer native tokens for resume budget
- #83367 [security-signal] Fix Codex runtime hook and session churn
- #83369 [security-signal] fix(codex): keep owner-only tool schema stable
- #84874 [security-signal] fix(codex): restore restricted dynamic tool fallbacks
- #85213 [security-signal] fix(codex): expose bound conversation dynamic tools
- #85975 Codex app-server rotates context-engine bootstrap threads after large first turns
- #86023 Codex long-running sessions should use semantic thread/bootstrap cache ownership
- #86053 [security-signal] fix(codex): honor explicit native tool allowlists
- #86094 [security-signal] feat(codex): diagnose native thread lifecycle
- #86160 [security-signal] fix(codex): preserve semantic native threads across compaction
- #88175 fix(codex): omit tool controls without tools
- #88206 fix(codex): coalesce in-flight dynamic tool calls
- #88332 [Bug]: Codex native tool statuses surface expected checks as channel-visible OpenClaw failures
- #88336 [security-signal] fix(codex): normalize native command exit status
- #88353 [Bug]: Codex before_prompt_build receives empty messages after #88262
- #88407 [codex] fix Codex continuity projection regressions
- #89004 fix #88353: [Bug]: Codex before_prompt_build receives empty messages after #88262
- #89067 fix(codex): harden diagnostic tool capture
- #89068 fix(codex): guard dynamic tool name filters
- #89072 fix(codex): guard prompt report tool metadata
- #89292 fix(auto-reply): guard context prompt tool names
- #89296 fix(copilot): quarantine malformed bridged tools
- #89301 fix(trajectory): skip unreadable tool descriptors
- #89329 fix(auto-reply): guard exported session tool schemas
- #89737 fix(auto-reply): guard context report tool entries
- #89747 fix(auto-reply): guard tools status inventory reads
- #89837 tools.exec.pathPrepend is not applied to Codex app-server native exec PATH after config change
- #89980 fix(trajectory): isolate manifest metadata rows
- #90268 fix(trajectory): guard tool schema capture
- #90332 fix(codex): guard trajectory tool schema capture
- #90633 [security-signal] fix(codex): enforce OpenClaw policy for native tool surfaces
- #90805 [security-signal] fix(codex): fail closed on missing native hook relay delivery
- #90868 [security-signal] fix(codex): map Code Mode exec hooks to shell policy
- #90994 [security-signal] fix(codex): restore native PreToolUse relay delivery
- #91289 fix(codex): quarantine unreadable dynamic tool schemas
- #91774 [Bug]: Codex native exec does not honor OpenClaw notifyOnExit/notifyOnExitEmptySuccess completion wake semantics
- #92238 [Bug]: Isolated cron job with OpenAI/Codex-backed model path reports `exec tool unavailable`. `sandbox explain`  shows `exec` is allowed.
- #92294 fix(codex): keep OpenClaw exec when native surface has no environment (#92238)
- #92847 fix(codex): drain terminal native tool results
