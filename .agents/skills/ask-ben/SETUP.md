# Setup

Putting Million UI into a repository end to end, and keeping every replacement
reviewable. This chapter runs once per repository — when asked to add, install
or set up Million UI, to start a new app on it, or to migrate, replace or
re-skin an existing UI with it.

Million UI is a shadcn-derived component set: Base UI supplies the behavior,
the `base-lyra` style supplies the visual language through the token layer,
and the source is copied into the repository that uses it — owned, not
depended on. Its review model travels with it: every UI change lands as its
own commit with a `pending` entry in the repository's root `DESIGN_LOG.md`
audit log, and a human rules on the entries — approving, or having rejected
commits reverted. This chapter carries a repository end to end; the verdicts
are never its to give.

## Situations

Look before asking. Read `package.json`, the lockfile, and `src/` to place the
repository, then follow the matching path:

- **Empty or near-empty directory** — scaffold first (step 0), then Setup.
- **Scaffolded React app, no component system in use** — Setup.
- **App already rendering with an incumbent** (a component library, or
  hand-rolled components doing that job) — Setup, then
  [MIGRATION.md](MIGRATION.md). Nothing of the incumbent is touched during
  Setup. On this path Setup is a checkpoint, not the completion: the run ends
  at MIGRATION.md's criteria, and a step whose criterion already holds is
  verified rather than redone.

Million UI is React. Vite is first-class; Next.js is supported through the
adaptations in [NEXT.md](NEXT.md) — read it before step 1 and name each
adaptation taken in the completion report. Any other React bundler is
best-effort — proceed, and name the deviation. If the repository is Vue,
Svelte, or otherwise not React, say so and stop — do not approximate.

## Registry

Components install through the shadcn CLI from the `@million-ui` namespace.
The registry is not yet publicly hosted, so serve it from a checkout:

```bash
git clone https://github.com/millionco/million-ui.git   # access required
cd million-ui && pnpm install && node scripts/build-registry.mjs
npx serve registry/r -p 3333
```

and point the namespace at it in the consuming repository's `components.json`:

```json
"registries": { "@million-ui": "http://localhost:3333/{name}.json" }
```

When a hosted URL exists it replaces the localhost value — same key, one
place. Everything else in this skill is the same either way.

The same checkout answers how this chapter runs at all. A repository with
nothing in it cannot install the skill that installs things, so the copy that
does the setting up is the operator's, not the target's: this directory,
copied or linked into whatever global skills location the harness reads, or
simply read from the clone. The registry's copy is what the target repository
keeps afterwards — one skill, two places it can sit, and no difference in what
it says.

## Setup

Every path runs these in order. Each step ends on its criterion.

**0. Scaffold (empty directory only).** Use the repository's package manager
if a lockfile names one; otherwise npm. `npm create vite@latest . -- --template
react-ts`, then install. Done when the stock app runs.

**1. Tailwind v4.** Install `tailwindcss` and `@tailwindcss/vite`, and add the
plugin to `vite.config.ts`. (The best-effort non-Vite path takes
`@tailwindcss/postcss` in `postcss.config.mjs` instead.) Done when a Tailwind
utility visibly styles an element.

**2. The `@/` alias.** In `tsconfig.json` (and `tsconfig.app.json` where Vite
split it): `"baseUrl": "."`, `"paths": { "@/*": ["./src/*"] }`. In
`vite.config.ts`: `resolve: { alias: { "@": "/src" } }`. Done when an import
through `@/` typechecks.

**3. `components.json`.** Write it at the root:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "base-lyra",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "iconLibrary": "phosphor",
  "rtl": false,
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "menuColor": "default",
  "menuAccent": "subtle",
  "registries": { "@million-ui": "http://localhost:3333/{name}.json" }
}
```

**4. Token layer.** `npx shadcn add @million-ui/token-layer`, then import
`@/styles/globals.css` from the app entry (`main.tsx`). The item targets
`src/styles/globals.css`; when the app's real stylesheet entry lives
elsewhere, merge the token layer into that entry and delete the stray file
([NEXT.md](NEXT.md) shows the shape). Dark mode is a `.dark` class on an
ancestor — wire a toggle only if the app calls for one. Done when the page
background, radius, and greys visibly change and `--border` resolves in
devtools.

**5. Type.** The token layer names licensed faces with system fallbacks behind
them, so type works out of the box and the real faces are a human step — read
[TYPE.md](TYPE.md) and put the licensing step in your completion report. Done
when TYPE.md's "Done when" holds.

**6. Components.** `npx shadcn add @million-ui/<component>` per need — the CLI
pulls `utils` and other item dependencies itself. Choose by job with
[COMPONENTS.md](COMPONENTS.md). Done when every added component renders on a
real page or story, not merely compiles.

**7. The contract.** `npx shadcn add @million-ui/skills` installs this skill —
all of it, setup and contract and decrees — into `.agents/skills/ask-ben/`.
Seed `DESIGN_LOG.md` at the repository root if it is missing — the shape
[CONTRACT.md](CONTRACT.md) describes: the entry rules, a `## Log`, a
`## Backlog`. Then **append** to `AGENTS.md` — create the file if missing, and
leave existing content exactly as found:

```md
## UI work

For every task that creates or changes user-visible UI, first read and follow
`.agents/skills/ask-ben/SKILL.md`. Every UI change lands as its own commit and
appends a `pending` entry to `DESIGN_LOG.md` at the repository root in that
same commit; verdicts are the human's. Render checks use this app's own dev
server; OpenStory steps apply only where OpenStory is installed.
```

The block is the interface: `.agents/skills/` is a convention no harness
auto-discovers, so what carries the skill across every agent is `AGENTS.md`
naming its one entry point. One path, and the skill routes from there.

Done when `.agents/skills/ask-ben/` exists, `DESIGN_LOG.md` exists, and
`AGENTS.md` carries the block.

**8. Verify.** Setup is complete when all four hold, checked, not assumed:
the production build passes; the typecheck passes; a page renders at least one
Million UI component; the token layer is live (semantic utilities resolve in
computed styles). Step 8 completes Setup, not the run: on an
incumbent-bearing repository, read [MIGRATION.md](MIGRATION.md) now and
continue — that path's completion report is written against MIGRATION.md's
criteria, and a Setup-only report is an incomplete run.

## Completion report

Return: the path taken (fresh, scaffolded, or migration); items added with
versions; files written; `DESIGN_LOG.md` seeded and the AGENTS.md block
appended; human steps outstanding (font licensing, registry hosting); every
verification command run and its result; and anything deferred, named rather
than dropped. On the migration path the report is written against
MIGRATION.md's completion criteria — surfaces replaced, deferred, and left
incumbent — never against Setup's alone.
