---
repo: openclaw/openclaw
cluster_id: ghcrawl-143798-bug-managed-browser-and-user-browser-attach-both-fail-on-macos-d
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
require_human_for:
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#65125"
candidates:
  - "#47879"
  - "#48037"
  - "#48867"
  - "#62706"
cluster_refs:
  - "#45182"
  - "#45812"
  - "#45889"
  - "#46090"
  - "#46098"
  - "#46483"
  - "#46495"
  - "#47855"
  - "#47879"
  - "#47965"
  - "#48037"
  - "#48043"
  - "#48114"
  - "#48182"
  - "#48867"
  - "#49295"
  - "#51732"
  - "#54636"
  - "#54966"
  - "#59424"
  - "#59624"
  - "#60804"
  - "#60903"
  - "#62706"
  - "#65125"
  - "#65133"
  - "#65434"
  - "#65560"
  - "#65571"
  - "#65740"
  - "#65990"
  - "#66050"
  - "#66097"
  - "#66281"
  - "#66335"
  - "#66353"
  - "#66611"
  - "#66763"
  - "#66981"
  - "#68117"
canonical_hint: "ghcrawl representative #65125 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from ghcrawl run cluster 143798 on 2026-04-25."
---

# GHCrawl Cluster 143798

Generated from local ghcrawl run cluster 143798 for `openclaw/openclaw`.

Display title:

> [Bug]:Managed browser and `user` browser attach both fail on macOS, despite Chrome CDP working manually

Cluster shape from ghcrawl:

- total members: 40
- issues: 39
- pull requests: 1
- open candidates in local store: 4
- representative: #65125, currently closed in local store
- latest member update: 2026-04-25T11:56:54.701Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- #45182 [Bug]: openclaw browser start succeeds and launches Chrome normally, but openclaw browser status fails with a gateway timeout.
- #45812 [Bug]: Browser existing-session profile is inconsistent: sometimes falls back to isolated OpenClaw browser and ignores "do not open new tabs/windows"
- #45889 browser profile="user" times out on macOS even though existing-session Chrome MCP is detected and running
- #46090 [Bug]: built-in browser profile "user" (existing-session / Chrome MCP) fails to attach on macOS even after enabling remote debugging
- #46098 [Feature]: Support Chromium in existing-session browser driver
- #46483 [Bug/Docs]: profile="user" (existing-session) setup unclear — Chrome rejects --remote-debugging-port on default data dir
- #46495 [Bug]: built-in browser profile "user" (existing-session / chrome-mcp) times out on Linux even though Chrome is detected and listening
- #47855 existing-session driver still checks DevToolsActivePort instead of using chrome-devtools-mcp autoConnect (Chrome 146)
- #47965 [Bug]: existing-session browser profile causes gateway crash (zlib segfault during MCP handshake)
- #48043 [Bug]: Chrome User Profile Attach Broken on Windows
- #48114 [Bug] Remote CDP profile fails with browserContext.newPage: Target page, context or browser has been closed after remote browser restart
- #48182 existing-session browser: tool name mismatch with chrome-devtools-mcp + timeout
- #49295 existing-session browser attach hangs while Chrome remote debugging and gateway remain healthy
- #51732 feat(browser): support cdpPort for existing-session profile targeting
- #54636 [Bug]: [Bug]: Managed browser fails to attach to Chrome CDP on Ubuntu Desktop even though DevTools is listening on port 18800
- #54966 [Bug]: existing-session Chrome DevTools MCP user profile times out after remote debugging is allowed on Windows
- #59424 [Bug]: attach-only external CDP profile returns targetId from browser.open, but browser.tabs stays empty and snapshot fails with tab not found
- #59624 [Bug]: GatewayClientRequestError: Error: Chrome CDP websocket for profile "openclaw" is not reachable after start.
- #60804 Browser cannot attach/use healthy local Brave CDP on hardened Debian 13 VPS
- #60903 [Bug]: mcp fail to connect to chrome
- #65125 [Bug]:Managed browser and `user` browser attach both fail on macOS, despite Chrome CDP working manually
- #65133 [Browser][Docker][macOS arm64] Managed profile starts Chrome but fails CDP ready check; manual launch succeeds
- #65434 browser: attachOnly loopback CDP profile falsely reported as not running despite healthy /json/version + working websocket
- #65560 [Feature]: Surface Chrome MCP existing-session failures explicitly instead of generic browser timeout
- #65571 [Bug]: Browser CDP fails on Linux (Elementary OS) - "Failed to start Chrome CDP on port 18800" across versions 2026.4.8, 2026.4.9, 2026.4.10, 2026.4.11
- #65740 [Bug]:  Chrome CDP websocket unreachable after start - macOS ARM64
- #65990 browser: managed Chrome fails with 'CDP websocket for profile openclaw is not reachable after start' while manual CDP works
- #66050 [Bug]: Managed browser fails with "CDP websocket not reachable" even though Chrome is listening
- #66097 [Bug]: attachOnly custom CDP browser profile is reported "not running" even when /json/version is reachable
- #66281 [Bug]: Browser tool cannot attach to Chrome on macOS after update (DevToolsActivePort / CDP attach failures)
- #66335 Browser start fails: Chrome CDP websocket not reachable after launch even though manual CDP works
- #66353 Browser CDP detection fails despite healthy Chrome endpoint
- #66611 # [Bug]: Browser attachOnly profile fails to connect despite Chrome running with CDP
- #66763 existing-session / attachOnly cannot attach to Chrome on macOS even with valid webSocketDebuggerUrl
- #66981 [Bug]: browser failed: timed out. Restart the OpenClaw gateway (OpenClaw.app menubar, or `openclaw gateway`).
- #68117 Browser startup fails: Chrome CDP websocket for profile openclaw is not reachable after start on VPS/Docker

Open candidates:

- #47879 existing-session driver: support configurable Chrome MCP command/args and auto-pass browserUrl from profile cdpUrl
- #48037 [Feature]: Allow custom args for Chrome DevTools MCP server in existing-session profile
- #48867 Bug: profile=user (existing-session) fails on Android Termux - chrome-devtools-mcp stdin parent death
- #62706 [Bug]: Chrome MCP attach fails when OpenClaw passes both --browserUrl and --userDataDir (mutually exclusive), plus intermittent browser status flakiness
