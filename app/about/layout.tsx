import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'About Us',
  description: 'Learn about WarmPawz - our mission, vision, values, and the team behind India\'s trusted pet care platform. Connecting pet parents with compassionate care providers.',
  url: '/about',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
