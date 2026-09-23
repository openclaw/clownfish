# Changelog

## Unreleased

- Align duplicate-close planning with the applicator exception while preserving fix-first checks for superseded reports. Thanks @vincentkoc (#309).
- Keep nested backlog helpers within outer cancellation and preserve uncertain dispatch ledgers through workflow failures and replay.
- Remove executor-created temporary workspaces after reporting, including blocked and failed exits, while preserving operator work directories. Thanks @SebTardif (#327).
- Clean up requeue artifact downloads on success and failure, and terminate stalled downloads with a configurable deadline. Thanks @SebTardif (#320, #322).
- Bound GitHub and backlog subprocesses, enforce capacity deadlines across queries, and retain uncertain write outcomes without automatic retries. Thanks @SebTardif (#321, #323, #324, #325, #326, #328, #329, #330, #331).
- Report closed dispatch input pipes as command failures instead of crashing the dispatcher.
- Bound planner and result-review subprocesses with configurable deadlines, preserving unvalidated output separately and reporting action-free blocked results on timeout. Thanks @SebTardif (#313).
