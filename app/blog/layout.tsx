import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'Pet Care Blog & Articles',
  description: 'Expert advice on pet care, training, health, nutrition, and behavior. Read our comprehensive guides for dog and cat parents in India.',
  url: '/blog',
});

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
