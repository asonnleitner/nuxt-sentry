import { resolve } from 'path'
import { fileURLToPath } from 'url'
import {
  defineNuxtModule,
  addPlugin,
  useLogger
} from '@nuxt/kit'

import errorHandler from './nitro/error-handler'
import type { SentryModuleOptions } from './types'
import { isDef } from './utils'

export default defineNuxtModule<SentryModuleOptions>({
  meta: {
    name: 'nuxt-sentry',
    configKey: 'sentry'
  },
  defaults: {
    // addPlugin: true
  } as any,
  setup (options, nuxt) {
    const logger = useLogger('nuxt-sentry')
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    const nitroDir = fileURLToPath(new URL('./nitro', import.meta.url))

    // add runtime dir to transpile
    nuxt.options.build.transpile.push(runtimeDir)

    addPlugin({
      src: resolve(runtimeDir, 'plugin.client.ts'),
      mode: 'client'
    })

    addPlugin({
      src: resolve(runtimeDir, 'plugin.server.ts'),
      mode: 'server'
    })

    // print some warnings
    if (isDef(nuxt.options.nitro.errorHandler)) { logger.warn('`nuxt.options.nitro.errorHandler` is already defined, will be overwritten') }
    if (isDef(nuxt.options.nitro.devErrorHandler)) { logger.warn('`nuxt.options.nitro.devErrorHandler` is already defined, will be overridden') }

    // add nitro error handler
    nuxt.options.nitro = {
      ...nuxt.options.nitro,
      errorHandler: resolve(nitroDir, 'error-handler.ts'),
      devErrorHandler: errorHandler
    }
  }
})
