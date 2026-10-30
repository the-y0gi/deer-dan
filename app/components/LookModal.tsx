'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Look } from '../data/looks';
import { BRAND_DATA } from '../data/brand';

interface LookModalProps {
  look: Look | null;
  onClose: () => void;
  onInquire?: (look: Look) => void;
  theme?: string;
}

export default function LookModal({ look, onClose }: LookModalProps) {
  const [selectedImg, setSelectedImg] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!look) return null;

  const images = [look.image, ...(look.detailImages || [])];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Look Details"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      />

      {/* Modal Dialog */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: '960px',
          maxHeight: 'min(94vh, 660px)',
          overflow: 'hidden',
          borderRadius: '1.75rem',
          background: 'var(--card-bg)',
          color: 'var(--text-main)',
          border: '1px solid var(--card-border)',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          alignItems: 'center',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            zIndex: 20,
            width: '36px',
            height: '36px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
          aria-label="Close modal"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: Image Showcase */}
        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '410px',
              borderRadius: '1.15rem',
              overflow: 'hidden',
              backgroundColor: '#111',
            }}
          >
            <Image
              src={images[selectedImg] || look.image}
              alt={look.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>

          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  style={{
                    position: 'relative',
                    width: '54px',
                    height: '68px',
                    borderRadius: '0.65rem',
                    overflow: 'hidden',
                    border: selectedImg === i ? '2px solid #111111' : '2px solid transparent',
                    opacity: selectedImg === i ? 1 : 0.6,
                    cursor: 'pointer',
                    padding: 0,
                  }}
                >
                  <Image src={img} alt="thumb" fill style={{ objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Specs & Notes */}
        <div
          style={{
            padding: '1.5rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
            <div>
              <span
                style={{
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--accent)',
                  fontWeight: 600,
                }}
              >
                Look {look.number} • {look.season}
              </span>
              <h3
                style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontSize: '1.75rem',
                  fontWeight: 500,
                  margin: '0.2rem 0 0',
                  lineHeight: 1.2,
                }}
              >
                {look.title}
              </h3>
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
              {look.description}
            </p>

            {/* Specifications */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.65rem',
                paddingTop: '0.75rem',
                borderTop: '1px solid var(--card-border)',
                fontSize: '0.72rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', display: 'block' }}>
                  Fabric & Textile
                </span>
                <p style={{ fontWeight: 600, margin: '0.15rem 0 0' }}>{look.fabric}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', display: 'block' }}>
                  Fit & Silhouette
                </span>
                <p style={{ fontWeight: 600, margin: '0.15rem 0 0' }}>{look.silhouette}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', display: 'block' }}>
                  Details & Craftsmanship
                </span>
                <p style={{ fontWeight: 600, margin: '0.15rem 0 0' }}>{look.hardware}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.35rem' }}>
              {look.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.2rem 0.55rem',
                    borderRadius: '9999px',
                    fontSize: '0.62rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-muted)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Inquire Action: Only clean WhatsApp button */}
          <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--card-border)' }}>
            <a
              href={`https://wa.me/91${BRAND_DATA.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                `Hello Deer & Dan! I am interested in Look ${look.number}: "${look.title}". Could you please check availability and sizing at the Chhindwara showroom?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-primary"
              style={{
                width: '100%',
                padding: '0.9rem 1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                textDecoration: 'none',
                borderRadius: '9999px',
              }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
