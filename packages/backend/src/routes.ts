import { FastifyInstance } from 'fastify';

export function registerRoutes(f: FastifyInstance) {
  f.get('/', async function () {
    return { hello: 'world' };
  });

  return f;
}
