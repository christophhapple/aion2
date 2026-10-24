# Gear progression

Researched 2026-10-10; guide-sourced and unverified unless tagged `in-game`. Sources [n]: `sources.md`.
Overview: `progression.md`.

## What raises GS
Gear, enhancement, Manastones/Theostones, belt, amulet, Ascension bracelets, Clash Runes, Arcana
[1][2][15]. Daevanion points raise **GS 1:1** (in-game 2026-10-13); Pantheon raises Combat Power, not GS (in-game 2026-10-19, reconfirmed 2026-10-22).
Arcana per card: **Common 20, Unique 80** (in-game 2026-10-19: Common cards show 20, the Transmutation preview
shows a Unique card at 80), **+1 GS per upgrade level** (Common +2 = 22, in-game 2026-10-19). **+20 GS per grade:
Rare 40, Epic 60** (in-game 2026-10-22, user; matches guides [2][14][17]).

**+1 enhancement level = +1 GS** (in-game 2026-10-10, one test; assumed linear and the same for all
rarities, unconfirmed). **Enhance Stones are the bottleneck** for enhancing (in-game experience 2026-10-10).

## Rarity ladder
**Common → Rare → Epic → Unique → Heroic** (confirmed by several sources [23][57][58]). "Special" is a
separate grade for consumables, skins, Arcana crystals [57][58]. Mythic exists in client data; no
Heroic/Mythic gear on global yet, so global gear tops out at Unique [21][30]. Enhancement cap per
grade: Common/Rare +5, Epic +10, Unique +15 [30, snippet].

| Grade | Color (in-game 2026-10-10) |
|---|---|
| Common | white |
| Rare | green |
| Epic | blue |
| Unique | gold |
| Heroic | not seen yet |
| Special (consumables, runes) | teal (in-game 2026-10-13, Clash Rune) |

## Enhancement (normal gear)
- **+1 to +10: always succeeds** (in-game 2026-10-22) [21][22].
- +11 → +15: **65%** (+10 → +11, in-game 2026-10-22) / 50 / 35 / 25 / 20%, +5% to the next attempt after each failure [21].
- Above +15: Amplify Stones, 66% → 20%, 600k–3M Kina per try [21].
- Failure never breaks or downgrades the item; only materials are lost (in-game 2026-10-22) [22]. Rates after +11 not checked in-game.
- **Extraction** (gear inventory menu) returns **100% of the Enhance Stones** invested (in-game test
  2026-10-10; the window doesn't show the amount beforehand) and **destroys the item** (in-game 2026-10-19). Kina spent is lost [31][32][22]. Unclear
  for stones spent above +10. So enhancing gear you'll replace soon costs only Kina.
- **Transfer** (carry enhancement onto a new piece; community name "succession crafting"): **exists on
  global**, Enhancement window → "Transfer" tab, choose source + destination gear (in-game 2026-10-10).
  Korean wiki: carries enhancement, breakthrough and Soul Binding to an equal or higher tier piece in the
  same slot [33, KR].
- **Transfer window (in-game 2026-10-19, two Unique maces: +10 Aulamus GS 70, +0 Holy Spirit GS 41):**
  - Shows both pieces side by side with their Soul Binding Rate and lines; one is marked **"Deleted upon Gear
    Transfer"**, the other **"Superior Transfer"**. Tooltip: "Transfers gear to a higher grade. Higher grade gear
    cannot be transferred to lower grade gear. When transferring to a higher grade, Soul Binding stats are applied
    at the enhance level of the transferred gear."
  - **No preview of the result**: only the two pieces' own tooltips, nothing on what carries over (Manastones,
    Theostone, Soul Fuse). So the "Carries / Does not carry" list below is still unverified.
  - Needs a **Gear Transfer Material**: **Transfer Stone (Unique) (Bound)**, "Can be used on Unique gear". Made via
    **Substance Morph from spare Unique gear** (pick several pieces; "Include Enhanced" checkbox), 100% success; the
    recipe says "Quantity to Receive: 10" (in-game 2026-10-19; whether that's per morph or a limit: unclear). How many
    stones one transfer takes: not checked. **Sync Stone (Unique) (Bound)** (for Soul Binding Sync) comes from the
    same kind of recipe. A spare piece is used up either way: **Extraction destroys the item** (in-game 2026-10-19),
    so it's stones (Extraction) *or* Transfer/Sync Stones (morph), not both. Whether morphing an enhanced piece
    refunds any Enhance Stones: unknown.
  - "Grade" here seems to mean the gear tier (GS), not rarity: both pieces were Unique (inference).
  - Picking gear lists **Equipped Gear** and the **Cube** (bag) separately. **Only Unique pieces** can be picked, at
    any enhance level (+0, +6, +10 all seen) (in-game 2026-10-19).
  - Pieces at **100% Soul Binding Rate are greyed out**: "Gear with fixed Soul Binding effects cannot be used in gear
    transfer" (in-game 2026-10-19). So "fixed" = maxed at 100% (user's reading; guides also say 100% locks the item
    [242][245]). **Consequence (inference):** a piece bound to 100% can never be transferred, so the Codex spent on it
    stays with that piece. Push to 100% only on keepers; on gear you'll replace, stop below 100% if you want to
    transfer it.
  - **Same slot only:** after picking the target, only pieces of the same type are offered as source (weapon →
    weapon, gloves → gloves) (in-game 2026-10-19; matches the KR wiki [33]).
- **What Transfer carries (researched 2026-10-16, guides, unverified):**
  - **Carries:** enhancement level, breakthrough, **Soul Binding base lines at their reached values**
    [33, KR][242][243][244][296][297].
  - **Does not carry:** **Manastones**, **Theostones** and "Potential" stats stay on the old piece and are lost with it [296][298]
    (Theostones: [251] says kept, see "Theostones"). The **Soul Fuse line** (Philosopher's Stone) does not carry; the new
    piece needs a new Fuse [296][297].
  - Source piece is described as "sacrificial", so probably consumed; not stated outright [299]. Kina cost
    not found on global; same-slot rule confirmed in-game (above). KR (2026-06-10): Bound gear only [299, KR].
  - **So (inference):** enhancement and Soul Binding (below 100%, see above) are safe on gear you'll replace;
    Manastones, Theostones and Soul Fuse only on keepers. The window has no result preview (in-game 2026-10-19),
    so the first real transfer will tell.
- Wing → enhancement stone conversion capped at 20/week per server (patch 2026-10-07) [7].

## Belt and Revelation amulet (shared rules)
- Path: Rare +0→+10 → transmute → Epic +0→+10 → transmute → Unique +0→+10. **Cap on global: Unique +10**
  [35][38][41]. Path and Unique +10 cap confirmed (in-game 2026-10-22).
- Each +1: **1 scroll** + Enhance Stones + a little Kina, always succeeds (in-game 2026-10-10 up to Epic
  +9; guides agree for all tiers [35][38]).
- **Start:** both items start at **Rare +0** (IL 13). Belt: reward of the level-13 main quest "Visions
  in Smoke"; amulet: main story around level 16 [60][59][57].
- **Scroll budget:** 30 per item from Rare to Unique +10, i.e. 10 per tier [35][36][38][60]. A maxed
  Monolith (30) gives all 30 amulet scrolls up front, so an Epic +9 amulet still has ~11 spare, enough
  for everything left. **Confirmed: Monolith 30 + Epic +9 amulet → exactly 11 scrolls left** (in-game
  2026-10-10). Enhance Stones are the real limit (in-game).
- Transmute (Substance Morph): item must be +10 and unequipped, becomes next tier at +0; no scroll cost
  listed; once per character per step [35][38].
- Stones and Kina per tier, +0→+10 [38]: Rare 9,280 stones / 232k · Epic 63,060 / 1.58M ·
  **Unique 200,980 / 5.03M**. So Unique is the expensive part, and stones are the limit.
- Belt and amulet are never replaced and can't be exchanged once maxed [14][42].

## Belt (Noble Belt)
- Scrolls: **Stronghold (a.k.a. Garrison) first clears** (source confirmed in-game 2026-10-22). 15 home-region × 2 = 30 [38][41] **vs** 15 home
  + 15 enemy-region (via rifts after 45) = 30, i.e. 1 each [35][60][59]; [59] says both "2 each" and "30
  Strongholds = 30", which can't both be true. Enemy-region Strongholds give no scrolls [41]. Green
  quests and "?" map markers may also drop belt scrolls [59, single source].

## Revelation amulet
- Scrolls: **Monolith only** (in-game 2026-10-22) [34]: 1 per level for levels 2–29, 2 at level 30 = 30 total [36][38]. No
  other source after level 30 [34]. Monolith levels cost Empyrean Traces (feathers) of your own faction's
  regions (Verteron for Elyos) [37].
- **Power Shards:** consumable, toggle on to use; buff Attack while being consumed (in-game 2026-10-18).
- **Spare feathers after Monolith 30:** global: convert to **Power Shards** via Substance Morph:
  **1 Empyrean Trace → 10 Power Shards** (in-game 2026-10-10), judged not worth it [37][39]. KR has 1 Trace → 50 Enhance Stones (capped 1,680/server) [40, KR], **not on global
  yet**; one guide expects it later [39, speculation]. Advice: keep the stack, morph only what you need [39].
- Reshanta (Abyss) has its own Monolith (max 20, PvP rewards) with its own feathers [37].
- Fierce Battle Amulet (Abyss) uses Abyss Shop scrolls, which don't work on the Revelation Amulet [35][38].

## Clash Runes
- 2 slots [19][20]. **GS: 40 per rune + 1 per enhancement level** (in-game 2026-10-13: tooltip of a +2
  rune shows "Item Level 40(+2)"; matches ~40 per rune [20]).
- Grade "Special" (teal background). Stats on a +2 rune: PvE Damage Tolerance 0.5% (+1% from
  enhancement), PvE Damage Boost 0.5%, Penetration 100, Combat Speed 1%, Multi-hit Chance 1%; required
  level 10 (in-game 2026-10-13). So enhancing adds only +1 GS per level but also boosts a stat line.
- Only one kind of Clash Rune, same stat lines on every rune (in-game 2026-10-17), so a spare from
  any source works as backup.
- Upgrade: Clash Rune Enhance Scrolls + Kina + Enhance Stones. Success: +1 100%, +2 80%, +3 66%,
  +4 50%, … +10 10%; no pity [20][21].
- **Failure destroys the rune** (in-game 2026-10-10: tooltip on a +1 rune says "destroyed upon enhance
  failure"). ~~Only drops a level [21]~~ is wrong. Only upgrade past +1 with a spare rune.
- Sources: regional quests at Lv 30/32/35/37/45 (~4 per faction) [19][20]; Nightmare shop (500
  Phantasmal Fragments per chest) [20]; Season shop (4,000 Oath Coins) [20]; events, free Daeva Pass
  track, world bosses [20]. Premium pass + cash shop are paid (not relevant, F2P).

## Arcana (cards)
- Equip from **Lv 45** [158]. Slots: **5** (in-game 2026-10-12; Chalice, Parchment, Compass, Bell,
  Mirror [158]; ~~4 in season 1~~ [159]). Each card fits exactly one slot [159].
- **Training Arcana** can drop before you own any card (in-game 2026-10-12); they're upgrade fodder only.
- Each slot has a **Vigor** and a **Magic** version. Sets [158]:
  - Primal Vigor: 2 pieces +60 PvE Attack above 70% HP, 4 pieces +150. With 4 equipped, the tooltip shows
    **both** tiers lit (in-game 2026-10-22); a lone Magic card shows both Magic tiers greyed out. Whether that
    means +210 in total or +150: not shown.
  - Magic Armor: 2 pieces restore 1,500 MP at ≤20% MP (30 s cooldown); 4 pieces +1,000 PvE Defense at ≥50% MP.
- **Slot stat (guides [379][382], unverified):** each card also carries one Empyrean Lord stat, Vigor / Magic:
  Chalice Time (Combat Speed, Double Resist) / Space (Move Speed, Block) · Parchment Life (HP, Regeneration) /
  Destiny (MP, Endurance) · Compass Freedom (Accuracy, Evasion) / Death (Crit, Regeneration Penetration) · Bell
  Justice (Defense, Perfect) / Destruction (Attack, Perfect Resist) · Mirror Illusion (cooldowns, Endurance
  Penetration) / Wisdom (MP cost, Double). Amount per grade 8 / 12 / 16 / 20 [379]; one calculator says +0.1% per
  point on each effect [382], so a Unique card ≈ +2%: small next to the set bonus and skill lines (inference).
- Skill pools per slot: actives on Parchment + Compass, passives on Bell + Mirror, anything on Chalice [379][380].
  **Stigma skills never roll on Arcana** [389]. A Unique card at +5 = **85 GS** [389] (fits +1 GS per upgrade level,
  in-game for Common), so five maxed Uniques = 425 GS; vs Common +2 (22) that's +63 per slot.
  Cleric pools: `cleric-skills.md` "Skill levels".
- Per grade [158]: Common GS 20, 1 skill level, max +2 · Rare GS 40, 2 skill levels, max +3 ·
  Epic GS 60, 3 skill levels, max +4 · Unique GS 80, 4 skill levels, max +5. Skill levels go to skills
  listed on the card; each upgrade adds +1 to a random skill line already on it [160]. **GS (20 per grade)
  and max upgrade (Common +2, one more per grade) confirmed in-game** (2026-10-22, user), so maxed cards are
  Common 22 · Rare 43 · Epic 64 · Unique 85.
  A card's grade can't be raised: a Common stays Common, better grades are new cards (user's impression
  in-game 2026-10-19, nothing in-game suggests otherwise).
- **Upgrade:** no Enhance Stones, no failure; feed Training Arcana or spare cards (in-game 2026-10-22). Training Arcana give 200–5,000 EXP each (guides). **Every filled slot is free GS, even with a Common card** (in-game 2026-10-22).
  Unique to +5 = 93,000 EXP. EXP carries over when an upgraded card is used as material [158] **vs**
  "not 1:1, you lose some" [160].
- Spare duplicates → extract into Mysterious Crystals → Transmutation makes a Unique card for a chosen
  slot + set. **Cost (in-game 2026-10-19): 5 Mysterious Crystals + 2M Kina base; picking 1 line adds nothing, a 2nd
  line adds 3M Kina + 10 Mysterious Crystals; max 2 lines.** ~~Each of up to 2 sub-stats +10
  crystals + 3M~~ [158]: only the second line costs extra.
- **Mysterious Crystal sources (guides 2026, unverified unless tagged):** Season Shop 25,000 Oath Coins, limit 5
  (in-game, `seasons.md`; one guide says per week instead of per season [325]) · **extracting spare Arcana** fills a
  gauge, 1 crystal at 100%; upgraded cards count with their EXP [324][325][158]. **In-game 2026-10-19:** Arcana
  window → Extract tab: register up to 20 cards (filter by grade, "Register All"); **one Common +2 card = 11%**, shown
  under the crystal with a ring filled to match. **It's a gauge that keeps progress, not a chance**
  (in-game 2026-10-22), so ~9–10 Common +2 cards per crystal. **A Common +0 gives only 2%** (in-game 2026-10-22):
  the invested EXP counts (fits the guides), so Training Arcana fed into a card aren't lost when it's extracted
  (inference) · **Ascension Trial** season score
  milestones (1,000 / 3,000 / 4,000 / 5,000 named) [324][325] · Season Pass rewards [325] · possibly boss drops
  morphed via Substance Morph, contradicted by a source saying Transcendence gives other crystals [325]. One guide
  claims a 7-day Transmutation cooldown [325] **vs** "about a day" [379] **vs** cooldown removed (KR patch
  2026-02-25, per [383]); unverified.
- **Which slot to transmute first (guides [379][380][383], agree):** the **Chalice**, because a chosen skill rolls there
  only 4 in 22 and Chalices drop least (Chalice drop rate also lower in-game 2026-10-19, `transcendence.md`). Then the
  Parchment or Compass carrying your main actives, in the set you're missing [383]. Transmutation "resets or changes" each season; nothing says cards or crystals reset [158]. See `seasons.md`.
- Sources: Transcendence (GS 1600+, Unique from tier 3) [158], battle pass, coin shop, attendance [158].
- **Each Transcendence dungeon drops Arcana for its own slots, and higher stages drop better grades** (in-game
  2026-10-22). **Best Arcana grade per Transcendence stage** [389] (exact grades unverified): stage 1 (GS 1600) Parchment/Compass/Bell/Mirror up to Rare,
  Chalice Common · stage 2 (1900) up to Epic, Chalice Rare · stage 3 (2200) Unique, Chalice Epic · stage 4 (2500)
  Unique Chalice. So a Unique Chalice only drops from 2500 GS: the reason to transmute it.
- **Transmute order** [389]: 1. Unique Chalice · 2. a piece blocking your 4-piece set (a plain 5-crystal Unique can be
  worth it) · 3. Parchment or Compass · 4. Bell/Mirror last. Its cost table (1 chosen line = 15 crystals + 5M) is
  **contradicted in-game** (2026-10-19: first chosen line free, see above).
- **Card priorities** [389]: grade first, skill roll second, enhancement third. Don't keep a weak Common just to hold a
  4-piece bonus when a Unique adds lots of GS and skill levels. Enhanced cards keep their EXP as material, so
  enhancing a card you'll later replace isn't wasted.
- Guide advice: fill every slot at 45, pick Vigor or Magic early for the 2-piece bonus, upgrade only
  cards you keep; a set-completing card can beat a higher-rarity one [158][160].
  Season 1 KR/Asia suggestion: Vigor on Chalice + Parchment, Magic on Compass, Bell, Mirror [160, KR-era].

## Currencies
Kinah (gold) · Odyle Energy (+15/3h = 120/day; cap 560 [3] **vs** 840 [4]) · Enhance Stones ·
Amplify Stone (Fragments) · Abyss Points · Phantasmal Fragments (Nightmare shop) · Oath Coins (Season
shop) · Shugo Festival keys, Stigma Shards, Potential Stones [1][2][3][20].

## Cleric (healer) [10, version unstated]
Stats: Wisdom + Life (god stats), Constitution + Power (primary); Heal Boost (PvE), Status Effect Resist
(PvP). Attack also raises healing. Player builds live in `players/<player>/characters/`.

## Ascension bracelets
- **Ascension Bracelet exists; can be Unique grade** (in-game 2026-10-11: seen at Unique). Single source [115]: the story gives it and it stays useful for months; enhance it
  to +10–11 (adds attack + defense) and put your one Superior Soulstone in it (accessories take Soulstones, in-game 2026-10-11). A second bracelet (IL 43)
  comes from a faction quest. Name, slot count and upgrade path not confirmed elsewhere; Ascension guides
  only mention an "Ascension item" from Ascension quests [117]. Check the equipment window in-game.

## Wings
- **Crafting a pair:** Pure Odyle (from gathering, in-game 2026-10-13) + Sealed Wings are enough to craft one (in-game 2026-10-11: crafted
  Glorious Wings). Exact recipe amounts not recorded yet.
- **Glorious Wings:** 3% lower MP costs when equipped (in-game 2026-10-11; [111]); a good fit for MP-hungry healers.
- Every pair owned adds a small permanent bonus, equipped or not; 25 pairs unlock the title Dominator of
  Dimensions (`titles.md`) [109][115]. Talisra Wings: 4% Cooldown Reduction [111]. Ultimate Daeva
  Wings, Vakron and Nightmare wings are recommended for Combat Power [115].
- Trade-off: Sealed Wings also convert to Enhance Stones (20/week per server) [7].

### Flight Power (researched 2026-10-13, guides, unverified)
- **Flight Power = flight gauge.** It's an **owned** effect: every pair owned adds to it, equipped or
  not; no wing has a flight stat when equipped [177][180]. No formula to seconds [182]. **Gliding uses the
  flight gauge too** (in-game 2026-10-22; ~~gliding costs none~~ [181]); drains at half rate in the Abyss [180]. Flight Speed is a separate stat (titles) [180].
- Per pair: **Daeva quest wings** Lesser 2,500, Intermediate / Superior / Ultimate 1,000 each (after a
  +500 buff, patch 2026-10-09 [183][184], no official note found); other wings ~200 each [183];
  Founder's Pack wings 0 [180][181]. **Fits in-game 2026-10-13:** Ultimate Daeva tooltip shows owned
  Flight Power 1,000, and the 4 Daeva wings + Aullaeu + Glorious total exactly 5,900 (no base value).
  Ancient Aullea (expedition wings, unsealed) also +200 (in-game 2026-10-23).
- **Wings don't add gear score**, neither owned nor equipped (in-game 2026-10-23).
- Ultimate Daeva Wings owned effect also: Penetration 100, Accuracy 20, Attack 10; equipped as in the
  list below (in-game 2026-10-13). The Wings info panel tabs "1 2 3" are **presets** (in-game 2026-10-13).
- **Wing enhancement does not exist on global** (in-game 2026-10-13) [185][183][182]. ~~Live on global, +10 Flight Power per level, ~3.5–16.7M Kina to +10~~ [178] is KR/TW data.
- **Titles give Flight Speed only:** Eagle Eye 2.5% (+ move speed), ★★★ Chef 2.3%, Mysterious Racer
  1.8%, Professional Extractor 1.4% [180].
- **Mid-flight refill:** Wind Serum (refills Flight Power in the air, in-game 2026-10-22) (Alchemy, mastery 10; Aria + Targena + Glass Bottle or Azpha +
  Calendula + Glass Bottle) [180]; recovery rings, wind paths, updrafts [180][181].
- Nothing found for flight from Daevanion, gear stats, buffs.

### Wing sources, easiest → hardest [177][179][183]
1. **Daeva quest wings:** Lesser (Lv 5), Intermediate (22), Superior (32), **Ultimate (45, quest "The One
   Who Witnesses the Nightmare")**. Ultimate equipped: Crit 35, HP 500, MP 250, Penetration 500 [179].
2. **Aullaeu** (Rare): Lv 30 quests "Secrets Within Secrets", "Canyon's Secret". Equipped MP 200, MP regen 50 [177].
3. **Sealing Wings:** 70 Sealed Wings Featherdown + 10 Pure Odyle, once per character. **Owned: +200 Flight Power** (in-game 2026-10-16). Equipped HP 400,
   HP regen 200, Incoming Heal +5% [179]. Featherdown from sealed dungeons [177] / one-time solo Sealed
   Dungeons, 2 each [183].
4. **Expedition wings:** sealed wing drop + 10 Radiant Odyle (very rare from gathering; Shugo shop 1,000 tokens, 3/month; in-game 2026-10-13: so slow). Kromede (Fire Temple), Black Fragment (Krao
   Cave), Ancient Aullaeu (Urugugu), Forest Spirit (Vakron), Dark Veil (Ferocious Horn Den), Blue Wave
   (Draupnir) [177].
5. **Conqueror (Epic), Nightmare (Unique):** Nightmare wing vendor; Nightmare owned PvE Damage +1% [177].
6. **Talisra** (Unique): Season Shop, 210,000 Oath Coins, 1 per character. **Equipped:** Attack 60, Accuracy 35,
   Cooldown Reduction 4%, Defense 400. **Owned:** Flight Power 200, Defense 100, Attack 10, Accuracy 20 (in-game 2026-10-20 tooltip; owned Attack/Accuracy match [177]).
7. **Violet Butterfly, Spirit, Springflower:** Shugo Festival event shop, time-limited [177].
8. **Radiant Love:** rare Hidden Cube drop [177].
9. Warrior, Brawler: Abyss/Arena/Battlefield vendors (PvP) [177].
10. Fairy's Dream, Odyle Wings, Blue Butterfly: "Poko's Skin Bundle", likely cash shop (unconfirmed);
    Blazing Sun, Atelier: cosmetic only [177][179].
- Total: 28 wings [177][181] **vs** 34 listed [179]. Glorious Wings: MP cost −3% [179] matches in-game;
  ~~defense + crit~~ [183] is wrong.

## Manastones and Soulstones
- One wiki: Manastones go into weapon/armor sockets, **Soulstones into accessory sockets** (bracelets
  included); same mechanics: each imprint rolls a random stat, re-imprinting a slot replaces it, higher
  stone tier = better odds [122, KR/global mix]. Another guide says one stone fills all sockets of a
  piece at once [122]. **Confirmed: the Ascension Bracelet takes Soulstones, not Manastones** (in-game 2026-10-11). [115]'s "Superior Manastone in the bracelet" meant the category (see Naming).
- **Naming:** "Manastone" is both the item category and one stone type. Tooltips: "Superior Soulstone (Bound): Common Manastone" and "Superior Manastone (Bound): Common Manastone" (in-game 2026-10-11). The part after the colon is the category (+ grade), not the stone type. Metabot lists Soulstones under "Manastone" too [122].
- Save high-tier stones for pieces you keep (bracelet, belt, amulet); low-tier on gear you'll replace [122].

## Soul Binding, Soul Codex, Philosopher's Stone (researched 2026-10-14)

No official global docs; guides 2026-09-30 → 10-10 mostly don't say which client [242]–[247]. Soul
Codex is the Soul Binding material (user 2026-10-14). KR names: 영혼 각인 Soul Binding, 영혼의 서 Soul
Codex, 영혼 결속 Soul Fuse, 현자의 돌 Philosopher's Stone [247]. Some guides say "Soul Imprint" [244].

- **What:** random extra stat lines on gear (attack/defence stats, damage boosts, class skill levels),
  pool depends on the item type; stacks with base stats, Manastones, Theostones [242][244].
- **Where:** Enhance window → Soul Binding tab: Bind / Sync / Reset [242][245].
- **Bind:** each try raises the Soul Binding Rate by a random amount, smaller near the cap; 30,000 Kina +
  1 or more Soul Codex per try, more Codex near the cap [242]. **In-game 2026-10-19:** the first Bind (unlocking
  the lines) is free; each Bind that raises the rate costs 30,000 Kina + Soul Codex, the Codex being the real cost.
  Each line shows current/max (e.g. 19.35%/22.15%) plus a progress % (in-game); that lines grow as the rate
  rises is an inference. Makes the item untradeable. At 100% the
  item is maxed and locked [242][245]. Total Codex needed to reach 100%: not found.
- **Sync:** costs a same-grade, same-type item (destroyed) or a Sync Stone
  (lower-grade stone: 10% success) [242][243][245]. Unique only, per [245].
  **The selected line is the one that rerolls** (in-game 2026-10-24, test Sync on a spare Unique Mace at 40.0%):
  Accuracy 59/70 (31%) became Critical Attack 61/74 (24%); the other three lines didn't change. That matches the
  guides [242][243][245]. But "can reroll the same stat" [245] is wrong: the pool leaves out every line the piece
  already has. The new line didn't keep the old fill (31% → 24%), and the Soul Binding Rate dropped 40.0% → 38.1%.
  The other lines' values and every max stayed the same. **The rate looks like the average of the four line fills**
  (inference): before (5 + 31 + 24 + 100) / 4 = 40.0, after (5 + 24 + 24 + 100) / 4 = 38.25 (shown 38.1, fills are
  rounded); first Mace (5 + 26 + 100 + 100) / 4 = 57.75 (shown 57.9). So it only drops when the new line starts emptier.
  **Material (user, in-game 2026-10-24):** only Unique pieces are accepted (no Sync Stone tried); the test used a
  Unique Mace of about GS 35 (user's estimate). Success chance shown with it: not recorded. **Hypothesis (user,
  unverified):** the new line's fill, and so the rate, depends on the material's GS. Alternative: the fill is random.
  Test: Sync with a higher-GS piece and compare the new line's fill. Pool: see "Sync pool" under "Which lines on which slot".
- **Reset:** reroll all lines, rate back to 0; costs Soul Codex: Reset + Kina (amount unknown) [242][243].
- **Lines per grade: one per rarity step, Unique = 4 lines** (in-game 2026-10-19), so presumably Common 1, Rare 2,
  Epic 3 (user). A class skill line is often one of them (e.g. "Lightning Strike Scattershot Lv. +1"), but not always:
  a Unique Guard had four stat lines and no skill (in-game 2026-10-24); each line is a skill ~20% of the time.
  ~~Unique 3–5, Heroic 4–6~~ [242] and ~~all gear 4~~ [246] were both off for Unique; Heroic not seen yet.
- **Which lines on which slot (researched 2026-10-23, guides, unverified):**
  - **Class skill line:** weapon, guard and rings roll **active** skills (weapon: only that weapon's class);
    armor, earrings and necklace roll **passive** skills; ~1 in 5 lines is a skill line [426]. KR guide [427] fits:
    rings list active skills, armor and necklace/earrings passives. In-game fit: the Mace rolled Lightning Strike
    Scattershot +1, an active skill (2026-10-19).
  - **One signature stat per armor piece** (KR 2026-07, Fighter-class guide [427]): helmet Increased Healing Received,
    shoulders Crit Damage Boost, chest Damage Boost, legs Damage Tolerance, gloves Combat Speed, shoes Movement Speed.
    Weapon/guard top lines: Damage Boost, Weapon Damage Boost, Combat Speed, Power, then Accuracy, Multi-Hit Accuracy.
    Necklace/earrings: Attack, Crit, Accuracy besides skill lines.
  - **No clean offense/defense split by slot type**: every pool mixes both (e.g. Attack on armor, Block/HP on
    weapons) [426][427]. The clean split exists only for Potential (below).
  - **Contradiction:** [426]'s stat tables (weapon: Accuracy, Attack, Crit, HP, MP, Block, Damage Boost) don't
    contain the Mace's own lines Status Effect Chance, Back Attack, Precision (in-game 2026-10-19), so they're incomplete.
  - **Full pool, Unique Mace (Cleric) (in-game 2026-10-24, Reset view, +10 Aulamus Mace, GS 70(+23)):** chance per line, value range.
    The chances add up to 100%: stats 80%, skills 20% (fits [426]'s "~1 in 5").
    | Line | Chance | Range |
    |---|---|---|
    | Combat Speed | 3.2% | 9.7–11.2% |
    | Damage Boost | 1.6% | 5.4–6.3% |
    | Multi-hit Chance | 4.8% | 7.2–8.4% |
    | Weapon Damage Boost | 3.2% | 7.2–8.4% |
    | Status Effect Chance | 3.2% | 19.2–22.2% |
    | Might | 4.8% | 19–29 |
    | Precision | 5.6% | 19–29 |
    | Attack | 5.6% | 33–45 |
    | Critical Hit | 5.6% | 51–66 |
    | Critical Attack | 6.4% | 72–90 |
    | Back Attack | 5.6% | 72–90 |
    | Front Attack | 5.6% | 72–90 |
    | Accuracy | 6.4% | 68–85 |
    | Block | 5.6% | 41–54 |
    | MP | 6.4% | 153–183 |
    | HP | 6.4% | 308–361 |
    | Skill Lv. +1, 12 Cleric actives, ~1.67% each | 20% | Lv. +1 |

    Skills: Earth's Retribution, Debilitating Mark, Chain of Torment, Condemnation, Radiant Recovery, Bolt,
    Judgment Thunder, Divine Aura, Light of Regeneration, Healing Light, Lightning Strike Scattershot, Defiance.
    The best lines (Damage Boost, Combat Speed, Weapon Damage Boost) are also the rarest.
  - **How a line's value works (in-game 2026-10-24, a Mace at 57.9%):** the value starts at the range minimum and
    grows toward the line's max; the % next to the line is that progress (19.35/22.15 = 5%, Back Attack 76/90 = 26%).
    Lines grow unevenly: Precision was already 100% at a 57.9% rate. A skill line is just +1, shown as 100%.
  - **Ranges depend on the item's GS, not only its grade** (in-game 2026-10-24): a second Unique Mace, Holy Spirit
    Mace (GS 41, 29 below the equipped one; tooltip says "Item Level"), has the same lines and chances but lower
    ranges than the GS 70 Aulamus Mace above: Combat Speed 7.9–9.1%, Damage Boost 4.4–5.2%, Multi-hit Chance and Weapon Damage Boost 5.8–6.8%,
    Status Effect Chance 15.6–18%, Might and Precision 15–24, Attack 27–38, Critical Hit 41–54, Critical / Back /
    Front Attack 58–74, Accuracy 55–70, Block 33–45, MP 124–150, HP 250–295.
  - **A line's max is the top of its range** (in-game 2026-10-24, 6 of 6 lines on two Maces): Back Attack 90,
    Precision 29, Accuracy 70, Back Attack 74 exactly; Status Effect Chance 22.15% and 18.01% vs 22.2% and 18%, the
    range rounded (user's point). So there's no max to roll: a line's quality is only which stat it is, and Bind
    fills it from the range bottom to the top (inference from 6 lines; rounding in the fill % fits too).
  - **Guard (in-game 2026-10-24, spare Unique Holy Spirit Guard, GS 41):** exactly the Mace's pool: same 16 stats
    (Weapon Damage Boost included), same 12 Cleric active skills, same chances. Ranges are lower than a Mace of the
    same GS 41, about 0.77×: Combat Speed 6.1–7.1%, Damage Boost 3.5–4.1%, Multi-hit Chance and Weapon Damage Boost
    4.7–5.4%, Status Effect Chance 12.5–14.4%, Might and Precision 12–21, Attack 21–31, Critical Hit 33–45,
    Critical / Back / Front Attack 46–60, Accuracy 44–58, Block 27–38, MP 99–121, HP 200–237.
    Fits [426]: guard rolls active skills. A guard at 100% rate no longer shows in the Soul Binding menu.
  - **Helmet (in-game 2026-10-24, Unique +10 Bakarma Helm, GS 54(+15)):** a different pool from weapon/guard, 24 stats
    (80%) + 10 Cleric **passives** at 2% each (20%), fits [426] (armor rolls passives). Signature stat **Incoming Heal**
    (= Increased Healing Received, fits [427]). Chance, range:
    | Line | Chance | Range |
    |---|---|---|
    | Incoming Heal | 2.4% | 13–15.1% |
    | Double Chance | 0.96% | 1.4–1.7% |
    | Endurance | 0.96% | 2.2–2.6% |
    | Attack increase | 0.96% | 1.4–1.7% |
    | Perfect Resist | 0.96% | 2.7–3.2% |
    | Status Effect Resist | 2.4% | 4.7–5.4% |
    | Weapon Damage Tolerance | 0.96% | 5.2–6.1% |
    | Dexterity, Willpower | 3.2% each | 8–16 |
    | Constitution | 3.2% | 13–22 |
    | Attack | 3.2% | 15–24 |
    | Critical Hit | 4.0% | 23–33 |
    | Accuracy | 4.0% | 31–43 |
    | Defense | 4.0% | 181–215 |
    | Evasion | 4.0% | 18–28 |
    | Critical Damage Defense | 4.8% | 186–221 |
    | Back Defense, Front Defense | 4.0% each | 186–221 |
    | Critical Hit Resist | 4.8% | 32–44 |
    | Block | 4.8% | 18–28 |
    | MP | 4.8% | 69–86 |
    | HP | 4.8% | 139–167 |
    | Natural MP Regen | 4.8% | 16–25 |
    | Natural HP Regen | 4.8% | 32–44 |
    | Skill Lv. +1: Warm Benediction, Empyrean Lord's Grace, Immortal Veil, Prayer of Concentration, Survival Willpower, Empyrean Lords' Benediction, Healing Enhancement, Heal Block, Radiant Benediction, Earth's Grace | 2% each | Lv. +1 |

    **Two skill lines on one piece happen:** this helm has Critical Hit Resist 33, Defense 184, Earth's Grace +1,
    Immortal Veil +1 (plus a Soul Fuse line). The % stats all sit at 0.96–2.4%, the rare tier.
  - **Shoulders (in-game 2026-10-24, Unique +10 Gartua Pauldrons, GS 70(+20)):** same layout as the helmet: same
    10 passives at 2%, the same 17 common stats at the same chances, Status Effect Resist 2.4%, and its own top lines.
    Signature **Critical Damage Boost 2.4%, 9.6–11.1%** (fits [427]). Rare 0.96% lines: Regeneration 1.4–1.7%,
    Double Chance 1.3–1.5%, Defense increase 1.9–2.3%, Endurance Penetration 1.4–1.7%, Perfect Resist 2.4–2.8%.
    Status Effect Resist 4.1–4.8%. Common stats: Dexterity 13–22, Constitution 8–16, Willpower 17–27, Attack 13–22,
    Critical Hit 20–30, Accuracy 27–38, Defense 160–191, Evasion 16–25, Critical Damage / Back / Front Defense
    164–196, Critical Hit Resist 28–39, Block 16–25, MP 61–77, HP 123–148, Natural MP Regen 14–23, Natural HP Regen 28–39.
  - **Chest (in-game 2026-10-24, Unique +10 Vakron Breastplate, GS 70(+17)):** same layout. Signature **Damage Boost
    2.4%, 4.9–5.7%** (fits [427]). Rare 0.96% lines: Regeneration 2.2–2.6%, Perfect Chance 4.3–5%, Defense increase
    2.9–3.4%, Double Resist 2.9–3.4%, Weapon Damage Tolerance 7.2–8.4%. Status Effect Resist 6.2–7.2%. Common stats:
    Dexterity 10–19, Constitution 17–27, Willpower 8–16, Attack 20–30, Critical Hit 30–42, Accuracy 41–54, Defense
    240–283, Evasion 24–35, Critical Damage / Back / Front Defense 246–290, Critical Hit Resist 43–56, Block 24–35,
    MP 92–113, HP 185–220, Natural MP Regen 22–32, Natural HP Regen 43–56. Same 10 passives.
  - **Legs (in-game 2026-10-24, Unique +10 Vakron Greaves, GS 70(+15)):** same layout. Signature **Damage Tolerance
    2.4%, 8.6–10%** (fits [427]). Rare 0.96% lines: Perfect Chance 4–4.6%, Endurance 2.6–3.1%, Attack increase
    1.8–2.1%, Double Resist 2.6–3.1%, Multi-hit Resist 4–4.6%. Status Effect Resist 5.6–6.6%. Common stats:
    Dexterity 8–16, Constitution 13–22, Willpower 10–19, Attack 18–28, Critical Hit 28–39, Accuracy 37–50, Defense
    220–260, Evasion 22–32, Critical Damage / Back / Front Defense 226–267, Critical Hit Resist 39–52, Block 22–32,
    MP 84–104, HP 169–201, Natural MP Regen 20–30, Natural HP Regen 39–52. Same 10 passives.
  - **Armor pattern so far (helmet, shoulders, chest, legs):** 1 signature line 2.4%, Status Effect Resist 2.4%, 5 rare %
    lines at 0.96% (a mix from Double Chance/Resist, Perfect Chance/Resist, Regeneration, Defense increase, Endurance,
    Endurance Penetration, Attack increase, Weapon Damage Tolerance, Multi-hit Resist; differs per slot), 17 common stats (3.2–4.8%),
    10 passives at 2%.
    **Ranges are set per slot, not only by GS:** at about the same GS 70 the chest has much higher ranges than the
    shoulders (Defense 240–283 vs 160–191; the GS 54 helmet sits between, 181–215), and the main stats swap:
    helmet Constitution 13–22, Dexterity/Willpower 8–16; shoulders Willpower 17–27, Dexterity 13–22, Constitution 8–16;
    chest Constitution 17–27, Dexterity 10–19, Willpower 8–16; legs Constitution 13–22, Willpower 10–19, Dexterity 8–16.
    Size order at GS 70 (Defense): chest 240–283 > legs 220–260 > shoulders 160–191.
    Other slots: not read yet (todo).
  - **Sync pool (in-game 2026-10-24, same Mace, Status Effect Chance selected):** the pool drops **all four lines the
    piece already has** (Status Effect Chance, Back Attack, Precision, Lightning Strike Scattershot), not just the
    selected one: no duplicate lines. The rest is rescaled **within each group**: stats still add up to 80%, skills to 20%.
    E.g. stats left 80 − 14.4 = 65.6, so Combat Speed 3.2 × 80/65.6 = 3.902% (shown 3.902%); skills left 18.33,
    so 1.666 × 20/18.33 = 1.818% (shown). Every shown value fits this. So a rerolled line is a stat 80% / a skill 20% of the
    time, whatever the piece has; two skill lines on one piece do happen (helmet, in-game 2026-10-24). Removing common lines
    lifts the rare ones a little (Damage Boost 1.6 → 1.95%) (all inference from the numbers).
    **Consequence:** Sync replaces one bad line at a time (any line can be picked for each Sync, user) and the good lines stay safe, so a piece can collect good
    lines one by one. Each Sync costs material; the rate moves with the new line's fill (see Sync above), maxes don't change.
- **Transfer:** base lines carry over [242][243][244] (matches the KR wiki in "Enhancement" above);
  the Soul Fuse line does not.
- **Soul Codex sources (in-game 2026-10-19):** Transcendence, expeditions (Exploration and Conquest), Sanctuary,
  Dimensional Invasion (×3 with a key, `events.md`), Nightmare shop, Season Shop (3,000 Oath Coins, limit 50,
  `seasons.md`), several achievements, Hidden Cubes. Which source is best: unknown. Shugo Festival is named by [242]
  but wasn't in the in-game list. "Sanctuary" = the 10-player raids (`endgame.md`). KR: 200 Enhance
  Stones + 10,000 Kina → 1 Codex via conversion [247]. **Reset:** Nightmare shop, achievements, Season
  Shop (20,000, limit 5); Twitch drop ×2, 5–16 Oct (G) [250].
- **Philosopher's Stone → Soul Fuse:** 2 stones add one extra random line to a **Unique or Heroic
  item at 100%**; always succeeds [242][244][247]. Kina: 1,000,000 [242] vs not mentioned [247, KR].
  Two kinds: **Revelation** (~4/5 of items) and **Power**; the item says which it needs [242]. Not
  related to the Revelation amulet. Drops from Conquest (KR: 3–6%) [242][254]. Season Shop: 2 for
  30,000 Oath Coins each = exactly one Fuse.
- **So (inference):** bind only Unique pieces you'll keep or transfer; fix bad lines (Sync/Reset)
  before spending Codex; Fuse only a maxed keeper whose type matches.

## Potential (researched 2026-10-19)

- **Potential = PvP stats** on gear (user 2026-10-19). Guides (global client): a separate track on **Unique gear that
  is Soul Bound**, 4 levels, always succeeds [338][339]:
  - Cost: Potential Stone: Abyss (Unique) + 100,000 Abyss Points per level; stones 1 → 4 per level, **10 stones +
    400,000 AP for a full piece** [338][339].
  - Stats: weapon and accessories **PvP Damage Boost**, armor and bracelets **PvP Damage Tolerance**, +0.5% per
    level, 2% at 4 [338].
  - Stones: PvP Trade Shop from 25,000 AP (limited) [338]; Nahma's Unique Merit Chest 7% (`abyss.md`).
  - **Lost on Transfer** [338][296][298]. One guide describes PvE Potential; the global guides say there is none [338].
- **For you (inference):** PvP only and expensive in AP, which you'd rather spend on Stigma Shards. Skip.

## Theostones (researched 2026-10-14)

- **What:** chance-on-hit proc (elemental damage, single or up to 4 targets; or Stun, Root, Paralyze,
  Blind, Seal, slow, Poison, Bleed). Manastones matter much more in PvE [248][251]. 17 effects × Rare /
  Epic / Unique; grade raises damage/duration, not proc chance; identical stones don't stack [248].
  Rare examples: Stun 3% 1 s, Wind single 10% [248].
- **Slots:** weapon (confirmed by [248]); guard per [251], unconfirmed by [248]. Needs higher-grade gear.
- **Engrave:** N → Theostone tab, 10,000 Kina; replacing destroys the old stone [248][251][252].
- **Sources:** level-45 regional quests give Rare Theostone Chests [248][252]; Abyss shop selection chest
  (35,000 AP, pick the effect) [251]; Season and Arena shops; Daeva Pass. Rare Theostone Chest = one
  random Rare, weighted to damage stones [248]. Combine ≥4: Rare → Epic 11.1%, Epic → Unique 9.1% [248].
- **Transfer, contradiction:** lost when moving to new gear [248][253] vs kept [251]. The Transfer window
  shows no result preview (in-game 2026-10-19), so only an actual transfer will tell.
- **So (inference):** low priority; a free Rare damage stone on the weapon is enough. The Season Shop
  chest (17,500 Oath Coins) is poor value.

## Refining Stones
Crafting material, grade must match the crafted item: Refining Stone (Common) → Expert's (Rare) →
Artisan's (Epic) → Artisan's Ultimate (Unique) [255][256]. Not a gear-enhancement item. Details:
`crafting.md`.
