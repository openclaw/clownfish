---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1925-dedupe-only-20260429d"
mode: "autonomous"
run_id: "25142030313"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25142030313"
head_sha: "a0b870a07f2988db4b233d32e6ac2590b6afdb2d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T04:05:51.311Z"
canonical: "https://github.com/openclaw/openclaw/issues/70453"
canonical_issue: "https://github.com/openclaw/openclaw/issues/70453"
canonical_pr: "https://github.com/openclaw/openclaw/pull/72480"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1925-dedupe-only-20260429d

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25142030313](https://github.com/openclaw/clownfish/actions/runs/25142030313)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/70453

## Summary

Autonomous classification only. The original representative #54279 is already closed and fixed on main by hydrated merged PR #71506. The best current open canonical path for the still-live provider guarded-fetch proxy subfamily is #70453 with candidate PR #72480. The remaining live refs split into related Gemini OAuth, Feishu HTTP proxy, memory custom-provider, and WhatsApp startup subfamilies, so no close, merge, or fix PR is planned. Linked PR #39766 is routed separately because a hydrated bot comment alleges an SSRF boundary issue.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

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
| #54279 | keep_closed | skipped | fixed_by_candidate | Closed representative is historical evidence only and must not receive a close action. |
| #39766 | route_security | planned | security_sensitive | Security-shaped SSRF evidence requires central security triage for this exact item. |
| #70453 | keep_canonical | planned | canonical | Best open canonical issue for the live Google LLM ambient-proxy subfamily. |
| #72480 | keep_canonical | planned | canonical | Open candidate PR for #70453 should stay open for maintainer review, not be merged or closed by this dedupe-only job. |
| #41619 | keep_related | planned | related | Related Gemini OAuth login subfamily; not a duplicate of the provider guarded-fetch canonical. |
| #46184 | keep_related | planned | related | Same Gemini CLI OAuth area as #41619, with distinct proxy reproduction details. |
| #42541 | keep_related | planned | related | Related Gemini OAuth follow-up, but not the same root cause as the canonical provider proxy issue. |
| #47884 | keep_related | planned | related | Related memory_search symptom with a different root cause; keep open for a separate narrow follow-up. |
| #48949 | keep_related | planned | related | Related Feishu HTTP proxy subfamily; not covered by #70453 or #71506. |
| #41943 | keep_related | planned | related | Keep open as related Feishu candidate PR requiring maintainer or follow-up repair. |
| #61788 | keep_independent | planned | independent | Independent WhatsApp startup reliability issue outside the Gemini/provider/memory proxy canonical path. |

## Needs Human

- none
