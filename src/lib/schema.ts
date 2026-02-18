import { SITE_NAME, SITE_URL } from './metadata';

export function generateRealEstateListingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: SITE_NAME,
    description:
      'La Vida Residences Vung Tau - Dự án căn hộ cao cấp tầm nhìn biển panoramic, vị trí đắc địa tại trung tâm thành phố Vũng Tàu.',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Phường 2, Thành phố Vũng Tàu',
      addressLocality: 'Vũng Tàu',
      addressRegion: 'Bà Rịa - Vũng Tàu',
      addressCountry: 'VN',
    },
    numberOfBedrooms: ['1', '2', '3', '4'],
    numberOfBathrooms: ['1', '2', '3'],
    floorSize: ['48m²', '62m²', '85m²', '120m²', '200m²'],
    priceRange: '2.3 tỷ - 15 tỷ',
    amenities: [
      'Hồ bơi vô cực',
      'Fitness Center',
      'Spa & Sauna',
      'Sân Tennis',
      'Nhà hàng & Café',
      'Khu vui chơi trẻ em',
      'Siêu thị',
      'Bãi đậu xe',
      'An ninh 24/7',
      'Sky Lounge',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '125',
    },
  };
}

export function generateRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: SITE_NAME,
    image: `${SITE_URL}/logo.png`,
    description: 'Chủ đầu tư dự án La Vida Residences Vung Tau',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Phường 2, Thành phố Vũng Tàu',
      addressLocality: 'Vũng Tàu',
      addressRegion: 'Bà Rịa - Vũng Tàu',
      addressCountry: 'VN',
    },
    telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    email: process.env.NEXT_PUBLIC_EMAIL,
    url: SITE_URL,
    sameAs: [
      `https://www.facebook.com/${process.env.NEXT_PUBLIC_FACEBOOK_PAGE || 'lavidaresidences'}`,
    ],
    priceRange: '$$$',
  };
}

export function generateFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'La Vida Residences Vung Tau nằm ở đâu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La Vida Residences nằm tại Phường 2, Thành phố Vũng Tàu, cách biển 200m, vị trí đắc địa tại trung tâm thành phố.',
        },
      },
      {
        '@type': 'Question',
        name: 'Giá bán La Vida Residences là bao nhiêu?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Giá bán từ 2.3 tỷ cho căn 1PN đến 15 tỷ cho Penthouse. Có nhiều chính sách ưu đãi và chiết khấu thanh toán nhanh.',
        },
      },
      {
        '@type': 'Question',
        name: 'Dự án có pháp lý chưa?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dự án đã có pháp lý hoàn chỉnh, sổ hồng riêng từng căn, cam kết giao nhà đúng tiến độ.',
        },
      },
      {
        '@type': 'Question',
        name: 'Tiện ích tại La Vida Residences có gì?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hồ bơi vô cực, gym, spa, sân tennis, nhà hàng, khu vui chơi trẻ em, siêu thị, bãi đậu xe, an ninh 24/7 và hơn 30 tiện ích khác.',
        },
      },
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER,
      contactType: 'sales',
      availableLanguage: 'Vietnamese',
    },
    sameAs: [
      `https://www.facebook.com/${process.env.NEXT_PUBLIC_FACEBOOK_PAGE || 'lavidaresidences'}`,
    ],
  };
}
