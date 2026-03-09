import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Policies & Terms',
  description: 'Read WarmPawz policies, terms of service, privacy policy, and guidelines for pet parents and service providers.',
  url: '/policies',
});

export default function PoliciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
