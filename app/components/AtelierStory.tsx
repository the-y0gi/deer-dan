'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BRAND_DATA } from '../data/brand';

interface AtelierStoryProps {
  theme?: string;
}

export default function AtelierStory({}: AtelierStoryProps) {
  const pillarCards = [
    {
      num: '01',
      tag: 'Textile Origin',
      title: '100% Pure Combed Cotton',
      desc: 'Crafted without synthetic compromise. Breathable long-staple fibers tailored for all-day comfort in Indian climates.',
      image: '/images/craft-tags-strip.jpg',
      badge: 'Certified Natural Fiber',
    },
    {
      num: '02',
      tag: 'Originals Denim',
      title: 'Debossed Leather & Selvedge',
      desc: 'Authentic Deer & Dan denim back patch, signature wave pocket stitch, and heavy-duty tailored hardware.',
      image: '/images/denim-jeans-leather-patch.jpg',
      badge: 'Stag Crest Insignia',
    },
    {
      num: '03',
      tag: 'Showroom Heritage',
      title: 'Boutique Packaging & Service',
      desc: 'Signature matte black stag shopping bags, bespoke hangtags, and one-on-one styling at Imlikheda Chowk.',
      image: '/images/packaging-luxury-shopping-bag.jpg',
      badge: 'Flagship Destination',
    },
  ];

  return (
    <section
      id="atelier"
      className="py-18 relative border-t border-black/8"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-10">
        {/* Section Header: Crisp, Compact & Editorial */}
        <div className="flex flex-row flex-wrap items-end justify-between gap-6">
          <div className="max-w-[580px]">
            <span className="text-[0.68rem] uppercase tracking-[0.22em] font-bold text-[#111111] inline-flex items-center gap-1.5 mb-2">
              The Craft & Heritage
            </span>
            <h2 className="font-serif text-[clamp(2rem,3.8vw,3rem)] font-normal leading-[1.15] tracking-[-0.02em] m-0 text-[#121212]">
              Pure Cotton Craftsmanship. <br />
              <span className="italic font-light opacity-85">
                Tailored for Modern India.
              </span>
            </h2>
          </div>

          <div className="max-w-[420px] flex flex-col gap-3.5">
            <p className="text-[0.88rem] text-[#525252] leading-relaxed m-0">
              Deer & Dan was founded by <strong className="font-semibold text-[#121212]">{BRAND_DATA.founder}</strong> on a strict commitment to natural fiber purity. Every shirt, trouser, and denim piece represents authentic tailoring and quiet luxury.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold uppercase tracking-[0.1em] text-[#121212] no-underline hover:underline"
              >
                <span>Read Full Atelier Story</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Pillars Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillarCards.map((card) => (
            <div
              key={card.num}
              className="bg-white/85 border border-black/8 rounded-2xl p-4 flex flex-col gap-4 shadow-[0_8px_24px_rgba(0,0,0,0.03)] hover:-translate-y-1 transition-all duration-250"
            >
              {/* Image Container with Floating Badges */}
              <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-[#f4ede6]">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 380px"
                />

                <div className="absolute top-3 left-3 bg-white/92 backdrop-blur-md py-1 px-2.5 rounded-full text-[0.62rem] font-bold tracking-[0.1em] uppercase text-[#111111] shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
                  {card.tag}
                </div>

                <div className="absolute bottom-2.5 right-2.5 bg-[#111111]/85 backdrop-blur-md py-1 px-2.5 rounded-full text-[0.62rem] font-semibold text-white flex items-center gap-1">
                  <ShieldCheck size={11} className="text-[#10b981]" />
                  <span>{card.badge}</span>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-1.5 px-1 pb-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[1.3rem] font-medium text-[#121212] m-0">
                    {card.title}
                  </h3>
                  <span className="font-serif text-[1.25rem] font-light text-[#525252]">
                    {card.num}
                  </span>
                </div>

                <p className="text-[0.82rem] text-[#525252] leading-relaxed m-0">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Quote Card: Grand, Prominent & Luxurious */}
        <div className="bg-gradient-to-br from-white/85 to-[#fbe7d6]/40 border border-black/8 rounded-3xl p-8 lg:p-12 flex flex-col gap-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-md">
          <div className="text-5xl leading-none font-serif text-[#111111]">“</div>
          <p className="font-serif text-[clamp(1.25rem,2.5vw,1.7rem)] italic font-normal leading-relaxed m-0 text-[#121212] max-w-[960px]">
            We don&apos;t just sell garments at Deer & Dan; we curate an experience of effortless confidence. When you slip into our 100% pure combed cotton shirts and relaxed tailored fits, you immediately feel the precision of authentic craftsmanship.
          </p>
          <div className="flex items-center gap-3.5 mt-2">
            <div className="w-11 h-11 rounded-full bg-[#111111] text-white flex items-center justify-center font-bold text-base tracking-wider shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
              R
            </div>
            <div>
              <strong className="block text-[0.95rem] font-semibold text-[#121212]">{BRAND_DATA.founder}</strong>
              <span className="text-[0.76rem] text-[#525252]">{BRAND_DATA.founderRole}, Deer & Dan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
