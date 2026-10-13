# Dhamira: build

Imported 2026-10-10 from the Claude doc "AION 2 Cleric - Skills & Build Notes"; this file is the source of
truth. Skill effects: `knowledge/cleric-skills.md`. Hotbar/macro mechanics: `knowledge/controls.md`.
Matches the game as of 2026-10-13 (hotbar, macro: screenshots) and 2026-10-11 (Stigmas, levels,
specialties; updated piecemeal since).

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
  - **Exception, convenience over DPS (2026-10-13):** Prayer of Amplification and Divine Aura are in
    the macro and fire whenever ready, instead of being saved for burst windows / grouped packs.
- The macro is held down. Single presses of other keys go through on top of it; *holding* another key
  doesn't (in-game 2026-10-12), so for a held key (Scattershot) let go of the macro first.
- MP is single-source: everything is paid for by weaving Earth's Retribution between spenders.
- Every heal also heals me (party heals include me; Healing Light heals me + the lowest-HP member).
  No *dedicated* self-heal is needed; beyond that, self-preservation = positioning + reactive buttons.

## Macro (right click)
The "whenever ready" button. Mechanics (`knowledge/controls.md`): the macro and slot queues are both
**sequences that cycle**; each macro entry gives its slot one try (one skill from its queue), anything
not castable is skipped, and the delay applies even to skipped entries.

**Current setup (in-game 2026-10-13, screenshot):** macro = **10, 12**, both delays 10 ms. (The macro
window labels each entry with the first skill of that slot's queue: "Chain of Torment",
"Debilitating Mark".)
- **Slot 10:** Chain of Torment → Prayer of Amplification → Light of Regeneration → Condemnation
- **Slot 12:** Debilitating Mark → Divine Aura → Earth Punishment → Judgment Thunder

So the macro alternates one skill from each slot, each slot stepping through its own queue and
skipping what isn't ready. Judgment Thunder (no cooldown) keeps slot 12 from ever going idle;
Condemnation only fires while Chain is on the target. In the Earth Punishment window Condemnation
and the slot-12 skills alternate, so no Condemnation chains. **Tested: no noticeable difference** to the
repeated-Condemnation macro, so the simple one stays (convenience over max DPS).

**MP:** Retribution isn't in the macro; MP drains fast. Refill by left click to ~50%, then back.
Kept that way on purpose: refilling and bursting stay separate, so I choose when each happens.

History: original macro 7, 10, 12, 11 (2026-10-11) → Variant A (Scattershot → Condemnation → Thunder
in one slot) → Condemnation in the debuff queue, Thunder on a key → 12, 6, 7, 10 with hold-E/R bursts
(2026-10-11; holding a key on top of the held macro turned out not to work) → slots repeated for
Condemnation chains (2026-10-12/13; cast lock and skip delays made it fiddly, no noticeable gain) →
current 10, 12 (2026-10-13).

**Scattershot (since 2026-10-13): out of the macro.** When the target is Staggered, let go of the
macro and hold Scattershot's key alone for the whole Stagger. Chosen because it feels good; whether
it beats the macro on DPS is untested (the training dummy can't be Staggered). Power Burst is *not*
used to set it up: it's saved for fight phases where Stagger damage has to burst to interrupt an
attack. Stagger gauge damage in the kit: Power Burst 50, **Bolt 20–35** (by charge), Earth Punishment 20 (in the macro), Debilitating Mark
and Chain of Torment 10, Condemnation 7, Judgment Thunder 2. So for an interrupt phase, hold a fully
charged Bolt alongside Power Burst (fight-dependent; Bolt has a 45s CD).

## Hotbar
Slots numbered 1–12 from the left (in-game 2026-10-13, screenshot). The macro is on **right click**.

| Slot | Key | Queue | Use |
|---|---|---|---|
| 1 | 1 | Lightning Strike Scattershot | manual: let go of the macro, hold during Stagger |
| 2 | 2 | Healing Light | manual, reactive heal |
| 3 | 3 | Radiant Recovery | manual, reactive heal |
| 4 | 4 | (empty) | |
| 5 | Q | Power Burst | manual, saved for Stagger interrupt phases |
| 6 | E | (empty) | |
| 7 | R | (empty) | |
| 8 | C | Light of Protection | toggle at the pull |
| 9 | mouse thumb 2 | Bolt | manual (charge while moving) |
| 10 | – | Chain of Torment → Prayer of Amplification → Light of Regeneration → Condemnation | macro only |
| 11 | left click | Earth's Retribution | pull / retarget, manual MP refill |
| 12 | – | Debilitating Mark → Divine Aura → Earth Punishment → Judgment Thunder | macro only |

Defiance isn't a hotbar skill: it's on Space and only usable while crowd-controlled.

## Stigma presets

**Offensive (current; levels in-game 2026-10-13):** for leveling/trivial content, so no Resurrection or Salvation.
- Light of Protection (Lv 12): always-on party damage + defense
- Prayer of Amplification (Lv 7): self only (not party): +20% Attack, +20% PvE Damage Boost for 13s, 1 min CD
- Power Burst (Lv 5): biggest single hit, heavy Stagger
- Earth Punishment (Lv 6, 2026-10-13): **the damage engine**: Condemnation always crits on its target, and every crit resets Condemnation. 30s CD, 10s DoT; Lv 20 adds +10s

**Shard plan (decided 2026-10-13, after reading all Stigma tooltips):** Earth Punishment is the main
target; its unlocks are always on and also help the party. 44 shards in, 1 unspent (2026-10-13).
1. **Earth Punishment 5 → 10** (10 shards; at 6, 8 to go): +10% Double Chance (party +5%)
2. **Prayer of Amplification 7 → 10** (6): ×1.5 Empyrean Lord's Grace while active (13s/min)
3. **Earth Punishment 10 → 15** (20): +10% Attack and Defense (party +5%)
4. Then decide: **Earth Punishment 15 → 20** (40, doubles the always-crit Condemnation window, ~13s →
   ~26s per minute) for solo, or **Light of Protection 12 → 15** (12, +10% Max HP for the party) if
   group content dominates by then.
Light of Protection stays at 12 (its core is fully active); Power Burst stays at 5.
Costs per level: 1/2/4/8 in bands of 5 (`knowledge/endgame.md` "Stigma levels"). Shards: Abyss shop (10/50 bought at step 1, 2026-10-13; 40 more at 10k, then 15k/20k/25k).

**Defensive / progression (not built yet)**, for when content starts to bite: likely Summon
Resurrection + Salvation + Light of Protection + a flex (Benevolence for sustain, or Yustiel's Power
for a defensive cooldown). Open questions then: does the group run a Chanter (weakens Light of
Protection)? Are you the only healer?

## Skill levels (in-game 2026-10-11)
All actives are at Lv 10 from skill points (the cap); the rest comes from Daevanion, a few nodes still
missing. Arcana (Lv 15–20) not started. Spare skill points go to passives: the important ones are
maxed, the rest get levelled evenly.

Lv 14: Earth's Retribution, Judgment Thunder, Debilitating Mark, Chain of Torment, Condemnation, Divine
Aura, Bolt, Light of Regeneration, Radiant Recovery, Healing Light (13 → 14 by 2026-10-13) · Lv 12: Lightning Strike
Scattershot (11 → 12 on 2026-10-13) · Lv 10: Defiance (skill points only, no Daevanion yet). Stigmas: see above.
Passives (in-game 2026-10-13, tile level incl. bonus): Empyrean Lord's Grace 13 (10+3) · Radiant Benediction 12 (10+2) · Earth's Grace 12 (10+2) · Healing Enhancement 11 (10+1) · Immortal Veil 10 (8+2) · Warm Benediction 9 (7+2) · Survival Willpower 9 · Prayer of Concentration 8 · Empyrean Lord's Benediction 0 · Heal Block 0 (both reset, low value). Effects + icons: `knowledge/cleric-skills.md` "Passive".

**Passive plan (2026-10-13):** Empyrean Lord's Grace, Earth's Grace, Healing Enhancement are at base 10
(the skill-point cap; header bonuses +3/+2/+1), so done. Spare points: **Immortal Veil** (+14% Defense),
then **Warm Benediction** (+13% Max HP); alternative: save for **Radiant Benediction** (free party heal
on hit, low effort; needs more points than spare now). **Done 2026-10-13:** Heal Block reset (free), Radiant Benediction → 10, Immortal Veil 5 → 7; then Empyrean Lord's Benediction reset → Immortal Veil 8, Warm Benediction 7. Next spare points: Immortal Veil, then Warm Benediction. If damage taken feels worse, put Empyrean Lord's Benediction back (free).

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
| Lightning Strike Scattershot | 3 mobile · 4 Multi-Hit (slot 2 since Lv 12, 2026-10-13) | Mobility is paramount. Lv 16: option 5 (-1s all cooldowns per hit), strong since it has no cooldown and gets spammed during Stagger |
| Light of Regeneration | 1 +5% Defense · 4 +5% Move Speed | Always up (cooldown = duration = 30s), so party-wide buffs with 100% uptime beat extra healing. Move Speed also serves mobility. Candidate for the 3rd slot (Lv 20): option 5, +5% PvE Damage Tolerance, same logic |
| Condemnation | 2 up to +12% damage on fewer targets · 4 cooldown reset on Crit | Cooldown reset is the key pick (more casts inside Chain's window; Crit rate feeds it). No Root (CC), no MP (not needed). Candidate for the 3rd slot (Lv 20): option 5, Multi-Hit |
| Healing Light | 2 +20% healing at ≤50% HP · 3 50% cleanse chance | Cleanse over more raw healing (+2% HP). Not 1 (+2 consecutive uses): unclear how it works, and the 6s CD is short anyway. Specific fights may call for other picks later. Candidate for the 3rd slot (Lv 20): option 5, -2s CD |
| Radiant Recovery | 1 cleanse up to 2 debuffs · 3 -3s CD (12 → 9s) | Same as Healing Light: cleanse first, no consecutive uses for now; may revisit. Matches the KR picks. Candidate for the 3rd slot (Lv 20): option 5, +5% HP restored |
| Bolt | 3 +30% Skill Speed · 4 up to +20% damage on fewer targets | Skill Speed = faster charging (likely: cast times shown 0.4/0.7/1.1s). Fewer targets = boss damage. No Stun (CC). Candidate for the 3rd slot (Lv 20): option 5, guaranteed Crit, on the biggest hit in the kit |
| Defiance | 1 chain skill Blessing of Regeneration (only 1 slot: Lv 10) | Blessing heals ~2.1k + 40% MP, more than option 3's 10% HP at ~13k max HP. Option 2 (1000 Stamina) might be useful. All situational. Lv 12 (Daevanion) opens slot 2 |
| Earth's Retribution | 1 +20% MP restored · 4 -7s Bolt CD (since 2026-10-13) | Option 1: when MP runs out, refill fast. Option 4 back in (replacing 3, +50% Multi-Hit) since left click is now used much more, so it triggers often; earlier it was dropped because Retribution was rarely cast. Not 2 (more Discharge) either: Discharge does deal damage, but Retribution is cast too rarely for more procs to add up |

## Leveling priority (2026-10-11)
Skill points cap actives at Lv 10 (all done); spare points go to passives (key ones maxed, rest
evenly). Further levels come from **Daevanion** (11–14) and **Arcana** (15–20); see
`knowledge/cleric-skills.md` "Skill levels".

**Daevanion (to 14), next nodes:**
1. ~~Lightning Strike Scattershot 11 → 12~~ done 2026-10-13, Multi-Hit equipped.
2. **Defiance 10 → 12:** opens slot 2 + option 4 (+2s Tenacity).
3. ~~Healing Light 13 → 14~~ done (by 2026-10-13).

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
