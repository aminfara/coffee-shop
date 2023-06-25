import envSchema from 'env-schema';
import fp from 'fastify-plugin';
import { z } from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';

const configSchema = z.object({
  HOST: z.string(),
  PORT: z.number(),
});

type Config = z.TypeOf<typeof configSchema>;

declare module 'fastify' {
  interface FastifyInstance {
    config: Config;
  }
}

export const config = envSchema<Config>({
  schema: zodToJsonSchema(configSchema) as object,
  dotenv: true,
});

const configPlugin = fp(async (f, _options) => {
  f.decorate('config', config);
});

export default configPlugin;
