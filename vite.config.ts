// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));


export default defineConfig({
  plugins: [mcpPlugin()],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    resolve: {
      alias: {
        "entities/lib/decode.js": path.resolve(rootDir, "node_modules/entities/lib/decode.js"),
        "entities/lib/encode.js": path.resolve(rootDir, "node_modules/entities/lib/encode.js"),
        entities: path.resolve(rootDir, "node_modules/entities"),
      },
    },
    define: {
      // Data dell'ultima pubblicazione: alimenta la firma "Verificato il" negli articoli.
      __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
    },

    build: {
      // Minificazione esplicita del bundle client (audit SEO: "Minimizza JavaScript")
      minify: "esbuild",
      cssMinify: true,
      target: "es2020",
    },
    esbuild: {
      legalComments: "none",
      drop: ["debugger"],
      pure: ["console.debug"],
    },
  },
});
