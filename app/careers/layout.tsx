import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Careers',
  description: 'Join the WarmPawz team and help us build India\'s most trusted pet care platform. Explore career opportunities and make a difference in pet care.',
  url: '/careers',
});

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
