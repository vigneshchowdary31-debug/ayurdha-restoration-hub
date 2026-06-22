// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Vercel sets VERCEL=1 in its build environment. When deploying there we
// switch Nitro to the `vercel` preset and let TanStack Start use its default
// server entry (the Cloudflare-style `src/server.ts` fetch handler doesn't
// match Vercel's Node serverless adapter).
const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  ...(isVercel
    ? { nitro: { preset: "vercel" } }
    : {
        tanstackStart: {
          // Redirect TanStack Start's bundled server entry to src/server.ts
          // (our Cloudflare SSR error wrapper). nitro/vite builds from this.
          server: { entry: "server" },
        },
      }),
});
