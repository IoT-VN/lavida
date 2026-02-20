import Link from 'next/link';
import { CONTACT } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-xl font-bold font-heading mb-4">La Vida Residences</h3>
            <p className="text-neutral-400 mb-4">
              Dự án căn hộ cao cấp tại Vũng Tàu với tầm nhìn biển panoramic, tiện ích hoàn thiện và
              chất lượng xây dựng đẳng cấp.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liên Kết Nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="hover:text-primary-500 transition-colors">
                  Tổng Quan
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-primary-500 transition-colors">
                  Căn Hộ
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-primary-500 transition-colors">
                  Tiện Ích
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-primary-500 transition-colors">
                  Vị Trí
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Liên Hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${CONTACT.phone}`} className="hover:text-primary-500 transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary-500 transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-sm">
              © {currentYear} La Vida Residences. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy-policy" className="hover:text-primary-500 transition-colors">
                Chính Sách Bảo Mật
              </Link>
            </div>
          </div>
          <p className="text-neutral-600 text-xs mt-4 text-center">
            Thông tin trên website chỉ mang tính chất tham khảo. Vui lòng liên hệ trực tiếp để có thông
            tin chính xác nhất.
          </p>
        </div>
      </div>
    </footer>
  );
}
