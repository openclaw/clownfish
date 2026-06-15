---
repo: openclaw/openclaw
cluster_id: gitcrawl-8-bulk-plan-20260615-a
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
  - "#89622"
candidates:
  - "#88977"
  - "#89076"
  - "#89077"
  - "#89082"
  - "#89089"
  - "#89113"
  - "#89119"
  - "#89141"
  - "#89221"
  - "#89229"
  - "#89266"
  - "#89270"
  - "#89275"
  - "#89312"
  - "#89458"
  - "#89468"
  - "#89499"
  - "#89539"
  - "#89565"
  - "#89582"
  - "#89592"
  - "#89603"
  - "#89620"
  - "#89622"
  - "#89627"
  - "#89669"
  - "#89699"
  - "#89717"
  - "#90197"
  - "#90219"
  - "#90224"
  - "#90228"
  - "#90262"
  - "#90265"
  - "#90274"
  - "#90278"
  - "#90283"
  - "#90286"
  - "#90289"
  - "#90397"
cluster_refs:
  - "#88977"
  - "#89076"
  - "#89077"
  - "#89082"
  - "#89089"
  - "#89113"
  - "#89119"
  - "#89141"
  - "#89221"
  - "#89229"
  - "#89266"
  - "#89270"
  - "#89275"
  - "#89312"
  - "#89458"
  - "#89468"
  - "#89499"
  - "#89539"
  - "#89565"
  - "#89582"
  - "#89592"
  - "#89603"
  - "#89620"
  - "#89622"
  - "#89627"
  - "#89669"
  - "#89699"
  - "#89717"
  - "#90197"
  - "#90219"
  - "#90224"
  - "#90228"
  - "#90262"
  - "#90265"
  - "#90274"
  - "#90278"
  - "#90283"
  - "#90286"
  - "#90289"
  - "#90397"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89458"
  - "#89592"
canonical_hint: "gitcrawl representative #89622 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 8 on 2026-06-15. Security-signal refs #89458, #89592 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 8

Generated from local gitcrawl run cluster 8 for `openclaw/openclaw`.

Display title:

> fix(agents): skip unreadable Anthropic tool schemas

Cluster shape from gitcrawl:

- total members: 40
- issues: 0
- pull requests: 40
- open candidates in local store: 40
- security-signal refs requiring route_security: #89458, #89592
- representative: #89622, currently open in local store
- latest member update: 2026-06-14T04:46:06.092216Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #88977 fix(agents): tolerate provider tool schema hook failures
- #89076 fix(agent-tools): guard system prompt tool reports
- #89077 fix(agent-runtime): guard provider schema diagnostics
- #89082 fix(agent-runtime): guard tool definition descriptors
- #89089 fix(agent-runtime): guard tool search catalog descriptors
- #89113 fix(agent-runtime): quarantine normalized tool descriptors
- #89119 fix(agent-runtime): guard provider tool diagnostics
- #89141 fix(agents): guard provider tool diagnostic names
- #89221 fix(agents): guard Anthropic tool descriptors
- #89229 fix(llm): guard Anthropic provider tool descriptors
- #89266 fix(doctor): harden runtime tool schema findings
- #89270 fix(agents): sanitize provider tool schema logs
- #89275 fix(agents): quarantine malformed normalized tools
- #89312 fix(agents): guard client tool descriptors
- #89458 [security-signal] fix(agents): guard system prompt tool reports
- #89468 fix(agents): skip unreadable tool-search entries
- #89499 fix(agents): sanitize tool schema quarantine diagnostics
- #89539 fix(agents): cap runtime tool schema list scans
- #89565 fix(agents): harden system prompt tool reporting
- #89582 fix(agents): harden tool search schema catalog
- #89592 [security-signal] fix(agents): guard tool definition schema reads
- #89603 fix(agents): quarantine unreadable tool schemas before normalization
- #89620 fix(agents): guard system prompt schema stats
- #89622 fix(agents): skip unreadable Anthropic tool schemas
- #89627 fix(agents): guard tool parameter schema inlining
- #89669 fix(agents): contain provider schema hook failures
- #89699 fix(agents): snapshot client tool descriptors
- #89717 fix(agents): avoid enumerating wrapped tool descriptors
- #90197 fix(agents): bound runtime tool list projection
- #90219 fix(agents): preserve unreadable tool schemas through wrapping
- #90224 fix(agents): skip unreadable tool search catalog entries
- #90228 fix(agents): guard Anthropic tool schema conversion
- #90262 fix(agents): guard tool definition schemas
- #90265 fix(agents): guard system prompt tool schema stats
- #90274 fix(agents): preserve unreadable wrapped tool schemas
- #90278 fix(providers): skip unreadable Anthropic tool schemas
- #90283 fix(providers): skip unreadable OpenAI completion tool schemas
- #90286 fix(providers): skip unreadable OpenAI responses tool schemas
- #90289 fix(providers): skip unreadable Anthropic payload tool schemas
- #90397 fix(openai): skip unreadable responses tool schemas
