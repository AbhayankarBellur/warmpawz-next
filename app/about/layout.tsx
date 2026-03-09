import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/shared/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata({
  title: 'About Warmpawz | Pet Care Platform Connecting Pet Parents & Professionals',
  description: 'Meet the team behind Warmpawz. Our mission is to connect pet parents with verified, compassionate pet care professionals across India.',
  url: '/about',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}
