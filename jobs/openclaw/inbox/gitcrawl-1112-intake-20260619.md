---
repo: openclaw/openclaw
cluster_id: gitcrawl-1112-intake-20260619
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
  - "#93667"
cluster_refs:
  - "#93667"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#83868"
  - "#89009"
  - "#89014"
  - "#89083"
  - "#91155"
  - "#91195"
  - "#91562"
  - "#91582"
  - "#91698"
  - "#91916"
  - "#91941"
  - "#91943"
  - "#94427"
  - "#94428"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #91943 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1112 on 2026-06-19. Existing-overlap refs #83868, #89009, #89014, #89083, #91155, #91195, #91562, #91582, #91698, #91916, #91941, #91943, #94427, #94428 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1112

Generated from local gitcrawl run cluster 1112 for `openclaw/openclaw`.

Display title:

> fix(feishu): coalesce streaming card updates

Cluster shape from gitcrawl:

- total members: 15
- issues: 8
- pull requests: 7
- open candidates in local store: 1
- excluded existing-overlap refs: #83868, #89009, #89014, #89083, #91155, #91195, #91562, #91582, #91698, #91916, #91941, #91943, #94427, #94428
- representative: #91943, currently open in local store
- latest member update: 2026-06-18T16:17:07.854393Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93667 [Feishu] Built-in channel does not render footer (elapsed/status) — schema accepts footer config but no UI display

Existing-overlap context refs:

- #83868 fix(feishu): eliminate streaming card content duplication
- #89009 [Bug]: Feishu streaming final card can be overwritten by later final-shaped diagnostics
- #89014 [security-signal] fix(feishu): preserve first streaming final card
- #89083 [security-signal] fix(feishu): prevent later final-shaped diagnostics from overwriting streaming card answer
- #91155 Feishu streaming card closes prematurely, sending empty reply with single character
- #91195 [Regression] v2026.6.1 Feishu streaming card leaves permanent open state with empty body when agent turn delayed
- #91562 [Bug]: Feishu streaming replies only show latest token in 6.1
- #91582 [Bug] Feishu streaming card does not auto-grow height — content above the viewport is clipped
- #91698 fix(feishu): accumulate streamed final delta chunks (#91562)
- #91916 [Bug]: Feishu card streaming truncates long responses and error messages overwrite correct replies
- #91941 [Bug]: Feishu streaming card full-content updates cause severe latency regression on long replies
- #91943 [security-signal] fix(feishu): coalesce streaming card updates
- #94427 [security-signal] fix(feishu): render streaming card footer
- #94428 [security-signal] fix(feishu): preserve replies before error finals
