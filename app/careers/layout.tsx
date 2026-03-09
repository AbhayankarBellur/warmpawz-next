import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/shared/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata({
  title: 'Careers at Warmpawz – Join India\'s Pet Care Platform',
  description: 'Join the Warmpawz team and help build India\'s most trusted pet care platform. Explore open roles in tech, marketing, and pet care.',
  url: '/careers',
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Careers', url: '/careers' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}
