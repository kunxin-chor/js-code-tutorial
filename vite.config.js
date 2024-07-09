import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_QUESTIONS_ROOT_URL': JSON.stringify(env.VITE_QUESTIONS_ROOT_URL),
      'import.meta.env.VITE_MANIFEST_URL': JSON.stringify(env.VITE_MANIFEST_URL),
    },
    build: {
      outDir: 'dist',
    },
  }
})