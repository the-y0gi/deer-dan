'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LookModal from '../components/LookModal';
import Image from 'next/image';
import { COLLECTIONS, LOOKS, Look } from '../data/looks';
import { BRAND_DATA } from '../data/brand';
import { Search, X, ArrowUpRight, Feather } from 'lucide-react';

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
      <section className="pt-[8.5rem] pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-[840px] flex flex-col gap-4.5">
            <span className="text-[0.72rem] uppercase tracking-[0.22em] font-bold text-[#111111] block">
              The Atelier Lookbook • 2026 Curated Showcase
            </span>

            <h1 className="font-serif text-[clamp(2.5rem,5.2vw,4.4rem)] font-normal leading-[1.1] tracking-[-0.025em] m-0 text-[#121212]">
              The Curated Lookbook & <br />
              <span className="italic font-light opacity-85">
                Seasonal Silhouettes.
              </span>
            </h1>

            <p className="text-[1.08rem] text-[#525252] leading-[1.75] m-0 max-w-[720px]">
              Every garment in the Deer & Dan collection is crafted with intention—from 100% pure Indian
              combed cotton and breathable linen sets to tailored denim and quiet luxury knitwear.
              Select any look to inspect fabric compositions and styling specifications.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="mt-10 flex flex-col gap-5">
            {/* Search Input Bar with Result Count */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="w-full max-w-md relative">
                <div className="absolute left-4.5 top-1/2 -translate-y-1/2 text-zinc-500 flex items-center pointer-events-none">
                  <Search size={16} />
                </div>
                <input
                  type="text"
                  placeholder="Search fabric, silhouette, cotton, denim..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-3.5 pl-11 pr-10 rounded-full border border-black/10 bg-white/85 backdrop-blur-md text-[0.88rem] outline-none text-[#121212] shadow-[0_4px_15px_rgba(0,0,0,0.03)] focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-800 flex items-center justify-center bg-black/6 rounded-full w-5.5 h-5.5 cursor-pointer border-0"
                    aria-label="Clear search"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Counter Tag */}
              <div className="inline-flex items-center gap-1.5 text-[0.75rem] text-[#525252]">
                <span>
                  Showing <strong>{filteredLooks.length}</strong> {filteredLooks.length === 1 ? 'silhouette' : 'silhouettes'}
                </span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
              {COLLECTIONS.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`py-2.5 px-5 rounded-full text-[0.74rem] uppercase tracking-[0.08em] whitespace-nowrap transition-all duration-200 cursor-pointer inline-flex items-center gap-2 border ${
                      active
                        ? 'bg-[#121212] text-white font-bold border-[#121212] shadow-sm'
                        : 'bg-white/85 text-[#525252] font-medium border-black/8 hover:border-black/20 hover:text-[#121212]'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[0.65rem] font-semibold py-0.5 px-2 rounded-full ${
                        active ? 'bg-white/20 text-white' : 'bg-black/5 text-[#71717a]'
                      }`}
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
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filteredLooks.map((look) => (
              <article
                key={look.id}
                onClick={() => setSelectedLook(look)}
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

                  {/* Top-Left: Look Number Pill */}
                  <div className="absolute top-4 left-4 bg-black/80 text-white py-1.5 px-3 rounded-full text-[0.68rem] font-mono font-bold tracking-widest backdrop-blur-md border border-white/15">
                    LOOK {look.number}
                  </div>

                  {/* Top-Right: Category Tag */}
                  <div className="absolute top-4 right-4 bg-white/92 text-[#121212] py-1.5 px-3 rounded-full text-[0.65rem] font-bold tracking-wider uppercase backdrop-blur-md shadow-sm">
                    {look.tags[0] || look.category}
                  </div>
                </div>

                {/* Text Info */}
                <div className="p-6 sm:p-7 flex flex-col gap-3.5 flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between text-[0.7rem] uppercase tracking-wider text-[#525252] mb-1">
                      <span>{look.season}</span>
                      <span className="capitalize">{look.category}</span>
                    </div>

                    <h3 className="font-serif text-[1.45rem] font-medium leading-snug m-0 text-[#121212]">
                      {look.title}
                    </h3>

                    {/* Fabric Spec Snippet */}
                    <div className="flex items-center gap-1.5 mt-2.5 text-[0.78rem] text-emerald-700 font-medium">
                      <Feather size={13} className="shrink-0" />
                      <span className="truncate">
                        {look.fabric}
                      </span>
                    </div>
                  </div>

                  {/* Card Footer: Action */}
                  <div className="pt-3.5 border-t border-black/8 flex items-center justify-between text-[0.75rem]">
                    <span className="font-mono opacity-65 text-[0.7rem] text-[#525252]">
                      In-Store Trial
                    </span>
                    <span className="font-bold uppercase tracking-[0.08em] text-[#111111] inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform">
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
            <div className="text-center py-20 px-4 text-[#525252]">
              <p className="text-[1.15rem] m-0 text-[#121212]">
                No silhouettes found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <p className="text-[0.85rem] mt-1.5 text-[#525252]">
                Try searching for &lsquo;cotton&rsquo;, &lsquo;denim&rsquo;, &lsquo;linen&rsquo;, or &lsquo;shirt&rsquo;.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-5 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-black/10 bg-white/70 hover:border-black/30 hover:bg-white text-[#121212] text-[0.82rem] font-medium transition-all duration-200 cursor-pointer"
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
