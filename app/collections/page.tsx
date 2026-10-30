'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LookModal from '../components/LookModal';
import Image from 'next/image';
import { COLLECTIONS, LOOKS, Look } from '../data/looks';
import { BRAND_DATA } from '../data/brand';
import { Search, X, ArrowUpRight, Feather, Sparkles } from 'lucide-react';

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

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
    if (look) {
      const waText = encodeURIComponent(
        `Hello Deer & Dan, I would like to inquire about Look ${look.number}: ${look.title} (Fabric: ${look.fabric})`
      );
      window.open(`https://wa.me/91${BRAND_DATA.phone}?text=${waText}`, '_blank');
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar onOpenInquiry={() => handleInquire(null)} />

      {/* Collections Page Hero Header */}
      <section style={{ paddingTop: '8.5rem', paddingBottom: '3rem' }}>
        <div className="luxury-container">
          <div style={{ maxWidth: '840px', display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
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
              The Atelier Lookbook • 2026 Curated Showcase
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
              The Curated Lookbook & <br />
              <span style={{ fontStyle: 'italic', fontWeight: 300, opacity: 0.85 }}>
                Seasonal Silhouettes.
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
              Every garment in the Deer & Dan collection is crafted with intention—from 100% pure Indian
              combed cotton and breathable linen sets to tailored denim and quiet luxury knitwear.
              Select any look to inspect fabric compositions and styling specifications.
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
            {/* Search Input Bar with Result Count */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <div style={{ width: '100%', maxWidth: '440px', position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    left: '1.1rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#71717a',
                    display: 'flex',
                    alignItems: 'center',
                    pointerEvents: 'none',
                  }}
                >
                  <Search size={16} />
                </div>
                <input
                  type="text"
                  placeholder="Search fabric, silhouette, cotton, denim..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.85rem 2.5rem 0.85rem 2.85rem',
                    borderRadius: '9999px',
                    border: '1.5px solid rgba(0, 0, 0, 0.09)',
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(12px)',
                    fontSize: '0.88rem',
                    fontFamily: 'inherit',
                    outline: 'none',
                    color: '#121212',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                    transition: 'all 0.2s ease',
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#71717a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0,0,0,0.06)',
                      borderRadius: '9999px',
                      width: '22px',
                      height: '22px',
                      cursor: 'pointer',
                    }}
                    aria-label="Clear search"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Counter Tag */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}
              >
                <span>
                  Showing <strong>{filteredLooks.length}</strong> {filteredLooks.length === 1 ? 'silhouette' : 'silhouettes'}
                </span>
              </div>
            </div>

            {/* Category Filter Pills (Refined Luxury Editorial Tabs) */}
            <div
              className="no-scrollbar"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.55rem',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                paddingBottom: '0.35rem',
              }}
            >
              {COLLECTIONS.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      padding: '0.6rem 1.25rem',
                      borderRadius: '9999px',
                      fontSize: '0.74rem',
                      fontWeight: active ? 700 : 500,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      background: active ? '#121212' : 'rgba(255, 255, 255, 0.85)',
                      color: active ? '#ffffff' : 'var(--text-muted)',
                      border: active ? '1.5px solid #121212' : '1.5px solid rgba(0, 0, 0, 0.08)',
                      cursor: 'pointer',
                      boxShadow: active
                        ? '0 4px 14px rgba(0, 0, 0, 0.18)'
                        : '0 2px 6px rgba(0, 0, 0, 0.02)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                    }}
                  >
                    <span>{cat.label}</span>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 600,
                        padding: '0.1rem 0.45rem',
                        borderRadius: '9999px',
                        background: active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.05)',
                        color: active ? '#ffffff' : '#71717a',
                      }}
                    >
                      {cat.count}
                    </span>
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
                style={{
                  cursor: 'pointer',
                  borderRadius: '1.75rem',
                  overflow: 'hidden',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
                }}
              >
                {/* Image Box */}
                <div
                  className="collection-card-img-wrap"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '420px',
                    overflow: 'hidden',
                    background: '#111',
                  }}
                >
                  <Image
                    src={look.image}
                    alt={look.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Top-Left: Look Number Pill */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(17, 17, 17, 0.8)',
                      color: '#ffffff',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.68rem',
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    LOOK {look.number}
                  </div>

                  {/* Top-Right: Category Tag */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      background: 'rgba(255, 255, 255, 0.92)',
                      color: '#121212',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      backdropFilter: 'blur(8px)',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    }}
                  >
                    {look.tags[0] || look.category}
                  </div>
                </div>

                {/* Text Info */}
                <div
                  style={{
                    padding: '1.75rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.85rem',
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
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'var(--text-muted)',
                        marginBottom: '0.4rem',
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
                        color: '#121212',
                      }}
                    >
                      {look.title}
                    </h3>

                    {/* Fabric Spec Snippet */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        marginTop: '0.65rem',
                        fontSize: '0.78rem',
                        color: '#047857',
                        fontWeight: 500,
                      }}
                    >
                      <Feather size={13} style={{ flexShrink: 0 }} />
                      <span
                        style={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {look.fabric}
                      </span>
                    </div>
                  </div>

                  {/* Card Footer: Action */}
                  <div
                    style={{
                      paddingTop: '0.85rem',
                      borderTop: '1px solid var(--card-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                    }}
                  >
                    <span style={{ fontFamily: 'monospace', opacity: 0.65, fontSize: '0.7rem' }}>
                      In-Store Trial
                    </span>
                    <span
                      style={{
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: 'var(--accent)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                      }}
                    >
                      <span>Inspect Specs</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty Search State */}
          {filteredLooks.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '5rem 1rem',
                color: 'var(--text-muted)',
              }}
            >
              <p style={{ fontSize: '1.15rem', margin: 0, color: '#121212' }}>
                No silhouettes found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <p style={{ fontSize: '0.85rem', marginTop: '0.35rem' }}>
                Try searching for &lsquo;cotton&rsquo;, &lsquo;denim&rsquo;, &lsquo;linen&rsquo;, or &lsquo;shirt&rsquo;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="btn-luxury-secondary"
                style={{ marginTop: '1.25rem' }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

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
