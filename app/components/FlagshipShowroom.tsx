'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  Sparkles,
  Clock,
  Car,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';
import { BRAND_DATA } from '../data/brand';

export default function FlagshipShowroom() {
  return (
    <section
      id="showroom"
      style={{
        padding: '3.75rem 0',
        position: 'relative',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div className="luxury-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left: Facade Showcase Card */}
          <div style={{ position: 'relative' }}>
            <div
              className="look-card-frame"
              style={{
                padding: '0.65rem',
                borderRadius: '20px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '380px',
                  borderRadius: '16px',
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
                    top: '0.85rem',
                    left: '0.85rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
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
                    bottom: '0.85rem',
                    left: '0.85rem',
                    right: '0.85rem',
                    background: 'rgba(17, 17, 17, 0.9)',
                    backdropFilter: 'blur(12px)',
                    padding: '0.9rem 1.15rem',
                    borderRadius: '14px',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.65rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.65)',
                    }}
                  >
                    Flagship Destination • Madhya Pradesh
                  </p>
                  <h3
                    style={{
                      margin: '0.25rem 0 0 0',
                      fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                      fontSize: '1.25rem',
                      fontWeight: 500,
                    }}
                  >
                    Imlikheda Chowk, Chhindwara
                  </h3>
                  <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)' }}>
                    {BRAND_DATA.address.landmark}, {BRAND_DATA.address.road} (PIN: {BRAND_DATA.address.pincode})
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story & Visiting Experience */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            <div>
              <span
                style={{
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  display: 'block',
                  marginBottom: '0.35rem',
                }}
              >
                In-Store Destination
              </span>
              <h2
                style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)',
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
                fontSize: '0.88rem',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                margin: 0,
              }}
            >
              Located prominently at Imlikheda Chowk on MP SH 26, our grand glass facade destination
              houses curated luxury displays—from quiet luxury knitwear and ascot pairings to dark street
              atelier capsules. Every customer receives personalized guidance and fabric consultations.
            </p>

            {/* Feature Highlights Grid with Lucide Icons */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.75rem',
                paddingTop: '0.15rem',
              }}
            >
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '14px',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div style={{ color: '#111111', marginBottom: '0.35rem' }}>
                  <Building2 size={18} strokeWidth={1.8} />
                </div>
                <h4 style={{ margin: 0, fontSize: '0.82rem', fontWeight: 600 }}>Multi-Floor Experience</h4>
                <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                  Open galleries with custom warm-lit architectural display arches.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '14px',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div style={{ color: '#111111', marginBottom: '0.35rem' }}>
                  <Sparkles size={18} strokeWidth={1.8} />
                </div>
                <h4 style={{ margin: 0, fontSize: '0.82rem', fontWeight: 600 }}>Personal Styling</h4>
                <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                  One-on-one wardrobe curation directed by founder Romi&apos;s team.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '14px',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div style={{ color: '#111111', marginBottom: '0.35rem' }}>
                  <Clock size={18} strokeWidth={1.8} />
                </div>
                <h4 style={{ margin: 0, fontSize: '0.82rem', fontWeight: 600 }}>10:30 AM – 10:00 PM</h4>
                <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                  Open 7 days a week for evening & weekend walkthroughs.
                </p>
              </div>

              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.75rem 0.95rem',
                  borderRadius: '14px',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div style={{ color: '#111111', marginBottom: '0.35rem' }}>
                  <Car size={18} strokeWidth={1.8} />
                </div>
                <h4 style={{ margin: 0, fontSize: '0.82rem', fontWeight: 600 }}>Hassle-Free Parking</h4>
                <p style={{ margin: '0.15rem 0 0 0', fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1.35 }}>
                  Direct highway access on MP SH 26 with showroom parking.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0.25rem' }}>
              <a
                href={BRAND_DATA.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary"
                style={{
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.78rem',
                }}
              >
                <MapPin size={15} strokeWidth={2} />
                <span>Get Google Maps Directions</span>
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>

              <Link
                href="/store"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--card-border)',
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(10px)',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  letterSpacing: '0.04em',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                <span>View Full Store Details</span>
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
