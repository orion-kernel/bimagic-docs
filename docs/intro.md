---
sidebar_position: 1
---

# Introduction

<p align="center">
  <img width="400" style={{borderRadius: '12px'}} alt="Bimagic Logo" src="/img/bimlogo.png" />
</p>

<p align="center">By Bimbok and adityapaul26</p>

A powerful Bash-based Git automation tool that simplifies your GitHub workflow with an interactive menu system.

## Overview

Bimagic is an interactive command-line tool that streamlines common Git operations, making version control more accessible through a user-friendly menu interface. It handles repository initialization, committing, branching, and remote operations with GitHub integration using personal access tokens.

## Sample

<img width="800" style={{borderRadius: '12px'}} height="450" alt="Image" src="/img/2026-03-11-191645_hyprshot.png" />
<p align="center">bimagic in a terminal (kitty)</p>

<img width="800" style={{borderRadius: '12px'}} height="450" alt="Image" src="/img/2026-03-11-191744_nvim.png" />
<p align="center">bimagic in neovim</p>

## Features

### Core Operations

- **Interactive Interface**: Intuitive menu-driven command-line experience.
- **Commit Management**: Streamlined staging, committing, and undoing ("Time Turner") with multi-select revert support.
- **Branching & Merging**: Simplified branch management and merging with automated conflict detection.
- **Stash Management**: Full support for stash operations including push, pop, list, and clear.
- Shallow clone support (--depth)

### Repository Management

- **Secure Integration**: GitHub authentication via personal access tokens.
- **Automated Initialization**: Rapid setup and repository initialization.
- **Smart Cloning**: Support for both standard and interactive repository selection.
- **The Architect**: Integrated `.gitignore` generator for professional project setup.
- **Safety**: Automated `master`-to-`main` branch renaming and safe file removal with Git integration.

### Analysis & Visualization

- **Status Dashboard**: Real-time overview of branch status, ahead/behind counts, and uncommitted changes.
- **Visual Commit Graph**: High-quality "pretty git log" for clear history visualization.
- **Contributor Stats**: Detailed project contribution insights with custom time-range filtering.
- **Theming**: Dynamic themed progress bar for cloning

### Customization

- **Theming Engine**: Full UI customization with support for ANSI and Hex color codes.
