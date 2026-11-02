import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Visit Deer & Dan Chhindwara | Store Timings, Directions & Contact',
  description:
    'Plan your visit to Deer & Dan flagship showroom at Mansarovar Complex, Chhindwara Road (Chandangaon). Open all 7 days 10:30 AM – 10:00 PM. Call or WhatsApp +91 93409 26379 for personal styling & inquiries.',
  keywords: [
    'deer and dan contact',
    'chhindwara clothing store address',
    'mansarovar complex chhindwara location',
    'deer and dan phone number',
    'chhindwara fashion store directions',
    'clothing store chandangaon',
  ],
  alternates: {
    canonical: 'https://deerdan.in/contact',
  },
  openGraph: {
    title: 'Visit Deer & Dan Chhindwara | Store Timings, Directions & Contact',
    description:
      'Deer & Dan flagship showroom at Mansarovar Complex, Chhindwara Road. Open daily 10:30 AM – 10:00 PM. WhatsApp concierge at +91 93409 26379.',
    url: 'https://deerdan.in/contact',
    images: [
      {
        url: 'https://deerdan.in/images/store-facade.jpg',
        width: 1200,
        height: 630,
        alt: 'Deer & Dan Flagship Showroom Contact & Location',
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
