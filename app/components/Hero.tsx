'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Look } from '../data/looks';

interface HeroProps {
  looks: Look[];
  onSelectLook: (look: Look) => void;
  theme?: string;
}

export default function Hero({ looks, onSelectLook }: HeroProps) {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const activeLook = looks[activeLookIndex] || looks[0];

  return (
    <section className="hero-wrapper">
      <div className="luxury-container">
        <div className="hero-grid">
          {/* Left Column: Editorial Headline & Manifesto */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            <div>
              <span className="badge-capsule">
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '9999px',
                    backgroundColor: '#10b981',
                  }}
                />
                Autumn / Winter 2026 Collection • Showcase Only
              </span>
            </div>

            <div>
              <h1 className="hero-headline">
                The Architecture
                <span className="hero-subhead">of Modern Silhouette</span>
              </h1>
            </div>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.6,
                color: 'var(--text-muted)',
                maxWidth: '520px',
              }}
            >
              Deer & Dan crafts sculptural garments at the intersection of haute couture
              tradition and modern minimalist restraint. Designed in limited micro-capsules
              using 100% noble fibers.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem', paddingTop: '0.5rem' }}>
              <button
                onClick={() => onSelectLook(activeLook)}
                className="btn-luxury-primary"
              >
                <span>Inspect Current Silhouette</span>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>

              {/* Backdoor-style Social Proof Patrons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{ display: 'flex', marginLeft: '0.25rem' }}>
                  {['photo-1534528741775-53994a69daeb', 'photo-1507003211169-0a1dd7228f2d', 'photo-1517841905240-472988babdf9', 'photo-1524504388940-b1c1722653e1'].map((imgId, idx) => (
                    <div
                      key={idx}
                      style={{
                        position: 'relative',
                        width: '28px',
                        height: '28px',
                        borderRadius: '9999px',
                        overflow: 'hidden',
                        marginLeft: idx === 0 ? 0 : '-8px',
                        border: '2px solid var(--card-bg)',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.15)',
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
                <div style={{ fontSize: '0.72rem', lineHeight: 1.25 }}>
                  <strong style={{ display: 'block', fontWeight: 700 }}>24,000+ patrons</strong>
                  <span style={{ color: 'var(--text-muted)' }}>registered for viewing</span>
                </div>
              </div>
            </div>

            {/* Mini Stat Counters */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--card-border)',
                maxWidth: '480px',
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '2rem',
                    fontWeight: 500,
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  100%
                </p>
                <p
                  style={{
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                    marginTop: '0.35rem',
                  }}
                >
                  Virgin Melton & Cashmere
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '2rem',
                    fontWeight: 500,
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  80 Pcs
                </p>
                <p
                  style={{
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                    marginTop: '0.35rem',
                  }}
                >
                  Per Capsule Run
                </p>
              </div>

              <div>
                <p
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '2rem',
                    fontWeight: 500,
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  45+ Hrs
                </p>
                <p
                  style={{
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-muted)',
                    marginTop: '0.35rem',
                  }}
                >
                  Atelier Handcraft
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Interactive Lookbook Card */}
          <div>
            <div className="look-card-frame">
              {/* Image Frame */}
              <div className="look-card-image-box">
                <Image
                  src={activeLook.image}
                  alt={activeLook.title}
                  fill
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 40%, transparent 80%)',
                  }}
                />

                {/* Top Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    right: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(0, 0, 0, 0.65)',
                      color: '#ffffff',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      fontSize: '0.65rem',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Look {activeLook.number} / {String(looks.length).padStart(2, '0')}
                  </span>

                  <span
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      fontSize: '0.65rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {activeLook.season}
                  </span>
                </div>

                {/* Hotspot pin on model */}
                <div
                  style={{
                    position: 'absolute',
                    top: '48%',
                    left: '30%',
                    background: 'rgba(0, 0, 0, 0.8)',
                    color: '#ffffff',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '9999px',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '9999px',
                      backgroundColor: '#10b981',
                    }}
                  />
                  <span>{activeLook.tags[0]}</span>
                </div>

                {/* Bottom Overlay Title on image */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    color: '#ffffff',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      lineHeight: 1.15,
                      margin: 0,
                    }}
                  >
                    {activeLook.title}
                  </p>
                  <p
                    style={{
                      fontSize: '0.72rem',
                      color: '#e5e7eb',
                      marginTop: '0.25rem',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {activeLook.fabric}
                  </p>
                </div>
              </div>

              {/* Look Selector Pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '0.85rem',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--card-border)',
                }}
              >
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {looks.slice(0, 4).map((look, idx) => (
                    <button
                      key={look.id}
                      onClick={() => setActiveLookIndex(idx)}
                      style={{
                        padding: '0.35rem 0.65rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        transition: 'all 0.2s',
                        background:
                          activeLookIndex === idx ? '#111111' : 'transparent',
                        color:
                          activeLookIndex === idx
                            ? '#ffffff'
                            : 'var(--text-muted)',
                        border:
                          activeLookIndex === idx
                            ? 'none'
                            : '1px solid var(--card-border)',
                      }}
                    >
                      Look {look.number}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => onSelectLook(activeLook)}
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--accent)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <span>Specs</span>
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
