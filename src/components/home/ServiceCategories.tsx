import {
  ArrowUpRight,
  BriefcaseBusiness,
  Landmark,
  MonitorSmartphone,
  ReceiptText,
  ScanLine,
} from 'lucide-react';

const serviceCategories = [
  {
    number: '01',
    icon: BriefcaseBusiness,
    title: 'Business & IT',
    description:
      'Digital solutions that help businesses build, operate and grow with confidence.',
    services: [
      'Website Design',
      'Business Applications',
      'Digital Solutions',
      'IT Support',
    ],
    accent: 'blue',
  },
  {
    number: '02',
    icon: ReceiptText,
    title: 'GST & Tax',
    description:
      'Practical support for GST, taxation, compliance and essential business documentation.',
    services: [
      'GST Registration',
      'GST Returns',
      'Income Tax',
      'Compliance Support',
    ],
    accent: 'gold',
  },
  {
    number: '03',
    icon: Landmark,
    title: 'Digital & Government',
    description:
      'Access essential online, citizen and government services through one trusted point.',
    services: [
      'CSC Services',
      'Online Applications',
      'Citizen Services',
      'Digital Assistance',
    ],
    accent: 'blue',
  },
  {
    number: '04',
    icon: ScanLine,
    title: 'Printing & Documentation',
    description:
      'Everyday digital documentation and printing support for individuals and businesses.',
    services: [
      'Print & Photocopy',
      'Scanning',
      'Document Support',
      'Online Forms',
    ],
    accent: 'gold',
  },
];

export default function ServiceCategories() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="anand-container">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-6 bg-anand-gold" />

            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
              Our Services
            </span>
          </div>

          <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[46px]">
            The right services for every stage of your business.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
            From building and supporting your business to managing GST &amp;
            Income Tax compliance, digital solutions and government services —
            Anand brings practical services together, all under one roof.
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14">
          {serviceCategories.map((category) => {
            const Icon = category.icon;
            const isGold = category.accent === 'gold';

            return (
              <article
                key={category.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,35,70,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,35,70,0.09)] sm:p-7 lg:p-8"
              >
                {/* Decorative background */}
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl ${
                    isGold ? 'bg-amber-100/50' : 'bg-blue-100/60'
                  }`}
                />

                <div className="relative">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        isGold
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-blue-50 text-anand-blue'
                      }`}
                    >
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="font-poppins text-xs font-semibold tracking-[0.12em] text-slate-300">
                      {category.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mt-7 flex items-center justify-between gap-4">
                    <h3 className="font-poppins text-xl font-semibold tracking-[-0.02em] text-anand-navy sm:text-2xl">
                      {category.title}
                    </h3>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 transition-all duration-300 group-hover:bg-anand-blue group-hover:text-white">
                      <ArrowUpRight size={17} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-[15px]">
                    {category.description}
                  </p>

                  {/* Service list */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {category.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            isGold ? 'bg-amber-500' : 'bg-anand-blue'
                          }`}
                        />
                        {service}
                      </span>
                    ))}
                  </div>

                  {/* Bottom action */}
                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-medium text-slate-500 transition-colors group-hover:text-anand-blue">
                      Explore services
                    </span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.8}
                      className="text-slate-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-anand-blue"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-anand-blue shadow-sm ring-1 ring-slate-200">
              <MonitorSmartphone size={18} strokeWidth={1.8} />
            </div>

            <div>
              <p className="font-poppins text-sm font-semibold text-anand-navy">
                Looking for something specific?
              </p>

              <p className="mt-0.5 text-xs leading-5 text-slate-500 sm:text-sm">
                Explore the complete range of services available from Anand.
              </p>
            </div>
          </div>

          <a
            href="/services"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-anand-navy px-5 py-3 font-poppins text-sm font-semibold text-white transition-all duration-200 hover:bg-anand-blue"
          >
            View all services
            <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}