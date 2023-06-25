import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/handler.ts'],
  outfile: 'dist/bundle/handler.mjs',
  platform: 'node',
  format: 'esm',
  target: 'esnext',
  bundle: true,
  minify: true,
  sourcemap: 'linked',
  // https://github.com/evanw/esbuild/issues/1921
  banner: {
    js: `
        import path from 'path';
        import { fileURLToPath } from 'url';
        import { createRequire as topLevelCreateRequire } from 'module';
        const require = topLevelCreateRequire(import.meta.url);
        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        `,
  },
});
