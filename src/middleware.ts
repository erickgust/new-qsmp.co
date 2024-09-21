import createMiddleware from 'next-intl/middleware'

export const locales = ['en', 'de', 'fr', 'es', 'pt-br', 'ko']

export default createMiddleware({
  locales,
  defaultLocale: 'en',
})

export const config = {
  matcher: ['/', '/(en|de|fr|es|pt-br|ko)/:path*'],
}
