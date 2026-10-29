'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Look } from '../data/looks';
import { BRAND_DATA } from '../data/brand';

interface HeroProps {
  looks: Look[];
  onSelectLook: (look: Look) => void;
}

export default function Hero({ looks, onSelectLook }: HeroProps) {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const activeLook = looks[activeLookIndex] || looks[0];

  return (
    <section className="hero-wrapper" style={{ paddingTop: '8.5rem', paddingBottom: '4.5rem' }}>
      <div className="luxury-container">
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Brand Manifesto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <span className="badge-capsule">
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '9999px',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 8px #10b981',
                  }}
                />
                Flagship Showroom • Imlikheda Chowk, Chhindwara • Open 10:30 AM – 10:00 PM
              </span>
            </div>

            <div>
              <h1 className="hero-headline">
                The Architecture
                <span className="hero-subhead">of Indian Luxury</span>
              </h1>
            </div>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: 'var(--text-muted)',
                maxWidth: '540px',
              }}
            >
              <strong>Deer & Dan</strong> crafts pure 100% fine combed cotton, artisanal linen
              tailoring, and quiet luxury menswear & womenswear. Experience our grand multi-story
              glass flagship destination curated under the creative direction of{' '}
              <strong style={{ color: 'var(--text-main)' }}>{BRAND_DATA.founder}</strong>.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', paddingTop: '0.25rem' }}>
              <Link href="/collections" className="btn-luxury-primary" style={{ textDecoration: 'none' }}>
                <span>Explore Curated Looks</span>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/store"
                className="btn-luxury-ghost"
                style={{
                  textDecoration: 'none',
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
                  transition: 'all 0.25s ease',
                }}
              >
                <span>Visit Showroom</span>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </div>

            {/* Social Proof & Store Trust Badge */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1.25rem',
                paddingTop: '0.75rem',
              }}
            >
              {/* Backdoor-style Social Proof Patrons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ display: 'flex', marginLeft: '0.25rem' }}>
                  {['photo-1534528741775-53994a69daeb', 'photo-1507003211169-0a1dd7228f2d', 'photo-1517841905240-472988babdf9', 'photo-1524504388940-b1c1722653e1'].map((imgId, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: 'relative',
                        width: '30px',
                        height: '30px',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                        marginLeft: idx === 0 ? 0 : '-9px',
                        border: '2px solid #ffffff',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.12)',
                      }}
                    >
                      <Image
                        src={`https://images.unsplash.com/${imgId}?auto=format&fit=crop&w=80&q=80`}
                        alt="Patron"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: '0.74rem', lineHeight: 1.25 }}>
                  <strong style={{ display: 'block', fontWeight: 700, color: 'var(--text-main)' }}>24,000+ Patrons</strong>
                  <span style={{ color: 'var(--text-muted)' }}>visited in Chhindwara</span>
                </div>
              </div>

              {/* Craft Certification Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  fontSize: '0.72rem',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.65)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                }}
              >
                <span>🏷️</span>
                <span>100% Cotton • Made in India</span>
              </div>
            </div>

            {/* Quick Stat Counters */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--card-border)',
                maxWidth: '480px',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '1.9rem',
                    fontWeight: 500,
                    lineHeight: 1,
                    margin: 0,
                    color: 'var(--text-main)',
                  }}
                >
                  100%
                </p>
                <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  Pure Combed Cotton
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '1.9rem',
                    fontWeight: 500,
                    lineHeight: 1,
                    margin: 0,
                    color: 'var(--text-main)',
                  }}
                >
                  10:30 - 10
                </p>
                <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  Open All 7 Days
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '1.9rem',
                    fontWeight: 500,
                    lineHeight: 1,
                    margin: 0,
                    color: 'var(--text-main)',
                  }}
                >
                  Chhindwara
                </p>
                <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  Flagship Store
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Look Showcase Frame */}
          <div style={{ position: 'relative' }}>
            <div className="look-card-frame" style={{ padding: '0.85rem' }}>
              <div
                className="look-card-image-box"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '540px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: '#f4ede6',
                }}
              >
                <Image
                  src={activeLook.image}
                  alt={activeLook.title}
                  fill
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />

                {/* Top Floating Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(10px)',
                    padding: '0.4rem 0.85rem',
                    borderRadius: '9999px',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#111111',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                  }}
                >
                  Look {activeLook.number} • {activeLook.season}
                </div>

                {/* Inspect Button overlay */}
                <button
                  onClick={() => onSelectLook(activeLook)}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: '#111111',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '9999px',
                    padding: '0.45rem 0.9rem',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  <span>Quick View</span>
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>

                {/* Bottom Overlay Info Pill */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(16px)',
                    padding: '1rem 1.25rem',
                    borderRadius: '16px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
                    <div>
                      <h3
                        style={{
                          margin: 0,
                          fontSize: '1.15rem',
                          fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                          fontWeight: 500,
                          color: '#111111',
                        }}
                      >
                        {activeLook.title}
                      </h3>
                      <p
                        style={{
                          margin: '0.25rem 0 0 0',
                          fontSize: '0.74rem',
                          color: '#555555',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {activeLook.fabric}
                      </p>
                    </div>

                    <div
                      style={{
                        position: 'relative',
                        width: '38px',
                        height: '38px',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        border: '1px solid #111111',
                      }}
                    >
                      <Image
                        src="/images/brand-crest-black.jpg"
                        alt="Crest"
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Look Selector Dock */}
              <div
                style={{
                  display: 'flex',
                  gap: '0.65rem',
                  marginTop: '0.85rem',
                  overflowX: 'auto',
                  paddingBottom: '0.25rem',
                }}
              >
                {looks.slice(0, 4).map((look, idx) => (
                  <button
                    key={look.id}
                    onClick={() => setActiveLookIndex(idx)}
                    style={{
                      position: 'relative',
                      width: '64px',
                      height: '74px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      border: idx === activeLookIndex ? '2px solid #111111' : '1px solid rgba(0,0,0,0.1)',
                      opacity: idx === activeLookIndex ? 1 : 0.65,
                      transform: idx === activeLookIndex ? 'scale(1.03)' : 'scale(1)',
                      transition: 'all 0.2s ease',
                      flexShrink: 0,
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <Image
                      src={look.image}
                      alt={look.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
