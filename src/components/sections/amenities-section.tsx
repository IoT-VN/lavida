import { SectionWrapper } from '@/components/ui/section-wrapper';
import { Card } from '@/components/ui/card';
import { amenities } from '@/data/amenities';

export function AmenitiesSection() {
  return (
    <SectionWrapper id="amenities">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-neutral-900">
            Tiện Ích Đẳng Cấp
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hệ thống tiện ích hoàn thiện, mang đến cuộc sống tiện nghi và đẳng cấp
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {amenities.map((amenity) => (
            <Card
              key={amenity.id}
              className="p-6 text-center hover:shadow-xl transition-shadow group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {amenity.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 font-heading">{amenity.name}</h3>
              <p className="text-neutral-600 text-sm">{amenity.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
