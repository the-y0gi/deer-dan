import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://deerdan.in"),

  title: {
    default: "Deer & Dan Clothing | Premium Fashion Brand India",
    template: "%s | Deer & Dan Clothing",
  },

  description:
    "Deer & Dan Clothing is a premium fashion brand offering stylish and modern clothing for men, women, and kids. Discover timeless fashion crafted for every you.",

  keywords: [
    "Deer & Dan",
    "Deer & Dan Clothing",
    "Premium Fashion Brand India",
    "Luxury Clothing Brand India",
    "Men's Clothing",
    "Women's Clothing",
    "Kids Clothing",
    "Streetwear India",
    "Online Clothing Store India",
    "Fashion Brand India",
    "deerdan.in",
  ],

  applicationName: "Deer & Dan Clothing",

  authors: [{ name: "Deer & Dan Clothing" }],
  creator: "Deer & Dan Clothing",
  publisher: "Deer & Dan Clothing",

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
    icon: "/d_logo.svg",
    shortcut: "/d_logo.svg",
    apple: "/d_logo.svg",
  },

  openGraph: {
    title: "Deer & Dan Clothing | Premium Fashion Brand India",
    description:
      "Premium fashion for every you. Discover timeless and modern clothing for men, women, and kids.",
    url: "https://deerdan.in",
    siteName: "Deer & Dan Clothing",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://deerdan.in/deer_logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Deer & Dan Clothing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Deer & Dan Clothing | Premium Fashion Brand India",
    description:
      "Premium fashion for every you. Discover timeless and modern clothing for men, women, and kids.",
    images: ["https://deerdan.in/deer_logo.jpeg"],
    creator: "@deerdan",
  },

  category: "Fashion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
