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
  tagline: 'Clothing & Haute Couture Showroom',
  founder: 'Romi',
  founderRole: 'Founder & Creative Director',
  phone: '9999999999',
  phoneFormatted: '+91 99999 99999',
  whatsappUrl: 'https://wa.me/919999999999?text=Hello%20Deer%20%26%20Dan%2C%20I%20would%20like%20to%20inquire%20about%20your%20latest%20collection.',
  email: 'concierge@deeranddan.com',
  instagram: '@deeranddan_official',
  website: 'www.deeranddan.com',
  address: {
    landmark: 'Imlikheda Square (इमलीखेड़ा चौक)',
    road: 'MP SH 26',
    area: 'Thuniya Bhand',
    city: 'Chhindwara',
    state: 'Madhya Pradesh',
    pincode: '480001',
    plusCode: '2W2H+5V Thuniya Bhand, Madhya Pradesh',
    full: 'Imlikheda Chowk, MP SH 26, Thuniya Bhand, Chhindwara, Madhya Pradesh 480001',
  },
  timings: {
    days: 'Monday – Sunday (Open All 7 Days)',
    hours: '10:30 AM – 10:00 PM',
    statusNote: 'Open Today for In-Store Walk-ins & Private Styling',
  },
  mapUrl: 'https://maps.google.com/?q=Imlikheda+Chowk,+Chhindwara,+Madhya+Pradesh+480001',
  mapEmbedUrl: 'https://www.google.com/maps?q=Imlikheda+Chowk,+Chhindwara,+Madhya+Pradesh+480001&output=embed',
};
