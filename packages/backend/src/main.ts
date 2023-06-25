import { getApp } from './app.js';

async function main() {
  const app = await getApp();
  const host = app.config.HOST;
  const port = app.config.PORT;

  try {
    await app.listen({ host, port });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

await main();
