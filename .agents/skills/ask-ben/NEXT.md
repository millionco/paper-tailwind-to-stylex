# Next.js

The adaptations Setup takes on a Next.js app. Each one is named in the
completion report.

- **Step 1**: Tailwind runs through `@tailwindcss/postcss` — Next owns the
  bundler, so there is no Vite plugin to add. A scaffolded Next app usually
  has this wired already; verify rather than reinstall.
- **Step 2**: keep the app's own alias and the layout it implies. A root-mapped
  `"@/*": ["./*"]` with no `src/` is common, and the set's imports resolve
  through it unchanged.
- **Step 3**: keep `rsc: true`, and point `tailwind.css` at the app's real
  stylesheet entry (`app/globals.css`).
- **Step 4**: the token-layer item targets `src/styles/globals.css`, so on
  Next it lands as a stray file nothing imports. Merge instead: the token
  layer verbatim into the real entry, the app's own rules preserved beneath it
  in a marked section, the stray file deleted. Done when the routes render on
  base-lyra tokens and nothing still reads the old theme block.
- **Client boundaries**: the set's interactive components are client
  components. A file that composes them with hooks of its own needs
  `"use client"`; add the directive where Next's error names the file.
- **Routing and review**: changes land in the real `page.tsx` under the
  audit-log contract, so nothing special is owed to the router. When the
  human asks to see the incumbent beside the replacement, a side-by-side is
  a real `page.tsx` under a dev-only route, served on request and removed
  after the verdict.
