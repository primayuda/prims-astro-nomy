import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/static';

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-nomy.vercel.app",
  integrations: [mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark-dimmed'
    },
    gfm: true
  }), sitemap(), react(), tailwind({
    applyBaseStyles: false
  }), alpinejs({ entrypoint: '/src/entrypoint' })],
  adapter: vercel({
    analytics: true
  })
});