import {
  ArrowRight,
  CheckCircle2,
  MessageSquareText,
  SearchCheck,
  Wrench,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquareText,
    title: 'Tell us what you need',
    description:
      'Share your requirement with us through WhatsApp, phone, email or a consultation.',
  },
  {
    number: '02',
    icon: SearchCheck,
    title: 'We understand & recommend',
    description:
      'We understand your requirement and guide you towards the right service or solution.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'We get it done',
    description:
      'Once everything is clear, we help you move forward and get the work completed.',
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="anand-container">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[2px] w-6 bg-anand-gold" />

            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
              How We Work
            </span>

            <span className="h-[2px] w-6 bg-anand-gold" />
          </div>

          <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-anand-navy sm:text-4xl lg:text-[46px]">
            Simple process.
            <br />
            <span className="text-anand-blue">Clear communication.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Getting started with Anand is straightforward. Tell us what you
            need, and we will help you find the right way forward.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-14 lg:mt-16">
          {/* Connecting line — desktop */}
          <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-10 hidden h-px bg-slate-200 lg:block" />

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  {/* Step content */}
                  <div className="flex flex-col items-center text-center">
                    {/* Icon */}
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_8px_25px_rgba(15,35,70,0.06)]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-anand-blue">
                        <Icon size={22} strokeWidth={1.8} />
                      </div>

                      {/* Number badge */}
                      <span className="absolute -right-1 -top-1 flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-white bg-anand-navy px-1.5 font-poppins text-[10px] font-semibold text-white shadow-sm">
                        {step.number}
                      </span>
                    </div>

                    {/* Text */}
                    <h3 className="mt-6 font-poppins text-lg font-semibold tracking-[-0.02em] text-anand-navy sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div className="mx-auto my-6 h-8 w-px bg-slate-200 lg:hidden" />
                  )}

                  {/* Desktop arrow */}
                  {index < steps.length - 1 && (
                    <div className="pointer-events-none absolute right-[-28px] top-8 z-20 hidden h-5 w-5 items-center justify-center bg-white text-slate-300 lg:flex">
                      <ArrowRight size={18} strokeWidth={1.6} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mx-auto mt-12 flex max-w-2xl items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-5 py-3 sm:mt-14 sm:w-fit">
          <CheckCircle2
            size={17}
            strokeWidth={1.9}
            className="shrink-0 text-anand-blue"
          />

          <span className="text-center text-xs font-medium text-slate-600 sm:text-sm">
            No complicated process. Just clear guidance from start to finish.
          </span>
        </div>
      </div>
    </section>
  );
}