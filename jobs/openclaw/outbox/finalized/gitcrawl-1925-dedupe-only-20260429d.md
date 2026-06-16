---
repo: openclaw/openclaw
cluster_id: gitcrawl-1925-dedupe-only-20260429d
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
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#54279"
candidates:
  - "#41619"
  - "#46184"
  - "#47884"
  - "#48949"
  - "#61788"
  - "#70453"
cluster_refs:
  - "#38503"
  - "#41126"
  - "#41619"
  - "#41820"
  - "#42020"
  - "#42176"
  - "#42311"
  - "#44818"
  - "#44891"
  - "#46184"
  - "#46934"
  - "#47547"
  - "#47884"
  - "#48436"
  - "#48949"
  - "#53007"
  - "#54279"
  - "#54398"
  - "#55754"
  - "#56901"
  - "#58255"
  - "#58807"
  - "#59101"
  - "#61480"
  - "#61788"
  - "#61799"
  - "#61825"
  - "#62181"
  - "#62839"
  - "#62930"
  - "#63087"
  - "#64296"
  - "#64636"
  - "#64991"
  - "#67770"
  - "#70149"
  - "#70453"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: false
canonical_hint: "gitcrawl representative #54279 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 1925 on 2026-04-30."
---

# Gitcrawl Cluster 1925

Generated from local gitcrawl run cluster 1925 for `openclaw/openclaw`.

Display title:

> [Bug]: memory_search with Gemini embeddings does not honor HTTP(S) proxy in 2026.3.23-2

Cluster shape from gitcrawl:

- total members: 37
- issues: 37
- pull requests: 0
- open candidates in local store: 6
- representative: #54279, currently closed in local store
- latest member update: 2026-04-28T21:55:43.818721377Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #38503 Memory Search: JSON 配置缺陷 + 缺少代理支持导致中国大陆无法使用
- #41126 [Bug]: v2026.3.8 HTTP client does not respect system proxy — causes 403 "This model is not available in your region" on OpenRouter
- #41820 [Bug]: Axios requests fail with 400 error when HTTPS_PROXY is set (Plain HTTP request was sent to HTTPS port)
- #42020 openai-codex OAuth token exchange can ignore proxy env in proxy/TUN setups
- #42176 openai-codex OAuth login does not honor proxy env for oauth/token exchange and refresh
- #42311 openai-codex runtime requests can ignore proxy env unless NODE_USE_ENV_PROXY=1; backend-api requests also need browser-like headers in some proxy setups
- #44818 [Bug]: .env proxy (HTTPS_PROXY) works for Gemini web search but not for Gemini memory embedding
- #44891 [Bug]: ":"memory embeddings: batch start","_meta":{"runtime":"node","runtimeVersion":"22.22.0","hostname":"unknown",
- #46934 memory_search with Gemini embeddings fails behind proxy because memory remote fetch ignores env proxy (fetchWithSsrFGuard strict mode)
- #47547 [Bug]: WhatsApp channel does not honor HTTPS_PROXY: linking fails behind corporate proxy (ENOTFOUND web.whatsapp.com) on Windows
- #48436 [Bug]: Gemini search doesn't work with HTTP proxy (Node.js fetch doesn't respect HTTP_PROXY env vars)
- #53007 Memory Search fails with `fetch failed` when behind proxy (HTTP_PROXY not respected)
- #54279 [Bug]: memory_search with Gemini embeddings does not honor HTTP(S) proxy in 2026.3.23-2
- #54398 [Bug]: memorySearch remote embeddings fail with `fetch failed` even when  provider API is reachable
- #55754 Bug: local memory remains 0 files/0 chunks on macOS x64 across builtin+Ollama and QMD paths
- #56901 Bug: Memory Index Fails for Main Agent with 'fetch failed' Error
- #58255 Gemini memory indexing fails with fetch failed in WSL2/OpenClaw 2026.3.28, while direct Node fetch to Gemini embeddings succeeds
- #58807 [Bug]: falling back to HTTP. error=Error: connect ENETUNREACH
- #59101 memory index --force crashes with EMFILE: too many open files, watch across builtin, Ollama, and QMD backends on macOS
- #61480 web_fetch ignores HTTP_PROXY environment variables - dispatcherPolicy defaults to direct
- #61799 [Bug]: 【Bug修复】OpenClaw Gateway模式下newapi自定义提供商报network connection error
- #61825 [Bug]: WhatsApp login handshake times out when OpenClaw is used behind env-var proxy, while curl/browser succeed
- #62181 globalThis.fetch (undici) does not honor HTTP_PROXY/HTTPS_PROXY env vars
- #62839 [Bug]: openclaw update persists HTTP_PROXY into systemd service, breaking Feishu integration
- #62930 Internal HTTP client (memory-core embedding) ignores HTTP_PROXY / HTTPS_PROXY env vars
- #63087 [Bug] Memory index command ignores proxy environment variables
- #64296 [Bug]: WhatsApp Web connection ended before fully opening
- #64636 [Bug]: Version 2026.4.9 ignore the system environment proxy variables (HTTP_PROXY, etc.)
- #64991 v2026.4.10 has issue with Gemini oauth it cant communicate with the agent
- #67770 skills install ignores HTTPS_PROXY — breaks ClawHub in egress-locked clusters
- #70149 [Bug]: WhatsApp login times out over ambient proxy-agent, while explicit HttpsProxyAgent can open the same WSS endpoint

Open candidates:

- #41619 [Bug]: google-gemini-cli-auth can not complete google gemini auth even the account has access privilege to gemini.
- #46184 [Bug]: google-gemini-cli OAuth fails with TypeError: fetch failed behind HTTP proxy on macOS (even with pinDns: false & 60s timeout)
- #47884 [Bug]: memory_search tool fails with "fetch failed" despite embedding provider configured
- #48949 🐛 Feishu channel fails with tenant_access_token error when HTTP proxy is configured
- #61788 WhatsApp WebSocket ETIMEDOUT on connection after login
- #70453 [Bug]: CLI and WebUI silent failure/hang when calling Gemini via HTTP proxy (v2026.4.21)
