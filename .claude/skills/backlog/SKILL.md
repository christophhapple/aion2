---
name: backlog
description: Show or add to the tracker-project backlog (backlog.md). Use for "/backlog", "/backlog <idea>", "add to backlog", "what's on the backlog".
---

`backlog.md` holds work on this tracker repo (files, skills, structure). In-game tasks belong in
`todo.md` (`/todo`); if an item clearly belongs there, say so and put it there instead.

- **No args:** print the open items as a numbered list, then a one-line count of done items. Don't modify anything.
- **Args = new item(s):** append each as `- [ ] <text>` under "## Open", keep the user's wording (fix
  only typos), commit as `backlog: add <short>`, confirm in one line.
- **"done <n|text>" / "drop <n|text>":** done → move to "## Done" as `- [x] … (YYYY-MM-DD)`; drop → delete
  the line (git keeps history). Commit as `backlog: done …` / `backlog: drop …`.
