import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: { default: 'ShillongWander — Your Guide to Meghalaya', template: '%s | ShillongWander' },
  description: 'Discover Shillong and Meghalaya: places to visit, hotels, restaurants, travel tips, and insider guides. Independent. Honest. No sponsored content.',
  keywords: ['Shillong', 'Meghalaya', 'travel guide', 'places to visit', 'Cherrapunji', 'Dawki', 'Living Root Bridges'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shillongwander.com',
    siteName: 'ShillongWander',
    images: [{ url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80', width: 1200, height: 630, alt: 'Meghalaya landscape' }],
  },
  twitter: { card: 'summary_large_image', site: '@ShillongWander' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}