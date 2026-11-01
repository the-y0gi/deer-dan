'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { X, MessageCircle, Sparkles } from 'lucide-react';
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
  const [isClosing, setIsClosing] = useState(false);

  const backdropRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);

    if (backdropRef.current && dialogRef.current) {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsClosing(false);
          onClose();
        },
      });

      tl.to(dialogRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 10,
        duration: 0.2,
        ease: 'power2.in',
      }).to(
        backdropRef.current,
        {
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
        },
        '-=0.1'
      );
    } else {
      setIsClosing(false);
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // GSAP entrance animation
    if (backdropRef.current && dialogRef.current) {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: 'power2.out' }
      );

      gsap.fromTo(
        dialogRef.current,
        { opacity: 0, scale: 0.94, y: 16 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      );
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!look) return null;

  const images = [look.image, ...(look.detailImages || [])];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Look Details"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-2.5 sm:p-4"
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={handleClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Modal Dialog with GSAP ref */}
      <div
        ref={dialogRef}
        className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl sm:rounded-[1.75rem] bg-white/95 text-[#121212] border border-black/8 shadow-[0_30px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl grid grid-cols-1 md:grid-cols-2 items-center"
      >
        {/* Close Button with Lucide X */}
        <button
          onClick={handleClose}
          className="absolute top-3 sm:top-5 right-3 sm:right-5 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/65 hover:bg-black/85 text-white flex items-center justify-center cursor-pointer transition-all border-0 shadow-sm active:scale-95"
          aria-label="Close modal"
        >
          <X size={18} className="text-white" />
        </button>

        {/* Left: Image Showcase */}
        <div className="p-3.5 sm:p-5 flex flex-col gap-2.5 sm:gap-3">
          <div className="relative w-full h-[280px] sm:h-[410px] rounded-xl sm:rounded-2xl overflow-hidden bg-[#111111]">
            <Image
              src={images[selectedImg] || look.image}
              alt={look.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 500px"
            />
          </div>

          {images.length > 1 && (
            <div className="flex gap-2 sm:gap-2.5 overflow-x-auto pb-1">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImg(i)}
                  className={`relative w-[48px] h-[60px] sm:w-[54px] sm:h-[68px] rounded-lg sm:rounded-xl overflow-hidden cursor-pointer p-0 transition-all shrink-0 ${
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
        <div className="p-4 sm:p-6 sm:p-7 flex flex-col justify-between gap-3.5 sm:gap-4 max-h-full">
          <div className="flex flex-col gap-2.5 sm:gap-3.5">
            <div>
              <span className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.18em] text-[#111111] font-semibold">
                Look {look.number} • {look.season}
              </span>
              <h3 className="font-serif text-[1.4rem] sm:text-[1.75rem] font-medium m-0 mt-0.5 leading-snug text-[#121212]">
                {look.title}
              </h3>
            </div>

            <p className="text-[0.78rem] sm:text-[0.82rem] text-[#525252] leading-relaxed m-0">
              {look.description}
            </p>

            {/* Specifications */}
            <div className="flex flex-col gap-2 sm:gap-2.5 pt-2.5 sm:pt-3 border-t border-black/8 text-[0.72rem]">
              <div>
                <span className="text-[0.6rem] sm:text-[0.62rem] uppercase tracking-wider text-[#525252] block">
                  Fabric & Textile
                </span>
                <p className="font-semibold m-0 mt-0.5 text-[#121212] text-[0.75rem] sm:text-[0.8rem]">{look.fabric}</p>
              </div>

              <div>
                <span className="text-[0.6rem] sm:text-[0.62rem] uppercase tracking-wider text-[#525252] block">
                  Fit & Silhouette
                </span>
                <p className="font-semibold m-0 mt-0.5 text-[#121212] text-[0.75rem] sm:text-[0.8rem]">{look.silhouette}</p>
              </div>

              <div>
                <span className="text-[0.6rem] sm:text-[0.62rem] uppercase tracking-wider text-[#525252] block">
                  Details & Craftsmanship
                </span>
                <p className="font-semibold m-0 mt-0.5 text-[#121212] text-[0.75rem] sm:text-[0.8rem]">{look.hardware}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {look.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="py-0.5 sm:py-1 px-2 sm:px-2.5 rounded-full text-[0.6rem] sm:text-[0.62rem] font-semibold uppercase tracking-wider border border-black/8 text-[#525252]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Inquire Action: WhatsApp button with Lucide MessageCircle */}
          <div className="pt-3 border-t border-black/8">
            <a
              href={`https://wa.me/91${BRAND_DATA.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                `Hello Deer & Dan! I am interested in Look ${look.number}: "${look.title}". Could you please check availability and sizing at the Chhindwara showroom?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-primary !w-full !py-3 sm:!py-3.5 !px-4 sm:!px-5 !text-[0.82rem] sm:!text-[0.88rem] justify-center"
            >
              <MessageCircle size={17} className="text-white shrink-0" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
