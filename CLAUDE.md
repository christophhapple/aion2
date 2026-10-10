# Aion 2 tracker

Personal progress tracker for Aion 2 (region: Europe, server: Nania). There is no app: this repo is the
database and Claude is the interface. The user talks in plain language ("did nightmare twice", "GS is
1080 now"), Claude reads and edits the files below and commits.

## Files

| Path | Holds | Format |
|---|---|---|
| `characters/<name>.md` | One file per character: class, level, gear score, notes | Markdown, key facts in a table |
| `routines.yaml` | Reset rules + the dailies/weeklies to track | YAML |
| `log/YYYY-MM.md` | Append-only record of what was done | Markdown list, one line per entry |
| `goals.md` | Farming/progress targets with counts | Markdown table |
| `knowledge/` | Game info (researched or told by the user), always with source + date | Markdown |

## Rules

- **Never invent game data.** Reset times, entry caps, dungeon names etc. come from the user, the game
  (screenshots), or web research recorded in `knowledge/` with sources. Mark anything unconfirmed as such.
- **Completion = log entry, not a checkbox.** Never "reset" files. Open/done status is computed by
  comparing log entries to the reset rules in `routines.yaml`.
- **Log line format** (newest at the bottom, file per month in local time):
  `- 2026-10-10T18:30+02:00 · Dhamira · nightmare ×2 · optional note`
  Use the routine `id` from `routines.yaml`; for non-routine events use a short free-text tag
  (`gear-score 1000→1050`, `level 45→46`, `goal kinah +200k`). Get the current time with
  `date "+%Y-%m-%dT%H:%M%:z"`; if the user says when it happened ("yesterday evening"), use that.
- **Stat changes** (level, gear score…) update the character file *and* get a log line, so history
  stays traceable.
- **Screenshots**: when the user pastes one, extract the values, state what was read, then update.
  Ask if a value is unreadable rather than guessing.
- **Auto-commit** after every change to tracked data, one commit per logical update, short message
  in the form `log: Dhamira nightmare ×2` / `char: Dhamira GS 1050` / `goals: …` / `routines: …`.
  No need to ask first.
- Keep it light: don't add fields or files until the user needs them.

## Computing status

A routine's current period starts at its most recent reset (`resets` in `routines.yaml`, in UTC):
daily → last occurrence of the daily time; weekly → last occurrence of the weekly day + time.
Sum the `×n` counts from log entries in that period and compare to `cap` (default 1).
Show times to the user in local time (system timezone, currently CET/CEST — check with `date`).

## Skills

`/today` open routines + next resets · `/log` record a play session · `/review` weekly summary.
