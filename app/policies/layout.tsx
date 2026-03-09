import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/shared/StructuredData';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata({
  title: 'Policies & Terms of Service',
  description: 'Read Warmpawz terms of service, privacy policy, refund policy, and guidelines for pet parents and service providers on the platform.',
  url: '/policies',
});

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Policies', url: '/policies' },
  ]);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      {children}
    </>
  );
}
