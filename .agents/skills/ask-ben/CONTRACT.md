# Contract

How a UI change lands: in place, one described change per commit, each recorded
as a `pending` entry in the repository's root `DESIGN_LOG.md` audit log for
human review. This chapter applies whenever a task changes components, pages,
DOM, styling, copy, interactions, responsive behavior, or accessibility.

The posture throughout is [suckless](https://suckless.org/philosophy/): the
smallest coherent change, the least code and fewest concepts that solve the
user problem, reuse ahead of duplication, accidental complexity removed.
Minimal stays complete — required states, semantics and accessibility survive
the cut. Registries, manifests, generators, variants and new dependencies
arrive when the task calls for them. What the change should look like is
[DECREES.md](DECREES.md)'s.

## Audit-log contract

1. Edit files in place: the change lands in the file that ships, never beside
   it. The file's history is git's job and the review record is the log's.
2. One described change per commit. The subject line says the change in one
   sentence.
3. The same commit appends one entry to `DESIGN_LOG.md`'s `## Log` at the
   repository root: `- <date> · pending · <the sentence>`. A change that took
   several commits is one entry naming each subject.
4. Verdicts are the human's alone. Never rule on your own entry; flip an
   entry's status only to record a verdict the human has given.
5. On a rejection verdict, revert and keep the record: `git revert
   --no-commit <sha>`, then `git checkout HEAD -- DESIGN_LOG.md`, flip the
   entry to `reverted`, commit. The log keeps what was tried, not only what
   survived.
6. Commits that touch only `DESIGN_LOG.md` are bookkeeping and carry no
   entry.
7. If `DESIGN_LOG.md` does not exist yet, seed it with the shape this
   repository's own log uses — a Log, a Backlog, and the rules above — as
   part of the first change that needs it.

## Workflow

1. Read the target, its callers, nearby UI, and project instructions. Apply
   every decree in [DECREES.md](DECREES.md) that touches the surface before
   composing.
2. Search existing components and usages before writing code.
3. Choose in order:
   - reuse an existing project component;
   - compose existing project components;
   - use a styled shadcn component from `src/components/ui/`;
   - add a missing shadcn component from the registry (see **shadcn** below);
   - use a Base UI primitive for behavior shadcn does not ship;
   - create a new component only when necessary.
4. Make the change in place; commit it as one described change with its log
   entry.
5. OpenStory coverage is mandatory for every component that can render in
   isolation: a co-located `<component>.stories.tsx` exercising its states.
6. Run the project's focused type, lint, and test checks.
7. Render the change — OpenStory where installed, the app's own dev server
   otherwise — and inspect relevant states, narrow and wide layouts, keyboard
   flow, focus, and accessible names.
8. When the human asks to see the previous state beside the new one, serve
   the comparison — `git show` the prior version, or a temporary side-by-side
   route — on request, not as standing ceremony.
9. Fix issues and repeat checks before reporting completion.

## shadcn

`src/components/ui/` holds the styled component layer. Each file is a shadcn
component built on a Base UI primitive and styled with Tailwind against the
`base-lyra` token set. These files are owned by the repository — edit them in
place when the styling itself must change, under the contract like any other
change.

Reach for a styled shadcn component before an unstyled Base UI primitive. Use
Base UI directly only for behavior shadcn does not ship: Meter, Number Field,
Toolbar, and Base UI's own Form and Fieldset.

To add a component the repository does not have yet:

```bash
npx shadcn@latest add <component>
```

The files it writes are yours as they land; commit the add as its own
described change with its entry.

Style with the semantic Tailwind utilities the token layer exposes —
`bg-background`, `text-muted-foreground`, `border-input`, `ring-ring` —
rather than literal colors. The token layer defines them for light and dark.

## Base UI

When neither an existing project component nor a shadcn component provides
the required interaction:

1. Read `https://base-ui.com/llms.txt`.
2. Follow its link to the exact component and the relevant handbook pages; the
   API comes from the documentation, read.
3. Import the primitive from its own entry point — `@base-ui/react/dialog` —
   which is what the set does and what Base UI's own documentation writes.
4. Use the project's installed `@base-ui/react` version. If absent, add it with
   the existing package manager rather than reaching for another primitive
   library.
5. Apply existing project styles and tokens; Base UI is unstyled.
6. Keep Base UI's semantics, keyboard behavior, focus management, and required
   parts intact.
7. When composing through `render`, ensure custom components forward the ref
   and received props to the DOM node.

Where the network is unavailable, the installed package's types and source are
the API: use the props they declare.

## Completion report

Return:

- the described changes committed, each with its log entry, all left `pending`;
- existing components reused;
- Base UI primitives and documentation consulted;
- stories added or updated, or why a component cannot render in isolation;
- commands run and rendered checks performed;
- unresolved decisions or validation gaps.
