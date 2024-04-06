/// <reference types="vitest" />

import analog from '@analogjs/platform';
import { defineConfig, Plugin, splitVendorChunkPlugin } from 'vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    publicDir: 'src/public',
    build: {
      outDir: '../dist/./mitchs-website/client',
      reportCompressedSize: true,
      commonjsOptions: { transformMixedEsModules: true },      
      target: ['es2020'],
    },
		resolve: {
			alias: {
				'~': path.resolve(__dirname, './src'),
			},
		},
    server: {
      fs: {
        allow: ['.'],
      },
    },    
    plugins: [
      analog({
        static: true,
        prerender: {
          routes: [
            '/'
          ],
        },
        nitro: {
          preset: 'vercel'
        }
      }),
      nxViteTsPaths(),
      splitVendorChunkPlugin(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
      cache: {
        dir: `../node_modules/.vitest`,
      },
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
  };
});
