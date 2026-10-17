# DPS meters

Last checked 2026-10-17. Everything below is guides or the tools' own READMEs unless tagged otherwise.

## Built-in: Combat Analysis
- Ctrl+X, or main menu → Content → Combat Analysis. Modes: Auto, Single-Target, Multi-Target. Shows
  own DPS, damage per skill, crits, healing, damage taken, run history. **Own character only**, no
  party view. (guide: [aion2atlas](https://aion2atlas.app/dps-meter/), 2026-10, unverified)
- Added in KR Season 3 / the 2026-04-01 update (guides, unverified for EU).

## Third-party meters
All of these work the same way: they **passively sniff the game's network packets** with Npcap (a
standard Windows capture driver from the Nmap project). None claims to read memory or inject into the
client. Typical install: Npcap with "WinPcap API-compatible Mode" ticked → download the app → run as
administrator. ([aion2guidance](https://aion2guidance.com/en/dps-meter/), 2026-10-12)

| Tool | Notes | Regions | Uploads data? |
|---|---|---|---|
| [A2Tools](https://github.com/taengu/A2Tools-DPS-Meter) | Open source (GPL-3), most active (~600 commits, v2.0.62 on 2026-10-12), MSI installer, has an **offline build** | "any region" | Optional shareable logs; offline build has none |
| [RATmeter](https://github.com/Kuroukihime/AIon2-Dps-Meter) | Open source, zip (no installer), party DPS, buff/cooldown overlays, stat-efficiency calculator. v1.11.3 on 2026-10-01 | Global | No, "all data stays local" |
| [Abyss Logs](https://github.com/karim-mo/aion2-abysslogs-dps-meter) | Overlay + website with public logs and leaderboards. Small repo (10 commits) | TW, KR, NA, SA, EU, Asia | Yes, one-click or auto upload |
| Aletheia | Taiwan-focused, analyzer features paywalled, needs Discord login | TW; Global unconfirmed | Free tier auto-uploads |
| Shugo.GG | Open beta, needs Discord-linked account | not stated | Yes |

Other names seen (aion2t, AionFlex, aiondps.com, NotMeter): less documented, and there are clone
download sites. Only download from the project's own GitHub releases.

## Ban risk / policy
- Operation Policies list "Use of Unauthorized Programs" as bannable. No meter is NCSoft-approved.
  NCSoft has **not** named meters in any global/EU statement. (guide: aion2atlas, 2026-10, unverified)
- KR livestream, May 2026: devs called unauthorized recording/sharing of other players' DPS data a
  serious issue, asked meter/**site operators** to stop and delete data, announced an in-game block
  and possible legal action; "no impact on regular users who are not site operators".
  ([Inven Global](https://www.invenglobal.com/articles/22212/new-sanctuary-and-brooches-added-aion-2-live-stream-summary-may-12-tue))
  What the block did, and whether it reached EU, is unknown; meters were still updated in Oct 2026.
- Large KR ban waves (tens of thousands of accounts) targeted **macros/automation**, not meters.
- Guides' consensus: passive packet meters are the lowest-risk kind, but "passive" is not permission.
  Tools that upload other players' data are the thing NCSoft objected to.

## Performance
No tool publishes benchmarks. Packet sniffing is light in principle (the game's traffic is small);
the main cost is the overlay window (most are WebView/Electron-style UIs). Not measured, own
assessment, not a game fact.
