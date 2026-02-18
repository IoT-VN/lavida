'use client';

import { SectionWrapper } from '@/components/ui/section-wrapper';

export function ProjectOverviewSection() {
  const stats = [
    { value: '25+', label: 'Tầng cao' },
    { value: '350+', label: 'Căn hộ cao cấp' },
    { value: '30+', label: 'Tiện ích đẳng cấp' },
    { value: '70%', label: 'Diện tích mảng xanh' },
  ];

  const highlights = [
    {
      title: 'Vị Trí Kim Cương',
      description: 'Mặt tiền đường lớn, cách biển 200m, trung tâm thành phố Vũng Tàu',
      icon: '📍',
    },
    {
      title: 'Thiết Kế Đẳng Cấp',
      description: 'Thiết kế bởi tập đoàn kiến trúc sư hàng đầu, phong cách modern luxury',
      icon: '🏛️',
    },
    {
      title: 'Tiện Ích All-in-One',
      description: 'Hồ bơi, gym, spa, nhà hàng, thương mại dịch vụ ngay trong tòa nhà',
      icon: '🎯',
    },
    {
      title: 'Pháp Lý Hoàn Thiện',
      description: 'Sổ hồng riêng từng căn, pháp lý minh bạch, giao dịch an toàn',
      icon: '✅',
    },
  ];

  return (
    <SectionWrapper id="overview">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-neutral-900">
            Tổng Quan Dự Án
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            La Vida Residences - Tuyên ngôn sống thượng lưu tại thành phố biển Vũng Tàu
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">
                {stat.value}
              </div>
              <div className="text-neutral-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-bold mb-3 font-heading">{highlight.title}</h3>
              <p className="text-neutral-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Urgency Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary-500 to-primary-700 rounded-lg p-8 text-white text-center">
          <div className="inline-block px-4 py-2 bg-accent-500 rounded-full text-sm font-bold mb-4">
            ⏰ Ưu đãi giới hạn - Chỉ còn 5 căn last view đẹp
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Đăng ký hôm nay - Nhận ngay chiết khấu 5% + Quà tặng nội thất 50 triệu
          </h3>
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
          >
            Đăng Ký Ngay Để Nhận Ưu Đãi
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
