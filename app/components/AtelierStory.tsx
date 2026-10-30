'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ATELIER_PILLARS, AtelierPillar } from '../data/looks';
import { BRAND_DATA } from '../data/brand';

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
      <div className="luxury-container" style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
        {/* Top Manifesto Header */}
        <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
            Tactile Sophistication. <br />
            <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
              100% Cotton Crafted for Modern India.
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
            Deer & Dan was founded by <strong>{BRAND_DATA.founder}</strong> on a relentless commitment:
            elevating everyday menswear and contemporary silhouettes through pure natural fibers,
            sculpted drape, and genuine artisanal tailoring. No synthetic compromises, no mass fast fashion.
          </p>
        </div>

        {/* Featured Macro Craft Strip Banner */}
        <div
          className="look-card-frame"
          style={{
            padding: '1.5rem',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(16px)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '240px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
              }}
            >
              <Image
                src="/images/craft-tags-strip.jpg"
                alt="Deer & Dan 100% Cotton Neck Label, Care Tag, and Paper Hangtag"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  fontWeight: 700,
                  color: '#111111',
                }}
              >
                <span>✨</span>
                <span>Uncompromising Label Standards</span>
              </div>
              <h3
                style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontSize: '1.65rem',
                  fontWeight: 500,
                  margin: 0,
                  lineHeight: 1.25,
                }}
              >
                100% Cotton • Made in India
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                From our custom woven neck labels to our signature kraft paper tags, every detail
                is authenticated with the Deer & Dan stag insignia. Designed for unmatched longevity
                and effortless breathability in Indian climates.
              </p>
              <div style={{ paddingTop: '0.5rem' }}>
                <Link
                  href="/about"
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#111111',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span>Read The Full Heritage Story</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid with Visuals */}
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
              {pillar.image && (
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '180px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              )}

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--card-border)',
                  paddingBottom: '0.75rem',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: 'var(--text-main)',
                  }}
                >
                  {pillar.number}
                </span>
                <span
                  style={{
                    fontSize: '0.65rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                  }}
                >
                  {pillar.subtitle}
                </span>
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                    fontSize: '1.45rem',
                    fontWeight: 500,
                    margin: '0 0 0.5rem 0',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Quote Card */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(251,231,214,0.3) 100%)',
            border: '1px solid rgba(0,0,0,0.06)',
            borderRadius: '24px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
          }}
        >
          <div style={{ fontSize: '2rem', lineHeight: 1 }}>“</div>
          <p
            style={{
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              lineHeight: 1.5,
              margin: 0,
              color: 'var(--text-main)',
            }}
          >
            We don&apos;t just sell garments at Deer & Dan; we curate an experience of effortless confidence.
            When you slip into our 100% pure combed cotton shirts and relaxed tailored fits, you immediately feel
            the precision of authentic craftsmanship.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '9999px',
                background: '#111111',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '0.85rem',
              }}
            >
              R
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600 }}>{BRAND_DATA.founder}</strong>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{BRAND_DATA.founderRole}, Deer & Dan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
