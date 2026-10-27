'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionGrid from './components/CollectionGrid';
import AtelierStory from './components/AtelierStory';
import LookbookForm from './components/LookbookForm';
import Footer from './components/Footer';
import LookModal from './components/LookModal';
import { COLLECTIONS, LOOKS } from './data/looks';

export default function Home() {
  const [selectedLook, setSelectedLook] = useState(null);
  const [inquiryLook, setInquiryLook] = useState(null);

  const handleInquire = (look) => {
    setInquiryLook(look);
    const inquirySection = document.getElementById('inquiry');
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Main Navigation */}
      <Navbar theme="sand" onOpenInquiry={() => handleInquire(null)} />

      {/* Hero Showcase Section */}
      <Hero
        theme="sand"
        looks={LOOKS}
        onSelectLook={(look) => setSelectedLook(look)}
      />

      {/* Curated Collection Grid with Filter */}
      <CollectionGrid
        theme="sand"
        collections={COLLECTIONS}
        looks={LOOKS}
        onSelectLook={(look) => setSelectedLook(look)}
      />

      {/* The Atelier & Craftsmanship Philosophy */}
      <AtelierStory theme="sand" />

      {/* Request Lookbook & Private Salon Inquiry */}
      <LookbookForm
        theme="sand"
        selectedLook={inquiryLook}
        onCloseInquiry={() => setInquiryLook(null)}
      />

      {/* Luxury Footer */}
      <Footer theme="sand" />

      {/* Garment Inspect Modal (Non-booking / purely editorial) */}
      {selectedLook && (
        <LookModal
          look={selectedLook}
          theme="sand"
          onClose={() => setSelectedLook(null)}
          onInquire={(look) => handleInquire(look)}
        />
      )}
    </div>
  );
}