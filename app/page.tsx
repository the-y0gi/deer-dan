'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import FlagshipShowroom from './components/FlagshipShowroom';
import AtelierStory from './components/AtelierStory';
import LookbookForm from './components/LookbookForm';
import Footer from './components/Footer';
import LookModal from './components/LookModal';
import { COLLECTIONS, LOOKS, Look } from './data/looks';

export default function Home() {
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);
  const [inquiryLook, setInquiryLook] = useState<Look | null>(null);

  const handleInquire = (look: Look | null) => {
    setInquiryLook(look);
    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Main Navigation with 5 routes */}
      <Navbar onOpenInquiry={() => handleInquire(null)} />

      {/* Hero Showcase Section with Real Model & D&D Linen Shirt */}
      <Hero
        looks={LOOKS}
        onSelectLook={(look) => setSelectedLook(look)}
      />

      {/* Curated Collection Grid with Filter Tabs & Showroom Displays */}
      <CollectionGrid
        collections={COLLECTIONS}
        looks={LOOKS}
        onSelectLook={(look) => setSelectedLook(look)}
      />

      {/* Flagship Showroom Destination Spotlight (Chhindwara, MP) */}
      <FlagshipShowroom />

      {/* The Atelier & 100% Cotton Craftsmanship Philosophy */}
      <AtelierStory />

      {/* VIP Digital Catalogue & Styling Inquiry */}
      <LookbookForm
        selectedLook={inquiryLook}
        onCloseInquiry={() => setInquiryLook(null)}
      />

      {/* Luxury Footer with Real Store Address & Timings */}
      <Footer />

      {/* Garment Inspect Modal (Non-booking / purely editorial look inspection) */}
      {selectedLook && (
        <LookModal
          look={selectedLook}
          onClose={() => setSelectedLook(null)}
          onInquire={(look) => handleInquire(look)}
        />
      )}
    </div>
  );
}
