import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Globe2,
  Landmark,
  MessageCircle,
  MonitorCog,
  ReceiptText,
  ShieldCheck,
} from 'lucide-react';

const highlights = [
  'Business & IT Solutions',
  'GST & Tax Services',
  'Digital & Government Services',
];

const serviceCards = [
  {
    icon: MonitorCog,
    title: 'Digital Solutions',
    description: 'Websites & business applications',
  },
  {
    icon: ReceiptText,
    title: 'GST & Tax',
    description: 'Returns, compliance & support',
  },
  {
    icon: Landmark,
    title: 'Government Services',
    description: 'CSC & online citizen services',
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-50/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 left-1/3 h-[420px] w-[420px] rounded-full bg-slate-50 blur-3xl"
      />

      <div className="anand-container relative">
        <div className="grid min-h-[calc(100vh-76px)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          {/* Left Content */}
          <div className="max-w-3xl">
            <span className="anand-eyebrow">
              Business • Digital • Government
            </span>

            <h1 className="anand-heading relative mt-6 w-fit max-w-full pb-4 text-5xl text-anand-navy sm:text-6xl lg:text-[68px] lg:leading-[1.05]">
              One Stop Solution for Business, Digital & Government Services.

              {/* Full headline underline */}
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-1 w-full rounded-full bg-anand-gold/80"
              />
            </h1>

            <p className="anand-body mt-7 max-w-2xl text-lg sm:text-xl">
              Business &amp; IT Solutions, GST &amp; Income Tax Compliance, and
              Digital &amp; Government Services — all under one roof.
            </p>

            {/* Primary Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="anand-button anand-button-primary group min-h-[52px] px-6"
              >
                Get a Consultation
                <ArrowRight
                  size={18}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
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

            {/* Trust / Capability highlights */}
            <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-sm font-medium text-slate-600"
                >
                  <CheckCircle2
                    size={17}
                    strokeWidth={2}
                    className="text-anand-blue"
                  />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
            {/* Main visual card */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-[0_30px_80px_rgba(11,31,58,0.10)] sm:p-7">
              {/* Top label */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <Image
                      src="/logos/anand-logo.svg"
                      alt="Anand"
                      width={72}
                      height={24}
                      className="h-auto w-[68px] sm:w-[72px]"
                    />

                    <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                      Services
                    </span>
                  </div>

                  <h2 className="mt-2 font-poppins text-xl font-semibold text-anand-navy sm:text-2xl">
                    Everything connected.
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.8}
                    className="text-anand-blue"
                  />
                </div>
              </div>

              {/* Service cards */}
              <div className="mt-7 space-y-3">
                {serviceCards.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.title}
                      className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-anand-blue transition-colors duration-200 group-hover:bg-anand-blue group-hover:text-white">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-poppins text-sm font-semibold text-anand-navy sm:text-base">
                          {service.title}
                        </h3>

                        <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                          {service.description}
                        </p>
                      </div>

                      <span className="hidden h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 sm:flex">
                        <ArrowRight size={15} strokeWidth={2} />
                      </span>

                      <span className="font-poppins text-xs font-semibold text-slate-300">
                        0{index + 1}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Bottom information strip */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <Globe2
                      size={18}
                      strokeWidth={1.8}
                      className="text-anand-blue"
                    />
                    <span className="font-poppins text-xs font-semibold text-anand-navy">
                      Digital First
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Modern online solutions for businesses and individuals.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <FileText
                      size={18}
                      strokeWidth={1.8}
                      className="text-anand-gold"
                    />
                    <span className="font-poppins text-xs font-semibold text-anand-navy">
                      One Stop
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-500">
                    Multiple services. One trusted point of contact.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <div className="absolute -right-3 top-16 hidden h-16 w-16 rounded-2xl border border-blue-100 bg-white shadow-lg sm:flex sm:items-center sm:justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-anand-blue text-white">
                <MonitorCog size={21} strokeWidth={1.8} />
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 hidden h-14 w-14 rounded-full border border-amber-100 bg-white shadow-lg sm:block">
              <div className="m-2 flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
                <ReceiptText
                  size={19}
                  strokeWidth={1.8}
                  className="text-anand-gold"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}