---
repo: openclaw/openclaw
cluster_id: ghcrawl-143810-autonomous-smoke
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#45985"
candidates:
  - "#40578"
  - "#41670"
  - "#42083"
  - "#42531"
  - "#45986"
  - "#46069"
  - "#47285"
  - "#56532"
  - "#59048"
  - "#59141"
  - "#62741"
  - "#63413"
  - "#63726"
  - "#65066"
  - "#66913"
  - "#67952"
  - "#68116"
  - "#69707"
  - "#70040"
cluster_refs:
  - "#40578"
  - "#41670"
  - "#42083"
  - "#42531"
  - "#43898"
  - "#45985"
  - "#45986"
  - "#46069"
  - "#47285"
  - "#56070"
  - "#56532"
  - "#59048"
  - "#59141"
  - "#62741"
  - "#63413"
  - "#63682"
  - "#63726"
  - "#65066"
  - "#66913"
  - "#67952"
  - "#68116"
  - "#69707"
  - "#70040"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45985 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143810 on 2026-04-25."
---

# GHCrawl Cluster 143810

Generated from local ghcrawl run cluster 143810 for `openclaw/openclaw`.

Display title:

> fix(memory-lancedb): add encoding_format float for Ollama compatibility

Cluster shape from ghcrawl:

- total members: 23
- issues: 0
- pull requests: 23
- open candidates in local store: 19
- representative: #45985, currently closed in local store
- latest member update: 2026-04-25T17:12:54.199Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #43898 Fix memory-lancedb auto-capture when recall context is injected
- #45985 fix(memory-lancedb): add encoding_format float for Ollama compatibility
- #56070 fix(memory-lancedb): add missing radix to parseInt call
- #63682 fix(memory-lancedb): prevent infinite loop in autoRecall

Open candidates:

- #40578 Feature(memory-lancedb): Agent Scoping #38797
- #41670 fix(embedding): add encoding_format parameter to OpenAI-compatible requests
- #42083 fix(memory-lancedb): skip already-processed messages in auto-capture
- #42531 fix(memory-lancedb): preserve dimensions for baseUrl embeddings
- #45986 fix(memory-lancedb): add encoding_format: float to fix Ollama embedding dimension mismatch
- #46069 fix(memory-lancedb): use float encoding for Ollama embedding compatibility
- #47285 feat(memory-lancedb): native Azure OpenAI support
- #56532 memory-lancedb: add configurable timeout/retry for embedding calls
- #59048 fix(memory-lancedb): force float encoding for local embedding servers
- #59141 fix(memory-lancedb): prefer newer memories for latest queries
- #62741 fix(memory-lancedb): guard against empty embeddings response
- #63413 fix(memory-lancedb): validate CLI search limit to prevent NaN propagation
- #63726 memory-lancedb: isolate per-agent lancedb by agentId
- #65066 fix(memory-lancedb): register runtime for doctor and status
- #66913 fix(memory-lancedb): show full IDs in memory_forget candidate list
- #67952 fix(memory-lancedb): get memory records through ltm list command
- #68116 feat(memory-lancedb): support reindex and drop-index command
- #69707 fix(memory-lancedb): stop forwarding embedding dimensions upstream
- #70040 feat(memory-lancedb): support Chinese memory trigger keywords
