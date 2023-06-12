/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, Plugin, splitVendorChunkPlugin } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    publicDir: 'src/public',
    optimizeDeps: {
      include: ['@angular/common', '@angular/forms']
    },
    build: {
      target: ['es2020']
    },
    plugins: [
      analog({
        ssr: false,
        ssrBuildDir: '../../dist/apps/mitchs-website/ssr',
        entryServer: 'apps/mitchs-website/src/main.server.ts',
        vite: {
          inlineStylesExtension: 'css',
          tsconfig:
            mode === 'test'
              ? 'apps/mitchs-website/tsconfig.spec.json'
              : 'apps/mitchs-website/tsconfig.app.json'
        },
        nitro: {
          rootDir: 'apps/mitchs-website',
          output: {
            dir: '../../../dist/apps/mitchs-website/analog',
            publicDir: '../../../dist/apps/mitchs-website/analog/public'
          },
          publicAssets: [{ dir: `../../../dist/apps/mitchs-website/client` }],
          serverAssets: [
            { baseName: 'public', dir: `./dist/apps/mitchs-website/client` }
          ],
          buildDir: '../../dist/apps/mitchs-website/.nitro',
          prerender: {
            routes: ['/']
          }
        }
      }),
      tsConfigPaths({
        root: '../../'
      }),
      visualizer() as Plugin,
      splitVendorChunkPlugin()
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      cache: {
        dir: `../../node_modules/.vitest`
      }
    },
    define: {
      'import.meta.vitest': mode !== 'production'
    }
  };
});