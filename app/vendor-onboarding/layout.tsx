import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Vendor Onboarding',
  description: 'Join WarmPawz as a service provider. Learn how to register and offer your pet care services to thousands of pet parents across India.',
  url: '/vendor-onboarding',
});

export default function VendorOnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
