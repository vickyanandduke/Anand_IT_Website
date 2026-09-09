import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    content: (
      <>
        <p>
          When you contact Anand through our website, we may collect the
          information you choose to provide, such as:
        </p>

        <ul className="mt-4 space-y-2">
          <li>• Your name</li>
          <li>• Mobile or telephone number</li>
          <li>• Email address</li>
          <li>• The service you are interested in</li>
          <li>• Details or messages describing your requirement</li>
        </ul>

        <p className="mt-4">
          We only ask for information that is relevant to responding to your
          enquiry or helping you with the service you have requested.
        </p>
      </>
    ),
  },
  {
    title: '2. How We Use Your Information',
    content: (
      <>
        <p>
          Information submitted through our website may be used to:
        </p>

        <ul className="mt-4 space-y-2">
          <li>• Respond to your enquiry or request</li>
          <li>• Understand the service you require</li>
          <li>• Contact you regarding your enquiry</li>
          <li>• Provide information about the relevant Anand service</li>
          <li>• Communicate with you regarding an ongoing request</li>
        </ul>

        <p className="mt-4">
          We do not use enquiry information for unrelated purposes.
        </p>
      </>
    ),
  },
  {
    title: '3. Enquiries and Communication',
    content: (
      <>
        <p>
          Anand provides multiple ways to contact us, including the website
          enquiry form, telephone, email and WhatsApp.
        </p>

        <p className="mt-4">
          When you choose to contact us through WhatsApp, your communication is
          handled through WhatsApp and is also subject to WhatsApp&apos;s own
          privacy practices and terms.
        </p>

        <p className="mt-4">
          Similarly, email communication may be processed through our email
          service provider for the purpose of receiving and responding to your
          enquiry.
        </p>
      </>
    ),
  },
  {
    title: '4. Email Processing',
    content: (
      <>
        <p>
          Website enquiries may be transmitted to Anand&apos;s business email
          address using an email delivery service. We currently use Resend for
          this purpose.
        </p>

        <p className="mt-4">
          Information contained in an enquiry email is used for handling the
          enquiry and providing the requested assistance.
        </p>
      </>
    ),
  },
  {
    title: '5. Third-Party Services and Links',
    content: (
      <>
        <p>
          Our website may contain links to third-party services, including
          Google Maps, WhatsApp and other external websites or platforms.
        </p>

        <p className="mt-4">
          When you follow one of these links, your interaction takes place on
          the third-party service and may be governed by that service&apos;s
          own privacy policy and terms.
        </p>

        <p className="mt-4">
          Anand does not control the privacy practices of third-party
          platforms.
        </p>
      </>
    ),
  },
  {
    title: '6. Cookies and Website Technologies',
    content: (
      <>
        <p>
          The Anand website may use technologies required for the website to
          function properly, such as those needed to deliver pages and provide
          a reliable browsing experience.
        </p>

        <p className="mt-4">
          We do not currently use the website enquiry form to collect
          information beyond the details you voluntarily submit.
        </p>
      </>
    ),
  },
  {
    title: '7. Information Security',
    content: (
      <>
        <p>
          We take reasonable steps to protect information submitted to us and
          to limit access to it to purposes connected with our business and
          your enquiry.
        </p>

        <p className="mt-4">
          However, no method of transmitting or storing information online can
          be guaranteed to be completely secure.
        </p>
      </>
    ),
  },
  {
    title: '8. How Long We Keep Information',
    content: (
      <>
        <p>
          We retain enquiry and communication information only for as long as
          reasonably necessary for handling the enquiry, providing services,
          maintaining relevant business records, or meeting applicable legal
          and administrative requirements.
        </p>
      </>
    ),
  },
  {
    title: '9. Your Choices',
    content: (
      <>
        <p>
          You may choose whether to provide information through our website.
          However, some information may be necessary for us to respond to an
          enquiry or provide a requested service.
        </p>

        <p className="mt-4">
          If you have questions about information you have shared with Anand,
          you can contact us using the details provided below.
        </p>
      </>
    ),
  },
  {
    title: '10. Changes to This Privacy Policy',
    content: (
      <>
        <p>
          We may update this Privacy Policy when our website, services or
          information-handling practices change.
        </p>

        <p className="mt-4">
          Any updated version will be published on this page with a revised
          &ldquo;Last updated&rdquo; date.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
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
                Privacy
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-anand-navy sm:text-5xl lg:text-[58px]">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Your privacy matters to us. This page explains what information
              Anand may collect through this website and how we use it.
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
                  <ShieldCheck size={23} strokeWidth={1.8} />
                </div>

                <h2 className="mt-5 font-poppins text-xl font-semibold text-anand-navy">
                  Your information stays relevant.
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  We collect information primarily when you choose to contact
                  us, and use it to understand and respond to your requirement.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    'Clear purpose',
                    'Relevant information only',
                    'Direct communication',
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

            {/* Policy */}
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
                    <Mail size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <h2 className="font-poppins text-lg font-semibold">
                      Questions about privacy?
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      If you have a question about the information you have
                      shared with Anand, please contact us.
                    </p>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a
                        href="mailto:contact@anandconsultancy.co.in"
                        className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-white px-5 font-poppins text-sm font-semibold text-anand-navy transition-colors duration-200 hover:bg-blue-50"
                      >
                        <Mail size={16} strokeWidth={2} />
                        Email Anand
                      </a>

                      <a
                        href="https://wa.me/918004879928"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 font-poppins text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10"
                      >
                        <MessageCircle size={16} strokeWidth={2} />
                        WhatsApp
                        <ArrowUpRight size={14} strokeWidth={2} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-poppins text-sm font-semibold text-anand-blue transition-colors duration-200 hover:text-anand-navy"
                >
                  Contact Anand
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