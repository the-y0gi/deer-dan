'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND_DATA } from '../data/brand';

export default function StorePage() {
  const showroomGalleries = [
    {
      title: 'Quiet Luxury & Heritage Knits',
      subtitle: 'First Floor • West Wing',
      description: 'Warm natural wood shelving featuring waffle-knit polos, silk ascots, and pleated trouser styling.',
      image: '/images/rack-quiet-luxury.jpg',
    },
    {
      title: 'Dark Street Atelier',
      subtitle: 'First Floor • North Wing',
      description: 'Monochromatic utility gallery displaying heavy cotton overshirts, washed selvedge denim, and tactical footwear.',
      image: '/images/rack-street-atelier.jpg',
    },
    {
      title: 'Warm Architectural Arches',
      subtitle: 'Ground Floor • Main Hall',
      description: 'Halo-lit archway displays showcasing contemporary tees, graphic capsules, and curated everyday essentials.',
      image: '/images/rack-contemporary-arch.jpg',
    },
    {
      title: 'Womenswear Resort Suite',
      subtitle: 'Second Floor • Sunset Salon',
      description: 'Ambient lilac arch showcasing delicate eyelet embroidery tops, denim sets, and pastel summer coordinates.',
      image: '/images/rack-womens-arch.jpg',
    },
    {
      title: 'Youth & Smart Streetwear',
      subtitle: 'Ground Floor • South Wing',
      description: 'Emerald backlit arch housing coordinated utility sets, cargo shorts, and crossbody lifestyle accents.',
      image: '/images/rack-junior-coords.jpg',
    },
    {
      title: 'Summer Resort Wear Showcase',
      subtitle: 'Second Floor • Terrace Gallery',
      description: 'Statement printed camp shirts, relaxed waffle linen co-ords, and breezy warm-weather ensembles.',
      image: '/images/rack-resort-display.jpg',
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Flagship Store Hero Header */}
      <section style={{ paddingTop: '8.5rem', paddingBottom: '3.5rem' }}>
        <div className="luxury-container">
          <div style={{ maxWidth: '820px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
              Flagship Destination • Open Today 10:30 AM – 10:00 PM
            </span>

            <h1
              style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                margin: 0,
              }}
            >
              The Grand Flagship Store <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
                at Imlikheda Chowk, Chhindwara.
              </span>
            </h1>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Step into a sanctuary of architectural refinement and quiet luxury. Spanning multiple
              glass-fronted floors on MP SH 26, the <strong>Deer & Dan</strong> flagship showroom brings
              personalized haute couture and contemporary fashion to Madhya Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* Exterior Architecture Banner & Live Details Grid */}
      <section style={{ paddingBottom: '5rem' }}>
        <div className="luxury-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
            }}
          >
            {/* Real Building Facade Photo */}
            <div className="look-card-frame" style={{ padding: '0.85rem' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '500px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/images/store-facade.jpg"
                  alt="Deer & Dan Grand Glass Flagship Showroom in Chhindwara"
                  fill
                  priority
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: '1rem',
                    left: '1rem',
                    right: '1rem',
                    background: 'rgba(17, 17, 17, 0.9)',
                    backdropFilter: 'blur(12px)',
                    padding: '1.25rem',
                    borderRadius: '16px',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <p style={{ margin: 0, fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
                    Architectural Glass Facade
                  </p>
                  <h3 style={{ margin: '0.35rem 0 0 0', fontFamily: "'Newsreader', Georgia, serif", fontSize: '1.4rem', fontWeight: 500 }}>
                    Deer & Dan (डियर & डैन)
                  </h3>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)' }}>
                    Imlikheda Chowk, MP SH 26, Thuniya Bhand, Chhindwara, MP 480001
                  </p>
                </div>
              </div>
            </div>

            {/* Store Information & Direct Connect */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
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
                  Visiting Information
                </span>
                <h2
                  style={{
                    fontFamily: "'Newsreader', Georgia, serif",
                    fontSize: '2.4rem',
                    fontWeight: 400,
                    margin: 0,
                  }}
                >
                  Open 7 Days a Week
                </h2>
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  background: 'var(--card-bg)',
                  padding: '2rem',
                  borderRadius: '20px',
                  border: '1px solid var(--card-border)',
                }}
              >
                <div>
                  <strong style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                    ⏰ Operating Hours
                  </strong>
                  <p style={{ margin: '0.35rem 0 0 0', fontSize: '1.15rem', fontWeight: 600, color: '#10b981' }}>
                    10:30 AM – 10:00 PM
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Monday through Sunday (No holiday closures)</span>
                </div>

                <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '1rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                    📍 Physical Address
                  </strong>
                  <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.95rem', fontWeight: 500 }}>
                    {BRAND_DATA.address.full}
                  </p>
                  <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Plus Code: {BRAND_DATA.address.plusCode}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '1rem' }}>
                  <strong style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
                    👤 Founder & Creative Direction
                  </strong>
                  <p style={{ margin: '0.35rem 0 0 0', fontSize: '0.95rem', fontWeight: 600 }}>
                    {BRAND_DATA.founder}
                  </p>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{BRAND_DATA.founderRole}</span>
                </div>
              </div>

              {/* Direct Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a
                  href={BRAND_DATA.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-primary"
                  style={{ textDecoration: 'none' }}
                >
                  <span>Open in Google Maps</span>
                  <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                <a
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.4rem',
                    borderRadius: '9999px',
                    background: '#10b981',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    textDecoration: 'none',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.25)',
                  }}
                >
                  <span>💬 WhatsApp Stylist Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom Interior Galleries Grid */}
      <section style={{ padding: '5rem 0', borderTop: '1px solid var(--card-border)' }}>
        <div className="luxury-container">
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
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
              Interior Architecture
            </span>
            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Curated Showcase Galleries.
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '0.5rem' }}>
              Explore the dedicated visual zones across our multi-floor flagship showroom in Chhindwara.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {showroomGalleries.map((gallery, idx) => (
              <div
                key={idx}
                className="look-card-frame"
                style={{
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '280px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={gallery.image}
                    alt={gallery.title}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.85rem',
                      left: '0.85rem',
                      background: 'rgba(0,0,0,0.7)',
                      backdropFilter: 'blur(8px)',
                      color: '#ffffff',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {gallery.subtitle}
                  </div>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.35rem',
                      fontWeight: 500,
                      margin: '0 0 0.35rem 0',
                    }}
                  >
                    {gallery.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    {gallery.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section style={{ padding: '4rem 0 6rem', borderTop: '1px solid var(--card-border)' }}>
        <div className="luxury-container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 600,
                color: 'var(--accent)',
              }}
            >
              Interactive Map
            </span>
            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: '2.5rem',
                fontWeight: 400,
                margin: '0.5rem 0 0 0',
              }}
            >
              Find Us at Imlikheda Chowk
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
              Conveniently located on MP SH 26 with easy highway accessibility and on-site parking.
            </p>
          </div>

          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '420px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 15px 40px rgba(0,0,0,0.08)',
              border: '1px solid var(--card-border)',
            }}
          >
            <iframe
              src={BRAND_DATA.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deer & Dan Store Location Map"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
