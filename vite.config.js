import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        // Scripts
        'main-scripts': './assets/scripts/main.js',
        // Styles
        'main-styles': './assets/styles/main.scss',
      },
      output: {
        inlineDynamicImports: false,
        dir: 'dist',
        entryFileNames: 'scripts/[name]__[hash].js',
        assetFileNames: 'styles/[name]__[hash].[ext]',
      }
    }
  },
});
