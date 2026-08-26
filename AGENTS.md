<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## UI work

For every task that creates or changes user-visible UI, first read and follow
`.agents/skills/ask-ben/SKILL.md`. Every UI change lands as its own commit and
appends a `pending` entry to `DESIGN_LOG.md` at the repository root in that
same commit; verdicts are the human's. Render checks use this app's own dev
server; OpenStory steps apply only where OpenStory is installed.
