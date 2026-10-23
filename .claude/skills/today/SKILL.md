---
name: today
description: Show which Aion 2 dailies/weeklies are still open per character, what's coming up on the clock, and when the next resets are. Use for "/today", "what's left", "what should I do".
---

1. Get the current time: `date "+%Y-%m-%dT%H:%M%:z (%a)"`.
2. Read `routines.yaml` (minus routines `P/account.md` lists as skipped), the character files in `P/characters/` (only those "Played by: the user"; skip
   friends' characters and `*-build.md`), the current (and, right after a month change, previous)
   `P/log/YYYY-MM.md`, and `knowledge/schedule.md`.
3. For each character and routine, compute done/cap in the current reset period (see "Computing status" in CLAUDE.md).
4. Output compactly:
   - Per character: open routines first (`nightmare 0/2`), then a one-line "done: …".
   - Weekly routines: also show remaining count and days left until the weekly reset. Flag ones at risk of being lost.
   - **Coming up (next ~3h):** fixed-time events from `schedule.md` section A in local time, e.g.
     `20:00 Spacetime Rift · 20:30 Invasion · 21:00 Shugo + Artifact Siege (Thu)`. Hourly events
     (Shugo :00, Invasion :30) only as one line ("Shugo every :00, Invasion every :30"). Include
     weekday-bound events (sieges, Nahma) only on their days. Level-gated events only if the character qualifies.
   - **Deadlines** from `schedule.md` section C within the next 7 days.
   - Next daily and weekly reset in local time, with "in Xh Ym".
   - Active goals from `P/goals.md`, one line each, only if any exist.
   - Open items from `P/todo.md` (section "Open"), one line each. Flag ones whose date is today or past.
   - Last line: `Tracker backlog: <n> open — <first item>` from `backlog.md`, if anything is open.
5. Don't modify files. Schedule times are unverified server time (assumed = local CEST/CET); after
   2026-10-25 add "(times unverified after DST change)" until the user confirms.
