# Controls: hotbar queues and the macro

All in-game 2026-10-11.

- **Hotbar:** 12 slots, each can have a key assigned (mouse buttons count as keys). A key is optional.
- **Skill queue per slot:** a slot holds up to 4 skills. Pressing it fires the first skill in the
  queue that's available and skips the rest. A skill is skipped for *any* reason it can't be cast:
  cooldown, missing MP, out of range, or an unmet condition (e.g. "target must be Staggered").
- **Macro:** one special queue holding any number of hotbar *slots*, in order, on its own key.
  Pressing it walks the slots in order, and each slot then resolves its own skill queue as above.
- Each macro entry has a **Delay** field in ms (default 10). Probably a wait after that entry
  (unconfirmed).
- A slot can be in the macro and still be pressed on its own key.
- To use a skill in the macro it has to sit in a hotbar slot; that slot doesn't need a key.
- Design consequence: put interchangeable maintenance/filler skills into queues and the macro; keep
  skills you need at an exact moment (reactive heals, CC breaks) on their own keys, outside the
  macro, so it never burns them.
