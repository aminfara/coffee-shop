import sensible, { SensibleOptions } from '@fastify/sensible';
import type { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

const sensiblePlugin: FastifyPluginAsync = fp<SensibleOptions>(async (fastify, opts) => {
  fastify.register(sensible, opts);
});

export default sensiblePlugin;
