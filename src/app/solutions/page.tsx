import type { Metadata } from 'next';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Landmark,
  MessageCircle,
  MonitorSmartphone,
} from 'lucide-react';

const SITE_URL = 'https://anandconsultancy.co.in';

export const metadata: Metadata = {
  title: 'Business Technology & Digital Solutions',

  description:
    'Practical business, digital and compliance solutions from Anand IT Consultancy & GST Services, helping businesses with technology, digital presence, GST, tax and government requirements.',

  alternates: {
    canonical: '/solutions',
  },

  openGraph: {
    title: 'Business Technology & Digital Solutions | Anand',
    description:
      'Practical solutions for business setup, technology, digital presence, GST, tax and government requirements.',
    url: '/solutions',
  },
};

const solutionSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/solutions#webpage`,
      url: `${SITE_URL}/solutions`,
      name: 'Business Technology & Digital Solutions | Anand',
      description:
        'Practical business, digital and compliance solutions from Anand IT Consultancy & GST Services.',
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      about: {
        '@id': `${SITE_URL}/#business`,
      },
      mainEntity: {
        '@id': `${SITE_URL}/solutions#solutions`,
      },
    },

    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/solutions#solutions`,
      name: 'Anand Business, Digital & Compliance Solutions',
      itemListOrder: 'https://schema.org/ItemListOrderAscending',
      numberOfItems: 4,

      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Service',
            '@id': `${SITE_URL}/solutions#business-setup-growth`,
            name: 'Business Setup & Growth',
            description:
              'Practical support to help businesses establish their presence, reach customers and build a stronger digital foundation.',
            serviceType: 'Business Setup & Growth',
            provider: {
              '@id': `${SITE_URL}/#business`,
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Bihar',
            },
            url: `${SITE_URL}/solutions`,
          },
        },

        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Service',
            '@id': `${SITE_URL}/solutions#digital-technology`,
            name: 'Digital & Technology',
            description:
              'Technology solutions designed around the way your business actually works — simple, practical and scalable.',
            serviceType: 'Digital & Technology',
            provider: {
              '@id': `${SITE_URL}/#business`,
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Bihar',
            },
            url: `${SITE_URL}/solutions`,
          },
        },

        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'Service',
            '@id': `${SITE_URL}/solutions#gst-tax-audit`,
            name: 'GST, Tax & Audit',
            description:
              'Reliable assistance for GST, taxation, audit and essential compliance needs, so you can focus on running your business.',
            serviceType: 'GST, Tax & Audit',
            provider: {
              '@id': `${SITE_URL}/#business`,
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Bihar',
            },
            url: `${SITE_URL}/solutions`,
          },
        },

        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'Service',
            '@id': `${SITE_URL}/solutions#government-citizen-services`,
            name: 'Government & Citizen Services',
            description:
              'Access important government, citizen and online services through one convenient and trusted point.',
            serviceType: 'Government & Citizen Services',
            provider: {
              '@id': `${SITE_URL}/#business`,
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Bihar',
            },
            url: `${SITE_URL}/solutions`,
          },
        },
      ],
    },
  ],
};

const solutions = [
  {
    icon: BriefcaseBusiness,
    number: '01',
    title: 'Business Setup & Growth',
    subtitle: 'Start right. Build better. Grow smarter.',
    description:
      'Practical support to help businesses establish their presence, reach customers and build a stronger digital foundation.',
    points: [
      'Business Setup',
      'Website Design',
      'Digital Advertising',
      'Digital Presence',
      'Business Applications',
    ],
  },
  {
    icon: MonitorSmartphone,
    number: '02',
    title: 'Digital & Technology',
    subtitle: 'Technology that works for your business.',
    description:
      'Technology solutions designed around the way your business actually works — simple, practical and scalable.',
    points: [
      'Business Websites',
      'Web Applications',
      'Business Applications',
      'Digital Solutions',
      'IT Support',
    ],
  },
  {
    icon: Landmark,
    number: '03',
    title: 'GST, Tax & Audit',
    subtitle: 'Stay compliant. Stay focused.',
    description:
      'Reliable assistance for GST, taxation, audit and essential compliance needs, so you can focus on running your business.',
    points: [
      'GST Registration',
      'GST Returns',
      'Income Tax',
      'Audit',
      'Compliance Support',
    ],
  },
  {
    icon: Landmark,
    number: '04',
    title: 'Government & Citizen Services',
    subtitle: 'Essential services, made simpler.',
    description:
      'Access important government, citizen and online services through one convenient and trusted point.',
    points: [
      'CSC Services',
      'Government Applications',
      'Citizen Services',
      'Online Forms',
      'Digital Assistance',
    ],
  },
];

const steps = [
  {
    number: '01',
    title: 'Tell us',
    description: 'Share what you need help with.',
  },
  {
    number: '02',
    title: 'We understand',
    description: 'We understand your requirement and guide you clearly.',
  },
  {
    number: '03',
    title: 'Get it done',
    description: 'We help you move forward with the right solution.',
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(solutionSchema),
        }}
      />

      {/* Hero */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                Our Solutions
              </span>
            </div>

            <h1 className="mt-4 font-poppins text-4xl font-semibold leading-[1.1] tracking-[-0.035em] text-anand-navy sm:text-5xl lg:text-[56px]">
              Practical solutions for business,
              <br className="hidden sm:block" /> digital &amp; compliance needs.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              From starting your business to building its digital presence and
              managing compliance, Anand brings practical services together to
              help you get things done.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="anand-button anand-button-primary"
              >
                Talk to Anand
                <ArrowUpRight size={17} strokeWidth={2} />
              </a>

              <a
                href="/services"
                className="anand-button anand-button-secondary"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Areas */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                What We Solve
              </span>
            </div>

            <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[46px]">
              One place for the work
              <br className="hidden sm:block" /> that keeps business moving.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Choose the area that matches your requirement. If you are not
              sure, simply tell us what you need and we will guide you.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.number}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,35,70,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,35,70,0.09)] sm:p-7 lg:p-8"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/60 blur-3xl" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-anand-blue">
                        <Icon size={23} strokeWidth={1.8} />
                      </div>

                      <span className="font-poppins text-xs font-semibold tracking-[0.12em] text-slate-300">
                        {solution.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-poppins text-xl font-semibold tracking-[-0.02em] text-anand-navy sm:text-2xl">
                      {solution.title}
                    </h3>

                    <p className="mt-2 font-poppins text-sm font-medium text-anand-blue">
                      {solution.subtitle}
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-[15px]">
                      {solution.description}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {solution.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-anand-blue">
                            <Check size={12} strokeWidth={2.5} />
                          </span>

                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple Approach */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                Our Approach
              </span>
            </div>

            <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[46px]">
              Simple process.
              <br className="hidden sm:block" /> Clear outcome.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              No complicated process. Just tell us what you need and we take
              it forward from there.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7"
              >
                <span className="font-poppins text-xs font-semibold tracking-[0.12em] text-anand-gold">
                  {step.number}
                </span>

                <h3 className="mt-5 font-poppins text-xl font-semibold tracking-[-0.02em] text-anand-navy">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-anand-navy py-16 sm:py-20">
        <div className="anand-container">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-anand-gold" />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-blue-200">
                  Need Help?
                </span>
              </div>

              <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl">
                Not sure which service
                <br className="hidden sm:block" /> or solution you need?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-blue-100/80">
                Tell us what you are trying to get done. We will help you find
                the right way forward.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
              <a
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-poppins text-sm font-semibold text-anand-navy transition-all duration-200 hover:bg-slate-100"
              >
                Get in Touch
                <ArrowUpRight size={17} strokeWidth={2} />
              </a>

              <a
                href="https://wa.me/918004879928"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-poppins text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-anand-navy"
              >
                <MessageCircle size={17} strokeWidth={2} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}