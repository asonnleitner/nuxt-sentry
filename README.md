# Nuxt Sentry Module

> Work in progress

[vue docs](https://docs.sentry.io/platforms/javascript/guides/vue)
[node docs](https://docs.sentry.io/platforms/node)

## Development

- Run `pnpm dev:prepare` to generate type stubs.
- Use `pnpm dev` to start [playground](./playground) in development mode.

---

## Handling errors
Nuxt 3 is a full-stack framework, which means there are several sources of unpreventable user runtime errors that can happen in different contexts:

1. Errors during the Vue rendering lifecycle (SSR + SPA)
2. Errors during API or Nitro server lifecycle
3. Server and client startup errors (SSR + SPA)

### Errors during the Vue rendering lifecycle (SSR + SPA)

You can hook into Vue errors using `onErrorCaptured`.

In addition, Nuxt provides a `vue:error` hook that will be called if any errors
propagate up to the top level.

If you are using a error reporting framework, you can provide a global handler
through `vueApp.config.errorHandler`. It will receive all Vue errors, even if
they are handled.

### Server and client startup errors (SSR + SPA)

Nuxt will call the `app:error` hook if there are any errors in starting your
Nuxt
application.

**This includes:**

- running Nuxt plugins
- processing `app:created` and `app:beforeMount` hooks
- mounting the app (on client-side), though you should handle this case
  with `onErrorCaptured` or with `vue:error`
- processing the `app:mounted` hook

### Errors during API or Nitro server lifecycle - `WIP`

You cannot currently define a server-side handler for these errors, but can
render an error page (see the next section).
