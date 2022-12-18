import { defineConfig } from 'vite'
import path from 'path'

// ビルド先を標準の ./dist ディレクトリから変更する場合に使用
//const distDir = path.join(__dirname, './', 'public_html', path.basename(__dirname))

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    //outDir: distDir
    outDir: './dist'
  }
})
