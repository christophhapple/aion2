---
name: log
description: Record a finished Aion 2 play session or activity — routines done, stat changes, loot, goal progress. Use for "/log" or when the user reports what they did.
---

Input: the user's free-text summary (args), and/or pasted screenshots. If nothing was given, ask "What did you do?" — one question, no form.

1. Parse the summary into entries. Map activities to routine `id`s from `routines.yaml`; if an activity
   doesn't match any routine, log it as free text and ask once whether it should become a tracked routine.
2. Character: default to the only character if there's one; otherwise ask if unclear.
3. Time: now (`date "+%Y-%m-%dT%H:%M%:z"`) unless the user said otherwise.
4. Append lines to `P/log/YYYY-MM.md` (create the file with a `# Log — <Month YYYY>` header if new).
5. Apply side effects: stat changes → character file (+ `Updated` date); goal progress → `P/goals.md`
   (move to "Done" when target reached).
6. Commit (see CLAUDE.md for message style).
7. Reply with a short confirmation of what was recorded, plus anything still open this daily period.
