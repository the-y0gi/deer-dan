'use client';

import { useState, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND_DATA } from '../data/brand';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '12:00 PM',
    service: 'Personal Showroom Styling',
    note: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section style={{ paddingTop: '8.5rem', paddingBottom: '3.5rem' }}>
        <div className="luxury-container">
          <div style={{ maxWidth: '780px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
              Showroom Concierge • Chhindwara
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
              Connect with Our <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
                Styling Concierge.
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
              Whether you are planning a visit to our multi-floor glass showroom at Imlikheda Chowk,
              requesting an exclusive digital lookbook, or seeking personal styling guidance, our team
              is at your service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid: Details on Left, Interactive Form on Right */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="luxury-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
            }}
          >
            {/* Left: Contact Information Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* WhatsApp Quick CTA Box */}
              <div
                style={{
                  background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(255,255,255,0.7) 100%)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.04)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>💬</span>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', fontFamily: "'Newsreader', Georgia, serif" }}>
                    Instant WhatsApp Styling
                  </h3>
                </div>
                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Directly chat with our flagship store stylist for size availability, custom styling advice,
                  or to reserve a private dressing suite.
                </p>
                <div>
                  <a
                    href={BRAND_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.4rem',
                      borderRadius: '9999px',
                      background: '#10b981',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      textDecoration: 'none',
                      boxShadow: '0 4px 15px rgba(16,185,129,0.25)',
                    }}
                  >
                    <span>Start WhatsApp Conversation</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>

              {/* Physical Store Details */}
              <div
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '20px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div>
                  <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', fontWeight: 600 }}>
                    📍 Flagship Showroom
                  </span>
                  <h4 style={{ margin: '0.35rem 0 0 0', fontSize: '1.2rem', fontFamily: "'Newsreader', Georgia, serif" }}>
                    Deer & Dan (डियर & डैन)
                  </h4>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {BRAND_DATA.address.full}
                  </p>
                  <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    Plus Code: {BRAND_DATA.address.plusCode}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', fontWeight: 600 }}>
                    ⏰ Operating Hours
                  </span>
                  <p style={{ margin: '0.35rem 0 0 0', fontSize: '1.05rem', fontWeight: 600, color: '#10b981' }}>
                    10:30 AM – 10:00 PM
                  </p>
                  <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Open Monday through Sunday</span>
                </div>

                <div style={{ borderTop: '1px solid var(--card-border)', paddingTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', fontWeight: 600 }}>
                    📞 Direct Channels
                  </span>
                  <a href={`tel:${BRAND_DATA.phone}`} style={{ fontSize: '0.86rem', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500 }}>
                    Phone: {BRAND_DATA.phoneFormatted}
                  </a>
                  <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    Instagram: {BRAND_DATA.instagram}
                  </span>
                  <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    Website: {BRAND_DATA.website}
                  </span>
                </div>
              </div>

              {/* Single Packaging Bag Graphic */}
              <div
                className="look-card-frame"
                style={{
                  padding: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                <div style={{ position: 'relative', width: '90px', height: '90px', borderRadius: '12px', overflow: 'hidden', flexShrink: 0 }}>
                  <Image
                    src="/images/packaging-single-bag.jpg"
                    alt="Deer & Dan luxury packaging bag"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <h5 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>
                    Complimentary VIP Packaging
                  </h5>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Every showroom purchase includes our signature matte black gift bag and seal.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Appointment / Inquiry Form */}
            <div
              className="look-card-frame"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderRadius: '24px',
                background: 'var(--card-bg)',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '9999px',
                      backgroundColor: 'rgba(16, 185, 129, 0.15)',
                      color: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.75rem',
                    }}
                  >
                    ✓
                  </div>
                  <h3 style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '2.2rem', fontWeight: 400, margin: 0 }}>
                    Inquiry Received
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', maxWidth: '380px', lineHeight: 1.6, margin: 0 }}>
                    Thank you, {formData.name}. Our showroom concierge has received your request and will reach out via WhatsApp / phone shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-luxury-secondary"
                    style={{ marginTop: '1rem' }}
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div>
                    <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--accent)', fontWeight: 600 }}>
                      Concierge Form
                    </span>
                    <h3 style={{ fontFamily: "'Newsreader', Georgia, serif", fontSize: '2.2rem', fontWeight: 400, margin: '0.35rem 0 0 0' }}>
                      Book a Private Walkthrough
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      Reserve a styling session or request our full digital lookbook.
                    </p>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '12px',
                        border: '1px solid var(--card-border)',
                        background: 'rgba(255,255,255,0.7)',
                        outline: 'none',
                        fontSize: '0.88rem',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '12px',
                        border: '1px solid var(--card-border)',
                        background: 'rgba(255,255,255,0.7)',
                        outline: 'none',
                        fontSize: '0.88rem',
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.15rem',
                          borderRadius: '12px',
                          border: '1px solid var(--card-border)',
                          background: 'rgba(255,255,255,0.7)',
                          outline: 'none',
                          fontSize: '0.88rem',
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                        Preferred Time
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.85rem 1.15rem',
                          borderRadius: '12px',
                          border: '1px solid var(--card-border)',
                          background: 'rgba(255,255,255,0.7)',
                          outline: 'none',
                          fontSize: '0.88rem',
                        }}
                      >
                        <option value="11:00 AM">11:00 AM (Morning)</option>
                        <option value="02:00 PM">02:00 PM (Afternoon)</option>
                        <option value="05:00 PM">05:00 PM (Evening)</option>
                        <option value="08:00 PM">08:00 PM (Late Evening)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                      Service Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '12px',
                        border: '1px solid var(--card-border)',
                        background: 'rgba(255,255,255,0.7)',
                        outline: 'none',
                        fontSize: '0.88rem',
                      }}
                    >
                      <option value="Personal Showroom Styling">Personal Showroom Styling</option>
                      <option value="Wedding / Event Wardrobe Curation">Wedding / Event Wardrobe Curation</option>
                      <option value="Digital Lookbook Dispatch">Digital Lookbook Dispatch</option>
                      <option value="Custom Fit Consultation">Custom Fit Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Any specific silhouette or fabric preference..."
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.85rem 1.15rem',
                        borderRadius: '12px',
                        border: '1px solid var(--card-border)',
                        background: 'rgba(255,255,255,0.7)',
                        outline: 'none',
                        fontSize: '0.88rem',
                        resize: 'none',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-luxury-primary"
                    style={{ width: '100%', padding: '0.95rem', justifyContent: 'center' }}
                  >
                    <span>{loading ? 'Submitting...' : 'Confirm Concierge Request'}</span>
                    <span>&rarr;</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="luxury-container">
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '380px',
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
              title="Deer & Dan Store Map Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
