import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Mail,
  MessageCircle,
  Scale,
} from 'lucide-react';

const sections = [
  {
    title: '1. About These Terms',
    content: (
      <>
        <p>
          These Terms &amp; Conditions describe the general terms that apply
          when you use the Anand IT Consultancy &amp; GST Services website and
          contact us through it.
        </p>

        <p className="mt-4">
          By using this website, you acknowledge that you have read and
          understood these terms.
        </p>
      </>
    ),
  },
  {
    title: '2. Our Services',
    content: (
      <>
        <p>
          Anand provides a range of business, technology, tax, compliance,
          digital and government-related services. The exact service available
          to you depends on your individual requirement and the nature of the
          work involved.
        </p>

        <p className="mt-4">
          Information presented on this website is intended to provide a
          general understanding of our services. It does not automatically
          create an agreement to provide any particular service.
        </p>
      </>
    ),
  },
  {
    title: '3. Service Enquiries',
    content: (
      <>
        <p>
          When you submit an enquiry through our website, please provide
          accurate and relevant information so that we can understand your
          requirement and respond appropriately.
        </p>

        <p className="mt-4">
          An enquiry or conversation with Anand does not by itself guarantee
          that a service will be accepted, provided, completed within a
          particular timeframe, or delivered at a particular cost.
        </p>
      </>
    ),
  },
  {
    title: '4. Professional and Compliance Services',
    content: (
      <>
        <p>
          Certain services offered by Anand may involve GST, Income Tax, legal,
          compliance, business or government procedures.
        </p>

        <p className="mt-4">
          Where a matter requires professional advice, statutory approval,
          government processing, verification, filing or action by a relevant
          authority, the outcome may depend on applicable rules, documents,
          information provided by the client and decisions of the relevant
          authority.
        </p>

        <p className="mt-4">
          Clients are responsible for providing complete and accurate
          information and documents required for their requested service.
        </p>
      </>
    ),
  },
  {
    title: '5. Websites and Digital Solutions',
    content: (
      <>
        <p>
          For website, application and other digital projects, the final
          scope, features, timelines, deliverables and commercial terms will
          depend on the requirements agreed for that particular project.
        </p>

        <p className="mt-4">
          Any examples, descriptions or capabilities shown on this website
          should not be interpreted as a guarantee that every feature or
          technology will be included in every project.
        </p>
      </>
    ),
  },
  {
    title: '6. Government and Third-Party Services',
    content: (
      <>
        <p>
          Anand may assist clients with online applications, government
          services, citizen services and other processes involving third-party
          portals or authorities.
        </p>

        <p className="mt-4">
          Processing times, approvals, fees, requirements and final decisions
          may be determined by the relevant government department, authority or
          third-party platform.
        </p>

        <p className="mt-4">
          Anand cannot guarantee the outcome or processing time of a decision
          controlled by an external authority or platform.
        </p>
      </>
    ),
  },
  {
    title: '7. Information Provided on This Website',
    content: (
      <>
        <p>
          We make reasonable efforts to keep website information useful and
          accurate. However, services, procedures, requirements, contact
          information and other details may change from time to time.
        </p>

        <p className="mt-4">
          Website content should therefore be treated as general information
          and not as a substitute for service-specific consultation where
          professional advice or verification is required.
        </p>
      </>
    ),
  },
  {
    title: '8. Third-Party Links',
    content: (
      <>
        <p>
          This website may contain links to third-party websites and services,
          including WhatsApp, Google Maps and other external platforms.
        </p>

        <p className="mt-4">
          These services operate independently from Anand and may have their
          own terms, policies and requirements. Anand is not responsible for
          the content, availability or policies of third-party platforms.
        </p>
      </>
    ),
  },
  {
    title: '9. Website Use',
    content: (
      <>
        <p>
          You agree to use this website for lawful purposes and in a manner
          that does not interfere with its normal operation or attempt to
          access, alter or misuse website systems or information.
        </p>
      </>
    ),
  },
  {
    title: '10. Intellectual Property',
    content: (
      <>
        <p>
          The Anand name, branding, logo, website design, written content and
          other original materials presented on this website belong to Anand
          or are used with appropriate permission.
        </p>

        <p className="mt-4">
          Website content should not be copied, reproduced, modified or
          commercially reused without appropriate permission.
        </p>
      </>
    ),
  },
  {
    title: '11. Limitation of Responsibility',
    content: (
      <>
        <p>
          Anand will make reasonable efforts to provide services based on the
          information, documents and requirements supplied by the client.
        </p>

        <p className="mt-4">
          However, outcomes may depend on factors outside Anand&apos;s control,
          including government decisions, third-party platforms, changes in
          applicable rules, incomplete information, technical issues or delays
          caused by external systems.
        </p>
      </>
    ),
  },
  {
    title: '12. Changes to These Terms',
    content: (
      <>
        <p>
          We may update these Terms &amp; Conditions when our website,
          services or business practices change.
        </p>

        <p className="mt-4">
          Any updated version will be published on this page with a revised
          &ldquo;Last updated&rdquo; date.
        </p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-[380px] w-[380px] rounded-full bg-amber-50 blur-3xl"
        />

        <div className="anand-container relative">
          <div className="max-w-4xl py-16 sm:py-20 lg:py-24">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-poppins text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-anand-blue"
            >
              <ArrowLeft size={16} strokeWidth={1.8} />
              Back to Anand
            </Link>

            <div className="mt-9 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                Terms
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-anand-navy sm:text-5xl lg:text-[58px]">
              Terms &amp; Conditions
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              A clear understanding of how Anand&apos;s website and services
              work helps us serve you better.
            </p>

            <p className="mt-5 text-sm font-medium text-slate-400">
              Last updated: September 7, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="anand-container">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
            {/* Side Card */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-anand-blue">
                  <Scale size={23} strokeWidth={1.8} />
                </div>

                <h2 className="mt-5 font-poppins text-xl font-semibold text-anand-navy">
                  Clear expectations.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Every requirement is different. These terms explain the
                  general principles that apply when you use Anand&apos;s
                  website and engage with our services.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    'Clear communication',
                    'Accurate information',
                    'Practical expectations',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2
                        size={17}
                        strokeWidth={1.8}
                        className="shrink-0 text-anand-blue"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* Terms */}
            <div className="max-w-3xl">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,35,70,0.04)] sm:p-8 lg:p-10">
                <div className="space-y-10">
                  {sections.map((section) => (
                    <section
                      key={section.title}
                      className="border-b border-slate-100 pb-10 last:border-0 last:pb-0"
                    >
                      <h2 className="font-poppins text-xl font-semibold tracking-[-0.02em] text-anand-navy sm:text-2xl">
                        {section.title}
                      </h2>

                      <div className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                        {section.content}
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="mt-6 rounded-3xl bg-anand-navy p-6 text-white sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-blue-200">
                    <FileText size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h2 className="font-poppins text-lg font-semibold">
                      Have a question about our services?
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      If you need clarification about a service or requirement,
                      please contact Anand before proceeding.
                    </p>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href="/contact"
                        className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-white px-5 font-poppins text-sm font-semibold text-anand-navy transition-colors duration-200 hover:bg-blue-50"
                      >
                        Contact Anand
                        <ArrowUpRight size={15} strokeWidth={2} />
                      </Link>

                      <a
                        href="mailto:contact@anandconsultancy.co.in"
                        className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 font-poppins text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                      >
                        <Mail size={16} strokeWidth={2} />
                        Email
                      </a>

                      <a
                        href="https://wa.me/918004879928"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 font-poppins text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                      >
                        <MessageCircle size={16} strokeWidth={2} />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 font-poppins text-sm font-semibold text-anand-blue transition-colors duration-200 hover:text-anand-navy"
                >
                  Privacy Policy
                  <ArrowUpRight size={15} strokeWidth={2} />
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 font-poppins text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-anand-blue"
                >
                  Return to homepage
                  <ArrowUpRight size={15} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}