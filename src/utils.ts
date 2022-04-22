import { isObject } from '@vue/shared'
import type { SentryModuleOptions } from './types'

export const isDef = <T = any>(val?: T): val is T => typeof val !== 'undefined'

export const sentryClientEnabled = (options: SentryModuleOptions) => options.enabled && isObject(options.client) && options.client.enabled
