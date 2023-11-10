import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1220
    // rollupOptions: {
    //   output: {
    //     manualChunks: {
    //       // map ids to chunk names
    //       id: id => {
    //         // ...
    //       } 
    //     }
    //   }
    // }
  }
})

