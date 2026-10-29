'use client';

import { useState } from 'react';
import Image from 'next/image';

interface NavbarProps {
  onOpenInquiry: () => void;
  theme?: string;
}

export default function Navbar({ onOpenInquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0.75rem 1rem',
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
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
          padding: '0.65rem 1.25rem',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo & Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div
                style={{
                  position: 'relative',
                  width: '32px',
                  height: '32px',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.08)',
                }}
              >
                <Image
                  src="/d_logo.svg"
                  alt="Deer & Dan"
                  width={28}
                  height={28}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontWeight: 600,
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    fontSize: '1.05rem',
                    lineHeight: 1.1,
                  }}
                >
                  Deer & Dan
                </span>
                <span
                  style={{
                    fontSize: '0.55rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    opacity: 0.65,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Haute Couture • India
                </span>
              </div>
            </a>

            <span
              className="badge-capsule"
              style={{ display: 'none', marginLeft: '0.5rem' }}
              id="desktop-capsule-badge"
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '9999px',
                  backgroundColor: 'currentColor',
                }}
              />
              Edition II 2026
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
            className="hidden-mobile-nav"
          >
            <a href="#collections" style={{ transition: 'opacity 0.2s', opacity: 0.85 }}>
              Collections
            </a>
            <a href="#lookbook" style={{ transition: 'opacity 0.2s', opacity: 0.85 }}>
              Lookbook
            </a>
            <a href="#atelier" style={{ transition: 'opacity 0.2s', opacity: 0.85 }}>
              The Atelier
            </a>
            <a href="#craftsmanship" style={{ transition: 'opacity 0.2s', opacity: 0.85 }}>
              Craftsmanship
            </a>
            <a href="#inquiry" style={{ transition: 'opacity 0.2s', opacity: 0.85 }}>
              Private Viewing
            </a>
          </div>

          {/* CTA Action */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={onOpenInquiry}
              className="btn-luxury-primary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.7rem' }}
            >
              <span>Request Lookbook</span>
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              }}
              className="mobile-hamburger-btn"
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              gap: '0.75rem',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            <a href="#collections" onClick={() => setMobileMenuOpen(false)}>
              Collections
            </a>
            <a href="#lookbook" onClick={() => setMobileMenuOpen(false)}>
              Lookbook
            </a>
            <a href="#atelier" onClick={() => setMobileMenuOpen(false)}>
              The Atelier
            </a>
            <a href="#craftsmanship" onClick={() => setMobileMenuOpen(false)}>
              Craftsmanship
            </a>
            <a href="#inquiry" onClick={() => setMobileMenuOpen(false)}>
              Private Viewing
            </a>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (min-width: 900px) {
          #desktop-capsule-badge {
            display: inline-flex !important;
          }
        }
        @media (max-width: 899px) {
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
