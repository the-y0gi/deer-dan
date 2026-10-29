export interface Collection {
  id: string;
  label: string;
  count: number;
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
  image?: string;
}

export interface BrandStat {
  value: string;
  label: string;
}

export const COLLECTIONS: Collection[] = [
  { id: 'all', label: 'All Curated Looks', count: 6 },
  { id: 'signature', label: 'Signature Linen & Crest', count: 2 },
  { id: 'quiet-luxury', label: 'Old Money & Knits', count: 1 },
  { id: 'street-atelier', label: 'Monochrome Streetwear', count: 1 },
  { id: 'contemporary', label: 'Contemporary Casuals', count: 1 },
  { id: 'womenswear', label: 'Womenswear & Denim', count: 1 },
];

export const LOOKS: Look[] = [
  {
    id: 'look-01',
    number: '01',
    title: 'The D&D Monogram Linen Shirt & Pleated Trouser',
    category: 'signature',
    season: 'Autumn / Winter 26 Edition',
    image: '/images/signature-model.jpg',
    detailImages: [
      '/images/signature-pink-shirt.jpg',
      '/images/signature-pink-with-tags.jpg',
      '/images/craft-tags-strip.jpg',
    ],
    fabric: '100% Breathable Fine Indian Combed Cotton & Linen',
    silhouette: 'Relaxed drop shoulder with chest D&D stag crest embroidery, fluid pleated wide trousers',
    hardware: 'Natural pearl luster buttons, reinforced French seams, woven brand neck label',
    description: 'The defining Deer & Dan silhouette. Tailored from 100% fine breathable cotton, featuring the signature embroidered deer antler monogram on the chest and paired with high-waisted relaxed pleated slacks.',
    tags: ['100% Cotton', 'Signature Stag Monogram', 'Made in India', 'Flagship Showcase'],
  },
  {
    id: 'look-02',
    number: '02',
    title: 'Blush Rose Pure Cotton Camp Shirt & White Slacks',
    category: 'signature',
    season: 'Resort & Summer Heritage',
    image: '/images/signature-pink-shirt.jpg',
    detailImages: [
      '/images/signature-pink-with-tags.jpg',
      '/images/craft-tags-strip.jpg',
      '/images/signature-model.jpg',
    ],
    fabric: '100% Pure Indian Cotton Linen Weave',
    silhouette: 'Relaxed camp collar with rolled cuffs, paired with crisp white pleated trousers',
    hardware: 'Custom woven Deer & Dan neck label, handcrafted kraft hangtag, tonal stitch work',
    description: 'Understated elegance in soft blush rose. Tailored for warm-weather poise with breathable natural fiber weave and the hallmark stag antler crest.',
    tags: ['Pure Cotton', 'Blush Rose Hue', 'Craft Tested', 'Flagship Exclusive'],
  },
  {
    id: 'look-03',
    number: '03',
    title: 'Textured Waffle-Knit Polo & Silk Ascot Pairing',
    category: 'quiet-luxury',
    season: 'Old Money Edition',
    image: '/images/rack-quiet-luxury.jpg',
    detailImages: [
      '/images/signature-model.jpg',
      '/images/craft-tags-strip.jpg',
    ],
    fabric: 'Silk-Cotton Fine Gauge Knit & Tailored Linen Blend',
    silhouette: 'Relaxed open knit polo, printed silk neck ascot, tailored pleated trousers',
    hardware: 'Natural mother-of-pearl buttons, internal side tab adjusters',
    description: 'Sophistication rooted in restraint. Textured waffle-knit polo shirts styled with paisley silk ascots and crisp pleated slacks on boutique warm-wood racks.',
    tags: ['Quiet Luxury', 'Silk Ascot Pairing', 'Textured Knit', 'Micro Capsule'],
  },
  {
    id: 'look-04',
    number: '04',
    title: 'Monochromatic Cargo Overshirt & Mineral Denim',
    category: 'street-atelier',
    season: 'Dark Street Atelier',
    image: '/images/rack-street-atelier.jpg',
    detailImages: [
      '/images/brand-crest-black.jpg',
      '/images/store-facade.jpg',
    ],
    fabric: '380 GSM Heavyweight Cotton Twill & Washed Selvedge Denim',
    silhouette: 'Boxy drop-shoulder utility cut with oversized storm patch pockets',
    hardware: 'Industrial matte black tactical zips and reinforced bar-tacks',
    description: 'Dark luxury streetwear engineered with architectural discipline. Features deep mineral washes, layered utility overshirts, and chunky sneaker pairings.',
    tags: ['Heavyweight Twill', 'Mineral Wash', 'Dark Luxury', 'Streetwear'],
  },
  {
    id: 'look-05',
    number: '05',
    title: 'Architectural Warm Arch Casuals & Graphic Tees',
    category: 'contemporary',
    season: 'Contemporary Everyday',
    image: '/images/rack-contemporary-arch.jpg',
    detailImages: [
      '/images/rack-resort-display.jpg',
      '/images/rack-junior-coords.jpg',
    ],
    fabric: '240 GSM Bio-Washed Combed Cotton',
    silhouette: 'Oversized drop-shoulder tees with cargo utility accents',
    hardware: 'High-density typographic prints, contrast bound collars',
    description: 'Curated high-street fashion showcased within warm backlit architectural arches. Designed for seamless comfort and refined everyday elevation.',
    tags: ['240 GSM Cotton', 'Backlit Arch Display', 'Bio-Washed', 'Curated Tones'],
  },
  {
    id: 'look-06',
    number: '06',
    title: 'Resort Eyelet Ruffle Blouse & Indigo Denim Sets',
    category: 'womenswear',
    season: 'Womenswear Resort Capsule',
    image: '/images/rack-womens-arch.jpg',
    detailImages: [
      '/images/brand-tote.jpg',
      '/images/signature-pink-shirt.jpg',
    ],
    fabric: 'Pure Cotton Eyelet Lace & Soft-Washed Lightweight Denim',
    silhouette: 'Tiered ruffle blouses, pleated denim skirts, coordinated sleeveless summer sets',
    hardware: 'Tortoiseshell buttons, soft elasticated cinches, brass hardware',
    description: 'Sun-drenched resort dressing housed in soft lilac ambient lighting. Features intricate eyelet embroidery, scalloped hems, and classic washed denim essentials.',
    tags: ['Resort Wear', 'Denim Co-ords', 'Eyelet Lace', 'Summer Capsule'],
  },
];

export const ATELIER_PILLARS: AtelierPillar[] = [
  {
    number: '01',
    title: '100% Pure Indian Cotton',
    subtitle: 'Conscious Materiality',
    description:
      'Every Deer & Dan garment is woven from 100% natural, long-staple Indian combed cotton. Zero synthetic compromise, maximum breathability and skin-feel comfort.',
    image: '/images/craft-tags-strip.jpg',
  },
  {
    number: '02',
    title: 'The Flagship Showroom',
    subtitle: 'Chhindwara Landmark',
    description:
      'Spanning multiple glass-fronted floors at Imlikheda Chowk, our flagship destination brings world-class retail architecture and personalized styling to Madhya Pradesh.',
    image: '/images/store-facade.jpg',
  },
  {
    number: '03',
    title: 'Bespoke Stag Insignia',
    subtitle: 'Artisanal Embroidery',
    description:
      'The iconic Deer & Dan stag antlers emblem represents quiet confidence, noble heritage, and precision stitch craftsmanship across every shirt, polo, and label.',
    image: '/images/brand-crest-black.jpg',
  },
];

export const BRAND_STATS: BrandStat[] = [
  { value: '100%', label: 'Pure Combed Cotton' },
  { value: '7 Days', label: '10:30 AM – 10:00 PM' },
  { value: '24K+', label: 'Patrons & Visitors' },
  { value: '0', label: 'Mass-Market Synthetics' },
];
