# Aion 2 tracker

A progress tracker for Aion 2 with no app: this repo is the database and an AI assistant (Claude Code)
is the interface. You tell it what you did in plain language ("did nightmare twice", "GS is 1650 now",
or paste a screenshot). It keeps your log, works out which dailies and weeklies are still open, plans
sessions around event times, and keeps a sourced knowledge base about the game.

Knowledge, reset times and event schedules are for the **Europe** region.

## Getting started

1. **Install** [Claude Code](https://claude.com/claude-code) (desktop app or CLI) and git. Claude Code
   needs a paid Claude plan.
2. **Get access:** ask the owner to add you as a collaborator (GitHub → the repo → Settings →
   Collaborators), accept the invite from your email or GitHub notifications, then clone:
   ```bash
   git clone git@github.com:christophhapple/aion2.git
   ```
3. **Open the folder** in Claude Code and type `/setup`. It asks a few questions (character, server,
   membership, which content you skip), creates your folder under `players/`, and shows you around.

Everyone works in this one repo, no forks: each player has a folder under `players/`, can read everyone
else's (that's what co-op planning uses) and only writes their own. The assistant pulls before it shows
anything and pushes after every change, so you always see each other's current state.

## Day to day

| Say | What happens |
|---|---|
| "did nightmare twice", "GS 1700 now", a screenshot | Logged, character file updated, committed |
| `/today` | Open dailies/weeklies, events in the next hours, next resets |
| `/plan 2h` | A session plan around fixed-time events and open routines |
| `/today with kai`, `/plan 2h with kai` | Co-op: both players' open routines, and what to run together |
| `/todo`, `/todo <task>` | In-game reminders |
| `/review` | Weekly summary |
| `/verify` | Re-check knowledge against newer sources, turn open questions into in-game checks |
| `/backlog` | Ideas for the tracker itself |

Any game question works too ("which Arcana should I aim for?"): answers come from `knowledge/`, with
how confident they are.

## Layout

| Path | What | Whose |
|---|---|---|
| `players/<player>/` | Account, characters, log, goals, todos | One player each; read anyone's, edit only yours |
| `routines.yaml` | Reset rules and trackable routines | Shared |
| `knowledge/` | Game facts with sources and tags (`in-game`, `guide`, `patch`) | Shared |
| `.claude/skills/` | The `/commands` above, as plain instructions | Shared |
| `CLAUDE.md` | The rules the assistant follows | Shared |
| `share/` | HTML pages published as Claude Artifacts | Owner listed in `CLAUDE.md` |

`CLAUDE.local.md` (not committed) names the active player on this computer.

## Contributing

What you observe in-game is the most valuable thing here: say it ("guides say 2 runs a day, but there's
no limit") and it goes into `knowledge/`, tagged `in-game`, for everyone. Changes to shared files
(`knowledge/`, `routines.yaml`, skills, `CLAUDE.md`) land directly on `main` like everything else; for a
bigger change to how the tracker works, talk to each other first.

## Other AI assistants

Everything is Markdown, YAML and git, so any assistant that can read and write files and run git can
use it, including the pull-before / push-after rule. `AGENTS.md` points it to `CLAUDE.md`; skills that don't load automatically can be run by saying
"follow `.claude/skills/today/SKILL.md`". Claude-only extras don't carry over: the published share
pages (and their respawn database), scheduled tasks, and the assistant's personal memory.
