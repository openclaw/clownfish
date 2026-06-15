---
repo: openclaw/openclaw
cluster_id: gitcrawl-9-bulk-plan-20260615-a
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
  - "#89463"
candidates:
  - "#89006"
  - "#89013"
  - "#89016"
  - "#89031"
  - "#89042"
  - "#89052"
  - "#89056"
  - "#89149"
  - "#89159"
  - "#89253"
  - "#89263"
  - "#89280"
  - "#89353"
  - "#89378"
  - "#89381"
  - "#89384"
  - "#89404"
  - "#89406"
  - "#89413"
  - "#89418"
  - "#89429"
  - "#89437"
  - "#89451"
  - "#89463"
  - "#89493"
  - "#89513"
  - "#89559"
  - "#89579"
  - "#89619"
  - "#89686"
  - "#89769"
  - "#90016"
  - "#90032"
  - "#90059"
  - "#90064"
  - "#90195"
  - "#90238"
  - "#90311"
  - "#90386"
  - "#91293"
cluster_refs:
  - "#89006"
  - "#89013"
  - "#89016"
  - "#89031"
  - "#89042"
  - "#89052"
  - "#89056"
  - "#89149"
  - "#89159"
  - "#89253"
  - "#89263"
  - "#89280"
  - "#89353"
  - "#89378"
  - "#89381"
  - "#89384"
  - "#89404"
  - "#89406"
  - "#89413"
  - "#89418"
  - "#89429"
  - "#89437"
  - "#89451"
  - "#89463"
  - "#89493"
  - "#89513"
  - "#89559"
  - "#89579"
  - "#89619"
  - "#89686"
  - "#89769"
  - "#90016"
  - "#90032"
  - "#90059"
  - "#90064"
  - "#90195"
  - "#90238"
  - "#90311"
  - "#90386"
  - "#91293"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89006"
  - "#89013"
  - "#89042"
  - "#89056"
  - "#89353"
  - "#89378"
  - "#89381"
  - "#89384"
  - "#89404"
  - "#89406"
  - "#89413"
  - "#89418"
  - "#89429"
  - "#89437"
  - "#89451"
  - "#89463"
  - "#90064"
  - "#90386"
canonical_hint: "gitcrawl representative #89463 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 9 on 2026-06-15. Security-signal refs #89006, #89013, #89042, #89056, #89353, #89378, #89381, #89384, #89404, #89406, #89413, #89418, #89429, #89437, #89451, #89463, #90064, #90386 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 9

Generated from local gitcrawl run cluster 9 for `openclaw/openclaw`.

Display title:

> fix(plugins): quarantine unreadable plugin tools

Cluster shape from gitcrawl:

- total members: 40
- issues: 0
- pull requests: 40
- open candidates in local store: 40
- security-signal refs requiring route_security: #89006, #89013, #89042, #89056, #89353, #89378, #89381, #89384, #89404, #89406, #89413, #89418, #89429, #89437, #89451, #89463, #90064, #90386
- representative: #89463, currently open in local store
- latest member update: 2026-06-14T04:46:06.095258Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89006 [security-signal] fix(agents): quarantine invalid session custom tools
- #89013 [security-signal] fix(agents): materialize OpenAI tool schemas
- #89016 fix(agents): guard OpenAI transport tool descriptors
- #89031 fix(plugins): guard plugin tool descriptor accessors
- #89042 [security-signal] fix(agents): harden bundle MCP catalog projection
- #89052 fix(agents): guard MCP inventory display fields
- #89056 [security-signal] fix(mcp): validate plugin tool schemas
- #89149 fix(agents): validate extension tool names
- #89159 fix(plugin-sdk): validate tool plugin names
- #89253 fix(plugins): guard runtime tool descriptors
- #89263 fix(plugin-sdk): reject malformed static tool descriptors
- #89280 fix(agents): skip unreadable MCP catalog tools
- #89353 [security-signal] fix(plugin-sdk): guard provider schema inspection
- #89378 [security-signal] fix(agents): guard OpenAI tool schema conversion
- #89381 [security-signal] fix(plugin-sdk): guard provider tool schema traversal
- #89384 [security-signal] fix(plugins): isolate unreadable plugin tool descriptors
- #89404 [security-signal] fix(agents): snapshot SDK custom tools safely
- #89406 [security-signal] fix(agents): quarantine unreadable extension tools
- #89413 [security-signal] fix(openai): quarantine unreadable projected tools
- #89418 [security-signal] fix(anthropic): quarantine invalid projected tools
- #89429 [security-signal] fix(plugin-sdk): quarantine invalid provider tool schemas
- #89437 [security-signal] fix(google): quarantine invalid tool declarations
- #89451 [security-signal] fix(google): quarantine invalid extension tool schemas
- #89463 [security-signal] fix(plugins): quarantine unreadable plugin tools
- #89493 fix(mcp): quarantine invalid plugin tool schemas
- #89513 fix(agents): ignore unreadable session tool metadata
- #89559 fix(plugins): harden plugin tool shape reads
- #89579 fix(agents): harden code mode MCP schema docs
- #89619 fix(agents): wrap bundle MCP schema setup errors
- #89686 fix(agents): quarantine invalid bundle MCP tools
- #89769 fix(agents): guard tool inventory metadata
- #90016 fix(plugins): isolate cached tool descriptor names
- #90032 fix(plugins): isolate tool metadata projection
- #90059 fix(plugins): isolate tool metadata rows
- #90064 [security-signal] fix(plugins): isolate unreadable tool registrations
- #90195 fix(plugins): guard plugin tool descriptor reads
- #90238 fix(plugins): skip unreadable tool descriptor cache entries
- #90311 fix(mcp): quarantine unreadable plugin tool schemas
- #90386 [security-signal] fix(mcp): skip unreadable plugin tools
- #91293 fix(agents): snapshot session tool definitions
