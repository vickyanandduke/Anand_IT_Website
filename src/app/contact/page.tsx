import type { Metadata } from 'next';

import ContactPageClient from './ContactPageClient';

const SITE_URL = 'https://anandconsultancy.co.in';

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${SITE_URL}/contact#webpage`,
  url: `${SITE_URL}/contact`,
  name: 'Contact Anand | Get a Consultation',
  description:
    'Contact Anand IT Consultancy & GST Services for business technology, website and application solutions, GST and Income Tax support, digital services and government services.',
  isPartOf: {
    '@id': `${SITE_URL}/#website`,
  },
  about: {
    '@id': `${SITE_URL}/#business`,
  },
  mainEntity: {
    '@type': 'ContactPoint',
    telephone: '+918004879928',
    email: 'contact@anandconsultancy.co.in',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
    url: `${SITE_URL}/contact`,
  },
};

export const metadata: Metadata = {
  title: 'Contact Anand | Get a Consultation',
  description:
    'Contact Anand IT Consultancy & GST Services for business technology, website and application solutions, GST and Income Tax support, digital services and government services.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Anand | Get a Consultation',
    description:
      'Tell us what you need help with. Get practical support for business technology, GST, tax, digital and government services.',
    url: '/contact',
  },
};

export default function ContactPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema),
        }}
      />

      <ContactPageClient />
    </main>
  );
}