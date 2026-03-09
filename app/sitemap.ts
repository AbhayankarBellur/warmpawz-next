import { MetadataRoute } from 'next';
import { blogArticles } from '@/data/blogArticles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://warmpawz.com';
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/blog',
    '/careers',
    '/services',
    '/policies',
    '/news-events',
    '/user-walkthrough',
    '/vendor-onboarding',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Blog article pages
  const blogPages = blogArticles.map((article, index) => ({
    url: `${baseUrl}/blog/${index + 1}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
