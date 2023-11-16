# Elysia Status

This repository is home to a plugin for the [Elysia][0] framework that provides status endpoints for the APIs health.

## Usage

To use the plugin, simply add it like you would any other one with the `.use` function available on an instance of `Elysia`:

```typescript
import { Elysia } from 'elysia'
import { StatusRoutes } from 'elysia-status'

const app = new Elysia().use(StatusRoutes('/status'))

app.listen(8080)

console.log('Server is online!')
```

The above example will add a prefix of `/status` to the routes but it's an optional value you can remove if you don't want it. The resulting routes will be available at:

- `/status/health`
- `/status/readiness`

[0]: https://elysiajs.com
