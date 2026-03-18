---
sidebar_position: 4
---

# Usage

Simply run the `bimagic` command in your terminal:

```bash
bimagic
```

:::tip Quick Access

- Press **Ctrl + B** in your terminal to quickly summon the wizard from anywhere!
- You can also use the short alias **wz** (Wizard) for even faster access!

:::

```bash
wz
```

### Command Line Flags

You can use flags to perform specific actions immediately:

- **Clone Repository**:
  ```bash
  bimagic -d "repo-url"
  ```
- **Interactive Clone** (Select specific files/folders to download):
  ```bash
  bimagic -d -i "repo-url"
  ```
- **The Lazy Wizard** (Add + Commit + Push):
  ```bash
  bimagic -z "commit message"
  ```
- **The Crystal Ball** (Show Status Dashboard):
  ```bash
  bimagic -s
  ```
- **The Time Scroll** (Show Git Graph):
  ```bash
  bimagic -g
  ```
- **The Time Turner** (Undo last commit):
  ```bash
  bimagic -u
  ```
- **The Architect** (Summon .gitignore):
  ```bash
  bimagic -a
  ```

### Status Dashboard

At the top of the interface, a status box summarizes:

- Current `GITHUB_USER` and branch
- Ahead/behind counts relative to upstream (if set)
- Working tree state: clean, uncommitted, or conflicts
