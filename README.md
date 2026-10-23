# Aion 2 tracker

A progress tracker for Aion 2 with no app: this repo is the database and an AI assistant (Claude Code)
is the interface. You tell it what you did in plain language ("did nightmare twice", "GS is 1650 now",
or paste a screenshot). It keeps your log, works out which dailies and weeklies are still open, plans
sessions around event times, and keeps a sourced knowledge base about the game.

Knowledge, reset times and event schedules are for the **Europe** region.

## Getting started

1. **Install** [Claude Code](https://claude.com/claude-code) (desktop app or CLI) and git. Claude Code
   needs a paid Claude plan.
2. **Fork** this repo on GitHub (if it's private, ask the owner to add you first), then clone your fork:
   ```bash
   git clone git@github.com:<you>/aion2.git
   ```
3. **Open the folder** in Claude Code and type `/setup`. It asks a few questions (character, server,
   membership, which content you skip), creates your folder under `players/`, and shows you around.

## Day to day

| Say | What happens |
|---|---|
| "did nightmare twice", "GS 1700 now", a screenshot | Logged, character file updated, committed |
| `/today` | Open dailies/weeklies, events in the next hours, next resets |
| `/plan 2h` | A session plan around fixed-time events and open routines |
| `/todo`, `/todo <task>` | In-game reminders |
| `/review` | Weekly summary |
| `/verify` | Re-check knowledge against newer sources, turn open questions into in-game checks |
| `/backlog` | Ideas for the tracker itself |

Any game question works too ("which Arcana should I aim for?"): answers come from `knowledge/`, with
how confident they are.

## Layout

| Path | What | Whose |
|---|---|---|
| `players/<player>/` | Account, characters, log, goals, todos | One player each; never edit someone else's |
| `routines.yaml` | Reset rules and trackable routines | Shared |
| `knowledge/` | Game facts with sources and tags (`in-game`, `guide`, `patch`) | Shared |
| `.claude/skills/` | The `/commands` above, as plain instructions | Shared |
| `CLAUDE.md` | The rules the assistant follows | Shared |
| `share/` | HTML pages published as Claude Artifacts | Owner listed in `CLAUDE.md` |

`CLAUDE.local.md` (not committed) names the active player on this computer.

## Staying in sync and contributing

Your fork keeps the original author's player folder: leave it alone and pulls never conflict.

```bash
git remote add upstream https://github.com/christophhapple/aion2.git
```

```bash
git pull upstream main
```

What you observe in-game is the most valuable thing here. To send knowledge or skill improvements back,
put only shared files (`knowledge/`, `routines.yaml`, `.claude/skills/`, `CLAUDE.md`) on a branch and
open a pull request; keep your `players/` folder out of it.

## Other AI assistants

Everything is Markdown, YAML and git, so any assistant that can read and write files and run git can
use it. `AGENTS.md` points it to `CLAUDE.md`; skills that don't load automatically can be run by saying
"follow `.claude/skills/today/SKILL.md`". Claude-only extras don't carry over: the published share
pages (and their respawn database), scheduled tasks, and the assistant's personal memory.
