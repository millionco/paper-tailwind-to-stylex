# Type

Million UI's two faces are both licensed now, and the licences differ in the
one way that decides everything here: whether the files travel.

**Sans is Suisse Intl** (Swiss Typefaces), and its files travel with the set.
A bought web kit, so serving it is what the licence is for — the cuts are
committed in the repository and every user of a consuming app gets the real
face, whether or not any machine has it installed. No package to add, no
human step. See ADR 0024.

**Mono is Berkeley Mono** (TX-02, U.S. Graphics Company) and is licensed per
seat. Licensed-per-seat means it cannot arrive through the registry — the
token layer ships naming it with a real fallback behind it (`ui-monospace`),
so a repository without the face renders on the system stack and looks like
it. That state is correct: a missing face should look missing, not be papered
over by a second designed face that makes a broken load invisible.

## Installing the sans

Copy two things from the set into the consuming repository:

1. The cuts — `src/styles/fonts/SuisseIntl-*.woff2` (six files: 400 and 500
   upright and italic, 600 and 700 upright).
2. The declarations — `src/styles/suisse-intl.css`, kept beside the fonts
   directory so its relative `url(...)` paths hold.

Then import that CSS from the repository's font entry module (the file its
app entry imports for type — marina's is `app/fonts.ts`):

```ts
import './suisse-intl.css';
```

Load font CSS through a JS import so the bundler rewrites the relative
`url(...)` paths and emits the files. (A CSS `@import` is resolved by
Tailwind's PostCSS pass, which inlines the rules without rebasing the paths —
the classic result is all of the `@font-face` rules and none of the files,
silently.)

The italics are not optional and their absence is silent: the set sets
emphasis as a real cut, and a face whose italic no `@font-face` names renders
a browser-synthesised oblique with no error raised. Copy the CSS file whole —
all six blocks — rather than trimming it to the weights a page uses today.

## The human step, for the mono only

Buying and placing the mono file is the human's; report it as outstanding
rather than working around it. When they have licensed it:

1. Put the file in `src/styles/fonts/`.
2. Declare it in its own CSS file beside it — `src/styles/berkeley-mono.css` —
   with `@font-face` whose `font-family` exactly matches the first name in the
   token layer's `--font-mono`. The match is what connects the file to the
   tokens; a mismatched name falls silently to the system stack.
3. Import that CSS file from the font entry module alongside the sans.

## Done when

Three checks, and the first two are not the same check:

1. `font-family` on `<body>` resolves to Suisse Intl. The files ship with the
   set, so anything else here is a build or copy fault rather than a missing
   purchase.
2. An `<em>` resolves to a Suisse Intl **italic** face, not to the normal one
   with a slant applied. `document.fonts` should list the italic entries; if
   the italic and upright set at the same advance width, it is synthesised.
3. `--font-mono` resolves to Berkeley Mono if licensed, or to the system stack
   if not — either is correct, and the completion report says which.

Verify in devtools rather than by reading the CSS: every failure mode here is
one where the rules are present and the face is not. Keep exactly one mono: the
same glyph-at-a-time value everywhere, per the set's design.
