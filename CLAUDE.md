# Web Development Guidelines

## Stack & Project Structure
<!-- Fill in your actual stack. Example below: -->
- **Framework:** Next.js 15 (App Router) / React 19
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Language:** TypeScript (strict mode)
- **Package Manager:** pnpm
- **Testing:** Vitest + Playwright (E2E)
- **Linting/Formatting:** ESLint + Prettier (run automatically — don't suggest style fixes manually)

## Commands
```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm test         # Run unit tests
pnpm test:e2e     # Run Playwright tests
pnpm lint         # Lint (fix before committing)
pnpm typecheck    # tsc --noEmit
```

## Before Marking Any Task Done
1. `pnpm typecheck` passes with zero errors
2. `pnpm lint` passes with zero errors
3. All new functionality has a test
4. `pnpm build` succeeds (no build-time errors)

## Architecture Rules
- Use **Server Components by default**; add `"use client"` only when required (event handlers, hooks, browser APIs)
- Colocate components with their routes — don't dump everything in `/components`
- **No barrel files** (`index.ts` re-exports) — they break tree-shaking
- Fetch data in Server Components or Route Handlers, not inside client components
- **Never** store sensitive values in client-side code or `NEXT_PUBLIC_` env vars unless intentionally public

## Code Conventions
- Prefer named exports over default exports
- Use `type` imports: `import type { Foo } from './types'`
- API routes live in `app/api/` and always validate input with Zod
- Database queries go in `lib/db/` — no raw SQL in components or route handlers
- Errors: use typed `Result<T, E>` pattern or throw with descriptive messages — never swallow errors silently

## Accessibility (Non-Negotiable)
- All interactive elements must be keyboard-navigable
- Images require meaningful `alt` text (empty string `alt=""` only for decorative images)
- Use semantic HTML (`<button>`, `<nav>`, `<main>`, `<section>`) — not `<div>` for everything
- Color contrast must meet WCAG AA (4.5:1 for text)

## Performance
- Images: use `next/image` with correct `width`/`height` or `fill` + `sizes`
- Fonts: use `next/font` — never load fonts via `<link>` in `<head>`
- Dynamic imports for heavy client components (`next/dynamic`)
- Avoid `useEffect` for data that can be fetched server-side

## Security
- Sanitize all user input before rendering (use DOMPurify for HTML, never `dangerouslySetInnerHTML` with raw input)
- Use CSRF protection on all mutating API routes
- Validate and sanitize environment variables at startup (`lib/env.ts`)
- Never log sensitive user data

## What Claude Gets Wrong Here
<!-- Document recurring mistakes as you find them -->
- Tends to add `"use client"` unnecessarily — push back and keep Server Components
- Sometimes uses `fetch` inside client components instead of React Server Components
- May suggest `any` type under time pressure — always use proper types
- Occasionally skips Zod validation on API routes — always validate

## When Exploring the Codebase
Fetch what you need using Bash. Start with:
```bash
cat package.json           # Understand dependencies
ls app/                    # Route structure
ls lib/                    # Shared utilities
cat tsconfig.json          # TypeScript config
```

## Deployment
<!-- e.g., Vercel, Fly.io, Docker — fill in your actual setup -->
- Target: Vercel (Edge Runtime where possible)
- Env vars managed in Vercel dashboard — see `.env.example` for required keys
