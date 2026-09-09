import type { Metadata } from 'next';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Gavel,
  Landmark,
  MonitorSmartphone,
  ShieldCheck,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Anand | Our Team & Expertise',
  description:
    'Meet the team behind Anand IT Consultancy & GST Services, bringing together technology, GST and Income Tax compliance, legal expertise and practical business experience.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Anand | Our Team & Expertise',
    description:
      'Meet the people behind Anand and discover the technology, compliance, legal and tax expertise we bring together under one roof.',
    url: '/about',
  },
};

const team = [
  {
    number: '01',
    initials: 'VA',
    name: 'Vicky Anand',
    role: 'Founder • Technology & Digital Solutions',
    icon: MonitorSmartphone,
    accent: 'blue',
    description:
      'B.Tech in Computer Science with 8 years of professional experience in the IT industry, including experience with Amazon and Tata Consultancy. Leads technology, websites, business applications and digital solutions at Anand.',
    highlights: [
      'B.Tech — Computer Science',
      '8 Years of IT Experience',
      'Worked with Amazon',
      'Worked with Tata Consultancy',
    ],
  },
  {
    number: '02',
    initials: 'RA',
    name: 'Ricky Anand',
    role: 'Advocate • GST & Income Tax Compliance',
    icon: Gavel,
    accent: 'gold',
    description:
      'A practicing Advocate with a valid Bar license, focusing on GST, Income Tax and legal-compliance requirements. Helps clients navigate compliance requirements with clarity and proper professional guidance.',
    highlights: [
      'Practicing Advocate',
      'Valid Bar License',
      'GST Compliance',
      'Income Tax Compliance',
    ],
  },
  {
    number: '03',
    initials: 'SB',
    name: 'Surendra Bhagat',
    role: 'Tax Consultant • Business Setup Advisor',
    icon: Landmark,
    accent: 'blue',
    description:
      'Bringing over 20 years of practical experience in tax consultation, with deep knowledge of taxation and day-to-day business requirements. Also guides entrepreneurs through the initial setup of their businesses and the essential requirements involved.',
    highlights: [
      '20+ Years of Tax Experience',
      'Tax Consultation',
      'Business Setup Guidance',
      'Practical Professional Experience',
    ],
  },
];

const strengths = [
  {
    icon: MonitorSmartphone,
    title: 'Technology',
    description:
      'Modern websites, business applications and digital solutions that help businesses work and grow better.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance',
    description:
      'Practical support for GST, Income Tax and essential compliance requirements with professional guidance.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Experience',
    description:
      'Years of real-world experience across IT, taxation, legal compliance and business setup.',
  },
];

const values = [
  'Clear and practical guidance',
  'Professional approach to every requirement',
  'Solutions based on actual business needs',
  'One trusted point of contact',
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
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
                About Anand
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-anand-navy sm:text-5xl lg:text-[60px]">
              Meet the people
              <br />
              <span className="text-anand-blue">behind Anand.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Different expertise. One shared purpose — helping individuals
              and businesses get things done with the right technology,
              compliance support and practical guidance.
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

      {/* Team */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                The People Behind Anand
              </span>
            </div>

            <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[46px]">
              Three areas of expertise.
              <br className="hidden sm:block" /> One trusted team.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Anand brings together technology, legal and compliance knowledge,
              and decades of practical tax experience — giving clients access
              to the right expertise under one roof.
            </p>
          </div>

          <div className="mt-12 space-y-5 lg:mt-14">
            {team.map((person) => {
              const Icon = person.icon;
              const isGold = person.accent === 'gold';

              return (
                <article
                  key={person.number}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(15,35,70,0.04)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,35,70,0.08)]"
                >
                  <div
                    className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full blur-3xl ${
                      isGold ? 'bg-amber-100/50' : 'bg-blue-100/60'
                    }`}
                  />

                  <div className="relative grid grid-cols-1 lg:grid-cols-[260px_1fr]">
                    {/* Profile block */}
                    <div
                      className={`flex flex-col justify-between border-b border-slate-200 p-7 sm:p-8 lg:border-b-0 lg:border-r ${
                        isGold ? 'bg-amber-50/40' : 'bg-blue-50/40'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`flex h-20 w-20 items-center justify-center rounded-3xl font-poppins text-xl font-semibold ${
                            isGold
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-blue-100 text-anand-blue'
                          }`}
                        >
                          {person.initials}
                        </div>

                        <span className="font-poppins text-xs font-semibold tracking-[0.12em] text-slate-300">
                          {person.number}
                        </span>
                      </div>

                      <div className="mt-8">
                        <div
                          className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${
                            isGold
                              ? 'bg-white text-amber-600 shadow-sm'
                              : 'bg-white text-anand-blue shadow-sm'
                          }`}
                        >
                          <Icon size={19} strokeWidth={1.8} />
                        </div>

                        <h3 className="font-poppins text-2xl font-semibold tracking-[-0.025em] text-anand-navy">
                          {person.name}
                        </h3>

                        <p
                          className={`mt-1 text-sm font-medium ${
                            isGold ? 'text-amber-700' : 'text-anand-blue'
                          }`}
                        >
                          {person.role}
                        </p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="p-7 sm:p-8 lg:p-10">
                      <p className="max-w-3xl text-base leading-7 text-slate-600 sm:text-[17px]">
                        {person.description}
                      </p>

                      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {person.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                          >
                            <CheckCircle2
                              size={17}
                              strokeWidth={1.9}
                              className={
                                isGold
                                  ? 'shrink-0 text-amber-600'
                                  : 'shrink-0 text-anand-blue'
                              }
                            />

                            <span className="text-sm font-medium text-slate-600">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why This Team */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-anand-gold" />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                  Why This Combination
                </span>
              </div>

              <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[46px]">
                Technology.
                <br />
                Compliance.
                <br />
                Experience.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
                Modern businesses need more than a single service. They need
                technology to grow, compliance to stay on track and experienced
                guidance to make practical decisions.
              </p>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-500">
                That is what makes Anand different — expertise from different
                professional backgrounds working together around the needs of
                the client.
              </p>
            </div>

            <div className="space-y-4">
              {strengths.map((strength) => {
                const Icon = strength.icon;

                return (
                  <div
                    key={strength.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,35,70,0.03)] sm:p-7"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-anand-blue">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <div>
                        <h3 className="font-poppins text-lg font-semibold text-anand-navy">
                          {strength.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-[15px]">
                          {strength.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-anand-gold" />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                  How We Work
                </span>
              </div>

              <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[46px]">
                Professional when it matters.
                <br className="hidden sm:block" />
                Personal when you need it.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                We believe good service starts with understanding what a
                person or business actually needs. Our role is not just to
                complete a task, but to make the process easier to understand
                and easier to move forward with.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-anand-blue shadow-sm ring-1 ring-slate-200">
                <Users size={22} strokeWidth={1.8} />
              </div>

              <h3 className="mt-6 font-poppins text-xl font-semibold text-anand-navy">
                What you can expect
              </h3>

              <div className="mt-5 space-y-3">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 text-sm text-slate-600"
                  >
                    <CheckCircle2
                      size={17}
                      strokeWidth={1.9}
                      className="shrink-0 text-anand-blue"
                    />

                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
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
                  Work With Anand
                </span>
              </div>

              <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-white sm:text-4xl">
                Have something to get done?
                <br className="hidden sm:block" /> Talk to Anand.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-blue-100/80">
                Tell us what you need help with. We will connect you with the
                right expertise and help you find the way forward.
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
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}