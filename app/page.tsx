import type { Metadata } from 'next';
import HomeClient from './components/HomeClient';

export const metadata: Metadata = {
  title: 'Deer & Dan | Luxury Fashion & Clothing Showroom in Chhindwara',
  description:
    'Experience Deer & Dan Chhindwara — the premier fashion destination at Mansarovar Complex, Chandangaon. Shop 100% pure combed cotton shirts, relaxed pleated trousers & luxury menswear.',
  keywords: [
    'chhindwara clothing',
    'chhindwara fashion',
    'clothing store in chhindwara',
    'best clothing store in chhindwara',
    'mansarovar complex chhindwara',
    'pure cotton shirts chhindwara',
    'pleated trousers chhindwara',
    'mens clothing chhindwara',
    'luxury menswear madhya pradesh',
    'Deer and Dan Chhindwara',
  ],
  alternates: {
    canonical: 'https://deerdan.in',
  },
  openGraph: {
    title: 'Deer & Dan | Luxury Fashion & Clothing Showroom in Chhindwara',
    description:
      'Chhindwara’s premier luxury fashion destination at Mansarovar Complex. Discover 100% pure combed cotton shirts and quiet luxury menswear.',
    url: 'https://deerdan.in',
    images: [
      {
        url: 'https://deerdan.in/images/store-facade.jpg',
        width: 1200,
        height: 630,
        alt: 'Deer & Dan Flagship Showroom Chhindwara',
      },
    ],
  },
};

export default function Home() {
  return <HomeClient />;
}
