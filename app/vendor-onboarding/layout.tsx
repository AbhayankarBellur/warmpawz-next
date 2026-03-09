import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/shared/StructuredData';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata({
  title: 'Vendor Onboarding – Register as a Pet Care Provider',
  description: 'Join Warmpawz as a verified service provider. Register your grooming, vet, training, or boarding business and reach pet parents across India.',
  url: '/vendor-onboarding',
});

const vendorFAQs = [
  {
    question: 'How does Warmpawz support pet service providers in India?',
    answer: 'Warmpawz brings service providers into a shared pet care ecosystem where they can connect with pet parents, learn from peers, and shape services that reflect Indian lifestyles. The platform supports transparency, collaboration, and responsible innovation across veterinary, grooming, boarding, training, and allied pet services.',
  },
  {
    question: 'Is Warmpawz only a listing platform for pet service providers?',
    answer: 'No. Warmpawz goes beyond listings by encouraging service providers to co-create care models, share knowledge, and build trust through verified practices and community participation. It is fully transactional and allows for service providers to sell products and services with integrated payment gateways and logistics integrations.',
  },
  {
    question: 'Can service providers create new or customised pet care services on Warmpawz?',
    answer: 'Yes. Warmpawz is designed to allow providers to experiment with new formats, localised offerings, and hybrid care models that suit different households, pet needs, and regional contexts across India.',
  },
  {
    question: 'Can I register to provide more than one service?',
    answer: 'Yes. Warmpawz recognizes that there could be more than one services offered by the same provider. With Transparent Onboarding rules, Warmpawz allows service providers to register multiple businesses and start offering their services quickly to the community.',
  },
  {
    question: 'What types of pet service providers can join Warmpawz?',
    answer: 'Warmpawz welcomes a wide range of pet care professionals, including veterinary clinics, groomers, boarding and daycare centres, dog walkers, trainers, behaviorists, nutritionists, Pet Cafes, holiday homes, resorts, relocation service providers, transport service providers and other allied pet service providers committed to responsible services.',
  },
];

export default function VendorOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Vendor Onboarding', url: '/vendor-onboarding' },
  ]);
  const faqSchema = generateFAQSchema(vendorFAQs);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      {children}
    </>
  );
}
