import {
  ArrowRight,
  CheckCircle2,
  Headphones,
  Layers3,
  Sparkles,
} from 'lucide-react';

const reasons = [
  {
    icon: Layers3,
    title: 'Multiple services, one place',
    description:
      'Business, digital, government and documentation needs can be handled through one trusted point of contact.',
  },
  {
    icon: Sparkles,
    title: 'Technology with a practical approach',
    description:
      'We combine technology and digital solutions with services that solve everyday business and individual needs.',
  },
  {
    icon: Headphones,
    title: 'Support when you need it',
    description:
      'Get straightforward assistance instead of having to navigate multiple service providers for different requirements.',
  },
];

export default function WhyAnand() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="anand-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: Main message */}
          <div className="relative">
            {/* Decorative element */}
            <div className="pointer-events-none absolute -left-20 -top-20 hidden h-48 w-48 rounded-full bg-blue-100/50 blur-3xl lg:block" />

            <div className="relative">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-anand-gold" />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                  Why Anand
                </span>
              </div>

              <h2 className="mt-4 max-w-xl font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-anand-navy sm:text-4xl lg:text-[46px]">
                More than a service.
                <br />
                <span className="text-anand-blue">A simpler way forward.</span>
              </h2>

              <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
                Anand brings essential business, technology, compliance and
                digital services together so you can spend less time figuring
                out where to go and more time getting things done.
              </p>

              {/* Highlight box */}
              <div className="mt-8 flex max-w-lg items-start gap-4 rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_30px_rgba(15,35,70,0.04)]">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-anand-blue">
                  <CheckCircle2 size={20} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="font-poppins text-sm font-semibold text-anand-navy">
                    One trusted point of contact
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    From digital solutions to everyday services, keep your
                    requirements connected in one place.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Reasons */}
          <div className="relative">
            {/* Background panel */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-blue-100/40" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,35,70,0.07)]">
              {/* Panel header */}
              <div className="border-b border-slate-100 px-6 py-6 sm:px-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-poppins text-xs font-semibold uppercase tracking-[0.14em] text-anand-blue">
                      The Anand approach
                    </p>

                    <h3 className="mt-2 font-poppins text-xl font-semibold tracking-[-0.02em] text-anand-navy sm:text-2xl">
                      Simple. Connected. Practical.
                    </h3>
                  </div>

                  <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-anand-blue ring-1 ring-slate-200 sm:flex">
                    <Sparkles size={20} strokeWidth={1.7} />
                  </div>
                </div>
              </div>

              {/* Reasons */}
              <div className="divide-y divide-slate-100">
                {reasons.map((reason, index) => {
                  const Icon = reason.icon;

                  return (
                    <div
                      key={reason.title}
                      className="group flex gap-5 px-6 py-6 transition-colors duration-200 hover:bg-slate-50 sm:px-8"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-anand-blue transition-all duration-200 group-hover:bg-anand-blue group-hover:text-white">
                        <Icon size={20} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="font-poppins text-[11px] font-semibold tracking-[0.12em] text-slate-300">
                              0{index + 1}
                            </span>

                            <h4 className="mt-1 font-poppins text-base font-semibold text-anand-navy sm:text-lg">
                              {reason.title}
                            </h4>
                          </div>

                          <ArrowRight
                            size={17}
                            strokeWidth={1.8}
                            className="mt-1 shrink-0 text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-anand-blue"
                          />
                        </div>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom statement */}
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-5 sm:px-8">
                <p className="text-sm leading-6 text-slate-500">
                  <span className="font-semibold text-anand-navy">
                    One roof.
                  </span>{' '}
                  Multiple services. A more convenient experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}