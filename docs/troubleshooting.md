---
sidebar_position: 5
---

# Troubleshooting

### Common Issues

1. **"Command not found" after installation**
   - Your bin directory may not be in PATH.
   - Add `export PATH="$HOME/bin:$PATH"` to your shell config file.
   - Run `source ~/.bashrc` or `source ~/.zshrc`.

2. **Permission denied errors**
   - The script might not be executable.
   - Run `chmod +x ~/bin/bimagic` or `sudo chmod +x /usr/local/bin/bimagic`.

3. **GitHub authentication errors**
   - Verify your `GITHUB_USER` and `GITHUB_TOKEN` environment variables are set correctly.
   - Ensure your token has the necessary permissions.

4. **Remote operation failures**
   - Check your internet connection.
   - Verify the repository name is correct.

### Getting Help

If you encounter issues:

1. Check that Git is installed: `git --version`.
2. Verify your environment variables are set: `echo $GITHUB_USER`.
3. Ensure you have a GitHub personal access token with repo permissions.
