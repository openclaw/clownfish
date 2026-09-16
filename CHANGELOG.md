# Changelog

## Unreleased

- Remove executor-created temporary workspaces after reporting, including blocked and failed exits, while preserving operator work directories. Thanks @SebTardif (#327).
- Clean up requeue artifact downloads on success and failure, and terminate stalled downloads with a configurable deadline. Thanks @SebTardif (#320, #322).
- Bound planner and result-review subprocesses with configurable deadlines, preserving unvalidated output separately and reporting action-free blocked results on timeout. Thanks @SebTardif (#313).
