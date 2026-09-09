const SITE_URL = 'https://anandconsultancy.co.in';

const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/vGFTZr1qEY1pxPj77';

const BUSINESS_ADDRESS = {
  streetAddress:
    'NH 107, East of, Chandani Chowk Rd, near MP Collage',
  addressLocality: 'Bhdol Budhma',
  addressRegion: 'Bihar',
  postalCode: '852114',
  addressCountry: 'IN',
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],

  '@id': `${SITE_URL}/#business`,

  name: 'Anand IT Consultancy & GST Services',

  url: SITE_URL,

  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logos/anand-logo.svg`,
  },

  image: `${SITE_URL}/logos/anand-logo.svg`,

  telephone: '+918004879928',

  email: 'contact@anandconsultancy.co.in',

  address: {
    '@type': 'PostalAddress',
    ...BUSINESS_ADDRESS,
  },

  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Bihar',
  },

  hasMap: GOOGLE_MAPS_URL,

  description:
    'Anand IT Consultancy & GST Services provides business technology, website and application solutions, GST and Income Tax support, digital services and government services under one roof.',

  knowsAbout: [
    'Website Design',
    'Business Applications',
    'Digital Solutions',
    'Digital Advertising',
    'IT Support',
    'GST Registration',
    'GST Returns',
    'Income Tax',
    'Compliance Support',
    'CSC Services',
    'Government Services',
    'Digital Assistance',
    'Printing and Documentation',
  ],

  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+918004879928',
    email: 'contact@anandconsultancy.co.in',
    contactType: 'customer service',
    availableLanguage: ['English', 'Hindi'],
  },
};

export default function LocalBusinessSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(businessSchema),
      }}
    />
  );
}