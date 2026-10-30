'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Collection, Look } from '../data/looks';

interface CollectionGridProps {
  collections: Collection[];
  looks: Look[];
  onSelectLook: (look: Look) => void;
  theme?: string;
}

export default function CollectionGrid({
  collections,
  looks,
  onSelectLook,
}: CollectionGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredLooks =
    selectedCategory === 'all'
      ? looks
      : looks.filter((l) => l.category === selectedCategory);

  return (
    <section id="collections" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="luxury-container">
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          <div style={{ maxWidth: '580px' }}>
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
              Curated Lookbook
            </span>
            <h2
              style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Curated Outfits & Smart Casuals
            </h2>
            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginTop: '0.75rem',
              }}
            >
              Explore pure 100% combed cotton shirts, relaxed pleated trousers, washed black denim,
              and old-money knits. Click any look to inspect fabric details and styling.
            </p>
          </div>

          {/* Collection Filter Tabs */}
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
            {collections.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.1rem',
                    borderRadius: '9999px',
                    fontSize: '0.72rem',
                    fontWeight: active ? 700 : 500,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                    background: active ? '#111111' : 'transparent',
                    color: active ? '#ffffff' : 'var(--text-muted)',
                    border: active ? 'none' : '1px solid var(--card-border)',
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry / Grid Cards */}
        <div className="collection-grid-layout">
          {filteredLooks.map((look) => (
            <article
              key={look.id}
              onClick={() => onSelectLook(look)}
              className="collection-card"
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
                    background: 'rgba(0, 0, 0, 0.7)',
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
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
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
                    View Look & Sizing &rarr;
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
