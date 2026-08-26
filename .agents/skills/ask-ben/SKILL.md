---
name: ask-ben
description: >-
  Sets a repository up with Million UI, governs how a UI change lands, and answers a design call from Ben's recorded decrees. Use when installing or migrating to Million UI, when creating or changing user-visible UI, or when making a design call.
---

# Ask Ben

Million UI's one skill, and the name is the protocol: before making a design
call, ask Ben — by reading these files, where most answers already exist.

Three jobs, one door. Read the chapter the work is in.

- **[SETUP.md](SETUP.md)** — putting Million UI into a repository, empty or
  already rendering with an incumbent. Runs once per repository, and pulls in
  the chapters it needs itself.
- **[CONTRACT.md](CONTRACT.md)** — how a change lands: in place, one described
  change per commit, a `pending` entry in the root `DESIGN_LOG.md` audit log in
  that same commit. Read it before touching user-visible UI. Verdicts are the
  human's, never yours.
- **[DECREES.md](DECREES.md)** — what the surface looks like: tables, menus and
  popups, buttons, forms, page composition, geometry and colour, the app shell.
  Apply every decree that touches what you are composing. A surface the decrees
  do not cover means asking Ben for real and recording the answer; that chapter
  closes with how.

A UI change wants two of them — the contract for how it lands, the decrees for
what it looks like. Setup is its own errand.

Behind the decrees sits [LEDGER.md](LEDGER.md): every rule quoted and dated at
the correction it came from. Read an entry when a rule needs its history or its
boundary questioned; the rules themselves are stated in full in the decrees.
