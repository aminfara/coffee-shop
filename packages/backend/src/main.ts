import { getApp } from './app.js';

async function main() {
  const app = getApp();

  try {
    // TODO: host and port to config
    app.listen({ host: 'localhost', port: 3000 });
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

main();
