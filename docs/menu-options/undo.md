---
sidebar_position: 9
---

# Time Turner (Undo)

This feature is essentially an "Undo Button" for Git. It allows you to undo the last commit with three levels of severity:

### 1. Soft Undo

Cancels the commit but leaves your files **staged**. Best for fixing typos or adding forgotten files.

- **Scenario**: You committed "Added login" but forgot `login.css`.
- **Result**: Files are green (staged), ready to commit again.

### 2. Mixed Undo

Cancels the commit and **unstages** the files. Best for when you want to split work into multiple commits.

- **Scenario**: You committed backend and frontend work together but want to separate them.
- **Result**: Files are red (modified), keeping your work but not staged.

### 3. Hard Undo

**Destroys** the commit and all changes. Reverts to the previous state.

- **Scenario**: You want to trash the last commit completely.
- **Result**: Everything from that commit is gone forever. **Use with caution!**
