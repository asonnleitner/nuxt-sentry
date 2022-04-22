import type { NitroErrorHandler } from 'nitropack'
import * as Sentry from '@sentry/node'
// import * as Tracing from '@sentry/tracing';
import '@sentry/tracing'

Sentry.init({
  dsn: 'https://1ef79bdc7e054d54bda3e766c3723a14@o347355.ingest.sentry.io/6356330',

  environment: 'nitro-dev',

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
})

export default <NitroErrorHandler> function (error, event) {
  event.res.end('[custom error handler] ' + error.stack)
}
