import { Metadata } from 'next';

export const siteConfig = {
  name: 'WarmPawz',
  description: 'Warmpawz is a trusted platform connecting pet parents with verified pet care services including grooming, veterinary care, training, boarding, and pet wellness across India.',
  url: 'https://warmpawz.com',
  ogImage: 'https://warmpawz.com/og-image.png',
  links: {
    twitter: 'https://twitter.com/warmpawz',
    facebook: 'https://facebook.com/warmpawz',
    linkedin: 'https://www.linkedin.com/company/warmpawz',
  },
};

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  author,
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  author?: string;
}): Metadata {
  const fullTitle = title.includes('WarmPawz') ? title : `${title} | WarmPawz`;
  const fullUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: fullTitle,
    description,
    openGraph: {
      type,
      locale: 'en_IN',
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && publishedTime && {
        publishedTime,
        authors: author ? [author] : undefined,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@warmpawz',
    },
    alternates: {
      canonical: fullUrl,
    },
  };
}
