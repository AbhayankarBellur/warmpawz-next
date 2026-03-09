import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/shared/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata({
  title: 'News & Events – Pet Care Community Updates',
  description: 'Stay updated with Warmpawz news, pet care workshops, community events, and platform announcements across India.',
  url: '/news-events',
});

export default function NewsEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'News & Events', url: '/news-events' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}
