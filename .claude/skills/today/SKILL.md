---
name: today
description: Show which Aion 2 dailies/weeklies are still open per character, and when the next resets are. Use for "/today", "what's left", "what should I do".
---

1. Get the current time: `date "+%Y-%m-%dT%H:%M%:z"`.
2. Read `routines.yaml`, the character files in `characters/` (only those "Played by: the user"; skip
   friends' characters and `*-build.md`), and the current (and, right after a month change, previous) `log/YYYY-MM.md`.
3. For each character and routine, compute done/cap in the current reset period (see "Computing status" in CLAUDE.md).
4. Output compactly:
   - Per character: open routines first (`nightmare 0/2`), then a one-line "done: …".
   - Weekly routines: also show remaining count and days left until the weekly reset — flag ones at risk of being lost.
   - Next daily and weekly reset in local time, with "in Xh Ym".
   - Active goals from `goals.md`, one line each, only if any exist.
   - Open items from `todo.md` (section "Open"), one line each. Flag ones whose date is today or past.
   - Last line: `Tracker backlog: <n> open — <first item>` from `backlog.md`, if anything is open.
5. Don't modify files.
