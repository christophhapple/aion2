---
name: verify
description: Re-check the Aion 2 knowledge base — re-research unverified/stale facts, resolve contradictions, and turn what only the game can answer into in-game checks for the user. Use for "/verify", "/verify <topic or file>", "is our knowledge still current", after a new patch.
---

Rules for tags, precedence and contradictions: "Knowledge reliability" in CLAUDE.md.

## 1. Pick the scope
- **Args given** (topic or file, e.g. `nightmare`, `gear.md`): just that.
- **No args:** scan `knowledge/` and pick up to ~10 facts most worth checking, in this order:
  facts on a topic hit by a patch newer than the source → open contradictions (**vs**) → facts the
  user's current goals depend on (`goals.md`) → unverified guide facts with the oldest dates.
  Facts tagged `in-game` are skipped unless a newer patch touched them.
- Say in one line what will be checked before starting.

## 2. Re-research
- Web search for newer/better sources (official patch notes and global sources first; label Korean-version
  info). For a broad scope, delegate the searching to a subagent and keep only its report.
- Per fact, decide: **confirmed** (newer independent source agrees), **changed**, **contradiction**
  (record both sides), or **unclear**. Never upgrade a fact to `in-game` from web sources.

## 3. In-game checks
Facts that only the game can settle become questions for the user: short, concrete, and saying where
to look ("Hover the Nightmare entry counter: does it say 2 or 14?"). List them and ask:
answer now, or add them to `todo.md` as `Verify: …` items? Answers → update the fact, tag `in-game <date>`.

## 4. Write back
- Update facts in place with new tags/sources; new sources go to `knowledge/sources.md` with the next
  free number.
- Update the "Last checked" column in `knowledge/README.md` for every file touched.
- If goals or routines rely on a changed fact (caps, unlock GS), update them too.
- Commit as `knowledge: verify <scope>`.

## 5. Report
Short: changed · confirmed · still contradictory/unclear · in-game questions (and where they went).
