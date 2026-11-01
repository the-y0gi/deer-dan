'use client';

import { useState, FormEvent } from 'react';
import { Look } from '../data/looks';

interface LookbookFormProps {
  selectedLook: Look | null;
  onCloseInquiry: () => void;
  theme?: string;
}

export default function LookbookForm({ selectedLook }: LookbookFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: selectedLook ? selectedLook.title : 'General Showroom Collection',
    message: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section
      id="inquiry"
      className="py-16 sm:py-28 relative border-t border-black/8"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-white/90 border border-black/8 rounded-2xl sm:rounded-3xl p-5 sm:p-10 md:p-14 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] backdrop-blur-xl">
          {submitted ? (
            <div className="text-center py-12 px-4 flex flex-col gap-4 items-center">
              <div className="w-16 h-16 rounded-full bg-[#10b981]/15 text-[#10b981] flex items-center justify-center">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-4xl font-normal m-0 text-[#121212]">
                Thank You for Connecting
              </h3>
              <p className="text-[0.9rem] text-[#525252] max-w-md leading-relaxed m-0">
                Our Chhindwara showroom team has received your message. We will reach out
                shortly with look details, sizing, or to welcome you for your visit.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-black/10 bg-white/70 hover:border-black/30 hover:bg-white text-[0.82rem] font-medium transition-all duration-200 cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              <div className="text-center flex flex-col gap-2">
                <span className="text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[#111111]">
                  Personal Styling & In-Store Concierge
                </span>
                <h3 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal m-0 text-[#121212]">
                  Plan Your Visit or Inquire on a Look
                </h3>
                <p className="text-[0.9rem] text-[#525252] max-w-lg mx-auto leading-relaxed m-0">
                  Interested in a specific look, sizing query, or planning a visit to our flagship showroom in Chhindwara?
                  Share your details and our team will assist you promptly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#525252]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#e2ddd5] bg-white text-[#121212] text-[0.85rem] outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#525252]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@atelier.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#e2ddd5] bg-white text-[#121212] text-[0.85rem] outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#525252]">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#e2ddd5] bg-white text-[#121212] text-[0.85rem] outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#525252]">
                      Capsule / Look of Interest
                    </label>
                    <input
                      type="text"
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#e2ddd5] bg-white text-[#121212] text-[0.85rem] outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.7rem] font-semibold uppercase tracking-wider text-[#525252]">
                    Inquiry Details / Sizing / Visit Timing
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Sizing check for Look 01 (M or L), planning to visit this weekend, or styling questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3.5 rounded-xl border border-[#e2ddd5] bg-white text-[#121212] text-[0.85rem] outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-luxury-primary w-full !py-3.5 sm:!py-4 !px-6 !text-[0.85rem] mt-2 justify-center"
                >
                  {loading ? 'Submitting to Showroom...' : 'Send Styling & Visit Inquiry'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
