import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Pet Care Services',
  description: 'Discover comprehensive pet care services including adoption, veterinary care, grooming, training, boarding, and more. Trusted providers across India.',
  url: '/services',
});

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
