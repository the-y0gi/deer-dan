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
  Globe,
  Gift,
  Send,
  Calendar,
  Sparkles,
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
  { value: "11:00", label: "11:00", period: "Morning" },
  { value: "14:00", label: "14:00", period: "Afternoon" },
  { value: "17:00", label: "17:00", period: "Evening" },
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

    // Build the formatted WhatsApp message
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

    // Open WhatsApp directly in new tab
    window.open(waUrl, "_blank");

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Hero Header: Compact & Elegant */}
      <section style={{ paddingTop: "7.5rem", paddingBottom: "2.5rem" }}>
        <div className="luxury-container">
          <div
            style={{
              maxWidth: "780px",
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                fontSize: "0.72rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--accent)",
              }}
            >
              Showroom Concierge • Chhindwara
            </span>

            <h1
              style={{
                fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.3rem, 4.5vw, 3.8rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              Connect with Our <br />
              <span
                style={{ fontStyle: "italic", fontWeight: 300, opacity: 0.85 }}
              >
                Styling Concierge.
              </span>
            </h1>

            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                margin: 0,
                maxWidth: "640px",
              }}
            >
              Planning a visit to our multi-floor glass showroom at Imlikheda
              Chowk, checking size availability, or scheduling personal styling?
              Connect with our team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section style={{ paddingBottom: "4.5rem" }}>
        <div className="luxury-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            {/* Left: Contact Info Cards */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {/* WhatsApp Quick CTA Box */}
              <div
                style={{
                  background:
                    "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(255,255,255,0.85) 100%)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: "20px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                  }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "9999px",
                      background: "#10b981",
                      color: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "1.15rem",
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontWeight: 500,
                      }}
                    >
                      Instant WhatsApp Concierge
                    </h3>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "#059669",
                        fontWeight: 600,
                      }}
                    >
                      Active Now • Fast Response
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.5,
                  }}
                >
                  Chat directly with our showroom team for outfit sizes,
                  in-store trial assistance, or quick queries.
                </p>

                <div>
                  <a
                    href={BRAND_DATA.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-primary"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1.35rem",
                      borderRadius: "9999px",
                      background: "#10b981",
                      border: "none",
                      color: "#ffffff",
                      fontWeight: 600,
                      fontSize: "0.78rem",
                      textDecoration: "none",
                      boxShadow: "0 4px 15px rgba(16,185,129,0.25)",
                    }}
                  >
                    <MessageCircle size={15} />
                    <span>Open WhatsApp Chat</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* Physical Store Details Card */}
              <div
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  borderRadius: "20px",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.1rem",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.03)",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--text-muted)",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginBottom: "0.35rem",
                    }}
                  >
                    <MapPin size={13} color="#111111" />
                    Flagship Showroom
                  </span>
                  <h4
                    style={{
                      margin: 0,
                      fontSize: "1.2rem",
                      fontFamily: "'Newsreader', Georgia, serif",
                      fontWeight: 500,
                    }}
                  >
                    Deer & Dan (डियर & डैन)
                  </h4>
                  <p
                    style={{
                      margin: "0.25rem 0 0 0",
                      fontSize: "0.82rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.55,
                    }}
                  >
                    {BRAND_DATA.address.full}
                  </p>
                  <p
                    style={{
                      margin: "0.15rem 0 0 0",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    Plus Code: {BRAND_DATA.address.plusCode}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--card-border)",
                    paddingTop: "0.85rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--text-muted)",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <Clock size={13} color="#111111" />
                    Operating Hours
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#10b981",
                    }}
                  >
                    10:30 AM – 10:00 PM
                  </p>
                  <span
                    style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}
                  >
                    Open Monday through Sunday (All 7 Days)
                  </span>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--card-border)",
                    paddingTop: "0.85rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.45rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.65rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.15em",
                      color: "var(--text-muted)",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      marginBottom: "0.2rem",
                    }}
                  >
                    <Phone size={13} color="#111111" />
                    Direct Channels
                  </span>
                  <a
                    href={`tel:${BRAND_DATA.phone}`}
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--text-main)",
                      textDecoration: "none",
                      fontWeight: 600,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                  >
                    <span>Phone: {BRAND_DATA.phoneFormatted}</span>
                  </a>
                  <span
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                  >
                    Instagram: {BRAND_DATA.instagram}
                  </span>
                  <span
                    style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}
                  >
                    Website: {BRAND_DATA.website}
                  </span>
                </div>
              </div>

              {/* Complimentary VIP Packaging Pill */}
              <div
                className="look-card-frame"
                style={{
                  padding: "0.85rem 1.15rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  borderRadius: "16px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "65px",
                    height: "65px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <Image
                    src="/images/packaging-single-bag.jpg"
                    alt="Deer & Dan luxury packaging bag"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div>
                  <h5
                    style={{
                      margin: 0,
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <Gift size={14} color="#111111" />
                    Complimentary VIP Packaging
                  </h5>
                  <p
                    style={{
                      margin: "0.15rem 0 0 0",
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.4,
                    }}
                  >
                    Every purchase includes our signature matte black stag gift
                    bag & seal.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Interactive WhatsApp Form */}
            <div className="luxury-form-card">
              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "3rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1.15rem",
                  }}
                >
                  <div
                    style={{
                      width: "68px",
                      height: "68px",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      border: "1.5px solid rgba(16, 185, 129, 0.3)",
                      color: "#10b981",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 8px 20px rgba(16, 185, 129, 0.2)",
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Newsreader', Georgia, serif",
                        fontSize: "2.1rem",
                        fontWeight: 500,
                        margin: 0,
                        color: "#121212",
                      }}
                    >
                      WhatsApp Ready to Send
                    </h3>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--text-muted)",
                        maxWidth: "400px",
                        lineHeight: 1.6,
                        margin: "0.5rem auto 0 auto",
                      }}
                    >
                      Your details have been pre-filled. Simply tap &ldquo;Send&rdquo; inside WhatsApp to chat with our Chhindwara showroom team immediately.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-luxury-secondary"
                    style={{
                      marginTop: "0.5rem",
                      fontSize: "0.8rem",
                      padding: "0.65rem 1.25rem",
                      borderRadius: "9999px",
                      border: "1px solid rgba(0,0,0,0.15)",
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.35rem",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.32rem 0.85rem",
                        borderRadius: "9999px",
                        background: "rgba(16, 185, 129, 0.08)",
                        border: "1px solid rgba(16, 185, 129, 0.25)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          width: "7px",
                          height: "7px",
                          borderRadius: "9999px",
                          background: "#10b981",
                          boxShadow: "0 0 8px #10b981",
                          display: "inline-block",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "#047857",
                        }}
                      >
                        Direct WhatsApp Concierge
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: "'Newsreader', 'Playfair Display', Georgia, serif",
                        fontSize: "clamp(1.75rem, 3.2vw, 2.3rem)",
                        fontWeight: 400,
                        letterSpacing: "-0.025em",
                        margin: 0,
                        color: "#121212",
                        lineHeight: 1.15,
                      }}
                    >
                      Connect with Showroom Team
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--text-muted)",
                        marginTop: "0.35rem",
                        marginBottom: 0,
                        lineHeight: 1.55,
                      }}
                    >
                      Fill in your preferences below — opens WhatsApp instantly with your structured inquiry ready to send.
                    </p>
                  </div>

                  {/* Row 1: Full Name & Phone */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    {/* Full Name */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "#18181b",
                          marginBottom: "0.4rem",
                        }}
                      >
                        Full Name <span style={{ color: "#10b981" }}>*</span>
                      </label>
                      <div className="luxury-input-wrapper">
                        <div className="luxury-input-icon">
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
                          className="luxury-input-field"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "#18181b",
                          marginBottom: "0.4rem",
                        }}
                      >
                        Phone / WhatsApp <span style={{ color: "#10b981" }}>*</span>
                      </label>
                      <div className="luxury-input-wrapper">
                        <div className="luxury-input-icon">
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
                          className="luxury-input-field"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Service / Inquiry Type Selection (Interactive Luxury Chips) */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#18181b",
                        marginBottom: "0.45rem",
                      }}
                    >
                      Service / Inquiry Type
                    </label>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: "0.65rem",
                      }}
                    >
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
                            className={`service-option-btn ${
                              isSelected ? "active" : ""
                            }`}
                          >
                            <div
                              style={{
                                width: "36px",
                                height: "36px",
                                borderRadius: "10px",
                                background: isSelected
                                  ? "#10b981"
                                  : "rgba(0,0,0,0.04)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                color: isSelected ? "#ffffff" : "#525252",
                                boxShadow: isSelected
                                  ? "0 4px 10px rgba(16, 185, 129, 0.28)"
                                  : "none",
                                transition: "all 0.2s ease",
                              }}
                            >
                              <Icon size={17} />
                            </div>
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  fontSize: "0.85rem",
                                  fontWeight: 600,
                                  lineHeight: 1.25,
                                  color: isSelected ? "#064e3b" : "#121212",
                                }}
                              >
                                {s.title}
                              </div>
                              <div
                                style={{
                                  fontSize: "0.72rem",
                                  color: isSelected ? "#047857" : "#71717a",
                                  marginTop: "0.15rem",
                                  lineHeight: 1.2,
                                }}
                              >
                                {s.sub}
                              </div>
                            </div>
                            {isSelected && (
                              <span
                                style={{
                                  position: "absolute",
                                  top: "0.7rem",
                                  right: "0.7rem",
                                  width: "20px",
                                  height: "20px",
                                  borderRadius: "9999px",
                                  background: "#10b981",
                                  color: "#ffffff",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  boxShadow: "0 2px 6px rgba(16, 185, 129, 0.3)",
                                }}
                              >
                                <Check size={12} strokeWidth={3} />
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 3: Preferred Date (Optional) */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#18181b",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Preferred Visit Date (Optional)
                    </label>
                    <div className="luxury-input-wrapper">
                      <div className="luxury-input-icon">
                        <Calendar size={16} />
                      </div>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="luxury-input-field"
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>

                  {/* Row 4: Preferred Time Slot (Spacious Luxury Pills) */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "0.45rem",
                      }}
                    >
                      <label
                        style={{
                          display: "block",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "#18181b",
                          margin: 0,
                        }}
                      >
                        Preferred Time Slot
                      </label>
                      <span
                        style={{
                          fontSize: "0.68rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Showroom: 10:30 AM – 10:00 PM
                      </span>
                    </div>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(130px, 1fr))",
                        gap: "0.65rem",
                      }}
                    >
                      {TIME_SLOTS.map((slot) => {
                        const isSelected = formData.time === slot.value;
                        return (
                          <button
                            key={slot.value}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, time: slot.value })
                            }
                            className={`time-slot-pill ${
                              isSelected ? "active" : ""
                            }`}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.45rem",
                              }}
                            >
                              <Clock
                                size={14}
                                style={{
                                  color: isSelected ? "#059669" : "#9ca3af",
                                  flexShrink: 0,
                                }}
                              />
                              <span
                                style={{
                                  fontWeight: 600,
                                  fontSize: "0.82rem",
                                  color: isSelected ? "#064e3b" : "#1f2937",
                                }}
                              >
                                {slot.label}
                              </span>
                            </div>
                            <span
                              style={{
                                fontSize: "0.68rem",
                                padding: "0.15rem 0.45rem",
                                borderRadius: "6px",
                                background: isSelected
                                  ? "rgba(16, 185, 129, 0.2)"
                                  : "rgba(0, 0, 0, 0.04)",
                                color: isSelected ? "#047857" : "#6b7280",
                                fontWeight: 600,
                              }}
                            >
                              {slot.period}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Inquiry Details / Specific Outfits (Optional) */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#18181b",
                        marginBottom: "0.4rem",
                      }}
                    >
                      Specific Requests / Outfits (Optional)
                    </label>
                    <div
                      className="luxury-input-wrapper"
                      style={{
                        alignItems: "flex-start",
                        padding: "0.65rem 0.85rem",
                      }}
                    >
                      <div
                        style={{
                          color: "#71717a",
                          paddingTop: "0.2rem",
                          marginRight: "0.65rem",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <MessageSquare size={16} />
                      </div>
                      <textarea
                        rows={2}
                        placeholder="e.g. Look 01 pure cotton white shirt in size L, or planning to visit with family this Saturday..."
                        value={formData.note}
                        onChange={(e) =>
                          setFormData({ ...formData, note: e.target.value })
                        }
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          outline: "none",
                          fontSize: "0.88rem",
                          fontFamily: "inherit",
                          color: "#121212",
                          resize: "none",
                        }}
                      />
                    </div>
                  </div>

                  {/* Row 5: WhatsApp Submit Button */}
                  <div style={{ marginTop: "0.35rem" }}>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-whatsapp-submit"
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

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.35rem",
                        marginTop: "0.65rem",
                        fontSize: "0.72rem",
                        color: "var(--text-muted)",
                      }}
                    >
                      <ShieldCheck size={14} color="#10b981" />
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

      {/* Embedded Map Section: Compact & Framed */}
      <section style={{ paddingBottom: "4.5rem" }}>
        <div className="luxury-container">
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "360px",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 15px 40px rgba(0,0,0,0.06)",
              border: "1px solid var(--card-border)",
            }}
          >
            <iframe
              src={BRAND_DATA.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
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
