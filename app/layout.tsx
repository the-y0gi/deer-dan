import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fdfaf7",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://deerdan.in"),

  title: {
    default: "Deer & Dan — Luxury Clothing & Fashion Showroom in Chhindwara",
    template: "%s | Deer & Dan Chhindwara",
  },

  description:
    "Deer & Dan is Chhindwara's premier luxury clothing and fashion showroom located at Mansarovar Complex, Chandangaon. Discover 100% pure combed cotton shirts, relaxed pleated trousers, luxury knitwear, and quiet luxury menswear.",

  keywords: [
    "chhindwara clothing",
    "chhindwara fashion",
    "clothing store in chhindwara",
    "clothes shop in chhindwara",
    "best clothing showroom in chhindwara",
    "mens clothing chhindwara",
    "luxury clothing brand chhindwara",
    "mansarovar complex chhindwara",
    "chandangaon chhindwara clothing",
    "pure cotton shirts chhindwara",
    "pleated trousers chhindwara",
    "readymade garments chhindwara",
    "menswear chhindwara",
    "smart casuals chhindwara",
    "Deer & Dan",
    "Deer & Dan Chhindwara",
    "Deer and Dan",
    "deerdan.in",
    "Yogesh Gadhewal",
    "Yogesh Gadhewal developer",
    "Yogesh Gadhewal portfolio",
    "Yogesh Gadhewal projects",
  ],

  applicationName: "Deer & Dan Chhindwara",

  authors: [
    { name: "Deer & Dan", url: "https://deerdan.in" },
    { name: "Yogesh Gadhewal", url: "https://yogeshgadhewal.in" },
  ],
  creator: "Yogesh Gadhewal (Full Stack Developer & Software Engineer — https://yogeshgadhewal.in)",
  publisher: "Deer & Dan Flagship Showroom",

  referrer: "origin-when-cross-origin",

  alternates: {
    canonical: "https://deerdan.in",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png?v=2", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title: "Deer & Dan — Luxury Clothing & Fashion Showroom in Chhindwara",
    description:
      "Chhindwara's premier luxury fashion destination at Mansarovar Complex. Crafted from 100% fine combed cotton with quiet luxury elegance.",
    url: "https://deerdan.in",
    siteName: "Deer & Dan Chhindwara",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://deerdan.in/images/store-facade.jpg",
        width: 1200,
        height: 630,
        alt: "Deer & Dan Luxury Clothing Showroom Chhindwara",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Deer & Dan — Luxury Clothing & Fashion Showroom in Chhindwara",
    description:
      "Chhindwara's premier luxury fashion destination at Mansarovar Complex. 100% pure combed cotton shirts, pleated trousers & designer casuals.",
    images: ["https://deerdan.in/images/store-facade.jpg"],
    creator: "@mydeer.dan",
  },

  category: "Fashion & Luxury Retail",

  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Chhindwara, Chandangaon",
    "geo.position": "22.0494;78.9382",
    ICBM: "22.0494, 78.9382",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon.png?v=2" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Schema.org Knowledge Graph: ClothingStore & LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["ClothingStore", "MensClothingStore", "LocalBusiness"],
                  "@id": "https://deerdan.in/#store",
                  name: "Deer & Dan",
                  legalName: "Deer & Dan Flagship Showroom",
                  alternateName: [
                    "Deer and Dan",
                    "डियर & डैन",
                    "Deer & Dan Chhindwara",
                    "Deer & Dan Clothing",
                  ],
                  description:
                    "Deer & Dan is Chhindwara's premier luxury clothing and fashion showroom located at Mansarovar Complex, Chandangaon. Specializing in 100% fine combed cotton shirts, relaxed pleated trousers, luxury waffle knits, and quiet luxury menswear.",
                  url: "https://deerdan.in",
                  logo: "https://deerdan.in/images/official-deer-logo.jpg",
                  image: [
                    "https://deerdan.in/images/store-facade.jpg",
                    "https://deerdan.in/images/rack-quiet-luxury.jpg",
                    "https://deerdan.in/images/signature-model.jpg",
                  ],
                  telephone: "+91-9340926379",
                  email: "info.deerdan@gmail.com",
                  sameAs: ["https://www.instagram.com/mydeer.dan"],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Mansarovar Complex, Chhindwara Rd, Chandangaon",
                    addressLocality: "Chhindwara",
                    addressRegion: "Madhya Pradesh",
                    postalCode: "480001",
                    addressCountry: "IN",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: 22.0494,
                    longitude: 78.9382,
                  },
                  hasMap:
                    "https://maps.google.com/?q=Chhindwara+mansarovar,+Chandangaon,+Chhindwara,+Madhya+Pradesh+480001",
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ],
                      opens: "10:30",
                      closes: "22:00",
                    },
                  ],
                  priceRange: "₹₹",
                  currenciesAccepted: "INR",
                  paymentAccepted: "Cash, Credit Card, UPI, Debit Card",
                  areaServed: [
                    {
                      "@type": "City",
                      name: "Chhindwara",
                    },
                    {
                      "@type": "AdministrativeArea",
                      name: "Madhya Pradesh",
                    },
                  ],
                  founder: {
                    "@type": "Person",
                    name: "Romi",
                    jobTitle: "Founder & Creative Director",
                  },
                  creator: {
                    "@type": "Person",
                    "@id": "https://yogeshgadhewal.in/#person",
                    name: "Yogesh Gadhewal",
                    jobTitle: "Full Stack Developer & Freelance Software Engineer",
                    url: "https://yogeshgadhewal.in",
                    sameAs: [
                      "https://yogeshgadhewal.in",
                      "https://www.linkedin.com/in/yogesh-gadhewal",
                    ],
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://deerdan.in/#website",
                  url: "https://deerdan.in",
                  name: "Deer & Dan Clothing",
                  description:
                    "Deer & Dan is Chhindwara's premier luxury clothing and fashion showroom located at Mansarovar Complex, Chandangaon.",
                  publisher: {
                    "@id": "https://deerdan.in/#store",
                  },
                  creator: {
                    "@id": "https://yogeshgadhewal.in/#person",
                  },
                  author: {
                    "@id": "https://yogeshgadhewal.in/#person",
                  },
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://deerdan.in/#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Which is the best luxury clothing showroom in Chhindwara?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Deer & Dan is Chhindwara’s premier luxury clothing and fashion showroom located at Mansarovar Complex on Chhindwara Road (Chandangaon). They craft 100% pure combed cotton shirts, relaxed pleated trousers, luxury waffle knits, and quiet luxury menswear with tailored precision and personalized styling.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Where can I buy 100% pure combed cotton shirts in Chhindwara?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Deer & Dan offers an exclusive collection of 100% fine combed cotton shirts, crafted from breathable long-staple Indian cotton with zero synthetic blend compromise. Visit their showroom at Mansarovar Complex, Chhindwara Road.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What are the store timings and location of Deer & Dan in Chhindwara?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Deer & Dan is located at Mansarovar Complex, Chhindwara Road, Chandangaon, Chhindwara, Madhya Pradesh 480001 (Plus Code: 3W4Q+X7F). The showroom is open Monday through Sunday from 10:30 AM to 10:00 PM.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Does Deer & Dan offer personal styling and WhatsApp consultation?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, Deer & Dan provides personal styling assistance directed under founder Romi. You can also connect directly with their styling concierge on WhatsApp at +91 93409 26379 to check piece availability.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "What clothing styles are available at Deer & Dan Chhindwara?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Deer & Dan features Quiet Luxury & Heritage Knits, Pure Cotton Casuals, Dark Street Atelier utility wear, Tailored Linen resort sets, and Signature Washed Denim with custom stag hardware.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
