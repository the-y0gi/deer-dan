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
  { id: 'all', label: 'All Curated Looks', count: 11 },
  { id: 'signature', label: 'Signature Shirts & Sets', count: 3 },
  { id: 'denim', label: 'Originals Denim & Street', count: 2 },
  { id: 'quiet-luxury', label: 'Old Money Knits & Polos', count: 1 },
  { id: 'street-atelier', label: 'Cargo & Streetwear', count: 1 },
  { id: 'contemporary', label: 'Casual Tees & Footwear', count: 1 },
  { id: 'womenswear', label: 'Womenswear & Resort', count: 1 },
  { id: 'youth', label: 'Youth & Smart Co-ords', count: 1 },
  { id: 'resort', label: 'Resort Prints & Slides', count: 1 },
];

export const LOOKS: Look[] = [
  {
    id: 'look-01',
    number: '01',
    title: 'White D&D Crest Shirt & Relaxed Pleated Trouser',
    category: 'signature',
    season: 'Smart Casual Collection',
    image: '/images/signature-model.jpg',
    detailImages: [
      '/images/signature-pink-shirt.jpg',
      '/images/model-mocha-brown-shirt.jpg',
      '/images/craft-tags-strip.jpg',
    ],
    fabric: '100% Pure Breathable Combed Cotton & Linen Blend',
    silhouette: 'Relaxed button-down shirt with rolled cuffs paired with wide-leg pleated trousers',
    hardware: 'Embroidered D&D stag crest on chest, woven neck label, back button welt pocket',
    description: 'The defining Deer & Dan smart-casual outfit. A crisp white breathable shirt with the hallmark embroidered D&D stag crest, paired with versatile beige pleated trousers and clean white sneakers. Perfect for daytime meetings, casual outings, and evening gatherings.',
    tags: ['100% Pure Cotton', 'D&D Stag Embroidery', 'Pleated Relaxed Fit', 'Smart Casual'],
  },
  {
    id: 'look-02',
    number: '02',
    title: 'Washed Black Denim Shirt & Crisp White Wide Jeans',
    category: 'denim',
    season: 'Monochrome Streetwear',
    image: '/images/model-washed-black-shirt.jpg',
    detailImages: [
      '/images/denim-jeans-leather-patch.jpg',
      '/images/packaging-luxury-shopping-bag.jpg',
      '/images/official-deer-logo.jpg',
    ],
    fabric: 'Premium Stone-Washed Black Cotton Denim & Heavy White Twill',
    silhouette: 'Relaxed-fit denim overshirt with rolled sleeves and wide-leg white denim jeans',
    hardware: 'White D&D stag embroidery on chest pocket and below front trouser pocket',
    description: 'High-contrast monochromatic street style. Features a washed mineral black denim button-down shirt with signature stag pocket embroidery, paired with relaxed wide-cut white denim jeans and clean white sneakers.',
    tags: ['Washed Black Denim', 'White Wide Jeans', 'Dual Stag Embroidery', 'Street Casual'],
  },
  {
    id: 'look-03',
    number: '03',
    title: 'Mocha Earth Cotton Shirt & Beige Pleated Slacks',
    category: 'signature',
    season: 'Earth Tones Capsule',
    image: '/images/model-mocha-brown-shirt.jpg',
    detailImages: [
      '/images/craft-tags-strip.jpg',
      '/images/signature-model.jpg',
      '/images/official-deer-logo.jpg',
    ],
    fabric: '100% Breathable Combed Indian Cotton in Earth Mocha',
    silhouette: 'Clean camp collar button-up shirt with matching relaxed beige pleated trousers',
    hardware: 'Custom woven Deer & Dan neck label, 100% cotton wash tag, white D&D stag embroidery',
    description: 'Rich earth tones tailored for modern comfort. Pure breathable cotton shirt in warm mocha brown with white embroidered D&D chest monogram, styled with relaxed pleated trousers and casual white sneakers.',
    tags: ['100% Cotton', 'Mocha Brown Hue', 'D&D Stag Monogram', 'In-Store Essential'],
  },
  {
    id: 'look-04',
    number: '04',
    title: 'Pastel Blush Cotton Camp Shirt & White Slacks',
    category: 'signature',
    season: 'Resort & Summer Heritage',
    image: '/images/signature-pink-shirt.jpg',
    detailImages: [
      '/images/signature-pink-with-tags.jpg',
      '/images/craft-tags-strip.jpg',
      '/images/packaging-single-bag.jpg',
    ],
    fabric: '100% Pure Lightweight Indian Cotton Linen Weave',
    silhouette: 'Relaxed camp collar with rolled sleeves, paired with crisp white pleated slacks',
    hardware: 'Custom woven Deer & Dan neck label, handcrafted kraft hangtag, tonal stitch work',
    description: 'Fresh warm-weather elegance in soft pastel blush rose. Breathable open-weave cotton shirt adorned with the hallmark stag antler crest embroidery, paired with crisp white pleated trousers.',
    tags: ['100% Pure Cotton', 'Pastel Blush Rose', 'Camp Collar', 'Summer Linen'],
  },
  {
    id: 'look-05',
    number: '05',
    title: 'Deer & Dan Originals Straight-Leg Denim Jeans',
    category: 'denim',
    season: 'Denim Heritage Collection',
    image: '/images/denim-jeans-leather-patch.jpg',
    detailImages: [
      '/images/tag-black-matte-specs.jpg',
      '/images/packaging-luxury-shopping-bag.jpg',
    ],
    fabric: '13.5 oz Pure Ring-Spun Cotton Denim with Comfort Stretch',
    silhouette: 'Mid-rise tailored straight leg with signature wave pocket stitching',
    hardware: 'Debossed genuine leather back patch with D&D stag crest, branded hangtag & waist label',
    description: 'The Deer & Dan Originals denim collection. Features an authentic debossed leather waist patch with the stag crest, signature geometric thread embroidery on the back pocket, and comfortable all-day stretch.',
    tags: ['Originals Leather Patch', '13.5 oz Denim', 'Signature Wave Stitch', 'Size 32'],
  },
  {
    id: 'look-06',
    number: '06',
    title: 'Textured Waffle-Knit Polos & Silk Ascot Styling',
    category: 'quiet-luxury',
    season: 'Old Money Boutique Edition',
    image: '/images/rack-quiet-luxury.jpg',
    detailImages: [
      '/images/signature-model.jpg',
      '/images/craft-tags-strip.jpg',
    ],
    fabric: 'Textured Cotton Waffle Knit & Tailored Pleated Trousers',
    silhouette: 'Open Johnny-collar knit polo styled with printed paisley silk ascot scarf',
    hardware: 'Boutique wood hangers, natural pearl buttons, side cinch tabs',
    description: 'Boutique quiet luxury styling from our first-floor showroom rack. Textured waffle-knit polo shirts paired with silk neck ascots and pleated trousers for an elevated, refined gentleman aesthetic.',
    tags: ['Quiet Luxury', 'Waffle Knit Polo', 'Silk Ascot Scarf', 'Showroom Rack'],
  },
  {
    id: 'look-07',
    number: '07',
    title: 'Monochrome Cargo Utility Overshirt & Dark Denim',
    category: 'street-atelier',
    season: 'Streetwear & Cargo Section',
    image: '/images/rack-street-atelier.jpg',
    detailImages: [
      '/images/official-deer-logo.jpg',
      '/images/store-facade.jpg',
    ],
    fabric: '380 GSM Heavyweight Cotton Twill & Washed Black Denim',
    silhouette: 'Boxy drop-shoulder utility cut with oversized cargo front pockets',
    hardware: 'Industrial black tactical zips, branded backpacks, chunky street sneakers',
    description: 'Dark utility streetwear showcased in our dedicated streetwear zone. Features black cargo overshirts with tactical chest pockets, washed grey graphic tees, selvedge denim, and chunky street footwear.',
    tags: ['Cargo Overshirt', 'Tactical Utility', 'Washed Black Denim', 'Streetwear'],
  },
  {
    id: 'look-08',
    number: '08',
    title: 'Graphic Tees & Backlit Arch Casuals Section',
    category: 'contemporary',
    season: 'Everyday High-Street',
    image: '/images/rack-contemporary-arch.jpg',
    detailImages: [
      '/images/rack-resort-display.jpg',
      '/images/rack-junior-coords.jpg',
    ],
    fabric: '240 GSM Bio-Washed Combed Cotton',
    silhouette: 'Boxy drop-shoulder tees with cargo utility accents and footwear display',
    hardware: 'High-density graphic typography, ribbed collars, lifestyle sneakers',
    description: 'Curated everyday high-street fashion housed within our warm glowing backlit arch. Features vibrant yellow, crisp white, and black graphic tees alongside coordinating footwear and accessories.',
    tags: ['240 GSM Cotton', 'Backlit Arch Display', 'Everyday Casuals', 'Sneakers Display'],
  },
  {
    id: 'look-09',
    number: '09',
    title: 'Womenswear Ruffle Tops & Denim Skirt Sets',
    category: 'womenswear',
    season: 'Women’s Resort Collection',
    image: '/images/rack-womens-arch.jpg',
    detailImages: [
      '/images/brand-tote.jpg',
      '/images/signature-pink-shirt.jpg',
    ],
    fabric: 'Pure Cotton Eyelet Lace & Soft Washed Denim',
    silhouette: 'Tiered ruffle blouses, pleated denim mini skirts, coordinated sleeveless summer sets',
    hardware: 'Tortoiseshell buttons, floral embroidery patches, comfortable elastic cinches',
    description: 'Our dedicated women’s collection housed in soft lilac ambient lighting. Features delicate eyelet lace tops, pleated denim skirts, ruffled sleeveless sets, and breezy summer pastels.',
    tags: ['Womenswear', 'Eyelet Lace Tops', 'Denim Skirt Sets', 'Lilac Arch'],
  },
  {
    id: 'look-10',
    number: '10',
    title: 'Junior & Youth Earth Co-ords with Cargo Shorts',
    category: 'youth',
    season: 'Junior Streetwear Gallery',
    image: '/images/rack-junior-coords.jpg',
    detailImages: [
      '/images/rack-contemporary-arch.jpg',
      '/images/official-deer-logo.jpg',
    ],
    fabric: 'Organic Breathable Cotton Canvas & Stretch Twill',
    silhouette: 'Coordinated camp-collar short sleeve shirts, structured cargo bermudas, crossbody bags',
    hardware: 'Reinforced snap buttons, durable webbed straps, branded woven tags',
    description: 'Modern youth streetwear housed within our glowing emerald arch gallery. Coordinated sets in earthy tan, beige, cream, and olive tones paired with stylish cargo shorts and crossbody accessories.',
    tags: ['Youth Fashion', 'Earthy Co-ords', 'Cargo Shorts', 'Junior Streetwear'],
  },
  {
    id: 'look-11',
    number: '11',
    title: 'Resort Holiday Printed Shirts & Linen Racks',
    category: 'resort',
    season: 'Holiday & Resort Wear',
    image: '/images/rack-resort-display.jpg',
    detailImages: [
      '/images/signature-pink-shirt.jpg',
      '/images/craft-tags-strip.jpg',
    ],
    fabric: 'High-Twist Breathable Cotton & Textured Waffle Weave',
    silhouette: 'Statement printed camp shirts, waffle texture co-ords, casual slides & caps',
    hardware: 'Lion print graphic motif, coconut shell buttons, revere collar',
    description: 'Holiday luxury and relaxed coastal vibes. Bold printed camp-collar shirts including statement lion motifs, textured waffle-knit sets, caps, and neutral casual slides on boutique display racks.',
    tags: ['Printed Camp Shirts', 'Resort Co-ords', 'Waffle Texture', 'Footwear & Caps'],
  },
];

export const ATELIER_PILLARS: AtelierPillar[] = [
  {
    number: '01',
    title: '100% Pure Indian Cotton',
    subtitle: 'Natural Fiber Quality',
    description:
      'Every Deer & Dan shirt, tee, and trouser is crafted from 100% natural, long-staple Indian combed cotton. Maximum breathability, wash longevity, and all-day skin comfort.',
    image: '/images/craft-tags-strip.jpg',
  },
  {
    number: '02',
    title: 'The Flagship Showroom',
    subtitle: 'Chhindwara Landmark',
    description:
      'Spanning multiple glass-fronted floors at Imlikheda Chowk, our grand destination brings curated visual arches, trial lounges, and personal styling to Madhya Pradesh.',
    image: '/images/store-facade.jpg',
  },
  {
    number: '03',
    title: 'Signature Stag Monogram',
    subtitle: 'Hallmark Embroidery',
    description:
      'The iconic Deer & Dan stag antlers emblem represents quiet confidence and precision stitch craftsmanship across every shirt chest, denim leather patch, and label.',
    image: '/images/official-deer-logo.jpg',
  },
];

export const BRAND_STATS: BrandStat[] = [
  { value: '100%', label: 'Pure Combed Cotton' },
  { value: '7 Days', label: '10:30 AM – 10:00 PM' },
  { value: '24K+', label: 'Patrons & Visitors' },
  { value: '0', label: 'Synthetic Compromise' },
];
