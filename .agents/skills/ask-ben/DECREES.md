# Decrees

Ben's design decrees, distilled to rules — the answer he would give, already
written. Apply every rule that touches the surface you are composing; the bar
is each one held, not the file skimmed. Each rule was extracted from a real
correction, quoted and dated in [LEDGER.md](LEDGER.md) — read the entry when a
rule needs its history or its boundary questioned.

How a change carrying these rules lands is [CONTRACT.md](CONTRACT.md)'s.

## Tables

- **A surface on the canvas is white.** The table wears `bg-background`
  explicitly. A frame with no fill is a window the canvas shows through: the
  hairline says where the surface ends, the fill says there is one at all.
- **A wide row is carried by a band.** Even rows take a fill so the eye can
  follow one row across many columns — a rule says where a row ends, which
  is a different service. The band joins the rules rather than replacing
  them, and lives between the surface and the canvas so it never puts the
  page's value back inside the surface. It is the resting value, so it is
  scoped through `:where()` and every state paints over it.
- **A row that leads somewhere is a link across its whole width.** One real
  anchor stretched over the row with an inset overlay, never a click handler
  — cmd-click, middle-click and copy-link are the point. Controls in the row
  lift above the overlay; the row's text stops being selectable, which is
  the price.
- **An affordance at an edge is a thing you can see.** A sideways-scrolling
  surface says so with something drawn, and the drawn thing is what you aim
  at. An invisible zone arming on approach fires for every pointer merely
  travelling past. Speed comes off dwell, since an arrow has no inside to
  aim at.
- **A cell that reports a failure is tinted, rules included.** A count above
  zero or a named exception takes `cell-danger`, the diff's `--destructive`,
  so it is found without being read. Its hairlines take the tint too: a grey
  rule crossing a red field reads as the tint dirtied, and failures arrive in
  runs, so the greys slice one block into stripes. Opaque in every state,
  including its own hover — a wash laid over the row lets the neutral hover
  and the zebra band through, and those come out as mud and as stripes; the
  cell owns one value for the state and one for the pointer. The *fill* is
  faint, because the table around it is quiet — its whole ladder of state lives
  inside five values of 255, and chroma is found far more readily than
  lightness on a near-white ground, so a little is legible and a lot is an
  alarm. The rule does not follow it down: a boundary has to be seen as one,
  and 0.5px is very little ink. Not the status light's red, and not on retries
  — a retry is the system having coped.
- **A failure narrows a result; it does not void it.** A run that broke
  part-way still measured everything it reached, so the reading reports what it
  has and states what is missing beside it. Voiding a whole result for one
  failed case discards measurements that were taken and tells the reader less
  than the truth; marking the file incomplete says the same thing about data
  that is merely partial. The failed case is named in plain language, kept in
  view, and does not relabel its neighbours — the same courtesy the tint
  already pays a single cell, owed to the set it sits in.
- **A cell shows the name, not the identifier.** What a machine generated
  for its own sake is not what a reader came to read: strip the slug and the
  stamp, keep the name. The identifier stays reachable where a reader would
  go looking for it, never in the cell that names the row. A machine marker
  reads as its word with the punctuation shed — `<synthetic>` displays as
  Synthetic — while a real id with no recorded display name stays an id: an
  identifier beats a guessed name.
- **A number shows its precision, not its padding.** Trailing zeroes are the
  format talking over the measurement; each metric keeps its own maximum
  precision and drops what it does not need. One formatter governs a unit
  across the page — a duration rendered two ways in two tables reads as two
  kinds of quantity.
- **A table holds one kind of row.** A section title set as a full-width row
  is drawn in the grid's own material, so it reads as data, rides the rows'
  scroll surface, and stands between a heading and the columns it heads.
  Sections of a table are tables: each takes its title above the grid, its own
  headers, its own scrollport, its own sort. The same rule catches the column
  that carries a different measure in each section — a column a reader can sort
  means one thing all the way down, and one that changes meaning by section
  sorts into nonsense. The tables are divided by their titles and the air
  between them, per **Titles carry the divisions**; a rule between them is the
  thing that decree already refuses.
- **A summary belongs to the table it summarizes, last.** It is the one row
  that is a different kind and stays: derived from the rows above it rather
  than labelling what follows, so it reads as their conclusion and cannot be
  mistaken for another measurement. It says what it covers — included over
  available — because a summary over part of a set is a different number from
  one over all of it, and the reader cannot see which they have.
- **Two tables of the same column set agree on where a column is.** An auto
  table measures against the rows it was handed, so one column set rendered
  twice comes out at two widths and the pair disagrees about what a row
  contains — the wider one pushing its last column off the scrollport. The
  floor goes on the column, not on either table: a min-width per column,
  each the column's own widest real content plus a step. A floor and not a
  fixed width, because `w-px` on an actions column is the shrink-to-fit
  idiom and `table-fixed` reads it as one pixel.
- **A row's first and last words stand off the table's edge.** The gap
  between two columns is shared and reads as one number; the gap at the ends
  is the row's inset into its own container, with a corner to clear. Outer
  cells take the inline padding a button takes, interior cells keep theirs.
- **An overlay sits only where the surface can hold it.** A floating disc
  is drawn while its seat falls inside the surface, and puts itself away
  when the surface is too short to seat it — a one-row table has nowhere to
  put a disc, which is away.
- **Rows cozily hug their contents.** 32px: py-1.5 cells against the 20px
  line box, headings taking the rows' height by the rows' formula — never a
  fixed h that merely agrees today. Controls size to the row (a size-5
  trigger), overflow the padding with -my-1 rather than growing the row, and
  center geometrically (flex, ml-auto) — an inline-flex control sits on the
  text baseline and negative margins skew where that baseline lands.
- **Rows act in the actions column; state lives in a State column.** State
  *displays* as a status badge in its own column — never appended inline to
  a content cell — and *changes* are actions. A form control per row (a
  switch) plants a settings idiom in a reading surface. Selection
  checkboxes stay — they choose rows, not mutate them.
- **Row actions collapse behind the ellipsis — no exceptions for count.**
  Even a lone action: a column repeating one label N times is noise; the
  label lives once, in the menu. The actions column itself is unlabeled
  (sr-only header) and hugs its triggers (w-px), as actionsColumn draws
  it. DropdownMenuIconTrigger at size-5 with its slop on; the whole cell
  is the target (relative cell, static trigger, reach ::after at
  inset-0); the open menu marks its cell (has-aria-expanded:bg-accent).
- **A value never stretches the control that holds it.** Cells truncate at a
  column budget rather than widening the table; horizontal scroll is for many
  columns, not one long title. The same holds off the table — a chip in a
  field, a row in a popup: `max-w-full` with `min-w-0`, since a flex item will
  not shrink below its content without it. Truncate the *label*, never the
  control's way out: a chip's remove button keeps its size while the text
  shortens. Only honest where the reader has another route to the whole value —
  typing, in a combobox — otherwise a copy affordance, not a wider box.
- **Tables scroll like transcripts.** The container is the overlay
  ScrollArea — no native lane, transparent track, floating thumb.

## Menus and popups

- **Menus are never lined.** Grouping is whitespace — the h-1 spacer keeps
  role="separator" — and destructive items are isolated by last position
  and the destructive variant alone. One exception, Ben's own (2026-08-23):
  in a picker, All stands apart from the options it clears behind a subtle
  0.5px hairline — pickerSeparatorClasses, worn by the select and combobox
  separators. The line marks a row of a different kind, a sentinel above
  members; grouping among like rows stays whitespace, and action menus stay
  unlined.
- **Menu icons are earned, not issued.** By [Byttebier's
  rule](https://thomasbyttebier.be/blog/the-best-icon-is-a-text-label):
  universal glyphs only, always beside the label, skipped entirely when no
  honest glyph exists — whole-menu consistent either way. Glyphs come from
  Central Icons stroke-2 (`mode="raw"` `data-icon="inline-start"`) — see
  **Icons are drawn by one hand** below, which retired the older clause
  keeping Phosphor outside menus.
- **A control that opens a list wears one face.** Select, dropdown trigger and
  combobox — including its chips variant — take the control surface:
  `rounded-button`, `bg-background`, `shadow-control` for the edge. The
  bordered square box is what this set draws for a field and nothing else.
  Focus is the exception: a ring is a box-shadow and reprints the edge the
  surface already has, so a control you type into takes the field's 1px
  `outline-ring/40` instead and leaves the surface untouched.
- **One popup language.** Every list that opens — menu, select, combobox —
  wears the menu system's geometry: popup-surface on rounded-control, the
  p-1 inset, 13px/5 rows, the left tick column. Interaction stays native to
  each primitive (the combobox keeps its flat highlight; its focus lives in
  the input).
- **A row of filter panels hands its open popup along.** A menubar's model
  over controlled open: click one panel open and reaching a sibling with
  the pointer moves the panel there; a closed row ignores hover, so a
  pointer merely crossing the bar opens nothing. Popups in the row are
  forced non-modal — a backdrop swallows the pointerenter the next control
  needs — and controls opt in by id, so crossing an unenrolled neighbour
  closes nothing. The handover is part of the row's drawing: a surface
  carried from a sibling project arrives with its behaviors, not only its
  markup.

## Buttons and actions

- **Actions wear a surface.** The filled primary for a view's one main act —
  a view is a region with its own job (a form, a sidebar, a dialog), one
  primary per region — and the raised default for everything else. Ghost
  goes unused in composed UI.
- **The primary is solid ink.** Flat fill and its hover stop; no edge ring,
  no inset highlights — nothing to orphan when a state swaps the fill.
- **The primary ends the row, and the row ends the form.** A form's action
  row aligns right; the primary sits last.

## Forms and controls

- **Checked wears the primary.** bg-primary with the --primary-edge ring —
  --primary reaches every control that tints.
- **A label names its control, and clicking it does what clicking the control
  does.** A label is part of its control and the largest target it has — a
  field focuses, a select opens, a checkbox toggles. `Field` mints one id and
  the control claims it, so the association comes from composing a Field rather
  than from each call site remembering. The id goes on the *focusable* element,
  which is often not what the label sits beside: a chips box holds its input,
  an input group is a div. `htmlFor` alone is not enough — the platform
  forwards a bare click, so anything that opens on pointerdown hears nothing
  and the label finishes the gesture, inputs only. Explicit `htmlFor` wins.
- **A label is a label wherever it renders.** A variant named for another
  component's role matches it to the letter (FieldLegend variant="label"
  mirrors FieldLabel); drift between them is a bug, not a nuance.
- **Type-to-filter lists are comboboxes.** A value that is one of a large
  known list is never a free input — the valid set is the interface. Short
  enumerable sets stay visible as checkboxes or a select.
- **A facet holds several values.** A filter over independent values
  selects several: the popup stays open across picks, ticks mark each held
  value, and the trigger reads the picked names in option order, truncating
  at its width — the open menu is the route to the whole set. "All" leads
  the list and clears; empty is unfiltered, the facet's name at prompt ink.
  The control follows the set's size per the type-to-filter decree — a
  short set is a multiple select, a long one the combobox. A partition
  facet (With/Without) stays single: both halves is no filter.
- **Search is the set's pill.** InputGroup gone rounded-full with px-1 —
  padding measured to the curve — the magnifier leading at the label's
  size, the ⌘K caps trailing and collapsing on focus, hidden below sm
  where a touch device makes them a lie; the listener stays. The input
  carries aria-keyshortcuts and a document listener focuses it on
  ⌘K/Ctrl+K; the placeholder names the set searched, and the field spans
  the surface it narrows. A form's text input keeps the square control
  surface — rounded-full is what says "type to narrow", not "type to
  submit".
- **Choice lists read down.** Enumerable options run in a column;
  horizontal belongs to segmented controls that read as one shape.

## Page composition

- **Spend the width before the scroll.** Reading surfaces take the wide
  track; configuration takes a narrow sticky aside; the single column is
  the narrow-viewport fallback, not the desktop composition.
- **Titles carry the divisions.** Stacked sections divide by their titles
  alone: text-lg font-normal tracking-tight, ink at the halfway mix of
  --content-foreground and --foreground. Between side-by-side columns a
  0.5px rule runs the full page height (pinned to the canvas, air
  included), the gap split evenly at 48px a side.
- **Headings name the content, never the product.** The wordmark lives in
  the tab title; on-page headings say what each section is.
- **A reading's terms are stated where it starts.** What a number means — the
  conditions it was taken under, how it was reduced, how a ranking over it was
  computed — sits in prose at the top of the page, ahead of the first surface
  that shows one. A legend is those same words moved somewhere the reader has
  to travel to and back, and the trip is charged once per number rather than
  once per page. Terms belong where the reading begins, not in a table of what
  the reading meant.
- **The page starts with air.** A generous top offset (pt-24 against
  pb-12); scroll owns the bottom edge.
- **Pages begin with their content.** An index draws no hero: the field
  that governs it sits on the frame's top line — the band spends 56 of the
  air and the reading column still starts at the cross-page 96px. A detail
  page's h1 is the section-title scale beside its badges — a title is a
  name, not a display setting. Description lives where it is content (a
  brief in its own tab), never as a lede under the title, and never an
  uppercase-mono eyebrow.
- **A set offers its readings where the controls end.** When one set has
  two honest drawings — a grid of stills, a list of rows — the switch
  between them ends the controls band as the set's segmented control, one
  glyph per reading: facets change which results come back, the switch
  changes how they are drawn, and the reader finds "how" after "which".
  The choice is a reading preference and persists per browser. A list
  reading is a column of whole-row links divided by whitespace, the hover
  fill naming the row.
- **The width counts a gallery's columns.** Card tracks fill at the
  card's own legible floor — repeat(auto-fill, minmax(260px, 1fr)) — so a
  wider window seats more cards and a narrower one fewer, continuously,
  with no breakpoint deciding. auto-fill over auto-fit: a filtered
  handful keeps card-sized cards, the empty tracks holding them at their
  size. The floor itself is the reader's: a segmented control beside the
  layout switch (one square glyph drawn at each size — the control
  depicts what it sets) moves it, two steps since 2026-08-23 — 260 and
  340, medium the default. For galleries of uniform cards; a
  reading column keeps its measure.
- **A gallery of unlike shapes stacks shortest-column.** When each tile
  carries its own display aspect — judged per item, from a small palette,
  with a focal point — the mosaic is masonry, cosmos's drawing: the width
  counts the columns at the size control's base, each item drops into the
  currently shortest column at the column's width and its own height, and
  the stagger is the look. Heights come from the aspects, so the
  distribution is arithmetic, not measurement. Strict order softens to
  roughly-ordered and the DOM reads down each column — the trade the
  layout is for; justified rows were tried first and superseded the same
  day. Assets are not re-cut: the tile is the window, stills and clips
  cover-cropping through it at the focal point, so a wrong judgment is a
  data fix. The mosaic is the gallery's one grid — the uniform
  reading and the flush wall were tried and retired the same day — and
  the layout switch offers it beside the list, the mosaic wearing the
  apps tiles now that no second grid competes for the glyph. The size
  control keeps two steps, 260 and 340. Per Ben, 2026-08-23.
- **The page ground beside the rail is the canvas.** In the shell, the
  content region right of the rail rests on --canvas — a very subtle
  darker field in light, the token's own fork in dark — while the rail
  stays white: the tenth-step plus their shared hairline is what
  separates chrome from page, with no heavier line. Surfaces on the
  ground — fields, cards, the reading column — keep explicit
  bg-background and lift gently off it. The scrollport's rubber-band
  paint ends on canvas so a fling shows the same ground.
- **The canvas is a quiet gray.** oklch(0.99 0 0) beneath surfaces wearing
  explicit bg-background. The --background token itself stays white —
  graying the token grays every control.
- **A search field belongs to the surface it searches.** It sits over that
  surface, not in the aside beside it. A search that *leaves* the page is
  navigation and belongs in chrome — and it moves alone: the filters stay
  where they are, which is what makes the new position say anything.
- **Filters go beside what they filter, once something else anchors the
  page.** A narrow sticky aside is right while the page has one anchor.
  Give it a second fixed column and the aside is the third vertical band in
  a row of them, and the surface everything exists to show is the narrowest
  thing on screen — so the filters become a bar over the table they narrow
  and the track takes the width back. The facet's name moves into each
  control as its placeholder, since a label sits over a field for free in a
  column and doubles a bar's height in a row. A facet select is no
  exception: unfiltered it shows its facet's name — a row of controls all
  reading "All" names the state, not the subject — the picked value then
  takes the box, `aria-label` carrying the name through both, and the open
  menu's first row keeps "All", which beside its siblings has its subject.
  The name rests at prompt ink while it prompts (the placeholder's
  text-muted-foreground, the same grey the search pill's prompt wears) and
  the picked value takes the trigger's full ink: two prompts on one band
  at two greys read as two sizes, the darker one heavier. Only a select
  whose values name their own question (scope's All/Mine/Shared) reads
  its value from the start, its name staying in `aria-label`.
- **Controls and results are two regions, not two sections.** Three
  distances, each saying how tightly the things it separates belong
  together: a heading takes the smallest over the table it names, sections
  take a larger one from each other, and a band of controls takes a larger
  one still — the break under it is between what the reader set and what
  came back. The distance is earned by the band, so one field spanning the
  surface it searches keeps the heading's gap.
- **A derived measure dies with what it was derived from.** A computed cap
  is only as good as its terms: remove the aside it was derived from and
  what is left is a number holding a surface off width nothing is using.
  Re-derive it or drop it — the page keeps a measure either way, in its
  insets. Prose keeps its own measure, in the reading.
- **A measure with something to align to stops centring.** A page centres
  while the window is all there is, because nothing is pinned to either
  margin. Give it a rail and the eye starts at that edge, so the measure
  anchors to it and the slack collects on the side where nothing is pinned.
  Anchoring says where the slack goes and not what the gutter is; the
  gutter is its own number.
- **A reading is a route, not a modal.** The theater is the game page:
  one page owns both readings, and /games/<slug> renders the gallery
  with its theater open — direct loads, refreshes, cmd-clicks and Back
  all land in the same view, because the URL decides, not an overlay's
  private state. There is no second detail page to drift from it, and no
  fixed layer either: the reading replaces the results in normal flow,
  sized to the viewport's remainder under the band, so nothing floats
  and nothing under it can scroll. The scrollport reserves its scrollbar
  gutter, so the standing band's width holds when one reading scrolls
  and the other does not; the banked scroll returns on close. The route
  change carries one shared element, per Ben (2026-08-23): the clicked
  tile grows into the player and the player shrinks back into its tile
  (view transitions; the trajectory rides in from the reading's own
  edge), so the reader never loses hold of what they clicked. Reduced
  motion and browsers without the API get the plain swap.
- **The chrome that governs a set stands through its readings.** Opening
  a game from the gallery swaps everything under the search bar and
  nothing above it: the theater rises to the bar's underside, so the same
  pill holds the same line in both views — zero pixels of chrome shift on
  the way in or out, because it is the same element, not a copy drawn to
  match. The page banks its scroll on open and returns it on close, and
  typing in the standing bar leaves the theater for the results it names.
- **A page holds while its contents change.** A control that changes a set
  is aimed at and read from while it works, so the thing under the pointer
  does not move and the line being read does not move. Hold before reserve:
  keep the old contents until the new ones are ready, which costs no space
  and has no empty frame in the middle; reserve only where absence leaves a
  hole. One action, one settle — a change that lands in two steps is two
  shifts charged for one intent. Not "nothing resizes": what is forbidden is
  movement the reader did not ask for, under the pointer, under the eye, or
  arriving late.
- **Labels, not lectures.** A control speaks through its label,
  placeholder, and state; prose beside it carries only the consequence of
  an irreversible action. Empty states are one line.

## Geometry, color, chrome

- **Icons are drawn by one hand.** Central Icons stroke-2 everywhere, not
  only in menus — a licence, not a design, was what once split them. A glyph
  stays hand-drawn only where the set cannot supply it: Central bakes the
  path and its stroke width inside the component, so a mark needing
  `pathLength` to animate (Tick) or a true 1px line at 12–13px (Caret,
  KbdCommand) is drawn here. Preference is not a reason.
- **A glyph is chosen for what needs no learning, and judged at its size.**
  Byttebier's test is universality, and aptness is a different property that
  is easy to mistake for it: a mark can describe the thing exactly and still
  have to be decoded, which is the invented metaphor the rule exists to stop.
  What a glyph depicts is an argument; what it reads as is the result. So
  choose by looking, at the size and in the container it will ship in —
  detail collapses into shape at 16px, where a grid becomes a tile and a
  stack becomes a smudge. Between two glyphs that both read without effort,
  the apter one wins.
- **An icon is drawn at the size of the word beside it.** A 12px glyph
  beside 12px type, 13 beside 13. The box sets it and the eye corrects it,
  and the correction is one step: glyphs do not fill their boxes equally, so
  a sparse one reads small at its label's size and goes up one. Two steps is
  not a correction, it is the absence of a decision — every 16px glyph
  beside 12px type is stock inherited and overridden by nobody. The button's
  height is never the measure; a taller button buys air around the same
  pair. An icon with no word beside it is measured against the line it sits
  in instead.
- **A reach is clipped where it would take a neighbour's space.** A reach
  is never trimmed to fit its control, but the space it takes has to be
  free — so it is trimmed per side, on any side facing something another
  element owns. Text is a neighbour: a mark whose reach lies over a word
  turns readable glyphs into that control, because the `::after` paints over
  them and takes the pointer. Padding is the wrong instrument, since pushing
  the drawn mark away moves the only thing the reader can see to fix the one
  thing they cannot. A reach still claims a container's own padding and the
  gap between turns.
- **One mark stands for Million, in every project built on the set.** A
  project on Million UI is the set with an app on top, not a separate
  product with its own badge, so the mark is the set's and it is the same
  file everywhere. It carries no wordmark: which project this is belongs to
  the tab title. Identity, not chrome — it earns a place where it is doing a
  job, a favicon or a destination, and licenses no bar to hold it.
- **A mark binds to its label when the gap is narrower than the mark.** A dot
  beside a word should read as one object; the space between them measured
  against the mark is what decides it. Wider and the gap is the largest thing
  in the pair, so the eye sees two adjacent items. A ratio, not a number, so it
  sizes any mark-and-label pair — but narrower than the mark, not as narrow as
  possible: a filled disc has no counter and crowds a word faster than a glyph
  of the same box.
- **A status light owns its colours.** The indicator's green and red are
  `--indicator-*`, Apple's system palette, never the diff's `--success` and
  `--destructive`. A diff colour is a wash under text; a status light is a
  7px disc carrying its meaning alone. One token for both means neither can
  be tuned without moving the other.
- **Radii are per-element.** Control 9px, button 7px, the --radius base
  10px (feeding the sm–xl scale and the table's frame), checkbox 4px, menu
  rows 5px — plain circular arcs. A one-radius unification was tried and
  revoked the same day (see the ledger's bracket); the spread is the
  decree.
- **The primary is monochrome ink.** The blue accent is revoked — Ben,
  2026-08-22: "remove the blue primary color completely … i don't like it
  anywhere." --primary sits on the neutral ladder: 0.205 in light,
  inverting to 0.922 in dark (a dark fill on a dark canvas is invisible;
  the hue-carries-meaning rule died with the hue), the hover one declared
  step away, the edge at the fill's own value — the washed ring existed
  for the blue's chroma, and a grey halo on ink is only a smudge — and no
  highlight stop: the solid-ink decree left it no consumer. It still reaches every control that tints. An indicator over
  media — a clip's progress fill — is white on a faint white track: media
  is its own ground and follows no theme. The method survives the hue: if
  an accent is ever chosen again, midpoints are computed in OKLab from
  sampled pixels, never eyeballed in hex.
- **Scrollbars appear when needed.** Overlay bars rest at opacity-0 and
  fade in on data-hovering / data-scrolling; hovering the surface reveals
  scrollability, so it is never a secret.
- **Hit areas ship; size to keep them.** reach-6 and reach-row arrive with
  the token layer — never rebuilt, never turned off for size. Size the
  control down so the reach fits; after:hidden is only for
  shoulder-to-shoulder controls whose targets would meet in the gap.
- **An object the set already draws keeps its face.** When the token layer
  has named a thing (`--chip-edge`, `--chip-highlight`), a second site is
  still that object. `ComboboxChip` renders as Badge `secondary` rather
  than restating a square muted box. The face travels; truncation, remove
  and hover stay local. Do not restyle Badge.
- **A nested corner is the outer one, minus the padding.** Inner ≈ outer −
  padding, so the two curves share a centre. ComboboxChips is
  `rounded-button` (7px) with 4px of padding once it holds a chip;
  `ComboboxChip` takes `rounded-[3px]`. A standalone chip keeps the radius
  it was drawn at. Do not restyle Badge.
- **A chip inside a white field wears a solid fill.** Badge
  `--badge-surface` plus `shadow-badge` on the field's white is glass.
  `ComboboxChip` takes `bg-muted shadow-none` on that Badge instance, not
  on Chip — Chip concatenates after the badge has resolved. Badge global
  stays.
- **A hover names its target with a sharp, opaque fill.** A discrete
  control that is the object — an icon button on the page, a remove
  mark that stands alone — has the control's own corner and a solid
  fill. No translucent wash, no circular smudge, no backdrop-filter.
- **Where the thing is on show, the name is the whole caption.** A
  surface that presents the thing itself — a gallery tile playing its
  clip, a theater with the game beside its header — captions it with its
  name alone. Rank, family and trace counts are catalog data and stay
  with the catalog's readings: the list row's meta line, the game page's
  badges and stats. Withdrawn and reinstated within an hour — see the
  ledger's bracket for the exchange that tested it.
- **The outline anchors the reader's own turns.** A transcript's scrub
  column ticks the user's messages alone — navigation is by what the
  reader asked, and a tick per message drowned the questions among the
  agent's steps. One question needs no outline at all: the column
  appears once there are places to go between. The outline component
  itself still never learns speakers — which turns anchor is the
  caller's call, and the set's Transcript passes the user's.
- **A title over imagery sets solid.** Tight tracking is for headings on
  the page's own ground; letterforms sitting on a picture are already
  fighting the picture, and closing them up loses more. The thumbnail
  overlays keep their face and weight and drop the negative tracking —
  titles beside media (a list row's) and the page's own headings keep the
  set's tracking-tight.
- **A hovered surface holds its place.** Hover signals land on the
  surface — a fill, a shadow, an overlay, a playing preview — and never
  displace it: a thumbnail that hops on approach is movement the reader
  did not ask for, under the eye and the pointer at once. The lift came
  off the gallery card; the shadow stayed, since it was never the
  complaint.
- **A mark on a chip shares the chip's face.** The chip is already the
  object; the x is a glyph on it, and hover is ink — the mark darkens to
  `--foreground`. A fill is a second face, and that holds however the fill
  is shaped: a 3px square and the chip's own trailing end were both tried
  and both read as a block appearing where the default x has none. The
  ghost button stays for its reach with `hover:bg-transparent` replacing
  `hover:bg-muted` so it cannot paint. One mark, one rest grey, one hover.
  Badge is not restyled.

## The app shell

- **Chrome earns its place by holding destinations.** Persistent chrome is
  space taken from every page forever, so it is paid for once and charged on
  every route — and what pays for it is destinations the content does not
  already lead to. Destinations first, chrome second: a shell built before
  there is anything to put in it is a frame around one picture, and the
  pressure afterwards is always to fill it. Getting around is a different
  job, and it is the breadcrumb's: per-page, costing nothing on a page that
  does not need it.
- **The app rail is the icon column.** A 56px `--rail-width` sticky column
  inside the scrollport: the Million mark's way home, a separator at the
  item's own width (a rule running the full 56 reads as a panel edge),
  destinations as size-8 icon chips named sr-only and on a right-side
  tooltip with aria-current wearing the muted fill, and the Appearance
  menu at the foot on mt-auto. The rule under the mark runs the full
  width at 0.5px and sits on the same line as the page's own divider —
  one rule crossing the rail into the page (per Ben, 2026-08-23,
  superseding the item-width separator; a full-56 rule reading as a
  panel edge was the old fear, and the answer is that it is one). The scrollport paints the rail's column
  into its own background so the strip survives a rubber-band, the
  hairline stop inside the width; the page's measure anchors to the rail.
  Destination glyphs are simple over apt — a list for an index — since a
  mark that describes the destination exactly can still need decoding at
  16px. A column drawn *labelled* is a different component (~11rem) and
  keeps Byttebier's rule in full; the rail's sr-only-plus-tooltip names
  are the narrower naming rule, shipped and blessed.
- **The app is a surface on the canvas, inset on the sides it has.** A
  window-filling page ends where the screen ends and the reader reads the
  operating system's rectangle; inset, it becomes a surface, which is what
  `--canvas` is already for. The tenth of a step between the canvas and
  white does not carry that alone, so the edge does — a 0.5px hairline and a
  turned corner, on the sides that have somewhere to go. A corner turned
  where there is no gap reads as a page clipped rather than a surface
  lifted.
- **A fixed frame is the scrollport.** An inset frame drawn as padding on a
  scrolling document is only there at the top of the page: scroll once and
  it slides away while the sticky chrome holds, leaving a sliver and a flat
  cut where the corner was. The frame takes the viewport's height and the
  shell inside it scrolls, so everything sticky answers to the frame. Where
  a shell only needs its corner rounded, `overflow-clip` does that without
  becoming a scroll container; `overflow-hidden` becomes one and every
  sticky thing inside goes dead.
- **Dark mode follows the system, chromeless.** The token layer ships the
  full `.dark` fork; an app wires it — the root class and `color-scheme`
  keyed off `prefers-color-scheme` in a pre-paint script and tracked live,
  so a dark-system visitor never sees a light flash and native controls
  follow the page. A theme preference is not a destination, so it buys no
  chrome of its own; where the rail exists, the Appearance menu lives at
  its foot — System, Light, Dark, the stored choice resolved by the same
  pre-paint script — with the system staying the default state.

## When Ben hasn't answered

Ask him — the human. Then append the exchange to [LEDGER.md](LEDGER.md)
(the principle stated positively under a leading phrase, its boundary, the
dated instance with his words — written with the writing-for-agents skill)
and distill the new rule into this file's groups. The consult is complete
only when every rule touching your surface is applied, or the uncovered
call is recorded.
