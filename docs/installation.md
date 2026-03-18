---
sidebar_position: 2
---

# Installation

### Automated Installation (Recommended)

Run this one-line command to install Bimagic:

```bash
curl -sSL https://raw.githubusercontent.com/orion-kernel/bimagic/main/install.sh | bash
```

### Installation using npm

You can also install **bimagic** using npm:

```bash
npm i -g bimagic
```

### Quick Access (Keybinding)

The installer automatically sets up a **Ctrl + B** keybinding for **Zsh**, **Bash**, and **Fish** shells. This allows you to summon the Git Wizard from anywhere in your terminal instantly!

- **Zsh**: Uses a custom ZLE widget to ensure a clean UI transition.
- **Bash**: Uses `bind -x` for direct execution.
- **Fish**: Uses `bind \cb` with a repaint command.

_Note: You may need to restart your terminal or source your config file (e.g., `source ~/.zshrc`) after installation for the keybinding to take effect._

### Neovim Integration

You can use Bimagic directly inside Neovim! This integration wraps the CLI tool in a floating terminal window using `toggleterm.nvim` for a seamless workflow.

#### LazyVim / Toggleterm Setup

Create a new plugin file (e.g., `~/.config/nvim/lua/plugins/bimagic.lua`) with the following configuration. This sets up a `<leader>gm` keybinding to launch the wizard in a floating popup.

```lua
return {
  {
    "akinsho/toggleterm.nvim",
    opts = function(_, opts)
      opts.size = 20
      opts.open_mapping = [[<c-\>]]
    end,
    keys = {
      {
        "<leader>gm",
        function()
          local Terminal = require("toggleterm.terminal").Terminal
          local bimagic = Terminal:new({
            cmd = "bimagic", -- This assumes 'bimagic' is in your global PATH
            hidden = true,
            direction = "float",
            float_opts = {
              border = "curved", -- 'single', 'double', 'shadow', 'curved'
              width = 100,
              height = 25,
              title = "  Bimagic Git Wizard ",
            },
            close_on_exit = true,

            on_open = function(term)
              vim.cmd("startinsert!")
              vim.api.nvim_buf_set_keymap(term.bufnr, "n", "q", "<cmd>close<CR>", { noremap = true, silent = true })
            end,
          })
          bimagic:toggle()
        end,
        desc = "Bimagic (Git Wizard)",
      },
    },
  },
}
```

### Manual Installation

1. Clone the repository:

```bash
git clone https://github.com/orion-kernel/bimagic.git
```

2. Make the script executable:

```bash
chmod +x bimagic/bimagic
```

3. Move it to your bin directory:

```bash
# Option 1: For user-local installation (no sudo required)
mkdir -p ~/bin
mv bimagic/bimagic ~/bin/

# Option 2: For system-wide installation (requires sudo)
sudo mv bimagic/bimagic /usr/local/bin/
```

4. Ensure the bin directory is in your PATH:

```bash
export PATH="$HOME/bin:$PATH"  # For user-local installation
```

### Dependencies

- **gum** (required for modern UI and interactive selection)
  - See installation instructions below or use the automated script.
  - If not installed, the tool will not work.
- **Node.js** v16 or higher
- **npm** v8+
