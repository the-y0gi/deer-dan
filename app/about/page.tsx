'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND_DATA } from '../data/brand';
import { ATELIER_PILLARS } from '../data/looks';

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* About Page Hero */}
      <section style={{ paddingTop: '8.5rem', paddingBottom: '4rem' }}>
        <div className="luxury-container">
          <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <span className="badge-capsule">
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '9999px',
                  backgroundColor: '#10b981',
                }}
              />
              Our Heritage & Philosophy
            </span>

            <h1
              style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              The Art of Restraint. <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
                Pure Cotton. Indian Craft.
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.1rem',
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <strong>Deer & Dan</strong> was founded by{' '}
              <strong style={{ color: 'var(--text-main)' }}>{BRAND_DATA.founder}</strong> to redefine
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Stag Insignia Card */}
            <div
              className="look-card-frame"
              style={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '1.5rem',
                background: '#0d0d0d',
                color: '#ffffff',
                borderRadius: '24px',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '180px',
                  height: '180px',
                }}
              >
                <Image
                  src="/images/official-deer-logo.jpg"
                  alt="Deer & Dan Stag Horn Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: '1.8rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    margin: 0,
                  }}
                >
                  DEER & DAN
                </h3>
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.65 }}>
                  CLOTHING • ESTD. 2024
                </span>
              </div>

              <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0, maxWidth: '320px' }}>
                The stag horn crest represents quiet confidence, noble presence, and unwavering precision stitchcraft.
              </p>
            </div>

            {/* Right: Brand Philosophy Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    fontWeight: 600,
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
                    fontSize: '2.3rem',
                    fontWeight: 400,
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Every Stitch Has a Signature.
                </h2>
              </div>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                From our flagship showroom at Imlikheda Chowk in Chhindwara to patrons nationwide,
                Deer & Dan represents a return to enduring craftsmanship. We engineer garments mathematically
                to balance structure with movement.
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  paddingTop: '0.5rem',
                }}
              >
                <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '14px', border: '1px solid var(--card-border)' }}>
                  <p style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '1.8rem', margin: 0, fontWeight: 500 }}>
                    100%
                  </p>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
                    Fine Combed Cotton
                  </p>
                </div>

                <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '14px', border: '1px solid var(--card-border)' }}>
                  <p style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '1.8rem', margin: 0, fontWeight: 500 }}>
                    Zero
                  </p>
                  <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: '0.2rem 0 0 0' }}>
                    Synthetic Compromise
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
                fontWeight: 600,
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
              }}
            >
              Authenticated Details.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '0.5rem' }}>
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
            <div className="look-card-frame" style={{ padding: '1.25rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '260px', borderRadius: '14px', overflow: 'hidden' }}>
                <Image
                  src="/images/craft-tags-strip.jpg"
                  alt="Neck label, 100% Cotton Made in India tag, and kraft hangtag"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ paddingTop: '1rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem', fontFamily: "'Newsreader', Georgia, serif" }}>
                  100% Cotton Made in India
                </h4>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Every garment is wash-tested and authenticated with our registered wash-care specifications.
                </p>
              </div>
            </div>

            {/* Black Matte Specs Tag */}
            <div className="look-card-frame" style={{ padding: '1.25rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '260px', borderRadius: '14px', overflow: 'hidden' }}>
                <Image
                  src="/images/tag-black-matte-specs.jpg"
                  alt="Black matte hangtag on embroidered fabric"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ paddingTop: '1rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem', fontFamily: "'Newsreader', Georgia, serif" }}>
                  Matte Eyelet Hangtags
                </h4>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Braided durable cord, metal eyelets, and hallmark specifications affirming timeless quality.
                </p>
              </div>
            </div>

            {/* Pink Shirt Detail Insets */}
            <div className="look-card-frame" style={{ padding: '1.25rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '260px', borderRadius: '14px', overflow: 'hidden' }}>
                <Image
                  src="/images/signature-pink-with-tags.jpg"
                  alt="Blush rose pure cotton camp shirt with detail insets"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div style={{ paddingTop: '1rem' }}>
                <h4 style={{ margin: 0, fontSize: '1.1rem', fontFamily: "'Newsreader', Georgia, serif" }}>
                  Embroidered Stag Monogram
                </h4>
                <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
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
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <span
                style={{
                  fontSize: '0.72rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  fontWeight: 600,
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
                }}
              >
                An Unboxing Ritual of Pure Sophistication.
              </h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                Every Deer & Dan purchase is packaged in bespoke matte black heavy craft shopping bags,
                embellished with our signature white stag emblem, thank-you wax seal stickers, and custom
                branded tissue paper.
              </p>

              <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
                <Link href="/store" className="btn-luxury-primary" style={{ textDecoration: 'none' }}>
                  <span>Visit The Showroom</span>
                </Link>
                <Link
                  href="/collections"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.4rem',
                    borderRadius: '9999px',
                    border: '1px solid var(--card-border)',
                    background: 'rgba(255,255,255,0.4)',
                    color: 'var(--text-main)',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    textDecoration: 'none',
                  }}
                >
                  <span>Explore Looks &rarr;</span>
                </Link>
              </div>
            </div>

            <div className="look-card-frame" style={{ padding: '0.85rem' }}>
              <div style={{ position: 'relative', width: '100%', height: '440px', borderRadius: '16px', overflow: 'hidden' }}>
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
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--card-border)', paddingBottom: '0.75rem' }}>
                  <span style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '2rem', fontWeight: 500 }}>
                    {pillar.number}
                  </span>
                  <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {pillar.subtitle}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '1.4rem', fontWeight: 500, margin: 0 }}>
                  {pillar.title}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
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
