# Execute Mode

Execute only the actions that are explicitly allowed by the job.

Before each mutation:

1. re-fetch live state;
2. check if the action already happened;
3. build an idempotency key;
4. perform the smallest safe mutation;
5. record the before/after state.

Allowed mutation commands may include:

- `gh issue comment`
- `gh issue close`
- `gh issue edit --add-label`
- `gh pr comment`
- `gh pr close`
- `gh pr merge`

Never force-push, rewrite contributor branches, or bypass failing checks unless the job explicitly says so and the policy allows it.

Return structured JSON only.
