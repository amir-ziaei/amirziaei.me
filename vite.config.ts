import { reactRouter } from '@react-router/dev/vite'
import { cloudflareDevProxy } from '@react-router/dev/vite/cloudflare'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import cssnano from 'cssnano'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ isSsrBuild }) => ({
  build: {
    rollupOptions: isSsrBuild
      ? {
          input: './workers/app.ts',
        }
      : undefined,
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        ...(process.env.NODE_ENV === 'production' ? [cssnano] : []),
      ],
    },
  },
  plugins: [
    cloudflareDevProxy({
      getLoadContext({ context }) {
        return { cloudflare: context.cloudflare }
      },
    }),
    reactRouter(),
    tsconfigPaths(),
  ],
}))
