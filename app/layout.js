import './globals.css';

export const metadata = {
  title: 'Deer & Dan Clothing — Coming Soon',
  description: 'Deer & Dan Clothing — Premium fashion for every you. Something extraordinary is coming. Stay tuned and be the first to know when we launch.',
  keywords: 'Deer Dan, Deer & Dan, clothing, fashion, premium, men, women, kids',
  openGraph: {
    title: 'Deer & Dan Clothing — Coming Soon',
    description: 'Premium fashion for every you. Something extraordinary is coming.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050505" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
