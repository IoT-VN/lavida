'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { NAV_LINKS, CONTACT } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus trap and body scroll lock for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Focus first link in menu
      const firstLink = menuRef.current?.querySelector('a');
      firstLink?.focus();

      // Lock body scroll
      document.body.style.overflow = 'hidden';

      // Trap focus within menu
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
          toggleButtonRef.current?.focus(); // Return focus to toggle button
          return;
        }

        // Tab/Shift+Tab cycling
        if (e.key === 'Tab') {
          const focusableElements = menuRef.current?.querySelectorAll(
            'a, button, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusableElements || focusableElements.length === 0) return;

          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

          if (e.shiftKey) {
            // Shift+Tab: if at first element, cycle to last
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab: if at last element, cycle to first
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      // Unlock body scroll when menu closes
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className={`text-2xl font-bold font-heading ${isScrolled ? 'text-primary-500' : 'text-white'}`}>
              La Vida
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-neutral-700' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={`tel:${CONTACT.phone}`}
              className={`font-semibold ${isScrolled ? 'text-primary-500' : 'text-white'}`}
            >
              {CONTACT.phone}
            </a>
            <Button
              variant={isScrolled ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Đăng Ký Ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={toggleButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className={`w-6 h-6 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="md:hidden bg-white border-t border-neutral-200"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-neutral-700 font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${CONTACT.phone}`} className="text-primary-500 font-semibold py-2">
                {CONTACT.phone}
              </a>
              <Button
                variant="primary"
                fullWidth
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMobileMenuOpen(false);
                }}
              >
                Đăng Ký Ngay
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
