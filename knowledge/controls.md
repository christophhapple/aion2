# Controls: hotbar queues and the macro

All in-game 2026-10-11 unless dated otherwise.

- **Skill window** has two tabs: **Mastery** (active + passive skills, their levels and specialties,
  the hotbar and the macro) and **Stigma**. Each tab has **3 presets** (1/2/3). Whether there's a
  higher-level preset combining Mastery, Stigma and gear presets is unconfirmed.

- **Hotbar:** 12 slots, each can have a key assigned (mouse buttons count as keys). A key is optional.
- **Skill queue per slot:** a slot holds up to 4 skills. Pressing it fires the first skill in the
  queue that's available and skips the rest. **It cycles like the macro** (in-game 2026-10-12,
  confirmed): after a successful cast it continues with the *next* skill, it doesn't restart at the
  top. So two ready skills in one queue alternate; the first one is not spammed.
  A skill is skipped for *any* reason it can't be cast:
  cooldown, missing MP, out of range, or an unmet condition (e.g. "target must be Staggered").
- **Macro:** one special queue holding hotbar *slots* (max 20 entries), in order, on its own key.
  **Each entry gives its slot one try** (in-game 2026-10-12): it casts one skill from that slot's queue
  (the queue's own cycle decides which), then the macro moves on. It doesn't run the whole queue.
  **It's a sequence, not a priority list** (tested in-game 2026-10-11): it steps through the entries in
  order and loops; after a cast it continues with the *next* entry, it doesn't restart at entry 1.
  Entries with nothing castable are skipped. So a skill gets at most one try per pass, even if it's
  ready again (tested with Scattershot during Stagger: it mixed with the other entries).
- **No real "fire whenever ready" exists**, since slot queues cycle too (in-game 2026-10-12). The way to
  weight a skill is to give it its own slot and **repeat that slot in the macro**: a skill that is not
  ready falls through to the next entry, at the cost of that entry's delay.
- Each macro entry has a **Delay** field in ms (default 10), set up to at least 9900. **It's a wait
  after that entry, and it applies even when the entry is skipped** (in-game 2026-10-12: Condemnation
  on cooldown with a 9900 ms delay → the macro sat idle ~10s). So a skipped entry costs its delay;
  keep delays at the default on entries that are often skipped.
  ~~Skipped entries cost nothing~~ (own assumption, 2026-10-11).
- **The macro holds at most 20 entries** (in-game 2026-10-12).
- **The same slot can appear several times in the macro** (in-game 2026-10-11). Repeating an entry is
  the way to give a skill more tries per pass.
- **A skill can only be in one slot** (in-game 2026-10-11): it can't sit in two queues at once.
- **Holding any hotbar key** repeats its skill as well, not just the macro key (in-game 2026-10-11).
- **Holding the macro key** keeps it firing. The tooltip says manual input always takes precedence,
  but **pressing and holding behave differently** (in-game 2026-10-12): a single press of another key
  while holding the macro fires that skill; **holding** another key while holding the macro does *not*
  repeat it. To spam a key by holding it, let go of the macro first.
- A slot can be in the macro and still be pressed on its own key.
- To use a skill in the macro it has to sit in a hotbar slot; that slot doesn't need a key.
- Design consequence: put interchangeable maintenance/filler skills into queues and the macro; keep
  skills you need at an exact moment (reactive heals, CC breaks) on their own keys, outside the
  macro, so it never burns them.
