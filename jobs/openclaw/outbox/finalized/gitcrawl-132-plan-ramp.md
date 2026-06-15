---
repo: openclaw/openclaw
cluster_id: gitcrawl-132-plan-ramp
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
  - "#69118"
candidates:
  - "#69118"
  - "#81041"
  - "#81047"
  - "#91157"
cluster_refs:
  - "#69118"
  - "#81041"
  - "#81047"
  - "#91157"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #69118 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 132 on 2026-06-14."
---

# Gitcrawl Cluster 132

Generated from local gitcrawl run cluster 132 for `openclaw/openclaw`.

Display title:

> Claude CLI sessions reset on every turn in group channels due to groupIntro drift in extraSystemPromptHash

Cluster shape from gitcrawl:

- total members: 4
- issues: 2
- pull requests: 2
- open candidates in local store: 4
- representative: #69118, currently open in local store
- latest member update: 2026-06-14T04:46:06.634973Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #69118 Claude CLI sessions reset on every turn in group channels due to groupIntro drift in extraSystemPromptHash
- #81041 [Bug]: `systemPromptHash` in `buildClaudeLiveFingerprint` causes phantom claude-cli session restarts on every turn for chat channels
- #81047 fix(cli-runner): drop volatile systemPromptHash from claude-cli live fingerprint
- #91157 fix: stabilize claude-cli extraSystemPromptHash across group turns (#69118)
