export interface Collection {
  id: string;
  label: string;
}

export interface Look {
  id: string;
  number: string;
  title: string;
  category: string;
  season: string;
  image: string;
  detailImages?: string[];
  fabric: string;
  silhouette: string;
  hardware: string;
  description: string;
  tags: string[];
}

export interface AtelierPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface BrandStat {
  value: string;
  label: string;
}

export const COLLECTIONS: Collection[] = [
  { id: 'all', label: 'All Collections' },
  { id: 'outerwear', label: 'Outerwear & Coats' },
  { id: 'tailoring', label: 'Sculptural Tailoring' },
  { id: 'knitwear', label: 'Artisanal Knitwear' },
  { id: 'capsule', label: 'Exclusive Capsule' },
];

export const LOOKS: Look[] = [
  {
    id: 'look-01',
    number: '01',
    title: 'The Sculpted Wool Trench',
    category: 'outerwear',
    season: 'Autumn / Winter 26',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
    ],
    fabric: '100% Virgin Italian Melton Wool (520 GSM)',
    silhouette: 'Oversized, structured drop-shoulder with exaggerated storm flap',
    hardware: 'Hand-carved horn buttons, brushed gunmetal cinch buckle',
    description: 'An architectural reinterpretation of the classic double-breasted trench. Tailored from heavyweight Italian melton wool with sharp lapels and a fluid drape designed to move effortlessly in winter wind.',
    tags: ['Water Repellent', 'Thermal Bonded', 'Limited Atelier Run of 80'],
  },
  {
    id: 'look-02',
    number: '02',
    title: 'Cashmere Funnel Neck & Fluid Pant',
    category: 'knitwear',
    season: 'Winter Capsule',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=85',
    ],
    fabric: 'Grade-A Inner Mongolian Cashmere & Silk Weave',
    silhouette: 'Cocoon silhouette with high ribbed funnel neck and wide pleated drape',
    hardware: 'Raw selvedge finished hems, seamless gauge knitting',
    description: 'Spun from ultra-fine Grade-A cashmere fibers, delivering weightless warmth with tactile sensory luxury. Paired with fluid wide-leg virgin wool trousers for relaxed elegance.',
    tags: ['Ultra-fine 7-Gauge', 'Zero Chemical Bleach', 'Ethically Harvested'],
  },
  {
    id: 'look-03',
    number: '03',
    title: 'Monolithic Peak Lapel Tuxedo',
    category: 'tailoring',
    season: 'Black Tie Atelier',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=85',
    ],
    fabric: 'Super 160s English Worsted Wool with Silk Satin Facing',
    silhouette: 'Cinched waist, strong pagoda shoulder, single button stance',
    hardware: 'Hand-covered silk grosgrain buttons, cupro Bemberg lining',
    description: 'Precision-tailored black-tie architecture. Features an assertive broad peak lapel lined in pure mulberry silk satin and handcrafted horsehair canvas construction.',
    tags: ['Full Canvas', 'Hand-stitched Pick-lapels', 'Bespoke Order Only'],
  },
  {
    id: 'look-04',
    number: '04',
    title: 'Asymmetric Drape Evening Column',
    category: 'capsule',
    season: 'Autumn / Winter 26',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
    ],
    fabric: 'Heavy Silk Crepe de Chine with Bias Cut Underlay',
    silhouette: 'Floor-length minimalist column with high slit and draped neckline',
    hardware: 'Concealed Swiss riri zipper, hand-rolled edges',
    description: 'An ode to sculptural restraint. Cut on the bias to hug the natural contours of the body while flowing dynamically with movement.',
    tags: ['Pure Mulberry Silk', 'Bias Cut', 'Museum Exhibition Piece'],
  },
  {
    id: 'look-05',
    number: '05',
    title: 'Brushed Alpaca Cocoon Coat',
    category: 'outerwear',
    season: 'Winter Capsule',
    image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85',
    ],
    fabric: '70% Peruvian Suri Alpaca, 30% Fine Merino',
    silhouette: 'Egg-shape cocoon, generous raglan sleeve, deep side welt pockets',
    hardware: 'Concealed magnetic horn clasps',
    description: 'Spun from the rarest Peruvian Suri alpaca fiber with a brushed cloud-soft texture that catches light with a subtle silvery luster.',
    tags: ['Sustainable Shear', 'Thermal Rated to -15°C', 'Limited 50 Pieces'],
  },
  {
    id: 'look-06',
    number: '06',
    title: 'Double-Breasted Raw Silk Blazer Set',
    category: 'tailoring',
    season: 'Autumn / Winter 26',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85',
    detailImages: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1000&q=85',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85',
    ],
    fabric: 'Hand-loomed Slub Silk & Linen Blend',
    silhouette: 'Relaxed masculine tailoring adapted for fluid gender-neutral styling',
    hardware: 'Natural mother-of-pearl buttons, horn collar hook',
    description: 'Textured artisanal raw silk interwoven with Belgian flax linen. Perfect balance between relaxed lounge tailoring and crisp ceremonial presence.',
    tags: ['Handloom Certified', 'Breathable Weave', 'Atelier Essential'],
  },
];

export const ATELIER_PILLARS: AtelierPillar[] = [
  {
    number: '01',
    title: 'Architectural Form',
    subtitle: 'Sculpted Silhouettes',
    description:
      'We treat fashion as wearable architecture. Every garment is mathematically draped on live mannequins to create structural tension, effortless balance, and timeless poise.',
  },
  {
    number: '02',
    title: 'Rare Materiality',
    subtitle: 'Noble Fiber Sourcing',
    description:
      'From 520 GSM Italian Melton wool to rare Grade-A Mongolian cashmere and hand-loomed mulberry silk, our textiles are chosen for exceptional tactile longevity.',
  },
  {
    number: '03',
    title: 'Zero Waste Atelier',
    subtitle: 'Conscious Craftsmanship',
    description:
      'Deer & Dan produces exclusively in micro-capsules. Zero overproduction, zero mass landfills. Every look is an artisanal work of art crafted to be cherished for decades.',
  },
];

export const BRAND_STATS: BrandStat[] = [
  { value: '100%', label: 'Noble Natural Fibers' },
  { value: '80', label: 'Pieces per Capsule' },
  { value: '45+', label: 'Hand Hours per Coat' },
  { value: '0%', label: 'Mass-Market Overstock' },
];
