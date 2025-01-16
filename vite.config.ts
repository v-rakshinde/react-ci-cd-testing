import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: process.env.VITE_BASE_URL || '/react-ci-cd-testing/',
// })

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  console.log('Current mode:', mode); // This will show the current mode during the build process

  // Log the VITE_BASE_URL based on the current environment
  console.log('VITE_BASE_URL:', env.VITE_BASE_URL);

  return {
    plugins: [react()],
    base: env.VITE_BASE_URL || '/react-ci-cd-testing/', // Default to /react-ci-cd-testing if VITE_BASE_URL is not set
  };
});