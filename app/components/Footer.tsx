'use client';

import Image from 'next/image';

interface FooterProps {
  theme?: string;
}

export default function Footer({}: FooterProps) {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--card-border)',
        padding: '5rem 0 7rem',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <div
                style={{
                  position: 'relative',
                  width: '32px',
                  height: '32px',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
              <span
                style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontSize: '1.25rem',
                }}
              >
                Deer & Dan
              </span>
            </div>
            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Haute couture and modern architectural silhouettes. Designed in micro-capsules
              using 100% noble natural fibers. Handcrafted in India for international patronage.
            </p>
            <div
              style={{
                fontSize: '0.65rem',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-muted)',
              }}
            >
              Salon Showrooms: New Delhi • Mumbai • Milan
            </div>
          </div>

          {/* Links */}
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
              Exhibitions
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              <li><a href="#collections">Autumn / Winter 26</a></li>
              <li><a href="#collections">Sculptural Tailoring</a></li>
              <li><a href="#collections">Cashmere Capsule</a></li>
              <li><a href="#collections">Evening Archive</a></li>
            </ul>
          </div>

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
              The House
            </p>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              <li><a href="#atelier">Design Philosophy</a></li>
              <li><a href="#craftsmanship">Noble Fibers</a></li>
              <li><a href="#craftsmanship">Sustainable Atelier</a></li>
              <li><a href="#inquiry">Private Salon</a></li>
            </ul>
          </div>

          {/* Press & Inquiries */}
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
              Press & Inquiries
            </p>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              For editorial loans, museum exhibitions, or private viewing appointments:
            </p>
            <p
              style={{
                fontSize: '0.8rem',
                fontFamily: 'monospace',
                textDecoration: 'underline',
                color: 'var(--accent)',
                margin: 0,
              }}
            >
              patron@deerdan.in
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '2rem',
            borderTop: '1px solid var(--card-border)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
          }}
        >
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Deer & Dan Clothing. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>Pure Showcase Platform</span>
            <span>•</span>
            <span>Zero Mass-Market Retail</span>
            <span>•</span>
            <span>deerdan.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
