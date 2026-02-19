import { Metadata } from 'next';

export const SITE_NAME = 'La Vida Residences Vung Tau';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

export const DEFAULT_METADATA: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'La Vida Residences Vung Tau - Dự án căn hộ cao cấp tầm nhìn biển. Vị trí đắc địa, tiện ích hoàn thiện, giá tốt nhất hôm nay. Liên hệ ngay để nhận bảng giá chi tiết.',
  keywords: [
    'La Vida Residences',
    'chung cu Vung Tau',
    'can ho cao cap Vung Tau',
    'bat nhan san Vung Tau',
    'can ho view bien',
    'dau tu bat dong san Vung Tau',
  ].join(', '),
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || '/',
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: SITE_URL,
    title: SITE_NAME,
    description:
      'La Vida Residences Vung Tau - Dự án căn hộ cao cấp tầm nhìn biển. Vị trí đắc địa, tiện ích hoàn thiện.',
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description:
      'La Vida Residences Vung Tau - Dự án căn hộ cao cấp tầm nhìn biển. Vị trí đắc địa, tiện ích hoàn thiện.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID
    ? {
        'fb:app_id': process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
      }
    : undefined,
};

export function getPageMetadata({
  title,
  description,
  path = '',
  image = '/og-image.jpg',
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      url,
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [image],
    },
  };
}
