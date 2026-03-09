import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { StructuredData } from '@/components/shared/StructuredData';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/structured-data';

export const metadata: Metadata = generateMetadata({
  title: 'User Guide – How to Find & Book Pet Care on Warmpawz',
  description: 'Step-by-step guide for pet parents to discover, compare, and book trusted pet care services on the Warmpawz platform.',
  url: '/user-walkthrough',
});

const userFAQs = [
  {
    question: 'What is Warmpawz and how does it help pet parents?',
    answer: 'Warmpawz is a trusted pet care platform that helps pet parents discover verified services, learn from shared experiences, and make informed decisions. It brings together care providers and community knowledge to support pets through every stage of life.',
  },
  {
    question: 'Can I find pet services near me on Warmpawz?',
    answer: 'Yes. Warmpawz helps pet parents discover local pet care services — including veterinary care, nutritionists, grooming, boarding, walking, and training — based on their location and their pet\'s specific needs. Warmpawz endeavors to be Hyperlocal in all its services.',
  },
  {
    question: 'How does Warmpawz ensure pet care services are trustworthy?',
    answer: 'Warmpawz focuses on transparency and verification by encouraging clear provider information, shared standards, and community feedback. This helps pet parents understand what to expect and choose services with greater confidence.',
  },
  {
    question: 'Is Warmpawz suitable for first-time pet parents?',
    answer: 'Absolutely! Warmpawz is designed to support both new and experienced pet parents by providing guidance, shared learning, and access to trusted pet care services, making it easier to navigate unfamiliar decisions.',
  },
  {
    question: 'Can pet parents contribute to the Warmpawz community?',
    answer: 'Yes. Pet parents are encouraged to share experiences, insights, and feedback that help strengthen the pet care ecosystem. Warmpawz values participation and collective learning as essential to better care.',
  },
];

export default function UserWalkthroughLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'User Guide', url: '/user-walkthrough' },
  ]);
  const faqSchema = generateFAQSchema(userFAQs);

  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      {children}
    </>
  );
}
