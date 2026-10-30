'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import { BRAND_DATA } from '../data/brand';

interface AtelierStoryProps {
  theme?: string;
}

export default function AtelierStory({}: AtelierStoryProps) {
  const pillarCards = [
    {
      num: '01',
      tag: 'Textile Origin',
      title: '100% Pure Combed Cotton',
      desc: 'Crafted without synthetic compromise. Breathable long-staple fibers tailored for all-day comfort in Indian climates.',
      image: '/images/craft-tags-strip.jpg',
      badge: 'Certified Natural Fiber',
    },
    {
      num: '02',
      tag: 'Originals Denim',
      title: 'Debossed Leather & Selvedge',
      desc: 'Authentic Deer & Dan denim back patch, signature wave pocket stitch, and heavy-duty tailored hardware.',
      image: '/images/denim-jeans-leather-patch.jpg',
      badge: 'Stag Crest Insignia',
    },
    {
      num: '03',
      tag: 'Showroom Heritage',
      title: 'Boutique Packaging & Service',
      desc: 'Signature matte black stag shopping bags, bespoke hangtags, and one-on-one styling at Imlikheda Chowk.',
      image: '/images/packaging-luxury-shopping-bag.jpg',
      badge: 'Flagship Destination',
    },
  ];

  return (
    <section
      id="atelier"
      style={{
        padding: '4.5rem 0',
        position: 'relative',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div className="luxury-container" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        {/* Section Header: Crisp, Compact & Editorial */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div style={{ maxWidth: '580px' }}>
            <span
              style={{
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                fontWeight: 700,
                color: 'var(--accent)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                marginBottom: '0.45rem',
              }}
            >
              The Craft & Heritage
            </span>
            <h2
              style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 3.8vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Pure Cotton Craftsmanship. <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
                Tailored for Modern India.
              </span>
            </h2>
          </div>

          <div style={{ maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Deer & Dan was founded by <strong>{BRAND_DATA.founder}</strong> on a strict commitment to natural fiber purity. Every shirt, trouser, and denim piece represents authentic tailoring and quiet luxury.
            </p>
            <div>
              <Link
                href="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                }}
              >
                <span>Read Full Atelier Story</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Pillars Visual Cards Grid - Clean, Balanced & Perfectly Sized */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {pillarCards.map((card) => (
            <div
              key={card.num}
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '20px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                boxShadow: '0 8px 24px rgba(0,0,0,0.03)',
              }}
            >
              {/* Image Container with Floating Badges */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  background: '#f4ede6',
                }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 380px"
                />

                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    background: 'rgba(255, 255, 255, 0.92)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#111111',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                >
                  {card.tag}
                </div>

                <div
                  style={{
                    position: 'absolute',
                    bottom: '0.65rem',
                    right: '0.65rem',
                    background: 'rgba(17, 17, 17, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                  }}
                >
                  <ShieldCheck size={11} color="#10b981" />
                  <span>{card.badge}</span>
                </div>
              </div>

              {/* Text Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', padding: '0 0.35rem 0.35rem 0.35rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3
                    style={{
                      fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                      fontSize: '1.3rem',
                      fontWeight: 500,
                      margin: 0,
                    }}
                  >
                    {card.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.25rem',
                      fontWeight: 300,
                      color: 'var(--text-muted)',
                    }}
                  >
                    {card.num}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Quote Card: Grand, Prominent & Luxurious */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(251,231,214,0.4) 100%)',
            border: '1px solid var(--card-border)',
            borderRadius: '24px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div style={{ fontSize: '3rem', lineHeight: 1, fontFamily: 'Georgia, serif', color: 'var(--accent)' }}>“</div>
          <p
            style={{
              fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.25rem, 2.5vw, 1.7rem)',
              fontStyle: 'italic',
              fontWeight: 400,
              lineHeight: 1.5,
              margin: 0,
              color: 'var(--text-main)',
              maxWidth: '960px',
            }}
          >
            We don&apos;t just sell garments at Deer & Dan; we curate an experience of effortless confidence. When you slip into our 100% pure combed cotton shirts and relaxed tailored fits, you immediately feel the precision of authentic craftsmanship.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginTop: '0.5rem' }}>
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '9999px',
                background: '#111111',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              R
            </div>
            <div>
              <strong style={{ display: 'block', fontSize: '0.95rem', fontWeight: 600 }}>{BRAND_DATA.founder}</strong>
              <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>{BRAND_DATA.founderRole}, Deer & Dan</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
