// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import cloudflare from '@astrojs/cloudflare';
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      MAILER_SERVICE: envField.string({ context: "server", access: "secret" }),
      MAILER_EMAIL: envField.string({ context: "server", access: "secret" }),
      MAILER_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },

  output: 'server',
  adapter: cloudflare(),
  experimental: {
    session: true, 
  }
});
