'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { floorPlans } from '@/data/floor-plans';
import Image from 'next/image';

export function FloorPlansSection() {
  const [selectedPlan, setSelectedPlan] = useState(floorPlans[0]);

  return (
    <SectionWrapper id="floor-plans" variant="light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-neutral-900">
            Mặt Bằng Thiết Kế
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Thiết kế tối ưu không gian, công năng hợp lý, thẩm mỹ hiện đại
          </p>
        </div>

        {/* Unit Type Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {floorPlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedPlan.id === plan.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              {plan.unitType}
            </button>
          ))}
        </div>

        {/* Floor Plan Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={selectedPlan.image}
              alt={selectedPlan.unitType}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-heading">{selectedPlan.unitType}</h3>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-neutral-500 text-sm">Diện tích</p>
                  <p className="text-xl font-bold">{selectedPlan.size}</p>
                </div>
                <div>
                  <p className="text-neutral-500 text-sm">Giá tham khảo</p>
                  <p className="text-xl font-bold text-primary-500">{selectedPlan.price}</p>
                </div>
                <div>
                  <p className="text-neutral-500 text-sm">Phòng ngủ</p>
                  <p className="text-xl font-bold">{selectedPlan.bedrooms}</p>
                </div>
                <div>
                  <p className="text-neutral-500 text-sm">Phòng tắm</p>
                  <p className="text-xl font-bold">{selectedPlan.bathrooms}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Tải PDF Mặt Bằng Chi Tiết
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
