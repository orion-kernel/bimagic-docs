---
sidebar_position: 5
---

# File Removal (rm)

The `Remove files/folders (rm)` option lets you select files and folders interactively, with full git integration.

### Features:

- **Interactive Multi-select**: Select one or many files to remove.
- **Git Integration**: Tracked files are removed via `git rm -rf`; untracked via `rm -rf`.
- **Safety Confirmation**: Explicit confirmation before deletion.
- **Smart Detection**: Works whether or not a file is tracked in git.

### How it works:

1. A list of tracked and untracked files is displayed.
2. Use the interactive filter to multi-select entries (**TAB** to select, **ENTER** to confirm).
3. The selection is previewed and you are asked to confirm (y/N).
4. Each selected item is removed appropriately (git-tracked or filesystem).
5. A success message lists removed paths.
