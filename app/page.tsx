'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
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
      {/* Main Navigation */}
      <Navbar onOpenInquiry={() => handleInquire(null)} />

      {/* Hero Showcase Section */}
      <Hero
        looks={LOOKS}
        onSelectLook={(look) => setSelectedLook(look)}
      />

      {/* Curated Collection Grid with Filter */}
      <CollectionGrid
        collections={COLLECTIONS}
        looks={LOOKS}
        onSelectLook={(look) => setSelectedLook(look)}
      />

      {/* The Atelier & Craftsmanship Philosophy */}
      <AtelierStory />

      {/* Request Lookbook & Private Salon Inquiry */}
      <LookbookForm
        selectedLook={inquiryLook}
        onCloseInquiry={() => setInquiryLook(null)}
      />

      {/* Luxury Footer */}
      <Footer />

      {/* Garment Inspect Modal (Non-booking / purely editorial) */}
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
