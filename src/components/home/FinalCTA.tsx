import { ArrowRight, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-anand-navy py-20 sm:py-24 lg:py-28">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="pointer-events-none absolute right-[18%] top-16 h-2 w-2 rounded-full bg-anand-gold" />

      <div className="pointer-events-none absolute left-[12%] bottom-20 h-1.5 w-1.5 rounded-full bg-blue-300/70" />

      <div className="anand-container relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-[2px] w-6 bg-anand-gold" />

            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
              Let&apos;s Get Started
            </span>

            <span className="h-[2px] w-6 bg-anand-gold" />
          </div>

          {/* Heading */}
          <h2 className="mt-5 font-poppins text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-white sm:text-5xl lg:text-[60px]">
            Have a requirement?
            <br />
            <span className="text-blue-400">
              Let&apos;s find the right way forward.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100/75 sm:text-lg sm:leading-8">
            Whether you need business support, digital solutions, GST and tax
            services, or government-related assistance, tell us what you need
            and we&apos;ll help you take the next step.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-anand-blue px-6 py-4 font-poppins text-sm font-semibold text-white shadow-[0_12px_30px_rgba(37,99,235,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 sm:w-auto"
            >
              Get a Consultation
              <ArrowRight size={18} strokeWidth={1.8} />
            </a>

            <a
              href="https://wa.me/918004879928"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-poppins text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              <MessageCircle size={18} strokeWidth={1.8} />
              WhatsApp Us
            </a>
          </div>

          {/* Trust line */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-7">
            <span className="text-xs font-medium text-blue-100/60">
              Business & IT Solutions
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-anand-gold sm:block" />

            <span className="text-xs font-medium text-blue-100/60">
              GST & Tax Services
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-anand-gold sm:block" />

            <span className="text-xs font-medium text-blue-100/60">
              Digital & Government Services
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}