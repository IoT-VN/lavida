'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { Card } from '@/components/ui/card';
import { properties } from '@/data/properties';
import Image from 'next/image';

export function PropertyGallerySection() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredProperties =
    selectedType === 'all' ? properties : properties.filter((p) => p.type === selectedType);

  const types = ['all', '1BR', '2BR', '3BR', 'Penthouse'];

  return (
    <SectionWrapper id="properties" variant="light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-neutral-900">
            Danh Mục Căn Hộ
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Đa dạng loại hình căn hộ cao cấp, phù hợp mọi nhu cầu ở thực và đầu tư
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedType === type
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {type === 'all' ? 'Tất Cả' : type}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.images[0]}
                  alt={property.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {property.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-heading">{property.name}</h3>
                <p className="text-neutral-600 text-sm mb-4">{property.description}</p>
                <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
                  <span>📐 {property.size}</span>
                  <span>🛏️ {property.bedrooms} PN</span>
                  <span>🚿 {property.bathrooms} WC</span>
                </div>
                <button
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Xem Chi Tiết
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
