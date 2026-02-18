'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { Button } from '@/components/ui/button';
import { CONTACT, UNIT_TYPES } from '@/lib/constants';
import { trackLead, trackContact } from '@/lib/tracking';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      email: formData.get('email') as string,
      unitInterest: formData.get('unitInterest') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        trackLead(data);
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactClick = (type: 'whatsapp' | 'zalo' | 'phone' | 'email', value?: string) => {
    trackContact({ type, value });
  };

  return (
    <SectionWrapper id="contact" variant="light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4 text-neutral-900">
            Đăng Ký Tư Vấn
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Để lại thông tin để nhận bảng giá chi tiết và ưu đãi đặc biệt
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 font-heading">Form Đăng Ký</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Họ và Tên <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Số Điện Thoại <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  pattern="[0-9]{10,11}"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Nhập số điện thoại (10-11 số)"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Nhập email của bạn"
                />
              </div>

              {/* Unit Interest */}
              <div>
                <label htmlFor="unitInterest" className="block text-sm font-medium text-neutral-700 mb-2">
                  Loại Căn Hộ Quan Tâm
                </label>
                <select
                  id="unitInterest"
                  name="unitInterest"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Chọn loại căn hộ</option>
                  {UNIT_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Lời Nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Nhập lời nhắn của bạn (nếu có)"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>
                {isSubmitting ? 'Đang gửi...' : 'Gửi Đăng Ký'}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  ✓ Gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  ✗ Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ qua hotline.
                </div>
              )}

              <p className="text-sm text-neutral-500 text-center">
                Bằng cách gửi form, bạn đồng ý với Chính sách bảo mật của chúng tôi
              </p>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-heading">Thông Tin Liên Hệ</h3>
              <div className="space-y-4">
                <a
                  href={`tel:${CONTACT.phone}`}
                  onClick={() => handleContactClick('phone', CONTACT.phone)}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Hotline</div>
                    <div className="font-bold text-lg">{CONTACT.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Email</div>
                    <div className="font-bold text-lg">{CONTACT.email}</div>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">WhatsApp</div>
                    <div className="font-bold text-lg">{CONTACT.whatsapp}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <span className="text-2xl font-bold">Z</span>
                  </div>
                  <div>
                    <div className="text-sm text-neutral-500">Zalo</div>
                    <div className="font-bold text-lg">{CONTACT.zalo}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-primary-500 text-white p-6 rounded-lg">
              <h4 className="font-bold mb-2">Giờ Làm Việc</h4>
              <p>Thứ 2 - Thứ 7: 8:00 - 18:00</p>
              <p>Chủ Nhật: 9:00 - 17:00</p>
              <p className="mt-2 text-sm opacity-90">Hỗ trợ 24/7 qua Hotline</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
