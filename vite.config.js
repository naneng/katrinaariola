import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          } else if (id.endsWith('.css')) {
            return 'styles';
          } else if (
            id.endsWith('vendor-8b9bf2ba.js') ||
            id.endsWith('vendor-313dda09.js') ||
            id.endsWith('index-457e5e9b.js')
          ) {
            return 'assets/' + id.split('/').pop().split('.')[0];
          } else {
            return 'main';
          }
        },
      },
    },
  }
})

