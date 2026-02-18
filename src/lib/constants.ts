export const NAV_LINKS = [
  { label: 'Tổng Quan', href: '#overview' },
  { label: 'Căn Hộ', href: '#properties' },
  { label: 'Tiện Ích', href: '#amenities' },
  { label: 'Vị Trí', href: '#location' },
  { label: 'Liên Hệ', href: '#contact' },
] as const;

export const CONTACT = {
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+84xxxxxxxxx',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+84xxxxxxxxx',
  zalo: process.env.NEXT_PUBLIC_ZALO_NUMBER || 'xxxxxxxxx',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@lavida.vn',
  address: 'Phường 2, Thành phố Vũng Tàu, Bà Rịa - Vũng Tàu',
} as const;

export const SITE_NAME = 'La Vida Residences Vung Tau';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';

export const UNIT_TYPES = [
  { value: '1BR', label: '1 Bedroom' },
  { value: '2BR', label: '2 Bedroom' },
  { value: '3BR', label: '3 Bedroom' },
  { value: 'Penthouse', label: 'Penthouse' },
] as const;
