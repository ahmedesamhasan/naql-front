import react from '@vitejs/plugin-react-swc';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const shouldOpenVisualizer = mode === 'analyze';

  return {
    base: '/naql-app-1/',
    plugins: [
      react(),
      viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 10240,
        deleteOriginFile: false,
      }),
      viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 10240,
        deleteOriginFile: false,
      }),
      svgr(),
      visualizer({
        open: shouldOpenVisualizer,
        filename: 'stats.html',
      }),
    ],
    server: {
      port: 4002,
      strictPort: true,
    },
    esbuild: {
      legalComments: 'none',
      drop: ['console', 'debugger'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-router-dom'],
      force: true,
    },
    build: {
      sourcemap: false,
      target: 'esnext',
      minify: 'esbuild',
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (!id.includes('node_modules')) return;
            if (id.includes('react')) return 'react-vendor';
            if (id.includes('@mui')) return 'mui-vendor';
            return 'vendor';
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
        },
      },
    },
  };
});
