---
sidebar_position: 1
---

# Clone Repository

This feature allows you to clone a repository with two modes, both featuring a **themed progress bar** to show real-time download status

### Standard Clone

Perform a full or shallow `git clone` of the target repository.

- Usage from CLI: `bimagic -d "repo-url" [--depth <number>]`

### Interactive Clone (Sparse Checkout)

If you only need specific files or folders from a large repository, this mode allows you to:

1. Download the repository metadata without file contents.
2. Select specific files/folders interactively.
3. Download only the selected items into your local directory.

**CLI Usage**: `bimagic -d -i "repo-url"`
