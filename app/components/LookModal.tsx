'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Look } from '../data/looks';

interface LookModalProps {
  look: Look | null;
  onClose: () => void;
  onInquire: (look: Look) => void;
  theme?: string;
}

export default function LookModal({ look, onClose, onInquire }: LookModalProps) {
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
          maxWidth: '980px',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: '2rem',
          background: 'var(--card-bg)',
          color: 'var(--text-main)',
          border: '1px solid var(--card-border)',
          boxShadow: '0 30px 60px rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(20px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
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
        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '460px',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              backgroundColor: '#111',
            }}
          >
            <Image
              src={images[selectedImg] || look.image}
              alt={look.title}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>

          {images.length > 1 && (
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  style={{
                    position: 'relative',
                    width: '60px',
                    height: '80px',
                    borderRadius: '0.75rem',
                    overflow: 'hidden',
                    border: selectedImg === i ? '2px solid #111111' : '2px solid transparent',
                    opacity: selectedImg === i ? 1 : 0.6,
                    cursor: 'pointer',
                  }}
                >
                  <Image src={img} alt="thumb" fill style={{ objectFit: 'cover' }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Specs & Atelier Notes */}
        <div
          style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <span
                style={{
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: 'var(--accent)',
                  fontWeight: 600,
                }}
              >
                Look {look.number} • {look.season}
              </span>
              <h3
                style={{
                  fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                  fontSize: '2rem',
                  fontWeight: 500,
                  margin: '0.25rem 0 0',
                }}
              >
                {look.title}
              </h3>
            </div>

            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
              {look.description}
            </p>

            {/* Specifications */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.85rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--card-border)',
                fontSize: '0.75rem',
              }}
            >
              <div>
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', display: 'block' }}>
                  Fabric & Textile
                </span>
                <p style={{ fontWeight: 600, margin: '0.2rem 0 0' }}>{look.fabric}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', display: 'block' }}>
                  Silhouette Architecture
                </span>
                <p style={{ fontWeight: 600, margin: '0.2rem 0 0' }}>{look.silhouette}</p>
              </div>

              <div>
                <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', display: 'block' }}>
                  Hardware & Finish
                </span>
                <p style={{ fontWeight: 600, margin: '0.2rem 0 0' }}>{look.hardware}</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', paddingTop: '0.5rem' }}>
              {look.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.25rem 0.65rem',
                    borderRadius: '9999px',
                    fontSize: '0.65rem',
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

          {/* Inquire Action */}
          <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--card-border)' }}>
            <button
              onClick={() => {
                onClose();
                onInquire(look);
              }}
              className="btn-luxury-primary"
              style={{ width: '100%', padding: '1rem', textAlign: 'center' }}
            >
              Inquire for Private Salon Viewing
            </button>
            <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem', margin: '0.5rem 0 0' }}>
              Exclusive archival piece • Viewing by private salon appointment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
