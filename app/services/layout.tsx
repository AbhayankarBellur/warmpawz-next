import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/shared/StructuredData';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata({
  title: 'Pet Care Services – Grooming, Vet, Training, Boarding & More',
  description: 'Explore Warmpawz pet care services: adoption, veterinary consultations, grooming, training, boarding, nutrition, and wellness. Verified providers across India.',
  url: '/services',
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ]);
  const serviceSchema = generateServiceSchema();

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      {children}
    </>
  );
}
