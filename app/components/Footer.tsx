'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
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
    <footer
      style={{
        borderTop: '1px solid var(--card-border)',
        padding: '5rem 0 3.5rem',
        background: 'linear-gradient(180deg, rgba(253, 250, 247, 0.4) 0%, rgba(248, 241, 235, 0.95) 100%)',
        position: 'relative',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="luxury-container" style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
        {/* Main 4 Columns Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Col 1: Brand & Founder Heritage */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '340px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
              <div
                style={{
                  position: 'relative',
                  width: '38px',
                  height: '38px',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  background: '#111111',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(0, 0, 0, 0.15)',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}
              >
                <Image
                  src="/images/official-deer-logo.jpg"
                  alt="Deer & Dan Official Logo"
                  width={38}
                  height={38}
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
                    fontSize: '1.25rem',
                    lineHeight: 1.1,
                  }}
                >
                  Deer & Dan
                </span>
                <span
                  style={{
                    fontSize: '0.55rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                  }}
                >
                  Haute Couture • India
                </span>
              </div>
            </Link>

            <p
              style={{
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Quiet luxury menswear, artisanal linen tailoring, and sculpted contemporary wear.
              100% pure Indian cotton crafted for timeless longevity and poise.
            </p>

            {/* <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.45rem 0.85rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid var(--card-border)',
                fontSize: '0.7rem',
                fontWeight: 600,
                color: 'var(--text-main)',
                width: 'fit-content',
              }}
            >
              <Sparkles size={13} color="#b45309" />
              <span>Directed by {BRAND_DATA.founder}</span>
            </div> */}
          </div>

          {/* Col 2: Showcase Pages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--accent)',
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
                gap: '0.75rem',
                fontSize: '0.82rem',
              }}
            >
              {showcaseLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'var(--text-muted)',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      transition: 'all 0.2s ease',
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#111111';
                      e.currentTarget.style.transform = 'translateX(3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-muted)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Flagship Destination */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--accent)',
                margin: 0,
              }}
            >
              Flagship Destination
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <MapPin size={17} color="#111111" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  <strong style={{ color: 'var(--text-main)', display: 'block', fontWeight: 600 }}>
                    Deer & Dan Showroom
                  </strong>
                  <span>{BRAND_DATA.address.landmark}, {BRAND_DATA.address.road}</span>
                  <span style={{ display: 'block' }}>{BRAND_DATA.address.city}, MP {BRAND_DATA.address.pincode}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <Clock size={16} color="#10b981" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.8rem' }}>
                  <span style={{ color: '#10b981', fontWeight: 600, display: 'block' }}>
                    Open Today: {BRAND_DATA.timings.hours}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Monday through Sunday</span>
                </div>
              </div>

              <div style={{ paddingTop: '0.25rem' }}>
                <a
                  href={BRAND_DATA.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    color: '#111111',
                    textDecoration: 'none',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid var(--card-border)',
                    width: 'fit-content',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Styling & Concierge */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--accent)',
                margin: 0,
              }}
            >
              Styling & Concierge
            </p>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
              Looking for personal styling or wedding wardrobe curation? Connect directly with our concierge.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: '0.25rem' }}>
              <a
                href={`tel:${BRAND_DATA.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--card-border)',
                  }}
                >
                  <Phone size={13} color="#111111" />
                </div>
                <span>{BRAND_DATA.phoneFormatted}</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '9999px',
                    background: 'rgba(255, 255, 255, 0.8)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--card-border)',
                  }}
                >
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
        <div
          style={{
            borderTop: '1px solid var(--card-border)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.45rem' }}>
            <span>
              &copy; {new Date().getFullYear()} <strong>Deer & Dan Clothing</strong>. All rights reserved. Flagship Showroom in Chhindwara, Madhya Pradesh.
            </span>
            <span style={{ opacity: 0.4 }}>•</span>
            <span>
              Developed by <strong style={{ color: 'var(--text-main)', fontWeight: 600 }}>Yogesh Gadhewal</strong>
            </span>
          </div>

          {/* <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.68rem', fontWeight: 600 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
              <ShieldCheck size={14} color="#10b981" />
              <span>100% Pure Cotton</span>
            </span>
            <span>•</span>
            <span>Made in India</span>
            <span>•</span>
            <span>Haute Couture Showcase</span>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
