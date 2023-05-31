import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    },
    assetsInlineLimit: 0,
    assetsDir: 'assets',
    outDir: 'dist',
    chunkSizeWarningLimit: 2000
  },
  publicDir: 'public',
  server: {
    watch: {
      usePolling: true
    }
  },
  optimizeDeps: {
    include: ['@fortawesome/fontawesome-free/css/all.css']
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(mp3|wav)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets/musik'
              }
            }
          ]
        }
      ]
    }
  }
});
