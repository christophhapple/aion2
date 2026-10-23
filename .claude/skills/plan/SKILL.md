---
name: plan
description: Plan an Aion 2 play session around fixed-time events, open routines and refilling counters, filling gaps sensibly. Use for "/plan", "/plan 2h", "/plan until 23:00", "I have an hour, what should I do".
---

Input: a time window (args: `2h`, `90m`, `until 23:00`, or nothing → ask "How long do you have?").
Optionally a focus ("stones", "in a group", "no PvP").

1. Get the time: `date "+%Y-%m-%dT%H:%M%:z (%a)"`. Compute the window in local time.
2. Read `knowledge/schedule.md`, `routines.yaml`, the current log, `P/goals.md`, the user's character
   files, and `knowledge/progression.md` / `expeditions.md` for priorities.
3. Collect:
   - **Anchors:** fixed-time events in the window (schedule A), only ones the character qualifies for
     and that are worth it (e.g. skip PvP if the user said so; Abyss events are low priority below ~1600 GS).
   - **Open routines** for the current period, with the most valuable first (Daily Dungeon stones,
     Conquest/Exploration cubes while Odyle allows).
   - **Counters near their cap** (schedule B): from the log/what the user said; if unknown, ask once
     ("How much Odyle do you have?") or assume and say so.
   - **Goal work** that fits gaps (Sealed Dungeons/Strongholds left, enhancing, Monolith feathers…).
4. Build a timeline: place anchors at their times, put longer activities (dungeon runs ~10–20 min,
   estimate and say so) between them, and fill short gaps (<10 min) with small things (gathering,
   enhancing, quests, inventory). Mix it up; don't stack ten identical runs.
5. Output: a compact timeline (`20:00–20:10 Spacetime Rift portal → …`), then one line "Skipped: …"
   with reasons, then one line on what's left for later. Times in local time.
6. Don't modify files. If the user later reports what they did, record it with the `log` skill.
