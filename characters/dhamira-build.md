# Dhamira: build

Imported 2026-10-10 from the Claude doc "AION 2 Cleric - Skills & Build Notes"
(https://claude.ai/artifact/P16n3oAFFuZ5CtkTDhNgCU, rev 9 of 2026-10-09). **This file is now the source
of truth**; the doc is no longer updated. Skill effects: `knowledge/cleric-skills.md`.

Target content: mostly group PvE. Current preset is offensive, for the leveling/gearing stretch where
nothing threatens you.

## Playstyle model
- Two axes: **what a skill does** (damage/heal/buff/debuff) and **when you press it** (proactive
  maintenance vs. reactive).
- Proactive = kept on uptime, good for queues. Reactive = fired at a precise moment, on manual keys.
- MP is single-source: everything is paid for by weaving Earth's Retribution between spenders.
- No direct self-heal: heals are party-wide or auto-target the lowest HP. Self-preservation =
  positioning + reactive buttons (Defiance, Salvation).

## Hotkeys
Every hotkey holds a queue of up to 4 skills and fires the first ready one. (A separate "proper macro"
feature exists, parked for now.) **Rule:** queue only uptime/maintenance skills; reactive skills stay
on single keys so they're never auto-burned.

| Key | Skill |
|---|---|
| 1 | Earth Punishment |
| 2 | Healing Light |
| 3 | Radiant Recovery |
| 4 | Divine Aura |
| R | *empty (later: Power Burst)* |
| Mouse Thumb2 | Bolt |
| X | Prayer of Amplification |
| C | Light of Protection |
| Q | Light of Regeneration (regen queue, 1 skill) |
| E | Debuff queue: Debilitating Mark → Lightning Strike Scattershot → Chain of Torment → Condemnation |
| Left click | Earth's Retribution |
| Right click | Judgment Thunder |

Debuff queue order: Debilitating Mark first (self-contained); Scattershot second (Stagger-only, stays
dormant until the window opens); Chain of Torment enables Condemnation; Condemnation last = the
frequent zero-MP repeater. Works as a flat queue because cooldowns roughly match debuff durations.

## Stigma presets

**Offensive (current):** for leveling/trivial content, so no Resurrection or Salvation.
- Light of Protection: always-on party damage + defense
- Prayer of Amplification: +20% party Attack
- Power Burst: biggest single hit
- Earth Punishment: single-target DoT (AoE already covered by baseline skills)

**Defensive / progression (not built yet)**, for when content starts to bite: likely Summon
Resurrection + Salvation + Light of Protection + a flex (Benevolence for sustain, or Yustiel's Power
for a defensive cooldown). Open questions then: does the group run a Chanter (weakens Light of
Protection)? Are you the only healer?

## Skill-point priority
Points are limited: level each skill to its next useful breakpoint and stop. Draft, since respec is free.
- **Tier 1, to level 12:** Earth's Retribution (builder + MP engine, carries the -7s Bolt CD
  specialty); core passives Healing Enhancement, Earth's Grace, Empyrean Lord's Grace.
- **Tier 2, level 8–10:** Chain of Torment, Debilitating Mark (first specialty at 8); Light of
  Regeneration.
- **Tier 3, low investment:** Healing Light, Radiant Recovery, Defiance, Salvation (work fine at low
  level); Bolt (payoff comes via the Retribution specialty).
- Endgame raid guides push Benevolence Lv 15/20 and Absolution Lv 10; ignore while leveling.

## Reactive layer: trigger map
Queue skills where it doesn't matter which fires; keep skills solo where you need that exact one.
- **One person's HP drops sharply** → Healing Light (fast, 6s CD, auto-targets lowest). Most-pressed.
- **Whole party took AoE damage** → Radiant Recovery (also strips 1 debuff).
- **A debuff needs removing** → Radiant Recovery (1), later Absolution (2).
- **You got CC'd** → Defiance. Trigger is "I can't act", not "I'm low".
- Defensive preset only: **big telegraphed hit** → Salvation just before impact; **someone died** →
  Summon Resurrection.

## Cast priority (steady state)
A priority cascade governed by MP, not a fixed rotation. At the pull: toggle Light of Protection on.
1. **Keep maintenance up:** reapply Light of Regeneration; press the debuff queue when debuffs drop.
2. **MP check:** if MP dips, Earth's Retribution jumps the queue.
3. **Spend surplus on damage:** Bolt (charge while moving, release at full), Judgment Thunder.

Reactive presses interrupt the cascade instantly. Calibrate by feel: never MP-starved → push more
damage; always empty → weave more Retribution.
