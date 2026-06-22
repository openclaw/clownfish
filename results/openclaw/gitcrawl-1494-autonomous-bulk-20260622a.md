---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-1494-autonomous-bulk-20260622a"
mode: "autonomous"
run_id: "27958788026"
workflow_run_id: "27958788026"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27958788026"
head_sha: "6df12705136a41273cee813d009a7bf18ef7423f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-22T14:29:17.107Z"
canonical: null
canonical_issue: "https://github.com/openclaw/openclaw/issues/69943"
canonical_pr: null
actions_total: 18
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-1494-autonomous-bulk-20260622a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27958788026](https://github.com/openclaw/clownfish/actions/runs/27958788026)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/69943

## Summary

Live preflight says the only non-security actionable candidate, #71257, is already closed. Current main at 8744e86e674e4308021ba44cfcb438348479a9ee still writes raw extracted session transcript text into session-memory artifacts: src/hooks/bundled/session-memory/transcript.ts:6-50 returns/pushes unsanitized text and src/hooks/bundled/session-memory/handler.ts:272-275 writes it under Conversation Summary. Security-sensitive hydrated refs are quarantined individually; the non-security repair lane should replace the closed/uneditable non-security contributor PRs with a narrow credited fix artifact.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 18 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#71257",
  "source_refs": [
    "#71257",
    "#73768",
    "#69943",
    "#71031",
    "#50584",
    "#69961",
    "#15828",
    "#26293",
    "#31266",
    "#40418",
    "#42112",
    "#45608",
    "#56072",
    "#62678",
    "#68751",
    "#84099"
  ],
  "repair_strategy": "replace_uneditable_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Replace the closed/uneditable non-security session-memory sanitizer PRs with a narrow credited fix that sanitizes model/runtime artifacts before session-memory persists transcript excerpts, without adding synthesis/config rewrites or changelog edits. Security-sensitive #69961 is routed separately and is not an executable repair source.",
  "pr_title": "fix(session-memory): sanitize model artifacts before saving memory",
  "pr_body": "## What Problem This Solves\n\nSession-memory currently extracts recent user/assistant transcript text and writes it into `memory/YYYY-MM-DD-*.md` without stripping model/runtime artifacts. Current main still pushes raw text in `src/hooks/bundled/session-memory/transcript.ts` and writes it under `## Conversation Summary` in `src/hooks/bundled/session-memory/handler.ts`, so chat-template tokens, malformed tool-call blocks, NO_REPLY markers, directive tags, and media directives can be carried into later context.\n\nRefs: #69943, #71031. Replacement for the closed contributor PRs #71257 and #73768. Security-sensitive #69961 is routed separately and is not used as an executable source PR here.\n\n## Why This Change Was Made\n\nThe prior non-security PRs contain useful work but cannot be landed directly: #71257 is closed, uneditable, dirty, and contains generated tsgo cache artifacts; #73768 is narrower than the bug class and had failing/check and changelog-conflict findings. This replacement should keep only the narrow sanitizer behavior, reuse existing repo-owned helpers where practical, and address the review-bot findings from those PRs.\n\n## User Impact\n\nSession-memory files keep useful conversation content while avoiding raw model scaffolding and transport/runtime directives that can degrade future sessions. The change should not add new config, LLM synthesis, daily-memory duplication, or broad memory-policy behavior.\n\n## Evidence\n\nPlanned validation:\n- `pnpm test src/hooks/bundled/session-memory/transcript.test.ts src/hooks/bundled/session-memory/handler.test.ts`\n- `pnpm check:changed`\n\nContributor credit: Thanks @SweetSophia for source PR #71257 and @YB0y for source PR #73768; this PR carries those ideas forward with attribution in a maintainable branch.",
  "likely_files": [
    "src/hooks/bundled/session-memory/transcript.ts",
    "src/hooks/bundled/session-memory/transcript.test.ts",
    "src/hooks/bundled/session-memory/handler.test.ts",
    "src/security/external-content.ts"
  ],
  "validation_commands": [
    "pnpm test src/hooks/bundled/session-memory/transcript.test.ts src/hooks/bundled/session-memory/handler.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Credit @SweetSophia for source PR https://github.com/openclaw/openclaw/pull/71257 and its session-memory sanitizer tests/shape.",
    "Credit @YB0y for source PR https://github.com/openclaw/openclaw/pull/73768 and the existing-special-token-helper direction.",
    "Do not credit bots; carry contributor attribution in the replacement PR body and release-note context.",
    "Do not use #69961 as a source PR in the executable fix artifact because hydrated preflight marks it security_sensitive=true and label-blocked; central security triage owns that exact ref."
  ],
  "source_job": "jobs/openclaw/inbox/gitcrawl-1494-autonomous-bulk-20260622a.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#15828",
    "#40418",
    "#45608",
    "#50584",
    "#68751",
    "#69943",
    "#69961"
  ],
  "needs_human": [],
  "repair_status": "opened",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| open_fix_pr | opened | https://github.com/openclaw/openclaw/pull/95791 | clownfish/gitcrawl-1494-autonomous-bulk-20260622a |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #95791 | merge_canonical | blocked | fix_pr | checks are not clean: Real behavior proof: CANCELLED, Real behavior proof: CANCELLED, checks-node-compact-small-whole-2: FAILURE, ci-timings-summary: IN_PROGRESS |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #95791 | merge_canonical | blocked | checks are not clean: Real behavior proof: CANCELLED, Real behavior proof: CANCELLED, checks-node-compact-small-whole-2: FAILURE, ci-timings-summary: IN_PROGRESS |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #15828 | route_security | planned | security_sensitive | Central OpenClaw security triage owns this exact security-sensitive item. |
| #40418 | route_security | planned | security_sensitive | Central OpenClaw security triage owns this exact security-sensitive item. |
| #45608 | route_security | planned | security_sensitive | Central OpenClaw security triage owns this exact security-sensitive item. |
| #50584 | route_security | planned | security_sensitive | Central OpenClaw security triage owns this exact security-sensitive item. |
| #68751 | route_security | planned | security_sensitive | Central OpenClaw security triage owns this exact security-sensitive item. |
| #69943 | route_security | planned | security_sensitive | Central OpenClaw security triage owns this exact security-sensitive item. |
| #69961 | route_security | planned | security_sensitive | Central OpenClaw security triage owns this exact security-sensitive item. |
| #26293 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. |
| #31266 | keep_closed | skipped | related | Already closed; no mutation is valid. |
| #42112 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. |
| #56072 | keep_closed | skipped | duplicate | Already closed; no mutation is valid. |
| #62678 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. |
| #71031 | keep_closed | skipped | duplicate | Already closed; no mutation is valid. |
| #71257 | keep_closed | skipped | superseded | Already closed; useful idea should be carried into a replacement fix artifact with contributor credit. |
| #73768 | keep_closed | skipped | superseded | Already closed; useful narrow helper reuse should be credited in the replacement fix artifact. |
| #84099 | keep_closed | skipped | duplicate | Already closed; no mutation is valid. |
| cluster:gitcrawl-1494-autonomous-bulk-20260622a | fix_needed | planned |  | No viable open canonical PR remains; the remaining non-security repair is narrow and fix-PR enabled. |
| cluster:gitcrawl-1494-autonomous-bulk-20260622a | build_fix_artifact | planned |  | A single narrow executable artifact covers the remaining non-security sanitizer lane while preserving contributor credit for the usable non-security source PRs. |

## Needs Human

- none
