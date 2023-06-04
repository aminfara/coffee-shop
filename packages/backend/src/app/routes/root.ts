import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export default async function (fastify: FastifyInstance) {
  fastify.get(
    '/',
    async function (_request: FastifyRequest, _reply: FastifyReply) {
      return { message: 'Hello API' };
    }
  );
}
