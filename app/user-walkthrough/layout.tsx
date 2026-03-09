import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'User Guide',
  description: 'Learn how to use WarmPawz platform - a complete guide for pet parents to find and book trusted pet care services.',
  url: '/user-walkthrough',
});

export default function UserWalkthroughLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
