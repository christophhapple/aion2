# Dhamira: build

Imported 2026-10-10 from the Claude doc "AION 2 Cleric - Skills & Build Notes"; this file is the source of
truth. Skill effects: `knowledge/cleric-skills.md`. Hotbar/macro mechanics: `knowledge/controls.md`.
Fully re-checked against the game on 2026-10-17: presets, hotbar, macro, Stigmas, skill levels (base,
Daevanion, gear, Arcana), Daevanion boards, specialties.

Target content: mostly group PvE; Abyss PvP second (2026-10-19, see "PvP preset").

## Presets (decided and set up in-game 2026-10-17)
Mastery (levels, specialties, hotbar, macro) and Stigma are separate tabs but **one linked "Skills"
preset**: Skills 1 = Mastery 1 + Stigma 1 (DPS), Skills 2 = Mastery 2 + Stigma 2 (Heal). Stigma
levels are per preset (in-game 2026-10-17). Switch via Batch Preset Equip (`knowledge/controls.md`).

| | **1 · DPS** | **2 · Heal** |
|---|---|---|
| For | Open world, duties, daily dungeon, Nightmare, easy low-level dungeons | Group content, harder dungeons, Transcendence |
| Stigmas | Light of Protection, Earth Punishment, Prayer of Amplification, Noble Aura | Light of Protection, Earth Punishment, Summon Resurrection, Absolution |
| Hotbar diff | R = Noble Aura; 4, E empty | 4 = Resurrection, E = Absolution; R empty |
| Macro diff | macro 10, 12; slot 10 incl. Prayer of Amplification | same macro; slot 10 without Prayer: Chain of Torment → Light of Regeneration → Condemnation |
| Skill levels, specialties, passives | identical | identical |

- Each key means one thing across presets (Q is never a heal, E never damage).
- **DPS: Voice of Doom replaced Power Burst (2026-10-17):** AoE hit + DoT on up to 4 targets vs. one
  ~4.1k single hit, and it runs in the macro instead of being saved. Lost: Power Burst's 50 Stagger
  (interrupt phases now rely on Bolt + Earth Punishment). Power Burst's shards → Voice of Doom Lv 5.
- **DPS: Noble Aura replaced Voice of Doom (same day, 2026-10-17):** Voice of Doom roots me ~0.5s per
  cast, which breaks movement while holding the macro. Noble Aura is mobile (aura follows me 5 min,
  hits my target every 2s). Not in the macro: it's on **R (slot 7), next to Light of Protection (C)**,
  both buffs to switch on at the pull.
- **Rule (2026-10-17): the macro holds only mobile skills.** Anything that stops movement stutters the
  held macro, so it goes out (Voice of Doom, Scattershot).
- ~~To test (DPS): Noble Aura instead of Light of Protection~~: Noble Aura now runs *alongside* Light
  of Protection (replacing Voice of Doom), so the comparison is moot.
- Heal drops Prayer (self-only) and Noble Aura; Earth Punishment stays (damage engine, party Double
  Chance at Lv 10, costs no attention in the macro).
- Flex Stigma: **Absolution** (party heal + cleanse; reactive, fits the trigger map). Alternative
  **Yustiel's Power** (party −20% PvE damage taken, 10s) once fights have known big hits; needs timing.
- Specialties and passives: checked 2026-10-17, no reason to differ. Light of Regeneration keeps 1 + 4
  (Move Speed) in Heal too; option 2 (+20% healing ≤50% HP) was the alternative.

## PvP preset (draft 2026-10-19, not set up in-game)
Why: Abyss PvP pays well in Abyss Points (user, 2026-10-19); still second to PvE. Target: Lower Reshanta,
alone or in a loose group, plus siege. Guide basis: `knowledge/cleric-skills.md` "PvP" (all unverified,
guides disagree). Rules: same as PvE (mobile macro, convenience over max output), plus **survival first**:
in PvP, defensive buttons are what keep me farming; deaths cost only Abyss time (no penalty, `knowledge/abyss.md`).

**Where it's used** (routines in `routines.yaml`, 2026-10-19):
| Content | Routine | Setup |
|---|---|---|
| Open-world Abyss, Abyss commands | `abyss-time`, `abyss-commands` | PvP preset as below |
| Arena of Solitude (1v1) | `arena-solo` | PvP preset as below; the test bench for the Root procs and the Q/E timing |
| Arena of Cooperation (5v5), Battlefield (10v10), siege | `arena-team`, `battlefield`, `siege` | group variant: Absolution (or Summon Resurrection) instead of Prayer of Amplification, same shards. Swapping a Stigma is a free reset, so no 4th preset needed (all 3 are used) |
| Abyss Corridor (PvE arena, endless spawns) | `corridor` | DPS preset (Set 1); switch back to Set 3 when leaving, the entrance gets camped |

**Skills preset 3** = a copy of preset 1 (DPS), then these changes. Batch Preset Equip **Set 3** = Skills 3,
everything else as Set 1 (Genus Insight: Crit Resist in slot 2 [guide], later, if it's cheap).

**Stigmas** (80 shards, own pool like every preset):
| Stigma | Lv | Shards | Why |
|---|---|---|---|
| Light of Protection | 10 | 15 | in every guide's PvP set; PvP +7.5% Boost and Tolerance; toggle at the pull, as now |
| Prayer of Amplification | 10 | 15 | stays in the macro (zero attention); +10% PvP Damage Boost, +10% more at Lv 5 |
| Yustiel's Power | 15 | 35 | the PvP core per guides: PvP +10% Tolerance for me + party, Lv 5 shield 10% Max HP, Lv 10 +100 Block/Evasion, Lv 15 +20% Status Effect Resist (vs CC) |
| Salvation | 10 | 15 | the escape button: 3s immune to damage and CC; Lv 5 +100% Incoming Heal, Lv 10 restores 20% Max HP at the end |
Out: Earth Punishment (guides split; good only vs tanky classes) and Noble Aura. Group variant: see "Where it's used":
Absolution for cleanse + party heal by default, Summon Resurrection if the group keeps losing people.

**Hotbar diff vs DPS:** Q = Yustiel's Power, E = Salvation, R empty (Noble Aura out). Macro: same as DPS.
Both new keys are defensive, so "Q never a heal, E never damage" still holds.

**Specialties:** the PvE picks, with three swaps. All are random procs, so none adds anything to press or watch:
- **Healing Light 2 → 3** (50% cleanse on my own heal; two guides agree).
- **Judgment Thunder 1 → 4** (10% Root 2s): almost free, since MP isn't short; Thunder fires constantly from the macro.
- **Condemnation 2 → 3** (20% Root 3s): costs some single-target damage, but it's the most-hit skill.
- Why Root: it holds melee off a ranged Cleric, and **my Defiance doesn't remove Root** (tooltip list), so if other
  classes' breaks match, Root is hard to shake (inference). The PvE rule "own power over CC" doesn't apply here (2026-10-19).
- Kept: Chain of Torment 2 (+3s DoT also keeps Condemnation's window open), Debilitating Mark 2, 4 (option 4 also
  cuts PvP Damage Boost). Bolt and Divine Aura CC: too rare to matter. Unknown: how much players' Status Effect Resist
  and immunity windows blunt 10–20% procs, so try it and compare.
Close by: **Defiance option 5** (+25% PvP Damage Tolerance during Tenacity) needs Lv 16, one Arcana line
away (now 15).

**Passives:** unchanged. Immortal Veil and Survival Willpower (the guides' PvP picks) are already at base 10.

**Trigger map (on top of the macro):**
- **An enemy player starts on me** → Yustiel's Power (Q). Not at the pull: it's 10s, save it for their burst.
- **HP low and still dropping** → Salvation (E), then Healing Light during the 3s.
- **I got CC'd** → Defiance (Space), as in PvE. Note: **Salvation shares a 30s lockout with Tenacity**
  (tooltip), so right after Defiance, Salvation may not be usable; inference, check in-game.
- **Debuffed / slowed** → Radiant Recovery (removes 1).
- **Abyssal Power Shards:** toggle on when going in (they ignore some PvP Defense, `knowledge/abyss.md`).
- Losing anyway → die or fly back to Western Root; respawn there, no penalty.

**Open (in-game):** does Salvation's Lv 10 line really restore 20% Max HP; does the Tenacity lockout block
Salvation after Defiance; does Chain of Torment option 4 (PvE Damage Tolerance) do anything in PvP.

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
  - **Timed or placed damage stays manual:** Bolt (charge). (Power Burst was saved for interrupt
    phases until 2026-10-17.)
  - **Long buffs are pressed at the pull:** Light of Protection (C, toggle) and Noble Aura (R, 5 min),
    side by side.
  - **Exception, convenience over DPS (2026-10-13):** Prayer of Amplification and Divine Aura are in
    the macro and fire whenever ready, instead of being saved for burst windows / grouped packs.
- The macro is held down. Single presses of other keys go through on top of it; *holding* another key
  doesn't (in-game 2026-10-12), so for a held key let go of the macro first (no held key left
  since 2026-10-17).
- MP is single-source: everything is paid for by weaving Earth's Retribution between spenders.
- Every heal also heals me (party heals include me; Healing Light heals me + the lowest-HP member).
  No *dedicated* self-heal is needed; beyond that, self-preservation = positioning + reactive buttons.

## Macro (right click)
The "whenever ready" button. Mechanics (`knowledge/controls.md`): the macro and slot queues are both
**sequences that cycle**; each macro entry gives its slot one try (one skill from its queue), anything
not castable is skipped, and the delay applies even to skipped entries.

**Current setup (Mastery 1 and 2 set in-game 2026-10-17):** macro **10, 12**,
all delays 10 ms. (The macro window labels each entry with the first skill of that slot's queue.)
- **Slot 10:** Chain of Torment → Prayer of Amplification (DPS preset only) → Light of Regeneration → Condemnation
- **Slot 12:** Debilitating Mark → Divine Aura → Earth Punishment → Judgment Thunder
- Slot 5 (Q) is **empty in both presets** since 2026-10-17 (it held Voice of Doom; its replacement Noble
  Aura sits on R, pressed manually); its macro entry was removed the same day.
- Scattershot (slot 1) is **out of the macro** in both presets since 2026-10-17: at base Lv 1 it lost
  its mobile specialty, so each cast stuttered movement.

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
10, 12 (2026-10-13) → 10, 12, 5, 1 (2026-10-17) → 10, 12, 5 (Scattershot out) → current 10, 12 (2026-10-17, Noble Aura moved to R).

**Scattershot (2026-10-17): dropped to base Lv 1, unused.** Guides skip it or advise against points,
and holding it alone during Stagger (2026-10-13 → 10-17) didn't feel like noticeably more DPS. Its
skill points go to Defiance and passives (see "Skill levels"). Briefly in the macro the same day, but
without the mobile specialty it stuttered movement, so it's out. Stagger gauge damage
in the kit: **Bolt 20–35** (by charge), Earth Punishment 20 (in the macro), Debilitating Mark and
Chain of Torment 10, Condemnation 7, Judgment Thunder 2; Noble Aura: none listed in its tooltip.
(Power Burst 50, no longer slotted.) So for an interrupt phase, hold a fully charged Bolt
(fight-dependent; Bolt has a 45s CD).

## Hotbar
Slots numbered 1–12 from the left (in-game 2026-10-13, screenshot). The macro is on **right click**.

| Slot | Key | Queue | Use |
|---|---|---|---|
| 1 | 1 | Lightning Strike Scattershot (base Lv 1) | unused (out of the macro, 2026-10-17) |
| 2 | 2 | Healing Light | manual, reactive heal |
| 3 | 3 | Radiant Recovery | manual, reactive heal |
| 4 | 4 | Heal: Summon Resurrection · DPS: empty | manual: someone died |
| 5 | Q | (empty; Voice of Doom until 2026-10-17) | |
| 6 | E | Heal: Absolution · DPS: empty | manual: party low after a big hit, or debuffs left |
| 7 | R | DPS: Noble Aura · Heal: empty | at the pull (5 min), next to Light of Protection |
| 8 | C | Light of Protection | toggle at the pull |
| 9 | mouse thumb 2 | Bolt | manual (charge while moving) |
| 10 | – | Chain of Torment → Prayer of Amplification (DPS only) → Light of Regeneration → Condemnation | macro only |
| 11 | left click | Earth's Retribution | pull / retarget, manual MP refill |
| 12 | – | Debilitating Mark → Divine Aura → Earth Punishment → Judgment Thunder | macro only |

Defiance isn't a hotbar skill: it's on Space and only usable while crowd-controlled.

## Stigma presets

Which Stigmas go in which preset: see "Presets" above. Stigma 1 = DPS (the old "Offensive"), Stigma 2 =
Heal (the old "Group" from 2026-10-16, with Absolution in place of Prayer of Amplification).
Levels: DPS / Heal (per preset, see the splits below).
- Light of Protection (Lv 10 / 10): always-on party damage + defense
- Earth Punishment (Lv 15 / 15, 2026-10-19): **the damage engine**: Condemnation always crits on its target, and every crit resets Condemnation. 30s CD, 10s DoT; Lv 20 adds +10s
- Prayer of Amplification (Lv 10, DPS): self only (not party): +20% Attack, +20% PvE Damage Boost for 13s, 1 min CD
- **Noble Aura (DPS, 2026-10-17, Lv 9, replaces Voice of Doom):**
  Aura follows me 5 min and hits my target every 2s; mobile; 1 min CD.
  Lv 5: +200 Aura Crit. (Voice of Doom, slotted earlier the same day, rooted me ~0.5s per cast.)
- **Summon Resurrection (Lv 10, Heal, 2026-10-16):** revive within 40m, 2 min CD; Lv 5 = −1s cast (2s → 1s). Lv 10 adds 3s invincibility after the res
- **Absolution (Lv 10, Heal, 2026-10-17):** party heal + removes debuffs; Lv 5 = −30s CD (1:30 → 1:00), Lv 10 = removes all debuffs (base: up to 2)

**Shard rule (2026-10-17): spend to breakpoints** (5/10/15/20). Levels in between only raise base
values a little: Light of Protection Lv 10 → 12 was +1% (15% → 16%) for 8 shards (in-game 2026-10-17).
Shards reset free per Stigma, levels are per preset, and each preset gets the whole pool (**80 shards**
(2026-10-19, +20 bought; 60 on 2026-10-18), both presets 0 unspent (assumed: 80 = exactly the splits below)).

**DPS split (2026-10-19):** Light of Protection **10** · Earth Punishment **15** (+10% Double Chance, party +5%;
+10% Attack and Defense, party +5%) · Prayer of Amplification **10** (×1.5 Empyrean Lord's Grace while active) ·
Noble Aura **10** (2026-10-18; was Voice of Doom 5) = 15 + 35 + 15 + 15 = 80.
Next (2026-10-19 plan): **+20 → Prayer of Amplification 15** (×1.5 Earth's Grace = Crit Damage Boost 16% → 24%
while Prayer is up), then **+40 → Earth Punishment 20** (+10s: Earth Punishment and Earth's Blessing last 20s on a
30s CD, so the always-crit Condemnation window goes from 1/3 to 2/3 of the time). Light of Protection 15 (+100
Accuracy) and Noble Aura 15 (+30% vs Incapacitated) are weak for PvE.

**Heal split (2026-10-19):** Light of Protection **10** · Absolution **10** (−30s CD, removes all debuffs) ·
Summon Resurrection **10** (3s invincibility after the res) · Earth Punishment **15** = 80.
Next: the 20 shards that give DPS Prayer 15 have no good Lv 15 here; park them in Light of Protection 15 (+100
Accuracy, also for the party). At +40 more, Earth Punishment 20 in this preset too (Earth's Blessing 20s for the
party). Reset is free, so parking costs nothing. Other Lv 15 options are weak: Light of Protection +100 Accuracy (its +10% Max HP is Lv 20,
40 more shards), Absolution +5% HP restored, Summon Resurrection 20% HP on res.

History: until 2026-10-17 one shared set (Light of Protection 12, Earth Punishment 9, Prayer 7,
Power Burst 5); briefly a Heal split "A" with Light of Protection 12 before the breakpoint rule.
Costs per level: 1/2/4/8 in bands of 5 (`knowledge/endgame.md` "Stigma levels"). Shards: Abyss shop (10/50 bought at step 1, 2026-10-13; 40 more at 10k, then 15k/20k/25k).

**If the Heal preset isn't enough** (content starts to bite): swap Absolution or Earth Punishment for
Yustiel's Power (defensive cooldown), Salvation (self) or Benevolence (sustain). Open questions then: does the group run a Chanter (Light of Protection doesn't stack with Undefeated Mantra, `knowledge/cleric-skills.md`; weakens Light of
Protection)? Are you the only healer?

## Skill levels (in-game 2026-10-17: base + Daevanion, gear and Arcana unequipped)
Levels come from skill points (base, cap 10), Daevanion (+1–4, up to 14), gear (+skill levels) and
Arcana. Read with gear and Arcana unequipped: the baseline Arcana builds on. Stigmas: see above.

| Skill | Base | Daevanion | Total |
|---|---|---|---|
| Earth's Retribution, Judgment Thunder, Debilitating Mark, Divine Aura, Chain of Torment, Light of Regeneration, Condemnation, Healing Light, Radiant Recovery, Bolt | 10 | +4 | **14** (max) |
| Defiance | 1 chain skill Blessing of Regeneration · 4 +2s Tenacity (slot 2 since 2026-10-17, Lv 14) | Blessing heals ~2.1k + 40% MP, more than option 3's 10% HP at ~13k max HP. Option 4: longer CC immunity. Lv 16 option 5: +50% PvE Damage Tolerance during Tenacity |
| Lightning Strike Scattershot | 1 | 0 | 1 (unused) |
| Warm Benediction, Empyrean Lord's Grace, Healing Enhancement, Immortal Veil, Earth's Grace, Survival Willpower, Radiant Benediction | 10 | +4 | **14** (max) |
| Prayer of Concentration | 5 | +4 | 9 (last Triniel green node taken 2026-10-18; 10 with the Chalice Arcana) |
| Empyrean Lord's Benediction, Heal Block | 1 | 0 | 1 (no points, low value) |

Effects + icons: `knowledge/cleric-skills.md` "Passive". Before the 2026-10-17 rework: Scattershot 12,
passives partly 11–13.

**On top (equipped, 2026-10-17, told by the user):**
- Gear: Scattershot +1, Healing Light +1, Healing Enhancement +1.
- Arcana (4 of 5 slots, no Bell yet): all **Common, fully upgraded** (Common max +2, so 3 lines at +1 each), 22 GS each (in-game 2026-10-19). No room left: better levels need new cards.

| Card | Set | Skill lines |
|---|---|---|
| Chalice | Magic | Earth's Grace +1, Immortal Veil +1, Prayer of Concentration +1 |
| Parchment | Magic | Radiant Recovery +1, Debilitating Mark +1, Earth's Retribution +1 |
| Compass | Vigor | Judgment Thunder +1, Defiance +1, Scattershot +1 |
| Mirror | Vigor | Healing Enhancement +1, Radiant Benediction +1, Empyrean Lord's Benediction +1 |

Both 2-piece sets are active (Magic Armor + Primal Vigor, `knowledge/gear.md`).
**Totals:** Healing Enhancement 16 · Healing Light, Radiant Recovery, Debilitating Mark, Earth's
Retribution, Judgment Thunder, Defiance, Earth's Grace, Immortal Veil, Radiant Benediction 15 ·
Prayer of Concentration 10 (2026-10-18, in-game) · Scattershot 3 · Empyrean Lord's Benediction 2 · the rest 14.
No active is at 16 yet, so no option 5 is unlocked. Wasted lines: Scattershot (2, unused skill),
Empyrean Lord's Benediction (1, no points).

**Passive plan (2026-10-13):** Empyrean Lord's Grace, Earth's Grace, Healing Enhancement are at base 10
(the skill-point cap; header bonuses +3/+2/+1), so done. Spare points: **Immortal Veil** (+14% Defense),
then **Warm Benediction** (+13% Max HP); alternative: save for **Radiant Benediction** (free party heal
on hit, low effort; needs more points than spare now). **Done 2026-10-13:** Heal Block reset (free), Radiant Benediction → 10, Immortal Veil 5 → 7; then Empyrean Lord's Benediction reset → Immortal Veil 8, Warm Benediction 7. **2026-10-16:** Defiance 10 → 8 (Lv 9–10 only scale the Blessing heal), Immortal Veil 8 → 10. Next spare points: Warm Benediction. If damage taken feels worse, put Empyrean Lord's Benediction back (free).

**Done 2026-10-17: Scattershot base 10 → 1** (lowest possible; its Daevanion levels still apply).
Freed points went to **Defiance 8 → 10** (base for Daevanion 12), **Warm Benediction → 10**,
**Survival Willpower → 10**, with **Prayer of Concentration down to 5** (weakest passive left).
Every passive except Prayer of Concentration (5), Empyrean Lord's Benediction and Heal Block (Lv 1, no points) is now
at base 10.

Everything above is Mastery preset 1; Mastery preset 2 (Heal) is a copy with only the hotbar/macro
differences listed in "Presets".

## Specialties (in-game 2026-10-17, same in both presets)
Options per skill: `knowledge/cleric-skills.md`. Lv 20 slots locked everywhere (no skill at 20 yet).

**Rules (offensive build):**
- Pick options that make *me* stronger (damage, MP, my heals) over crowd control and enemy
  slow/speed-down (Stun, Root, Combat Speed).
- Exception: on a **debuff skill, maximize its debuffs** (Debilitating Mark, likely Chain of Torment).
- **Mobility is paramount:** "becomes mobile" options come first.
- MP: no shortage as of 2026-10-17 (user), so MP options are only kept where nothing better fits
  (Thunder −20% MP). Retribution +20% MP restored dropped for more Discharge.
- Harder content gets a second preset/build with its own rules (enemy damage-down, CC may matter there).

| Skill | Picked (option no., Lv 8 + 12 slots) | Why |
|---|---|---|
| Judgment Thunder | 1 -20% MP consumed · 2 up to +12% damage on fewer targets | Own damage and MP over enemy slow/Root. Option 2 pays off on single bosses. No cooldown, so -20% MP means more casts per refill |
| Debilitating Mark | 2 -15% target Defense · 4 +10% enemy Damage Boost reduction | Debuff skill: maximize debuffs. Not 1 (no MP cost + MP restore): MP isn't short. Not 3 (Stun chance) |
| Divine Aura | 3 +50% attack speed · 4 +3s aura duration (since 2026-10-17) | Single target on purpose: enough AoE elsewhere, more single-target damage wanted (2026-10-17). Without option 2 it likely hits only the selected target. Earlier: 2 AoE · 3. Candidate for the 3rd slot (Lv 20): option 5, -10s CD |
| Chain of Torment | 2 +3s DoT · 4 +10% enemy Damage Tolerance reduction | Debuff skill: maximize debuffs; CC (slow, Knockdown) least important. +3s DoT also widens Condemnation's window |
| Lightning Strike Scattershot | none from 2026-10-17 (below Lv 8 once lowered to base 1); were 3 mobile · 4 Multi-Hit | Dropped to base Lv 1, unused (not mobile without option 3) |
| Light of Regeneration | 1 +5% Defense · 4 +5% Move Speed | Always up (cooldown = duration = 30s), so party-wide buffs with 100% uptime beat extra healing. Move Speed also serves mobility. Candidate for the 3rd slot (Lv 20): option 5, +5% PvE Damage Tolerance, same logic |
| Condemnation | 2 up to +12% damage on fewer targets · 4 cooldown reset on Crit | Cooldown reset is the key pick (more casts inside Chain's window; Crit rate feeds it). No Root (CC), no MP (not needed). Candidate for the 3rd slot (Lv 20): option 5, Multi-Hit |
| Healing Light | 1 +2 consecutive uses · 2 +20% healing at ≤50% HP (since 2026-10-17) | Burst healing over the 50% cleanse chance. Earlier: 2 · 3 (cleanse). Candidate for the 3rd slot (Lv 20): option 5, -2s CD |
| Radiant Recovery | 2 +1 consecutive use · 3 -3s CD (12 → 9s) (since 2026-10-17) | More party healing over cleansing 2; it still removes 1 without a specialty, which is enough. Earlier: 1 (cleanse 2) · 3. Candidate for the 3rd slot (Lv 20): option 5, +5% HP restored |
| Bolt | 3 +30% Skill Speed · 4 up to +20% damage on fewer targets | Skill Speed = faster charging (likely: cast times shown 0.4/0.7/1.1s). Fewer targets = boss damage. No Stun (CC). Candidate for the 3rd slot (Lv 20): option 5, guaranteed Crit, on the biggest hit in the kit |
| Defiance | 1 chain skill Blessing of Regeneration · 4 +2s Tenacity (slot 2 since 2026-10-17, Lv 14) | Blessing heals ~2.1k + 40% MP, more than option 3's 10% HP at ~13k max HP. Option 4: longer CC immunity. Lv 16 option 5: +50% PvE Damage Tolerance during Tenacity |
| Earth's Retribution | 2 +20% Discharge trigger chance · 4 -7s Bolt CD on Discharge (since 2026-10-17) | Left click is used a lot, so more Discharge procs (damage + more Bolt CD cuts) add up; MP isn't short. Earlier: 1 +20% MP restored · 4 |

## Leveling priority (2026-10-11)
Skill points cap actives at Lv 10 (all done); spare points go to passives (key ones maxed, rest
evenly). Further levels come from **Daevanion** (11–14) and **Arcana** (15–20); see
`knowledge/cleric-skills.md` "Skill levels".

**Daevanion (to 14), next nodes:**
1. ~~Lightning Strike Scattershot 11 → 12~~ done 2026-10-13, Multi-Hit equipped. **Planned
   2026-10-17:** reset Scattershot's Daevanion levels (boards can be reset) and spend them on Defiance,
   if the board allows.
2. ~~**Defiance → 12**~~ done 2026-10-17, now Lv 14 (Daevanion +4): slot 2 open, option 4 (+2s Tenacity) planned.
3. ~~Healing Light 13 → 14~~ done (by 2026-10-13).

**Boards reworked 2026-10-17.** Nezekan, Zikel, Vaizel and Triniel were checked for shorter paths and
5 points saved (1/1/2/1). Spare points then went to **Prayer of Concentration** nodes: Zikel 2 green
(4 points), Vaizel 1 common + 1 green (3), Triniel 1 common on the way to a green.
- ~~2 points for the last green Prayer of Concentration node on Triniel~~ done 2026-10-18 (Nightmare shop points).
- **Next:** common nodes with useful stats. Skip Multi-hit Resist (low PvE value, `knowledge/endgame.md`).
- Corners: Nezekan all 4; Zikel, Vaizel, Triniel: what's taken matches what's wanted (2026-10-17).

**Arcana (15–20): 4 Common cards, maxed** (see "Skill levels"). Lv 16 unlocks option 5, Lv 20 the 3rd slot.
- **Goal (2026-10-17): get option 5 on Condemnation (Multi-Hit) first**, then Healing Light (−2s CD), Radiant
  Recovery (+5% HP restored), Bolt (guaranteed Crit). Which comes first depends on the cards that drop.
- **Sets: keep both 2-piece bonuses** (2 Magic + 2 Vigor); a Bell is a free fifth slot, either set.
- Replace cards with Scattershot or Empyrean Lord's Benediction lines first (Compass, Mirror): their levels are wasted.
- Upgrades add +1 to a random line already on the card (guide), so prefer cards whose lines are all useful.

## Manual layer: trigger map
Everything pressed on top of the held macro.

**Healing**
- **One person's HP drops sharply** → Healing Light (6s CD; heals me + the lowest-HP member, +20%
  at ≤50% HP, +2 consecutive uses). Most-pressed.
- **Whole party took AoE damage** → Radiant Recovery (9s CD, +1 consecutive use).
- **A debuff needs removing** → Radiant Recovery (removes 1 without any specialty; enough, user 2026-10-17). Heal preset: Absolution (E) for more.

**Damage**
- **Stagger interrupt phase** → a fully charged Bolt (35 gauge).
- **Bolt ready, nothing to save it for** → charge it while moving.
- **Target Staggered** → nothing extra (Scattershot unused since 2026-10-17).

**Utility**
- **MP low** → left click (Earth's Retribution) until ~50%, then back to the macro (rare as of 2026-10-17).
- **I got CC'd** → Defiance (Space). Trigger is "I can't act", not "I'm low"; only usable then.

**Heal preset:** someone died → Summon Resurrection (4). Party low after a big hit, or a debuff
needs removing → Absolution (E).

## Play loop
At the pull: toggle Light of Protection (C), DPS preset also Noble Aura (R; lasts 5 min). Then hold right click (macro) and
press on top of it per the trigger map above. Left click to switch target / pull the next pack.
