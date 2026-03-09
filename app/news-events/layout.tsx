import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';

export const metadata: Metadata = generateMetadata({
  title: 'News & Events',
  description: 'Stay updated with WarmPawz news, events, and announcements. Learn about pet care workshops, community events, and platform updates.',
  url: '/news-events',
});

export default function NewsEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
