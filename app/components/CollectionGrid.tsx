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
    <section id="collections" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-row flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-[580px]">
            <span className="text-[0.72rem] uppercase tracking-[0.2em] font-semibold text-[#111111] block mb-2">
              Curated Lookbook
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-[-0.02em] m-0 text-[#121212]">
              Curated Outfits & Smart Casuals
            </h2>
            <p className="text-[0.95rem] text-[#525252] leading-relaxed mt-3 m-0">
              Explore pure 100% combed cotton shirts, relaxed pleated trousers, washed black denim,
              and old-money knits. Click any look to inspect fabric details and styling.
            </p>
          </div>

          {/* Collection Filter Tabs */}
          <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {collections.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`py-2 px-4 rounded-full text-[0.72rem] uppercase tracking-[0.08em] whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-[#111111] text-white font-bold border-transparent shadow-sm'
                      : 'bg-transparent text-[#525252] font-medium border border-black/8 hover:border-black/20 hover:text-[#121212]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry / Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredLooks.map((look) => (
            <article
              key={look.id}
              onClick={() => onSelectLook(look)}
              className="flex flex-col bg-white/85 border border-black/8 rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer backdrop-blur-md hover:border-black/20 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] group"
            >
              {/* Image Box */}
              <div className="relative w-full h-[420px] overflow-hidden bg-[#111111]">
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute top-4 left-4 bg-black/70 text-white py-1 px-2.5 rounded-full text-[0.65rem] font-mono font-bold tracking-widest backdrop-blur-md">
                  LOOK {look.number}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-6 flex flex-col gap-3 flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-wider text-[#525252] mb-1.5">
                    <span>{look.season}</span>
                    <span className="capitalize">{look.category}</span>
                  </div>

                  <h3 className="font-serif text-[1.45rem] font-medium leading-snug m-0 text-[#121212]">
                    {look.title}
                  </h3>

                  <p className="text-[0.8rem] text-[#525252] leading-relaxed mt-2 line-clamp-2 m-0">
                    {look.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/8 flex items-center justify-between text-[0.72rem]">
                  <span className="font-mono opacity-75 text-[0.68rem] text-[#525252]">
                    {look.tags[0]}
                  </span>
                  <span className="font-bold uppercase tracking-[0.08em] text-[#111111] group-hover:translate-x-0.5 transition-transform">
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
