import { FastifyInstance } from 'fastify';
import sensiblePlugin from './sensible.js';

export function registerPlugins(f: FastifyInstance) {
  f.register(sensiblePlugin);

  return f;
}
