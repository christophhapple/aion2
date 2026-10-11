# Controls: hotbar queues and the macro

All in-game 2026-10-11.

- **Skill window** has two tabs: **Mastery** (active + passive skills, their levels and specialties,
  the hotbar and the macro) and **Stigma**. Each tab has **3 presets** (1/2/3). Whether there's a
  higher-level preset combining Mastery, Stigma and gear presets is unconfirmed.

- **Hotbar:** 12 slots, each can have a key assigned (mouse buttons count as keys). A key is optional.
- **Skill queue per slot:** a slot holds up to 4 skills. Pressing it fires the first skill in the
  queue that's available and skips the rest. **Probably cycles like the macro** instead of restarting
  at the top (in-game 2026-10-11): a slot with Condemnation → Judgment Thunder alternated the two on a
  target with Earth Punishment, where Condemnation should always be ready. Not airtight: the crit
  reset might register a moment late. Definitive test: a slot with Judgment Thunder → Earth's
  Retribution (both no cooldown), pressed repeatedly: Thunder only = priority, alternating = cycle.
  A skill is skipped for *any* reason it can't be cast:
  cooldown, missing MP, out of range, or an unmet condition (e.g. "target must be Staggered").
- **Macro:** one special queue holding any number of hotbar *slots*, in order, on its own key.
  **It's a sequence, not a priority list** (tested in-game 2026-10-11): it steps through the entries in
  order and loops; after a cast it continues with the *next* entry, it doesn't restart at entry 1.
  Entries with nothing castable are skipped. So a skill gets at most one try per pass, even if it's
  ready again (tested with Scattershot during Stagger: it mixed with the other entries).
- **No real "fire whenever ready" exists** if slot queues cycle too (likely, see above). The way to
  weight a skill is to give it its own slot and **repeat that slot in the macro**: skipped entries cost
  nothing, so a skill that is not ready just falls through to the next entry.
- Each macro entry has a **Delay** field in ms (default 10). Probably a wait after that entry
  (unconfirmed).
- **The same slot can appear several times in the macro** (in-game 2026-10-11). Repeating an entry is
  the way to give a skill more tries per pass.
- **A skill can only be in one slot** (in-game 2026-10-11): it can't sit in two queues at once.
- **Holding any hotbar key** repeats its skill as well, not just the macro key (in-game 2026-10-11).
- **Holding the macro key** keeps it firing. Pressing another key while holding it takes precedence,
  so manual skills can be cast without letting go of the macro.
- A slot can be in the macro and still be pressed on its own key.
- To use a skill in the macro it has to sit in a hotbar slot; that slot doesn't need a key.
- Design consequence: put interchangeable maintenance/filler skills into queues and the macro; keep
  skills you need at an exact moment (reactive heals, CC breaks) on their own keys, outside the
  macro, so it never burns them.
