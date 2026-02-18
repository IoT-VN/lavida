'use client';

import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/constants';
import Image from 'next/image';

export function HeroSection() {
  const message = encodeURIComponent('Xin chào, tôi quan tâm đến La Vida Residences Vung Tau.');
  const whatsappUrl = `https://wa.me/${CONTACT.whatsapp.replace('+', '')}?text=${message}`;

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
          alt="La Vida Residences Vung Tau - View biển"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-accent-500/90 backdrop-blur-sm rounded-full text-sm font-semibold">
            🔥 Hot Opening - Ưu đãi đặc biệt trong tháng này
          </div>

          {/* Heading */}
          <h1 className="text-hero md:text-hero-md font-bold leading-tight">
            La Vida Residences
            <br />
            <span className="text-accent-400">Vung Tau</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl font-light text-neutral-100 max-w-2xl mx-auto">
            Căn hộ cao cấp tầm nhìn biển panoramic - Vị trí đắc địa - Tiện ích hoàn thiện
          </p>

          {/* Key Points */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Tặng nội thất cao cấp</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Chiết khấu 5% thanh toán sớm</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Trả góp 0% trong 24 tháng</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Đăng Ký Nhận Bảng Giá
            </Button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border-white text-white">
                Chat WhatsApp
              </Button>
            </a>
          </div>

          {/* Phone CTA */}
          <div className="pt-4">
            <a href={`tel:${CONTACT.phone}`} className="text-xl md:text-2xl font-bold hover:text-accent-400 transition-colors">
              📞 {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
