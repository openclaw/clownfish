# Plan Mode

Produce a plan only. Do not call mutating `gh` commands.

Allowed read commands include:

- `gh issue view`
- `gh pr view`
- `gh pr checks`
- `gh pr diff`
- `gh api` read endpoints

For each item, decide one action:

- keep canonical
- close duplicate
- close superseded
- close fixed by candidate
- keep related
- keep independent
- merge candidate
- fix needed
- needs human

Use the same action fields as execute mode when possible: `classification`, `target_kind`, `target_updated_at`, `canonical`, `duplicate_of`, `candidate_fix`, `evidence`, and a stable `idempotency_key`. In plan mode these are recommendations only.

Return structured JSON only.
