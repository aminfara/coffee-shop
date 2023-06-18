import sensible from '@fastify/sensible';
import Fastify from 'fastify';

async function main() {
  const f = Fastify({
    logger: true,
  });

  f.register(sensible);

  f.get('/', async function () {
    return { hello: 'world' };
  });

  try {
    f.listen({ host: 'localhost', port: 3000 });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main();
