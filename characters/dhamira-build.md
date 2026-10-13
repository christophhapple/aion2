# Dhamira: build

Imported 2026-10-10 from the Claude doc "AION 2 Cleric - Skills & Build Notes"; this file is the source of
truth. Skill effects: `knowledge/cleric-skills.md`. Hotbar/macro mechanics: `knowledge/controls.md`.
Matches the game as of 2026-10-11 (hotbar, macro, Stigmas, levels, specialties).

Target content: mostly group PvE. Current preset is offensive, for the leveling/gearing stretch where
nothing threatens you.

## Playstyle model
- Two axes: **what a skill does** (damage/heal/buff/debuff) and **when you press it** (proactive
  maintenance vs. reactive).
- **Guiding principle (2026-10-13): convenience over theoretical max DPS.** Convenience = less
  headspace and working memory, fewer things to watch, fewer things to get wrong.
- What goes where is decided by **role first, then timing**:
  - **Macro = anything where "whenever it's ready" is the right timing**: damage, plus (since
    2026-10-13) buffs and the always-up heal, Light of Regeneration.
  - **Reactive healing never goes in the macro** (Healing Light, Radiant Recovery): it stays on its
    own keys, so the macro never burns it.
  - **Timed or placed damage stays manual:** Power Burst (saved for interrupt phases, see below),
    Bolt (charge).
  - **Exception, convenience over DPS (2026-10-13):** Prayer of Amplification and Divine Aura (slot 4)
    are in the macro and fire whenever ready, instead of being saved for burst windows / grouped packs.
- The macro is held down; manual keys take precedence while holding it, so nothing needs releasing.
- MP is single-source: everything is paid for by weaving Earth's Retribution between spenders.
- Every heal also heals me (party heals include me; Healing Light heals me + the lowest-HP member).
  No *dedicated* self-heal is needed; beyond that, self-preservation = positioning + reactive buttons.

## Macro (right click)
The damage button. The macro is a **sequence**, and slot queues probably cycle the same way (see
`knowledge/controls.md`): each press/hold steps to the next entry or skill and loops; anything not
castable is skipped. Delays at the default 10 ms. Holding any hotbar key repeats it too, and manual
keys take precedence over the held macro.

**Outdated (2026-10-13):** replaced in-game by a macro that repeats slots to get several Condemnations
in a row (macro mechanics: `knowledge/controls.md`). Decision: convenience over theoretical max DPS,
since the exact cast interactions are too hard to measure in-game. Exact config to be recorded.

**Previous setup (in-game 2026-10-11):**
macro = **12, 6, 7, 10**.
1. **Slot 12 · debuffs:** Debilitating Mark → Chain of Torment → Earth Punishment, as they come off
   cooldown. Mark: 10s CD. Chain: 20s CD, 13s DoT. Earth Punishment: 30s CD, 10s DoT.
2. **Slot 6 · Condemnation** (also on E): only while Chain runs.
3. **Slot 7 · Scattershot** (also on R): only during Stagger.
4. **Slot 10 · Judgment Thunder:** always castable, so the macro never goes idle.

Holding right click alone never stops casting; in the window, Condemnation and Thunder alternate.
**Bursts are manual on top:** hold **E** while Earth Punishment and Chain are on the target (always
crits, every crit resets it: pure Condemnation); hold **R** during Stagger for pure Scattershot.
Pressing them is an upside, not a chore: without them the macro still runs.
**Doesn't work as planned (in-game 2026-10-12):** holding E/R while holding the macro doesn't spam;
you have to let go of the macro. Single presses still go through. Under consideration: Condemnation
repeated ~10× in the macro instead.

**MP:** Retribution isn't in the macro; MP drains fast. Refill by left click to ~50%, then back.
Kept that way on purpose: refilling and bursting stay separate, so I choose when each happens.

History (2026-10-11): original macro 7, 10, 12, 11 (Retribution every pass, Condemnation at most once
per pass) → Variant A: 10, 7 with Scattershot → Condemnation → Thunder in one slot (Condemnation and
Thunder alternated, since queues cycle) → Condemnation in the debuff queue, Thunder on a key for the
gap (pure Condemnation, but macro idle ~7s of every 20s; filling the gap by hand felt weird) →
current. **Rejected:** repeating slots in the macro to weight Condemnation: unwieldy, a crutch.

**Scattershot (since 2026-10-13): out of the macro.** When the target is Staggered, let go of the
macro and hold Scattershot's key alone for the whole Stagger. Chosen because it feels good; whether
it beats the macro on DPS is untested (the training dummy can't be Staggered). Power Burst is *not*
used to set it up: it's saved for fight phases where Stagger damage has to burst to interrupt an
attack. Stagger gauge damage in the kit: Power Burst 50, **Bolt 20–35** (by charge), Earth Punishment 20 (in the macro), Debilitating Mark
and Chain of Torment 10, Condemnation 7, Judgment Thunder 2. So for an interrupt phase, hold a fully
charged Bolt alongside Power Burst (fight-dependent; Bolt has a 45s CD).

## Hotbar
Slots numbered 1–12 from the left. Keys aren't tracked (the game stores them), except where the
setup depends on them: right click (macro), left click (slot 11), E (slot 6), R (slot 7).

| Slot | Queue | Use |
|---|---|---|
| 1 | Light of Regeneration | macro (since 2026-10-13): always up, cast whenever ready |
| 2 | Healing Light | manual, reactive heal |
| 3 | Radiant Recovery | manual, reactive heal |
| 4 | Prayer of Amplification → Divine Aura | macro (since 2026-10-13): fire whenever ready |
| 5 | Power Burst | manual, saved for Stagger interrupt phases |
| 6 | Condemnation | macro + E (held in the Earth Punishment window: pure Condemnation) |
| 7 | Lightning Strike Scattershot | manual only (since 2026-10-13): let go of the macro, hold during Stagger |
| 8 | Light of Protection | toggle at the pull |
| 9 | Bolt | manual (charge while moving) |
| 10 | Judgment Thunder | macro only: filler |
| 11 | Earth's Retribution | left click only (pull / retarget, manual MP refill) |
| 12 | Debilitating Mark → Chain of Torment → Earth Punishment | macro only: debuffs |

Defiance isn't a hotbar skill: it's on Space and only usable while crowd-controlled.

## Stigma presets

**Offensive (current, in-game 2026-10-11):** for leveling/trivial content, so no Resurrection or Salvation.
- Light of Protection (Lv 10): always-on party damage + defense
- Prayer of Amplification (Lv 5): +20% party Attack
- Power Burst (Lv 5): biggest single hit, heavy Stagger
- Earth Punishment (Lv 5): **the damage engine**: Condemnation always crits on its target, and every crit resets Condemnation. 30s CD, 10s DoT; Lv 20 adds +10s

Shard plan: Light of Protection first, cheap levels on the others along the way. Target
**15 / 10 / 10 / 10** (80 shards total, 50 more than now), later **20 / 10 / 10 / 10** (120, +90).
Costs: `knowledge/endgame.md` "Stigma levels". Shards come in slowly.
**Open:** Earth Punishment may deserve the Lv 20 target instead of Light of Protection. Its Lv 20
(+10s duration) roughly doubles the always-crit Condemnation window (single target, macro casting on
cooldown: ~13s → ~26s per minute, since Chain 20s CD/13s DoT and Earth Punishment 30s CD only
partly overlap). Lv 10/15 also give Double Chance, Attack, Defense (self +10%, party +5%). Decide
after comparing Light of Protection's Stigma levels.

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
- MP: wasn't a bottleneck while Retribution was in the macro; with Variant A it drains fast, so MP
  options (Retribution +20%, Thunder -20%) now pull their weight.
- Harder content gets a second preset/build with its own rules (enemy damage-down, CC may matter there).

| Skill | Picked (option no., Lv 8 + 12 slots) | Why |
|---|---|---|
| Judgment Thunder | 1 -20% MP consumed · 2 up to +12% damage on fewer targets | Own damage and MP over enemy slow/Root. Option 2 pays off on single bosses. No cooldown, so -20% MP means more casts per refill |
| Debilitating Mark | 2 -15% target Defense · 4 +10% enemy Damage Boost reduction | Debuff skill: maximize debuffs. Not 1 (no MP cost + MP restore): MP isn't short. Not 3 (Stun chance) |
| Divine Aura | 2 AoE · 3 +50% attack speed | Attack speed over +3s duration: the aura is stationary and packs sometimes walk out of it, so front-load the damage. Candidate for the 3rd slot (Lv 20): option 5, -10s CD |
| Chain of Torment | 2 +3s DoT · 4 +10% enemy Damage Tolerance reduction | Debuff skill: maximize debuffs; CC (slow, Knockdown) least important. +3s DoT also widens Condemnation's window |
| Lightning Strike Scattershot | 3 mobile (only 1 slot: Lv 11) | Mobility is paramount. Next: Lv 12 opens slot 2 and option 4 (Multi-Hit); one Daevanion level away. Lv 16: option 5 (-1s all cooldowns per hit), strong since it has no cooldown and gets spammed during Stagger |
| Light of Regeneration | 1 +5% Defense · 4 +5% Move Speed | Always up (cooldown = duration = 30s), so party-wide buffs with 100% uptime beat extra healing. Move Speed also serves mobility. Candidate for the 3rd slot (Lv 20): option 5, +5% PvE Damage Tolerance, same logic |
| Condemnation | 2 up to +12% damage on fewer targets · 4 cooldown reset on Crit | Cooldown reset is the key pick (more casts inside Chain's window; Crit rate feeds it). No Root (CC), no MP (not needed). Candidate for the 3rd slot (Lv 20): option 5, Multi-Hit |
| Healing Light | 2 +20% healing at ≤50% HP · 3 50% cleanse chance | Cleanse over more raw healing (+2% HP). Not 1 (+2 consecutive uses): unclear how it works, and the 6s CD is short anyway. Specific fights may call for other picks later. Candidate for the 3rd slot (Lv 20): option 5, -2s CD |
| Radiant Recovery | 1 cleanse up to 2 debuffs · 3 -3s CD (12 → 9s) | Same as Healing Light: cleanse first, no consecutive uses for now; may revisit. Matches the KR picks. Candidate for the 3rd slot (Lv 20): option 5, +5% HP restored |
| Bolt | 3 +30% Skill Speed · 4 up to +20% damage on fewer targets | Skill Speed = faster charging (likely: cast times shown 0.4/0.7/1.1s). Fewer targets = boss damage. No Stun (CC). Candidate for the 3rd slot (Lv 20): option 5, guaranteed Crit, on the biggest hit in the kit |
| Defiance | 1 chain skill Blessing of Regeneration (only 1 slot: Lv 10) | Blessing heals ~2.1k + 40% MP, more than option 3's 10% HP at ~13k max HP. Option 2 (1000 Stamina) might be useful. All situational. Lv 12 (Daevanion) opens slot 2 |
| Earth's Retribution | 1 +20% MP restored · 3 +50% Multi-Hit | Option 1 despite MP not being short: when MP does run out, refill fast. Not 4 (-7s Bolt CD): Retribution was rarely cast, so it never triggered; building around it was a mistake. Not 2 (more Discharge) either: Discharge does deal damage, but Retribution is cast too rarely for more procs to add up |

## Leveling priority (2026-10-11)
Skill points cap actives at Lv 10 (all done); spare points go to passives (key ones maxed, rest
evenly). Further levels come from **Daevanion** (11–14) and **Arcana** (15–20); see
`knowledge/cleric-skills.md` "Skill levels".

**Daevanion (to 14), next nodes:**
1. **Lightning Strike Scattershot 11 → 12:** opens slot 2 + option 4 (Multi-Hit).
2. **Defiance 10 → 12:** opens slot 2 + option 4 (+2s Tenacity).
3. Healing Light 13 → 14: just a level, no new slot.

**Arcana (15–20), not started.** Lv 16 unlocks option 5, Lv 20 the 3rd slot. Candidates noted per skill
in "Specialties"; strongest-looking: Scattershot (-1s all cooldowns per hit), Condemnation
(Multi-Hit, guides say 16–20), Radiant Recovery (guides say 20), Healing Light (-2s CD). Order not
decided yet.

## Manual layer: trigger map
Everything pressed on top of the held macro.

**Healing**
- **One person's HP drops sharply** → Healing Light (6s CD; heals me + the lowest-HP member, +20%
  at ≤50% HP, 50% chance to cleanse 1). Most-pressed.
- **Whole party took AoE damage** → Radiant Recovery (9s CD, cleanses up to 2).
- **A debuff needs removing** → Radiant Recovery (up to 2, sure), Healing Light (1, 50% chance).

**Damage**
- **Stagger interrupt phase** → Power Burst + a fully charged Bolt (50 + 35 gauge).
- **Bolt ready, nothing to save it for** → charge it while moving.
- **Earth Punishment on the target** (with Chain) → hold E on top of the macro: pure Condemnation.
- **Target Staggered** → let go of the macro, hold Scattershot alone until the Stagger ends, then
  back to the macro.

**Utility**
- **MP low** → left click (Earth's Retribution) until ~50%, then back to the macro.
- **I got CC'd** → Defiance (Space). Trigger is "I can't act", not "I'm low"; only usable then.

**Defensive preset only:** big telegraphed hit → Salvation just before impact; someone died →
Summon Resurrection; Absolution if more cleansing is needed.

## Play loop
At the pull: toggle Light of Protection. Then hold right click (macro) and
press on top of it per the trigger map above. Left click to switch target / pull the next pack.
