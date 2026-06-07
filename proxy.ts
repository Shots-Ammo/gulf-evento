import createMiddleware from 'next-intl/middleware';

// 1. Initialize the next-intl handler
const handleI18nRouting = createMiddleware({
  locales: ['en', 'ar'],
  defaultLocale: 'en'
});

// 2. Explicitly export the named proxy function for Next.js 16
export function proxy(request: any) {
  return handleI18nRouting(request);
}

export const config = {
  // Matches all routes except api, static files, and vercel internals
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};