import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// export default ({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return defineConfig({
//     plugins: [react(), tailwindcss()],
//     server: {
//       host: '0.0.0.0',
//       port: 5173,
//       proxy: {
//         '/api/v1': {
//           target: env.VITE_PROXY_ADDRESS,
//           changeOrigin: true,
//           rewrite: (path) => path.replace(/^\/api\/v1/, '/api/v1'),
//         },
//       },
//     },
//     define: {
//       __APP_ENV__: JSON.stringify(env.VITE_ENV),
//     },
//   });
// };


import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return defineConfig({
    plugins: [react(), tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      proxy: {
        '/api/v1': {
          target: 'k8s-default-reactapp-9a3b9418e9-8a3841d3a0aa2eaf.elb.ap-northeast-2.amazonaws.com',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v1/, '/api/v1'),
        },
      },
    },
  });
};