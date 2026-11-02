'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BRAND_DATA } from '../data/brand';
import {
  Clock,
  MapPin,
  User,
  ArrowUpRight,
  MessageCircle,
  Gift,
  Car,
  Building,
} from 'lucide-react';

export default function StorePage() {
  const showroomGalleries = [
    {
      title: 'Quiet Luxury & Heritage Knits',
      subtitle: 'First Floor • West Wing',
      description: 'Warm natural wood shelving featuring waffle-knit polos, silk ascots, and pleated trouser styling.',
      image: '/images/rack-quiet-luxury.jpg',
    },
    {
      title: 'Dark Street Atelier',
      subtitle: 'First Floor • North Wing',
      description: 'Monochromatic utility gallery displaying heavy cotton overshirts, washed selvedge denim, and tactical footwear.',
      image: '/images/rack-street-atelier.jpg',
    },
    {
      title: 'Warm Architectural Arches',
      subtitle: 'Ground Floor • Main Hall',
      description: 'Halo-lit archway displays showcasing contemporary tees, graphic capsules, and curated everyday essentials.',
      image: '/images/rack-contemporary-arch.jpg',
    },
    {
      title: 'Womenswear Resort Suite',
      subtitle: 'Second Floor • Sunset Salon',
      description: 'Ambient lilac arch showcasing delicate eyelet embroidery tops, denim sets, and pastel summer coordinates.',
      image: '/images/rack-womens-arch.jpg',
    },
    {
      title: 'Youth & Smart Streetwear',
      subtitle: 'Ground Floor • South Wing',
      description: 'Emerald backlit arch housing coordinated utility sets, cargo shorts, and crossbody lifestyle accents.',
      image: '/images/rack-junior-coords.jpg',
    },
    {
      title: 'Summer Resort Wear Showcase',
      subtitle: 'Second Floor • Terrace Gallery',
      description: 'Statement printed camp shirts, relaxed waffle linen co-ords, and breezy warm-weather ensembles.',
      image: '/images/rack-resort-display.jpg',
    },
  ];

  const storeAmenities = [
    {
      num: '01',
      tag: 'Architectural Destination',
      icon: Building,
      title: 'Multi-Floor Glasshouse',
      desc: 'Spanning multiple soaring architectural levels on MP SH 26 with grand ambient display arches.',
    },
    {
      num: '02',
      tag: '1-on-1 Consultation',
      icon: User,
      title: 'Personal Styling Lounges',
      desc: 'Dedicated private fitting suites with curated trial sessions and bespoke sizing advice.',
    },
    {
      num: '03',
      tag: 'Bespoke Unboxing',
      icon: Gift,
      title: 'VIP Packaging Bar',
      desc: 'Complimentary signature matte black stag bags with wax seal stickers on every purchase.',
    },
    {
      num: '04',
      tag: 'Valet & Parking',
      icon: Car,
      title: 'Easy Highway Accessibility',
      desc: 'Prominently located at Mansarovar Complex on Chhindwara Road with effortless showroom parking.',
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      {/* Flagship Store Hero Header */}
      <section className="pt-24 sm:pt-[8.5rem] pb-8 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[840px] flex flex-col gap-4 sm:gap-4.5">
            <span className="text-[0.68rem] sm:text-[0.72rem] tracking-[0.2em] uppercase font-bold text-[#111111] block">
              Flagship Destination • Open Daily 10:30 AM – 10:00 PM
            </span>

            <h1 className="font-serif text-[clamp(2.1rem,6vw,4.4rem)] font-normal leading-[1.1] tracking-[-0.025em] m-0 text-[#121212]">
              The Grand Flagship Store <br />
              <span className="italic font-light opacity-85">
                at Mansarovar Complex, Chhindwara.
              </span>
            </h1>

            <p className="text-[0.95rem] sm:text-[1.08rem] text-[#525252] leading-[1.7] sm:leading-[1.75] m-0 max-w-[720px]">
              Step into a sanctuary of architectural refinement and quiet luxury. Spanning multiple
              floors on Chhindwara Road (Chandangaon), the <strong className="font-semibold text-[#121212]">Deer & Dan</strong> flagship showroom brings
              personalized haute couture and contemporary Indian fashion to Madhya Pradesh.
            </p>
          </div>
        </div>
      </section>

      {/* Exterior Architecture Banner & Live Details Grid */}
      <section className="pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Real Building Facade Photo */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-black/8 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.08)] p-2.5 sm:p-3.5">
              <div className="relative w-full h-[280px] xs:h-[360px] sm:h-[520px] rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src="/images/store-facade.jpg"
                  alt="Deer & Dan Grand Glass Flagship Showroom in Chhindwara"
                  fill
                  priority
                  className="object-cover object-center"
                />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 bg-[#111111]/92 backdrop-blur-xl p-3.5 sm:p-5 rounded-xl sm:rounded-2xl text-white border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                  <span className="m-0 text-[0.62rem] sm:text-[0.68rem] tracking-[0.18em] uppercase text-[#10b981] font-semibold block">
                    Architectural Glass Facade
                  </span>
                  <h3 className="m-0 mt-0.5 sm:mt-1 font-serif text-[1.15rem] sm:text-[1.45rem] font-medium tracking-tight text-white">
                    Deer & Dan (डियर & डैन)
                  </h3>
                  <p className="m-0 mt-0.5 sm:mt-1 text-[0.72rem] sm:text-[0.8rem] text-white/80 leading-relaxed">
                    {BRAND_DATA.address.full}
                  </p>
                </div>
              </div>
            </div>

            {/* Store Information & Direct Connect */}
            <div className="flex flex-col gap-5 sm:gap-7">
              <div>
                <span className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.2em] font-bold text-[#111111] block mb-2">
                  Visiting Information
                </span>
                <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] font-normal m-0 leading-[1.15] text-[#121212]">
                  Open 7 Days a Week
                </h2>
              </div>

              {/* Information Cards */}
              <div className="flex flex-col gap-4 sm:gap-5 bg-white/85 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-black/8 shadow-sm">
                {/* Operating Hours */}
                <div className="flex items-start gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#10b981]/12 text-[#10b981] flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <strong className="block text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.12em] text-[#525252]">
                      Operating Hours
                    </strong>
                    <p className="m-0 mt-0.5 sm:mt-1 text-[1.1rem] sm:text-[1.2rem] font-semibold text-emerald-700">
                      10:30 AM – 10:00 PM
                    </p>
                    <span className="text-[0.72rem] sm:text-[0.76rem] text-[#525252]">
                      Monday through Sunday • No holiday closures
                    </span>
                  </div>
                </div>

                {/* Physical Address */}
                <div className="border-t border-black/8 pt-3.5 sm:pt-4.5 flex items-start gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-black/5 text-[#121212] flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <strong className="block text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.12em] text-[#525252]">
                      Physical Landmark
                    </strong>
                    <p className="m-0 mt-0.5 sm:mt-1 text-[0.85rem] sm:text-[0.92rem] font-medium text-gray-800 leading-snug">
                      {BRAND_DATA.address.full}
                    </p>
                    <span className="text-[0.72rem] sm:text-[0.75rem] text-[#525252] mt-0.5 block">
                      Google Plus Code: <strong>{BRAND_DATA.address.plusCode}</strong>
                    </span>
                  </div>
                </div>

                {/* Founder & Creative Direction */}
                <div className="border-t border-black/8 pt-3.5 sm:pt-4.5 flex items-start gap-3 sm:gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-black/5 text-[#121212] flex items-center justify-center shrink-0">
                    <User size={18} />
                  </div>
                  <div>
                    <strong className="block text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.12em] text-[#525252]">
                      Founder & Creative Direction
                    </strong>
                    <p className="m-0 mt-0.5 sm:mt-1 text-[0.88rem] sm:text-[0.95rem] font-semibold text-[#121212]">
                      {BRAND_DATA.founder}
                    </p>
                    <span className="text-[0.72rem] sm:text-[0.75rem] text-[#525252]">{BRAND_DATA.founderRole}</span>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-3.5 w-full sm:w-auto">
                <a
                  href={BRAND_DATA.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury-primary w-full sm:w-auto justify-center text-center !py-3.5 !px-6 !text-[0.85rem]"
                >
                  <MapPin size={16} />
                  <span>Open in Google Maps</span>
                  <ArrowUpRight size={15} />
                </a>

                <a
                  href={BRAND_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-submit w-full sm:!w-auto justify-center text-center !py-3.5 !px-6 !text-[0.85rem]"
                >
                  <MessageCircle size={17} fill="#ffffff" color="#10b981" />
                  <span>WhatsApp Stylist Chat</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Amenities & Hospitality Suite */}
      <section className="py-14 sm:py-20 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[640px] mb-8 sm:mb-12">
            <span className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.2em] font-bold text-[#111111] block mb-2">
              Showroom Standards
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3rem)] font-normal leading-[1.15] m-0 text-[#121212]">
              Designed for Unhurried Luxury.
            </h2>
            <p className="text-[0.88rem] sm:text-[0.98rem] text-[#525252] leading-relaxed mt-2 m-0">
              Every touchpoint at our Mansarovar Complex flagship is engineered for sensory calm, bespoke fit precision, and discrete hospitality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
            {storeAmenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-8 bg-white/85 rounded-2xl sm:rounded-3xl border border-black/8 flex flex-col gap-3.5 sm:gap-4.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-md"
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#10b981]/12 to-[#fbe7d6]/35 border border-[#10b981]/25 text-emerald-700 flex items-center justify-center shadow-sm">
                      <Icon size={19} />
                    </div>
                    <span className="font-serif text-[1.3rem] sm:text-[1.45rem] font-normal text-[#525252] opacity-50">
                      {amenity.num}
                    </span>
                  </div>

                  <div>
                    <span className="text-[0.62rem] sm:text-[0.65rem] uppercase tracking-[0.15em] text-[#059669] font-bold block mb-1">
                      {amenity.tag}
                    </span>
                    <h3 className="m-0 text-[1.15rem] sm:text-[1.25rem] font-serif font-medium text-[#121212] leading-snug">
                      {amenity.title}
                    </h3>
                  </div>

                  <p className="m-0 text-[0.82rem] sm:text-[0.86rem] text-[#525252] leading-relaxed">
                    {amenity.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Showroom Interior Galleries Grid */}
      <section className="py-14 sm:py-20 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-[640px] mb-8 sm:mb-14">
            <span className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.2em] font-bold text-[#111111] block mb-2">
              Interior Architecture
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,3.2rem)] font-normal leading-[1.15] m-0 text-[#121212]">
              Curated Showcase Galleries.
            </h2>
            <p className="text-[0.88rem] sm:text-[0.98rem] text-[#525252] leading-relaxed mt-2 m-0">
              Explore the dedicated visual zones across our multi-floor flagship showroom in Chhindwara.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {showroomGalleries.map((gallery, idx) => (
              <div
                key={idx}
                className="bg-white/85 border border-black/8 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col gap-4 sm:gap-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative w-full h-[240px] sm:h-[290px] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src={gallery.image}
                    alt={gallery.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 sm:top-3.5 left-3 sm:left-3.5 bg-black/75 backdrop-blur-md text-white py-1 sm:py-1.5 px-3 sm:px-3.5 rounded-full text-[0.62rem] sm:text-[0.68rem] font-semibold tracking-[0.1em] uppercase border border-white/15">
                    {gallery.subtitle}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-[1.2rem] sm:text-[1.35rem] font-medium m-0 mb-1 sm:mb-1.5 text-[#121212]">
                    {gallery.title}
                  </h3>
                  <p className="m-0 text-[0.8rem] sm:text-[0.85rem] text-[#525252] leading-relaxed">
                    {gallery.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 border-t border-black/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center max-w-[640px] mx-auto mb-8 sm:mb-10">
            <span className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.2em] font-bold text-[#111111]">
              Interactive Map
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,2.5rem)] font-normal m-0 mt-2 text-[#121212]">
              Find Us at Mansarovar Complex
            </h2>
            <p className="text-[0.85rem] sm:text-[0.9rem] text-[#525252] mt-1.5 leading-relaxed">
              Conveniently located at Mansarovar Complex on Chhindwara Road (Chandangaon) with dedicated showroom parking.
            </p>
          </div>

          <div className="relative w-full h-[280px] sm:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-black/8">
            <iframe
              src={BRAND_DATA.mapEmbedUrl}
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Deer & Dan Store Location Map"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
