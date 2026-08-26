# The ask-ben ledger

The evidence behind [DECREES.md](DECREES.md): every design decree Ben has
issued, as it happened — the principle stated positively under a leading
phrase, the boundary that keeps it honest, and the dated instance with his
words. Read an entry when a decree needs its history, its calibration
bracket, or its boundary questioned. New exchanges append here first (written
with the writing-for-agents skill), then distill into the decrees.

## The page starts with air

The first content sits well below the viewport top — a generous top
offset (pt-24 here against pb-12) — so the page opens with canvas
before it opens with UI. Top space is the page's posture; the bottom
stays tighter because scroll owns it.

**Boundary.** The air is the page shell's, top only — sections keep
their own rhythm, and dense in-app surfaces (dialogs, popovers) are
excluded.

**Instance (2026-08-18, madeleine).** Ben: "there should be more space
at the top (between the UI and the top of the page)." py-12 became
pt-24 pb-12.

## The primary ends the row, and the row ends the form

A form's action row aligns right and the filled primary sits last —
rightmost — so the eye crosses the quiet actions and lands on the
committing one, exactly as the set's dialog footers already read
(Cancel, then Action, right-aligned).

**Boundary.** Order is reading order, not importance: the primary is
last, never buried — a row long enough to hide it is a row that should
be shorter. Left-alignment belongs to rows that *start* something (a
toolbar), not rows that commit a form.

**Instance (2026-08-18, madeleine).** Ben, twice: "swap the order of
the two buttons," then "in a form like this, the canonical thing to do
here is the align the buttons to the right." Settings' footer is now
justify-end: Resurface one now, then Save (primary), flush right.

## The accent settles between vivid and muted

The primary is the OKLab midpoint of the set's original vivid blue
(p3 0.184 0.395 0.941) and a sampled reference indigo (#536fc6 —
"could we use a color between this and the current button color? like
a midpoint of the two"): p3(0.275 0.418 0.847), lightness held at
~0.56, chroma and hue meeting halfway. The companion stops — hover,
edge, highlight — move by their original OKLab deltas, so the ramp's
internal relationships survive the shift intact.

**Boundary.** Midpoints are computed in OKLab from sampled pixels,
never eyeballed in hex: the sample came off the reference screenshot,
the math off the color pipeline. One accent: every control that tints
(checked boxes included) moves together.

**Instance (2026-08-18, madeleine).** Sampled #536fc6 from Ben's
reference button; all four --primary* tokens shifted in both token
layers.

## One radius for the surfaces [REVOKED]

Every surface and control corners at the same radius: 9px — tables,
buttons, inputs, dropdown panels, dialogs — one value across
--radius-control, --radius-button, and the --radius scale's base, so
nothing argues about roundness. Reduced from the previous spread
(7/9/10) as part of unifying.

**Boundary.** Sub-element geometry keeps its own scale: the checkbox's
4px (element-sized, freshly decreed) and menu rows' 5px (inner-inset
radii) are not surface corners. The table container's literal 10px —
once "a considered pixel off the control radius" — retires onto the
token; one place to change beats one pixel of consideration.

**Instance (2026-08-18, madeleine).** Ben: "make the corner radii of
all elements (tables, buttons, inputs, dropdowns, etc. the same) and
reduce them a bit more than they currently are. port back to million
UI." Both token layers unified at 0.375rem; one squint later,
"increase the corner radius by 1px" — 0.4375rem (7px); then once
more, "can you increase the corner radiuses" — 0.5rem (8px); then
"increase it more" — three +1 steps all low, so a double stride to
0.625rem (10px); then "reduce the corner radii by 1px". The bracket
closed: 6, 7, 8 low; 10 high; 9 settled. Then the revocation: "i asked
for something like 'make all corner radiuses the same and consistent
and reduce them'. i do not like the result… i want to undo it and go
back to what it was before" (2026-08-18, later). Restored from git:
control 9px, button 7px, base 10px, table rounded-[10px]; the
checkbox's separate 4px decree predates unification and stands. The
per-element spread is the standing rule. Then: "are you able to use
the iOS corner radius thing?" — corner-shape: squircle landed on the
universal base rule; at 10px it read as too soft and Ben retired it the
same day ("remove the apple corner radius"). Corners are plain circular
arcs; the squircle lived from 6px through the stride to 10.

## One popup language

Every list that opens over the page speaks the menu system's language:
popup-surface on a rounded-control panel with the p-1 inset, rows at
13px/5 in 5px corners with reach-row targets, the tick in the left
column at the menus' own x — whether the list is a menu, a select, or
a combobox. A popup styled by its primitive's stock classes reads as a
different product interrupting this one.

**Boundary.** Interaction stays native to each primitive: the combobox
keeps focus in its input, so its highlight is the flat accent fill
rather than the menus' travelling chip — same color, different
mechanics — noted as the remaining delta, not papered over. Its
separator also joins menus-never-lined (it carried a private copy of
the old line).

**Instance (2026-08-18, madeleine).** Ben, on the timezone popup's
stock styling: "combobox dropdown styling should match that of the
other dropdowns (e.g. the actions dropdown). port this back to
million-ui." Both repos' combobox: rounded-control panel, p-1 list,
menu rows, left tick column via menuIndicatorClasses, h-1 spacer.

## Menu icons are earned, not issued

Action-menu items may carry a leading icon — sparingly, by Byttebier's
rule (thomasbyttebier.be/blog/the-best-icon-is-a-text-label): only when
the glyph's meaning is universal (pause, play, a trash can), always
beside the label, never instead of it, and skipped entirely when no
honest glyph exists. An invented metaphor costs more than no icon.
Menu glyphs come from Central Icons at the 2px stroke
(round-outlined-radius-2-stroke-2, `mode="raw"`), the board's own
specimen — so the menu reads as one drawn set with its trigger;
Phosphor remains the library outside menus.

**Boundary.** Whole menus stay consistent: within one menu, either the
near-universal actions all carry glyphs or none do half-heartedly —
but a menu whose actions have no universal glyphs stays text-only (the
log's Never again / Restore). The set's menu row reserves the icon
column menu-wide the moment one row carries a glyph, so labels align.

**Instance (2026-08-18, madeleine).** Ben: "action dropdowns should
probably use icons in their dropdown items (sparingly). refer to this
blogpost…" then, on the Phosphor first pass: "i meant the icons in the
dropdown [should be Central Icons]." The blogs menu carries IconPause/
IconPlay, IconArrowRotateClockwise, IconTrashCan (Central stroke-2,
data-icon=inline-start); the log's menu stayed text-only.

## Scrollbars appear when needed

An overlay scrollbar is hidden until it has something to say: it fades
in while the pointer is over its surface or while content is scrolling
(Base UI's data-hovering / data-scrolling), and vanishes otherwise. A
bar standing at attention beside still content is chrome announcing
machinery.

**Boundary.** The affordance survives discovery: hovering the surface
reveals the bar, so scrollability is never a secret — this is not
scrollbar removal (no-scrollbar remains a different, deliberate tool).

**Instance (2026-08-18, madeleine).** Ben: "any way to hide the scroll
bars until scrolling or hovered?" ScrollBar in both repos' scroll-area
gains opacity-0 with data-hovering/data-scrolling reveals at 150ms.

## Cells truncate, never stretch the table

One runaway value never widens a table: long text cells truncate with
an ellipsis at a column budget (the full value survives in the title
attribute, on hover). Horizontal scroll is for tables with many
columns, not for one long title.

**Boundary.** Identifier-like values the Reader must read whole (URLs,
hashes) get a copy affordance instead of truncation; numeric and badge
columns never need budgets.

**Instance (2026-08-18, madeleine).** Ben, after a French video title
stretched the log sideways: "rows should probably never be this long.
you should truncate." Post links truncate at max-w-96, blog titles at
max-w-64, full text on hover.

## Type-to-filter lists are comboboxes

A field whose value is one of a large known list is never a free-text
input: it is a combobox — the set's own table already rules it ("one of
N, collapsed: select; combobox when the list needs typing to filter").
Free text invites typos the validator then has to bounce; the combobox
makes the valid set the interface.

**Boundary.** Genuinely free values (an email, a URL) stay inputs; a
short enumerable set (weekdays) stays visible checkboxes or a select.

**Instance (2026-08-18, madeleine).** Ben: "isn't this supposed to be a
combobox?" The Timezone field — a raw Input over ~400 IANA names —
became the set's Combobox over Intl.supportedValuesOf('timeZone').

## Tables scroll like transcripts

A table's scroller is the overlay ScrollArea, never native overflow: no
reserved lane, a transparent track, the thumb a real element floating
over the rows — the same treatment the trajectory's tool calls carry.
A native bar cuts a lane out of the content box and paints a strip the
surface cannot own; the overlay reserves nothing and severs nothing.

**Boundary.** The page's own scrollbar stays native — the token layer
already slims it to a capsule on a transparent track globally. This
rule is for scrolling *surfaces*: tables, code, transcripts.

**Instance (2026-08-18, madeleine).** Ben, with a board screenshot:
"tables must use the transparent scrollbar backgrounds, the same ones
that exist in tool calls inside of the trajectory/transcript UIs."
Both repos' Table containers became ScrollArea (frame classes on the
root, radius inherited by the viewport); million-ui's table item now
pulls scroll-area as a dependency for every future consumer.

## Hit areas ship; size to keep them

Every hit-area mechanism in the set propagates to consumers — reach-6
and reach-row ride the token layer, per-component slops ride their
items — so a consuming app never rebuilds them and never turns them off
for size reasons. In a dense row the control is sized down (size-5, the
line box) so the 6px reach fits inside the row: a 32px target on a 20px
control. A row trigger also drops its own fill (hover and expanded
transparent) — the row answers the pointer, and the open state marks
the cell (has-aria-expanded:bg-accent). after:hidden is reserved for
shoulder-to-shoulder controls whose targets would meet in the shared
gap. And in an actions cell the target is the whole cell: the trigger
goes static so its reach ::after resolves against the relative cell at
inset-0 — clicking anywhere in the cell opens the menu (Ben: "clicking
anywhere on the cell should trigger the dropdown").

**Boundary.** The audit that produced this found no propagation defect:
what reads as "the fixes don't exist here" is uninstalled items, the
invisible nature of pseudo-element targets, and consumer-side slop-offs.
The data-hit-areas overlay now ships (@million-ui/hitbox) precisely so
a consumer can check instead of conclude.

**Instance (2026-08-18, madeleine).** Ben: "the various hitbox
modifications and deadspace fixes that exist in million-ui don't exist
here. why?… the hitbox changes should propagate to all UIs that use
million-ui." The audit found reach-6/reach-row live in madeleine's
built CSS all along; the one real regression was this app's own
after:hidden on the ellipsis trigger — replaced with the size-5 recipe.
Upstream: the overlay became a registry item, actionsColumn escaped
data-table's tanstack closure as actions-column, COMPONENTS.md gained
the hit-areas contract, and the dropdown-menu comment now states the
recipe it used to gesture at.

## A label is a label wherever it renders

Anything rendered in a label's position wears the label's exact
treatment — text-label-foreground, normal weight, the label size — no
matter which component renders it. A legend dressed as a label
(FieldLegend variant="label") mirrors FieldLabel to the letter; only a
true legend keeps legend styling.

**Boundary.** The variant system is the mechanism, not the excuse: a
variant named after another component's role is a promise to match it,
and drift between them is a bug, not a nuance.

**Instance (2026-08-18, madeleine).** Ben, on "Send days" rendering
bold-black above quiet grey labels: "why is the label for this not
styled like the others? (you should port this change back to
million-ui)." FieldLegend's label variant carried font-medium and
inherited full foreground; it now takes font-normal and
text-label-foreground in both repos' field candidates.

## Titles carry the divisions

Sections divide by their titles alone — a rule between sections is
arbitrary ink doing a job the heading already does (the menus-never-lined
instinct, at page scale). For a title to carry that weight it is set
larger and lighter, never smaller and heavier — text-lg font-normal
where text-sm font-medium sat — and with slightly negative tracking
(tracking-tight, -0.025em): body text tracks as set, headings tighten a
touch to read properly as headings. Color steps down once too —
though not all the way to the reading tier: content-foreground read as
too light, so the title ink is the halfway mix,
color-mix(in oklch, var(--content-foreground), var(--foreground) 50%) —
between body black (too heavy) and the tables' grey (too faint), by
Ben's bracketing.
A title is a landmark, not an emphasis — size gives it presence; low
weight, tight tracking, and the subtler ink keep it composed.

**Boundary.** Rules keep their place *inside* surfaces that need them —
a table's row rules are structure, not decoration. And between the
page's *vertical* sections — side-by-side columns — a structural rule
returns: a 0.5px hairline pinned to the aside's edge and the canvas's
inset-y-0 — the full page height, air included — with the column gap
split evenly around it — calibrated to 48px a side (32 read as tight:
"we need to add more space either side of the vertical divider") ("there
should be a divider between them that runs the full extent of the
page (it should be .5px)… i meant vertical. the vertical sections").
Stacked sections still divide by their titles alone — a misheard
horizontal band version lived for one commit before the correction.
The larger-lighter trade is for titles; labels and table headings keep
their own scale.

**Instance (2026-08-18, madeleine).** Ben, on a screenshot of the
Separator between sections: "you should never add these arbitrary
dividers between sections. the titles are enough… make the subtitles a
bit bigger to accommodate… all the titles are currently too heavy
regarding font weight. they should be a larger size with lower font
weight." The inter-section Separator went; Blogs, Resurfacings, and
Settings moved from text-sm font-medium to text-lg font-normal.

## Headings name the content, never the product

On-page headings describe what is happening on the page — Blogs,
Resurfacings, Settings — never the product's name. A wordmark heading is
chrome: the product's identity already lives in the browser tab, the
URL, and the email it sends, and repeating it at the top of the page
spends the largest type on the one thing the Reader already knows.

**Boundary.** The document <title> keeps the product name — that is the
tab's job. Multi-page apps name the page per page; the wordmark earns a
place only in navigation chrome that exists for other reasons.

**Instance (2026-08-18, madeleine).** Ben: "remove the app title:
madeleine, titles like this are almost always pointless. they should
instead describe what is happening on the page (e.g. Settings, etc.)"
The h1 wordmark went; the left track gained the missing "Blogs" section
heading, so the page reads as its three sections.

## The canvas is a quiet gray

The page background sits one step below the surfaces — a whisper of
gray, oklch(0.99 0 0), calibrated down from neutral-50's 0.985 after
Ben read it as a touch dark — so the white surfaces on it pop: tables,
fields,
buttons, panels all read as raised objects against a quiet floor.
Surfaces wear bg-background explicitly; a frame with no fill is a
window the canvas shows through, not a surface.

**Boundary.** The --background *token* stays white: it is the color the
control surfaces wear, and graying the token would gray every control
with it. The canvas is the app shell's own wrapper. Dark mode is unwired
in madeleine; the canvas value will need a dark stop when it arrives.

**Instance (2026-08-18, madeleine).** Ben: "the background color of the
page should always be a very subtle gray, so as to allow the UI contents
to pop out." App.candidate gains a min-h-dvh canvas;
table.candidate's container gains bg-background. Then: "the background
of the page is probably a tiny bit too dark it should be a tiny bit
more subtle" — neutral-50 (0.985) lifted to oklch(0.99 0 0).

## Checked wears the accent

A checked control tints with --primary — the token layer already
declares it: "--primary reaches every control that tints: a checked box
or radio, a switch, a slider, a progress fill." The checkbox's checked
fill is bg-primary with a --primary-edge ring, the washed stop the set
pairs with a primary fill; the tick stays --primary-foreground.

**Boundary.** This is the token layer's own stated intent, not a new
taste: the canonical checkbox still tints with --selection-strong
(oklch 0.56 0.005 — a near-grey), which reads as the accent rollout
having missed it. Port upstream: the fix belongs in
millionco/million-ui's checkbox, per Ben's explicit instruction.

**Instance (2026-08-18, madeleine).** Ben, with a screenshot of grey
checked Send Day boxes: "checkboxes should use the primary blue. you'll
need to port this decision back to million-ui."
checkbox.candidate.tsx carries the change; settings imports it. Later,
the corner: "increase the checkbox corner radius by 1px (and port this
back to million-ui)" — --radius-checkbox 3px → 4px in both token
layers.

## Rows cozily hug their contents

A table row hugs its contents at a still-comfortable height — py-1.5
against the 20px line box, a 32px row — and the *row is the datum*:
headings take the rows' height by the rows' formula, never rows the
headings'. Controls are sized to the row, never the row to the control
(the set's own TableCell comment: "the button is the thing that was
wrong; the padding was not"), and a control slightly taller than the
line box overflows the padding with negative margin (-my-1) instead of
growing the row. Centering is geometric, never baseline luck: an in-row
control becomes a flex block (`flex`, `ml-auto` in right-aligned cells) —
an inline-flex control, icon-only especially, sits on the text baseline,
and negative margins skew where that baseline lands (Ben: "all elements
should always be vertically centered perfectly inside the row").

**Boundary.** A control that cannot work at row height belongs outside
the row or behind the ellipsis. Note the recorded tension: the canonical
TableCell defends p-2 (a 37px row) and its comment calls 33px "further
than anyone asked" — Ben asked. His density overrules the set's here;
the upstream skill should treat cozy as the default and 37px as the
loose end.

**Instance (2026-08-18, madeleine).** Ben, four corrections in one
sitting, bracketing the target from both sides: "rows should never be
this high / tall" (~44px), then "still too tall. they should cozily hug
the contents" (~40px), then "the headings should be the same height as
the rows," then — after everything landed at the headers' 28px — "too
short now… you overindexed… you made the row heights the same height as
the table headings instead of the other way around." Settled:
table.candidate.tsx at px-2 py-1.5 for cells and heads (32px), controls
overflowing with -my-1. The oscillation is the calibration: 44 no, 40
no, 28 no, 32 yes — worth more to the upstream skill than any single
quote.

## Menus are never lined

Dividers never appear inside a dropdown: a menu's grouping is whitespace,
never a line. Destructive items are already isolated by position (last)
and the destructive variant; a rule between rows adds ink where the panel
already provides order. Upstream, menuSeparatorClasses becomes a pure
whitespace spacer — same component, same role="separator" accessibility,
nothing to paint — so grouping semantics survive and a line can never
appear, in any of the three menus that share the definition.

**Boundary.** This buries my earlier convention ("destructive items sit
last behind a separator") — Ben's rule wins and the ellipsis entry is
amended. The spacer keeps grouping expressible; deleting the component
was rejected to preserve API and semantics.

**Instance (2026-08-18, madeleine).** Ben, twice: "there should never be
dividers like this in the dropdowns… these dividers should never appear
inside the dropdown," then, seeing it still there: "you did not remove
the divider that is inside the dropdown?" The blogs menu drops its
DropdownMenuSeparator (regression: the open menu renders zero
role=separator elements); the spacer restyle ports to
millionco/million-ui per his instruction.

**Instance (2026-08-23, thinky-3d).** Ben: "in the multi-=select
dorpdowns, can we add a subtle divider betweeeen 'All' and the other
options" — the exception that scopes the rule, and it amends this
chapter's "a line can never appear" boundary. A picker's reset row is a
row of a different kind — a sentinel above the members it clears — and
that difference takes the page's own 0.5px hairline
(pickerSeparatorClasses; the select and combobox separators wear it,
full-bleed like the select's retired h-px bg-border rule but at the
page's weight). Grouping among like rows stays whitespace, and action
menus stay unlined — the 2026-08-18 word holds everywhere but the
sentinel. Same day, on a single-select panel without it: "why is this
one missing the divider" — the rule follows the sentinel row, not the
panel's multiplicity.

## Row actions collapse behind the ellipsis

A table row showing multiple actions offers one visible affordance: the
"…" menu trigger, opening a dropdown of labeled items. The row stays quiet
until asked; the actions column stops competing with the data. Destructive
items sit last, wear the destructive variant, and keep their confirmation
dialog — hoisted and state-controlled, since a dialog cannot live inside
the menu that closes on select. No separator before them: see Menus are
never lined.

**Boundary.** No exceptions for count: even a lone action goes behind
the ellipsis — a column repeating one label N times reads as noise, and
the label lives once, in the menu. [This buries this entry's earlier
boundary, which kept a lone action as a labeled button; Ben: "buttons
should never appear like this in tables. it makes no sense. they
should always be behind the ellipsis button."] The trigger is the set's
`DropdownMenuIconTrigger` (its quiet ghost styling is the set's own,
per the Actions-wear-a-surface boundary); in a dense row the trigger is
sized down (size-5) so its hit-slop stays on — see Hit areas ship. [An
earlier version of this entry claimed the slop "turns off, as
actionsColumn does" — actionsColumn does the opposite, and the claim
came from half-reading its pointer.] The trigger's
canonical mark is Central Icons' (license-gated at install via
CENTRAL_LICENSE_KEY); without the key it falls back to Phosphor's dots —
the visibly-unlicensed state, per TYPE.md's rule applied to icons.

**Instance (2026-08-18, madeleine).** Ben, with a reference screenshot of
the pattern: "actions like this should be behind an action elipsis
button." The blogs table's three-button actions cell (Pause/Resume,
Refresh, Remove) became a DropdownMenuIconTrigger + menu; the remove
confirmation moved to a controlled AlertDialog at the component root.
The log's lone suppress action first stayed a labeled button, then — a
column of six "Never again" buttons later — joined the ellipsis too.
Third instance (2026-08-18): "action columns like this should never
have a column heading and should always perfectly hug the ellipsis
icons" — both tables' Actions headers went sr-only and their columns
w-px, the actionsColumn recipe they should have worn from the start.

## Rows act in the actions column

In a data table, a row's state is *displayed* by a status badge and
*changed* by a labeled button in the row's actions column. A form control
embedded per row — a switch, a select — plants a settings idiom in a
reading surface, and pairs awkwardly with the badge already reporting the
same fact.

**Boundary.** Selection checkboxes remain a table idiom: they choose rows,
they don't mutate them. Switches keep their home on settings surfaces,
where the control is the setting.

**Instance (2026-08-18, madeleine).** Ben: "switches don't belong in the
data table like this." The blogs table carried a Resurfacing column with a
Switch per row, beside a State badge saying the same thing. Column
removed; Pause/Resume joined Refresh and Remove as row actions; the badge
stays the single display of state. Second instance, same day: the
log's Suppressed badge sat inline after the post title — "it's obvious
this should never be displayed like this right? it should go into a
'State' or 'Status' column" — the badge moved to its own State column
(Sent / Suppressed), and the rule sharpened: state in a State column,
never appended to a content cell.

## Actions wear a surface

Every clickable action sits on a visible control surface: the one filled
primary for the view's main act, the raised default for everything else.
A "view" is a region with its own job — a form, a sidebar, a dialog — not
the page: a split layout carries one primary per region (the add-form's
"Index it", the settings aside's "Save"), each the act its return key
would take. The ghost variant goes unused in composed UI — an action
dressed as plain text is Ben's stated dislike, a hard rule, not a taste
to weigh per case.

**Boundary.** This governs composed UI — the buttons a page authors. The
component set itself still ships ghost internally (the toast's close X,
`toast.tsx`); whether that survives is an upstream call for
millionco/million-ui, flagged here rather than patched around. The `ghost`
badge variant is a badge, not an action, and is out of scope.

**Instance (2026-08-18, madeleine).** Ben, on Save sitting unfilled in
the settings aside: "shouldn't the 'save' here be a primary button?" —
the per-region reading above; Save took the fill.

**Instance (2026-08-18, madeleine).** Ben: "i don't like ghost buttons.
they shouldn't be used." Two call sites changed to the default surface:
the log's suppress button (previously ghost until suppressed) and
Settings' "Resurface one now".

## Spend the width before the scroll

A desktop viewport's horizontal budget is spent before anything is pushed
into vertical scroll: reading surfaces (tables, logs, feeds) take the wide
main track, configuration and controls take a narrow aside beside them, and
the sidebar sticks so it stays at hand while the main track scrolls.

**Boundary.** The single column is the narrow-viewport *fallback* the grid
collapses into, not the desktop composition. It is also the honest default
when a page has only one surface — an aside must have its own job, not be a
parking spot.

**Instance (2026-08-18, madeleine).** Ben: "why does the UI look so linear?
everything is stacked vertically. it doesn't seem to make good use of
horizontal page space." The page was one max-w-3xl stack — form, table,
log, settings in a line. Recomposed as `lg:grid-cols-[minmax(0,1fr)_20rem]`:
add-form, blogs, and the resurfacing log on the wide track; Settings as a
sticky aside; the stack survives below `lg`. Calibration: the
inter-track gap settled at gap-x-16 (gap-10 read as sections leaning on
each other — "a little more horizontal space between the sections").

## Choice lists read down

An enumerable option set renders as a column: one option per line lets the
set's size and each checked state scan in a single downward pass.

**Boundary.** Horizontal belongs to segmented controls whose options form
one shaped unit — tabs, a toggle pair — and to option sets so short they
read as a phrase. A wrapped row of checkboxes is neither: wrapping hides
the set's shape.

**Instance (2026-08-18, madeleine).** Ben: "why are the checkboxes
displayed in a row, shouldn't it be a col?" The seven Send Day checkboxes
rendered as `flex flex-wrap` — a row that wrapped wherever it ran out of
room. Now `flex flex-col gap-2` in the settings aside.

## The edge leaves with the fill

A decorated edge — a hairline ring, inset highlight lines — is tuned against
the fill it surrounds. A state that swaps the fill takes those layers with
it, in the same declaration: swap them to match the new fill, or drop them.

**Boundary.** Edges tuned against a fill the state keeps survive it: the
control surface's grey hairline harmonizes with the grey disabled fill and
correctly stays. Only layers whose fill has departed are orphaned.

**Instance (2026-08-18, madeleine).** The disabled primary button ("Index
it" with an empty URL field) swapped to `disabled:bg-input-disabled` +
grey text but kept `shadow-primary` — the `--primary-edge` ring and both
`--primary-highlight` inset lines, all tuned against the blue fill —
producing a washed grey pill wearing an orphaned blue-grey ring. Ben: "why
does this button look so broken?" Fixed in `button.candidate.tsx` by adding
`disabled:shadow-none` to the primary variant. Upstream note: the canonical
button in millionco/million-ui carries the same gap in its primary variant.
Coda, later that day: "remove the glassy effect from the button and just
make it a solid color" — shadow-primary retired from the primary variant
entirely in both repos, taking the whole orphaned-edge bug class with it.
The principle stands for any state that swaps a fill under decorated
layers; the primary simply no longer wears any.

## Labels, not lectures

The control is its own explanation: the label names it, the placeholder
demonstrates it, state shows it. Prose beside a control carries only what
the control cannot show — the consequence of an irreversible action.

**Boundary.** Consequence prose stays. A destructive confirmation states
what goes and what the alternative preserves ("Its archive and its place in
the log go with it. Pausing keeps both."). Taglines, field descriptions
restating their label, and coaching sentences appended to empty states read
as noise precisely because they sit beside controls that already work.

**Instance (2026-08-18, madeleine).** Ben: "remove a lot of the excess
random explainer text around the elements. it looks excessive." Removed the
header tagline, every FieldDescription (a `https://paulgraham.com/…`
placeholder demonstrates "paste an archive page" better than the sentence it
replaced did), and the trailing halves of both empty states ("No blogs
indexed yet." carries the state alone). Kept the remove-blog dialog's
consequence line. The page settled at wordmark, one form, two tables,
settings — and read better for it.

## Type renders at the weight it was drawn

The set's faces are read at the platform's own rasterisation. Grayscale
smoothing — `-webkit-font-smoothing: antialiased` with
`-moz-osx-font-smoothing: grayscale`, which Tailwind's `antialiased` sets
together — lays down less ink per stem than macOS's default subpixel pass,
so every glyph renders a half-step lighter than the weight it was drawn at.
Million UI sets font-smoothing nowhere, and that silence is the decision.

**Boundary.** This is rasterisation, not weight. The set's narrow range —
300, 400, 500, with no semibold or bold anywhere in it — is deliberate and
stays; a set capped at `font-medium` simply has no headroom to absorb the
loss, which is why the thinning reads as broken type here and would pass
unnoticed at 600. The repair is never to raise weights in compensation. A
surface that still reads light with smoothing off has a real weight
problem, and that is a different entry.

**Instance (2026-08-19, marina).** Ben: "why do all of the font weights
appear broken?" — then, against a side-by-side of marina and the set's own
reference render: "this is simply not true. when i compare these two
screenshots i can see that marina is using a lighter weight than it should
be". `<html className="antialiased">` in `app/layout.tsx`, present since
the repo's first commit and predating the Million UI migration, was
removed.

## A title has content beneath it

A title names the block that follows it, so two titles in a row means the
first one named nothing — the reader gets a division announced and then
immediately re-announced, and the pair reads as a mistake before it reads as
a hierarchy. Where a page title and its first section title would stack, the
page title is the one to cut: the sections carry the divisions, and the
page's own name is already in the tab title.

**Boundary.** Not a limit on how many titles a page may have — only on
adjacency. "Bookmarked" and "All jobs" both stay, because a table sits
between them. The rule's other edge is that a lone division needs no title
at all: one list under one heading is a heading dividing nothing.

**Instance (2026-08-19, marina).** Ben, on the jobs page: "you should
rmeove this ... theere should never be two titles consecutively (one
immediztely beneath the other and vice versa. it looks bad)". The `<h1>`
"Jobs" sat directly above the "Bookmarked" section heading whenever a
bookmark existed. Removed — which also settles it under the standing decree
that headings name the content and never the product, since "Jobs" on
`/jobs` told the reader nothing the tab title had not.

## The page has a measure, and stops growing at it

A layout that tracks the viewport has no measure — it is only ever as wide
as the window someone happened to open, and on a large display the UI runs
out to both edges with nothing holding it. The page takes a maximum width
and centres in whatever is left. The cap has to bite at the sizes people
actually use: one set above every real display is not a cap, it is a
formality, and it reads as full-bleed on every machine that matters.

Padding is not the instrument here. Air at the edges is what a page owes the
viewport it is inside; the measure is what the composition owes itself, and
widening the gutter to simulate a cap only pushes the same unbounded layout
inward.

**Boundary.** Bounded is not narrow — "spend the width before the scroll"
still holds, and the reading track keeps the wide lane. The cap is derived
from the composition rather than chosen: the aside's 18rem plus the columns'
96px gutter set what the content track has left, and the number follows from
wanting that track wide but finite. Below the cap the layout is fluid as
before.

**Instance (2026-08-19, marina).** Ben: "there is not enough horizontal
padding. this is bad. there should be a good amount of padding around the
entire page" — then, on being given padding: "no, i mean like, there hsould
be a max-width of sorts. currently the UI extends too far to each edge of
the page". `max-w-[100rem]` (1600px, above any laptop, so never in force)
became `max-w-[80rem]` (1280px) across PageColumns and both detail pages,
leaving an 896px content track beside the aside.

## A table paginates when it runs out of room

The pager is what a table reaches for once the page is full, not a number
picked in advance. Ten rows under a reading track the composition went to
some trouble to widen leaves most of that width bought and unspent, and it
puts the reader in the pager for a list that would have fitted on one
screen — the most expensive interaction in the table, reached soonest.
Spend the height the same way the width is spent.

**Boundary.** Late, not never: this is pagination set deep, not infinite
scroll, and the count still has two ceilings above it — what the API will
serve in one request, and the point past which the scroll becomes the
interface rather than the table. A surface that already fills the page has
nothing to gain here.

**Instance (2026-08-19, marina).** Ben: "we need to show many more table
rows before paginating". The jobs table was fetching `page_size: "10"` as an
inline literal; it becomes a named `PAGE_SIZE` of 50, the count the trials
table had already settled on, against the API's ceiling of 100.

## A link in a table does not underline, and a hover names what has no name

The underline is prose's affordance and it works there because a link sits
among words that are not links — the rule is what tells the two apart. A
column of links has no such contrast: every cell is one, so underlining on
hover distinguishes a row from nothing except itself, and draws a rule under
whatever the pointer crosses.

Nothing takes its place on the name, because nothing was missing there. The
cursor already says the cell is clickable and the cell already says what the
row is, so a tooltip would name what is written directly beneath it. The
hover is owed instead to the control with no name at all — the actions
ellipsis, a glyph that announces a menu exists and nothing about what is in
it.

**Boundary.** The link variant keeps its underline everywhere it sits in
running text; this is about a column where every cell is a link. And a
tooltip belongs to a control whose meaning is not already on screen — an
unlabelled glyph — never to a second printing of a label the reader can see.

**Instance (2026-08-19, marina).** Ben: "these should not have underlines on
hover. instead they should get a tooltip that says 'Open'" — then, on seeing
it: "actually don't show that tooltip. instead show a tooltip when hovering
actions cells, should say 'Actions'". The underline came off the name cell
and stayed off; the tooltip moved to the ellipsis trigger, which says
"Actions" — the name `actionsColumn` already gives that column for screen
readers — and whose own `aria-label` moved from "Open menu" to match, so the
seen and the spoken agree.

The name cell's `title` attribute went in the first pass and has not come
back, so the exact identifier is no longer reachable from this table. That
is the thread left open: the truncation decree's other clause, a copy
affordance for identifier-like values, is where it belongs.

**Amended (2026-08-19, marina).** Ben: "can you remove the actions tooltip
when hovering actions". The tooltip is gone from the ellipsis and the
`aria-label` stayed. The decree above survives its own instance: a label
belongs once, and the column header already carries "Actions" for anything
reading the table aloud, so the hover was printing a second copy of a name
the reader could not see but the screen reader already had. What the pair of
remarks settles is narrower than either — a nameless glyph needs _a_ name,
not necessarily a visible one, and the sr-only header was already it.

## A row that leads somewhere is a link across its whole width

When every cell in a row describes one thing, the row is the target, not the
cell that happens to hold the title. The reader aims at the row — that is
what the hover fill has been telling them all along — and asking them to
land on eleven characters of name in a 1048px row is the table taking the
affordance back at the last moment.

It has to be an actual link and not a click handler on the `tr`. The
gestures a reader owns around links are the whole point of the change:
cmd-click into a new tab, middle-click, right-click to copy the address, the
status bar naming the destination before the click. A handler has none of
those unless each is written out again by hand, and nothing reading the page
aloud is told the row leads anywhere. The spelling is the anchor already in
the row, stretched over it with an inset overlay.

**Boundary.** One link per row, so the name cell stops being separately
clickable rather than becoming a second copy of the same destination. Any
control that lives in the row — a menu, a toggle, a checkbox — lifts above
the overlay and keeps its own clicks. And the row's cells stop being
selectable text, which is the price: a table whose values are meant to be
copied out wants the handler and its lost affordances, or a copy control.

**Instance (2026-08-19, marina).** Ben: "can you make it so the entire row
is clickable / linked. like clicking any cell in the row (apart from
actions) takes you to it". The name cell's anchor gained `after:inset-0`,
the row became its containing block, and the actions cell lifted above it.

## An affordance at an edge is a thing you can see before you use it

A surface that scrolls sideways should say so with something drawn, and the
thing drawn is what you aim at. An invisible zone that arms on approach is
triggered by every pointer travelling _past_ the table to something beyond
it, and a reader who sets it off by accident has nothing to look at to
learn what they hit.

The arrow is the same disc the transcript uses to reach its live edge,
because it is the same offer — there is more of this in that direction —
turned onto its side. Resting on it does what resting near the edge used to
do.

**Boundary.** The speed control does not survive the move and has to be
rebuilt on another axis. A zone reads pace off _where_ the pointer sits,
which an arrow cannot do because it is one small target with no inside to
aim at; dwell replaces it, so a glance moves a column and staying moves the
table. And the arrow is a real button, so the click has to mean something
for the readers a hover never reaches.

**Instance (2026-08-19, marina).** Ben: "instead of having it auto scroll
when the cursor hovers the edges, can we make it so an arrow appears (same
as down arrow in the message scroller, but with the correct orientation, and
if you hover that then it does the auto scrolling)". The 64px edge zone came
out; two discs went in, shown only while there is somewhere to go in their
direction.

## A surface on the canvas is white, and that is how it is found

The canvas is a quiet grey and everything that reads as a thing sitting on
it says so by being lighter than it. A table is such a thing: it has a
frame, a radius, and an inside, and the inside has to be a different value
from the page or the frame is drawing a boundary between a surface and
nothing.

A hairline is not enough by itself. At 0.5px it is a line the eye finds
_after_ it has decided where the table is, and what tells it that first is
the change in value across the edge. The border says where the surface ends;
the fill is what says there is a surface at all.

**Boundary.** This is what `--canvas` was declared for and it does not
license graying `--background` — that token stays white, because graying it
grays every control. The surface wears the white explicitly. Nor does it
make the table a card: no elevation, no ambient shadow, the hairline still
does the bounding. And it is a rule about surfaces with an edge, not a
licence to paint every block on the page.

**Instance (2026-08-19, marina).** Ben: "the data table is supposed to have
a white background so that it can be seen against the grey background". The
table's container took `bg-background`, which it had simply never worn — the
canvas had been running straight under the rows since the frame arrived.

## Icons are drawn by one hand, and a licence was what decided otherwise

A set that draws its own glyphs reads as one thing; two sets on one screen
read as an interface assembled from parts. The split this replaces was never
an aesthetic call. Central Icons is licensed per seat, so it was spent
sparingly — menus, drawn against its specimen, kept it, and everything else
fell back to Phosphor. That is TYPE.md's rule for licensed faces applied to
icons: the unlicensed state is visible, deliberately, so nobody mistakes a
fallback for the design. Worth being exact about what was holding it, because
the packages carry a `CENTRAL_LICENSE_KEY` preinstall and it is tempting to
say that was the gate: it never ran here, and the glyphs ship drawn either
way. What restrained the set was the licence being unbought, not any check.
Once it is bought the fallback has nothing left to say, and the pinned library
is simply Central at the 2px stroke, everywhere.

**Boundary.** This governs glyphs that stand beside labels, not every mark on
the page. A vendor's own logo is not iconography and no icon set can supply
it. A control's drawn parts — the tick a checkbox runs a dash along, the
caret a breadcrumb turns over — are geometry the component owns, sized to
itself rather than to a 24-unit grid, and they stay hand-drawn. Byttebier's
rule is untouched: a glyph still has to be universal to earn its place, and
changing library is not a licence to add icons that were not there.

**Instance (2026-08-19, marina).** Ben: "all icons in the marina UI should be
using centralicons now that we have the license key in place". Eight files'
Phosphor imports became Central at stroke-2 — `IconArrowRight`,
`IconMagnifyingGlass`, `IconCrossSmall`, `IconArrowRotateClockwise`,
`IconChevronLeft`/`Right`, `IconDotGrid1x3HorizontalTight` — and
`@phosphor-icons/react` left the manifest. One did not become a Central glyph
at all: the combobox's chosen-row mark is `Tick`, the same drawing the
checkbox runs its dash along, because a chosen row and a checked box are one
mark and the set already owned it. A library swap is not the moment to answer
a question the set had already answered.

The stroke-1 package left too. Its only glyph here was the ellipsis, and those
dots are filled rather than stroked, so the stroke-1 and stroke-2 drawings are
the same three r=2 circles on the same centres. A second weight was buying a
dependency and not one pixel.

## A wide row is carried by a band, not only bounded by a rule

A rule between two rows says where one ends, which is a statement about the
boundary. Following one row across nine columns is a different service, and a
fill is what performs it: the eye holds a tone where it loses a line. A table
wide enough that tracking is the hard part bands its alternate rows, and the
band is a ground the reader rides rather than an edge they count.

The band joins the rules rather than replacing them. Banding conventionally
substitutes for row rules, and the substitution is only free where there is
contrast to spend. Here there is not: a rule is `--border` at 0.5px, twenty
values of 255 from the surface, and the widest band the table can afford is
three. Trading a twenty-value separator for a three-value one in the name of
telling rows apart is the wrong direction, so the band is an accent on a grid
that already works.

**Boundary.** The band is the row's _resting_ value and must weigh nothing —
wrapped in `:where()`, so hover, an open menu and selection all paint over it
without having to name it. It is positional rather than bound to the record,
so sorting re-bands and a row changes shade under the reader; that is what
banding is, and the alternative is not banding. Its ceiling is the surface
beneath it: the table is white so it can be found against the canvas, so a
band at or below the canvas value puts the page back inside the surface and
spends the white the table was just given. The band lives in the values
between the two, as strong as it can be without arguing with the decree above
it.

**Instance (2026-08-19, marina).** Ben: "can you make it so every other row in
the data table is subtly shaded (to help with row differentiation)". Even rows
took `bg-muted/20` — rgb(253) against the surface's 255 and the canvas's 252 —
placed before the hover rule and scoped through `:where()` after a first
attempt measured a hovered banded row stuck at 253, the pointer beaten by the
band on a specificity tie.

## A status light owns its colours

Green and red mean different things in different places, and one token serving
two of them is a tuning conflict waiting to be found. A diff's green is a wash
_under_ code — a whole line at a tenth alpha, tuned to stay legible with text
on top of it. A status light is a 7px disc with nothing on it and nothing
beside it but a word, and it has to carry its meaning at that size unaided.
They are not one green used twice; they are two greens that happen to agree on
a hue. Sharing the token means neither can be tuned without moving the other.

So the indicator declares its own pair, and takes them from Apple's system
palette rather than inventing them: the set has no opinion about what green a
status light is, and a published platform palette is a better answer than a
number chosen to look right on one screen.

**Boundary.** This unhooks the indicator, not the semantics. `--destructive`
keeps every validation state and `--success` keeps the diff, and both keep
their place in the accent-lightness argument recorded further up. The neutral
dot is not part of this — it is a grey from the text ladder and was never
borrowing from the diff. And quoting a palette means quoting it: the values
stay in their published notation instead of being converted into the set's
display-p3, because a converted quote is an approximation wearing a citation.

**Instance (2026-08-19, marina).** Ben, on the jobs table's status column:
"these indicator colors should be using apple colors instead of the diff
colors. they should be independent of the diff colors". `--indicator-success`
and `--indicator-destructive` were declared at Apple's systemGreen `#34c759`
and systemRed `#ff3b30`, and `BadgeIndicator` moved onto them. The collision
was already half-recorded from the diff's side — the accent-lightness note
names "a diff's +8 beside its −18, and a status badge's green dot beside a red
one" as one problem, and it was two.

## A mark binds to its label when the gap is narrower than the mark

A dot beside a word is meant to read as one object — the word, coloured. What
decides whether it does is the space between them measured against the mark
itself. Wider, and the gap is the largest thing in the pair, so the eye reads
two items that happen to be adjacent; narrower, and the mark is the largest
thing, so it reads as belonging to what follows it.

This is a ratio rather than a number, which is why it is worth writing down: it
sizes the gap for any mark-and-label pair the set grows later, at whatever size
that mark is drawn.

**Boundary.** Narrower than the mark, not as narrow as possible. A filled disc
has no counter and no sidebearing, so it crowds a word faster than a glyph in
the same box would — a checkmark or a chevron can sit closer at the same width
because most of its box is air. And this governs a mark that *qualifies* a
label; an icon that is its own control, with its own hit area, is spaced by
that instead.

**Instance (2026-08-19, marina).** Ben, on the jobs table's status column:
"for the status badge move it closer to the indicator". The gap was 9px against
a 7px disc — the design's stated value, and the widest thing in the pair. It
became 6px, which is under the mark's own width and takes 3px out of the badge.
A departure from a stated design value, and the second in this file: the value
was drawn for a pairing the ratio says was already loose.
## A cell that reports a failure is tinted, rules included

A column of counts is read by hunting it for anything that is not zero, and a
coloured numeral only makes that hunt slightly cheaper — it is still the reader
doing the finding. A tinted cell is found without being read. So a cell whose
value *is* the failure takes a wash: the errors count above zero, the named
exception, the thing you opened the table to look for.

The rules that cross it take the tint with it, and that is the half worth
stating. A cell keeps its 0.5px hairlines under the wash, and a neutral grey
crossing a red field does not read as a rule on a tinted cell — it reads as the
tint having been dirtied. Failures also arrive in runs, three bad rows
together being the common case rather than the exception, so the greys slice
one red block into stripes. The rules stay, because rows still have to line up
across the table, and they take the tint instead of being dropped.

**Boundary.** The wash is the diff's `--destructive`, because both
are the same statement: this went wrong, read under text. It is deliberately
not the status light's red — a 7px disc and a full-cell wash want opposite
things from a colour, and those two are declared apart. Opaque in every state,
which is the correction rather than the first instinct: a wash laid over
whatever the row happens to be is a colour that changes with the row, and both
ways that showed were faults. The row's neutral hover came through and moved
the cell 5, 5, 5 — the same on every channel, redness 22 before and 22 after —
which is darker and no redder, and that is what mud is. The zebra band came
through too, so a run of failures alternated and the red field came out
striped. Banding says where you are in the list; a failure is a property of the
datum, and a state modulated by position is one you cannot trust the colour of.
So the cell owns two values, one for the state and one for the pointer, and
answers with those instead of with what is underneath. And it marks a failure,
not a neighbour of one: retries are the system having coped, and colouring them
would report work that succeeded as work that failed.

**Instance (2026-08-19, marina).** Ben: "can you make it so cells with errors
are tinted red" — then, on seeing it: "the borders around the tints look bad.
you need to tint those too to avoid mudiness". The jobs table's errors column,
the evaluation breakdown's, and the trials table's exception column all took
`cell-danger`, keyed off a `data-danger` attribute the cell's own content sets
— `actionsColumn`'s `has-aria-expanded` trick, and the second use of it is what
makes it the table's idiom rather than one column's workaround.

## A control that opens a list wears the same face, whichever way it holds its value

The select, the dropdown trigger and the combobox are one object with three
ways of holding a value: a select shows the row you picked, a dropdown shows a
label for what it opens, a combobox holds what you typed and what you chose.
None of that is a reason to draw them differently. A reader stacking them in
one aside should see one kit, and a set that draws them apart is claiming they
are different kinds of control.

The face is the control surface — the button radius, `bg-background`, and
`shadow-control` for the edge — and not the bordered square box, which is what
this set draws for a field you type into and nothing else.

**Boundary.** The surface is shared; the focus is not. A ring is a box-shadow,
so it stacks with `shadow-control` and reprints the edge the control already
has, where an outline is a separate box and leaves the surface alone. A control
you type into takes the field's 1px `outline-ring/40`, because focus there is
the field's own event and the surface underneath it should not change. What a
control shows *inside* the face stays its own too: the placeholder colour, the
caret, the invalid state, and whether there is a caret at all.

**Instance (2026-08-19, marina).** Ben, on the jobs filters aside: "these
should be styled the same as the dorpodnw/select triggers??" — then, on seeing
it: "the focus ring needs to match that of hte input". `ComboboxChips` was the
one variant left on the old input face, five properties out from the select
beside it: 0px radius against 7, a 1px border against a 0.5px shadow edge,
transparent against white, 12px text against 13, and no shadow at all. It takes
the surface now and the field's outline on focus, which measured identical to
InputGroup's afterwards. `ComboboxTrigger` had already been moved; the chips
variant was missed, which is the shape drift takes when a rule is applied to
one composition at a time.

## A label names its control, and clicking it does what clicking the control does

A label beside a control is part of that control, not a caption above it. It is
the largest target the control has, and a reader who hits it expects the same
thing hitting the control gives them: a text field takes focus, a select opens,
a checkbox toggles. A label that names nothing is decoration — it costs the
pointer the easiest target on the form and it costs a screen reader the name
entirely.

This is a property of composing a Field at all rather than something each call
site remembers. The Field mints one id, the label points at it, and whichever
control claims it is the one named.

**Boundary.** `htmlFor` alone does not buy the behaviour, and assuming it does
is how this looks finished while half of it is dead. The platform forwards a
*bare click* and nothing before it: measured, an input reached through a label
receives `focus` then `click`, where the same input clicked directly receives
`pointerdown`, `mousedown`, then `click`. A button does not care, since its
activation hangs off the click — which is why a select opened from its label
and always would have. Anything that opens on pointerdown hears nothing, so the
label has to finish the gesture, and only for an input: a button already
answered the click, and a second press would shut what the first one opened.

The id lands on the *focusable* element, which is often not the element the
label sits beside: a chips box is a container holding its input, an input group
is a div. So a control claims the id rather than taking it as a wrapper prop,
and an explicit `htmlFor` still wins for a Field whose subject the context does
not reach. And note what a forwarded click means for a control that acts rather
than opens: on a copy button the label copies. That is the same bargain a
checkbox's label makes, safe only where the act reports itself and repeats.

**Instance (2026-08-19, marina).** Ben: "clicking on the labels of these should
focus them, right? same as everything else?" — and everything else was also
broken. All five FieldLabels rendered a real `<label>` with no `for`, wrapping
nothing, so every one of them focused the body; there was not one `htmlFor` in
the repository. The ids already existed, minted by Base UI on the controls, with
nothing pointing at them. `Field` now provides one through context and Select,
Combobox, InputGroup and InputCopy claim it.

## A value never stretches the control that holds it

The table already had this rule and only the table was keeping it: a cell
truncates rather than widening the table around it. It is a rule about controls,
not about tables. A chip in a field, a row in a popup, a badge in a toolbar —
each holds a value it did not choose the length of, and each has a width that
belongs to the composition rather than to the data.

A control that sizes to its content hands that decision to whatever the API
returned. It reads as fine on the values someone happened to test with and
breaks on the first long one, which is not a rare case but the ordinary one:
identifiers are long, and they are exactly what a filter is full of.

**Boundary.** Truncating costs the reader the tail of the value, so it is only
honest where they have another way to the whole thing. In a filter that way is
the control itself — a combobox is typed into rather than read down, so the
list is reached by narrowing it rather than by scanning. Where there is no such
route and the value must be read whole, the answer is a copy affordance, not a
wider box. And the part of a control that lets a reader *undo* is never what
gets cut: a chip's remove button stays at full size while its label shortens.

**Instance (2026-08-19, marina).** Ben, on the Dataset filter holding three
selections: "this looks very broken". The chips were `w-fit` with
`whitespace-nowrap` and nothing bounding them, so in a 191px aside they
measured 470, 424 and 379px and hung up to 283px past the field, over the page
beside it. The popup had the same fault in the other axis: its rows wrapped to
48px in a list of 28px ones. `max-w-full` with `min-w-0` on the chip — the
second because a flex item will not shrink below its content without it — and
the label truncating inside rather than the chip, so the remove button is never
the thing that goes.


## An object the set already draws keeps its face wherever it appears

A set earns its coherence by drawing each object once. When something the set
has already named turns up inside another control, it is still that object, and
redrawing it for the new setting is how one object becomes two — not by a
decision anyone made, but because the second site was built without looking at
the first.

The test is whether the set has _named_ the thing, and the token layer is where
to look. This one is named: `--chip-edge` and `--chip-highlight` are declared as
"the two edges of a raised chip, shared", and the note under them says plainly
that what is being named is the chip rather than the tab that needed it first.
A raised pill on a quiet grey fill, hairline edge, lit above and below — that is
a chip, and both the badge and the selected tab wear it.

**Boundary.** The face travels; the mechanics stay local. A chip inside a field
still answers to that field for how it is focused, removed, and truncated — this
says what it looks like, not how it behaves, and a shared face is not a shared
component. Nor does it run the other way: a control does not adopt a face
because something inside it has one.

It also narrows the boundary the same-face decree drew above, which reserved
whatever a control shows _inside_ its face as its own. That was written about
the placeholder colour, the caret, the invalid state — properties with no
counterpart anywhere else in the set, where "its own" is the only available
answer. It was never a licence to redraw an object the set had already drawn,
and read that way it licenses exactly the drift it was written to stop.

**Instance (2026-08-19, marina).** Ben, on the Dataset filter's selected values:
"these should be styled to fit the rest of the styling". `ComboboxChip` was the
only thing in the set called a chip that was not one by the token layer's own
definition — square where the set's chip is a pill, `bg-muted` (0.970) where it
is `--badge-surface` (p3 0.979), and no edge at all where it has a hairline and
two lit insets. Seven properties out from `Badge`'s `secondary` in total, the
others being 21px against 23, 6px of padding against 9, `font-medium` against
the `font-normal` the set sets a badge at, and `--foreground` against
`--label-foreground`. It renders as that Badge now and keeps its own truncation
and remove button. The shape is the one the entry above records at the level of
the container: the chips field was moved onto the select's face and the chip
inside it was left where it was, which is drift arriving one composition at a
time.

## A nested corner is the outer one, minus the padding

A rounded object inside a rounded object is not a second choice of
radius: it is the same arc, stepped inward. The inner corner is the
outer radius minus the padding between them, so the two curves share a
centre and read as one shape with a thickness rather than as two
shapes arguing about roundness.

**Boundary.** This is for an object _inside_ another, where the padding
is even and both corners are visible together. A standalone chip — the
selected tab, a badge on the page — keeps the radius it was drawn at;
nesting is what derives a new one, and it does not travel back out.
Changing the outer to fit the inner is the other direction and the
wrong one: the field already wears the select's face, and that face is
not up for grabs so a chip can keep a number it was never using in
this composition. Nor is it a licence to restyle Badge: the badge's
other call sites are not nested in this field.

**Instance (2026-08-19, marina).** Ben, on a close-up of the Agent
filter's `cursor-cli` chip inside the white combobox field: "Padding
between chip and field border is even. It looks nested-wrong, not just
'not a pill'. Field outer radius is smoother; chip is tighter / a
different arc." The nested rule: inner radius ≈ outer radius −
padding. The field is `rounded-button` (7px) with 4px of padding
(`px-1` / `py-1`) once it holds a chip. The chip had been given that
same 7px so it would match TabsIndicator; two 7px arcs 4px apart do
not share a centre. The nested remainder is 3px. `ComboboxChip` takes
`rounded-[3px]`. Badge is not restyled.

## A chip inside a white field wears a solid fill

A raised chip on the page is `--badge-surface` with two white inset
highlights, and that is the face. The same fill on a white field is
glass — a light-gray wash you can see the field through. `--muted` is
the solid grey the set already names, and a selected value sitting
inside the field wears that instead.

**Boundary.** ComboboxChip only. The badge's other call sites sit on
the canvas or on a quiet band, where `--badge-surface` is a raised
chip and not a window. Nesting is what derives the solid fill, and it
does not travel back out.

**Instance (2026-08-19, marina).** Ben: "remove glass/frosted fill
from ComboboxChip (solid opaque)". The chip rendered as Badge
`secondary`, so it wore `--badge-surface` (p3 0.979) and the two
highlights. On the field's white that read as glass. It takes
`bg-muted` (oklch 0.970). Badge is not restyled.

## A hover names its target with a sharp, opaque fill

A control's hover is the thing that says "this is what you will hit".
It has a defined edge — the same corner the control already wears —
and a solid fill. A translucent wash, a blurred circle, or a
backdrop-filter that softens the boundary is the hover refusing to
name its target: the reader sees a smudge and cannot tell where the
control ends.

**Boundary.** This is the hover of a discrete control — a remove
mark, an icon button, a chip's x — not the travelling highlight of a
menu, which is a different object, and not a backdrop behind a panel.
It does not restyle Badge: a badge that is not a control has no hover
of its own, and the badge's other call sites are not this mark. Nor
does it license a new colour; the fill is the surface the control
already sits on, darkened toward --foreground.

**Instance (2026-08-19, marina).** Ben, on hovering the remove x of a
selected combobox chip: "soft, blurry circular highlight — fuzzy
edges, like a smudge, not a crisp hit target". The mark was a ghost
button: `hover:bg-muted` on `rounded-button` (7px on a 20px box, a
circle) at `opacity-50`. After the chip took `bg-muted` itself, that
hover fill was the chip's own colour, and the opacity made the
same-colour circle a wash. `ComboboxChip` keeps the ghost button for
its reach. The hover classes ride that Button so `cn` replaces
`hover:bg-muted` and `rounded-button` — ChipRemove concatenates after
the variant has resolved, so the same classes on ChipRemove cannot
win. The hover is a 3px square — the chip's own corner — darkened 8%
from `--muted`. `opacity-50` is gone. Badge is not restyled.

## A mark on a chip shares the chip's face

A remove mark lives on the chip; the chip is already the object. Hover
is ink — the x darkens — not a second face. Toast close and the
selected tab, the set's other remove mark and its other chip, already
hover this way. A fill, even one that takes the chip's own 3px and its
trailing edge, is still a block that appears where the default x has
none.

**Boundary.** ComboboxChip only. Badge is not restyled. Discrete
controls that _are_ the object still take the sharp fill the entry
above names. The reach stays on the ghost button; only the hover is
ink.

**Instance (2026-08-19, marina).** Ben: "ComboboxChip close/x hover
still looks weird. Close-up of a dropdown list of chips (ct-… and
-re…, truncated). Hovered x is a solid light-gray square with small
rounded corners sitting on the chip. Default x has no square. The
hover block looks disconnected from the chip (a distinct square vs
the chip's own rounding)." Then: "Make the hover feel like it belongs
on the chip — likely inset to the chip radius, or a quieter color-only
hover (icon darkens), NOT a floating square." The 3px square from
50b0997 / 3848e76 was that floating square: a 20px box with its own
3px corners, inset from a 23px chip that already wears 3px. The mark
then stretched to the chip's height and trailing edge (1a5e363) so the
fill would be the chip's own corner. That was still a solid light-gray
block. Hover is now color-only: `hover:bg-transparent` /
`hover:text-foreground`. The label keeps 8px (`pr-2`) before the mark
so the hit does not start on the last letter — `pr-1` left reach-6
flush with a short value. Badge is not restyled. (That padding is
superseded by the entry below, which found the hit, not the padding,
to be the thing that wanted fixing.)

## A cell shows the name, not the identifier

What a machine generated for its own sake is not what a reader came to read.
Job names arrive as slugs with a timestamp welded on — the hyphens are there
so the string survives a filename, the stamp so it survives a collision —
and neither fact is the reader's. The cell shows the name a person would say
out loud: separators become spaces, the stamp comes off, and the first
letter is raised. The column beside it already carries the date, so keeping
it in the title is the same fact printed twice in one row.

**Boundary.** Beautified for reading, never for identity: the exact string
stays in the `title` attribute, which the truncation decree already puts
there, so the value that matches Harbor is one hover away and nothing is
lost. The transformation is also conservative by construction — it strips a
stamp only at the end of the name, and leaves a hyphen sitting between two
digits alone, because `grok-4-6` is a version and spacing it would be an
edit rather than a formatting.

**Marina only.** This one does not graduate. It is a rule about the shape of
one deployment's job names, not about how the set renders a table; the set
has no opinion on what a consumer's identifiers look like.

**Instance (2026-08-19, marina).** Ben: "for marina specifically, it should
be possible to simplify these titles by removing the dates from them (since
those are already included in the row), unkebabing them, and beautifying
them etc."

## A search field belongs to the surface it searches

Filters and search are not the same kind of control and do not live in the same
place. A filter narrows a set by a facet the page can enumerate — a vocabulary
the reader picks from — and that is configuration, which takes the aside. A
search is a query the reader writes themselves, over the rows in front of them,
and it belongs at the head of the thing it acts on.

Filing search under configuration puts the reader's own words in the column
reserved for the page's, and it separates the query from the result it changes:
the field is on one side of the page and everything it edits is on the other,
so the reader types in one column and looks for the answer in another.

**Boundary.** This is a search over the surface in front of you. A search that
_leaves_ the page — one that goes looking across the product — is navigation and
belongs in the page's chrome, where its results are not the thing underneath it.
And it moves the search alone: the filters stay in the aside, which is what
makes the new position say anything at all. A page that hoists both has only
moved its aside up.

**Instance (2026-08-19, marina).** Ben, on the jobs filters aside: "we should
move this search bar above the table instead of being in the right panel.
docvument this design choice". The field had been the first control in
`JobsFilters`, stacked above Scope and the four comboboxes, 288px wide in the
right-hand column while the table it queried ran the wide track beside it. It
heads the reading column now, above the bookmarked and all-jobs sections both,
since it narrows the two together. The ⌘K hint and the shortcut it names went
with it unchanged.

## An overlay sits only where the surface can hold it

A disc that floats on a surface is the transcript's language for "there
is more of this in that direction". It sits at a named seat — the
window centre, on a sticky rail — and it is drawn only while that seat
falls inside the surface, with room enough that the disc is not the
first or last thing in the frame.

A short table does not contain that seat. Forcing the disc onto it
anyway clamps it to the nearest edge, which is a date cell, and an
overlay that covers the only row is no longer an overlay: it is the
content.

**Boundary.** This is the overlay disc, not the scrollbar. The bar
still appears on hover for a table that overflows sideways and is too
short to host the disc; dragging it does not cost a row on a one-row
table. And it is not a licence to invent a gutter: the set already has
a place to put a disc that has nowhere to sit, which is away.

**Instance (2026-08-19, marina).** Ben: "marina jobs table floating
left/right arrow buttons look poorly positioned when there are few
rows, including only 1 row. White circular chevrons over the table
body; bottom-right overlaps the last date cell (e.g. Jun 2…).
Pagination under the table is separate and fine."
`canHostEdgeScrollOverlay` now has to answer true before either arrow
is active. A one-row table never passes; a tall table scrolled so
only its last rows remain fails the same way, and the discs put
themselves away rather than piling onto the date cell.

## A reach is clipped where it would take a neighbour's space

A reach is never trimmed to fit its control — but the space it takes
has to be free. It is trimmed per side, on any side facing something
another element owns. `Button` already does this against a
neighbouring button, and for the same reason a mark does it against a
word: "a click 2px from Cancel would land on the destructive action
beside it." Text is a neighbour too. Padding is the wrong instrument:
pushing the drawn mark away to keep an invisible box off a word moves
the only thing the reader can see in order to fix the one thing they
cannot.

**Boundary.** Per side, and only against what something else owns. A
reach still claims a container's own padding and the gap between
turns — the copy mark on `TranscriptTurn` is the case, and
`reach-row` claims its panel's inset while stopping at the rows
either side of it. Turning a reach off entirely is a different call
that belongs where the packing is decided (`InputGroupButton`,
`PaginationLink`). `CONTEXT.md`'s **Reach** entry carries the rule.

**Instance (2026-08-20, marina).** Ben, on a single `codex` chip:
"xmark seems slightly too far from the label," then, on a 3px
correction: "no no no. you need to make it even closer." Five
readings of too-far across five commits, because the padding was
never what was wrong. The defect was in `-ml-0.5` (pre-`6a2af5b`)
and it was never the 9.5px gap that state drew — it was the 4px of
reach lying on the word. A click on a chip's label bubbles to
`ComboboxChips` → `handleInputPress` and _opens the list_; the
remove's `::after` has no `z-index` and nothing between it and the
span makes a stacking context, so it paints over the text and takes
the pointer. The last glyphs of a readable word become an unlabelled
destructive control, and the field's primary affordance is what they
displace. Silent, and with no hover over the letters to warn anyone.
Four commits then paid for that overlap in padding — 4 → 8 → 6 → 5px
— each pushing the mark further off to keep the rectangle clear, and
each reading as too far, because the visible thing was being moved to
fix an invisible one.

`after:-left-0.5` clips the reach to the gap: it stops at the span's
edge, claims the 2px between, and none of the word. Target 28×32.
The spacing is then free to be set by eye — `gap-0.5` for Badge's
`gap-1`, which spaces a _leading_ icon the label reads with, where a
trailing remove is the label's own mark. Counting ink, not boxes:
`IconCrossSmall` draws `M8 8L16 16` stroke-2 in a 24 viewBox, so the
12px glyph is a 5px cross with 3.5px of margin a side, and the 20px
box adds 4px of slack. The gap went 16.5 → 9.5px, against 11.5px to
the chip's end and a 9px left inset — nearer its own word than the
wall, which is the relationship: with three chips in a row the mark
has to read as belonging to one of them. Air measured in boxes is
not the air an eye reads.

## An icon is drawn at the size of the word beside it

An icon that labels a word is set to that word's size — a 12px glyph
beside 12px type, 13px beside 13px. The box is the instrument, and
most of the set already works this way.

Ink is the arbiter when the box is wrong. Icons do not all fill their
boxes equally: at the same 12px, a dense glyph lays down 9px of ink
and a sparse one 8, against capitals standing 8.5. So the size is
matched by box and then checked by eye, and where a glyph reads small
at its label's size it steps up one. That is a correction to a
particular glyph, not a second rule.

The button's own height is never the measure. A taller button does not
buy a bigger glyph: it buys air around the same pair.

**Boundary.** The step is one, and it is earned by looking. Two steps
is not a correction, it is the absence of a decision — every 16px
glyph in this set beside 12px type is stock inherited from shadcn and
overridden by nobody, which is a different thing from a size someone
chose. An icon with no word beside it is out of scope: it is measured
against whatever it does sit in.

**Instance (2026-08-20, marina).** Ben, on the Refresh button in the
jobs aside: "the icon is too big inside of the button." Measured: the
icon drew 12px of ink beside capitals standing 8.52px — a ratio of
1.41. `Button` set `size-4` on its base and `text-xs` on its base too,
so every labelled size carried the same 12px word and four different
icons: 16px on `default` and `lg`, 14px on `sm`, 12px on `xs`. Only
`xs` was right. The other three take `size-3`, where the ink is 9px
against the cap's 8.52 — a ratio of 1.06. The icon-only sizes keep
`size-4`; they have no word.

The step-up clause is not hypothetical: `TranscriptTurn`'s copy mark
already took it, and its comment is the reasoning written down before
the rule was — "12px of type is a cap height around 8.6, so a mark
measured against the em box comes out … smaller than them on the
screen. 14 is the first step up the scale and it reads level with the
time." That mark sits beside the time, so it is governed here, and it
stays at 14. Both hold: the box sets it, the eye corrects it, and the
correction is one step.

This is the second crit in a day that came down to boxes standing in
for ink; the chip's x was the first, where a 12px box drew a 5px
cross. `CONTEXT.md` now carries **Ink** as a term so the distinction
can be cited rather than re-derived.

## A filter changes what the page says, not where it is

A control that changes a set is aimed at, and read from, while it
works. So the promise is anchored to the reader and not to the
geometry: the thing under the pointer does not move, and the line
being read does not move. Everything else may resize.

Hold before reserve. The first instrument is to keep the old contents
mounted until the new ones are ready, because that costs no space and
has no empty frame in the middle; `keepPreviousData` on the jobs table
is the page's best-behaved region for exactly this reason. Reserve
space only where absence would leave a hole the hold cannot cover — a
region that can be genuinely empty, a mark that mounts on hover. The
set already owns that idiom too: the sort caret sits at `opacity-0`
rather than unmounting, "so the heading does not change width when it
gains one."

One action, one settle. A change that lands in two steps — a table
that empties and refills, a page index corrected after the response
arrives — is two shifts charged for one intent, and reads as the page
arguing with itself.

**Boundary.** Not "nothing resizes." A third chip has to make its
field taller, and a set of three rows is not owed the height of fifty.
What is forbidden is movement the reader did not ask for: under the
pointer, under the eye, or arriving late. Growth below the fold of
what they are looking at is free. This governs any control that
changes what a set contains — sort, page, search, refetch — and not
filters alone; the filter is only where it was noticed.

**Instance (2026-08-20, marina).** Ben: "one thing that i've noticed is
there is a lot of layout shift when updating the filters. ideally this
would never happen, and i want to encode this in the design advice."
`/jobs` was measured in the browser, twelve of twenty-one interactions
moving something. The page is not restless — idle for forty seconds
with the refetch running produces exactly zero, and opening a
combobox produces exactly zero — so every number below is bought by an
action, which is what makes them this entry's business:

- The pager translates up to **1891px** on any change to the row
  count. It sits in flow under a table whose height is rows × 37.5px,
  so it takes the whole swing, twelve times in twenty-one steps.
- Filtering while scrolled shrinks the document under the scroll
  position and the browser clamps it: measured from y=1200, **every
  landmark on the page moved 1200px**. This is the worst movement on
  the page and it is invisible to CLS, which scores it 0.0008.
- No column has a width, so every boundary re-solves against the new
  rows. Filtering 50 → 9 moved `Started` **152px** sideways and took
  119px off the `Job` column.
- The chips field grows **23px** for the first chip and **27px** for
  each after, taking every field below it and the Refresh button with
  it. Chips never share a line at this width — it is one per row from
  the first, so there is no wrap threshold, just a staircase.
- The field also swaps its own padding on the first chip — `px-2.5`
  to `has-data-[slot=combobox-chip]:px-1` — so the input jumps **6px
  sideways** inside the control being used.
- A bookmarked row outside the new response unmounts, refetches, and
  returns a round-trip later: the same action, settling twice.

Two notes on measuring it. CLS understates this page by about an
order of magnitude — eight of the twelve score 0.000 because
`hadRecentInput` suppresses anything within 500ms of a click, which is
every deliberate filter change. Judge it on geometry. And this
machine has overlay scrollbars, so `clientWidth` never moved; at a
viewport narrow enough for a classic 15px bar, the same twelve
interactions each slide the whole centred page **7.5px sideways** as
well, because the gutter is split.

## Two tables of the same thing agree on where it is

One column set rendered twice is still one promise: the reader is told
these are the same nine facts about the same kind of row. An auto
table breaks that promise quietly, because it measures its columns
against the rows it was handed, and two tables handed different rows
are two different measurements. The columns then sit at different
widths, the two runs of headings do not line up, and whichever table
is wider pushes its last column off the edge — so the pair disagrees
about what a row even contains.

A shared column set therefore carries shared widths, and they belong
on the column rather than on either table. A width written at a call
site is a width the other call site can forget.

**Boundary.** A floor, not a fixed width. Auto layout is doing real
work elsewhere — `w-px` on an actions column is the shrink-to-fit
idiom and `table-fixed` reads it as one pixel — so the floor has to be
the column's own widest real content, measured, with a step of
headroom. Set it below that and the column merely disagrees less
often, which is worse than disagreeing openly. And this is about two
views of one set; a table that shows different columns is a different
table and owes nothing here.

**Instance (2026-08-20, marina).** Ben, on the jobs page: "bookmarked
job rows should contain same info as the main table. currently they
dont", and again on the next screenshot: "why is there still row data
discrepancies between bookmarked and all jobs?" The column
definitions were byte-identical — one `jobColumns`, one
`JobsScrollTable`, the same nine columns in the same order. The
divergence was entirely in the measuring. Bookmarked held one job
called "Regrade none"; All jobs held fifty with longer names, trial
counts like "16,830 / 16,830" and costs like "$39,530.68". Measured
at 1400px, four columns disagreed — Job by 44px, Trials by 48, Cost
by 23, Status by 9 — and the tables came out 922 and 1045 wide inside
an 894px scrollport. Both overflowed, by different amounts, to
different offsets, which is why `Started` read "Aug 11, 2026, 1:24 PM"
in one and "Aug 15" in the other. Not two date formats: one format,
clipped in one table. `MIN_W` in `job-columns.tsx` now carries a floor
per column and both tables measure 1082.

Two differences this did **not** fix, recorded so they are not
mistaken for it. Bookmarks outside the current page are fetched from
`get_job_overview` rather than the list endpoint, and that payload
carries no `datasets`, so Tasks reads 0 for them where the list would
have shown a count — one column set, two sources, which is the same
failure one level up. And Bookmarked ignores the filters, the search
and the sort entirely.

## Chrome earns its place by holding destinations

Persistent chrome is space taken from every page forever, so it is paid
for once and charged on every route. What pays for it is destinations:
places a reader needs to reach that the content in front of them does
not already lead to. A column that holds a wordmark and a column that
holds one link are the same object at different sizes, and the set has
already decided what that object is worth.

The order is therefore fixed. Destinations first, chrome second. A
shell built before there is anything to put in it is a frame around
one picture, and the pressure afterwards is always to fill it — which
is how a nav ends up holding a logo, a help link and a settings gear
that each exist because the column did.

**Boundary.** This is about _persistent_ chrome, not about getting
around. A reader still has to know where they are and how to go back,
and that is the breadcrumb's job — it is per-page, it costs nothing on
a page that does not need it, and it already roots every detail view
at `/jobs`. Nor does it forbid a shell: the tinted ground with a
rounded content card is a surface treatment, and it is separable from
the question of what sits in the margin.

A second thing it does not license: an icon-only column. The set's
icon rule is Byttebier's — "always beside the label and never instead
of it, skipped entirely when no honest glyph exists" — and top-level
destinations are exactly the case that rule is about. "Jobs" and
"Trials" have no conventional mark the way an inbox or a magnifier
does. A tooltip does not buy the exemption; that was tried on the row
actions and removed, settling that a nameless glyph needs _a_ name
rather than a hover. A column of destinations therefore carries
labels, which makes it ~11rem rather than 3.5rem, which is a different
component from the one most references show.

**Instance (2026-08-20, marina).** Ben, with a screenshot of an
incident tool's 56px icon rail: "if i wanted to implement a sidebar
system in Marina that looks like this, how would i go about doing it?
what's the best way to approach it?"

The reference's rail holds two unrelated things in one column: app
navigation at the top — search, notifications, inbox, people, settings
— and below a divider, ten monitored surfaces, which is a scope
picker rather than navigation. Marina's answer differs per half, and
neither half has contents yet. `/dashboard` is a bare
`redirect("/jobs")`; `/` is a splash whose only content is a logo and
a "Browse jobs" button; `/jobs/[jobId]` and `/trials/[trialId]` are
reached by clicking a row. **One destination.**

And the question was settled a day earlier in the other direction.
`346e501` — "Three decrees: no stacked titles, no navbar, wider page
inset" — deleted `site-navbar.tsx`, a `h-14` header holding
`MarinaBrand` and nothing else, on the grounds that chrome names
content and never the product. A rail is that same object with more
room in it.

Three further collisions, recorded so the next attempt starts from
them rather than rediscovering them. `max-w-[80rem]` is _derived_ —
18rem of aside plus a 96px gutter — so chrome that eats width
invalidates the number rather than merely competing with it. The
0.5px column rule reaches the top of the canvas only because
`PageColumns` puts its air inside the columns rather than on a
wrapper, so a shell may not introduce vertical offset. And the word
**rail** is taken: `scroll-area.tsx` uses it for a full-height overlay
strip, so a navigation column needs a different name before it needs
an implementation.

What was built: nothing. A labelled navigation column was written and
deleted unbuilt, on the same principle `346e501` states in its own
message — "deleted rather than left dead". Two stale comments naming
the removed navbar were corrected.

## The app is a surface on the canvas, inset on the sides it has

A window-filling page has no edges of its own — it ends where the screen
ends, and the reader reads the operating system's rectangle. Inset it and
it becomes a surface: `--canvas` is the quiet grey the set already names
for what sits beneath things wearing `bg-background`, and the app is the
largest such thing there is. The tenth of a step between 0.99 and 1.0 does
not carry that on its own, so the edge does — a 0.5px hairline and a
turned corner.

Inset the sides that have somewhere to go. A corner turned where there is
no gap to turn into reads as a page clipped rather than a surface lifted,
and a hairline down an edge flush with the window is a line with nothing
on the far side of it. So the inset and the radius agree, per side.

**Boundary.** This is a margin, not a scroll container. The shell takes
`overflow-clip` and never `overflow-hidden`: both round the corner, but
hidden also makes the shell a scroll container, and every sticky thing
inside — a rail, the `top-24` asides, the edge-scroll disc that centres
itself on `50dvh` — would then be sticky against a box that never scrolls.
It also keeps `min-h` rather than `h`, so the body keeps the scroll and
the window stays the scrollport those things measure against.

**Instance (2026-08-20, marina).** Ben, on the rail landing flush in the
window's corner: "can you make the entire window have an inset? same as
the original screneshot reference i gave you and the top left corner be
rounded", then "it shouldn't be inset on the right though". `p-2 pr-0` on
the body, and the shell takes `rounded-l-[12px]` with `border-y` and
`border-l` only — three sides inset, three sides edged, the right running
to the window. The 16px of top and bottom is the one number the body and
`min-h-[calc(100dvh-1rem)]` have to agree on.

## A measure with something to align to stops centring

A page centres its measure while the window is all there is: nothing is
pinned to either margin, so the balanced answer is the right one. Give the
page a rail and that stops being true. The rail is an edge that means
something, the reader's eye starts there, and a measure centred in the
remainder drifts further from it on every larger display — the same
layout reading as two compositions depending on the monitor.

So the measure anchors to the fixed edge and lets the slack collect on the
side where nothing is pinned. The cap is unchanged; only the slack moved.

**Boundary.** The trigger is a _fixed_ edge, not any content. Centring
stays correct for a page with nothing anchored — and for a measure inside
a page, which is aligning to its own column rather than to the window.

**Instance (2026-08-20, marina).** Ben: "can you move the page UI closer
to the left sidebar then. like make everything a bit closer to the left."
Measured with the rail mounted, the gap from the rail to the first content
was 48px at a 1300px viewport and **275.5px at 1800px** — all of it
`mx-auto` dividing the remainder of `max-w-[80rem]`. `mx-auto` became
`mr-auto` on `PageColumns`, both detail pages and the splash article.

Anchored flush, the gutter was the page's own 48px and the answer came
back "not quite that far left bro" — which is the useful half of this
entry. Anchoring says where the slack goes; it does not say what the
gutter is, and beside a rail those are two decisions. The gutter takes
`lg:pl-24`, 96px, which is the page's own top inset (`pt-24`): the content
sits the same distance from the column beside it as from the edge above
it, so the number is read off the composition rather than chosen. Measured
at 96px from the rail at both 1300 and 1800px.

## One mark stands for Million, in every project built on the set

A project built on Million UI is not a separate product wearing its own
badge; it is the set with an app on top. So the mark is the set's, not the
app's, and it is the same file everywhere — a per-project logo splits one
identity into as many as there are repos, and the split is invisible until
two of them are on a screen together.

The mark carries no wordmark with it. Which project this is belongs to the
tab title and the URL, which is the standing rule that headings name the
content and never the product; the mark says whose it is and stops there.

**Boundary.** This is identity, not chrome. It does not license a nav bar
to hold it — `346e501` deleted one that did — nor a page heading to repeat
it. The mark earns a place where it is doing a job: a favicon, or a
destination, which is what it is in the app rail, where it is the only
route back to `/`.

**Instance (2026-08-20, marina).** Ben, replacing the icon: "all logos for
million-ui projects should use that logo btw, encode this as a design
decision". `app/icon.svg` — the favicon and, through `mask-image`, the mark
`MarinaLogo` draws.

The file needed two repairs before it could be either. Its `viewBox` was
`-14.914 0 24.857 21.914` while the art ran from `-8.775` to `8.267`
vertically, so over half the mark sat outside the viewport and was held in
only by `style="overflow: visible"` — which an inline SVG honours and a
`mask-image`, an `<img>` or a favicon does not, because there the SVG's own
viewport clips. Tightened to the art's real bounds,
`-13.819 -8.775 22.688 17.042`. One of the five polygons was also a
duplicate of another and was dropped. The fills became `currentColor` and
the light/dark `:root` block was kept from the icon it replaces, so the
favicon still answers the system theme while the mask ignores colour
entirely and reads alpha.

## Filters go beside what they filter, once something else anchors the page

A narrow sticky aside is the right home for configuration while the page
has nothing else on its side — it gives the controls a column, and the
reading surface keeps the wide track beside them. That reasoning holds
right up until the page grows a second fixed column. Then the aside is the
third vertical band in a row of them, the composition reads as chrome,
chrome, content, chrome, and the surface everything exists to show is the
narrowest thing on screen.

At that point the filters go into a bar over the table they narrow, and
the track takes the width back. A filter is about the rows beneath it, so
above them is not a demotion — it is the shorter distance between the
control and its effect.

The names move into the controls. A label can sit over its field for free
in a column; in a row it doubles the bar's height to say what the empty
field could say itself, so each combobox's placeholder is its facet. The
exception is the one control that shows a value rather than a prompt: a
select reads "All", which says nothing about what it is all of, so its
name stays in `aria-label` and the row around it carries the rest.

**Boundary.** The trigger is another fixed column, not a wide viewport.
"Configuration takes a narrow sticky aside" still governs every page that
has only the one anchor — both detail views keep theirs, and `PageColumns`
is unchanged. Nor does this license a bar for controls that are _not_
about the rows: an aside earns its column when it holds something with its
own job, and a filter's job is the table.

**Instance (2026-08-20, marina).** Ben, once the rail was in: "remove this
filter section to allow for the table to extend width (so we get more table
width). we can move those filters next to the search bar again. encode this
design decision. it works better now that we have the rail" — the last
clause being the rule. The jobs page drops `PageColumns` for a single
track and `JobsFilters` becomes a row under the search: scope, four
comboboxes, and Refresh pushed to the far end.

The table went from 1085px to 1136px of drawn width, which is the 18rem
column plus the 96px gutter minus what the bar gives back. That also
settled a crit from earlier the same day — the `Started` column had been
clipped by the scrollport, so the same date read "Aug 11, 2026, 1:24 PM"
in the bookmarked table and "Aug 15" in the main one. One formatter, one
string, and not enough width. The per-column floors from that fix stay:
they are what keeps the two tables agreeing, and now nothing clips either.

## Controls and results are two regions, not two sections

A page's vertical rhythm is a set of nested distances, and each one says
how tightly the things it separates belong together. A heading takes the
smallest gap over the table it names, because it belongs to that table.
Sections take a larger one from each other, because they are peers. What a
band of controls needs is a third distance, larger than either — the break
under it is not between two sections but between two regions: everything
above is what the reader set, everything below is what came back.

Read the gap and you can tell which of the three a thing is. Give a
control band the section gap and it reads as the first section; give it
the heading gap and it reads as the results' header.

**Boundary.** The distance is earned by the band, not by the control. One
field over a table genuinely is that table's header and should take the
heading's gap — a search field spanning the surface it searches is the
case. It is a row of controls that governs rather than heads, and the
change is in what it has become, not in where it sits.

**Instance (2026-08-20, marina).** Ben, on the filter bar landing hard
against the first heading: "we should add space above 'Bookmarked' encode
this btw." The block carried `-mb-3`, pulling it to 12px, from when it held
the search alone and the comment beside it said so: "Search heads the
tables, so it takes the 12px a title takes above its table, not the 24px
the sections share." True of one field, false the moment four filters and a
button joined it. `mb-2` against the column's `gap-6` makes it 32, so the
page now reads 32 under the controls, 24 between sections, 12 from a
heading to its table.

## A derived measure dies with what it was derived from

A cap that was computed is only as good as its terms. `max-w-[80rem]` was
never a taste — it was the aside's 18rem, plus the 96px gutter beside it,
plus the track those two left over. Remove the aside and both terms are
gone, and what remains is not a measure any more: it is a number that
happens to still be in the file, holding a surface off width nothing is
using.

So a derived number is re-derived when its composition changes, or it is
dropped. The page has a measure either way — the insets are one, the rail
takes its width off the viewport before anything else — and the surface
takes what is left. "Spend the width before the scroll" was always the
rule for a reading surface; the cap was a statement about the composition
around it, not about the table.

**Boundary.** This does not repeal the measure. Every page that still has
the composition keeps the number derived from it: both detail views have
their aside and keep `max-w-[80rem]`. And it is not a licence for prose to
run to the edge — a line of text has a measure of its own, in the reading,
which is why the splash article kept `max-w-xl` for as long as it existed.
This is about a surface whose width is spent on columns.

**Instance (2026-08-20, marina).** Ben, on a wide window with the filters
already moved out of the aside: "you need to extend the width of the table.
too much space on the right, see? encode this feebdack". The jobs page
drops `max-w-[80rem]`, keeping `px-6 md:px-12 lg:pl-24`. Measured at a
2000px viewport the table went from 1136 to 1789px drawn, with the page's
own 48px inset on the right and no horizontal scroll.

Worth naming as the reason it took two goes: the aside was removed one
commit earlier and the cap was left, so the page had already stopped being
the composition its own number described.

## A glyph is chosen for what needs no learning, and judged at its size

Byttebier's rule turns on universality, and aptness is a different
property that is easy to mistake for it. A mark can describe the thing
exactly and still have to be decoded — and a mark the reader decodes is
the invented metaphor the rule exists to stop, however faithful the
description was. What a glyph depicts is an argument; what it reads as
is the result.

So the choice is made by looking, at the size and in the container the
glyph will actually ship in. A mark reads differently at 24px on a
contact sheet than at 16 in a 32px chip, and the small size is where
detail collapses into a shape: a grid becomes a tile, a stack becomes a
smudge. Render the candidates in place and the field usually eliminates
itself.

**Boundary.** This does not repeal aptness — between two glyphs that
both read without effort, the apter one wins, and that is the common
case. Nor does it license a decorative mark: "skipped entirely when no
honest glyph exists" still stands, and a set with no universal answer
wants the label, not the closest picture. And it is a rule about
choosing among candidates, not about whether the surface should carry
an icon at all.

**Instance (2026-08-20, marina).** Ben, on the rail's jobs mark: "can we
come up with a better icon than this". It was `IconTable`, chosen the
same day and defended in its own comment as depicting rather than
standing for — the page is a table of jobs. Apt, and at 16px a 2x2 grid
that reads as a layout tile.

Nineteen candidates were rendered at 16px inside the rail's own 32px
chip before choosing, which settled most of them without discussion:
`BarsThree` is a hamburger menu, `InboxChecked` is mail, `Server` is
infrastructure, `Bolt` draws a stylised **b**, `Clipboard` and `Archive`
are storage. `IconListBullets` won because the page is a list and a list
is a glyph nobody has to learn. `LayersThree` was the runner-up and says
"batches" — true of an evaluation job, and true of ten other things.

**Instance (2026-08-22, thinky-3d).** The gallery's grid-view trigger
shipped `IconGrid` unjudged, and at the 14px it draws at the crossed
lines collapse into a "#". Ben: "probably need a better icon than this,
right?" The candidates were rendered at 14, 20 and 32 on both grounds
before re-choosing: `IconGridBox` reads as a table, `IconBlocks` goes to
mush, `IconApps`' four tiles stay a grid and share the dot language of
`IconListBullets` beside them. The lesson is the rule's own: the miss
happened because the mark was picked from its name, not from looking.

## The highlight is where the pointer is, not on its way there

Pointing at a row is not an event worth drawing. The pointer has already
arrived and the eye is already there, so a chip that eases in behind it
is reporting the move a beat after the person who made it — the
animation is always slower than the hand that triggered it. Inside a
surface that is already open, state feedback lands on the frame it is
asked for: the row under the pointer fills, its glyph takes its colour,
the trigger takes its hover, the caret flips.

The chip stays one travelling element — that is what keeps a destructive
row from lighting in the neutral fill, and what keeps a second
background from painting under the first — it simply arrives at each row
instead of sliding between them.

**Boundary.** This is the *inside* of an open surface, not its arrival.
A panel that was not there and now is has a real event to draw, and
`popup-rise` stays exactly as drawn: 80ms spring in, 60ms ease out, and
ADR 0012's two entrances still mean what they meant. The rule stops at
the panel's edge in the other direction too — the tabs indicator, the
checkbox's drawn tick, the scroll-area's rails, the copy button's swap
are all tuned motion that survives. What goes is the tween on hover and
open state *within a menu*, and nothing beyond it.

**Instance (2026-08-20, marina).** Ben: "can you remove all the hover
transitions on dropdowns/menus etc and port back to million ui. i like
it when the transition is instant, not smart animated".
`menu-highlight` lost the 80ms spring on
`translate,width,height,opacity`, and with it the whole
arrival-vs-travel apparatus — the `instant` flag, its
`requestAnimationFrame`, and the `showing` ref — which existed only to
suppress the travel on the frame the chip appeared. `menu-row` lost the
80ms colour fade on a row's glyph, which reaches `dropdown-menu`,
`context-menu` and `menubar` at once. The trigger's `transition-all` and
the caret's 80ms spring rotate went from `dropdown-menu`, `select` and
`combobox`, so a caret now turns on the same frame its panel opens
rather than racing it. `combobox` also lost `transition-colors` on its
field and on the chip's clear, and `actions-column` lost the fade its
cell made to accent while the menu was open.

`navigation-menu`'s positioner was left alone and is the open question:
its 0.35s travel between top-level triggers is the same species as the
chip's, but it moves the panel rather than a state inside one, and no
decree has been made about it.

## A hover step is a distance, not an alpha

What a hover fill is worth is the lightness it moves the surface by, and that
distance is the thing to hold constant across schemes. An alpha is not that
distance — it is a fraction of however far the tinting colour happens to sit
from the surface underneath, and that gap is not the same in light and dark. So
a ladder written in alphas is a ladder that only holds in the scheme it was
tuned in; the other scheme inherits whatever the token spacing happens to give
it, which is an accident rather than a decision.

Measured in this table: `--accent` sits 0.030 in oklch from `--background` in
light and 0.124 in dark, a span 4.1× longer. The same three alphas — 20% for the
band, 50% for the row, and a 75% mix for the cell — therefore land 4.1× louder in
dark on every rung, and a row hover drawn as a whisper on white arrives as a
slab on black.

Dark's steps are twice light's rather than equal to them. A step that measures
the same in oklch reads quieter on a dark ground than on a white one, and at 1×
the cell's subdivision of its row disappears entirely — which is the one
relationship the two-rung ladder exists to draw. 2× was chosen by looking at 1×,
1.5× and 2× side by side.

**Boundary.** This is about fills that report *where the pointer is*, and the
constant is the step rather than the alpha — not a rule that alphas are wrong.
A tint states its own colour and is mixed from `--destructive` or `--success` at
a fixed percentage on purpose, because what it reports is a fact about the cell
rather than a distance from the page; those percentages are the same in both
schemes and should stay that way. Nor does it license per-scheme tuning by feel:
the light values are the decreed ones, dark is derived from them by one stated
factor, and the internal ratios between band, row and cell are identical in both
(1 : 2.5 : 3.75).

**Instance (2026-08-21, marina).** Ben: "make the hover states on the data table
more subtle in dark mode". The three dark alphas became exactly half their light
values — 10% for the band, 25% for the row, and a 37.5% mix for
`--cell-hover-fill` — which lands every rung at 2.07× its light step instead of
4.13×.

## A hovered row brings its ink forward

The row under the pointer moves its text half the way from the secondary step to
the primary one. The fill says where the pointer is; the ink says it
again, on the channel the fill is weakest on.

That second channel is worth spending only where the first one is thin. On a
white ground a row hover darkens the surface under text that is already dark
ink, and the fill carries the whole message on its own. On a dark ground the
same hover is a 0.031 lift on a near-black page, under text sitting at the
secondary step — quiet against quiet. Moving the ink toward `--foreground` is
what makes the row read as picked rather than as slightly less dim.

Half, and not all, because the row is being pointed at rather than selected. Ink
at full strength is what `--foreground` means — a heading, a value being read —
and a row that reached it on hover would promote itself above every row the
reader is not pointing at, which is a claim about content rather than about the
pointer. Half is the stop below that, and it is where the ask lands: a quarter
went in first and read as no change at all.

**Boundary.** The mix is written toward `--foreground` rather than as a lighter
grey, so it is the same gesture in both schemes — _more present_, which reads as
brighter on a dark ground and darker on a white one. Light holds at the resting
values for now because the fill already carries it there, not because the rule
stops at the scheme. It does not reach cells that state a _semantic_ colour — a
tinted danger or success cell, a destructive action — which keep theirs: the
ladder says how present text is, and a semantic colour says what it means.

**Every** piece of ladder text in the row moves, which took a second pass to get
right and is the part worth carrying. Setting a colour on the row reaches only
the cells that inherit it; anything re-declaring a ladder token inside the row
resolves against its own value and sits still. Measured on the jobs table that
was four cells of ten, including the job's name. The rule redefines
`--content-foreground`, `--muted-foreground` and `--label-foreground` on the row
instead, so a column written tomorrow is carried without knowing the rule
exists. ADR 0020.

**Instance (2026-08-21, marina).** Ben: "in dark mode, when you hover a data
row, the text for that row should brightne a little (subtly)".
`--row-hover-foreground` arrives declared in both schemes: `--content-foreground`
in light, and `color-mix(in oklab, var(--content-foreground) 50%, var(--foreground))`
in dark, which resolves to oklch 0.847 against the resting 0.708. It shipped at a
quarter-step first — 0.777 — and Ben: "still a bit subtle?", so it went to half.
Then Ben: "it only seems to work for some cells, not all of them?", which is what
the second paragraph of the boundary above records and ADR 0020 argues out.

## A row of controls hands its open panel along

Once one control in a row is open, the row behaves as one object: reaching
another with the pointer moves the panel there rather than asking for a second
click. It is what a menubar does, and a row of filters is the same offer — the
reader is comparing facets, and making them click twice to look at the next one
charges for the comparison.

The rule is stated in two halves and the second is what makes it safe. A row
hands over only while something in it is already open. A closed row is a row of
independent controls, and hovering one of those does nothing at all — otherwise
a pointer crossing the bar on its way to something beyond it opens a panel
nobody asked for, which is the invisible-zone failure the edge-scroll decree
already refused once.

Everything in the row that opens a panel takes part, whatever primitive it is.
The scope Select sits in the handover beside four Comboboxes, because a reader
sees one row of filters, and leaving one out because its implementation differs
is that implementation showing through the design.

**Boundary.** Only controls that open something. A Refresh button in the same
row is not in the handover: it opens nothing, and crossing it does not close
what is open — it sits at the end of the row, so the pointer reaches it across
every filter, and a bar that snapped shut on the way there would be worse than
one that ignored it. The handover also does not survive the pointer: it is a
mouse affordance, guarded on `pointerType`, because a touch pointer does not
travel — it arrives where it was put, and there is no hover to hand anything on.

A query typed into a panel dies with that panel. Focus follows the handover into
the new panel's search field, so typing continues where the pointer went. That
is the only destructive thing here, and it is correct rather than tolerated: a
query narrows one facet, so carrying it to the next would be meaningless, and
focus left behind would make a panel you can see but cannot type into.

A control in a handover is never modal. A modal popup lays a backdrop over the
page — Base UI clips a hole in it around its own trigger and blocks everywhere
else — and a backdrop is exactly the thing that stops the next control being
reached. This is handed down by the row rather than left to each call site,
because it is not a preference: a modal control in a handover row is a control
the row cannot hand anything to.

**Instance (2026-08-21, marina).** Ben: "make it so when you have a row fo
dropdowns or comboboxes etc like this, if you click one open, then hover the
others they open instead. basically a bit like a menu." Base UI's Menubar could
not be used — its context is `MenuRoot`-typed, so it coordinates Menus, and
`openOnHover` is a Menu.Trigger prop for the same reason. `useHandover` holds
the row's one open id and hands each control its `open`, `modal`,
`onOpenChange` and `onPointerEnter`.

Then Ben: "when swithcing between regular select/dropdown (the furthest left
one) and the comboboxes, it doesn't work?" — the Select is modal by default, so
the row handed over _to_ it and never _from_ it, and `modal` became part of what
a control is handed rather than something four call sites had to remember. ADR
0021.

## A focused control brightens its own edge

Focus is drawn twice: the ring outside the control, and the control's own
hairline brightening under it. The ring says something is focused; the edge says
which object it belongs to. A ring alone floats a little way off the box it is
about, and in a row of six identical controls that gap is the whole question.

Light takes the hairline from 0.922 to 0.806 — against a 1.0 page that is a 0.078
delta becoming 0.194, the same edge about two and a half times as present. Dark
doubles its alpha, 15% to 30%, because that is how `--input` is written there: an
alpha on white rather than a grey, so a control inside a card still takes the
card's fill through its own edge.

**Boundary.** The edge brightens, it does not change colour — this is the
control saying "me", not saying anything new about its state. Invalid still owns
the coloured ring, and a control that is both keeps both, because they are
answers to different questions.

It answers to `aria-expanded` as well as `focus-visible`, and the first is the
one that carries it. Clicking a trigger moves focus _into_ the panel it opens,
so the trigger itself holds no focus for the whole time its list is up — which
is exactly the moment a reader is most obviously looking at one control.
`focus-visible` alone lit the edge only once the panel had closed again, or when
the control was tabbed to, and both are states you have to go looking for.
Together they say one thing: this is the live control.

It rides in the shadow slot, which is ADR 0002's whole point — the hairline lives
there so the focus ring composes on top rather than replacing it. What is
overridden is `--shadow-hairline` and not `--input`, and that distinction is load
bearing: `--input` is also read by the trigger's `dark:bg-input/30` fill, so
brightening the edge through it would have doubled the control's fill opacity in
dark as a side effect.

**Instance (2026-08-21, marina).** Ben: "make it so wehen a select or combobox is
focused its ring/border slightly brightens". `--input-focus` arrives declared in
both schemes and `controlTriggerClasses` redeclares `--shadow-hairline` from it,
so both controls take it from one line. Rendered at three strengths; the
quietest was invisible beside the ring already there.

It shipped on `focus-visible` alone, and Ben: "not seeing the change regarding
border brightneing?" — which is the click path above: focus was in the panel the
whole time, so the trigger never matched.

## Everything in a panel starts at one left edge

A popup's contents share a single text inset, and a row that is not a list item
shares it too. The search field, the messages, the rows and the actions in a
combobox all begin at the same x — 33px, which is where a row's label sits once
the tick column is reserved. A reader scans a panel down its left edge, and a
line that starts anywhere else reads as belonging to something the panel is not
showing.

Centring is what breaks it, and it is always tempting on the one line that has
no neighbours. An empty state is a message rather than a list, so centring it
looks like considered typography right up until the panel has a search field
above it and a Clear below it — and then it is one line adrift between two that
agree, which is what draws the eye to the misalignment rather than to the words.

The same goes for size. A message in a panel is read at the panel's own size;
dropping it a step says it is a lesser kind of content, when it is the only
content there is.

**Boundary.** This is the left edge of text, not of everything. Icons and ticks
sit in the column the inset reserves, which is what makes the inset the number it
is. Nor is it an argument against centring anywhere — a panel with nothing else
in it, a dialog's actions, a toast, all still centre where centring is the
composition rather than an exception inside one.

**Instance (2026-08-21, marina).** Ben: "the alignment of these things does not
look good", on a Dataset panel showing "Filter datasets", "No matches." and
"Clear". Measured, the three began at 33.0px, 66.3px and 33.0px, and the middle
one was also 12px against the others' 13px — `ComboboxEmpty` was the only element
in the panel that was centred, and the only one a step smaller. It now takes the
search field's inset and the panel's type size.

## An edge that lands above its fill is glass, not a raised chip

A hairline with two inset highlight lines is one drawing, and it has a
direction. In light the hairline sits _below_ the fill and the highlights are
lost in it, and what that draws is a solid block with a shadow under it.
Recolour the same three layers for dark the obvious way — lift each one with
white alpha — and the direction inverts. The rim now sits _above_ the fill and
the two lines are plainly visible on it, and a bright rim around a pane you can
see the ground through is glass. Same declaration, same three layers, a
different object.

So a scheme is not ported by recolouring it. What travels is the object; the
layers are how one ground happens to draw it. A dark ground already reads a
lift away from the track as raised, which is the job light needed the hairline
for, so the honest port drops the edge rather than inverting it — and then the
fill has to carry what the rim was carrying, and comes up to meet it.

The second half is subtler and is the reason this went unnoticed: **a scheme can
look right by accident, and its rendering will not tell you.** Light was never
fixed. Its two highlights are pure white on a near-white fill — a 0.013 step
nobody sees — so light has always drawn the glass and always looked solid. The
belief that someone had removed it was reasonable and wrong, and no amount of
looking at light would have settled it. Read the declaration.

**Boundary.** This is about an edge tuned against a fill, which is the same
family as the edge that leaves with its fill — that one is orphaned by a fill
that departs, this one is inverted by a fill that is recoloured. It is not a ban
on lit edges in dark: a surface that genuinely _is_ a pane over content keeps
them, because there the glass is the object. And it is the direction question
only. The magnitude question — how far a step should move a surface, and why an
alpha is the wrong way to hold it constant across schemes — is settled
separately by a hover step being a distance, not an alpha.

**Instance (2026-08-21, marina).** Ben, on a dark-mode screenshot of the job
detail page's Overview/Trials strip: "i believe we removed the glass effect on
these tabs/segment controls in light mode and i want ot port that change to dark
mode too." Nothing had been removed — `--shadow-tab-indicator` was untouched
since the Million UI refactor, and light still carried all three layers. What
was true was the read. Measured, light's hairline sits 0.105 _below_ its chip
and dark's 15% white ring landed 0.088 _above_ it, with the 10% lines lighting
its top and bottom over a translucent 4.5% fill. Dark's `--tab-indicator` went
opaque at `oklch(0.33 0 0)` — the next rung on that block's own surface ladder,
0.145 page, 0.205 card, 0.269 track — and the indicator took `dark:shadow-none`,
with a second line for the pill variant whose shadow arrives at (0,3,0) through
a group-data selector. The rim came off at the consumer rather than by blanking
`--chip-edge` and `--chip-highlight` in `.dark`, which is the ComboboxChip move:
those two name an object a badge also draws, and a badge is not what changed.
It is glass in dark for the same reason, and is left standing as its own call.

## A table holds one kind of row

A table's rows are all the same kind of thing. A section title set as a
full-width row breaks that: it is drawn in the grid's own material so it reads
as data, it rides the rows' scroll surface, and it sits between a heading and
the columns that heading governs. Sections of a table are therefore tables —
each with its title above the grid, its own headers, its own scrollport, its
own sort. The column rule falls out of the same principle: a column a reader
can sort means one thing all the way down, so a column carrying a different
measure in each section can only sort into nonsense.

**Boundary.** A summary row is the one different kind that stays, because it is
derived from the rows above it rather than labelling what comes next — it reads
as their conclusion. The rule is about *kind*, not about visual variety: a
zebra band, a tinted failure cell and a status badge all leave a row the same
kind of thing. And the division between the split tables is their titles and
the air, per **Titles carry the divisions** — a rule drawn between them is what
that decree already refuses.

**Instance (2026-08-22, the benchmark viewer).** From the viewer's design note:
"The previous layout inserted metric titles as full-width rows inside one
table. Those rows looked like data, shared one scroll surface, and separated a
title from its column headers. The structure also gave sorting no clear scope
because one column represented different metrics across sections." Correctness
and every performance metric became separate data tables, each with its unit
description above it and its summary in the final row. The note also settles
when to revisit: a table that no longer shares one unit, a metric needing
different columns, or a required cross-metric workflow that per-table sorting
blocks.

## A failure narrows a result; it does not void it

A run that broke part-way still measured everything it reached. The reading
reports what it has and states what is missing beside it, as a coverage count
of included over available. Discarding the rest for one failed case throws away
measurements that were taken; labelling the file incomplete says the same thing
about data that is merely partial. The failed case is named in plain language
and kept in view beside the score, rather than sorted into a second class of
result.

**Boundary.** This governs *reporting* a partial result, not *computing* one:
a summary still takes only the cells that qualify, and says so. Nor is it a
licence to present a broken run as whole — the failure is named, counted, and
sits beside the number it constrains. The tint decree already pays this
courtesy to a single cell; this owes it to the set the cell sits in.

**Instance (2026-08-22, the benchmark viewer).** From the design note: "A
failed scenario does not hide the remaining measurements or label the result
file as incomplete," with the summary reporting coverage as
`included_cells/available_cells`, and the ranking keeping "failed and
unsupported counts beside each score instead of dividing libraries into
eligible and diagnostic groups."

## A reading's terms are stated where it starts

What a number means — the conditions it was taken under, how samples were
isolated, how they were reduced, how a ranking over them was computed — sits in
prose at the top of the page, ahead of the first surface that shows one. A
legend is those same words moved somewhere the reader has to travel to and come
back from, and that trip is charged once per number rather than once per page.

**Boundary.** Terms, not lectures — this is the conditions under which the
numbers mean anything, and it stays prose at the page's head. It does not
license a paragraph over every surface, which **Labels, not lectures** refuses:
a control still speaks through its label, and an empty state is still one line.

**Instance (2026-08-22, the benchmark viewer).** From the design note: "Open
the viewer with its title, repository link, benchmark environment, sample
isolation, reduction method, and ranking method. This context lets readers
interpret the ranking without a separate legend."

## A number shows its precision, not its padding

Trailing zeroes are the format talking over the measurement, so each metric
keeps its own maximum precision and drops what it does not need. One formatter
governs a unit across the whole page: a duration rendered two ways in two
tables reads as two kinds of quantity.

**Boundary.** Dropping padding is not rounding — the precision the metric
actually carries survives; only the zeroes that carry nothing go. A column that
reads as a set still aligns on its decimal, since the ragged edge is a
different cost from the false one.

**Instance (2026-08-22, the benchmark viewer).** From the design note:
"**Decimals**: omit trailing zeroes while preserving each metric's maximum
precision," with durations formatted through the project's own
`prettyMilliseconds` utility rather than per-call-site.

## A heading offers to sort when there is an order to choose

One row has exactly one order, so a heading over it has nothing to offer. Below
two rows the heading stops being a control and becomes the label it always also
was: no button, so no focus stop and nothing announced as pressable; no hover
fill; and no caret, because a caret is the heading reporting an order the reader
can no longer change. The sort state is unshown rather than cleared — a set that
grows back past one row finds its column where it left it.

What decides it is the population, not the row count, and the two part company
exactly where it matters. A table whose rows are one page of a server-side sort
is not holding the set it sorts: the last page of nine hundred trials can carry
a single row, and toggling a column there reorders all nine hundred and hands
back a different one. Its headings have plenty to do. So a table that sorts what
it holds is measured by what it holds, and a table showing a window says how
large the set behind it is.

**Boundary.** This is a heading over a set with one member, not a heading over a
short set — two rows is an order, and the rule stops there. It is also not a
licence for count-dependent chrome generally: the neighbouring decree that takes
a floating disc off a one-row table turns on there being no room to seat it,
which is impossibility rather than futility, and the two want separate
arguments. The column keeps its label, its width and its place in every case;
what leaves is only the offer to reorder.

**Instance (2026-08-22, marina).** Ben, on the Bookmarked table showing one job
with Cost sorted ascending: "when there is only 1 row, we shouldn't let people
click the table headers to sort, right? because there is no sorting to be done"
— and, when the pair-agreement decree and the stranded caret were put against
it, "no, i want you to make it so tables with 1 row don't have the sort
functionality". `DataTable` publishes the population on a context that defaults
to 2, so a heading outside one behaves as it always did, and every
`DataTableSortHeader` inside a table gets the rule without its call site opting
in. The jobs page's two tables now differ by what they hold: Bookmarked draws
ten headings and no controls, All jobs draws nine controls. The trials table
passes `total` and is untouched.

## Dark mode follows the system

The token layer arrives dark-complete — a full `.dark` fork of every token,
canvas stop included — and activation is the one part it leaves to the app:
nothing applies the class. The wiring is a pre-paint script on the document,
keying the root `.dark` class and `color-scheme` off `prefers-color-scheme`
and tracking changes live. Before first paint is the load-bearing half: the
stylesheet paints light until the class arrives, so a script that waits for
the app hands every dark-system visitor a light flash. `color-scheme` travels
with the class so native scrollbars and form controls follow the page.

Chromeless is the other half. A theme preference is not a destination, so it
buys no bar to live in — the appearance is the operating system's setting,
read rather than duplicated as a control. This is the answer to where the
toggle goes: nowhere, until one earns chrome the way chrome is earned.

**Boundary.** This decides activation, not palette — the dark values were
always the set's, and the madeleine canvas entry's anticipated dark stop
shipped with them. A repository Ben asks a toggle of adds one under the chrome
decrees, and the system remains its default state.

**Instance (2026-08-22, thinky-3d).** Ben: "we need to add dark mode for the
new viewer? it's supported by million-ui so should be easy to add" — and,
offered system-follow with no UI, system plus a persisted toggle, or a toggle
alone, chose "Follow the system." One inline script in `index.html` wired the
viewer; every surface rendered dark on the tokens it already wore.

**Amended, later the same day.** The rail arrived ("add a rail, same as
marina has") and with it marina's SchemeMenu at its foot: System, Light, Dark
persisted under next-themes' key, the stored choice resolved by the same
pre-paint script the menu re-invokes. The system remains the default state,
as the boundary above anticipated. "Chromeless" now reads: no chrome *for
the scheme's own sake* — the menu lives in chrome the rail already earned.

## Search is the set's pill

A search field is one drawing everywhere the set searches: an InputGroup gone
rounded-full with px-1 — in a 16px arc the padding is measured to the curve,
so the addons keep a control's 8px of visual air — the magnifier leading at
the label's size, and the ⌘K caps trailing, collapsing on focus to hand their
width to the value. The input carries aria-keyshortcuts="Meta+K Control+K"
and a document-level listener focuses it on the shortcut. The caps hide below
sm, where a touch device makes them a lie; the listener stays, because a
narrow window on a laptop still takes the shortcut. The placeholder names the
set searched — "Search jobs…", "Search games…" — and the bare bordered Input
is what this drawing replaces.

**Boundary.** The pill is the *search* drawing: a field that narrows the
surface under it. A form's text input keeps the square control surface —
rounded-full is what says "type to narrow", not "type to submit".

**Instance (2026-08-22, thinky-3d).** Ben, on the viewer's gallery search
drawn as a bare Input: "search looks wrong, compared to say, marina. you
should document this design decision. it should use the standard input and
have a cmd+k shortcut." The gallery search became marina's jobs-search
drawing — pill, magnifier, caps, listener.

## The app rail is the icon column

App chrome, where a project takes it, is marina's rail: a 56px --rail-width
sticky column inside the scrollport — the size-8 item plus the 12 a side any
control gets — bg-background behind a 0.5px hairline. Top to bottom: the
Million mark as the way home, a separator at the item's own width (a rule
running the full 56 reads as a panel edge), the destinations as icon chips
whose names live sr-only and on a right-side tooltip with aria-current
wearing the muted fill, and the Appearance menu at the foot on mt-auto. The
scrollport paints the rail's column into its own background so the strip
survives a rubber-band, the hairline stop inside --rail-width. Destination
glyphs are simple over apt: a list for an index, because a list is a glyph
nobody has to learn, where a mark that describes the destination exactly can
still need decoding at 16px.

**Boundary.** This settles what an app's destination column is, and bounds
"A column of destinations carries labels" to columns drawn labelled — the
rail's sr-only-plus-tooltip names are the narrower naming rule, now shipped
and blessed twice. Chrome is still earned: the rail arrives when Ben asks,
and a one-destination rail carries marina's recorded tension until routes
fill it.

**Instance (2026-08-22, thinky-3d).** Ben: "by the way, you should also add
a rail, same as marina has" — and, on the gamepad first chosen for the Games
destination: "you used the wrong icon for 'games' in the rail btw. jsut keep
it simple, like a list of something." The viewer's rail is marina's drawing
with the Games chip on IconListBullets, and the mark's one file doing
favicon duty.

## Pages begin with their content

A page is its content, and the header shrinks to what governs it. An index
draws no hero at all: the field that narrows it sits on the frame's top line
— pt-6, the field's centre at 40 beside the rail's mark at 28 — and the
reading column starts at the cross-page 96px, the band spending 56 of it. A
detail page's h1 is the section-title scale beside its badges: a title is a
name, not a display setting. Description lives where it is content — a brief
in its own tab — never as a lede under the title, and a count is not an
eyebrow.

**Boundary.** Titles still carry the divisions: section headings stay, at
the same scale the page's own name takes. What goes is the display tier —
heroes, ledes, and the uppercase-mono eyebrow, struck everywhere.

**Instance (2026-08-22, thinky-3d).** Ben: "you should also follow the way
Marina does it's header above the search bar and document this design
decision. for example, minimal to no titles, no need for loads of
description text, there should never be that uppercase mono nonsense
eyebrows on titles etc." The gallery's eyebrow ("323 GAMES · 232 TRACES"),
display hero and lede all left; the game page's text-6xl title dropped to
the section-title scale with the lede removed.

## The band offers the set's readings at its end

The controls band over a results surface, as marina's jobs bar draws it and
the gallery now takes it: the search pill spans the full width of the surface
it narrows, on the frame's top line; under it the facet selects, each showing
its value with the facet's name in aria-label; and where a set has more than
one honest reading — a grid of stills, a list of rows — the switch between
them ends the band, drawn as the set's segmented control with a glyph per
reading. It ends the band because it is a different kind of control from its
neighbours: the facets change which results come back, the switch changes how
they are drawn, and the reader finds "how" after "which". The choice is a
reading preference and persists per browser. A list reading is a column of
whole-row links — thumbnail, name, the same meta line the cards carry —
divided by whitespace, the hover fill naming the row.

**Boundary.** The switch is for two honest readings of one set, not a place
to park view options generally; a third mode earns its glyph the way the
first two did. Filter mechanics stay the standing decree's ("Filters go
beside what they filter"); what this adds is the width, the ordering, and the
switch.

**Instance (2026-08-22, thinky-3d).** Ben: "same as marina has, we should add
some way of filtering and probably extend the search full-width. we should
also add an option for changing the layout of the games between a list and
grid view" — then "document the above design decision." The gallery's pill
lost its max-width, Family/Model/Traces selects joined the band, and the
grid/list switch ended it, the choice stored per browser.

## A carried drawing arrives with its behavior

Porting a surface from a sibling project means porting the whole drawing, and
the interactions are part of it: the handover between a filter row's panels,
a hint that collapses on focus, a chip that impresses under its key. Markup
carried without its behavior reads as done and is not — the niceties are
where a reference project spent its corrections, so leaving them behind
re-loses what was already won. The filter row's own instance: once one panel
is open, reaching a sibling with the pointer hands it the panel (a menubar's
model over controlled open, popups forced non-modal so no backdrop swallows
the pointerenter, opt-in by id so crossing an unenrolled control closes
nothing, and a closed row ignores hover entirely).

**Boundary.** Whole means the behaviors the surface *has*, not speculative
ones; a port may still trim machinery the destination genuinely lacks a use
for — but the trim is a decision to state, not a default.

**Instance (2026-08-22, thinky-3d).** The gallery's filter band arrived as
markup without marina's handover. Ben: "one of the things i've noticed is it
isn't porting nice-toh-ave UX features like when you open one of the selects
then hover others, thye auto open etc." useHandover carried over verbatim;
the three facet selects enrolled, the layout switch left out.

## An unfiltered facet select names its facet

A select in a filter band shows its facet's name while nothing is picked —
Family, Model, Traces — because a row of controls all reading "All" names
the state and not the subject: the row is obviously filters, and what the
reader needs from each control is which one this is. A picked value takes
the box; aria-label carries the name through both states; and the open
menu's first row keeps "All", where beside its siblings the word finally
has its subject.

**Boundary.** This refines the older exception ("a select reads 'All' ...
its name stays in aria-label"), which survives only where the values name
their own question — marina's scope reads All/Mine/Shared, a set no facet
name would improve. Ambiguity is what decides: an "All" that could belong
to any facet in the row takes the facet's name instead.

**Instance (2026-08-22, thinky-3d).** Ben: "also the placeholders for those
selects should indidcate what they are right? encode these design
decisions." SelectValue's function form shows the facet name at 'all'; the
menu rows are unchanged.

## The width counts a gallery's columns

A card grid sizes its tracks by the window, not by breakpoints:
repeat(auto-fill, minmax(260px, 1fr)), so a wider window seats more cards
and a narrower one fewer, continuously — six at 1920, three at 1180, two at
700 — with no step where a resize suddenly reflows. The floor is the card's
own legible minimum (a 16:10 still with a title under it stays readable at
260), not a rhythm number. auto-fill rather than auto-fit, so a filtered
handful keeps card-sized cards instead of ballooning to fill the row — the
empty tracks are what hold the cards at their size.

**Boundary.** This is for galleries of uniform cards, where every track is
the same kind of thing. A reading column keeps its measure, and a layout of
unlike regions (track plus aside) keeps its own arithmetic.

**Instance (2026-08-22, thinky-3d).** Ben: "we should laso make the grid
responsive, right? so that more fit when expanding or shrinking the window
etc." — then "encode the above design decision." The gallery's three
breakpoint counts became the auto-fill rule.

## A marker reads as its word

A value that is the machine's own placeholder rather than an identifier —
"<synthetic>", a trace no model produced — displays as its word with the
machine punctuation shed: Synthetic. This is the identifier decree applied,
not broken: stripping angle brackets is removing the machine's quoting, and
the word is the name the marker already carries. A real id with no recorded
display name stays an id — claude-sonnet-5 and gpt-5.6-sol render raw,
because an identifier beats a guessed name and naming real models is a
decision to make once, in the model catalog.

**Instance (2026-08-22, thinky-3d).** Ben, on the model filter's options:
"why is synthetic displayed as <synthetic> cna we just have it as
'Synthetic'". The plugin's enrichment maps the marker; the raw ids stay
until named.

## A prompt rests at prompt ink

Every prompt on one band wears one grey. The set's fields already rest their
placeholders at text-muted-foreground; a facet control showing its name
while empty is the same kind of thing — a prompt — and sitting it at the
trigger's full ink put two prompts side by side at two greys. Measured, the
mismatch was never size: search placeholder and facet name were both
12px/400, the placeholder at oklch 0.556 and the name at p3 0.225, and the
darker ink reads heavier, which the eye files as bigger. A picked value
takes the trigger's full ink back, which is what separates a value from a
prompt at a glance.

**Boundary.** Prompts only. A select that reads its value from the start
(scope) was never prompting and keeps full ink; the menu rows keep theirs.

**Instance (2026-08-22, thinky-3d, ported to marina).** Ben: "is it my
imagination or are the select text bigger than the search games
placeholder? if so we should reduce the select text size down." The sizes
measured identical; the ink was the difference, and the fix went to both
repos' filter bars — and with it Ben's standing instruction: "we should
port these design changes back to million-ui so that everything is
consistent. marina too."

## A hovered surface holds its place

Hover names its target without moving it: a fill, a shadow, an overlay, a
playing preview — signals that land on the surface, not displacements of
it. A thumbnail that hops upward on approach is movement the reader did
not ask for, under the eye and the pointer at once — the hold decree's
"nothing moves uninvited" applied to the hover itself. The gallery card's
2px lift came off; its elevation shadow and the gameplay clip stay as the
hover's whole voice.

**Boundary.** Displacement of the hovered surface, not every transform on
hover — a control elsewhere reacting (a disc sliding along a rail) is that
control's own drawing. The shadow was not the complaint and stays.

**Instance (2026-08-22, thinky-3d).** Ben, on the gallery's cards playing
clips: "on hover the thumbnails shouldn't move upwards though. currently
they do and it looks bad. they shouldn't shift position." The
group-hover:-translate-y-0.5 the card had carried since it landed was
removed; shadow and clip remain.

## A facet holds several values

A facet filters a set, and the reader's question is as often "these two
families" as one — so a facet over independent values selects several:
the popup stays open across picks, each held value wears the tick, and
the trigger reads the picked names in the options' order, truncating at
its own width — the open menu is the reader's route to the whole set.
"All" keeps the first row and clears; empty is unfiltered, the facet's
name resting at prompt ink. The control stays the select: twelve
families and five models are short enumerable sets, and the
type-to-filter decree already reserves comboboxes for lists long enough
that typing is the interface.

**Boundary.** Facets whose values are independent. A partition facet
(Traces' With/Without) stays single — both halves of a partition is no
filter. A facet over a long list becomes the combobox the type-to-filter
decree already orders, multiple included.

**Instance (2026-08-22, thinky-3d).** Ben, on the gallery's facet row:
"these should probably be comboboxes right? so that you can select
multiple options?" Multiple was the want; at 12 and 5 options the
select stayed the control and grew multiple.

## The primary is monochrome ink

The set wears no accent hue: --primary is the neutral ladder's own ink —
0.205 in light, inverting to 0.922 in dark, since a dark fill on a dark
canvas is invisible and the old "a hue that carried meaning in light does
not stop carrying it in dark" rationale was about a hue and died with it.
Hover and edge sit one declared ladder step away; the highlight stop is
gone with --shadow-primary, which the solid-ink decree had already
orphaned. Every control that tints still draws --primary. An indicator
over media — the gallery clip's progress fill — is white over a faint
white track: media is its own ground and follows no theme. If an accent
is ever chosen again, the OKLab method survives the hue.

**Boundary.** The chromatic colours that carry meaning stay: the diff's
--destructive and --success, the status light's Apple pair. Monochrome is
the primary's, not a ban on colour.

**Addendum (2026-08-23).** The checked control's --primary-edge ring
survived the swap one day and read as a halo — Ben: "why is that there
weird border/ring around the checkboxes." The washed edge existed to
keep a hairline from reading as a second fill against the blue's
chroma; monochrome has no chroma to wash, so the edge rides at the
fill's own value in both modes.

**Instance (2026-08-22, thinky-3d and million-ui).** Ben: "can we remove
the blue primary color completely. i also want it gone from million-ui.
i do not like the blue primary color. i've noticed it has cropped up in
progress bar and i don't like it. i also don't like it anywhere, so we
should completely swap it out concerning million-ui." This revokes the
2026-08-18 blue (the OKLab midpoint entry) and supersedes "The accent
sits between vivid and muted."

## A gallery of unlike shapes justifies its rows

Tiles that each carry their own display aspect cannot ride auto-fill's
uniform tracks — mixed heights punch holes under a grid's rows. The rows
justify instead: each tile's flex basis and grow ride its judged aspect
at a base row height, so a row's tiles share one height, widths differ
per game, and the row fills the track exactly — in the gapped grid and
the flush wall alike. The judgments come from looking: every still
classified into a small palette (16/10 default, 4/3, 1/1, 3/4) with a
focal point, recorded as data beside the app. Assets are never re-cut —
the tile is the window and the still and clip cover-crop through it —
so a wrong judgment is a one-line correction.

**Boundary.** Galleries whose tiles genuinely differ in subject shape. A
gallery of uniform cards keeps the width-counted auto-fill decree; a
free-form aspect (no palette) was refused — rows pack worse and the wall
reads chaotic rather than intentional.

**Instance (2026-08-23, thinky-3d).** Ben: "could we display the
thumbnails at their most optimal apsect ratio? the aspect ratio might be
different per game based on what is most important to show" — then
"implement what you think would be best." Justified rows with the
palette and display-time cropping were the implementation.

## A gallery of unlike shapes stacks shortest-column

Supersedes the justified rows recorded earlier the same day. The mosaic
is masonry — cosmos.so's drawing, which Ben asked after by name: columns
counted from the width at the size control's base, each item dropped
into the currently shortest column, tiles at column width and their own
judged height, staggered rather than row-aligned. Order softens to
roughly-ordered and the DOM reads down columns; that trade is the look.
The mosaic became one reading of three: the uniform grid returned as its
own (every tile the full 16:10 frame, auto-fill tracks, no crop), the
list stayed, and the tiles in every reading rest on the clip's own first
frame at native capture resolution.

**Instance (2026-08-23, thinky-3d).** Ben: "how does cosmos.so do the
moasaic thing where they don't all have to be on the same row?" then
"ideally i'd want you to do that yes, but can you add a toggle between
this mosaic view and the regular grid view (where all thumbnails have
the same size…)". Masonry replaced the justified rows within hours of
their landing; the ledger keeps both.

## A title over imagery sets solid

Tight tracking belongs to headings on the page's own ground. A title
overlaid on a thumbnail sits on a busy picture: the letterforms already
compete with the image behind them, and negative tracking closes the
counters that were keeping the words legible there. The overlay keeps
its face and weight — 16px medium, white on the scrim — and drops
tracking-tight.

**Boundary.** Text on media only. A list row's title beside its thumb,
and the page's headings, keep the set's tracking-tight.

**Instance (2026-08-23, thinky-3d).** Ben: "do the titles on the
thumbnails have negative tracking? if so remove that negative
tracking." Both overlay titles — over the still and over the muted
no-preview box — set solid.

## Where the thing is on show, the name is the whole caption

A presenting surface — a tile that plays its game, a theater with the
game running beside the header — captions with the name alone. The
rank, the family, the trace count are the catalog's data, and they
read where the catalog is being read: the list row's meta line, the
game page's badges and stats. Recited beside the thing itself they are
the index leaking into the presentation.

**Boundary.** Catalog readings keep their data — the list row's second
line and the game page's badges are where a reader compares records.

**Instance (2026-08-22 and -23, thinky-3d).** The gallery cards lost
the meta line first ("the cards are their thumbnails now"), and the
theater's header lost the same line a day later — Ben, pointing at
"Best 100 · #8 · Basic · 1 trace": "remove this and document the
design decisions.

**[Withdrawn and reinstated within the hour.]** The same screenshot
came back with "this should be positioned better," which read as
position-not-existence; the rule was withdrawn and the meta reseated
under the title. Ben then: "no no, sorry, i meant remove it. regarding
repositioning i was talking about the 'download trace json'." The meta
came back off, the rule went back in, and the bracket stays as the
record: a screenshot names a region, not an element — when a correction
and its referent can part ways, ask before distilling."

## The outline anchors the reader's own turns

The transcript's scrub column ticked every turn with text, on the
recorded argument that a one-question run would otherwise show a single
useless tick. Ben inverted both halves: ticks are for the user's
messages alone — navigation is by what the reader asked, and sixty
marks against eight questions drowned the questions — and a lone
question earns no outline at all, the column appearing once there are
places to go between. The component keeps its speaker-blind anchors
API; the caller chooses.

**Instance (2026-08-23, thinky-3d, ported to million-ui).** Ben: "this
navigation should be just for user messages, not for all messages. you
should port this change back to million-ui and all the changes we've
made actually" — then "if there is only 1 user message then it
shouldn't display."

## The chrome that governs a set stands through its readings

The theater used to cover the content surface whole; it rises only to
the search bar's underside now, so the gallery's own pill stays
standing and live above both readings. Zero shift comes from identity —
the same element at the same line, never a matched copy. The page banks
its scroll when the theater opens and returns it on close, so the
reader's place in the gallery survives the visit; typing in the
standing bar closes the theater toward the results it names.

**Instance (2026-08-23, thinky-3d).** Ben: "the detailed page that
shows the game on left trajectory on right should have same search bar
heading that the main gallery view has. and there should be zero
layoutshift when clicking between the pages. document this design
deicsion."

## The rail's rule crosses into the page

The separator under the rail's mark runs the rail's full width at 0.5px
and sits on the same line as the page content's own divider, so the two
read as one rule crossing the rail into the page. This supersedes the
item-width separator recorded with the rail: the old entry feared a
full-56 rule would read as a panel edge, and the resolution is that it
is one — the same edge the page draws, continued.

**Instance (2026-08-23, thinky-3d).** Ben: "the divider should be ffull
width and .5px so it matches the page divider," then "both dividers
(rail divider and page divider) need to move down, right" — seated
together at the standing search band's underside.

## A reading is a route, not a modal

The theater began as a fixed overlay with private state and silent
history writes; the gallery under it kept scrolling, and that scroll
was the tell. Ben: "why can i scroll this? it's weird. is a modal the
right thing here? maybe we need to re-think everything. also we have a
duplicated detail page. there should be no other game page. this is
the game page. remove this." The re-think: the route decides. One page
owns both readings; /games/<slug> is the gallery with its theater
open; the dedicated detail page and its Open game page button are
deleted; the scrollport locks while watching and the banked scroll
returns on close; closing navigates home, so Back reopens the game as
any page pair behaves.

**Boundary.** The standing-chrome decree above carries the geometry;
this one carries the architecture: a second reading of a set is
URL-addressed, never an overlay pretending.

**Instance (2026-08-23, thinky-3d).**

**Instance (2026-08-23, thinky-3d).** Ben: "when you click on a
thumbnail, can we have a smart animation so that the video grows and
the transcript smart animates in? so the user doesn't lose context of
what they clicked" — continuity joins the architecture. The route
change runs inside a view transition: the clicked tile's media box and
the theater's player share one transition name (set on a tile only
around a transition — imperatively on the way in, from the remembered
slug as the grid renders on the way out — because a duplicated name
skips the animation), the trajectory carries its own name and rides in
from the reading's edge, and both snapshots size to the travelling box
and crop as the media would, since tile and stage disagree about
aspect. Two timing truths the work surfaced: the open banks the scroll
before the pinned page clamps it (the banking effect keeps an existing
bank), and the mosaic seeds its column count from the last measure —
remounting at a default reflowed the grid under the returning reader,
and scroll anchoring chased a tile through the reflow, carrying the
restored place away. Three corrections later (Ben: "the video flashes at
the edges as it grows, there's a ghost effect"; "it's even worse now";
"i'm still seeing the issue" — the last resolved under /diagnosing-bugs
with a headed-browser frame loop, after headless recordings kept
passing what Ben kept seeing), the flight's laws: what ghosts is
whatever the morph leaves behind at either end, so the picture's frame
travels too and only chrome fades in place; both pair snapshots size to
the travelling box; and exactly ONE snapshot flies — the two ends frame
the same artwork at different zooms (judged tile crop against 16:9
stage), so any overlap, however brief, doubles the picture. The stage's
framing flies both directions (new on open, old on close), putting the
crop step at tile size; and the hover clip hides from the outgoing
snapshot at click, else its live frame flies against the still as a
double exposure. Verification that must see compositing runs headed —
headless view-transition frames do not reproduce what the GPU paints.
And the fourth correction ("there is a weird flashing now, right?"),
found by sampling the travelling group's computed transform per rAF:
the animation ran perfectly — the flash WAS the curve. The old
ease-out spent half its travel in the first 90ms and idled the rest
while the page faded on the browser's separate 250ms clock; a
composition pops when its parts keep different time. The laws that
ended it: one clock and one curve for the whole scene (380ms,
cubic-bezier(0.4, 0, 0.2, 1) on the flight, the page pair and the
trajectory), and the main thread belongs to the flight — the trace's
fetch, parse and first transcript commit all await the transition's
finished promise, and the hover clip pauses at click.

And the fifth correction ("it suddenly snap expands on click… the
width just instantly snaps"): the browser's own group animation tweens
width and height on the main thread while transform composites, so one
busy frame paints size and position out of step — computed style
reported a perfect curve while the paint snapped. The lasting law: a
shared-element flight animates transform only. The page injects
per-flight keyframes (uniform scale and translate, a 16:9 window
fitted to the tile, both directions), exactly one element is named per
direction — the stage's still; the other end lends only its rect — and
the stage frame and destination tile are named merely to be lifted,
parked invisible until teardown. Proven by a stall harness: 130ms of
busy main thread injected mid-flight, and the box must keep gliding.

## The page ground beside the rail is the canvas

The shell's content region rests on --canvas while the rail stays
white: a tenth-step and the shared hairline separate chrome from page
without a heavier line, and white surfaces — the search pill, cards,
the reading column — lift gently off the ground. The token's dark fork
carries dark. The rubber-band gradient's page stop paints canvas too,
so a fling shows the ground and not a white flash.

**Boundary.** The ground, not the surfaces: everything drawn on it
keeps explicit bg-background, per the canvas decree above it.

**Instance (2026-08-23, thinky-3d).** Ben: "non-rail area should have
very subtle darker background in light mode (encode this design
decision)" — alongside the mark's gutter square: "the logo area has
too much vertical space. it should have equal space to the sides and
top."
