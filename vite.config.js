import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    base: mode === 'production' ? '/assets/' : '/',  // Use '/assets/' only in production mode
    build: {
      outDir: 'dist',  // Output directory for build files
      rollupOptions: {
        output: {
          entryFileNames: 'index.js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]'
        }
      }
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './tests/setup'
    },
    esbuild: {
      loader: 'jsx', // or 'tsx' for TypeScript
    }
  }
})
