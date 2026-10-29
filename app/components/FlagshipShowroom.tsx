'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BRAND_DATA } from '../data/brand';

export default function FlagshipShowroom() {
  return (
    <section
      id="showroom"
      style={{
        padding: '6rem 0',
        position: 'relative',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div className="luxury-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Facade Showcase Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="look-card-frame"
              style={{
                padding: '0.85rem',
                borderRadius: '24px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '460px',
                  borderRadius: '18px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/store-facade.jpg"
                  alt="Deer & Dan Grand Flagship Store in Chhindwara"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />

                {/* Top Badge: Live Open Status */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#111111',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.12)',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '9999px',
                      backgroundColor: '#10b981',
                      boxShadow: '0 0 8px #10b981',
                    }}
                  />
                  <span>Open Today • {BRAND_DATA.timings.hours}</span>
                </div>

                {/* Bottom Overlay Info */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    background: 'rgba(17, 17, 17, 0.88)',
                    backdropFilter: 'blur(12px)',
                    padding: '1.15rem 1.35rem',
                    borderRadius: '16px',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.68rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.65)',
                    }}
                  >
                    Flagship Destination • Madhya Pradesh
                  </p>
                  <h3
                    style={{
                      margin: '0.35rem 0 0 0',
                      fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                      fontSize: '1.4rem',
                      fontWeight: 500,
                    }}
                  >
                    Imlikheda Chowk, Chhindwara
                  </h3>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                    {BRAND_DATA.address.landmark}, {BRAND_DATA.address.road} (PIN: {BRAND_DATA.address.pincode})
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story & Visiting Experience */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <span
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.22em',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                In-Store Destination
              </span>
              <h2
                style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Step Inside the <br />
                <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
                  Deer & Dan Showroom.
                </span>
              </h2>
            </div>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                margin: 0,
              }}
            >
              Located prominently at Imlikheda Chowk on MP SH 26, our grand glass facade destination
              houses curated luxury displays—from quiet luxury knitwear and ascot pairings to dark street
              atelier capsules. Every customer receives personalized guidance and fabric consultations.
            </p>

            {/* Feature Highlights Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1.25rem',
                paddingTop: '0.5rem',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(8px)',
                  padding: '1.1rem',
                  borderRadius: '16px',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>🏛️</div>
                <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>Multi-Floor Experience</h4>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Spacious open galleries with custom warm-lit architectural display arches.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(8px)',
                  padding: '1.1rem',
                  borderRadius: '16px',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>👔</div>
                <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>Personal Styling</h4>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  One-on-one wardrobe curation directed by founder Romi's in-house team.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(8px)',
                  padding: '1.1rem',
                  borderRadius: '16px',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>⏰</div>
                <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>10:30 AM – 10:00 PM</h4>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Open 7 days a week for seamless evening & weekend walkthroughs.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(8px)',
                  padding: '1.1rem',
                  borderRadius: '16px',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div style={{ fontSize: '1.25rem', marginBottom: '0.35rem' }}>🅿️</div>
                <h4 style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600 }}>Hassle-Free Parking</h4>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Direct highway access on MP SH 26 with convenient showroom parking.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.5rem' }}>
              <a
                href={BRAND_DATA.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary"
                style={{ textDecoration: 'none' }}
              >
                <span>Get Google Maps Directions</span>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <Link
                href="/store"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.8rem 1.4rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--card-border)',
                  background: 'rgba(255, 255, 255, 0.4)',
                  backdropFilter: 'blur(10px)',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  letterSpacing: '0.05em',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                }}
              >
                <span>View Full Store Details &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
