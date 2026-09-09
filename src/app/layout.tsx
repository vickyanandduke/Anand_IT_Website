import type { Metadata } from 'next';
import { Lato, Poppins } from 'next/font/google';

import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const lato = Lato({
  variable: '--font-lato',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

const SITE_URL = 'https://anandconsultancy.co.in';

const OG_IMAGE = {
  url: '/images/anand-og-image.png',
  width: 1200,
  height: 630,
  alt: 'Anand IT Consultancy & GST Services - Business, Digital & Government Services',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      'Anand IT Consultancy & GST Services | Business, Digital & Government Services',
    template: '%s | Anand IT Consultancy & GST Services',
  },

  description:
    'Anand IT Consultancy & GST Services provides practical business technology, website and application solutions, GST and Income Tax support, digital services and government services under one roof.',

  applicationName: 'Anand IT Consultancy & GST Services',

  keywords: [
    'Anand IT Consultancy',
    'Anand GST Services',
    'IT consultancy',
    'GST services',
    'Income Tax services',
    'business website development',
    'business applications',
    'digital solutions',
    'government services',
    'CSC services',
    'Bihar',
  ],

  authors: [
    {
      name: 'Anand IT Consultancy & GST Services',
      url: SITE_URL,
    },
  ],

  creator: 'Anand IT Consultancy & GST Services',
  publisher: 'Anand IT Consultancy & GST Services',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Anand IT Consultancy & GST Services',
    title:
      'Anand IT Consultancy & GST Services | Business, Digital & Government Services',
    description:
      'Practical business technology, GST and Income Tax, digital and government services - all under one roof.',
    images: [OG_IMAGE],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Anand IT Consultancy & GST Services | Business, Digital & Government Services',
    description:
      'Practical business technology, GST and Income Tax, digital and government services - all under one roof.',
    images: ['/images/anand-og-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${lato.variable} font-lato antialiased`}
      >
        <LocalBusinessSchema />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}