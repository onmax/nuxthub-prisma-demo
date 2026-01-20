export default defineNuxtConfig({
  modules: ['@nuxthub/core'],
  hub: { db: { orm: 'prisma', dialect: 'sqlite' } },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
})
