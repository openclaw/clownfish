# Dedupe Instructions

Classify every candidate against the canonical item or canonical family.

Prefer these outcomes:

- `canonical`: best surviving issue/PR for the root cause.
- `duplicate`: same root cause, same user-visible failure, no unique remaining work.
- `related`: same area or symptom family, but meaningfully different root cause or scope.
- `superseded`: PR or issue replaced by a better candidate.
- `fixed_by_candidate`: issue/report is covered by a specific candidate PR or fix path that should own validation.
- `independent`: should not be closed or merged as part of this cluster.
- `needs_human`: ambiguous, risky, changed live state, failing checks, unclear author credit, or broad code delta.

Evidence order:

1. Live GitHub state from `gh`.
2. Issue/PR body and maintainer comments.
3. Changed files and diff shape for PRs.
4. CI status and mergeability.
5. Cluster notes and ghcrawl summaries.

Do not close based on title similarity alone.

When recommending auto-closure, include the canonical or candidate fix ref and the live target `updated_at` value. Missing live state should become `needs_human`, not a close.
