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
    <section className="relative pt-24 sm:pt-[7.25rem] pb-10 sm:pb-14 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Brand Manifesto */}
          <div className="flex flex-col gap-5 sm:gap-7">
            <div>
              <h1 className="font-serif text-[clamp(2.1rem,7vw,4.6rem)] font-normal leading-[1.06] tracking-[-0.025em] text-[#121212] m-0">
                Refined Style.
                <span className="block mt-1 font-serif text-[clamp(1.5rem,5.5vw,3.6rem)] font-normal italic">
                  100% Pure Cotton.
                </span>
              </h1>
            </div>

            <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.65] text-[#525252] max-w-[540px] m-0">
              <strong className="font-bold text-[#121212]">Deer & Dan</strong> crafts pure 100% combed cotton shirts, relaxed
              pleated trousers, signature denim, and everyday smart casuals. Experience our flagship
              showroom at Mansarovar Complex, Chhindwara curated under the creative direction of{' '}
              <strong className="font-bold text-[#121212]">{BRAND_DATA.founder}</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 w-full sm:w-auto">
              <Link
                href="/collections"
                className="btn-luxury-primary w-full sm:w-auto justify-center text-center"
              >
                <span>Explore Curated Looks</span>
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/store"
                className="btn-luxury-ghost w-full sm:w-auto justify-center text-center"
              >
                <span>Visit Showroom</span>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </Link>
            </div>

            {/* Quick Stat Counters */}
            <div className="grid grid-cols-3 gap-2 sm:gap-5 pt-4 sm:pt-5 border-t border-black/8 max-w-[480px]">
              <div>
                <p className="font-serif text-[clamp(1.25rem,4vw,1.9rem)] font-medium leading-none text-[#121212] m-0">
                  100%
                </p>
                <p className="text-[0.52rem] xs:text-[0.58rem] sm:text-[0.65rem] uppercase tracking-[0.06em] sm:tracking-[0.1em] text-[#525252] mt-1.5 m-0 font-medium">
                  Pure Combed Cotton
                </p>
              </div>

              <div>
                <p className="font-serif text-[clamp(1.25rem,4vw,1.9rem)] font-medium leading-none text-[#121212] m-0">
                  10:30 - 10
                </p>
                <p className="text-[0.52rem] xs:text-[0.58rem] sm:text-[0.65rem] uppercase tracking-[0.06em] sm:tracking-[0.1em] text-[#525252] mt-1.5 m-0 font-medium">
                  Open All 7 Days
                </p>
              </div>

              <div>
                <p className="font-serif text-[clamp(1.25rem,4vw,1.9rem)] font-medium leading-none text-[#121212] m-0 truncate">
                  Chhindwara
                </p>
                <p className="text-[0.52rem] xs:text-[0.58rem] sm:text-[0.65rem] uppercase tracking-[0.06em] sm:tracking-[0.1em] text-[#525252] mt-1.5 m-0 font-medium">
                  Flagship Store
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Look Showcase Frame */}
          <div className="relative">
            <div className="relative w-full max-w-[480px] mx-auto rounded-[1.75rem] sm:rounded-[2.75rem] p-2 sm:p-[0.85rem] bg-white border border-black/12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18),0_0_0_1px_rgba(0,0,0,0.05)] transition-all duration-400">
              <div className="relative w-full h-[360px] xs:h-[400px] sm:h-[460px] md:h-[480px] rounded-[1.4rem] sm:rounded-[2.25rem] overflow-hidden bg-[#111111]">
                <Image
                  src={activeLook.image}
                  alt={activeLook.title}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 480px"
                />

                {/* Top Floating Badge */}
                <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-4 bg-white/88 backdrop-blur-md py-1 sm:py-1.5 px-2.5 sm:px-3.5 rounded-full text-[0.6rem] sm:text-[0.68rem] font-bold tracking-[0.08em] sm:tracking-[0.12em] uppercase text-[#111111] shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
                  Look {activeLook.number} • {activeLook.season}
                </div>

                {/* Inspect Button overlay */}
                <button
                  onClick={() => onSelectLook(activeLook)}
                  className="absolute top-2.5 sm:top-4 right-2.5 sm:right-4 bg-[#111111] hover:bg-[#262626] text-white border-0 rounded-full py-1 sm:py-1.5 px-2.5 sm:px-3.5 text-[0.6rem] sm:text-[0.68rem] font-semibold cursor-pointer flex items-center gap-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition-colors"
                >
                  <span className="text-white">Quick View</span>
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>

                {/* Bottom Overlay Info Pill */}
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 bg-white/92 backdrop-blur-xl p-2.5 sm:p-[0.85rem_1.15rem] rounded-[14px] shadow-[0_10px_25px_rgba(0,0,0,0.1)]">
                  <div className="flex justify-between items-center gap-2.5 sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="m-0 text-[0.88rem] sm:text-[1.05rem] font-serif font-medium text-[#111111] leading-tight truncate">
                        {activeLook.title}
                      </h3>
                      <p className="mt-0.5 sm:mt-1 text-[0.62rem] sm:text-[0.72rem] text-[#555555] font-sans m-0 truncate">
                        {activeLook.fabric}
                      </p>
                    </div>

                    <div className="relative w-7 h-7 sm:w-9 sm:h-9 rounded-full overflow-hidden shrink-0 border border-[#111111]">
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
              <div className="no-scrollbar flex gap-1.5 sm:gap-[0.55rem] mt-2 sm:mt-[0.65rem] overflow-x-auto pb-1">
                {looks.slice(0, 4).map((look, idx) => (
                  <button
                    key={look.id}
                    onClick={() => setActiveLookIndex(idx)}
                    className={`relative w-[48px] h-[56px] xs:w-[54px] xs:h-[62px] sm:w-[58px] sm:h-[66px] rounded-lg sm:rounded-[10px] overflow-hidden shrink-0 cursor-pointer p-0 transition-all duration-200 ${
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
