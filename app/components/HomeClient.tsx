'use client';

import { useState } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import CollectionGrid from './CollectionGrid';
import FlagshipShowroom from './FlagshipShowroom';
import AtelierStory from './AtelierStory';
import ShowroomFaq from './ShowroomFaq';
import Footer from './Footer';
import LookModal from './LookModal';
import { COLLECTIONS, LOOKS, Look } from '../data/looks';

export default function HomeClient() {
  const [selectedLook, setSelectedLook] = useState<Look | null>(null);

  return (
    <div className="min-h-screen font-sans">
      {/* Main Navigation */}
      <Navbar />

      {/* Hero Showcase Section with Model & 100% Cotton Linen Shirt */}
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

      {/* SEO & AI Overview Direct-Answer FAQ Section */}
      <ShowroomFaq />

      {/* Luxury Footer with Real Store Address & Timings */}
      <Footer />

      {/* Garment Inspect Modal */}
      {selectedLook && (
        <LookModal
          look={selectedLook}
          onClose={() => setSelectedLook(null)}
        />
      )}
    </div>
  );
}

