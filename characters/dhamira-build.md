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
- Every heal also heals me (party heals include me; Healing Light heals me + the lowest-HP member).
  No *dedicated* self-heal is needed; beyond that, self-preservation = positioning + reactive buttons.

## Macro (right click)
The damage/maintenance button. Entries are hotbar slots, tried in order; delays left at the default 10 ms.

1. **Slot 7 · Lightning Strike Scattershot**: only castable on a Staggered target, so it's skipped
   until a Stagger window opens, then takes priority.
2. **Slot 10 · debuff queue:** Debilitating Mark → Chain of Torment → Earth Punishment → Condemnation.
   Mark: 10s CD. Chain: 20s CD, DoT 13s, so Condemnation (needs Chain on the target) has a window of
   roughly 13 of every 20s. Earth Punishment: 10s DoT. Condemnation is the frequent repeater.
3. **Slot 12 · Judgment Thunder**: AoE damage (up to 4 targets). No cooldown, 96 MP: the macro
   spams it as long as MP lasts, so this is what actually drains MP.
4. **Slot 11 · Earth's Retribution**: always ready, so the macro never comes up empty. When MP runs
   dry, everything above is unavailable and the macro falls through to it: MP manages itself.
   In practice it fires only below 96 MP, so at low MP the macro alternates Thunder and Retribution.
   That's the safety net; in practice, when MP is noticed low, left click (Retribution) manually to
   refill to ~50% (depending on time between heals/movement), then back to the macro.

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

Shard plan: Light of Protection first, cheap levels on the others along the way. Target
**15 / 10 / 10 / 10** (80 shards total, 50 more than now), later **20 / 10 / 10 / 10** (120, +90).
Costs: `knowledge/endgame.md` "Stigma levels". Shards come in slowly.

**Defensive / progression (not built yet)**, for when content starts to bite: likely Summon
Resurrection + Salvation + Light of Protection + a flex (Benevolence for sustain, or Yustiel's Power
for a defensive cooldown). Open questions then: does the group run a Chanter (weakens Light of
Protection)? Are you the only healer?

## Skill levels (in-game 2026-10-11)
All actives are at Lv 10 from skill points (the cap); the rest comes from Daevanion, a few nodes still
missing. Arcana (Lv 15–20) not started. Spare skill points go to passives: the important ones are
maxed, the rest get levelled evenly.

Lv 14: Earth's Retribution, Judgment Thunder, Debilitating Mark, Chain of Torment, Condemnation, Divine
Aura, Bolt, Light of Regeneration, Radiant Recovery · Lv 13: Healing Light · Lv 11: Lightning Strike
Scattershot · Lv 10: Defiance (skill points only, no Daevanion yet). Stigmas: see above.
Passives (10, names not recorded): 14, 13, 11, 9, 8, 8, 8, 8, 7, 7.
Everything above is Mastery preset 1.

## Specialties (in-game 2026-10-11)
Options per skill: `knowledge/cleric-skills.md`. Lv 20 slots locked everywhere (no Arcana yet).

**Rules (offensive build):**
- Pick options that make *me* stronger (damage, MP, my heals) over crowd control and enemy
  slow/speed-down (Stun, Root, Combat Speed).
- Exception: on a **debuff skill, maximize its debuffs** (Debilitating Mark, likely Chain of Torment).
- **Mobility is paramount:** "becomes mobile" options come first.
- MP isn't a bottleneck (2026-10-11): extra-MP options are low value.
- Harder content gets a second preset/build with its own rules (enemy damage-down, CC may matter there).

| Skill | Picked (option no., Lv 8 + 12 slots) | Why |
|---|---|---|
| Judgment Thunder | 1 -20% MP consumed · 2 up to +12% damage on fewer targets | Own damage and MP over enemy slow/Root. Option 2 pays off on single bosses. No cooldown, so -20% MP means more casts per refill |
| Debilitating Mark | 2 -15% target Defense · 4 +10% enemy Damage Boost reduction | Debuff skill: maximize debuffs. Not 1 (no MP cost + MP restore): MP isn't short. Not 3 (Stun chance) |
| Divine Aura | 2 AoE · 3 +50% attack speed | Attack speed over +3s duration: the aura is stationary and packs sometimes walk out of it, so front-load the damage. Candidate for the 3rd slot (Lv 20): option 5, -10s CD |
| Chain of Torment | 2 +3s DoT · 4 +10% enemy Damage Tolerance reduction | Debuff skill: maximize debuffs; CC (slow, Knockdown) least important. +3s DoT also widens Condemnation's window |
| Lightning Strike Scattershot | 3 mobile (only 1 slot: Lv 11) | Mobility is paramount. Next: Lv 12 opens slot 2 and option 4 (Multi-Hit); one Daevanion level away. Lv 16: option 5 (-1s all cooldowns per hit), strong since it has no cooldown and the macro spams it during Stagger |
| Light of Regeneration | 1 +5% Defense · 4 +5% Move Speed | Always up (cooldown = duration = 30s), so party-wide buffs with 100% uptime beat extra healing. Move Speed also serves mobility. Candidate for the 3rd slot (Lv 20): option 5, +5% PvE Damage Tolerance, same logic |
| Condemnation | 2 up to +12% damage on fewer targets · 4 cooldown reset on Crit | Cooldown reset is the key pick (more casts inside Chain's window; Crit rate feeds it). No Root (CC), no MP (not needed). Candidate for the 3rd slot (Lv 20): option 5, Multi-Hit |
| Earth's Retribution | 1 +20% MP restored · 3 +50% Multi-Hit | Option 1 despite MP not being short: when MP does run out, refill fast. Not 4 (-7s Bolt CD): Retribution was rarely cast, so it never triggered; building around it was a mistake. Not 2 (more Discharge) either: Discharge only mattered for the Bolt CD |

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
