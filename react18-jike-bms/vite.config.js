import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
// import visualizer from 'rollup-plugin-visualizer';
// import { bundleVisualizer } from 'vite-bundle-visualizer'

// https://vite.dev/config/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default defineConfig({
  plugins: [
    react(),
    // visualizer({
    //   open: true,//打包结束后自动打开报告
    //   filename: 'bundle-analysis.html',//报告文件名
    // }),
    // bundleVisualizer({
    //   open: false,
    //   filename: 'bundle-analysis.html',
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  }
})
