import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND_DATA } from '../data/brand';
import { ATELIER_PILLARS } from '../data/looks';
import { ShieldCheck, CheckCircle2, ArrowUpRight, Gift, MapPin, Award, Feather } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Deer & Dan | 100% Cotton Craftsmanship & Atelier Heritage',
  description:
    'Discover Deer & Dan’s heritage — pure 100% Indian combed cotton, artisanal linen tailoring, and quiet luxury menswear founded under the creative direction of Romi in Chhindwara.',
  keywords: [
    'about deer and dan',
    'pure cotton clothing india',
    'chhindwara fashion designer',
    'quiet luxury brand india',
    'cotton craft chhindwara',
    'romi deer and dan',
  ],
  alternates: {
    canonical: 'https://deerdan.in/about',
  },
  openGraph: {
    title: 'About Deer & Dan | 100% Cotton Craftsmanship & Atelier Heritage',
    description:
      'Pure 100% combed cotton, zero synthetic compromise, and architectural tailoring from Deer & Dan Chhindwara.',
    url: 'https://deerdan.in/about',
    images: [
      {
        url: 'https://deerdan.in/images/craft-tags-strip.jpg',
        width: 1200,
        height: 630,
        alt: 'Deer & Dan Textile Craft & Heritage',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* About Page Hero */}
      <section className="pt-24 sm:pt-[8.5rem] pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[840px] flex flex-col gap-4 sm:gap-5">
            <span className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.22em] font-bold text-[#111111] block">
              The Atelier Heritage • Chhindwara
            </span>

            <h1 className="font-serif text-[clamp(2.1rem,6vw,4.4rem)] font-normal leading-[1.1] tracking-[-0.025em] m-0 text-[#121212]">
              The Art of Restraint. <br />
              <span className="italic font-light opacity-85">
                Pure Cotton. Indian Craft.
              </span>
            </h1>

            <p className="text-[0.95rem] sm:text-[1.08rem] text-[#525252] leading-[1.7] sm:leading-[1.75] m-0 max-w-[720px]">
              <strong className="font-semibold text-[#121212]">Deer & Dan</strong> was founded by{' '}
              <strong className="font-semibold text-[#121212]">{BRAND_DATA.founder}</strong> to redefine
              contemporary Indian dressing. We believe true luxury is quiet, tactile, and rooted in
              flawless materials. Refusing fast-fashion shortcuts, every piece is tailored from 100% natural
              combed cotton and artisanal linens.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Identity & Stag Insignia Showcase */}
      <section className="py-12 sm:py-16 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Stag Insignia Luxury Frame */}
            <div className="relative w-full max-w-[460px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a0a0a] border border-black/12 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.22)]">
              <div className="relative w-full aspect-square bg-[#0a0a0a]">
                <Image
                  src="/images/brand-crest-black.jpg"
                  alt="Deer & Dan Official Brand Insignia"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Bottom luxury caption bar */}
              <div className="p-3.5 sm:p-6 bg-gradient-to-t from-black/95 to-[#121212]/95 border-t border-white/8 flex items-center justify-between">
                <div>
                  <span className="text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] uppercase text-white/60 block">
                    Flagship Insignia
                  </span>
                  <p className="m-0 mt-0.5 sm:mt-1 text-[0.78rem] sm:text-[0.82rem] text-white font-medium">
                    Mansarovar Complex • Chhindwara
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 py-1 px-2.5 sm:px-3 rounded-full bg-[#10b981]/15 border border-[#10b981]/30 text-[#10b981] text-[0.68rem] sm:text-[0.72rem] font-semibold">
                  <span>Estd. 2024</span>
                </div>
              </div>
            </div>

            {/* Right: Brand Philosophy Text & Metrics */}
            <div className="flex flex-col gap-5 sm:gap-7">
              <div>
                <span className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.2em] font-bold text-[#111111] block mb-2">
                  The Brand Manifesto
                </span>
                <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] font-normal m-0 leading-[1.15] text-[#121212]">
                  Every Stitch Has a Signature.
                </h2>
              </div>

              <p className="text-[0.92rem] sm:text-base text-[#525252] leading-[1.7] sm:leading-[1.75] m-0">
                From our flagship showroom at Mansarovar Complex in Chhindwara to discerning patrons nationwide,
                Deer & Dan represents a return to enduring craftsmanship. We engineer garments mathematically
                to balance architectural structure with natural ease of movement.
              </p>

              {/* 3 Metric Cards */}
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-2.5 sm:gap-3.5 pt-1">
                <div className="p-3.5 sm:p-5 bg-white/85 rounded-xl sm:rounded-2xl border border-black/8 shadow-sm">
                  <p className="font-serif text-[clamp(1.5rem,4vw,1.9rem)] m-0 font-medium text-[#121212] leading-none">
                    100%
                  </p>
                  <p className="text-[0.68rem] sm:text-[0.74rem] text-[#525252] mt-1.5 leading-snug m-0">
                    Fine Combed Cotton
                  </p>
                </div>

                <div className="p-3.5 sm:p-5 bg-white/85 rounded-xl sm:rounded-2xl border border-black/8 shadow-sm">
                  <p className="font-serif text-[clamp(1.5rem,4vw,1.9rem)] m-0 font-medium text-[#121212] leading-none">
                    Zero
                  </p>
                  <p className="text-[0.68rem] sm:text-[0.74rem] text-[#525252] mt-1.5 leading-snug m-0">
                    Synthetic Compromise
                  </p>
                </div>

                <div className="p-3.5 sm:p-5 bg-white/85 rounded-xl sm:rounded-2xl border border-black/8 shadow-sm">
                  <p className="font-serif text-[clamp(1.5rem,4vw,1.9rem)] m-0 font-medium text-[#10b981] leading-none">
                    1-on-1
                  </p>
                  <p className="text-[0.68rem] sm:text-[0.74rem] text-[#525252] mt-1.5 leading-snug m-0">
                    Showroom Styling
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Standards: Macro Strip & Inset Labels */}
      <section className="py-14 sm:py-20 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[640px] mb-8 sm:mb-12">
            <span className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.2em] font-bold text-[#111111] block mb-2">
              Quality Certification
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3.2rem)] font-normal m-0 text-[#121212]">
              Authenticated Details.
            </h2>
            <p className="text-[0.88rem] sm:text-[0.98rem] text-[#525252] leading-relaxed mt-2 m-0">
              Real macro proof of our 100% Cotton certification, custom woven neck tags, and hangtag specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Macro Strip */}
            <div className="bg-white/85 border border-black/8 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden">
                <Image
                  src="/images/craft-tags-strip.jpg"
                  alt="Neck label, 100% Cotton Made in India tag, and kraft hangtag"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/92 backdrop-blur-md py-1 px-2.5 rounded-full text-[0.65rem] sm:text-[0.68rem] font-bold tracking-[0.1em] uppercase text-[#059669] inline-flex items-center gap-1.5">
                  <ShieldCheck size={12} />
                  Certified 100% Cotton
                </div>
              </div>
              <div className="pt-3.5 sm:pt-4.5">
                <h4 className="m-0 text-[1.15rem] sm:text-[1.2rem] font-serif font-medium text-[#121212]">
                  100% Cotton Made in India
                </h4>
                <p className="m-0 mt-1.5 text-[0.8rem] sm:text-[0.85rem] text-[#525252] leading-relaxed">
                  Every garment is wash-tested and authenticated with our registered wash-care specifications.
                </p>
              </div>
            </div>

            {/* Black Matte Specs Tag */}
            <div className="bg-white/85 border border-black/8 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden">
                <Image
                  src="/images/tag-black-matte-specs.jpg"
                  alt="Black matte hangtag on embroidered fabric"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/92 backdrop-blur-md py-1 px-2.5 rounded-full text-[0.65rem] sm:text-[0.68rem] font-bold tracking-[0.1em] uppercase text-[#121212] inline-flex items-center gap-1.5">
                  <Award size={12} />
                  Bespoke Hardware
                </div>
              </div>
              <div className="pt-3.5 sm:pt-4.5">
                <h4 className="m-0 text-[1.15rem] sm:text-[1.2rem] font-serif font-medium text-[#121212]">
                  Matte Eyelet Hangtags
                </h4>
                <p className="m-0 mt-1.5 text-[0.8rem] sm:text-[0.85rem] text-[#525252] leading-relaxed">
                  Braided durable cord, metal eyelets, and hallmark specifications affirming timeless quality.
                </p>
              </div>
            </div>

            {/* Pink Shirt Detail Insets */}
            <div className="bg-white/85 border border-black/8 rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="relative w-full h-[220px] sm:h-[260px] rounded-xl overflow-hidden">
                <Image
                  src="/images/signature-pink-with-tags.jpg"
                  alt="Blush rose pure cotton camp shirt with detail insets"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/92 backdrop-blur-md py-1 px-2.5 rounded-full text-[0.65rem] sm:text-[0.68rem] font-bold tracking-[0.1em] uppercase text-[#121212] inline-flex items-center gap-1.5">
                  <Feather size={12} />
                  Direct Embroidery
                </div>
              </div>
              <div className="pt-3.5 sm:pt-4.5">
                <h4 className="m-0 text-[1.15rem] sm:text-[1.2rem] font-serif font-medium text-[#121212]">
                  Embroidered Stag Monogram
                </h4>
                <p className="m-0 mt-1.5 text-[0.8rem] sm:text-[0.85rem] text-[#525252] leading-relaxed">
                  Precision satin thread embroidery executed directly onto breathable Indian cotton linen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Packaging & Client Experience */}
      <section className="py-14 sm:py-20 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="flex flex-col gap-5 sm:gap-6">
              <span className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.2em] font-bold text-[#111111]">
                The Packaging Suite
              </span>
              <h2 className="font-serif text-[clamp(1.9rem,4vw,3.2rem)] font-normal m-0 leading-[1.15] text-[#121212]">
                An Unboxing Ritual of Pure Sophistication.
              </h2>
              <p className="text-[0.92rem] sm:text-base text-[#525252] leading-[1.7] sm:leading-[1.75] m-0">
                Every Deer & Dan purchase is packaged in bespoke matte black heavy craft shopping bags,
                embellished with our signature white stag emblem, thank-you wax seal stickers, and custom
                branded tissue paper.
              </p>

              {/* Luxury Feature Bullet Points */}
              <div className="flex flex-col gap-3 py-1 sm:py-2">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#10b981]/12 text-[#10b981] flex items-center justify-center shrink-0">
                    <Gift size={15} />
                  </div>
                  <span className="text-[0.82rem] sm:text-[0.88rem] text-[#1f2937] font-medium">
                    Signature Matte Black Stag Shopping Bag with Rigid Base
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#10b981]/12 text-[#10b981] flex items-center justify-center shrink-0">
                    <CheckCircle2 size={15} />
                  </div>
                  <span className="text-[0.82rem] sm:text-[0.88rem] text-[#1f2937] font-medium">
                    Authentic Wax Seal Sticker & Kraft Specification Hangtag
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#10b981]/12 text-[#10b981] flex items-center justify-center shrink-0">
                    <MapPin size={15} />
                  </div>
                  <span className="text-[0.82rem] sm:text-[0.88rem] text-[#1f2937] font-medium">
                    Complimentary on every in-store purchase at Mansarovar Complex showroom
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 w-full sm:w-auto">
                <Link
                  href="/store"
                  className="btn-luxury-primary w-full sm:w-auto justify-center text-center"
                >
                  <span>Visit The Showroom</span>
                  <ArrowUpRight size={15} />
                </Link>
                <Link
                  href="/collections"
                  className="btn-luxury-secondary w-full sm:w-auto justify-center text-center"
                >
                  <span>Explore Looks</span>
                </Link>
              </div>
            </div>

            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-black/8 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] p-2.5 sm:p-3.5">
              <div className="relative w-full h-[260px] xs:h-[340px] sm:h-[460px] rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src="/images/packaging-luxury-shopping-bag.jpg"
                  alt="Deer & Dan luxury black shopping bag, thank you sticker seal and price tags"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Pillars */}
      <section className="py-14 sm:py-20 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ATELIER_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-white/85 border border-black/8 rounded-2xl sm:rounded-3xl p-6 sm:p-9 flex flex-col gap-4 sm:gap-5 shadow-sm"
              >
                <div className="flex justify-between items-center border-b border-black/8 pb-3 sm:pb-3.5">
                  <span className="font-serif text-[1.9rem] sm:text-[2.2rem] font-medium text-[#121212] leading-none">
                    {pillar.number}
                  </span>
                  <span className="text-[0.65rem] sm:text-[0.68rem] uppercase tracking-[0.15em] text-[#525252] font-semibold">
                    {pillar.subtitle}
                  </span>
                </div>
                <h3 className="font-serif text-[1.3rem] sm:text-[1.45rem] font-medium m-0 text-[#121212]">
                  {pillar.title}
                </h3>
                <p className="text-[0.82rem] sm:text-[0.88rem] text-[#525252] leading-relaxed m-0">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
