'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Look } from '../data/looks';
import { BRAND_DATA } from '../data/brand';

interface LookModalProps {
  look: Look | null;
  onClose: () => void;
  onInquire?: (look: Look) => void;
  theme?: string;
}

export default function LookModal({ look, onClose }: LookModalProps) {
  const [selectedImg, setSelectedImg] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!look) return null;

  const images = [look.image, ...(look.detailImages || [])];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Look Details"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl max-h-[min(94vh,660px)] overflow-hidden rounded-[1.75rem] bg-white/90 text-[#121212] border border-black/8 shadow-[0_30px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center cursor-pointer transition-colors border-0"
          aria-label="Close modal"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left: Image Showcase */}
        <div className="p-5 flex flex-col gap-3">
          <div className="relative w-full h-[410px] rounded-2xl overflow-hidden bg-[#111111]">
            <Image
              src={images[selectedImg] || look.image}
              alt={look.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>

          {images.length > 1 && (
            <div className="flex gap-2.5">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`relative w-[54px] h-[68px] rounded-xl overflow-hidden cursor-pointer p-0 transition-all ${
                    selectedImg === i
                      ? 'border-2 border-[#111111] opacity-100'
                      : 'border-2 border-transparent opacity-60 hover:opacity-90'
                  }`}
                >
                  <Image src={img} alt="thumb" fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Specs & Notes */}
        <div className="p-6 sm:p-7 flex flex-col justify-between gap-4 max-h-full overflow-y-auto">
          <div className="flex flex-col gap-3.5">
            <div>
              <span className="text-[0.68rem] uppercase tracking-[0.18em] text-[#111111] font-semibold">
                Look {look.number} • {look.season}
              </span>
              <h3 className="font-serif text-[1.75rem] font-medium m-0 mt-1 leading-snug text-[#121212]">
                {look.title}
              </h3>
            </div>

            <p className="text-[0.82rem] text-[#525252] leading-relaxed m-0">
              {look.description}
            </p>

            {/* Specifications */}
            <div className="flex flex-col gap-2.5 pt-3 border-t border-black/8 text-[0.72rem]">
              <div>
                <span className="text-[0.62rem] uppercase tracking-wider text-[#525252] block">
                  Fabric & Textile
                </span>
                <p className="font-semibold m-0 mt-0.5 text-[#121212]">{look.fabric}</p>
              </div>

              <div>
                <span className="text-[0.62rem] uppercase tracking-wider text-[#525252] block">
                  Fit & Silhouette
                </span>
                <p className="font-semibold m-0 mt-0.5 text-[#121212]">{look.silhouette}</p>
              </div>

              <div>
                <span className="text-[0.62rem] uppercase tracking-wider text-[#525252] block">
                  Details & Craftsmanship
                </span>
                <p className="font-semibold m-0 mt-0.5 text-[#121212]">{look.hardware}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1.5">
              {look.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="py-1 px-2.5 rounded-full text-[0.62rem] font-semibold uppercase tracking-wider border border-black/8 text-[#525252]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Inquire Action: WhatsApp button */}
          <div className="pt-3.5 border-t border-black/8">
            <a
              href={`https://wa.me/91${BRAND_DATA.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                `Hello Deer & Dan! I am interested in Look ${look.number}: "${look.title}". Could you please check availability and sizing at the Chhindwara showroom?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-primary"
              style={{
                width: '100%',
                padding: '0.9rem 1.25rem',
              }}
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
