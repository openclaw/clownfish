---
repo: openclaw/openclaw
cluster_id: gitcrawl-17-bulk-plan-20260615-a
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
  - "#73163"
candidates:
  - "#56830"
  - "#68146"
  - "#68280"
  - "#71669"
  - "#72013"
  - "#72418"
  - "#72932"
  - "#73163"
  - "#79625"
  - "#79756"
  - "#79983"
  - "#80392"
  - "#80836"
  - "#81792"
  - "#82894"
  - "#85366"
  - "#85399"
  - "#86314"
  - "#86711"
  - "#88374"
  - "#88379"
  - "#88497"
  - "#88584"
  - "#89647"
  - "#89650"
  - "#90154"
  - "#90296"
  - "#90654"
  - "#90779"
  - "#91129"
  - "#91151"
  - "#91197"
  - "#91346"
  - "#91932"
  - "#92149"
  - "#92178"
  - "#92206"
  - "#92307"
cluster_refs:
  - "#56830"
  - "#68146"
  - "#68280"
  - "#71669"
  - "#72013"
  - "#72418"
  - "#72932"
  - "#73163"
  - "#79625"
  - "#79756"
  - "#79983"
  - "#80392"
  - "#80836"
  - "#81792"
  - "#82894"
  - "#85366"
  - "#85399"
  - "#86314"
  - "#86711"
  - "#88374"
  - "#88379"
  - "#88497"
  - "#88584"
  - "#89647"
  - "#89650"
  - "#90154"
  - "#90296"
  - "#90654"
  - "#90779"
  - "#91129"
  - "#91151"
  - "#91197"
  - "#91346"
  - "#91932"
  - "#92149"
  - "#92178"
  - "#92206"
  - "#92307"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#32473"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#56830"
  - "#68280"
  - "#72418"
  - "#72932"
  - "#80836"
  - "#88374"
  - "#88584"
  - "#90154"
  - "#90654"
  - "#91129"
  - "#91197"
  - "#91346"
  - "#92149"
  - "#92307"
canonical_hint: "gitcrawl representative #73163 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 17 on 2026-06-15. Security-signal refs #56830, #68280, #72418, #72932, #80836, #88374, #88584, #90154, #90654, #91129, #91197, #91346, #92149, #92307 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #32473 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 17

Generated from local gitcrawl run cluster 17 for `openclaw/openclaw`.

Display title:

> fix(gateway): warn for insecure Control UI access

Cluster shape from gitcrawl:

- total members: 39
- issues: 15
- pull requests: 24
- open candidates in local store: 38
- excluded existing-overlap refs: #32473
- security-signal refs requiring route_security: #56830, #68280, #72418, #72932, #80836, #88374, #88584, #90154, #90654, #91129, #91197, #91346, #92149, #92307
- representative: #73163, currently open in local store
- latest member update: 2026-06-14T04:46:07.515101Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #56830 [security-signal] Gateway/UI: clarify insecure-context device-auth errors
- #68146 fix(gateway): hold startup-gated requests at server until post-attach (closes #67160)
- #68280 [security-signal] fix(gateway): fail fast on missing local probe auth
- #71669 [Feature]: Emit runtime warning when Control UI config will silently reject non-secure connections
- #72013 ACP startup identity reconcile warns on terminal one-shot sessions
- #72418 [security-signal] [Bug]: shouldSkipBackendSelfPairing allows loopback clients to self-declare GATEWAY_CLIENT identity and bypass device pairing
- #72932 [security-signal] fix(gateway): unblock startup and fresh agent sessions
- #73163 fix(gateway): warn for insecure Control UI access
- #79625 [Bug]: Decouple sidecar startup from ACPX — Discord/heartbeat/cron should start in parallel, not after ACPX ready
- #79756 fix(gateway): start channels before plugins.runtime-post-bind (#79625) [AI-assisted]
- #79983 [Bug]: SYSTEM_RUN_DISABLED despite effective exec policy showing security=full
- #80392 fix(gateway): disable startup trace monitor on startup failure
- #80836 [security-signal] RFE: gateway.auth.tokenScopes config field for headless/single-tenant deployments
- #81792 feat: add gateway token scopes
- #82894 fix(gateway): prewarm agent runtime before ready
- #85366 ACP startup sidecars saturate event loop on installs with many sessions — identity-reconcile + session-locks 450-460 s wall, eventLoopDelayP99 6 min
- #85399 fix(gateway): bound startup sidecar fanout
- #86314 [Bug] openclaw-weixin channel not registered in gateway runtime - invalid channels.start channel on WSL2
- #86711 fix(acp): skip oneshot sessions during startup identity reconcile
- #88374 [security-signal] fix(gateway): honor signed node ids
- #88379 fix(plugins): start configured external channel plugins
- #88497 fix(gateway): load auto-enabled channel plugins at startup
- #88584 [security-signal] Surface ACP reconcile errors in startup logs
- #89647 fix(plugins): guard startup manifest channels
- #89650 fix(plugins): guard startup provider contracts
- #90154 [security-signal] fix(gateway): restrict backend self-pairing shared auth
- #90296 channels login post-save restart calls removed channels.start command — channel stuck in SETUP
- #90654 [security-signal] [Bug]: CLI write commands (message send/broadcast/probe) crash gateway handshake with TypeError reading 'trim' -> closed before connect (1000)
- #90779 fix(channels): restart gateway when channels.start fails for unloaded plugin
- #91129 [security-signal] openclaw-weixin plugin v2.4.4 + OpenClaw 2026.6.1: Channel shows OFF / not configured, startAccount never called
- #91151 Suppress `auth mode=none` runtime log on loopback-only deployments
- #91197 [security-signal] Fix loopback no-auth gateway startup warning
- #91346 [security-signal] fix(cli): quiet local no-auth gateway warning
- #91932 openclaw-weixin: Gateway hot-reload fails to reconnect weixin channel after config change
- #92149 [security-signal] fix(gateway): sign custom node ids
- #92178 fix(gateway): guard formatAuditList against non-string items to prevent handshake trim crash (#90654)
- #92206 [Bug]: tools.exec.security config not applied at runtime after gateway restart
- #92307 [security-signal] Warn when host approvals clamp exec security at startup

Existing-overlap context refs:

- #32473 [Bug]: control ui requires device identity (use HTTPS or localhost secure context)
