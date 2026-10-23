# Agent instructions

All instructions for AI assistants are in [CLAUDE.md](CLAUDE.md): read it first and follow it.

Skills are in `.claude/skills/<name>/SKILL.md`. When the user types `/<name>` (e.g. `/today`, `/log`,
`/setup`) or asks for what a skill describes, read that file and follow it. The active player is named
in `CLAUDE.local.md` (gitignored); if it's missing, follow `.claude/skills/setup/SKILL.md` first.
