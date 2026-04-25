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
- keep related
- keep independent
- merge candidate
- fix needed
- needs human

Return structured JSON only.
