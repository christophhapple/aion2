---
name: todo
description: Show or add to the in-game todo list (todo.md). Use for "/todo", "/todo <task>", "remind me to … in game", "what's on my todo".
---

`P/todo.md` holds one-off things to do or check in the game. Recurring dailies/weeklies belong in
`routines.yaml`; work on the tracker repo belongs in `backlog.md` (`/backlog`). If an item clearly
belongs elsewhere, say so and put it there instead.

- **No args:** print the open items as a numbered list (keep markers like *low priority*), then a
  one-line count of done items. Don't modify anything.
- **Args = new item(s):** append each as `- [ ] <text>` under "## Open", keep the user's wording (fix
  only typos), commit as `todo: add <short>`, confirm in one line.
- **"done <n|text>" / "drop <n|text>":** done → move to "## Done" as `- [x] … (YYYY-MM-DD)`, plus the
  result if the user gave one; drop → delete the line (git keeps history). Commit as `todo: done …` /
  `todo: drop …`. If the result changes other data (e.g. a confirmed cap), update that file too.
