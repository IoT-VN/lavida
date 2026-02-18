export interface Property {
  id: string;
  name: string;
  type: '1BR' | '2BR' | '3BR' | 'Penthouse';
  size: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  images: string[];
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'exterior' | 'interior' | 'amenities';
}

export interface FloorPlan {
  id: string;
  unitType: string;
  size: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  pdfUrl?: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  unitInterest: string;
  message: string;
}
