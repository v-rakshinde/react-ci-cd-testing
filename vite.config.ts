import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? '/my-react-app/'  // Production base URL
    : process.env.BRANCH_NAME === 'dev' 
    ? '/my-react-app/dev/'  // Development base URL
    : '/my-react-app/staging/',  // Staging base URL
})
