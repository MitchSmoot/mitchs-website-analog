/// <reference types="vitest" />

import replaceFiles from '@nx/vite/plugins/rollup-replace-files.plugin';
import analog from '@analogjs/platform';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, Plugin, splitVendorChunkPlugin } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    publicDir: 'src/assets',
    optimizeDeps: {
      include: ['@angular/common', '@angular/forms'],
    },
    build: {
      outDir: '../../dist/apps/mitchs-website-old',
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true },
      target: ['es2020'],
    },
    plugins: [
      replaceFiles([
        {
          replace: 'apps/mitchs-website-old/src/environments/environment.ts',
          with: 'apps/mitchs-website-old/src/environments/environment.development.ts',
        },
      ]),
      analog({
        ssr: false,
        ssrBuildDir: '../../dist/apps/mitchs-website/ssr',
        entryServer: 'apps/mitchs-website/src/main.server.ts',
        vite: {
          inlineStylesExtension: 'css',
          tsconfig:
            mode === 'test'
              ? 'apps/mitchs-website/tsconfig.spec.json'
              : 'apps/mitchs-website/tsconfig.app.json',
        },
        nitro: {
          rootDir: 'apps/mitchs-website',
          routeRules: {
            '/**': { prerender: true },
          },
          output: {
            dir: '../../../dist/apps/mitchs-website/analog',
            publicDir: '../../../dist/apps/mitchs-website/analog/public',
          },
          publicAssets: [{ dir: `../../../dist/apps/mitchs-website/client` }],
          serverAssets: [
            { baseName: 'public', dir: `./dist/apps/mitchs-website/client` },
          ],
          buildDir: '../../dist/apps/mitchs-website/.nitro',
          prerender: {
            routes: ['/'],
          },
        },
      }),
      tsConfigPaths({
        root: '../../',
      }),
      visualizer() as Plugin,
      splitVendorChunkPlugin(),
    ],
    test: {
      reporters: ['default'],
      coverage: {
        reportsDirectory: '../../coverage/apps/mitchs-website-old',
        provider: 'v8',
      },
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      cache: {
        dir: `../../node_modules/.vitest`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
