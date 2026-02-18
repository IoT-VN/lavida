import { SectionWrapper } from '@/components/ui/section-wrapper';
import { DEFAULT_METADATA } from '@/lib/metadata';

export const metadata = {
  ...DEFAULT_METADATA,
  title: 'Chính Sách Bảo Mật',
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date();

  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold font-heading mb-8 text-neutral-900">Chính Sách Bảo Mật</h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Thu Thập Thông Tin</h2>
            <p>
              Chúng tôi thu thập thông tin cá nhân bạn cung cấp khi đăng ký tư vấn, bao gồm: họ tên,
              số điện thoại, email, và các thông tin liên quan khác. Thông tin này được sử dụng để:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cung cấp thông tin về dự án La Vida Residences</li>
              <li>Liên hệ tư vấn và hỗ trợ khách hàng</li>
              <li>Gửi cập nhật về tiến độ dự án và ưu đãi đặc biệt</li>
              <li>Cải thiện trải nghiệm sử dụng website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Sử Dụng Thông Tin</h2>
            <p>Thông tin của bạn sẽ được sử dụng đúng mục đích đã nêu và không được chuyển giao cho bên thứ ba trừ khi:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Có sự đồng ý của bạn</li>
              <li>Được yêu cầu bởi pháp luật</li>
              <li>Bắt buộc để bảo vệ quyền lợi hợp pháp của chúng tôi</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Bảo Mật Thông Tin</h2>
            <p>
              Chúng tôi áp dụng các biện pháp bảo mật tiêu chuẩn ngành để bảo vệ thông tin cá nhân
              của bạn, bao gồm:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mã hóa dữ liệu trong quá trình truyền tải</li>
              <li>Hạn chế quyền truy cập thông tin</li>
              <li>Đánh giá thường xuyên quy trình bảo mật</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Cookie</h2>
            <p>
              Website sử dụng cookie để cải thiện trải nghiệm người dùng và phân tích lưu lượng truy cập.
              Bạn có thể tắt cookie trong trình duyệt nếu muốn.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Quyền Của Bạn</h2>
            <p>Bạn có quyền:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Truy cập thông tin cá nhân của mình</li>
              <li>Yêu cầu chỉnh sửa hoặc xóa thông tin</li>
              <li>Thuận tình đồng ý cho việc sử dụng thông tin</li>
              <li>Yêu cầu ngừng nhận email marketing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Liên Hệ</h2>
            <p>
              Để biết thêm thông tin hoặc có thắc mắc về Chính sách bảo mật, vui lòng liên hệ:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Email: info@lavida.vn</li>
              <li>Hotline: +84xxxxxxxxx</li>
            </ul>
          </section>

          <section className="text-sm text-neutral-600">
            <p>Cập nhật lần cuối: {currentDate.toLocaleDateString('vi-VN')}</p>
          </section>
        </div>
      </div>
    </SectionWrapper>
  );
}
