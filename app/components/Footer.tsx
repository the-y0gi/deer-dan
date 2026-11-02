'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Phone,
  ArrowUpRight,
} from 'lucide-react';
import { BRAND_DATA } from '../data/brand';

interface FooterProps {
  theme?: string;
}

export default function Footer({}: FooterProps) {
  const showcaseLinks = [
    { label: 'Home Showcase', href: '/' },
    { label: 'Curated Lookbook', href: '/collections' },
    { label: 'The Flagship Store', href: '/store' },
    { label: 'Atelier & Craft Heritage', href: '/about' },
    { label: 'Visit & Concierge', href: '/contact' },
  ];

  return (
    <footer className="border-t border-black/8 pt-12 sm:pt-20 pb-10 sm:pb-14 bg-gradient-to-b from-[#fdfaf7]/40 to-[#f8f1eb]/95 relative transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col gap-10 sm:gap-14">
        {/* Main 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Col 1: Brand & Founder Heritage */}
          <div className="flex flex-col gap-4 sm:gap-5 max-w-[340px]">
            <Link href="/" className="flex items-center gap-3 no-underline text-inherit group">
              <div className="relative w-[36px] h-[36px] sm:w-[38px] sm:h-[38px] rounded-full overflow-hidden bg-[#111111] flex items-center justify-center border border-black/15 shadow-[0_4px_10px_rgba(0,0,0,0.1)] shrink-0">
                <Image
                  src="/images/official-deer-logo.jpg"
                  alt="Deer & Dan Official Logo"
                  width={38}
                  height={38}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-semibold tracking-[0.18em] uppercase text-[1.15rem] sm:text-[1.25rem] leading-none text-[#121212]">
                  Deer & Dan
                </span>
                <span className="text-[0.52rem] sm:text-[0.55rem] uppercase tracking-[0.2em] text-[#525252] font-semibold mt-1">
                  Haute Couture • India
                </span>
              </div>
            </Link>

            <p className="text-[0.8rem] sm:text-[0.82rem] text-[#525252] leading-relaxed m-0">
              Quiet luxury menswear, artisanal linen tailoring, and sculpted contemporary wear.
              100% pure Indian cotton crafted for timeless longevity and poise.
            </p>
          </div>

          {/* Col 2: Showcase Pages */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <p className="text-[0.7rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#111111] m-0">
              Showcase Pages
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-2.5 sm:gap-3 text-[0.8rem] sm:text-[0.82rem]">
              {showcaseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#525252] no-underline inline-flex items-center gap-1.5 transition-all duration-200 font-medium hover:text-[#111111] hover:translate-x-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Flagship Destination */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <p className="text-[0.7rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#111111] m-0">
              Flagship Destination
            </p>

            <div className="flex flex-col gap-3 sm:gap-3.5">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#111111] shrink-0 mt-0.5" />
                <div className="text-[0.8rem] sm:text-[0.82rem] text-[#525252] leading-snug">
                  <strong className="text-[#121212] block font-semibold">
                    Deer & Dan Showroom
                  </strong>
                  <span>{BRAND_DATA.address.landmark}, {BRAND_DATA.address.road}</span>
                  <span className="block">{BRAND_DATA.address.city}, MP {BRAND_DATA.address.pincode}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock size={15} className="text-[#10b981] shrink-0" />
                <div className="text-[0.78rem] sm:text-[0.8rem]">
                  <span className="text-[#10b981] font-semibold block">
                    Open Today: {BRAND_DATA.timings.hours}
                  </span>
                  <span className="text-[0.7rem] sm:text-[0.72rem] text-[#525252]">Monday through Sunday</span>
                </div>
              </div>

              <div className="pt-0.5">
                <a
                  href={BRAND_DATA.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-secondary !py-1.5 !px-3.5 !text-[0.74rem] sm:!text-[0.76rem] !w-fit"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Styling & Concierge */}
          <div className="flex flex-col gap-3.5 sm:gap-4">
            <p className="text-[0.7rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#111111] m-0">
              Styling & Concierge
            </p>

            <p className="text-[0.8rem] sm:text-[0.82rem] text-[#525252] m-0 leading-relaxed">
              Looking for personal styling or wedding wardrobe curation? Connect directly with our concierge.
            </p>

            <div className="flex flex-col gap-2.5 pt-0.5">
              <a
                href={`tel:${BRAND_DATA.phone}`}
                className="inline-flex items-center gap-2.5 text-[0.8rem] sm:text-[0.82rem] text-[#121212] no-underline font-medium hover:text-black transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center border border-black/8 shrink-0">
                  <Phone size={13} className="text-[#111111]" />
                </div>
                <span>{BRAND_DATA.phoneFormatted}</span>
              </a>

              <a
                href={BRAND_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[0.8rem] sm:text-[0.82rem] text-[#525252] no-underline font-medium hover:text-[#121212] transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center border border-black/8 shrink-0">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <span>{BRAND_DATA.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-black/8 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-5 text-[0.7rem] sm:text-[0.72rem] text-[#525252] text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
            <span>
              &copy; {new Date().getFullYear()} <strong>Deer & Dan Clothing</strong>. All rights reserved. Flagship Showroom in Chhindwara, Madhya Pradesh.
            </span>
            <span className="opacity-40 hidden sm:inline">•</span>
            <span>
              Developed by <strong className="text-[#121212] font-semibold">Yogesh Gadhewal</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
