---
repo: openclaw/openclaw
cluster_id: gitcrawl-13539-autonomous-bulk-20260622a
mode: autonomous
allowed_actions:
  - comment
  - label
  - close
  - merge
  - fix
  - raise_pr
blocked_actions:
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#50414"
candidates:
  - "#60256"
cluster_refs:
  - "#37299"
  - "#37605"
  - "#43163"
  - "#43351"
  - "#43937"
  - "#44084"
  - "#44097"
  - "#44920"
  - "#48085"
  - "#49124"
  - "#50280"
  - "#50413"
  - "#50414"
  - "#53746"
  - "#57872"
  - "#59056"
  - "#59968"
  - "#60256"
  - "#60985"
  - "#61028"
  - "#61343"
  - "#62226"
  - "#62738"
  - "#63657"
  - "#63813"
  - "#64137"
  - "#65136"
  - "#65916"
  - "#66016"
  - "#66718"
  - "#66848"
  - "#66942"
  - "#66945"
  - "#67411"
  - "#67597"
  - "#67649"
  - "#67684"
  - "#67774"
  - "#68221"
  - "#69497"
  - "#69547"
  - "#70538"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#27996"
  - "#41764"
  - "#42640"
  - "#42740"
  - "#48280"
  - "#49258"
  - "#50170"
  - "#52569"
  - "#52804"
  - "#54634"
  - "#59301"
  - "#60334"
  - "#60364"
  - "#60799"
  - "#60887"
  - "#60892"
  - "#61617"
  - "#64634"
  - "#65105"
  - "#65464"
  - "#67828"
  - "#67854"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
allow_instant_close: true
allow_fix_pr: true
allow_merge: true
allow_post_merge_close: true
require_fix_before_close: true
canonical_hint: "gitcrawl representative #50414 is closed; worker must verify whether an open canonical should replace it."
notes: "Generated from gitcrawl run cluster 13539 on 2026-06-22. Existing-overlap refs #27996, #41764, #42640, #42740, #48280, #49258, #50170, #52569, #52804, #54634, #59301, #60334, #60364, #60799, #60887, #60892, #61617, #64634, #65105, #65464, #67828, #67854 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 13539

Generated from local gitcrawl run cluster 13539 for `openclaw/openclaw`.

Display title:

> [Bug] cron scheduled jobs fail silently when gateway restarts during job execution

Cluster shape from gitcrawl:

- total members: 64
- issues: 62
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #27996, #41764, #42640, #42740, #48280, #49258, #50170, #52569, #52804, #54634, #59301, #60334, #60364, #60799, #60887, #60892, #61617, #64634, #65105, #65464, #67828, #67854
- representative: #50414, currently closed in local store
- latest member update: 2026-06-18T13:30:25.347214294Z

## Goal

Run one live autonomous classification pass. Classify open candidates only, verify live GitHub state, choose the current canonical issue or PR if the representative is obsolete, and emit only high-confidence planned close/comment/label actions. Closed context refs are evidence only and must not receive close actions.

## Member Inventory

Closed context refs:

- #37299 [Bug]: cron list/run commands throw TypeError in OpenClaw 2026.3.2
- #37605 [Bug]: Cron jobs lost during gateway restart (race condition in persistence)
- #43163 Cron job fails with TypeError: Cannot read properties of undefined (reading 'trim')
- #43351 [Bug] Cron fails to start: TypeError Cannot read properties of undefined (reading 'kind')
- #43937 Cron scheduler stops firing after initial startup catch-up
- #44084 cron list crashes with TypeError: value.slice is not a function when payload.model is an object
- #44097 fix(cron-cli): handle object model in printCronList
- #44920 Cron jobs stuck in 'already-running' state after gateway restart — stale runningAtMs never cleared
- #48085 fix(cron): handle object model format in cron list (#44084)
- #49124 [Bug]: Cron job error state accumulates during host sleep/connectivity loss, creating false failure signals
- #50280 Cron: manual run stuck after job timeout — stale runningAtMs not cleared
- #50413 [Bug] cron scheduled jobs fail silently when gateway restarts during job execution
- #50414 [Bug] cron scheduled jobs fail silently when gateway restarts during job execution
- #53746 Bug: `saveCronStore` overwrites jobs.json from partial in-memory state after restart, causing silent job loss
- #57872 TypeError: Cannot read properties of undefined (reading 'padEnd') in cron table formatter
- #59056 Cron runningAtMs zombie state regression — cleared state returns after gateway restart
- #59968 Bug: `openclaw cron list` throws TypeError: Cannot read properties of undefined (reading 'padEnd')
- #60985 [Bug] Cron jobs immediately fire on gateway restart instead of waiting for next scheduled time
- #61028 Cron jobs fire immediately on gateway restart — per-job timezone (tz) ignored during catch-up evaluation
- #61343 Cron: lastRunAtMs not persisted until Phase 3 — gateway restart causes duplicate job execution
- #62226 [Bug]: TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))
- #62738 Cron tasks in-flight during gateway restart are lost
- #63657 [Bug]: one-shot cron jobs silently lost after gateway restart
- #63813 [Bug]:
- #64137 cron: TypeError: runningAtMs crash on gateway restart (race condition)
- #65136 Task state not reconciled on gateway restart — stale running tasks accumulate
- #65916 Cron engine crashes on startup when job has no state field
- #66016 [Bug]: Cron bug TypeError: Cannot read properties of undefined (reading 'runningAtMs')
- #66718 [Bug] openclaw configure TypeError: Cannot read properties of undefined (reading 'trim')
- #66848 [Bug]: TypeError: Cannot read properties of undefined (reading 'trim')
- #66942 [Bug]: TypeError: Cannot read properties of undefined (reading 'trim')
- #66945 [Bug]: TypeError: Cannot read properties of undefined (reading 'trim')
- #67411 TypeError: Cannot read properties of undefined (reading 'trim') during onboard model setup save phase
- #67597 [Bug]: TypeError: Cannot read properties of undefined (reading 'trim')
- #67649 [Bug]: TypeError: Cannot read properties of undefined (reading 'trim') on QuickStart
- #67684 [Bug]: openclaw onboard Cannot read properties of undefines (reading 'trim')
- #67774 [Bug]:
- #68221 Cron job manual execution fails with TypeError: Cannot read properties of undefined (reading 'startsWith')
- #69497 [Bug]: ◇  Select channel (QuickStart) │  Skip for now TypeError: Cannot read properties of undefined (reading 'trim')
- #69547 [Bug]: cron TypeError: Cannot read properties of undefined (reading 'trim')
- #70538 [Bug]: [BUG] Inconsistent/Recurring TypeError: Cannot read properties of undefined (reading 'trim') during openclaw config / plugin loading.

Open candidates:

- #60256 Cron job reports failure when using env var for Discord channel, even on success

Existing-overlap context refs:

- #27996 Cron scheduler: nextRunAtMs not recomputed after editing cron expr/timezone
- #41764 [Bug] Cron job reports lastError even when message was delivered
- #42640 [Bug]: Cron jobs execute twice after gateway restart (scheduler doesn't check lastRunAtMs)
- #42740 Cron jobs fire spontaneously at wrong time (no restart) — possible DST/UTC boundary bug
- #48280 Cron Scheduler Bug: nextRun shows year 58177, tasks never execute
- #49258 Bug: Cron job state inconsistency - lastDelivered: true but lastRunStatus: error
- #50170 [Bug]: Cron jobs report status: "error" with "Message failed" despite successful Discord delivery
- #52569 [Bug] Cron jobs silently lost after upgrading 2026.3.12 → 2026.3.13 — jobs.json not loaded
- #52804 systemEvent cron jobs fail with TypeError: Cannot read properties of undefined (reading 'trim')
- #54634 Update 2026.3.24 silently drops config when HOME changes
- #59301 Cron: gateway restart loop should pause/defer scheduled jobs
- #60334 [Bug]: 2026.4.2 update rejects legacy config keys and cron jobs.json may require manual backup restore
- #60364 stale_running tasks remain in ledger and cannot be cleared
- #60799 cron: v2026.4.2 silently drops jobs.json (plain-array format) and first add clobbers all data
- #60887 stale_running tasks remain in ledger and cannot be cleared
- #60892 stale_running tasks remain in ledger and cannot be cleared
- #61617 Bug: Cron scheduler triggers duplicate executions for the same job
- #64634 Bug: cron scheduler calculates incorrect nextRunAtMs on job creation
- #65105 Update 2026.4.9 → 4.11 silently wipes channels.discord config and agents.list from openclaw.json
- #65464 Cron lastError persists when later retry delivers successfully
- #67828 Cron edit path fails to re-sync state.nextRunAtMs when schedule.at changes (at-type crons fire at stale cached time)
- #67854 [Bug] Cron Scheduler Not Loading Jobs - Gateway Ignores jobs.json
