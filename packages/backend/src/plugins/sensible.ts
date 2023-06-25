import sensible, { SensibleOptions } from '@fastify/sensible';
import fp from 'fastify-plugin';

const sensiblePlugin = fp<SensibleOptions>(async (fastify, opts) => {
  fastify.register(sensible, opts);
});

export default sensiblePlugin;
