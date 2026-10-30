'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LookModal from '../components/LookModal';
import LookbookForm from '../components/LookbookForm';
import Image from 'next/image';
import { COLLECTIONS, LOOKS, Look } from '../data/looks';

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inquiryLook, setInquiryLook] = useState<Look | null>(null);

  const filteredLooks = LOOKS.filter((look) => {
    const matchesCategory = selectedCategory === 'all' || look.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      look.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      look.fabric.toLowerCase().includes(searchQuery.toLowerCase()) ||
      look.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleInquire = (look: Look | null) => {
    setInquiryLook(look);
    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar onOpenInquiry={() => handleInquire(null)} />

      {/* Collections Page Hero Header */}
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
                }}
              />
              2026 Curated Showcase • Flagship Lineup
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
              The Curated Lookbook & <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
                Seasonal Silhouettes.
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
              Every garment in the Deer & Dan collection is crafted with intention—from 100% pure Indian
              combed cotton and breathable linen sets to tailored denim and quiet luxury knitwear.
              Click any look to inspect fabric compositions and styling specifications.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Search Input Bar */}
            <div style={{ maxWidth: '420px', position: 'relative' }}>
              <input
                type="text"
                placeholder="Search by fabric, silhouette, or style..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.8rem 1.25rem 0.8rem 2.75rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--card-border)',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  fontSize: '0.85rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  color: 'var(--text-main)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                }}
              />
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter Pills */}
            <div
              className="no-scrollbar"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                paddingBottom: '0.25rem',
              }}
            >
              {COLLECTIONS.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '0.55rem 1.2rem',
                      borderRadius: '9999px',
                      fontSize: '0.74rem',
                      fontWeight: active ? 700 : 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.2s ease',
                      background: active ? '#111111' : 'rgba(255,255,255,0.6)',
                      color: active ? '#ffffff' : 'var(--text-muted)',
                      border: active ? 'none' : '1px solid var(--card-border)',
                      cursor: 'pointer',
                      boxShadow: active ? '0 4px 12px rgba(0,0,0,0.2)' : 'none',
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook Grid Section */}
      <section style={{ paddingBottom: '6rem' }}>
        <div className="luxury-container">
          <div className="collection-grid-layout">
            {filteredLooks.map((look) => (
              <article
                key={look.id}
                onClick={() => setSelectedLook(look)}
                className="collection-card"
                style={{ cursor: 'pointer' }}
              >
                {/* Image Box */}
                <div className="collection-card-img-wrap">
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(0, 0, 0, 0.75)',
                      color: '#ffffff',
                      padding: '0.25rem 0.65rem',
                      borderRadius: '9999px',
                      fontSize: '0.65rem',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      backdropFilter: 'blur(8px)',
                    }}
                  >
                    LOOK {look.number}
                  </div>
                </div>

                {/* Text Info */}
                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    flex: 1,
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--text-muted)',
                        marginBottom: '0.35rem',
                      }}
                    >
                      <span>{look.season}</span>
                      <span style={{ textTransform: 'capitalize' }}>{look.category}</span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                        fontSize: '1.45rem',
                        fontWeight: 500,
                        lineHeight: 1.25,
                        margin: 0,
                      }}
                    >
                      {look.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.55,
                        marginTop: '0.5rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {look.description}
                    </p>
                  </div>

                  <div
                    style={{
                      paddingTop: '0.75rem',
                      borderTop: '1px solid var(--card-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.72rem',
                    }}
                  >
                    <span style={{ fontFamily: 'monospace', opacity: 0.75, fontSize: '0.68rem' }}>
                      {look.tags[0]}
                    </span>
                    <span
                      style={{
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--accent)',
                      }}
                    >
                      Inspect Specs &rarr;
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredLooks.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '5rem 1rem',
                color: 'var(--text-muted)',
              }}
            >
              <p style={{ fontSize: '1.1rem', margin: 0 }}>No silhouettes found matching your search.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="btn-luxury-secondary"
                style={{ marginTop: '1rem' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Inquiry Form */}
      <LookbookForm
        selectedLook={inquiryLook}
        onCloseInquiry={() => setInquiryLook(null)}
      />

      <Footer />

      {selectedLook && (
        <LookModal
          look={selectedLook}
          onClose={() => setSelectedLook(null)}
          onInquire={(look) => handleInquire(look)}
        />
      )}
    </div>
  );
}
