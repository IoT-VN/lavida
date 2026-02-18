import { SectionWrapper } from '@/components/ui/section-wrapper';
import { Card } from '@/components/ui/card';

export function LocationSection() {
  const nearbyPlaces = [
    { name: 'Bãi Trước', distance: '200m', type: 'biển' },
    { name: 'Chợ Vũng Tàu', distance: '500m', type: 'chợ' },
    { name: 'Bệnh Viện Lê Lợi', distance: '1km', type: 'bệnh viện' },
    { name: 'Trường Quốc Tế', distance: '1.5km', type: 'giáo dục' },
    { name: 'Big C Vũng Tàu', distance: '2km', type: 'mua sắm' },
    { name: 'Sân Bay Vũng Tàu', distance: '5km', type: 'sân bay' },
  ];

  return (
    <SectionWrapper id="location" variant="light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-neutral-900">
            Vị Trí Đắc Địa
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Trung tâm thành phố Vũng Tàu, kết nối hoàn hảo với tất cả tiện ích
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4782826327982!2d107.0842433148156!3d10.346024992637684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31775768b7ed6bb1%3A0x5f8e1e6c6c6c6c6c!2sVung%20Tau%2C%20Ba%20Ria%20-%20Vung%20Tau!5e0!3m2!1sen!2s!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Nearby Places */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-heading">Tiện Ích Xung Quanh</h3>
            <div className="grid gap-4">
              {nearbyPlaces.map((place, index) => (
                <Card key={index} className="p-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{place.name}</div>
                    <div className="text-sm text-neutral-500 capitalize">{place.type}</div>
                  </div>
                  <div className="text-primary-500 font-bold">{place.distance}</div>
                </Card>
              ))}
            </div>

            <div className="mt-6 bg-primary-500 text-white p-6 rounded-lg">
              <h4 className="font-bold mb-2">Kết Giao Thông Tuyệt Vời</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Cách TP.HCM 125km qua Cao tốc Long Thành - Dầu Giây</li>
                <li>✓ 45 phút từ cảng Cát Lái</li>
                <li>✓ Gần quốc lộ 51</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
