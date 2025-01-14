import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' 
    ? '/react-ci-cd-testing/'  // Production base URL
    : process.env.BRANCH_NAME === 'dev' 
    ? '/react-ci-cd-testing/dev/'  // Development base URL
    : '/react-ci-cd-testing/staging/',  // Staging base URL
})
