import { defineNuxtConfig } from 'nuxt'
import NuxtSentry from '../src/module'

export default defineNuxtConfig({
  modules: [
    NuxtSentry, '@nuxt/ui'
  ],
  sentry: {}
})
