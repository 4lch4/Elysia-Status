import { Elysia } from 'elysia'

export const StatusRoutes = (prefix?: string) =>
  new Elysia({ prefix })
    .get('/health', () => 'OK', {
      detail: {
        description: 'A health check that returns OK by default.',
        tags: ['Health'],
        summary: 'Health Check',
        operationId: 'healthCheck',
        responses: {
          200: {
            description: 'The application is healthy.',
            content: {
              'text/plain': {
                schema: {
                  type: 'string',
                  example: 'OK',
                },
              },
            },
          },
        },
      },
    })
    .get('/readiness', () => 'OK', {
      detail: {
        description: 'A readiness check that returns OK by default.',
        tags: ['Health'],
        summary: 'Readiness Check',
        operationId: 'readinessCheck',
        responses: {
          200: {
            description: 'The application is ready to accept requests.',
            content: {
              'text/plain': {
                schema: {
                  type: 'string',
                  example: 'OK',
                },
              },
            },
          },
        },
      },
    })
