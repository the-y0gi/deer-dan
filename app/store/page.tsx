'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND_DATA } from '../data/brand';
import {
  Clock,
  MapPin,
  User,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Gift,
  CheckCircle2,
  Car,
  Building,
} from 'lucide-react';

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

  const storeAmenities = [
    {
      num: '01',
      tag: 'Architectural Destination',
      icon: Building,
      title: 'Multi-Floor Glasshouse',
      desc: 'Spanning multiple soaring architectural levels on MP SH 26 with grand ambient display arches.',
    },
    {
      num: '02',
      tag: '1-on-1 Consultation',
      icon: User,
      title: 'Personal Styling Lounges',
      desc: 'Dedicated private fitting suites with curated trial sessions and bespoke sizing advice.',
    },
    {
      num: '03',
      tag: 'Bespoke Unboxing',
      icon: Gift,
      title: 'VIP Packaging Bar',
      desc: 'Complimentary signature matte black stag bags with wax seal stickers on every purchase.',
    },
    {
      num: '04',
      tag: 'Valet & Parking',
      icon: Car,
      title: 'Easy Highway Accessibility',
      desc: 'Prominently located at Imlikheda Chowk on MP SH 26 with effortless on-site parking.',
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Flagship Store Hero Header */}
      <section style={{ paddingTop: '8.5rem', paddingBottom: '3.5rem' }}>
        <div className="luxury-container">
          <div style={{ maxWidth: '840px', display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>

              <span
                style={{
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: 'var(--accent)',
                }}
              >
                Flagship Destination • Open Daily 10:30 AM – 10:00 PM
              </span>
            </div>

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
              The Grand Flagship Store <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
                at Imlikheda Chowk, Chhindwara.
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
              Step into a sanctuary of architectural refinement and quiet luxury. Spanning multiple
              glass-fronted floors on MP SH 26, the <strong style={{ color: '#121212' }}>Deer & Dan</strong> flagship showroom brings
              personalized haute couture and contemporary Indian fashion to Madhya Pradesh.
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
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Real Building Facade Photo */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: '24px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid var(--card-border)',
                boxShadow: '0 20px 45px -10px rgba(0,0,0,0.08)',
                padding: '0.85rem',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '520px',
                  borderRadius: '18px',
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
                    bottom: '1.25rem',
                    left: '1.25rem',
                    right: '1.25rem',
                    background: 'rgba(17, 17, 17, 0.92)',
                    backdropFilter: 'blur(16px)',
                    padding: '1.35rem',
                    borderRadius: '18px',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                  }}
                >
                  <span
                    style={{
                      margin: 0,
                      fontSize: '0.68rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#10b981',
                      fontWeight: 600,
                    }}
                  >
                    Architectural Glass Facade
                  </span>
                  <h3
                    style={{
                      margin: '0.35rem 0 0 0',
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontSize: '1.45rem',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Deer & Dan (डियर & डैन)
                  </h3>
                  <p
                    style={{
                      margin: '0.25rem 0 0 0',
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.8)',
                      lineHeight: 1.45,
                    }}
                  >
                    Imlikheda Chowk, MP SH 26, Thuniya Bhand, Chhindwara, MP 480001
                  </p>
                </div>
              </div>
            </div>

            {/* Store Information & Direct Connect */}
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
                  Visiting Information
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
                  Open 7 Days a Week
                </h2>
              </div>

              {/* Information Cards */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  background: 'var(--card-bg)',
                  padding: '2rem',
                  borderRadius: '24px',
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.03)',
                }}
              >
                {/* Operating Hours */}
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(16, 185, 129, 0.12)',
                      color: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--text-muted)',
                      }}
                    >
                      Operating Hours
                    </strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '1.2rem', fontWeight: 600, color: '#047857' }}>
                      10:30 AM – 10:00 PM
                    </p>
                    <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                      Monday through Sunday • No holiday closures
                    </span>
                  </div>
                </div>

                {/* Physical Address */}
                <div
                  style={{
                    borderTop: '1px solid var(--card-border)',
                    paddingTop: '1.15rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(0, 0, 0, 0.05)',
                      color: '#121212',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--text-muted)',
                      }}
                    >
                      Physical Landmark
                    </strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.92rem', fontWeight: 500, color: '#1f2937', lineHeight: 1.45 }}>
                      {BRAND_DATA.address.full}
                    </p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem', display: 'block' }}>
                      Google Plus Code: <strong>{BRAND_DATA.address.plusCode}</strong>
                    </span>
                  </div>
                </div>

                {/* Founder & Creative Direction */}
                <div
                  style={{
                    borderTop: '1px solid var(--card-border)',
                    paddingTop: '1.15rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(0, 0, 0, 0.05)',
                      color: '#121212',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <User size={18} />
                  </div>
                  <div>
                    <strong
                      style={{
                        display: 'block',
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--text-muted)',
                      }}
                    >
                      Founder & Creative Direction
                    </strong>
                    <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.95rem', fontWeight: 600, color: '#121212' }}>
                      {BRAND_DATA.founder}
                    </p>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{BRAND_DATA.founderRole}</span>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                <a
                  href={BRAND_DATA.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-primary"
                  style={{ textDecoration: 'none' }}
                >
                  <MapPin size={16} />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.55rem',
                    padding: '0.85rem 1.6rem',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, #25D366 0%, #059669 100%)',
                    color: '#ffffff',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    textDecoration: 'none',
                    boxShadow: '0 8px 20px -3px rgba(16, 185, 129, 0.35)',
                  }}
                >
                  <MessageCircle size={17} fill="#ffffff" color="#10b981" />
                  <span>WhatsApp Stylist Chat</span>
                  <ArrowUpRight size={15} />
                </a>
{/* 
                <Link
                  href="/contact"
                  className="btn-luxury-secondary"
                  style={{ textDecoration: 'none', padding: '0.85rem 1.4rem' }}
                >
                  <span>Book In-Store Visit</span>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Amenities & Hospitality Suite */}
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
              Showroom Standards
            </span>
            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.2rem, 3.8vw, 3rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                margin: 0,
                color: '#121212',
              }}
            >
              Designed for Unhurried Luxury.
            </h2>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.65, marginTop: '0.5rem' }}>
              Every touchpoint at our Imlikheda Chowk flagship is engineered for sensory calm, bespoke fit precision, and discrete hospitality.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {storeAmenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: '2rem 1.75rem',
                    background: 'var(--card-bg)',
                    borderRadius: '22px',
                    border: '1px solid var(--card-border)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.15rem',
                    position: 'relative',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                  }}
                  className="amenity-card-hover"
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.12) 0%, rgba(251, 231, 214, 0.35) 100%)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        color: '#047857',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)',
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontSize: '1.45rem',
                        fontWeight: 400,
                        color: 'var(--text-muted)',
                        opacity: 0.5,
                      }}
                    >
                      {amenity.num}
                    </span>
                  </div>

                  <div>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: '#059669',
                        fontWeight: 700,
                        display: 'block',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {amenity.tag}
                    </span>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: '1.25rem',
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontWeight: 500,
                        color: '#121212',
                        lineHeight: 1.25,
                      }}
                    >
                      {amenity.title}
                    </h3>
                  </div>

                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.86rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    {amenity.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showroom Interior Galleries Grid */}
      <section style={{ padding: '5.5rem 0', borderTop: '1px solid var(--card-border)' }}>
        <div className="luxury-container">
          <div style={{ maxWidth: '640px', marginBottom: '3.5rem' }}>
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
              Interior Architecture
            </span>
            <h2
              style={{
                fontFamily: "'Newsreader', Georgia, serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                fontWeight: 400,
                lineHeight: 1.15,
                margin: 0,
                color: '#121212',
              }}
            >
              Curated Showcase Galleries.
            </h2>
            <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '0.5rem' }}>
              Explore the dedicated visual zones across our multi-floor flagship showroom in Chhindwara.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.25rem',
            }}
          >
            {showroomGalleries.map((gallery, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '1.5rem',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '290px',
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
                      background: 'rgba(0,0,0,0.72)',
                      backdropFilter: 'blur(10px)',
                      color: '#ffffff',
                      padding: '0.35rem 0.85rem',
                      borderRadius: '9999px',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      border: '1px solid rgba(255,255,255,0.15)',
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
                      color: '#121212',
                    }}
                  >
                    {gallery.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
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
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 2.5rem' }}>
            <span
              style={{
                fontSize: '0.72rem',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontWeight: 700,
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
                color: '#121212',
              }}
            >
              Find Us at Imlikheda Chowk
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.4rem', lineHeight: 1.5 }}>
              Conveniently located on MP SH 26 with easy highway accessibility and dedicated on-site parking.
            </p>
          </div>

          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '440px',
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
