# mugisus.me

Portfolio built with SolidStart 2, Solid, Tailwind CSS 4, and Three.js.

## Development

Requires Node.js 24 or newer and pnpm.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Checks

```bash
pnpm lint
pnpm format:check
pnpm typecheck
pnpm build
```

Use `pnpm lint:fix` to apply Oxlint fixes and `pnpm format` to format files with
Oxfmt, including Tailwind class sorting. The previous ESLint and Prettier
configs have been replaced by `.oxlintrc.json` and `.oxfmtrc.json`.

Oxlint runs `eslint-plugin-solid` as a JavaScript plugin to retain Solid's
reactivity checks. Application typechecking uses TypeScript 7
(`pnpm typecheck`). `skipLibCheck` skips dependency declarations, including
Nitro's optional database adapter types; application code remains strictly
checked.

The Solid plugin's transitive `@typescript-eslint/*` packages currently declare
TypeScript support below 6.1, so pnpm reports a peer warning with TypeScript 7.
Oxlint provides the parser and runs only the plugin's AST rules; both linting
and a negative check for `solid/no-destructure` have been verified with this
setup.

## Build and preview

```bash
pnpm build
pnpm preview
```

The Nitro 3 Vite plugin builds the Vercel preset into `.vercel/output` using the
Node.js 24 runtime. Nitro's current `latest` release is a beta, pinned
explicitly in `package.json`. `pnpm preview` (also available as `pnpm start`)
serves the build locally; production uses the generated Vercel output.
