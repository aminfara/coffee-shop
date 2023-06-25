import { FastifyInstance } from 'fastify';
import configPlugin from './config.js';
import sensiblePlugin from './sensible.js';

export async function registerPlugins(f: FastifyInstance) {
  await f.register(sensiblePlugin);
  await f.register(configPlugin);

  return f;
}
