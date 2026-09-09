import {
  ArrowUpRight,
  Code2,
  Globe2,
  LayoutDashboard,
  MonitorSmartphone,
  MousePointer2,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

const capabilities = [
  {
    icon: Globe2,
    title: 'Business Websites',
    description:
      'Modern, responsive websites designed to present your business professionally online.',
  },
  {
    icon: LayoutDashboard,
    title: 'Business Applications',
    description:
      'Digital applications and tools built around practical business workflows and requirements.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Digital Experiences',
    description:
      'Simple, user-friendly digital experiences that work across desktop and mobile devices.',
  },
];

export default function DigitalSolutions() {
  return (
    <section className="relative overflow-hidden bg-anand-navy py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="anand-container relative">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                Digital Solutions
              </span>
            </div>

            <h2 className="mt-4 max-w-xl font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-white sm:text-4xl lg:text-[46px]">
              Technology that works
              <br />
              <span className="text-blue-300">for your business.</span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              From professional websites to practical business applications,
              Anand helps turn ideas and business requirements into useful
              digital experiences.
            </p>

            {/* Feature statement */}
            <div className="mt-8 flex max-w-lg items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                <Sparkles size={20} strokeWidth={1.8} />
              </div>

              <div>
                <p className="font-poppins text-sm font-semibold text-white">
                  Built around real requirements
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Not technology for the sake of technology. The focus is on
                  creating digital solutions that are useful, clear and easy
                  to use.
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3.5 font-poppins text-sm font-semibold text-anand-navy transition-all duration-200 hover:bg-blue-50"
            >
              Explore digital solutions
              <ArrowUpRight size={17} strokeWidth={2} />
            </a>
          </div>

          {/* Right visual panel */}
          <div className="relative">
            {/* Offset glow panel */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-blue-400/10" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-[0_25px_80px_rgba(0,0,0,0.2)]">
              {/* Mock browser header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>

                <div className="hidden h-7 w-40 items-center rounded-lg bg-white/5 px-3 sm:flex">
                  <span className="text-[10px] text-slate-500">
                    yourbusiness.in
                  </span>
                </div>

                <Code2
                  size={18}
                  strokeWidth={1.8}
                  className="text-blue-300"
                />
              </div>

              {/* Visual workspace */}
              <div className="p-5 sm:p-6">
                {/* Top dashboard block */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="h-2.5 w-24 rounded-full bg-white/20" />

                      <div className="mt-3 h-4 w-48 rounded-full bg-white/10" />
                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                      <MousePointer2 size={17} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Mini visual */}
                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="h-20 rounded-xl bg-blue-400/10 ring-1 ring-blue-300/10" />
                    <div className="h-20 rounded-xl bg-white/[0.04] ring-1 ring-white/10" />
                    <div className="h-20 rounded-xl bg-white/[0.04] ring-1 ring-white/10" />
                  </div>

                  <div className="mt-4 flex gap-2">
                    <div className="h-2 w-28 rounded-full bg-white/10" />
                    <div className="h-2 w-16 rounded-full bg-white/5" />
                  </div>
                </div>

                {/* Capability cards */}
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {capabilities.map((capability) => {
                    const Icon = capability.icon;

                    return (
                      <div
                        key={capability.title}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                          <Icon size={17} strokeWidth={1.8} />
                        </div>

                        <p className="mt-3 font-poppins text-xs font-semibold text-white">
                          {capability.title}
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-slate-500">
                          {capability.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Security/detail badge */}
              <div className="absolute -bottom-1 -right-1 flex items-center gap-2 rounded-tl-2xl border-l border-t border-white/10 bg-anand-navy px-4 py-3">
                <ShieldCheck
                  size={16}
                  strokeWidth={1.8}
                  className="text-blue-300"
                />

                <span className="text-xs font-medium text-slate-300">
                  Built for modern devices
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}