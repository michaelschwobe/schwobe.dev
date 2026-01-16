import netlify from "@netlify/vite-plugin";
import netlifyReactRouter from "@netlify/vite-plugin-react-router";
import { reactRouter } from "@react-router/dev/vite";
import { reactRouterDevTools } from "react-router-devtools";
import { defineConfig, type Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

/**
 * @see https://vite.dev/config/
 */
export default defineConfig({
  plugins: [
    reactRouterDevTools(),
    reactRouter(),
    tsconfigPaths(),
    netlifyReactRouter(),
    netlify() as Plugin,
  ],
});
