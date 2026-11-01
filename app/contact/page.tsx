"use client";

import { useState, FormEvent } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BRAND_DATA } from "../data/brand";
import Image from "next/image";
import {
  MessageCircle,
  MapPin,
  Clock,
  Phone,
  Gift,
  Calendar,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  User,
  Check,
  MessageSquare,
  PersonStandingIcon,
} from "lucide-react";

const SERVICE_OPTIONS = [
  {
    id: "Personal Showroom Styling",
    title: "Personal Styling",
    sub: "1-on-1 fit & trial",
    icon: PersonStandingIcon,
  },
  {
    id: "Size & Stock Check",
    title: "Size & Stock Check",
    sub: "Check piece availability",
    icon: ShieldCheck,
  },
  {
    id: "Wedding / Festive Wardrobe Curation",
    title: "Wedding Curation",
    sub: "Suits & occasion wear",
    icon: Gift,
  },
  {
    id: "General Store Visit Inquiry",
    title: "Store Visit",
    sub: "Imlikheda showroom",
    icon: MapPin,
  },
];

const TIME_SLOTS = [
  { value: "11:00 AM", label: "11:00 AM", period: "Morning" },
  { value: "02:00 PM", label: "02:00 PM", period: "Afternoon" },
  { value: "05:00 PM", label: "05:00 PM", period: "Evening" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "11:00 AM",
    service: "Personal Showroom Styling",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form submit handler that opens WhatsApp with structured message
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formattedText = `*New Showroom Inquiry - Deer & Dan*
━━━━━━━━━━━━━━━━━━
👤 *Name:* ${formData.name.trim()}
📞 *Phone:* ${formData.phone.trim()}
📅 *Preferred Date:* ${formData.date ? formData.date : "Walk-in / Flexible"}
⏰ *Preferred Time:* ${formData.time}
✨ *Service:* ${formData.service}
${formData.note ? `📝 *Note:* ${formData.note.trim()}` : ""}
━━━━━━━━━━━━━━━━━━
_Sent via deeranddan.com concierge_`;

    const cleanNumber = BRAND_DATA.phone.replace(/[^0-9]/g, "");
    const waUrl = `https://wa.me/91${cleanNumber}?text=${encodeURIComponent(formattedText)}`;

    window.open(waUrl, "_blank");

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-24 sm:pt-[7.5rem] pb-8 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[780px] flex flex-col gap-3 sm:gap-3.5">
            <span className="inline-flex items-center gap-2 text-[0.68rem] sm:text-[0.72rem] font-bold uppercase tracking-[0.15em] text-[#111111]">
              Showroom Concierge • Chhindwara
            </span>

            <h1 className="font-serif text-[clamp(2.1rem,5vw,3.8rem)] font-normal leading-[1.1] tracking-[-0.025em] m-0 text-[#121212]">
              Connect with Our <br />
              <span className="italic font-light opacity-85">
                Styling Concierge.
              </span>
            </h1>

            <p className="text-[0.9rem] sm:text-[0.95rem] text-[#525252] leading-relaxed m-0 max-w-[640px]">
              Planning a visit to our multi-floor glass showroom at Imlikheda
              Chowk, checking size availability, or scheduling personal styling?
              Connect with our team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="pb-14 sm:pb-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-8 sm:gap-10 items-start">
            {/* Left: Contact Info Cards */}
            <div className="flex flex-col gap-4 sm:gap-5">
              {/* WhatsApp Quick CTA Box */}
              <div className="bg-gradient-to-br from-[#10b981]/12 to-white/85 border border-[#10b981]/30 rounded-2xl sm:rounded-3xl p-4.5 sm:p-6 flex flex-col gap-3 sm:gap-3.5 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <h3 className="m-0 text-[1.1rem] sm:text-[1.15rem] font-serif font-medium text-[#121212]">
                      Instant WhatsApp Concierge
                    </h3>
                    <span className="text-[0.68rem] sm:text-[0.72rem] text-emerald-700 font-semibold">
                      Active Now • Fast Response
                    </span>
                  </div>
                </div>

                <p className="m-0 text-[0.8rem] sm:text-[0.82rem] text-[#525252] leading-relaxed">
                  Chat directly with our showroom team for outfit sizes,
                  in-store trial assistance, or quick queries.
                </p>

                <div>
                  <a
                    href={BRAND_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-primary !bg-[#10b981] !py-3 !px-5 !text-[0.78rem] !text-white w-full sm:w-auto justify-center"
                  >
                    <MessageCircle size={15} />
                    <span>Open WhatsApp Chat</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Physical Store Details Card */}
              <div className="bg-white/85 border border-black/8 rounded-2xl sm:rounded-3xl p-4.5 sm:p-6 flex flex-col gap-4 sm:gap-4.5 shadow-sm">
                <div>
                  <span className="text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.15em] text-[#525252] font-bold inline-flex items-center gap-1.5 mb-1 sm:mb-1.5">
                    <MapPin size={13} className="text-[#111111]" />
                    Flagship Showroom
                  </span>
                  <h4 className="m-0 text-[1.15rem] sm:text-[1.2rem] font-serif font-medium text-[#121212]">
                    Deer & Dan (डियर & डैन)
                  </h4>
                  <p className="m-0 mt-1 text-[0.8rem] sm:text-[0.82rem] text-[#525252] leading-relaxed">
                    {BRAND_DATA.address.full}
                  </p>
                  <p className="m-0 mt-0.5 text-[0.7rem] sm:text-[0.72rem] text-[#525252]">
                    Plus Code: {BRAND_DATA.address.plusCode}
                  </p>
                </div>

                <div className="border-t border-black/8 pt-3 sm:pt-3.5">
                  <span className="text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.15em] text-[#525252] font-bold inline-flex items-center gap-1.5 mb-1">
                    <Clock size={13} className="text-[#111111]" />
                    Operating Hours
                  </span>
                  <p className="m-0 text-[1rem] sm:text-[1.05rem] font-semibold text-[#10b981]">
                    10:30 AM – 10:00 PM
                  </p>
                  <span className="text-[0.7rem] sm:text-[0.72rem] text-[#525252]">
                    Open Monday through Sunday (All 7 Days)
                  </span>
                </div>

                <div className="border-t border-black/8 pt-3 sm:pt-3.5 flex flex-col gap-1.5 sm:gap-2">
                  <span className="text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.15em] text-[#525252] font-bold inline-flex items-center gap-1.5 mb-0.5">
                    <Phone size={13} className="text-[#111111]" />
                    Direct Channels
                  </span>
                  <a
                    href={`tel:${BRAND_DATA.phone}`}
                    className="text-[0.8rem] sm:text-[0.82rem] text-[#121212] no-underline font-semibold inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>Phone: {BRAND_DATA.phoneFormatted}</span>
                  </a>
                  <span className="text-[0.78rem] sm:text-[0.8rem] text-[#525252]">
                    Instagram: {BRAND_DATA.instagram}
                  </span>
                  <span className="text-[0.78rem] sm:text-[0.8rem] text-[#525252]">
                    Website: {BRAND_DATA.website}
                  </span>
                </div>
              </div>

              {/* Complimentary VIP Packaging Pill */}
              <div className="bg-white border border-black/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 sm:px-5 flex items-center gap-3.5 sm:gap-4 shadow-sm">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden shrink-0">
                  <Image
                    src="/images/packaging-single-bag.jpg"
                    alt="Deer & Dan luxury packaging bag"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className="m-0 text-[0.85rem] sm:text-[0.88rem] font-semibold flex items-center gap-1.5 text-[#121212]">
                    <Gift size={14} className="text-[#111111]" />
                    Complimentary VIP Packaging
                  </h5>
                  <p className="m-0 mt-0.5 text-[0.7rem] sm:text-[0.72rem] text-[#525252] leading-snug">
                    Every purchase includes our signature matte black stag gift bag & seal.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive WhatsApp Form */}
            <div className="w-full rounded-2xl sm:rounded-3xl p-4.5 sm:p-7 md:p-10 bg-white/92 backdrop-blur-xl border border-black/8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.06),inset_0_0_0_1px_rgba(255,255,255,0.8)]">
              {submitted ? (
                <div className="text-center py-12 px-6 flex flex-col items-center gap-4.5">
                  <div className="w-16 h-16 rounded-full bg-[#10b981]/12 border border-[#10b981]/30 text-[#10b981] flex items-center justify-center shadow-[0_8px_20px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 size={36} />
                  </div>
                  <div>
                    <h3 className="font-serif text-[2.1rem] font-medium m-0 text-[#121212]">
                      WhatsApp Ready to Send
                    </h3>
                    <p className="text-[0.88rem] text-[#525252] max-w-sm leading-relaxed mx-auto mt-2 mb-0">
                      Your details have been pre-filled. Simply tap &ldquo;Send&rdquo; inside WhatsApp to chat with our Chhindwara showroom team immediately.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 text-[0.8rem] py-2.5 px-5 rounded-full border border-black/15 bg-white/80 hover:bg-white transition-colors cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5.5">
                  <div>
                    <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-[#10b981]/8 border border-[#10b981]/25 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] shadow-[0_0_8px_#10b981]" />
                      <span className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-emerald-800">
                        Direct WhatsApp Concierge
                      </span>
                    </div>

                    <h3 className="font-serif text-[clamp(1.75rem,3.2vw,2.3rem)] font-normal tracking-tight m-0 text-[#121212] leading-tight">
                      Connect with Showroom Team
                    </h3>
                    <p className="text-[0.85rem] text-[#525252] mt-1.5 mb-0 leading-relaxed">
                      Fill in your preferences below — opens WhatsApp instantly with your structured inquiry ready to send.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-zinc-900 mb-1.5">
                        Full Name <span className="text-[#10b981]">*</span>
                      </label>
                      <div className="relative flex items-center rounded-xl bg-white border border-black/10 shadow-sm focus-within:border-[#10b981] focus-within:ring-2 focus-within:ring-[#10b981]/20 transition-all">
                        <div className="absolute left-3.5 text-zinc-400 pointer-events-none flex items-center">
                          <User size={16} />
                        </div>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Vikram Sharma"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full py-3.5 pl-11 pr-4 bg-transparent border-0 outline-none text-[0.9rem] text-[#121212] placeholder-zinc-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-zinc-900 mb-1.5">
                        Phone / WhatsApp <span className="text-[#10b981]">*</span>
                      </label>
                      <div className="relative flex items-center rounded-xl bg-white border border-black/10 shadow-sm focus-within:border-[#10b981] focus-within:ring-2 focus-within:ring-[#10b981]/20 transition-all">
                        <div className="absolute left-3.5 text-zinc-400 pointer-events-none flex items-center">
                          <Phone size={16} />
                        </div>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full py-3.5 pl-11 pr-4 bg-transparent border-0 outline-none text-[0.9rem] text-[#121212] placeholder-zinc-400"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Service / Inquiry Type Selection */}
                  <div>
                    <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-zinc-900 mb-2">
                      Service / Inquiry Type
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICE_OPTIONS.map((s) => {
                        const Icon = s.icon;
                        const isSelected = formData.service === s.id;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, service: s.id })
                            }
                            className={`text-left rounded-2xl p-4 transition-all duration-200 cursor-pointer flex items-center gap-3.5 relative border shadow-sm ${
                              isSelected
                                ? "bg-gradient-to-br from-[#10b981]/8 to-[#fbe7d6]/45 border-[#10b981] text-[#121212] shadow-[0_6px_18px_-4px_rgba(16,185,129,0.18)]"
                                : "bg-white/85 border-black/8 hover:border-[#10b981]/35 hover:bg-white hover:-translate-y-0.5"
                            }`}
                          >
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                                isSelected
                                  ? "bg-[#10b981] text-white shadow-[0_4px_10px_rgba(16,185,129,0.28)]"
                                  : "bg-black/5 text-[#525252]"
                              }`}
                            >
                              <Icon size={17} />
                            </div>
                            <div className="flex-1">
                              <div
                                className={`text-[0.85rem] font-semibold leading-tight ${
                                  isSelected ? "text-emerald-950" : "text-[#121212]"
                                }`}
                              >
                                {s.title}
                              </div>
                              <div
                                className={`text-[0.72rem] mt-0.5 leading-tight ${
                                  isSelected ? "text-emerald-700" : "text-zinc-500"
                                }`}
                              >
                                {s.sub}
                              </div>
                            </div>
                            {isSelected && (
                              <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shadow-[0_2px_6px_rgba(16,185,129,0.3)]">
                                <Check size={12} strokeWidth={3} />
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 3: Preferred Date */}
                  <div>
                    <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-zinc-900 mb-1.5">
                      Preferred Visit Date (Optional)
                    </label>
                    <div className="relative flex items-center rounded-xl bg-white border border-black/10 shadow-sm focus-within:border-[#10b981] focus-within:ring-2 focus-within:ring-[#10b981]/20 transition-all">
                      <div className="absolute left-3.5 text-zinc-400 pointer-events-none flex items-center">
                        <Calendar size={16} />
                      </div>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full py-3.5 pl-11 pr-4 bg-transparent border-0 outline-none text-[0.9rem] text-[#121212] cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Row 4: Preferred Time Slot */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-zinc-900 m-0">
                        Preferred Time Slot
                      </label>
                      <span className="text-[0.68rem] text-[#525252]">
                        Showroom: 10:30 AM – 10:00 PM
                      </span>
                    </div>

                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-2 sm:gap-2.5">
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = formData.time === slot.value;
                        return (
                          <button
                            key={slot.value}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, time: slot.value })
                            }
                            className={`p-2.5 sm:p-3 rounded-xl text-[0.8rem] sm:text-[0.82rem] font-medium border transition-all duration-200 cursor-pointer flex items-center justify-between shadow-sm ${
                              isSelected
                                ? "bg-gradient-to-br from-[#10b981]/10 to-[#fbe7d6]/45 border-[#10b981] text-emerald-900 shadow-sm"
                                : "bg-white/85 border-black/8 text-zinc-700 hover:border-[#10b981]/35 hover:bg-white hover:-translate-y-0.5"
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              <Clock
                                size={14}
                                className={`shrink-0 ${
                                  isSelected ? "text-emerald-700" : "text-zinc-400"
                                }`}
                              />
                              <span
                                className={`font-semibold text-[0.8rem] sm:text-[0.82rem] ${
                                  isSelected ? "text-emerald-950" : "text-zinc-800"
                                }`}
                              >
                                {slot.label}
                              </span>
                            </div>
                            <span
                              className={`text-[0.65rem] sm:text-[0.68rem] py-0.5 px-1.5 rounded-md font-semibold ${
                                isSelected
                                  ? "bg-[#10b981]/20 text-emerald-800"
                                  : "bg-black/5 text-zinc-500"
                              }`}
                            >
                              {slot.period}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 5: Specific Requests */}
                  <div>
                    <label className="block text-[0.7rem] font-bold uppercase tracking-wider text-zinc-900 mb-1.5">
                      Specific Requests / Outfits (Optional)
                    </label>
                    <div className="relative flex items-start rounded-xl bg-white border border-black/10 shadow-sm focus-within:border-[#10b981] focus-within:ring-2 focus-within:ring-[#10b981]/20 transition-all p-3.5">
                      <div className="text-zinc-400 pt-0.5 mr-2.5 flex items-center shrink-0">
                        <MessageSquare size={16} />
                      </div>
                      <textarea
                        rows={2}
                        placeholder="e.g. Look 01 pure cotton white shirt in size L, or planning to visit with family this Saturday..."
                        value={formData.note}
                        onChange={(e) =>
                          setFormData({ ...formData, note: e.target.value })
                        }
                        className="w-full bg-transparent border-0 outline-none text-[0.88rem] text-[#121212] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-1">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-6 rounded-full bg-gradient-to-br from-[#25D366] to-[#059669] hover:opacity-95 text-white font-semibold text-[0.95rem] tracking-tight inline-flex items-center justify-center gap-2.5 border-0 cursor-pointer shadow-[0_12px_24px_-4px_rgba(16,185,129,0.4),inset_0_1px_1px_rgba(255,255,255,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <MessageCircle
                        size={19}
                        fill="#ffffff"
                        color="#10b981"
                      />
                      <span>
                        {loading
                          ? "Connecting to WhatsApp..."
                          : "Send Inquiry via WhatsApp"}
                      </span>
                      <ArrowUpRight size={17} />
                    </button>

                    <div className="flex items-center justify-center gap-1.5 mt-2.5 text-[0.72rem] text-[#525252]">
                      <ShieldCheck size={14} className="text-[#10b981]" />
                      <span>
                        Opens WhatsApp directly with pre-filled details • Fast concierge response
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="pb-14 sm:pb-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="relative w-full h-[260px] sm:h-[360px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-black/8">
            <iframe
              src={BRAND_DATA.mapEmbedUrl}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deer & Dan Store Map Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
