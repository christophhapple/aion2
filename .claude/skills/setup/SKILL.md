---
name: setup
description: First-time setup of this Aion 2 tracker for a player — on a fresh clone, for a new player, or when CLAUDE.local.md is missing. Use for "/setup", "set me up", "I'm new here", "how do I start".
---

Goal: the player ends up with their own folder `players/<player>/`, a `CLAUDE.local.md` naming them as
the active player, and knows the three or four things to say day to day. Talk like a person, not a form.

## 1. Who is this?
- First `git pull --rebase --autostash -q`, so the list of players is current.
- If `CLAUDE.local.md` exists and its player folder exists: say who is set up and offer to add another
  character instead (create it from `players/_template/characters/_character.md`, commit `char: add <Name>`). Stop.
- List the folders in `players/` (not `_template`). Ask whether the user is one of them (e.g. the same
  person on a new computer) or new. Existing → write `CLAUDE.local.md` (one line `Active player: <player>`),
  confirm in one line and stop. Never edit another player's folder.

## 2. New player: ask in one message
Skip anything the args already answer.
- A short player id for the folder (lowercase, no spaces, e.g. a nickname; must not exist yet).
- Main character: name, class, faction, level, gear score.
- Region and server. Knowledge, reset times and schedules here are for **Europe**; for another region,
  say that reset times and event times may differ and need checking in-game.
- Membership subscription or paid Daeva Pass, or free.
- Which routines they don't do: show the routine names from `routines.yaml` grouped (PvE, Abyss/PvP,
  events), compact. "None" or "skip PvP" is a fine answer.
Unanswered optional details: leave a `?` rather than guessing.

## 3. Create the files
1. Copy `players/_template/` to `players/<player>/`, rename `characters/_character.md` to `<name>.md`
   (lowercase) and fill in both tables; `Updated` = today. Fill `account.md` (skipped routines as ids).
2. Create `players/<player>/log/YYYY-MM.md` with the header `# Log — <Month YYYY>` and a first line
   `- <now> · <Name> · tracker started · level <n>, gear score <n>` (time: `date "+%Y-%m-%dT%H:%M%:z"`).
3. Write `CLAUDE.local.md`: `Active player: <player>`.
4. Commit `setup: player <player>` (CLAUDE.local.md is gitignored, so it isn't part of it), then
   `git push` (see "Sync" in CLAUDE.md).

## 4. Check git (say what you find, change nothing else without a yes)
- `git config user.name` empty → show the two `git config` commands to set name and email.
- `git remote -v`: `origin` should be `christophhapple/aion2`. If it's a fork, explain that this tracker
  works as one shared repo: ask the owner to add them as a collaborator, then clone the original.
- Push rejected with a permission error → they aren't a collaborator yet: tell them to ask the owner for
  an invite and accept it, then say "push" again. Everything works locally meanwhile.

## 5. Tour (short)
Tell them, in a few lines:
- Just say what you did: "did nightmare twice", "GS is 1650 now", or paste a screenshot. That gets logged.
- `/today` what's open · `/plan 2h` plan a session · `/todo` in-game reminders · `/review` weekly summary.
- Co-op: `/today with <player>` or `/plan 2h with <player>` (name the other players in `players/`) shows
  both of you and what to run together. Everyone's data is readable by everyone in the repo.
- Game facts go into `knowledge/` with sources and are shared with everyone using this repo. What you see
  in-game beats guides, so correct things freely.
- The shared pages in CLAUDE.md belong to their owner: open the links, but ask for your own copy if you
  want one.
End with `/today` for the new character.
