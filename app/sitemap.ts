import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://deerdan.in';
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      images: [
        `${baseUrl}/images/official-deer-logo.jpg`,
        `${baseUrl}/images/store-facade.jpg`,
        `${baseUrl}/images/rack-quiet-luxury.jpg`,
      ],
    },
    {
      url: `${baseUrl}/store`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        `${baseUrl}/images/store-facade.jpg`,
        `${baseUrl}/images/rack-street-atelier.jpg`,
        `${baseUrl}/images/rack-womens-arch.jpg`,
      ],
    },
    {
      url: `${baseUrl}/collections`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        `${baseUrl}/images/signature-model.jpg`,
        `${baseUrl}/images/signature-pink-shirt.jpg`,
        `${baseUrl}/images/model-mocha-brown-shirt.jpg`,
      ],
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        `${baseUrl}/images/craft-tags-strip.jpg`,
        `${baseUrl}/images/denim-jeans-leather-patch.jpg`,
        `${baseUrl}/images/packaging-luxury-shopping-bag.jpg`,
      ],
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${baseUrl}/images/packaging-single-bag.jpg`],
    },
  ];
}

