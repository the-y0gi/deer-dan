'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import {
  Menu,
  X,
  Compass,
  Shirt,
  Store,
  Feather,
  MapPin,
  ChevronRight,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { BRAND_DATA } from '../data/brand';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const pathname = usePathname();

  const menuRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Home', href: '/', icon: Compass },
    { label: 'Collections', href: '/collections', icon: Shirt },
    { label: 'Flagship Store', href: '/store', icon: Store },
    { label: 'About & Craft', href: '/about', icon: Feather },
    { label: 'Visit / Contact', href: '/contact', icon: MapPin },
  ];

  const handleOpenMenu = () => {
    setIsClosing(false);
    setMobileMenuOpen(true);
  };

  const handleCloseMenu = (callback?: () => void) => {
    if (isClosing || !mobileMenuOpen) return;
    setIsClosing(true);

    if (menuRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setMobileMenuOpen(false);
          setIsClosing(false);
          if (callback) callback();
        },
      });

      tl.to(menuRef.current, {
        opacity: 0,
        height: 0,
        duration: 0.16,
        ease: 'power3.in',
      });
    } else {
      setMobileMenuOpen(false);
      setIsClosing(false);
      if (callback) callback();
    }
  };

  const toggleMenu = () => {
    if (mobileMenuOpen) {
      handleCloseMenu();
    } else {
      handleOpenMenu();
    }
  };

  // GSAP Entrance animation when menu opens - Fast & Buttery Smooth
  useEffect(() => {
    if (mobileMenuOpen && menuRef.current && !isClosing) {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Prepare initial values
      gsap.set(menuRef.current, {
        opacity: 0,
        height: 0,
        overflow: 'hidden',
      });

      const items = menuRef.current.querySelectorAll('.mobile-nav-item');
      if (items.length) {
        gsap.set(items, { opacity: 0, y: 8 });
      }
      if (footerRef.current) {
        gsap.set(footerRef.current, { opacity: 0, y: 6 });
      }

      // Fast expansion (0.22s with power4.out curve)
      tl.to(menuRef.current, {
        opacity: 1,
        height: 'auto',
        duration: 0.22,
        ease: 'power4.out',
        clearProps: 'overflow',
      });

      // Rapid micro-stagger for items (starts almost immediately at -=0.18s)
      if (items.length) {
        tl.to(
          items,
          {
            opacity: 1,
            y: 0,
            duration: 0.2,
            stagger: 0.02,
            ease: 'power3.out',
          },
          '-=0.18'
        );
      }

      // Snappy footer fade
      if (footerRef.current) {
        tl.to(
          footerRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.16,
            ease: 'power2.out',
          },
          '-=0.12'
        );
      }
    }
  }, [mobileMenuOpen, isClosing]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2.5 sm:px-4 py-2.5 sm:py-3.5 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto max-w-[1280px] mx-auto px-3.5 sm:px-5 lg:px-6 py-2 sm:py-2.5 bg-white/92 border border-black/8 backdrop-blur-xl shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-300 ${
          mobileMenuOpen ? 'rounded-2xl sm:rounded-3xl' : 'rounded-full'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Meta */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 no-underline text-inherit group shrink-0">
            <div className="relative w-[30px] h-[30px] sm:w-[34px] sm:h-[34px] rounded-full overflow-hidden flex items-center justify-center bg-[#111111] border border-white/20 shadow-[0_2px_8px_rgba(0,0,0,0.15)] shrink-0">
              <Image
                src="/images/official-deer-logo.jpg"
                alt="Deer & Dan Stag Logo"
                width={34}
                height={34}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-semibold tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[0.92rem] sm:text-[1.05rem] leading-none text-[#121212]">
                Deer & Dan
              </span>
              <span className="text-[0.44rem] sm:text-[0.52rem] uppercase tracking-[0.16em] sm:tracking-[0.2em] opacity-65 font-sans font-medium text-[#525252] mt-0.5 truncate max-w-[120px] xs:max-w-[180px] sm:max-w-none">
                Flagship Showroom • Chhindwara
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden min-[960px]:flex items-center gap-6 lg:gap-7 text-[0.72rem] font-semibold tracking-[0.12em] uppercase">
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
          <div className="flex items-center gap-1.5 sm:gap-3">
            <Link
              href="/contact"
              className="btn-luxury-primary !py-1.5 !px-2.5 sm:!py-[0.6rem] sm:!px-[1.25rem] !text-[0.62rem] sm:!text-[0.72rem]"
            >
              <span className="text-white font-semibold tracking-tight whitespace-nowrap">VIP Inquiry</span>
              <ArrowUpRight size={13} className="text-white stroke-white shrink-0 sm:w-[13px] sm:h-[13px]" />
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={toggleMenu}
              className="min-[960px]:hidden p-1.5 text-inherit bg-transparent border-0 cursor-pointer flex items-center justify-center shrink-0 rounded-lg active:bg-black/5 transition-transform"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={22} className="text-[#121212]" />
              ) : (
                <Menu size={22} className="text-[#121212]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown with GSAP animation */}
        {mobileMenuOpen && (
          <div
            ref={menuRef}
            className="pt-3 mt-2.5 border-t border-black/8 flex flex-col gap-1 text-[0.76rem] tracking-[0.12em] uppercase"
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => handleCloseMenu()}
                  className={`mobile-nav-item flex items-center justify-between py-2 px-2.5 rounded-xl no-underline transition-all duration-200 ${
                    isActive
                      ? 'text-[#121212] font-bold bg-black/6 shadow-xs'
                      : 'text-[#525252] font-medium hover:bg-black/[0.03] hover:text-[#121212]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#111111] text-white shadow-xs'
                          : 'bg-black/5 text-[#525252]'
                      }`}
                    >
                      <Icon size={14} strokeWidth={2} />
                    </div>
                    <span className="tracking-[0.14em] text-[0.74rem]">{link.label}</span>
                  </div>
                  <ChevronRight
                    size={14}
                    className={`transition-transform ${
                      isActive ? 'text-[#111111] translate-x-0.5' : 'opacity-35'
                    }`}
                  />
                </Link>
              );
            })}

            <div
              ref={footerRef}
              className="pt-2.5 mt-1 border-t border-dashed border-black/8 px-2.5 flex flex-col gap-1"
            >
              <div className="flex items-center gap-1.5 text-[0.66rem] text-[#525252] normal-case">
                <MapPin size={13} className="text-[#111111] shrink-0" />
                <span className="truncate">
                  {BRAND_DATA.address.landmark}, {BRAND_DATA.address.city}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[0.64rem] text-[#10b981] font-semibold normal-case">
                <Clock size={12} className="text-[#10b981] shrink-0" />
                <span>Open Today: {BRAND_DATA.timings.hours}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
