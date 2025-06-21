import { defineConfig, loadEnv } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [sveltekit()],
    define: {
      'import.meta.env.VITE_API_SERVER_URL': JSON.stringify(env.VITE_API_SERVER_URL),
      'import.meta.env.VITE_API_CLIENT_URL': JSON.stringify(env.VITE_API_CLIENT_URL),
      'import.meta.env.VITE_API_STORAGE_URL': JSON.stringify(env.VITE_API_STORAGE_URL),
    }
  };
});
