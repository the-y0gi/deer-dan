import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://deerdan.in';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        // Explicitly allow Google AI Overviews and major LLM Search Crawlers
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Google-Extended',
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot',
          'Applebot',
          'bingbot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

