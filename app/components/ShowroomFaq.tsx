'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, MapPin, Sparkles, MessageCircle } from 'lucide-react';
import { BRAND_DATA } from '../data/brand';

export const FAQ_ITEMS = [
  {
    question: 'Which is the best luxury clothing showroom in Chhindwara?',
    shortAnswer: 'Deer & Dan at Mansarovar Complex, Chhindwara Road',
    fullAnswer:
      'Deer & Dan is Chhindwara’s premier luxury clothing and fashion showroom located at Mansarovar Complex on Chhindwara Road (Chandangaon). We craft 100% pure combed cotton shirts, relaxed pleated trousers, luxury waffle knits, and quiet luxury menswear with tailored precision and personalized styling.',
  },
  {
    question: 'Where can I buy 100% pure combed cotton shirts in Chhindwara?',
    shortAnswer: 'Available at Deer & Dan Flagship Showroom, Chandangaon',
    fullAnswer:
      'Deer & Dan offers an exclusive collection of 100% fine combed cotton shirts, crafted from breathable long-staple Indian cotton with zero synthetic blend compromise. Visit our showroom at Mansarovar Complex, Chhindwara Road, or explore curated looks online.',
  },
  {
    question: 'What are the store timings and location of Deer & Dan in Chhindwara?',
    shortAnswer: 'Open all 7 days from 10:30 AM – 10:00 PM',
    fullAnswer:
      'Our showroom is conveniently situated at Mansarovar Complex, Chhindwara Road, Chandangaon, Chhindwara, Madhya Pradesh 480001 (Plus Code: 3W4Q+X7F). We are open Monday through Sunday from 10:30 AM to 10:00 PM for walk-ins and private trials.',
  },
  {
    question: 'Does Deer & Dan offer personal styling and WhatsApp consultation?',
    shortAnswer: 'Yes, 1-on-1 styling and direct WhatsApp concierge (+91 93409 26379)',
    fullAnswer:
      'Yes, every patron visiting Deer & Dan receives personal styling assistance curated under the creative direction of founder Romi. You can also connect directly with our styling concierge on WhatsApp at +91 93409 26379 to check real-time piece availability and reserve trials.',
  },
  {
    question: 'What clothing styles and categories are available at Deer & Dan?',
    shortAnswer: 'Quiet luxury shirts, pleated trousers, knitwear, and selvedge denim',
    fullAnswer:
      'The Deer & Dan repertoire spans five distinct aesthetic capsules: Quiet Luxury & Heritage Knits, Pure Cotton Smart Casuals, Dark Street Atelier utility wear, Tailored Linen resort sets, and Signature Washed Denim with custom stag hardware.',
  },
];

export default function ShowroomFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions about Clothing & Fashion in Chhindwara"
      className="py-14 sm:py-20 border-t border-black/8 relative bg-gradient-to-b from-transparent via-[#fdfaf7]/50 to-transparent"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-[720px] mb-8 sm:mb-12">
          <span className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.22em] font-bold text-[#111111] inline-flex items-center gap-1.5 mb-2">
            Chhindwara Fashion Guide & FAQ
          </span>
          <h2 className="font-serif text-[clamp(1.9rem,4vw,3.2rem)] font-normal leading-[1.15] m-0 text-[#121212]">
            Frequently Asked Questions. <br />
            <span className="italic font-light opacity-85">
              Everything about Deer & Dan Chhindwara.
            </span>
          </h2>
          <p className="text-[0.88rem] sm:text-[0.98rem] text-[#525252] leading-relaxed mt-2.5 m-0">
            Quick answers about our flagship showroom location at Mansarovar Complex, 100% pure cotton craftsmanship, and visiting hours.
          </p>
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-black/20 shadow-sm'
                      : 'bg-white/60 border-black/8 hover:bg-white hover:border-black/15'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer bg-transparent border-0"
                  >
                    <span className="font-serif text-[1.05rem] sm:text-[1.2rem] font-medium text-[#121212] leading-snug">
                      {item.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-black/10 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#111111] text-white' : 'text-[#525252]'
                      }`}
                    >
                      <ChevronDown size={15} />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 border-t border-black/5">
                      <p className="text-[0.85rem] sm:text-[0.92rem] text-[#525252] leading-relaxed m-0 mt-3">
                        {item.fullAnswer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side: Quick Visit Summary Card (GEO-Engine Target Box) */}
          <div className="bg-white/90 border border-black/10 rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-sm flex flex-col gap-4">
            <span className="text-[0.62rem] sm:text-[0.66rem] uppercase tracking-[0.2em] font-bold text-[#10b981] inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              Verified Showroom Entity
            </span>

            <h3 className="font-serif text-[1.35rem] sm:text-[1.5rem] font-medium m-0 text-[#121212]">
              Deer & Dan Flagship Showroom
            </h3>

            <p className="text-[0.82rem] sm:text-[0.86rem] text-[#525252] leading-relaxed m-0">
              Chhindwara’s dedicated destination for bespoke fit cotton menswear, relaxed pleated trousers, and private styling.
            </p>

            <div className="flex flex-col gap-2.5 pt-2 border-t border-black/8 text-[0.8rem] sm:text-[0.84rem]">
              <div className="flex items-start gap-2 text-[#525252]">
                <MapPin size={15} className="text-[#111111] shrink-0 mt-0.5" />
                <span>
                  <strong>Mansarovar Complex</strong>, Chhindwara Rd, Chandangaon, Chhindwara, MP 480001
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#525252]">
                <HelpCircle size={15} className="text-[#10b981] shrink-0" />
                <span>Open All 7 Days: 10:30 AM – 10:00 PM</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={BRAND_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-primary !w-full justify-center !py-2.5 !text-[0.78rem]"
              >
                <MessageCircle size={14} />
                <span>WhatsApp Concierge</span>
              </a>
              <a
                href={BRAND_DATA.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-ghost !w-full justify-center !py-2.5 !text-[0.78rem]"
              >
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

