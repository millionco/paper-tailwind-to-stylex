# Migration

Replacing an incumbent UI, surface by surface, with every replacement reviewed
by a human. A **surface** is one screen, route, or shared component the user
can point at.

The contract underneath is [CONTRACT.md](CONTRACT.md)'s audit log:
replacements land in place, one described change per commit, each appending a
`pending` entry to the repository's `DESIGN_LOG.md` in that same commit. The
human rules on the entries; rejection reverts the commit and keeps the entry
as `reverted`.

## 1. Audit

Build the inventory before proposing anything:

- Every surface: walk the router (or pages directory) and list each screen.
- Every incumbent import: search for the incumbent's package specifiers (or
  the hand-rolled components' paths) and count call sites per surface.
- For each incumbent component, the Million UI component that does its job,
  chosen with [COMPONENTS.md](COMPONENTS.md). Mark the ones with no
  counterpart — they stay incumbent and are named as such in the plan.

The audit is complete when every screen is listed and every incumbent import
is attributed to a surface. An import the audit cannot place is a finding, not
a leftover.

## 2. Plan

Order the work: shared primitives first (button, input, field — the pieces
every surface leans on), then surfaces from least entangled to most. Each wave
is small enough that a human can genuinely compare it — one shared primitive,
or one screen.

Present the plan — waves, surface-to-component mapping, the no-counterpart
list — and stop until the human approves it. The plan is the last point where
scope is cheap to change; a surprise here costs a sentence, a surprise in wave
four costs a rework.

## 3. Waves

Per wave, under the audit-log contract:

- Replace the surface in place, styled entirely with the token layer's
  semantic utilities — one described change per commit, each with its
  `pending` entry.
- Keep the build green — every commit builds and every route still renders.
- Present the wave for review: the human judges the app's own dev server at
  HEAD, and when they ask to see the incumbent beside the replacement, serve
  the comparison — `git show` the prior version, or a temporary side-by-side
  route — on request.
- The human rules on the wave's entries. Approval flips them; rejection
  reverts those commits and keeps the entries as `reverted`, or records the
  surface as deferred in the Backlog — the human's call.

## 4. Sweep

The sweep is the one step a revert cannot cheaply undo, so it keeps a hard
gate: it runs only once the human has ruled on every migration entry and no
surface is left on the incumbent except the explicitly deferred — a reverted
surface is incumbent again, and its packages stay until it is re-landed or
deferred.

Then: uninstall the incumbent's packages, delete its theme and provider files,
and remove dead styles. A provider the no-counterpart components still need
stays, named in the report.

## Completion

The migration is complete when every criterion holds, each one checked:

- Every surface from the audit is replaced or explicitly deferred by the human.
- No entry the migration landed is still `pending` in `DESIGN_LOG.md`.
- A search for the incumbent's specifiers returns only the deferred surfaces'
  call sites (zero, when nothing was deferred).
- The incumbent is gone from `package.json`, unless deferred surfaces still
  need it.
- The production build, the typecheck, and the repository's existing test
  suite all pass.
- Every route renders — walked, not assumed.

## The shadcn playbook

A repository already on shadcn/ui is the near-isomorphic case: same component
names, same file layout, same `cn()` helper. The migration is a styling swap,
so waves move faster — but three differences decide the work:

- **Tailwind version.** The token layer is Tailwind v4 syntax (`@theme`,
  CSS-variable tokens). A v3 repository upgrades Tailwind first, with the
  official upgrade guide, as its own gated step before any wave lands.
- **Primitive layer.** Incumbent shadcn components are Radix-based; Million
  UI's are Base UI. Styled-component APIs match almost everywhere, but props
  passed through to primitives (`asChild`, portal props) need checking per
  call site rather than assuming.
- **Token layer.** Their `globals.css` theme block is replaced by
  `@million-ui/token-layer`; app-specific CSS they added around it is kept.
  Their `components/ui/*.tsx` are replaced in place, entry by entry.

## Monolithic incumbents

MUI, Chakra, Ant, and kin map by job, not by name, and wrap the app in
providers. Migrate screen by screen rather than primitive by primitive — a
half-replaced primitive inside a themed provider tree fights both themes.
Expect visible layout shifts and show them honestly when the wave is
reviewed; the point of the audit is that the human rules on them while a
revert is still one command. The provider is removed in the sweep, last.
