---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-072"
mode: "plan"
run_id: "27549048540"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27549048540"
head_sha: "e8e65d821b5c55a11a8a30d2023428743182215a"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T13:28:19.804Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 20
---

# pr-inventory-ready_for_maintainer-20260615T131654-072

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27549048540](https://github.com/openclaw/clownfish/actions/runs/27549048540)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification shard. No GitHub mutations planned because this is not a dedupe cluster, merge/fix actions are blocked by job frontmatter, and the hydrated artifact does not provide closure-safe evidence for any PR. Hydrated PRs are retained for maintainer review; unhydrated PRs are left non-mutating with missing-live-state evidence.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 20 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #88449 | needs_human | planned | needs_human | Maintainer/author follow-up and technical review are required before any action. |
| #88798 | needs_human | planned | needs_human | Compatibility/product-intent decision needs maintainer review. |
| #90968 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #93194 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #92125 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #93225 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #93007 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #91691 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #88988 | needs_human | planned | needs_human | Feature/UI behavior still needs maintainer acceptance. |
| #78395 | needs_human | planned | needs_human | Provider/model-selection correctness needs maintainer review. |
| #91685 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #84779 | needs_human | planned | needs_human | Audit redaction correctness and author-follow-up need maintainer review. |
| #87504 | needs_human | planned | needs_human | Agent hook side-effect behavior needs maintainer review. |
| #89101 | needs_human | planned | needs_human | Session-state contract changes need maintainer technical judgment. |
| #89287 | needs_human | planned | needs_human | Large message-delivery behavior change needs maintainer review. |
| #89367 | needs_human | planned | needs_human | Timeout/session-state behavior needs maintainer review. |
| #92946 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #92341 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #93239 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #50463 | needs_human | planned | needs_human | Failed proof and dirty merge state require author/maintainer follow-up. |
| #53920 | needs_human | planned | needs_human | Risky infra script change needs maintainer review before any merge path. |
| #54904 | needs_human | planned | needs_human | Author follow-up and webhook compatibility review are required. |
| #70046 | needs_human | planned | needs_human | CLI/date parsing behavior needs maintainer review. |
| #86655 | needs_human | planned | needs_human | Large feature/provider integration requires maintainer product and technical review. |
| #87613 | needs_human | planned | needs_human | Failed channel proof and author follow-up block maintainer-ready action. |
| #89172 | needs_human | planned | needs_human | Channel behavior change needs maintainer review. |
| #89395 | needs_human | planned | needs_human | Auth-provider/message-delivery behavior needs maintainer review and author follow-up. |
| #89416 | needs_human | planned | needs_human | Browser download behavior and author-follow-up need maintainer review. |
| #89442 | needs_human | planned | needs_human | Availability/runtime timeout behavior needs maintainer review. |
| #77017 | needs_human | planned | needs_human | Broad dirty candidate requires maintainer scoping/review. |
| #89482 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #89547 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #89576 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #92863 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #89584 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #89604 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #89612 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #89621 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #93245 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |
| #89714 | keep_independent | planned | independent | No live hydrated state is available for a mutating or merge recommendation. |

## Needs Human

- #88449: dirty branch and waiting-on-author status need maintainer/author follow-up.
- #88798: Control UI insecure-auth compatibility tradeoff needs maintainer product judgment.
- #88988: session-duration footer feature needs maintainer acceptance.
- #78395: provider alias fallback behavior needs maintainer review.
- #84779: config audit redaction behavior needs maintainer review and author follow-up.
- #87504: Skill Workshop automatic-session side effects need maintainer review.
- #89101: session resumability contract changes need maintainer review.
- #89287: large message-delivery accounting change needs maintainer review.
- #89367: timeout fallback behavior needs maintainer review.
- #50463: dirty branch and failed Real behavior proof need follow-up.
- #53920: setup/auth-monitor script change needs maintainer review.
- #54904: Feishu webhook path compatibility and author follow-up need maintainer review.
- #70046: cron --at time-only parsing needs maintainer review.
- #86655: broad Claude harness extension needs maintainer product/technical review.
- #87613: failed Telegram proof and waiting-on-author status need follow-up.
- #89172: Feishu voice duration behavior needs maintainer review.
- #89395: Feishu SecretRef error propagation needs maintainer review and author follow-up.
- #89416: browser CDP download behavior needs maintainer review and author follow-up.
- #89442: Codex app-server startup timeout behavior needs maintainer review.
- #77017: broad dirty UI/gateway candidate needs maintainer scoping/review.
