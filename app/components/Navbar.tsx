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
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0.85rem 1rem',
        pointerEvents: 'none',
      }}
    >
      <nav
        aria-label="Main Navigation"
        className="luxury-container"
        style={{
          pointerEvents: 'auto',
          background: 'var(--nav-bg)',
          border: '1px solid var(--nav-border)',
          borderRadius: '9999px',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 12px 30px -8px rgba(0, 0, 0, 0.08)',
          padding: '0.65rem 1.35rem',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo & Meta */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', color: 'inherit' }}>
            <div
              style={{
                position: 'relative',
                width: '34px',
                height: '34px',
                borderRadius: '9999px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#111111',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}
            >
              <Image
                src="/images/brand-crest-black.jpg"
                alt="Deer & Dan Stag Crest"
                width={34}
                height={34}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontSize: '1.05rem',
                  lineHeight: 1.1,
                  color: 'var(--text-main)',
                }}
              >
                Deer & Dan
              </span>
              <span
                style={{
                  fontSize: '0.52rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  opacity: 0.65,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                }}
              >
                Flagship Showroom • Chhindwara
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.75rem',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
            className="hidden-mobile-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: isActive ? 'var(--text-main)' : 'var(--text-muted)',
                    opacity: isActive ? 1 : 0.8,
                    fontWeight: isActive ? 700 : 500,
                    position: 'relative',
                    transition: 'all 0.2s ease',
                    padding: '0.25rem 0',
                  }}
                >
                  {link.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '9999px',
                        backgroundColor: '#111111',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Link
              href="/store"
              className="badge-capsule"
              id="desktop-store-badge"
              style={{
                display: 'none',
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.62rem',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                }}
              />
              <span>10:30 AM – 10:00 PM</span>
            </Link>

            <button
              onClick={onOpenInquiry}
              className="btn-luxury-primary"
              style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem' }}
            >
              <span>VIP Inquiry</span>
              <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                padding: '0.5rem',
                color: 'inherit',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
              }}
              className="mobile-hamburger-btn"
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
          <div
            style={{
              paddingTop: '1rem',
              marginTop: '0.75rem',
              borderTop: '1px solid var(--card-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: pathname === link.href ? 'var(--text-main)' : 'var(--text-muted)',
                  fontWeight: pathname === link.href ? 700 : 500,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.35rem 0',
                }}
              >
                <span>{link.label}</span>
                <span style={{ opacity: 0.4 }}>→</span>
              </Link>
            ))}
            <div style={{ paddingTop: '0.5rem', borderTop: '1px dashed var(--card-border)' }}>
              <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'none', margin: 0 }}>
                📍 {BRAND_DATA.address.landmark}, {BRAND_DATA.address.city}
              </p>
              <p style={{ fontSize: '0.65rem', color: '#10b981', margin: '0.2rem 0 0 0', textTransform: 'none', fontWeight: 600 }}>
                ● Open Today: {BRAND_DATA.timings.hours}
              </p>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (min-width: 960px) {
          #desktop-store-badge {
            display: inline-flex !important;
          }
        }
        @media (max-width: 959px) {
          .hidden-mobile-nav {
            display: none !important;
          }
          .mobile-hamburger-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </header>
  );
}
