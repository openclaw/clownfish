---
repo: openclaw/openclaw
cluster_id: gitcrawl-24-bulk-plan-20260615-a
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
  - "#89083"
candidates:
  - "#49381"
  - "#55027"
  - "#74143"
  - "#75100"
  - "#77685"
  - "#83868"
  - "#88335"
  - "#88597"
  - "#88867"
  - "#88871"
  - "#88894"
  - "#89009"
  - "#89014"
  - "#89083"
  - "#91155"
  - "#91159"
  - "#91195"
  - "#91562"
  - "#91582"
  - "#91698"
  - "#91886"
  - "#91916"
  - "#91941"
  - "#91943"
cluster_refs:
  - "#49381"
  - "#55027"
  - "#74143"
  - "#75100"
  - "#77685"
  - "#83868"
  - "#88335"
  - "#88597"
  - "#88867"
  - "#88871"
  - "#88894"
  - "#89009"
  - "#89014"
  - "#89083"
  - "#91155"
  - "#91159"
  - "#91195"
  - "#91562"
  - "#91582"
  - "#91698"
  - "#91886"
  - "#91916"
  - "#91941"
  - "#91943"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#59771"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#88871"
  - "#88894"
  - "#89014"
  - "#89083"
  - "#91886"
  - "#91943"
canonical_hint: "gitcrawl representative #89083 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 24 on 2026-06-15. Security-signal refs #88871, #88894, #89014, #89083, #91886, #91943 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #59771 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 24

Generated from local gitcrawl run cluster 24 for `openclaw/openclaw`.

Display title:

> fix(feishu): prevent later final-shaped diagnostics from overwriting streaming card answer

Cluster shape from gitcrawl:

- total members: 25
- issues: 15
- pull requests: 10
- open candidates in local store: 24
- excluded existing-overlap refs: #59771
- security-signal refs requiring route_security: #88871, #88894, #89014, #89083, #91886, #91943
- representative: #89083, currently open in local store
- latest member update: 2026-06-14T04:46:06.710048Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #49381 Feishu: duplicate final replies can occur after model failover from rate-limited primary
- #55027 Feishu channel cannot do true block streaming; block chunks are dropped unless streaming card is enabled
- #74143 feishu: streaming card duplicates content when block payloads overlap with partial snapshots
- #75100 feat(feishu): add segment streaming mode
- #77685 Feishu streaming card multiple content delivery bugs cause final text loss stale content and duplication
- #83868 fix(feishu): eliminate streaming card content duplication
- #88335 [feishu] Streaming card sends incremental diff instead of full text to CardKit API
- #88597 fix(feishu): restore full-text streaming card updates to prevent content truncation
- #88867 [Bug]: Feishu streaming card: only the last character displayed after streaming completes
- #88871 [security-signal] fix(feishu): send full streaming card content
- #88894 [security-signal] docs(feishu): document raw-mode card fallback
- #89009 [Bug]: Feishu streaming final card can be overwritten by later final-shaped diagnostics
- #89014 [security-signal] fix(feishu): preserve first streaming final card
- #89083 [security-signal] fix(feishu): prevent later final-shaped diagnostics from overwriting streaming card answer
- #91155 Feishu streaming card closes prematurely, sending empty reply with single character
- #91159 Feishu channel: streaming card text truncation / 飞书流式卡片文字显示不全
- #91195 [Regression] v2026.6.1 Feishu streaming card leaves permanent open state with empty body when agent turn delayed
- #91562 [Bug]: Feishu streaming replies only show latest token in 6.1
- #91582 [Bug] Feishu streaming card does not auto-grow height — content above the viewport is clipped
- #91698 fix(feishu): accumulate streamed final delta chunks (#91562)
- #91886 [security-signal] Feishu streaming mode causes card-based incremental updates instead of plain text delivery
- #91916 [Bug]: Feishu card streaming truncates long responses and error messages overwrite correct replies
- #91941 [Bug]: Feishu streaming card full-content updates cause severe latency regression on long replies
- #91943 [security-signal] fix(feishu): add append streaming content mode

Existing-overlap context refs:

- #59771 Fix Feishu streaming recovery after transient reply errors
