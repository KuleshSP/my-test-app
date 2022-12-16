import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      include: '**/*.tsx',
    }),
    tsconfigPaths(),
  ],
  esbuild: {
    logOverride: {'this-is-undefined-in-esm': 'silent'},
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
});
