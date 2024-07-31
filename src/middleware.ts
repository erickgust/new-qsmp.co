import createMiddleware from 'next-intl/middleware'

export const locales = ['en', 'de']

export default createMiddleware({
  locales,
  defaultLocale: 'en',
})

export const config = {
  matcher: ['/', '/(en|de)/:path*'],
}
