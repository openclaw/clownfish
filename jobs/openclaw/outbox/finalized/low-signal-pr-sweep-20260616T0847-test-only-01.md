---
repo: openclaw/openclaw
cluster_id: low-signal-pr-sweep-20260616T0847-test-only-01
mode: autonomous
triage_policy: low_signal_prs
allowed_actions:
  - comment
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - label
require_human_for:
  - security_sensitive
  - maintainer_signal
  - active_author_followup
  - focused_bug_fix
  - green_checks
  - technical_correctness_judgment
canonical: []
candidates:
  - "#90215"
  - "#90227"
  - "#90266"
  - "#90365"
cluster_refs:
  - "#90215"
  - "#90227"
  - "#90266"
  - "#90365"
security_policy: central_security_only
security_sensitive: false
allow_instant_close: false
allow_low_signal_pr_close: true
allow_fix_pr: false
allow_merge: false
allow_post_merge_close: false
canonical_hint: "No canonical is needed; this is an opt-in low-signal PR cleanup sweep."
notes: "Generated from local gitcrawl open PR data on 2026-06-16T08:47:02.872Z."
---

# Low-Signal PR Sweep 1

Use `instructions/low-signal-prs.md`. This job is not a dedupe cluster.

## Goal

Review only the listed open pull requests. Emit `close_low_signal` with `classification: "low_signal"` only when the PR is boringly clear under the low-signal policy and live GitHub state still has no maintainer signal. Otherwise emit `needs_human`, `keep_related`, or `keep_independent`.

The deterministic applicator will re-fetch live state, reject non-PRs, reject maintainer-authored/reviewed/commented/assigned PRs, and close only planned `close_low_signal` actions.

## Gitcrawl Candidate Signals

### #90215 test: detect file symlink support dynamically in canvas tool test

- author: aniruddhaadak80
- updated: 2026-06-14T20:47:01Z
- score: 1
- signals: test_only
- files: 1
- body excerpt: Replaces the hardcoded Windows skip with a dynamic file symlink capability check, allowing the test to run on Windows systems when Developer Mode or symlink privileges are available. ### Verified Windows Proof The following test execution l
- changed files: extensions/canvas/src/tool.test.ts

### #90227 test: make zalo credentials tests compatible with Windows

- author: aniruddhaadak80
- updated: 2026-06-14T21:58:19Z
- score: 1
- signals: test_only
- files: 1
- body excerpt: Enables running Zalo credentials tests on Windows: 1) by conditionalizing POSIX-specific permission stat mode checks so we only assert them on POSIX platforms, while validating directory/file presence on Windows, and 2) by replacing the har
- changed files: extensions/zalouser/src/zalo-js.credentials.test.ts

### #90266 test: detect file symlink support dynamically in json-file tests

- author: aniruddhaadak80
- updated: 2026-06-14T21:59:49Z
- score: 1
- signals: test_only
- files: 1
- body excerpt: Replaces the hardcoded Windows skip in JSON file helper tests with a dynamic file symlink capability check. If file symlinks are supported by the environment, the tests execute. Otherwise, they skip gracefully, allowing correct platform-spe
- changed files: src/infra/json-file.test.ts

### #90365 test(browser): replace broad win32 skip with dynamic directory symlink check

- author: aniruddhaadak80
- updated: 2026-06-14T22:25:48Z
- score: 1
- signals: test_only
- files: 1
- body excerpt: ### Description Replaced the broad and unconditional `win32` platform check in `output-directories.test.ts` with a dynamic capability check for directory symlink support (`canCreateDirectorySymlinks`). If the capability is not present, the 
- changed files: extensions/browser/src/browser/output-directories.test.ts

