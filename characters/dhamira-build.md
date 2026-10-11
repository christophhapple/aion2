# Dhamira: build

Imported 2026-10-10 from the Claude doc "AION 2 Cleric - Skills & Build Notes"; this file is the source of
truth. Skill effects: `knowledge/cleric-skills.md`. Hotbar/macro mechanics: `knowledge/controls.md`.

> **Partly out of date:** hotbar, macro, Stigmas and skill levels match the game (2026-10-11).
> "Skill-point priority" is the old draft and not re-checked yet.

Target content: mostly group PvE. Current preset is offensive, for the leveling/gearing stretch where
nothing threatens you.

## Playstyle model
- Two axes: **what a skill does** (damage/heal/buff/debuff) and **when you press it** (proactive
  maintenance vs. reactive).
- What goes where is decided by **role first, then timing**:
  - **Macro = damage only**, and only damage where "whenever it's ready" is the right timing.
  - **Healing never goes in the macro**, not even proactive healing (Light of Regeneration): healing
    stays fully separate, on its own keys.
  - **Timed or placed damage stays manual:** Power Burst (saved for interrupt phases, see below),
    Divine Aura (stationary: placed when the pack is grouped), Prayer of Amplification (burst
    window), Bolt (charge).
- The macro is held down; manual keys take precedence while holding it, so nothing needs releasing.
- MP is single-source: everything is paid for by weaving Earth's Retribution between spenders.
- No direct self-heal: heals are party-wide or auto-target the lowest HP. Self-preservation =
  positioning + reactive buttons.

## Macro (right click)
The damage/maintenance button. Entries are hotbar slots, tried in order; delays left at the default 10 ms.

1. **Slot 7 · Lightning Strike Scattershot**: only castable on a Staggered target, so it's skipped
   until a Stagger window opens, then takes priority.
2. **Slot 10 · debuff queue:** Debilitating Mark → Chain of Torment → Earth Punishment → Condemnation.
   Mark and Chain are 10s debuffs, Earth Punishment a 10s DoT; Condemnation needs Chain on the target
   and is the frequent repeater.
3. **Slot 12 · Judgment Thunder**: AoE damage (up to 4 targets).
4. **Slot 11 · Earth's Retribution**: always ready, so the macro never comes up empty. When MP runs
   dry, everything above is unavailable and the macro falls through to it: MP manages itself.

Scattershot fires whenever something is Staggered; wasting it costs nothing. Power Burst is *not*
used to set it up: it's saved for fight phases where Stagger damage has to burst to interrupt an
attack.

## Hotbar
Slots numbered 1–12 from the left. Keys aren't tracked (the game stores them); only the two mouse
buttons matter for the setup above.

| Slot | Queue | Use |
|---|---|---|
| 1 | Light of Regeneration | manual, healing kept out of the macro (proactive, keep up) |
| 2 | Healing Light | manual, reactive heal |
| 3 | Radiant Recovery | manual, reactive heal |
| 4 | Prayer of Amplification → Divine Aura | manual, buff before damage: Prayer for burst windows (spending it early is fine, 60s CD), Aura placed on grouped packs |
| 5 | Power Burst | manual, saved for Stagger interrupt phases |
| 6 | *empty* | |
| 7 | Lightning Strike Scattershot | macro only |
| 8 | Light of Protection | toggle at the pull |
| 9 | Bolt | manual (charge while moving) |
| 10 | Debilitating Mark → Chain of Torment → Earth Punishment → Condemnation | macro only |
| 11 | Earth's Retribution | macro + left click (clicking a new target to pull it fires it) |
| 12 | Judgment Thunder | macro only |

Defiance isn't a hotbar skill: it's on Space and only usable while crowd-controlled.

## Stigma presets

**Offensive (current, in-game 2026-10-11):** for leveling/trivial content, so no Resurrection or Salvation.
- Light of Protection (Lv 10): always-on party damage + defense
- Prayer of Amplification (Lv 5): +20% party Attack
- Power Burst (Lv 5): biggest single hit, heavy Stagger
- Earth Punishment (Lv 5): single-target DoT (AoE already covered by baseline skills)

**Defensive / progression (not built yet)**, for when content starts to bite: likely Summon
Resurrection + Salvation + Light of Protection + a flex (Benevolence for sustain, or Yustiel's Power
for a defensive cooldown). Open questions then: does the group run a Chanter (weakens Light of
Protection)? Are you the only healer?

## Skill levels (in-game 2026-10-11)
Lv 14: Earth's Retribution, Judgment Thunder, Debilitating Mark, Chain of Torment, Condemnation, Divine
Aura, Bolt, Light of Regeneration, Radiant Recovery · Lv 13: Healing Light · Lv 11: Lightning Strike
Scattershot · Defiance: not recorded. Stigmas: see above.

## Skill-point priority (old draft, not re-checked)
Points are limited: level each skill to its next useful breakpoint and stop. Respec is free.
- **Tier 1, to level 12:** Earth's Retribution (builder + MP engine, carries the -7s Bolt CD
  specialty); core passives Healing Enhancement, Earth's Grace, Empyrean Lord's Grace.
- **Tier 2, level 8–10:** Chain of Torment, Debilitating Mark (first specialty at 8); Light of
  Regeneration.
- **Tier 3, low investment:** Healing Light, Radiant Recovery, Defiance, Salvation (work fine at low
  level); Bolt (payoff comes via the Retribution specialty).
- Endgame raid guides push Benevolence Lv 15/20 and Absolution Lv 10; ignore while leveling.

## Reactive layer: trigger map
- **One person's HP drops sharply** → Healing Light (fast, 6s CD, auto-targets lowest). Most-pressed.
- **Whole party took AoE damage** → Radiant Recovery (also strips 1 debuff).
- **A debuff needs removing** → Radiant Recovery (1), later Absolution (2).
- **You got CC'd** → Defiance. Trigger is "I can't act", not "I'm low". (Space; only usable then anyway.)
- Defensive preset only: **big telegraphed hit** → Salvation just before impact; **someone died** →
  Summon Resurrection.

## Play loop
At the pull: toggle Light of Protection, Light of Regeneration up. Then hold right click (macro) and
press on top of it: heals as needed, Light of Regeneration on expiry, Power Burst for Stagger, slot 4
for burst windows, Bolt. Left click to switch target / pull the next pack.
