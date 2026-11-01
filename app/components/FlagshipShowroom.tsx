'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  Sparkles,
  Clock,
  Car,
  MapPin,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';
import { BRAND_DATA } from '../data/brand';

export default function FlagshipShowroom() {
  return (
    <section
      id="showroom"
      className="py-16 relative border-t border-black/8"
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: Facade Showcase Card */}
          <div className="relative">
            <div className="relative w-full max-w-[480px] mx-auto rounded-[2.5rem] p-3 bg-white border border-black/12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18)]">
              <div className="relative w-full h-[380px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/store-facade.jpg"
                  alt="Deer & Dan Grand Flagship Store in Chhindwara"
                  fill
                  className="object-cover object-center"
                />

                {/* Top Badge: Live Open Status */}
                <div className="absolute top-3.5 left-3.5 bg-white/92 backdrop-blur-md py-1.5 px-3 rounded-full text-[0.68rem] font-bold tracking-[0.06em] flex items-center gap-2 text-[#111111] shadow-[0_4px_15px_rgba(0,0,0,0.12)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
                  <span>Open Today • {BRAND_DATA.timings.hours}</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 bg-[#111111]/90 backdrop-blur-md p-4 rounded-xl text-white border border-white/12">
                  <p className="m-0 text-[0.65rem] tracking-[0.15em] uppercase text-white/65">
                    Flagship Destination • Madhya Pradesh
                  </p>
                  <h3 className="m-0 mt-1 font-serif text-[1.25rem] font-medium text-white">
                    Imlikheda Chowk, Chhindwara
                  </h3>
                  <p className="m-0 mt-1 text-[0.72rem] text-white/80">
                    {BRAND_DATA.address.landmark}, {BRAND_DATA.address.road} (PIN: {BRAND_DATA.address.pincode})
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Story & Visiting Experience */}
          <div className="flex flex-col gap-4.5">
            <div>
              <span className="text-[0.68rem] uppercase tracking-[0.2em] font-semibold text-[#111111] block mb-1.5">
                In-Store Destination
              </span>
              <h2 className="font-serif text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-[1.15] tracking-[-0.02em] m-0 text-[#121212]">
                Step Inside the <br />
                <span className="font-light italic opacity-85">
                  Deer & Dan Showroom.
                </span>
              </h2>
            </div>

            <p className="text-[0.88rem] leading-relaxed text-[#525252] m-0">
              Located prominently at Imlikheda Chowk on MP SH 26, our grand glass facade destination
              houses curated luxury displays—from quiet luxury knitwear and ascot pairings to dark street
              atelier capsules. Every customer receives personalized guidance and fabric consultations.
            </p>

            {/* Feature Highlights Grid with Lucide Icons */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-white/55 backdrop-blur-md p-3.5 rounded-2xl border border-black/8 hover:border-black/20 transition-colors">
                <div className="text-[#111111] mb-1.5">
                  <Building2 size={18} strokeWidth={1.8} />
                </div>
                <h4 className="m-0 text-[0.82rem] font-semibold text-[#121212]">Multi-Floor Experience</h4>
                <p className="m-0 mt-1 text-[0.7rem] text-[#525252] leading-snug">
                  Open galleries with custom warm-lit architectural display arches.
                </p>
              </div>

              <div className="bg-white/55 backdrop-blur-md p-3.5 rounded-2xl border border-black/8 hover:border-black/20 transition-colors">
                <div className="text-[#111111] mb-1.5">
                  <Sparkles size={18} strokeWidth={1.8} />
                </div>
                <h4 className="m-0 text-[0.82rem] font-semibold text-[#121212]">Personal Styling</h4>
                <p className="m-0 mt-1 text-[0.7rem] text-[#525252] leading-snug">
                  One-on-one wardrobe curation directed by founder Romi&apos;s team.
                </p>
              </div>

              <div className="bg-white/55 backdrop-blur-md p-3.5 rounded-2xl border border-black/8 hover:border-black/20 transition-colors">
                <div className="text-[#111111] mb-1.5">
                  <Clock size={18} strokeWidth={1.8} />
                </div>
                <h4 className="m-0 text-[0.82rem] font-semibold text-[#121212]">10:30 AM – 10:00 PM</h4>
                <p className="m-0 mt-1 text-[0.7rem] text-[#525252] leading-snug">
                  Open 7 days a week for evening & weekend walkthroughs.
                </p>
              </div>

              <div className="bg-white/55 backdrop-blur-md p-3.5 rounded-2xl border border-black/8 hover:border-black/20 transition-colors">
                <div className="text-[#111111] mb-1.5">
                  <Car size={18} strokeWidth={1.8} />
                </div>
                <h4 className="m-0 text-[0.82rem] font-semibold text-[#121212]">Hassle-Free Parking</h4>
                <p className="m-0 mt-1 text-[0.7rem] text-[#525252] leading-snug">
                  Direct highway access on MP SH 26 with showroom parking.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={BRAND_DATA.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary"
                style={{
                  padding: '0.75rem 1.25rem',
                  fontSize: '0.78rem',
                }}
              >
                <MapPin size={15} strokeWidth={2} />
                <span>Get Google Maps Directions</span>
                <ArrowUpRight size={14} strokeWidth={2} />
              </a>

              <Link
                href="/store"
                className="btn-luxury-ghost"
              >
                <span>View Full Store Details</span>
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
