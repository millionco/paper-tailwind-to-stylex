# Choosing components

Choose by the job the surface is doing. Names are the registry item names —
`npx shadcn add @million-ui/<name>`.

| Job | Component |
| --- | --- |
| The one action a return key would take | `button` — the filled primary action; one per view |
| Every other action | `button` (default variant — raised, on the control surface) |
| A pressed/unpressed state | `toggle`, `toggle-group` |
| Copying a value | `copy` beside content; `input-copy` when the value wears a field |
| Free text | `input`, `textarea`; `input-group` for affixed fields; `input-otp` for codes |
| Form scaffolding | `field` + `label` |
| One of N, visible | `radio-group`; `tabs` when it switches a view |
| One of N, collapsed | `select`; `combobox` when the list needs typing to filter |
| Yes/no | `checkbox` for forms, `switch` for immediate effect |
| A number in a range | `slider`; `progress` to display one read-only |
| Rows of data | `table`; `data-table` when columns sort (TanStack v9: `useTable`, features opt-in) |
| Naming or marking a thing | `badge` (filled) |
| Reporting a state | `badge` status variant — colored dot, plain label, no fill |
| A person | `avatar` |
| Keyboard keys | `kbd`; fields advertise focus shortcuts with it |
| Dividing content | `separator` |
| Streams of messages | `message-scroller` |
| An agent's transcript | `transcript` — turns, scroll and outline in one; see **Rendering a run** below |
| Sectioned disclosure | `accordion` (one-at-a-time), `collapsible` (independent) |
| Custom scroll region | `scroll-area` |
| Interrupting for a decision | `dialog`; `alert-dialog` when it is destructive |
| A side panel | `drawer` |
| Anchored transient UI | `popover`; `hover-card` for previews; `tooltip` for names |
| Menus | `dropdown-menu` from a trigger; `context-menu` from right-click; `menubar`, `navigation-menu` for chrome |
| Ephemeral confirmation | `toast` |
| Location and paging | `breadcrumb`, `pagination` |

## Rendering a run

A transcript of an agent's work is the one surface here assembled from more
than one item, and none of them were listed until now — the set published nine
and the table named one, so a repository following this skill would rebuild
what it had already installed.

`transcript` takes turns and draws the whole surface: the scroll, the paint room
a reply's working needs, the outline beside it, and the anchors that keep the
two in step. Give it a region to fill.

Turns come from `parse-trajectory`, which reads
[ATIF](https://github.com/harborlabs/atif) — one function, `readTrajectory`:

```tsx
import { readTrajectory } from '@/lib/parse-trajectory';
import { marinaDialect } from '@/lib/marina-dialect';
import { Transcript } from '@/components/ui/transcript';

<div className="h-full">
  <Transcript turns={readTrajectory(trajectory, marinaDialect)} />
</div>;
```

The second argument is the **dialect**, and it is passed rather than detected:
the reader knows the format and the caller knows which producer it fetched
from. Drop it and a run still renders — its turns, its working, its calls and
its timestamps are all in the format — with each result as the text it is
rather than as a diff, a recording or a plan. `marina-dialect` is one producer's
and is what to copy when writing another.

The pieces underneath — `transcript-turn`, `thinking-steps`, `code-block`,
`task-list`, `transcript-outline`, `inline-markdown` — are installed as
dependencies and are worth knowing about, but composing them by hand is
rebuilding `transcript`. Reach for them individually only for a surface that is
not a transcript: `code-block` for output anywhere, `thinking-steps` for work in
progress that is not a turn.

**The seam that must not be crossed** (ADR 0008): no component may learn what a
tool is. `parse-trajectory` and `marina-dialect` hold that knowledge and are
`registry:lib`; every component takes a shape and renders it. A component in a
consuming repository that starts matching on a tool's name has broken the rule
the set's own build test enforces.

## House rules

The set has opinions; applying them is what makes a migration look like
Million UI rather than a reskin:

- One filled button per view. Everything else rests on the control surface.
- State is reported with the status badge — a colored indicator beside plain
  grey text — never a tinted pill.
- Every copy interaction goes through `copy` or `input-copy`, so the copy mark
  (clipboard → tick or cross) is the whole confirmation. No toast for copies.
- A value read a glyph at a time — a key, an ID, a hash — is mono and taken
  whole; that is `input-copy`, not a selectable text field.
- Long opaque values in fields take `input-group` with `edgeFade`, which
  requires the group — the fade is a mask and would clip a bare input's edge.
- Style with the token layer's semantic utilities (`bg-background`,
  `text-muted-foreground`, `border-input`) — light and dark both resolve from
  the same names.

## When the job has no component

Behavior the set does not ship — Meter, Number Field, Toolbar, Form,
Fieldset — comes from the `base-ui` catalog item, unstyled. Read
`https://base-ui.com/llms.txt` and the exact component page before using one;
follow the installed `@base-ui/react` API rather than guessing. Style it with
the token layer's utilities. Reach for this only after the table above has
nothing: a styled component always beats a primitive restyled by hand.

## Hit areas

The set expands targets invisibly: `reach-6` (token layer) puts a 32px
target on a 20px control via an `::after` inset; `reach-row` gives menu
and select rows their panel's inset. Both ship in the token layer and
arrive in every consuming app — reach for the ones already there.

Two rules when composing:

- **In a dense row the slop stays on.** Size the control down (`size-5`,
  the row's own line box) so the 6px reach fits inside the row — a 32px
  target in a 20px control, as `actions-column` does. A trigger in a
  table row also drops its own fill (`hover:bg-transparent
  aria-expanded:bg-transparent`): the row already answers the pointer,
  and the open state marks the cell (`has-aria-expanded:bg-accent`).
- **`after:hidden` is for shoulder-to-shoulder controls only** —
  pagination pages, buttons inside a field — where neighbouring targets
  would otherwise meet in the shared gap. It is never the answer to a
  control that merely looks big in a row; sizing is.
- **In an actions cell, the whole cell is the target**: make the cell
  `relative`, the trigger `static`, and set its reach `::after` to
  `after:absolute after:inset-0` — clicking anywhere in the cell opens
  the menu.

To see targets while judging a surface: `npx shadcn add
@million-ui/hitbox`, import `src/styles/hitbox.css` once, and toggle
`data-hit-areas` on the document element.


## Icons

Menu items and buttons may carry a leading icon — sparingly, by
[Byttebier's rule](https://thomasbyttebier.be/blog/the-best-icon-is-a-text-label):
an icon only when its meaning is universal (pause, play, search, a
trash can), always beside the label and never instead of it, skipped
entirely when no honest glyph exists — an invented metaphor costs more
than no icon. Menu glyphs come from Central Icons at the 2px stroke
(`@central-icons-react/round-outlined-radius-2-stroke-2/IconName`,
rendered `mode="raw"`), so a menu reads as one drawn set with its
trigger — and so does everything else: Central is the set's hand
everywhere, not only in menus. Mark
leading glyphs `data-icon="inline-start"`; the menu row reserves its
icon column menu-wide the moment one row carries one, so labels stay
aligned. Keep a menu consistent: all near-universal actions carry
glyphs, or the menu stays text-only.
