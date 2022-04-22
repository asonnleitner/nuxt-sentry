import { defineNuxtConfig } from 'nuxt'
import NuxtSentry from '..'

export default defineNuxtConfig({
  modules: [
    NuxtSentry
  ],
  sentry: {
    addPlugin: true
  }
})
