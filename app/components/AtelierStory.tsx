'use client';

import Image from 'next/image';
import { ATELIER_PILLARS, AtelierPillar } from '../data/looks';

interface AtelierStoryProps {
  theme?: string;
}

export default function AtelierStory({}: AtelierStoryProps) {
  return (
    <section
      id="atelier"
      style={{
        padding: '7rem 0',
        position: 'relative',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div className="luxury-container" style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
        {/* Top Manifesto Header */}
        <div style={{ maxWidth: '780px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <span
            style={{
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '0.22em',
              fontWeight: 600,
              color: 'var(--accent)',
            }}
          >
            The Atelier Philosophy
          </span>
          <h2
            style={{
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Crafted for the Few. <br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
              Preserving Haute Couture in Modern India.
            </span>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Deer & Dan was founded on a simple principle: true luxury is tactile, quiet, and
            architectural. We refuse fast-fashion cycles. Each silhouette is meticulously engineered,
            hand-cut, and tailored by master artisans to outlast fleeting seasons.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {ATELIER_PILLARS.map((pillar: AtelierPillar) => (
            <div
              key={pillar.number}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '1.5rem',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--card-border)',
                  paddingBottom: '0.85rem',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '2.5rem',
                    fontWeight: 500,
                    color: 'var(--accent)',
                  }}
                >
                  {pillar.number}
                </span>
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--text-muted)',
                  }}
                >
                  Standard
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.68rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}
                >
                  {pillar.subtitle}
                </span>
                <h3
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '1.65rem',
                    fontWeight: 500,
                    margin: 0,
                  }}
                >
                  {pillar.title}
                </h3>
              </div>
              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual Editorial Spotlight */}
        <div
          id="craftsmanship"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            paddingTop: '2rem',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '420px',
              borderRadius: '1.75rem',
              overflow: 'hidden',
              border: '1px solid var(--card-border)',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1400&q=85"
              alt="Atelier Craftsmanship"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 700px"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 50%, transparent 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                color: '#ffffff',
              }}
            >
              <span
                style={{
                  fontFamily: 'monospace',
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  opacity: 0.8,
                  display: 'block',
                }}
              >
                Atelier Archive • New Delhi
              </span>
              <p
                style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontSize: '1.45rem',
                  fontWeight: 500,
                  marginTop: '0.25rem',
                  margin: 0,
                }}
              >
                Hand-sculpted Canvas & Precision Tailoring
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 600,
                color: 'var(--accent)',
              }}
            >
              Noble Standards
            </span>
            <h3
              style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontSize: '2.25rem',
                fontWeight: 400,
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Materials that Breathe and Age Gracefully
            </h3>
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--text-muted)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Every textile is touched, tested, and vetted by hand. From our double-faced cashmere
              scarves to our architectural wool overcoats, we source exclusively from heritage mills
              that practice humane shearing and organic botanical dyeing.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', paddingTop: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.8rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: '#10b981' }} />
                <span>Zero synthetic polyester or nylon blending</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.8rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: '#10b981' }} />
                <span>Natural horn, mother-of-pearl, and gunmetal closures</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.8rem' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '9999px', backgroundColor: '#10b981' }} />
                <span>Traceable heritage mill provenance certificates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
