import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  Landmark,
  MessageCircle,
  MonitorSmartphone,
  ReceiptText,
  ScanLine,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Business, GST, Tax & Government Services',

  description:
    'Explore Anand IT Consultancy & GST Services for business technology, website design, business applications, GST and Income Tax support, digital services, government services and documentation support.',

  alternates: {
    canonical: '/services',
  },

  openGraph: {
    title: 'Business, GST, Tax & Government Services | Anand',
    description:
      'Practical business, digital, GST, tax, government and documentation services — all under one roof.',
    url: '/services',
  },
};

const SITE_URL = 'https://anandconsultancy.co.in';

const serviceCategories = [
  {
    number: '01',
    icon: BriefcaseBusiness,
    eyebrow: 'Business & IT',
    title: 'Build, manage and grow your business digitally.',
    description:
      'Practical technology solutions for businesses that need a professional online presence, useful applications, digital advertising and dependable digital support.',
    accent: 'blue',
    services: [
      {
        title: 'Website Design',
        description:
          'Professional, responsive websites designed to present your business clearly and credibly online.',
      },
      {
        title: 'Business Applications',
        description:
          'Custom digital applications built around practical business workflows and day-to-day requirements.',
      },
      {
        title: 'Digital Solutions',
        description:
          'Useful technology solutions that simplify business processes and everyday operations.',
      },
      {
        title: 'Digital Advertising',
        description:
          'Practical digital advertising support to help businesses reach the right audience and build their online presence.',
      },
      {
        title: 'IT Support',
        description:
          'Practical technology assistance for common business, software and digital requirements.',
      },
    ],
  },
  {
    number: '02',
    icon: ReceiptText,
    eyebrow: 'GST & Tax',
    title: 'Stay organised with GST & Income Tax compliance.',
    description:
      'Support for essential GST, Income Tax, audit and compliance requirements, helping businesses manage registrations, returns, documentation and related processes.',
    accent: 'gold',
    services: [
      {
        title: 'GST Registration',
        description:
          'Assistance with GST registration, documentation and the related online process.',
      },
      {
        title: 'GST Returns',
        description:
          'Support for GST return-related requirements and regular compliance activities.',
      },
      {
        title: 'Income Tax',
        description:
          'Assistance with Income Tax-related requirements, documentation and online processes.',
      },
      {
        title: 'Audit',
        description:
          'Support for audit-related requirements and documentation as applicable to your business.',
      },
      {
        title: 'Compliance Support',
        description:
          'Practical support for ongoing tax, documentation and business compliance requirements.',
      },
    ],
  },
  {
    number: '03',
    icon: Landmark,
    eyebrow: 'Digital & Government',
    title: 'Access essential digital and government services.',
    description:
      'A convenient point of support for online applications, citizen services and government-related digital requirements.',
    accent: 'blue',
    services: [
      {
        title: 'CSC Services',
        description:
          'Access and assistance for common CSC and citizen service requirements.',
      },
      {
        title: 'Online Applications',
        description:
          'Support with online applications, registrations and digital submission processes.',
      },
      {
        title: 'Citizen Services',
        description:
          'Assistance with everyday digital and citizen-facing government service requirements.',
      },
      {
        title: 'Digital Assistance',
        description:
          'Practical help with online processes, forms and digital service requirements.',
      },
    ],
  },
  {
    number: '04',
    icon: ScanLine,
    eyebrow: 'Printing & Documentation',
    title: 'Get everyday documents ready, digitally and physically.',
    description:
      'Convenient printing, scanning and documentation support for individuals and businesses, including online forms and digital documents.',
    accent: 'gold',
    services: [
      {
        title: 'Print & Photocopy',
        description:
          'Everyday document printing and photocopying support for personal and business requirements.',
      },
      {
        title: 'Scanning',
        description:
          'Document scanning and conversion into convenient digital formats.',
      },
      {
        title: 'Document Support',
        description:
          'Assistance with preparing, organising and managing everyday digital documents.',
      },
      {
        title: 'Online Forms',
        description:
          'Support with online forms, uploads and digital submission requirements.',
      },
    ],
  },
];

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Multiple services under one roof',
    description:
      'Business, tax, digital, government and documentation services in one convenient place.',
  },
  {
    icon: Sparkles,
    title: 'Practical, not complicated',
    description:
      'We focus on getting the requirement understood and helping you take the right next step.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital-first approach',
    description:
      'From online applications to websites and business technology, we make digital work simpler.',
  },
  {
    icon: MessageCircle,
    title: 'One point of contact',
    description:
      'Instead of searching for different people for different requirements, start with Anand.',
  },
];

const processSteps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Tell us what you need',
    description:
      'Share your requirement with us through a call, WhatsApp or consultation.',
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'We understand the requirement',
    description:
      'We identify the service, documents and next steps needed for your requirement.',
  },
  {
    number: '03',
    icon: FileCheck2,
    title: 'Get it done',
    description:
      'We help you move through the required process with practical, straightforward support.',
  },
];

/*
 * Machine-readable service catalog for search engines.
 *
 * The visible page remains the primary source of truth.
 * Each Service is connected to the existing LocalBusiness entity
 * defined in LocalBusinessSchema.tsx.
 */
const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/services/#service-list`,
      name: 'Services offered by Anand IT Consultancy & GST Services',
      url: `${SITE_URL}/services`,
      numberOfItems: 18,
      itemListElement: serviceCategories.flatMap((category, categoryIndex) =>
        category.services.map((service, serviceIndex) => ({
          '@type': 'ListItem',
          position:
            serviceCategories
              .slice(0, categoryIndex)
              .reduce((total, item) => total + item.services.length, 0) +
            serviceIndex +
            1,
          item: {
            '@type': 'Service',
            '@id': `${SITE_URL}/services/#${service.title
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, '-')}`,
            name: service.title,
            description: service.description,
            url: `${SITE_URL}/services`,
            provider: {
              '@id': `${SITE_URL}/#business`,
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Bihar',
            },
          },
        }))
      ),
    },
  ],
};

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Services Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-100/60 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-amber-50 blur-3xl"
        />

        <div className="anand-container relative">
          <div className="max-w-4xl py-20 sm:py-24 lg:py-28">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                Our Services
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-anand-navy sm:text-5xl lg:text-[60px]">
              Practical services for
              <br className="hidden sm:block" /> business, digital &amp; everyday
              needs.
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              From building and supporting your business to managing GST &amp;
              Income Tax compliance, digital solutions and government services —
              Anand brings practical services together, all under one roof.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="anand-button anand-button-primary min-h-[52px] px-6"
              >
                Get a Consultation
                <ArrowRight size={18} strokeWidth={2} />
              </Link>

              <a
                href="https://wa.me/918004879928"
                target="_blank"
                rel="noopener noreferrer"
                className="anand-button anand-button-secondary min-h-[52px] px-6"
              >
                <MessageCircle size={18} strokeWidth={2} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                What We Do
              </span>
            </div>

            <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[46px]">
              One place for the services
              <br className="hidden sm:block" /> you need.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Explore our core service areas and find the right support for
              your business, compliance, digital and government requirements.
            </p>
          </div>

          {/* Service Categories */}
          <div className="mt-12 space-y-6 lg:mt-14">
            {serviceCategories.map((category) => {
              const Icon = category.icon;
              const isGold = category.accent === 'gold';

              return (
                <article
                  key={category.number}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,35,70,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_18px_50px_rgba(15,35,70,0.08)] sm:p-8 lg:p-10"
                >
                  {/* Decorative background */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl ${
                      isGold ? 'bg-amber-100/50' : 'bg-blue-100/60'
                    }`}
                  />

                  <div className="relative">
                    {/* Category Header */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                            isGold
                              ? 'bg-amber-50 text-amber-600'
                              : 'bg-blue-50 text-anand-blue'
                          }`}
                        >
                          <Icon size={25} strokeWidth={1.8} />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="font-poppins text-xs font-semibold tracking-[0.14em] text-slate-300">
                              {category.number}
                            </span>

                            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.14em] text-anand-blue">
                              {category.eyebrow}
                            </span>
                          </div>

                          <h2 className="mt-2 max-w-2xl font-poppins text-2xl font-semibold leading-tight tracking-[-0.025em] text-anand-navy sm:text-3xl">
                            {category.title}
                          </h2>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={22}
                        strokeWidth={1.8}
                        className="hidden text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-anand-blue lg:block"
                      />
                    </div>

                    <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                      {category.description}
                    </p>

                    {/* Individual Services */}
                    <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {category.services.map((service) => (
                        <div
                          key={service.title}
                          className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-200 group-hover:bg-white group-hover:shadow-sm"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle2
                              size={18}
                              strokeWidth={1.8}
                              className={
                                isGold
                                  ? 'mt-0.5 shrink-0 text-amber-500'
                                  : 'mt-0.5 shrink-0 text-anand-blue'
                              }
                            />

                            <div>
                              <h3 className="font-poppins text-sm font-semibold text-anand-navy">
                                {service.title}
                              </h3>

                              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Category CTA */}
                    <div className="mt-7 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <span className="text-sm font-medium text-slate-500">
                        Need help with this service?
                      </span>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 font-poppins text-sm font-semibold text-anand-blue transition-colors hover:text-anand-navy"
                      >
                        Talk to us
                        <ArrowRight size={16} strokeWidth={2} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Anand */}
      <section className="relative overflow-hidden bg-anand-navy py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="anand-container relative">
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-anand-gold" />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                  Stuck Somewhere. Come Here.
                </span>
              </div>

              <h2 className="mt-4 max-w-xl font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl lg:text-[46px]">
                Why go around,
                <br />
                <span className="text-blue-300">if Anand is here?</span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
                Anand brings business technology, tax and compliance,
                government services and everyday digital support together in
                one convenient place.
              </p>
            </div>

            {/* Reasons */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div
                    key={reason.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-colors duration-200 hover:bg-white/[0.09]"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-4 font-poppins text-sm font-semibold text-white">
                      {reason.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                How We Help
              </span>
            </div>

            <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[46px]">
              Tell us what you need.
              <br className="hidden sm:block" /> We help with the next step.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              You do not need to know exactly which service to choose. Just
              tell us what you are trying to get done and we will help you
              understand the right way forward.
            </p>
          </div>

          {/* Process */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-14">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative rounded-[24px] border border-slate-200 bg-slate-50/70 p-6 sm:p-7"
                >
                  {/* Connector */}
                  {index < processSteps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute right-[-22px] top-12 z-10 hidden h-px w-10 bg-slate-200 md:block"
                    />
                  )}

                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-anand-blue shadow-sm ring-1 ring-slate-200">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>

                    <span className="font-poppins text-xs font-semibold tracking-[0.14em] text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-poppins text-lg font-semibold tracking-[-0.02em] text-anand-navy">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Help CTA */}
      <section className="bg-white pb-20 sm:pb-24">
        <div className="anand-container">
          <div className="relative overflow-hidden rounded-[28px] bg-slate-50 px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/60 blur-3xl"
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-anand-gold" />

                  <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                    Need Help?
                  </span>
                </div>

                <h2 className="mt-4 font-poppins text-3xl font-semibold leading-tight tracking-[-0.025em] text-anand-navy sm:text-4xl">
                  Not sure which service you need?
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-500">
                  Tell us what you are trying to get done. We can help you
                  identify the right service and the next steps.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/contact"
                  className="anand-button anand-button-primary min-h-[50px] px-5"
                >
                  Get a Consultation
                  <ArrowRight size={17} strokeWidth={2} />
                </Link>

                <a
                  href="https://wa.me/918004879928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anand-button anand-button-secondary min-h-[50px] px-5"
                >
                  <MessageCircle size={17} strokeWidth={2} />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Service Summary */}
      <section className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="anand-container">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <Globe2
                size={21}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-anand-blue"
              />

              <div>
                <h3 className="font-poppins text-sm font-semibold text-anand-navy">
                  Digital First
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Practical digital solutions for modern business needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <ReceiptText
                size={21}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-anand-gold"
              />

              <div>
                <h3 className="font-poppins text-sm font-semibold text-anand-navy">
                  Compliance Support
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  GST and Income Tax-related support under one roof.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MonitorSmartphone
                size={21}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-anand-blue"
              />

              <div>
                <h3 className="font-poppins text-sm font-semibold text-anand-navy">
                  One Point of Contact
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Multiple essential services without dealing with multiple
                  places.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}