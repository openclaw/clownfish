---
repo: openclaw/openclaw
cluster_id: gitcrawl-1238-intake-20260621
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
  - "#94269"
candidates:
  - "#94269"
cluster_refs:
  - "#94269"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94404"
  - "#94461"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #94269 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1238 on 2026-06-21. Existing-overlap refs #94404, #94461 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1238

Generated from local gitcrawl run cluster 1238 for `openclaw/openclaw`.

Display title:

> Z.ai static catalog models resolve without baseUrl and fall through to OpenAI API

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #94404, #94461
- representative: #94269, currently open in local store
- latest member update: 2026-06-19T02:13:00.536015Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94269 Z.ai static catalog models resolve without baseUrl and fall through to OpenAI API

Existing-overlap context refs:

- #94404 fix(zai): fall back to default baseUrl when template lacks one for catalog models
- #94461 [security-signal] fix(zai): fall back to manifest baseUrl for synthesized GLM-5 models
