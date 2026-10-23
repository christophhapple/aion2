---
name: review
description: Weekly Aion 2 progress review — what got done, what was missed, how stats and goals moved. Use for "/review", "how was my week".
---

Default period: the last completed weekly reset period (Wednesday to Wednesday, see `routines.yaml`).
The user may ask for a different range ("this month", "since level 45").

1. Read the log entries in range, plus `git log -p` on `P/characters/` and `P/goals.md` for stat/goal changes.
2. Report briefly:
   - Routine completion per character: done/possible per routine, highlight missed weeklies.
   - Stat changes (level, gear score) start → end.
   - Goal progress and goals finished.
   - One or two observations (e.g. "Nightmare skipped 3 days in a row") — factual, no lectures.
3. Read-only: no file changes, no commit.
