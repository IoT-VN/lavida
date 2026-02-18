'use client';

import { SectionWrapper } from '@/components/ui/section-wrapper';
import { Card } from '@/components/ui/card';

export function PricingSection() {
  const pricingTiers = [
    {
      name: '1 Bedroom',
      size: '48m² - 62m²',
      price: '2.3 tỷ',
      features: ['View biển/trành phố', 'Nội thất cơ bản', 'Hỗ trợ vay 70%', 'Chiết khấu 3%'],
      popular: false,
    },
    {
      name: '2 Bedroom',
      size: '68m² - 85m²',
      price: '3.5 tỷ',
      features: [
        'View biển panoramic',
        'Nội thất cao cấp',
        'Hỗ trợ vay 70%',
        'Chiết khấu 5%',
        'Tặng 1 năm phí quản lý',
      ],
      popular: true,
    },
    {
      name: '3 Bedroom',
      size: '95m² - 120m²',
      price: '5.2 tỷ',
      features: [
        'View biển đa hướng',
        'Nội thất premium',
        'Hỗ trợ vay 70%',
        'Chiết khấu 5%',
        'Tặng 2 năm phí quản lý',
      ],
      popular: false,
    },
  ];

  return (
    <SectionWrapper id="pricing">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-neutral-900">
            Bảng Giá & Chính Sách
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Giá tốt nhất thị trường - Chính sách thanh toán linh hoạt - Ưu đãi giới hạn
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`p-8 relative ${tier.popular ? 'border-2 border-accent-500 shadow-xl' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Phổ Biến Nhất
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 font-heading">{tier.name}</h3>
                <p className="text-neutral-500">{tier.size}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary-500">{tier.price}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`w-full py-3 rounded-lg font-bold transition-colors ${
                  tier.popular
                    ? 'bg-accent-500 hover:bg-accent-600 text-white'
                    : 'bg-primary-500 hover:bg-primary-600 text-white'
                }`}
              >
                Đăng Ký Ngay
              </button>
            </Card>
          ))}
        </div>

        {/* Installment Plan */}
        <div className="bg-neutral-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8 font-heading">Chiết Khấu Thanh Toán Nhanh</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">3%</div>
              <div className="text-neutral-600">Thanh toán 95% trong 30 ngày</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">2%</div>
              <div className="text-neutral-600">Thanh toán 95% trong 60 ngày</div>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent-500 mb-2">1%</div>
              <div className="text-neutral-600">Thanh toán 95% trong 90 ngày</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
