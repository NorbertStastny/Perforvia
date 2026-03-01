import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: set base to '/<repo>/' when deploying.
// Example: base: '/perfovia-landing/'
export default defineConfig({
  plugins: [react()],
})
