import { Metadata } from 'next';
import { getBlogArticleMetadata } from '@/lib/blog-metadata';
import { StructuredData } from '@/components/shared/StructuredData';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { blogArticles } from '@/data/blogArticles';

type Props = {
  params: Promise<{ id: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const articleIndex = parseInt(id) - 1;
  const metadata = getBlogArticleMetadata(articleIndex);
  
  return metadata || {
    title: 'Article Not Found',
    description: 'The requested article could not be found.',
  };
}

export default async function BlogArticleLayout({ params, children }: Props) {
  const { id } = await params;
  const articleIndex = parseInt(id) - 1;
  const article = blogArticles[articleIndex];

  if (!article) {
    return <>{children}</>;
  }

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: new Date(article.date).toISOString(),
    author: article.author,
    url: `/blog/${id}`,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: article.title, url: `/blog/${id}` },
  ]);

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}

export async function generateStaticParams() {
  return blogArticles.map((_, index) => ({
    id: String(index + 1),
  }));
}
