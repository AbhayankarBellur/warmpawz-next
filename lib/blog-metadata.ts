import { Metadata } from 'next';
import { blogArticles } from '@/data/blogArticles';
import { generateMetadata } from './metadata';

export function getBlogArticleMetadata(articleIndex: number): Metadata | null {
  const article = blogArticles[articleIndex];
  
  if (!article) return null;

  // Convert date string to ISO format
  const dateObj = new Date(article.date);
  const isoDate = dateObj.toISOString();

  return generateMetadata({
    title: article.title,
    description: article.excerpt,
    image: article.image,
    url: `/blog/${articleIndex + 1}`,
    type: 'article',
    publishedTime: isoDate,
    author: article.author,
  });
}

export function getBlogArticle(articleIndex: number) {
  return blogArticles[articleIndex] || null;
}
