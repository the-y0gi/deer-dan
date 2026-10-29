'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BRAND_DATA } from '../data/brand';

interface FooterProps {
  theme?: string;
}

export default function Footer({}: FooterProps) {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--card-border)',
        padding: '5rem 0 6rem',
        background: 'var(--card-bg)',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="luxury-container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Brand Col */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '360px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{
                  position: 'relative',
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  background: '#111111',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <Image
                  src="/images/brand-crest-black.jpg"
                  alt="Deer & Dan"
                  width={36}
                  height={36}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <span
                style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontSize: '1.25rem',
                }}
              >
                Deer & Dan
              </span>
            </Link>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Quiet luxury menswear, artisanal linen tailoring, and curated contemporary wear.
              100% pure Indian cotton crafted for longevity and quiet elegance.
            </p>
            <div
              style={{
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                color: 'var(--text-muted)',
                fontWeight: 600,
              }}
            >
              Curated under the creative direction of {BRAND_DATA.founder}
            </div>
          </div>

          {/* Quick Pages Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                margin: 0,
              }}
            >
              Showcase Pages
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                fontSize: '0.78rem',
              }}
            >
              <li>
                <Link href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Home Showcase
                </Link>
              </li>
              <li>
                <Link href="/collections" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Curated Lookbook
                </Link>
              </li>
              <li>
                <Link href="/store" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  The Flagship Store
                </Link>
              </li>
              <li>
                <Link href="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Atelier & Craft Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}>
                  Visit & Concierge
                </Link>
              </li>
            </ul>
          </div>

          {/* Flagship Showroom Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                margin: 0,
              }}
            >
              Flagship Destination
            </p>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <strong style={{ color: 'var(--text-main)', display: 'block' }}>Deer & Dan Showroom</strong>
              <p style={{ margin: '0.25rem 0' }}>{BRAND_DATA.address.landmark}, {BRAND_DATA.address.road}</p>
              <p style={{ margin: '0.25rem 0' }}>{BRAND_DATA.address.area}, {BRAND_DATA.address.city}, MP {BRAND_DATA.address.pincode}</p>
              <p style={{ margin: '0.5rem 0 0', color: '#10b981', fontWeight: 600 }}>
                ● Open Daily: {BRAND_DATA.timings.hours}
              </p>
            </div>
            <div style={{ paddingTop: '0.25rem' }}>
              <a
                href={BRAND_DATA.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span>Open in Google Maps</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Concierge & Direct Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                margin: 0,
              }}
            >
              Styling & Concierge
            </p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
              Looking for private styling or bridal/event wardrobe curation? Connect directly with our concierge.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingTop: '0.25rem' }}>
              <a
                href={BRAND_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.55rem 1rem',
                  borderRadius: '9999px',
                  background: '#10b981',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.72rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(16,185,129,0.25)',
                }}
              >
                <span>💬 WhatsApp Styling Chat</span>
              </a>
              <a
                href={`tel:${BRAND_DATA.phone}`}
                style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                }}
              >
                📞 Phone: {BRAND_DATA.phoneFormatted}
              </a>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                📸 Instagram: {BRAND_DATA.instagram}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div
          style={{
            borderTop: '1px solid var(--card-border)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.68rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} Deer & Dan Clothing. All rights reserved. Flagship Showroom in Chhindwara, Madhya Pradesh.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>Pure 100% Cotton</span>
            <span>•</span>
            <span>Made in India</span>
            <span>•</span>
            <span>Haute Couture Showcase</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
