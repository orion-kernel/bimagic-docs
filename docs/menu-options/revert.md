---
sidebar_position: 8
---

# Revert Commit(s)

Revert one or more commits selected via an interactive filter from `git log --oneline`.

### Safety Features:

- **Double confirmation** for `*` (everything) - requires typing "yes".
- **Preview** of what will be deleted before proceeding.
- **Existence check** - only proceeds if files actually exist.
- **Git-aware** - uses `git rm` for tracked files, regular `rm` for untracked files.

### Flow:

1. Select commit(s) to revert (multi-select).
2. Confirm the action (y/N).
3. Reverts run with `git revert --no-edit`.
4. On conflict, resolve then run `git revert --continue`.
