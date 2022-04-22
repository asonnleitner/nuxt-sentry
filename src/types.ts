import type { BrowserOptions } from '@sentry/vue'
import type { Options as NodeOptions } from '@sentry/types'
import type { SentryCliPluginOptions } from '@sentry/webpack-plugin'
import type { RequestHandlerOptions } from '@sentry/node/dist/handlers'

export type IntegrationsConfiguration = Record<string, unknown>

export interface SentryModuleOptions {
  // sentry options
  dsn?: NodeOptions['dsn']
  config?: NodeOptions
  publishRelease?: boolean | SentryCliPluginOptions
  enabled?: NodeOptions['enabled'],
  // defined what key to use for useRuntimeConfig().public.sentry
  publicRuntimeConfigKey?: 'sentry' | 'sentry.public' | string

  // only applies when `enabled`, `client.enabled` or `client.enabled` is `false`
  logMockCalls?: boolean

  // TODO
  lazy?: boolean | any

  tracing?: boolean | {
    tracesSampleRate?: NodeOptions['tracesSampleRate']
  }

  // TODO
  init?: boolean

  requestHandlerConfig?: RequestHandlerOptions

  // TODO
  sourceMapStyle?: any

  // client options
  client: false | {
    config?: BrowserOptions
    integrations?: IntegrationsConfiguration,
    enabled?: BrowserOptions['enabled']
    // only has effect when publishRelease = true
    publishRelease?: boolean // default: false
  }

  // server options
  server: false | {
    config?: NodeOptions
    integrations?: IntegrationsConfiguration
    enabled?: NodeOptions['enabled']
    // only has effect when publishRelease = true
    publishRelease?: boolean // default: false
  }
}
