import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/shared/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata({
  title: 'Pet Care Blog – Expert Tips, Guides & Advice for Dog & Cat Parents',
  description: 'Read expert pet care articles on grooming, training, health, nutrition, and behaviour. Comprehensive guides for dog and cat parents in India.',
  url: '/blog',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}
