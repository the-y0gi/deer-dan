'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND_DATA } from '../data/brand';
import { ATELIER_PILLARS } from '../data/looks';
import { Sparkles, ShieldCheck, CheckCircle2, ArrowUpRight, Gift, MapPin, Award, Feather } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* About Page Hero */}
      <section style={{ paddingTop: '8.5rem', paddingBottom: '3.5rem' }}>
        <div className="luxury-container">
          <div style={{ maxWidth: '840px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                fontWeight: 700,
                color: 'var(--accent)',
                display: 'block',
              }}
            >
              The Atelier Heritage • Chhindwara
            </span>

            <h1
              style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.5rem, 5.2vw, 4.4rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                margin: 0,
                color: '#121212',
              }}
            >
              The Art of Restraint. <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
                Pure Cotton. Indian Craft.
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.08rem',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                margin: 0,
                maxWidth: '720px',
              }}
            >
              <strong style={{ color: '#121212' }}>Deer & Dan</strong> was founded by{' '}
              <strong style={{ color: '#121212' }}>{BRAND_DATA.founder}</strong> to redefine
              contemporary Indian dressing. We believe true luxury is quiet, tactile, and rooted in
              flawless materials. Refusing fast-fashion shortcuts, every piece is tailored from 100% natural
              combed cotton and artisanal linens.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Identity & Stag Insignia Showcase */}
      <section style={{ padding: '4rem 0', borderTop: '1px solid var(--card-border)' }}>
        <div className="luxury-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Stag Insignia Luxury Frame */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '460px',
                margin: '0 auto',
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#0a0a0a',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.22)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1 / 1',
                  background: '#0a0a0a',
                }}
              >
                <Image
                  src="/images/brand-crest-black.jpg"
                  alt="Deer & Dan Official Brand Insignia"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>

              {/* Bottom luxury caption bar */}
              <div
                style={{
                  padding: '1.25rem 1.5rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(18,18,18,0.95) 100%)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.6)',
                      display: 'block',
                    }}
                  >
                    Flagship Insignia
                  </span>
                  <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.82rem', color: '#ffffff', fontWeight: 500 }}>
                    Imlikheda Chowk • Chhindwara
                  </p>
                </div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    color: '#10b981',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                  }}
                >
                  <span>Estd. 2024</span> 
                </div>
              </div>
            </div>

            {/* Right: Brand Philosophy Text & Metrics */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  The Brand Manifesto
                </span>
                <h2
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                    fontWeight: 400,
                    margin: 0,
                    lineHeight: 1.15,
                    color: '#121212',
                  }}
                >
                  Every Stitch Has a Signature.
                </h2>
              </div>

              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
                From our flagship showroom at Imlikheda Chowk in Chhindwara to discerning patrons nationwide,
                Deer & Dan represents a return to enduring craftsmanship. We engineer garments mathematically
                to balance architectural structure with natural ease of movement.
              </p>

              {/* 3 Metric Cards */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                  gap: '0.85rem',
                  paddingTop: '0.25rem',
                }}
              >
                <div
                  style={{
                    padding: '1.15rem',
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1px solid var(--card-border)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.9rem',
                      margin: 0,
                      fontWeight: 500,
                      color: '#121212',
                      lineHeight: 1,
                    }}
                  >
                    100%
                  </p>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: '0.35rem 0 0 0', lineHeight: 1.3 }}>
                    Fine Combed Cotton
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.15rem',
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1px solid var(--card-border)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.9rem',
                      margin: 0,
                      fontWeight: 500,
                      color: '#121212',
                      lineHeight: 1,
                    }}
                  >
                    Zero
                  </p>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: '0.35rem 0 0 0', lineHeight: 1.3 }}>
                    Synthetic Compromise
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.15rem',
                    background: 'var(--card-bg)',
                    borderRadius: '16px',
                    border: '1px solid var(--card-border)',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.9rem',
                      margin: 0,
                      fontWeight: 500,
                      color: '#10b981',
                      lineHeight: 1,
                    }}
                  >
                    1-on-1
                  </p>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: '0.35rem 0 0 0', lineHeight: 1.3 }}>
                    Showroom Styling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Standards: Macro Strip & Inset Labels */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--card-border)' }}>
        <div className="luxury-container">
          <div style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 700,
                color: 'var(--accent)',
                display: 'block',
                marginBottom: '0.5rem',
              }}
            >
              Quality Certification
            </span>
            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 400,
                margin: 0,
                color: '#121212',
              }}
            >
              Authenticated Details.
            </h2>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '0.5rem' }}>
              Real macro proof of our 100% Cotton certification, custom woven neck tags, and hangtag specifications.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* Macro Strip */}
            <div
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '1.5rem',
                padding: '1.25rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '260px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/craft-tags-strip.jpg"
                  alt="Neck label, 100% Cotton Made in India tag, and kraft hangtag"
                  fill
                  style={{ objectFit: 'cover' }}
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
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#059669',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <ShieldCheck size={12} />
                  Certified 100% Cotton
                </div>
              </div>
              <div style={{ paddingTop: '1.15rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.2rem', fontFamily: "'Newsreader', Georgia, serif", fontWeight: 500 }}>
                  100% Cotton Made in India
                </h4>
                <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Every garment is wash-tested and authenticated with our registered wash-care specifications.
                </p>
              </div>
            </div>

            {/* Black Matte Specs Tag */}
            <div
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '1.5rem',
                padding: '1.25rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '260px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/tag-black-matte-specs.jpg"
                  alt="Black matte hangtag on embroidered fabric"
                  fill
                  style={{ objectFit: 'cover' }}
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
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#121212',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Award size={12} />
                  Bespoke Hardware
                </div>
              </div>
              <div style={{ paddingTop: '1.15rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.2rem', fontFamily: "'Newsreader', Georgia, serif", fontWeight: 500 }}>
                  Matte Eyelet Hangtags
                </h4>
                <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Braided durable cord, metal eyelets, and hallmark specifications affirming timeless quality.
                </p>
              </div>
            </div>

            {/* Pink Shirt Detail Insets */}
            <div
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '1.5rem',
                padding: '1.25rem',
                boxShadow: '0 10px 25px rgba(0,0,0,0.03)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '260px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/signature-pink-with-tags.jpg"
                  alt="Blush rose pure cotton camp shirt with detail insets"
                  fill
                  style={{ objectFit: 'cover' }}
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
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#121212',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Feather size={12} />
                  Direct Embroidery
                </div>
              </div>
              <div style={{ paddingTop: '1.15rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.2rem', fontFamily: "'Newsreader', Georgia, serif", fontWeight: 500 }}>
                  Embroidered Stag Monogram
                </h4>
                <p style={{ margin: '0.4rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  Precision satin thread embroidery executed directly onto breathable Indian cotton linen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Packaging & Client Experience */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--card-border)' }}>
        <div className="luxury-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  fontWeight: 700,
                  color: 'var(--accent)',
                }}
              >
                The Packaging Suite
              </span>
              <h2
                style={{
                  fontFamily: "'Newsreader', Georgia, serif",
                  fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.15,
                  color: '#121212',
                }}
              >
                An Unboxing Ritual of Pure Sophistication.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.75, margin: 0 }}>
                Every Deer & Dan purchase is packaged in bespoke matte black heavy craft shopping bags,
                embellished with our signature white stag emblem, thank-you wax seal stickers, and custom
                branded tissue paper.
              </p>

              {/* Luxury Feature Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: '0.5rem 0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Gift size={15} />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: '#1f2937', fontWeight: 500 }}>
                    Signature Matte Black Stag Shopping Bag with Rigid Base
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <CheckCircle2 size={15} />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: '#1f2937', fontWeight: 500 }}>
                    Authentic Wax Seal Sticker & Kraft Specification Hangtag
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '9999px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={15} />
                  </div>
                  <span style={{ fontSize: '0.88rem', color: '#1f2937', fontWeight: 500 }}>
                    Complimentary on every in-store purchase at Imlikheda Chowk
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', paddingTop: '0.25rem' }}>
                <Link href="/store" className="btn-luxury-primary" style={{ textDecoration: 'none' }}>
                  <span>Visit The Showroom</span>
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="/collections"
                  className="btn-luxury-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Explore Looks</span>
                </Link>
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid var(--card-border)',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.08)',
                padding: '0.85rem',
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
                  src="/images/packaging-luxury-shopping-bag.jpg"
                  alt="Deer & Dan luxury black shopping bag, thank you sticker seal and price tags"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--card-border)' }}>
        <div className="luxury-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {ATELIER_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '1.5rem',
                  padding: '2.25rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid var(--card-border)',
                    paddingBottom: '0.85rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '2.2rem',
                      fontWeight: 500,
                      color: '#121212',
                      lineHeight: 1,
                    }}
                  >
                    {pillar.number}
                  </span>
                  <span
                    style={{
                      fontSize: '0.68rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--text-muted)',
                      fontWeight: 600,
                    }}
                  >
                    {pillar.subtitle}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: '1.45rem',
                    fontWeight: 500,
                    margin: 0,
                    color: '#121212',
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65, margin: 0 }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
