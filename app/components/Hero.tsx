'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Look } from '../data/looks';
import { BRAND_DATA } from '../data/brand';

interface HeroProps {
  looks: Look[];
  onSelectLook: (look: Look) => void;
}

export default function Hero({ looks, onSelectLook }: HeroProps) {
  const [activeLookIndex, setActiveLookIndex] = useState(0);
  const activeLook = looks[activeLookIndex] || looks[0];

  return (
    <section className="relative pt-[7.25rem] pb-14 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-14 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Brand Manifesto */}
          <div className="flex flex-col gap-7">
            <div>
              <h1 className="font-serif text-[clamp(2.5rem,5.2vw,4.6rem)] font-normal leading-[1.05] tracking-[-0.025em] text-[#121212] m-0">
                Refined Style.
                <span className="block mt-1 font-serif text-[clamp(1.8rem,3.8vw,3.6rem)] font-normal italic">
                  100% Pure Cotton.
                </span>
              </h1>
            </div>

            <p className="text-[1.05rem] leading-[1.65] text-[#525252] max-w-[540px] m-0">
              <strong className="font-bold text-[#121212]">Deer & Dan</strong> crafts pure 100% combed cotton shirts, relaxed
              pleated trousers, signature denim, and everyday smart casuals. Experience our grand
              multi-story glass showroom at Imlikheda Chowk curated under the creative direction of{' '}
              <strong className="font-bold text-[#121212]">{BRAND_DATA.founder}</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="/collections"
                className="btn-luxury-primary"
              >
                <span>Explore Curated Looks</span>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/store"
                className="btn-luxury-ghost"
              >
                <span>Visit Showroom</span>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </div>

            {/* Quick Stat Counters */}
            <div className="grid grid-cols-3 gap-5 pt-5 border-t border-black/8 max-w-[480px]">
              <div>
                <p className="font-serif text-[1.9rem] font-medium leading-none text-[#121212] m-0">
                  100%
                </p>
                <p className="text-[0.65rem] uppercase tracking-[0.1em] text-[#525252] mt-1.5 m-0 font-medium">
                  Pure Combed Cotton
                </p>
              </div>

              <div>
                <p className="font-serif text-[1.9rem] font-medium leading-none text-[#121212] m-0">
                  10:30 - 10
                </p>
                <p className="text-[0.65rem] uppercase tracking-[0.1em] text-[#525252] mt-1.5 m-0 font-medium">
                  Open All 7 Days
                </p>
              </div>

              <div>
                <p className="font-serif text-[1.9rem] font-medium leading-none text-[#121212] m-0">
                  Chhindwara
                </p>
                <p className="text-[0.65rem] uppercase tracking-[0.1em] text-[#525252] mt-1.5 m-0 font-medium">
                  Flagship Store
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Look Showcase Frame */}
          <div className="relative">
            <div className="relative w-full max-w-[480px] mx-auto rounded-[2.75rem] p-[0.85rem] bg-white border border-black/12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.05)] transition-all duration-400">
              <div className="relative w-full h-[460px] sm:h-[480px] rounded-[2.25rem] overflow-hidden bg-[#111111]">
                <Image
                  src={activeLook.image}
                  alt={activeLook.title}
                  fill
                  priority
                  className="object-cover object-top"
                />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 bg-white/88 backdrop-blur-md py-1.5 px-3.5 rounded-full text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#111111] shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
                  Look {activeLook.number} • {activeLook.season}
                </div>

                {/* Inspect Button overlay */}
                <button
                  onClick={() => onSelectLook(activeLook)}
                  className="absolute top-4 right-4 bg-[#111111] hover:bg-[#262626] text-white border-0 rounded-full py-1.5 px-3.5 text-[0.68rem] font-semibold cursor-pointer flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-colors"
                >
                  <span className="text-white">Quick View</span>
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>

                {/* Bottom Overlay Info Pill */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/92 backdrop-blur-xl p-[0.85rem_1.15rem] rounded-[14px] shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                  <div className="flex justify-between items-center gap-4">
                    <div>
                      <h3 className="m-0 text-[1.05rem] font-serif font-medium text-[#111111] leading-tight">
                        {activeLook.title}
                      </h3>
                      <p className="mt-1 text-[0.72rem] text-[#555555] font-sans m-0">
                        {activeLook.fabric}
                      </p>
                    </div>

                    <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-[#111111]">
                      <Image
                        src="/images/official-deer-logo.jpg"
                        alt="Official Deer Logo"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Look Selector Dock */}
              <div className="no-scrollbar flex gap-[0.55rem] mt-[0.65rem] overflow-x-auto pb-1">
                {looks.slice(0, 4).map((look, idx) => (
                  <button
                    key={look.id}
                    onClick={() => setActiveLookIndex(idx)}
                    className={`relative w-[58px] h-[66px] rounded-[10px] overflow-hidden shrink-0 cursor-pointer p-0 transition-all duration-200 ${
                      idx === activeLookIndex
                        ? 'border-2 border-[#111111] opacity-100 scale-[1.02]'
                        : 'border border-black/10 opacity-65 hover:opacity-90 scale-100'
                    }`}
                  >
                    <Image
                      src={look.image}
                      alt={look.title}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
