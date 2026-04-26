---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-165992-agentic-merge"
mode: "autonomous"
run_id: "24946558493"
run_url: "https://github.com/openclaw/projectclownfish/actions/runs/24946558493"
head_sha: "31f153a47dca02dd784156ba246a0d9568c5e9bc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-04-26T03:04:10.495Z"
canonical: "https://github.com/openclaw/openclaw/issues/41985"
canonical_issue: "https://github.com/openclaw/openclaw/issues/41985"
canonical_pr: null
actions_total: 14
apply_executed: 5
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-165992-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/projectclownfish/actions/runs/24946558493](https://github.com/openclaw/projectclownfish/actions/runs/24946558493)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/41985

## Summary

Kept #41985 as the live canonical issue for the remaining non-image Control UI/WebChat attachment gap. Planned duplicate closeouts only for generic same-scope reports with no distinct remaining work, kept broader UX, download, format-specific, and technical root-cause reports open as related, and attached a narrow new-fix artifact because the hydrated cluster has no PRs and current main still leaves non-image attachments image-only end-to-end.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 14 |
| Applied executions | 5 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41992 | close_duplicate | executed | duplicate | duplicate of the canonical thread |
| #43242 | close_duplicate | executed | duplicate | duplicate of the canonical thread |
| #56298 | close_duplicate | executed | duplicate | duplicate of the canonical thread |
| #63094 | close_duplicate | executed | duplicate | duplicate of the canonical thread |
| #67622 | close_duplicate | executed | duplicate | duplicate of the canonical thread |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #41985 | keep_canonical | planned | canonical | This is the safest surviving user-facing tracker for the unresolved non-image upload gap. |
| #30389 | keep_related | planned | related | It overlaps the file-upload family but still has unique remaining work outside the canonical issue. |
| #30759 | keep_related | planned | related | Its format-specific acceptance scope is useful follow-up detail even though the generic upload gap belongs under #41985. |
| #41992 | close_duplicate | planned | duplicate | High-confidence duplicate of the canonical generic file-upload issue. |
| #43242 | close_duplicate | planned | duplicate | Same surface, same root cause, and no unique remaining work beyond the canonical issue. |
| #47933 | keep_related | planned | related | Safe to keep open as related because it carries a distinct download follow-up. |
| #48700 | keep_related | planned | related | Safer to keep as a related format-specific acceptance thread than collapse it into the canonical issue. |
| #56298 | close_duplicate | planned | duplicate | After removing already-fixed image-only scope, the remaining ask is the same canonical non-image upload problem. |
| #63094 | close_duplicate | planned | duplicate | Same user-visible failure and same root cause as the canonical issue. |
| #67622 | close_duplicate | planned | duplicate | Generic same-scope duplicate of the canonical file-upload tracker. |
| #69185 | keep_related | planned | related | Keep open as related technical scope rather than losing detailed acceptance and configuration guidance. |
| #69447 | keep_related | planned | related | Retain the technical diagnostic thread as related evidence for the eventual fix. |
| #41985 | fix_needed | planned | canonical | The bug/feature gap remains real on current main and needs a new fix path. |
| #41985 | build_fix_artifact | planned | canonical | Prepare a new-fix PR plan for the canonical issue without pretending to patch from an unavailable checkout. |

## Needs Human

- none
