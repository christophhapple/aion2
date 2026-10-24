# Performance: lag in mass combat, graphics settings

Researched 2026-10-24 (guides only, none of it checked in-game yet).

## Is mass-combat lag common?
- **No hard data.** No Steam, Reddit or forum threads about siege lag on global turned up, and no official
  statement. Guides do say frame drops in big Abyss fights are normal: "large-scale PvP is much harder on the
  CPU" [431]; the number of players on screen becomes the main bottleneck [434]. So most likely common, but
  unconfirmed.
- **Frame drops vs. network lag:** low FPS or stutter = rendering, fix with settings. Delayed skills or
  rubberbanding while FPS stays fine = network or server, which settings can't fix [433].
- Many lag guides come from companies selling connection boosters (ExitLag, GearUP), so take their claims
  with care.

## Settings for sieges and Abyss PvP
Two guides largely agree [431][432]:

| Setting | Value | Note |
|---|---|---|
| Mass Combat Quality | Very Low [431] / Low [432] | |
| Player Particle Effect Display | Self and Party, or Self Only | Cuts other players' effects, the big one in crowds |
| [Abyss] Display | **Tier Icon** | Shows enemy players as tier icons instead of full models [432] |
| Identical Player Appearance | On | All players drawn with the same look [431] |
| Display Other Players' Pets | Off | [431] |
| Effect Quality | Low [432] / Normal [431] | |
| Shadow Quality | Very Low or Low | |
| Global Illumination | Low | |
| Reflection Quality | Very Low | |
| Vegetation Quality | Low | |
| Volumetric Fog, Volumetric Light Scattering | Off | |
| Water Reflection Method | Performance | |
| View Distance | Normal or High | Don't go to the minimum: you need to see enemies at range [431] |
| NVIDIA Reflex | Boost | [432] |
| Frame Generation | Off | Adds input latency in PvP [432] |

- Upscaling (DLSS/FSR Quality) helps the GPU, but mass combat is mostly CPU-bound, so expect less from it there
  (inference from [431]).
- Other tips: game on an SSD, current GPU drivers, close overlays and recorders in the background [433].
  Overlays include DPS meters (see `dps-meters.md`, "Performance").
