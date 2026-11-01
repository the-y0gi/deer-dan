'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BRAND_DATA } from '../data/brand';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Collections', href: '/collections' },
    { label: 'Flagship Store', href: '/store' },
    { label: 'About & Craft', href: '/about' },
    { label: 'Visit / Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3.5 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto max-w-[1280px] mx-auto px-5 lg:px-6 py-2.5 rounded-full bg-white/85 border border-black/8 backdrop-blur-xl shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-300"
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Meta */}
          <Link href="/" className="flex items-center gap-2.5 no-underline text-inherit group">
            <div className="relative w-[34px] h-[34px] rounded-full overflow-hidden flex items-center justify-center bg-[#111111] border border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.15)] shrink-0">
              <Image
                src="/images/official-deer-logo.jpg"
                alt="Deer & Dan Stag Logo"
                width={34}
                height={34}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold tracking-[0.18em] uppercase text-[1.05rem] leading-none text-[#121212]">
                Deer & Dan
              </span>
              <span className="text-[0.52rem] uppercase tracking-[0.2em] opacity-65 font-sans font-medium text-[#525252] mt-0.5">
                Flagship Showroom • Chhindwara
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden min-[960px]:flex items-center gap-7 text-[0.72rem] font-semibold tracking-[0.12em] uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-all duration-200 no-underline ${
                    isActive
                      ? 'text-[#121212] font-bold opacity-100'
                      : 'text-[#525252] font-medium opacity-80 hover:opacity-100 hover:text-[#121212]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#111111]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-luxury-primary"
              style={{
                padding: '0.6rem 1.25rem',
                fontSize: '0.72rem',
                color: '#ffffff',
              }}
            >
              <span className="text-white text-[0.72rem] font-semibold tracking-tight">VIP Inquiry</span>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="min-[960px]:hidden p-2 text-inherit bg-transparent border-0 cursor-pointer flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="pt-4 mt-3 border-t border-black/8 flex flex-col gap-3 text-[0.78rem] tracking-[0.12em] uppercase">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between py-1.5 no-underline ${
                  pathname === link.href ? 'text-[#121212] font-bold' : 'text-[#525252] font-medium'
                }`}
              >
                <span>{link.label}</span>
                <span className="opacity-40">→</span>
              </Link>
            ))}
            <div className="pt-2 border-t border-dashed border-black/8">
              <p className="text-[0.68rem] text-[#525252] normal-case m-0">
                📍 {BRAND_DATA.address.landmark}, {BRAND_DATA.address.city}
              </p>
              <p className="text-[0.65rem] text-[#10b981] mt-0.5 normal-case font-semibold">
                ● Open Today: {BRAND_DATA.timings.hours}
              </p>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
