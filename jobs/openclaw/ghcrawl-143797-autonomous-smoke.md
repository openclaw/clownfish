---
repo: openclaw/openclaw
cluster_id: ghcrawl-143797-autonomous-smoke
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
  - "#45560"
candidates:
  - "#45222"
  - "#46008"
  - "#48360"
  - "#51357"
  - "#51469"
  - "#51679"
  - "#52336"
  - "#61554"
  - "#67985"
  - "#68642"
  - "#68944"
cluster_refs:
  - "#44714"
  - "#44760"
  - "#45127"
  - "#45222"
  - "#45504"
  - "#45560"
  - "#45750"
  - "#45918"
  - "#46008"
  - "#46087"
  - "#46096"
  - "#46218"
  - "#46256"
  - "#46316"
  - "#46769"
  - "#47103"
  - "#47265"
  - "#47813"
  - "#48167"
  - "#48168"
  - "#48297"
  - "#48349"
  - "#48360"
  - "#48461"
  - "#48936"
  - "#48954"
  - "#49045"
  - "#49118"
  - "#49201"
  - "#51357"
  - "#51469"
  - "#51679"
  - "#52336"
  - "#54616"
  - "#56254"
  - "#61554"
  - "#64407"
  - "#67985"
  - "#68642"
  - "#68944"
allow_instant_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "ghcrawl representative #45560 is closed; worker must verify whether an open canonical should replace it before any close action."
notes: "Autonomous smoke job derived from ghcrawl run cluster 143797 on 2026-04-25."
---

# GHCrawl Cluster 143797 Autonomous Smoke

Display title:

> local gateway CLI handshake fails (probe timeout / gateway call closed 1000) even though gateway is running and WS challenge is reachable

Run one live autonomous smoke pass. Classify the open candidate issues, verify live GitHub state, choose the current canonical issue if the closed representative is obsolete, and emit only high-confidence close/comment/label actions.

Do not create a fix PR, merge a PR, or close anything unless the canonical path is explicit and the item is a direct duplicate of that path. If a candidate PR is discovered through linked refs, inspect automated reviewer comments from Greptile, Codex, Asile, CodeRabbit, Copilot, and similar bots before making a merge or closeout recommendation.

Open candidates:

- #45222 Intermittent local gateway websocket handshake failures on loopback
- #46008 openclaw devices list bug
- #48360 gateway probe false-negative timeout/close on loopback while gateway is healthy
- #51357 CLI `probe` command consistently times out despite healthy gateway
- #51469 CLI gateway handshake timeout too short for cold-start module compilation
- #51679 local loopback gateway WS handshake times out / closes before connect for some CLI RPCs
- #52336 browser automation intermittently fails with gateway closed
- #61554 WebSocket handshake timeout when executing `openclaw cron list`
- #67985 placeholder bug report
- #68642 all CLI commands hang indefinitely
- #68944 CLI commands hang at WebSocket gateway handshake
