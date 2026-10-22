# Aion 2 tracker

Personal progress tracker for Aion 2 (region: Europe, server: Nania). There is no app: this repo is the
database and Claude is the interface. The user talks in plain language ("did nightmare twice", "GS is
1080 now"), Claude reads and edits the files below and commits.

## Files

| Path | Holds | Format |
|---|---|---|
| `characters/<name>.md` | One file per character: who plays it, class, level, gear score, notes. | Markdown, key facts in a table |
| `share/` | Pages published as Artifacts for other people (see "Shared pages") | HTML |
| `characters/<name>-build.md` | That character's build: hotkeys, Stigma presets, skill points, priorities | Markdown |
| `characters/<name>-achievements.md` | Achievement progress snapshot from screenshots (open cards only) | Markdown tables |
| `routines.yaml` | Reset rules + the dailies/weeklies to track | YAML |
| `log/YYYY-MM.md` | Append-only record of what was done | Markdown list, one line per entry |
| `goals.md` | Farming/progress targets with counts | Markdown table |
| `knowledge/` | Game info (researched or told by the user), with provenance, see below | Markdown |
| `account.md` | Account-wide facts: region, server, F2P/subscription status | Markdown table |
| `todo.md` | One-off **in-game** tasks and reminders, `- [ ]` checkboxes | Markdown |
| `backlog.md` | Tasks and ideas for **building this tracker** | Markdown |

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
- **Respect `account.md`:** the player has the membership subscription (since 2026-10-22), not the paid
  Daeva Pass. Base advice on membership benefits; don't count paid Daeva Pass rewards unless asked.
- **Todos:** something the user must do or check in the game goes in `todo.md`; a change to this repo
  (files, skills, structure) goes in `backlog.md`. Finished items move to "Done" with the date; dropped items are deleted.
- **Terminology:** write "gear score" / "GS", never "item level" / "IL" (same thing; guides use IL).
  When reading guides, translate IL → GS. Glossary: `knowledge/README.md`.
- Keep it light: don't add fields or files until the user needs them.

## Knowledge reliability

Aion 2 is very new: online info is scarce, often from the Korean version, contradictory, and goes stale
with patches. Therefore:

- **Precedence:** what the user observes in-game > official patch notes > community guides > Claude's
  own assumptions (never write the last one down as fact).
- **Tag every fact** with its source and status, inline: `(in-game 2026-10-12)`, `(patch 2026-10-07)`,
  `(guide: expcarry, 2026-09, unverified)`. Patches are named by date. The current client version is
  at the top of `knowledge/README.md`.
- **Contradictions:** list both claims with sources; don't silently pick one.
- **Corrections:** when the user says something in-game doesn't match, update the fact, tag it
  `in-game <date>`, and keep a one-line `~~old claim~~` note only if it helps to know guides are wrong
  about it. Commit as `knowledge: …`.
- **New patch:** when the user mentions a patch, update the version in `knowledge/README.md` and flag
  guide-sourced facts on affected topics as possibly stale.
- When answering game questions, say how confident the answer is if it rests on unverified sources.

- **Keep `knowledge/` character-neutral**: game facts only, reusable for alts and other players. A
  character's state (levels, GS, gear, progress %) goes in `characters/` and `goals.md`. Facts the
  user observed in-game still go into knowledge (tagged `in-game`), just without "my X is at Y".

## Shared pages

| File | Artifact | For |
|---|---|---|
| `share/progression.html` | https://claude.ai/artifact/F3iG6ZURLga2drR3yxQqRx | Anyone (character-neutral): progression map, routines, schedule |
| `share/content-overview.html` | https://claude.ai/artifact/TCzeBcfAYj7hUkbRHTNXHj | The user (public, anyone with the link): Content Atlas with live timers ("Up next", rules in its script), all activities, progress sources, currencies |

- Generated from `knowledge/` (mainly `progression.md`, `expeditions.md`, `gear.md`, `schedule.md`). Character-neutral,
  no personal data. Each fact shows an "In-game" or "Guides" tag, except on the Content Atlas (user, 2026-10-19): no tags there, only a small grey "(unverified)" where a fact is guide-only. No exact Enhance Stone amounts there (user: irrelevant).
- **Update only on request** (user, 2026-10-18): don't edit or republish these pages automatically when
  knowledge changes; the user says when. Then update the HTML and republish with the Artifact tool,
  passing the URL above as `url`, so the link stays the same.
  Exception (user, 2026-10-21): the scheduled task `aion2-maintenance-watch` adds officially announced
  maintenance windows to the Content Atlas (`MAINTENANCE` in its script) and republishes it on its own.

## Computing status

A routine's current period starts at its most recent reset (`resets` in `routines.yaml`, in UTC):
daily → last occurrence of the daily time; weekly → last occurrence of the weekly day + time.
Sum the `×n` counts from log entries in that period and compare to `cap` (default 1).
Show times to the user in local time (system timezone, currently CET/CEST — check with `date`).

## Skills

`/today` open routines + next resets · `/log` record a play session · `/review` weekly summary ·
`/todo` in-game todos · `/backlog` tracker backlog (both: no args = show, args = add) ·
`/verify` re-check knowledge, generate in-game checks · `/plan 2h` plan a session around events and timers.
