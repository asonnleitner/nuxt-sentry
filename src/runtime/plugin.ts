// sentry client integration
import { defineNuxtPlugin } from '#app'
import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'
import { useNuxtApp, useRouter } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.server) {
    return
  }

  const router = useRouter()

  nuxtApp.hook('vue:error', (..._args) => {
    console.log('vue:error')
    if (process.client) {
      console.log(..._args)
    }
  })

  nuxtApp.hook('app:error', (..._args) => {
    console.log('app:error')
    if (process.client) {
      console.log(..._args)
    }
  })

  nuxtApp.vueApp.config.errorHandler = (..._args) => {
    console.log('global error handler')
    if (process.client) {
      console.log(..._args)
    }
  }

  Sentry.init({
    app: nuxtApp.vueApp,
    dsn: 'https://1ef79bdc7e054d54bda3e766c3723a14@o347355.ingest.sentry.io/6356330',
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracingOrigins: ['localhost', 'env-website.com', /^\//]
      })
    ],

    environment: 'nuxt-dev',

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0
  })
})
