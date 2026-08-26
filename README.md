# Paper Tailwind to StyleX

Paste static JSX exported by Paper anywhere on the page and get StyleX source
that uses [`tailwind-stylex`](https://github.com/aidenybai/tailwind-stylex) tokens.
The generated source is copied to the clipboard automatically.

## Run locally

```bash
npm install
npm run dev
```

The app uses Next.js 16, Tailwind CSS 4, and source-copied Million UI
components. The Million UI registry URL in `components.json` is local because
the registry is not publicly hosted. Existing copied components do not need the
registry during builds or deployments.

## Conversion behavior

- Static `className` strings become `stylex.props(styles.nodeN)` spreads.
- Standard Tailwind values use exports from
  `tailwind-stylex/tokens.stylex`.
- Paper fractional spacing and arbitrary values stay exact.
- Static inline `style` objects become StyleX declarations.
- Dynamic inline style expressions stay in place.
- Unsupported utilities stay in `className` and appear in the result summary.

Generated code expects `@stylexjs/stylex` and `tailwind-stylex` in the target
project, plus the target framework’s normal StyleX compiler setup.

## Checks

```bash
npm test
npm run typecheck
npm run lint
npm run build
```

The fixture tests cover token conversion, exact arbitrary values, static inline
styles, unsupported class preservation, and source without static styles.

## License-dependent setup

Suisse Intl ships with Million UI and is included. Berkeley Mono remains on the
system mono fallback because its license is per seat. The Million UI copy mark
also needs `CENTRAL_LICENSE_KEY`; automatic clipboard copy works without that
licensed icon package.
