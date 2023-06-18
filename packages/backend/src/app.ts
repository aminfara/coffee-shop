import Fastify from 'fastify';
import { registerPlugins } from './plugins/index.js';
import { registerRoutes } from './routes.js';

export function getApp() {
  const f = Fastify({
    logger: true,
  });

  registerPlugins(f);
  registerRoutes(f);

  return f;
}
