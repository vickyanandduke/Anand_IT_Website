import {
  BriefcaseBusiness,
  CheckCircle2,
  Globe2,
  Laptop,
  ShieldCheck,
} from 'lucide-react';

const trustItems = [
  {
    icon: BriefcaseBusiness,
    title: 'Business Focused',
    description: 'Practical services designed around real business needs.',
  },
  {
    icon: Laptop,
    title: 'Technology Driven',
    description: 'IT experience combined with modern digital solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance Support',
    description: 'GST, tax and documentation services under one roof.',
  },
  {
    icon: Globe2,
    title: 'Digital & Local',
    description: 'Online convenience with accessible local support.',
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/70">
      <div className="anand-container">
        <div className="py-10 sm:py-12">
          {/* Section introduction */}
          <div className="mb-8 flex flex-col gap-3 lg:mb-7 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-anand-gold" />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                  Why Anand
                </span>
              </div>

              <h2 className="mt-2 font-poppins text-xl font-semibold tracking-[-0.02em] text-anand-navy sm:text-2xl">
                Professional service. Practical solutions.
              </h2>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <CheckCircle2
                size={17}
                strokeWidth={2}
                className="text-anand-blue"
              />
              <span>One point of contact for multiple needs</span>
            </div>
          </div>

          {/* Trust items */}
          <div className="grid grid-cols-1 divide-y divide-slate-200 border-t border-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex gap-4 py-5 sm:px-5 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-anand-blue shadow-sm ring-1 ring-slate-200 transition-all duration-200 group-hover:bg-anand-blue group-hover:text-white group-hover:ring-anand-blue">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-poppins text-sm font-semibold text-anand-navy">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}