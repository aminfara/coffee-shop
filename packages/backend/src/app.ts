import Fastify from 'fastify';
import { registerPlugins } from './plugins/index.js';
import { registerRoutes } from './routes.js';

export async function getApp() {
  const f = Fastify({
    logger: true,
  });

  await registerPlugins(f);
  registerRoutes(f);

  return f;
}
