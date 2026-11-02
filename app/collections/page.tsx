import type { Metadata } from 'next';
import CollectionsClient from './CollectionsClient';

export const metadata: Metadata = {
  title: 'Designer Menswear & Smart Casuals | Deer & Dan Chhindwara',
  description:
    'Browse the Deer & Dan 2026 curated lookbook. Shop 100% fine combed cotton shirts, relaxed pleated trousers, luxury waffle knits, and selvedge denim in Chhindwara.',
  keywords: [
    'chhindwara clothing',
    'chhindwara fashion collection',
    'pure cotton shirts chhindwara',
    'pleated trousers chhindwara',
    'menswear collection chhindwara',
    'resort wear chhindwara',
    'deer and dan lookbook',
    'streetwear chhindwara',
  ],
  alternates: {
    canonical: 'https://deerdan.in/collections',
  },
  openGraph: {
    title: 'Designer Menswear & Smart Casuals | Deer & Dan Chhindwara',
    description:
      'Curated lookbook of pure cotton shirts, relaxed trousers, and quiet luxury menswear from Deer & Dan Chhindwara.',
    url: 'https://deerdan.in/collections',
    images: [
      {
        url: 'https://deerdan.in/images/signature-model.jpg',
        width: 1200,
        height: 630,
        alt: 'Deer & Dan Curated Menswear Lookbook',
      },
    ],
  },
};

export default function CollectionsPage() {
  return <CollectionsClient />;
}
