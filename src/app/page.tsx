import type { Metadata } from 'next';

import Hero from '@/components/home/Hero';
import ServiceCategories from '@/components/home/ServiceCategories';
import WhyAnand from '@/components/home/WhyAnand';
import DigitalSolutions from '@/components/home/DigitalSolutions';
import HowWeWork from '@/components/home/HowWeWork';
import LocalPresence from '@/components/home/LocalPresence';
import Reviews from '@/components/home/Reviews';
import FinalCTA from '@/components/home/FinalCTA';

const OG_IMAGE = {
  url: '/images/anand-og-image.png',
  width: 1200,
  height: 630,
  alt: 'Anand IT Consultancy & GST Services - Business, Digital & Government Services',
};

export const metadata: Metadata = {
  title:
    'Anand IT Consultancy & GST Services | Business, Digital & Government Services',

  description:
    'Anand IT Consultancy & GST Services provides business technology, website and application solutions, GST and Income Tax support, digital services and government services under one roof.',

  alternates: {
    canonical: '/',
  },

  openGraph: {
    title:
      'Anand IT Consultancy & GST Services | Business, Digital & Government Services',

    description:
      'Business technology, GST and Income Tax support, digital solutions and government services - all under one roof.',

    url: '/',

    images: [OG_IMAGE],
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <ServiceCategories />
      <WhyAnand />
      <DigitalSolutions />
      <HowWeWork />
      <LocalPresence />
      <Reviews />
      <FinalCTA />
    </main>
  );
}