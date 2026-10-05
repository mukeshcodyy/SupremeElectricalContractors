// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Production domain, used for canonical URLs, the sitemap and social share tags.
  site: 'https://supreme-electrical.au',

  // Astro 7 defaults to JSX whitespace rules, which drop the space between a word
  // and a link on the next line ("call<a>0437…</a>"). Lossless compression keeps copy intact.
  compressHTML: true,

  build: {
    // Inline the CSS so the first paint never waits on a stylesheet request.
    inlineStylesheets: 'always',
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/404'),
    }),
  ],

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Archivo',
      cssVariable: '--font-archivo',
      fallbacks: ['Arial', 'sans-serif'],
      options: {
        variants: [
          {
            src: ['@fontsource-variable/archivo/files/archivo-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
