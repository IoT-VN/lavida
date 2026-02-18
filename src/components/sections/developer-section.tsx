import { SectionWrapper } from '@/components/ui/section-wrapper';
import { Card } from '@/components/ui/card';

export function DeveloperSection() {
  const credentials = [
    { title: '15+ Năm', description: 'Kinh nghiệm phát triển BĐS' },
    { title: '20+', description: 'Dự án已完成' },
    { title: '5000+', description: 'Căn hộ handed over' },
    { title: '100%', description: 'Dự án đúng tiến độ' },
  ];

  const achievements = [
    'Top 10 Nhà phát triển BĐS uy tín Việt Nam 2023',
    'Chứng chỉ ISO 9001:2015 về quản lý chất lượng',
    'Giải thưởng Dự án Căn hộ tốt nhất năm 2022',
    'Cam kết bàn giao đúng tiến độ',
    'Dịch vụ quản lý chuyên nghiệp 24/7',
    'Bảo hành 5 năm công trình',
  ];

  return (
    <SectionWrapper id="developer">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-neutral-900">
            Chủ Đầu Tư Uy Tín
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Cam kết chất lượng - Tiến độ - Uy tín hàng đầu thị trường
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {credentials.map((cred, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-3xl font-bold text-primary-500 mb-2">{cred.title}</div>
              <div className="text-neutral-600 text-sm">{cred.description}</div>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-heading">Thành Tựu & Chứng Nhận</h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Info */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-4 font-heading">Cam Kết Của Chúng Tôi</h3>
            <div className="space-y-4 text-neutral-600">
              <p>
                Với hơn 15 năm kinh nghiệm trong ngành bất động sản, chúng tôi tự hào đã mang đến
                cho hàng nghìn gia đình Việt những tổ ấm chất lượng và đẳng cấp.
              </p>
              <p>
                Mỗi dự án là tâm huyết của cả đội ngũ kiến trúc sư, kỹ sư và nhà quản lý chuyên
                nghiệp. Chúng tôi cam kết:
              </p>
              <ul className="space-y-2">
                <li>• Chất lượng xây dựng đạt chuẩn quốc tế</li>
                <li>• Thiết kế tối ưu và thẩm mỹ</li>
                <li>• Tiến độ bàn giao đúng cam kết</li>
                <li>• Dịch vụ hậu mãi tận tâm</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
