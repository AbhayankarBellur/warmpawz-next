import { StructuredData } from '@/components/shared/StructuredData';
import { generateFAQSchema } from '@/lib/structured-data';

const homeFAQs = [
  {
    question: 'What services does Warmpawz offer?',
    answer: 'Warmpawz connects pet parents with services such as grooming, veterinary care, training, boarding, daycare, nutrition planning, and pet adoption across India.',
  },
  {
    question: 'How do I find pet services near me on Warmpawz?',
    answer: 'Warmpawz offers hyperlocal service discovery based on your location and your pet\'s specific needs, helping you find verified local providers for grooming, vet visits, training, and more.',
  },
  {
    question: 'Is Warmpawz available across India?',
    answer: 'Yes. Warmpawz is building a nationwide network of verified pet care providers and is expanding to cover cities and towns across India.',
  },
  {
    question: 'How does Warmpawz verify its service providers?',
    answer: 'Warmpawz focuses on transparency and community referrals. Providers are onboarded through a verification process that includes shared standards, community feedback, and clear provider information.',
  },
];

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = generateFAQSchema(homeFAQs);

  return (
    <>
      <StructuredData data={faqSchema} />
      {children}
    </>
  );
}
