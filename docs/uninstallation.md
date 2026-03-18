---
sidebar_position: 6
---

# Uninstallation

If you ever need to remove Bimagic from your system, you have two options:

### Option 1: Curl Directly (Recommended)

Run the uninstall script directly from GitHub:

```bash
curl -sSL https://raw.githubusercontent.com/Bimbok/bimagic/main/uninstall.sh | bash
```

### Option 2: Manual Uninstallation

1. **Remove the Bimagic script**:

   ```bash
   # Remove from user directory (if installed there)
   rm -f ~/bin/bimagic

   # Remove from system directory (if installed there - requires sudo)
   sudo rm -f /usr/local/bin/bimagic
   ```

2. **Optional: Remove GitHub credentials** from your shell configuration:

   ```bash
   # Edit your shell config file (e.g., ~/.bashrc, ~/.zshrc)
   # Remove lines containing GITHUB_USER and GITHUB_TOKEN
   nano ~/.bashrc  # or ~/.zshrc
   ```

### What the Uninstall Script Does

1. **Finds Installations**: Checks common installation directories (~/bin and /usr/local/bin).
2. **Confirmation**: Asks for confirmation before proceeding.
3. **Removes Bimagic**: Deletes the script and `wz` alias from all found locations.
4. **Cleans Shell Config**: Offers to remove **GITHUB_USER**, **GITHUB_TOKEN**, and the **Ctrl + B** shell integrations from your config files.
5. **Creates Backups**: Creates timestamped backups of modified shell configuration files.

### Safety Features

- Asks for confirmation before removing anything.
- Creates backups of modified configuration files.
- Uses sudo only when necessary (for system directories).
- Provides clear feedback about what's happening.
- Includes timestamped backups to prevent data loss.
