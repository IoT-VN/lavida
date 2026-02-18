import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// In-memory rate limiting store
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

// Sanitize user input to prevent HTML injection
function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Check rate limit for IP address
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside the current window
  const validTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= RATE_LIMIT_REQUESTS) {
    return false;
  }

  // Add current timestamp
  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);

  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [key, value] of rateLimitMap.entries()) {
      const recent = value.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);
      if (recent.length === 0) {
        rateLimitMap.delete(key);
      } else {
        rateLimitMap.set(key, recent);
      }
    }
  }

  return true;
}

export async function POST(request: NextRequest) {
  // Get client IP for rate limiting
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ||
             request.headers.get('x-real-ip') ||
             'unknown';

  // Check rate limit
  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  // Only initialize Resend if API key is available
  const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
  try {
    const body = await request.json();
    const { name, phone, email, unitInterest, message } = body;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate phone number (Vietnamese format: 10-11 digits)
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone.replace(/\D/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Sanitize user inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedPhone = sanitizeInput(phone);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedUnitInterest = unitInterest ? sanitizeInput(unitInterest) : '';
    const sanitizedMessage = message ? sanitizeInput(message) : '';

    // Send email using Resend
    const emailData = {
      from: process.env.RESEND_FROM_EMAIL || 'noreply@yourdomain.com',
      to: process.env.RESEND_TO_EMAIL || process.env.NEXT_PUBLIC_EMAIL || 'info@lavida.vn',
      subject: `La Vida Residences - Lead từ ${sanitizedName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #1a56db 0%, #1e3a8a 100%); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1a56db; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 3px solid #1a56db; }
            .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🏢 La Vida Residences - Lead Mới</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Họ và Tên:</div>
                <div class="value">${sanitizedName}</div>
              </div>
              <div class="field">
                <div class="label">Số Điện Thoại:</div>
                <div class="value">${sanitizedPhone}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value">${sanitizedEmail}</div>
              </div>
              ${sanitizedUnitInterest ? `
              <div class="field">
                <div class="label">Loại Căn Hộ Quan Tâm:</div>
                <div class="value">${sanitizedUnitInterest}</div>
              </div>
              ` : ''}
              ${sanitizedMessage ? `
              <div class="field">
                <div class="label">Lời Nhắn:</div>
                <div class="value">${sanitizedMessage}</div>
              </div>
              ` : ''}
              <div class="field">
                <div class="label">Thời Gian:</div>
                <div class="value">${new Date().toLocaleString('vi-VN')}</div>
              </div>
            </div>
            <div class="footer">
              <p>Email này được gửi từ form đăng ký tại La Vida Residences landing page.</p>
              <p>Vui lòng liên hệ khách hàng trong vòng 24h để tối ưu tỷ lệ chuyển đổi.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // Only send email if RESEND_API_KEY is configured
    if (resend) {
      await resend.emails.send(emailData);
    } else {
      console.log('RESEND_API_KEY not configured. Email would be sent:', emailData);
    }

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Rate limiting middleware
export const runtime = 'edge';
