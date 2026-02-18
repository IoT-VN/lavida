declare global {
  interface Window {
    fbq?: (type: string, action: string, options?: Record<string, unknown>) => void;
    gtag?: (type: string, action: string, options?: Record<string, unknown>) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export interface LeadData {
  name: string;
  phone: string;
  email: string;
  unitInterest?: string;
  message?: string;
}

export interface ContactData {
  type: 'whatsapp' | 'zalo' | 'phone' | 'email';
  value?: string;
}

// Track lead submission (Meta Pixel + Google Ads)
export function trackLead(data: LeadData) {
  // Meta Pixel Lead Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: data.unitInterest || 'General Inquiry',
      content_category: 'real_estate',
      value: 1,
      currency: 'USD',
    });
  }

  // Google Ads Conversion
  if (typeof window !== 'undefined' && window.gtag && process.env.NEXT_PUBLIC_GOOGLE_ADS_ID) {
    window.gtag('event', 'conversion', {
      send_to: `${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}/lead_conversion`,
      value: 1.0,
      currency: 'USD',
    });
  }

  // GTM Data Layer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'lead_submission',
      lead_type: data.unitInterest || 'General Inquiry',
      phone: data.phone,
      email: data.email,
    });
  }

  console.log('Lead tracked:', data);
}

// Track contact click (WhatsApp, Zalo, Phone, Email)
export function trackContact(data: ContactData) {
  // Meta Pixel Contact Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_name: data.type,
      content_category: 'customer_service',
    });
  }

  // GTM Data Layer
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'contact_click',
      contact_type: data.type,
      contact_value: data.value || '',
    });
  }

  console.log('Contact tracked:', data);
}

// Track page view for custom events
export function trackPageView(pageName: string) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_name: pageName,
    });
  }
}

// Track CTA button clicks
export function trackCTA(buttonName: string, buttonLocation: string) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: buttonName,
      content_category: 'cta_click',
    });
  }

  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'cta_click',
      button_name: buttonName,
      button_location: buttonLocation,
    });
  }

  console.log('CTA tracked:', buttonName, buttonLocation);
}
