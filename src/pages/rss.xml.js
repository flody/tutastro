import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'Mon voyage d\'apprentissage d\'Astro',
    site: 'https://tutastroflo.netlify.app',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>fr-fr</language>`,
  });
}