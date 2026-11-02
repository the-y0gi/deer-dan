export interface StoreInfo {
  name: string;
  tagline: string;
  founder: string;
  founderRole: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  website: string;
  address: {
    landmark: string;
    road: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    plusCode: string;
    full: string;
  };
  timings: {
    days: string;
    hours: string;
    statusNote: string;
  };
  mapUrl: string;
  mapEmbedUrl: string;
}

export const BRAND_DATA: StoreInfo = {
  name: 'Deer & Dan',
  tagline: 'Premium Clothing & Smart Casuals Showroom',
  founder: 'Romi',
  founderRole: 'Founder & Creative Director',
  phone: '9340926379',
  phoneFormatted: '+91 93409 26379',
  whatsappUrl: 'https://wa.me/919340926379?text=Hello%20Deer%20%26%20Dan%2C%20I%20would%20like%20to%20inquire%20about%20your%20latest%20collection.',
  email: 'info.deerdan@gmail.com',
  instagram: '@mydeer.dan',
  instagramUrl: 'https://www.instagram.com/mydeer.dan',
  website: 'deerdan.in',
  address: {
    landmark: 'Mansarovar Complex (मानसरोवर कॉम्प्लेक्स)',
    road: 'Chhindwara Road',
    area: 'Chandangaon',
    city: 'Chhindwara',
    state: 'Madhya Pradesh',
    pincode: '480001',
    plusCode: '3W4Q+X7F Chandangaon, Chhindwara, Madhya Pradesh',
    full: 'Mansarovar Complex, Chhindwara Rd, Chandangaon, Chhindwara, Madhya Pradesh 480001',
  },
  timings: {
    days: 'Monday – Sunday (Open All 7 Days)',
    hours: '10:30 AM – 10:00 PM',
    statusNote: 'Open Today for In-Store Walk-ins & Private Styling',
  },
  mapUrl: 'https://maps.google.com/?q=Chhindwara+mansarovar,+Chandangaon,+Chhindwara,+Madhya+Pradesh+480001',
  mapEmbedUrl: 'https://www.google.com/maps?q=Chhindwara+mansarovar,+Chandangaon,+Chhindwara,+Madhya+Pradesh+480001&output=embed',
};
