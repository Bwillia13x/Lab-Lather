# Repository Guidelines

## Project Structure & Module Organization
- `app/` holds the App Router entry, layouts, and global styles; add new routes or metadata there.
- `components/` stores reusable sections and shadcn primitives (`components/ui`). Keep component-specific helpers alongside supporting files.
- `lib/` centralizes utilities such as `lib/utils.ts`; share formatting or configuration helpers here.
- `styles/` defines Tailwind layers, while `public/` exposes static assets referenced by `/asset.ext`.
- `components.json` tracks shadcn inventory; update it via `pnpm dlx shadcn@latest add <component>` when generating UI.

## Build, Test, and Development Commands
- `pnpm install` restores dependencies after a fresh clone or registry change.
- `pnpm dev` runs the hot-reloading Next.js dev server on `http://localhost:3000`.
- `pnpm build` compiles the production bundle and TypeScript output; treat failures as blockers.
- `pnpm start` serves the built app locally, mirroring Vercel.
- `pnpm lint` runs the Next.js ESLint rules to enforce style and catch obvious bugs.

## Coding Style & Naming Conventions
- Use TypeScript function components with named exports for shared modules.
- Follow the existing two-space indentation, double quotes, and trailing commas; rely on ESLint auto-fixes.
- Organize Tailwind classes from layout → spacing → color; extract reusable variants with the `cn` helper in `lib/utils.ts`.
- Name UI files in PascalCase (`components/Header.tsx`) and keep route files kebab-case (`app/waitlist/page.tsx`); utilities stay camelCase.

## Testing Guidelines
- No automated suite exists; add Testing Library specs as `*.test.tsx` next to the source or in `__tests__/`.
- Document coverage assumptions in PRs and aim for ≥80% coverage on new logic.
- Before pushing, run `pnpm lint`, conduct a browser smoke test (nav, forms), and update screenshots for changed sections.

## Commit & Pull Request Guidelines
- Current history favors short, descriptive summaries (`Initialized repository for project SaaS landing page`); keep messages imperative and under 72 characters.
- Reference tickets with `Refs #123` when relevant and split unrelated work into separate commits.
- PRs should outline context, solution bullets, and test evidence (`pnpm build`, manual QA notes), plus before/after visuals for UI updates.
- Merge only after checks pass and reviewers sign off; flag analytics or theming changes early.

## Deployment & Environment
- Production deploys run on Vercel; verify `pnpm build` locally and resolve console warnings beforehand.
- Secrets live in `.env.local`; maintain `.env.example` entries so others can replicate setup safely.
- `@vercel/analytics` is enabled in `app/layout.tsx`; coordinate with product before adding new trackers or experiments.
