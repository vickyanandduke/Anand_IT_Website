import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  Globe2,
  MapPin,
  Navigation,
  Smartphone,
} from 'lucide-react';

const GET_DIRECTIONS_URL =
  'https://maps.app.goo.gl/772BYZ4ZfK4QZMp39';

const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/vGFTZr1qEY1pxPj77';

const benefits = [
  {
    icon: MapPin,
    text: 'Local support when you need it',
  },
  {
    icon: Smartphone,
    text: 'Digital services from anywhere',
  },
  {
    icon: CheckCircle2,
    text: 'One trusted point of contact',
  },
];

export default function LocalPresence() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
      <div className="anand-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left content */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                Local Presence
              </span>
            </div>

            <h2 className="mt-4 max-w-xl font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-anand-navy sm:text-4xl lg:text-[46px]">
              Local support.
              <br />
              <span className="text-anand-blue">
                Digital convenience.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-slate-500 sm:text-lg">
              Whether you are nearby or connecting from somewhere else,
              Anand brings practical business, digital and government services
              together in one place.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.text}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-anand-blue shadow-sm ring-1 ring-slate-200">
                      <Icon size={17} strokeWidth={1.8} />
                    </div>

                    <span className="font-poppins text-sm font-medium text-anand-navy sm:text-base">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={GET_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-anand-blue px-5 py-3.5 font-poppins text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Get directions
                <Navigation size={17} strokeWidth={1.9} />
              </a>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 font-poppins text-sm font-semibold text-anand-navy transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
              >
                View on Google Maps
                <ExternalLink size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          {/* Map visual */}
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-100/50 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,35,70,0.10)]">
              {/* Map header */}
              <div className="relative z-10 flex items-center justify-between border-b border-slate-100 bg-white px-5 py-4 sm:px-6">
                <div>
                  <p className="font-poppins text-xs font-semibold uppercase tracking-[0.12em] text-anand-blue">
                    Find Anand
                  </p>

                  <p className="mt-1 text-sm font-medium text-anand-navy">
                    Visit us or connect online
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-anand-blue">
                  <Building2 size={19} strokeWidth={1.8} />
                </div>
              </div>

              {/* Map area */}
              <div className="relative h-[340px] overflow-hidden bg-[#eaf2ec] sm:h-[390px]">
                {/* Map grid / roads */}
                <div className="absolute inset-0 opacity-70">
                  <div className="absolute left-[-10%] top-[48%] h-[72px] w-[125%] rotate-[-9deg] bg-white shadow-sm" />

                  <div className="absolute left-[43%] top-[-20%] h-[145%] w-[58px] rotate-[19deg] bg-white shadow-sm" />

                  <div className="absolute left-[12%] top-[18%] h-[2px] w-[72%] rotate-[24deg] bg-slate-200" />

                  <div className="absolute left-[5%] top-[75%] h-[2px] w-[90%] rotate-[-17deg] bg-slate-200" />

                  <div className="absolute left-[68%] top-[8%] h-[2px] w-[42%] rotate-[58deg] bg-slate-200" />
                </div>

                {/* Secondary roads */}
                <div className="absolute left-[7%] top-[28%] h-1 w-36 rotate-[8deg] rounded-full bg-slate-300/70" />

                <div className="absolute right-[5%] top-[67%] h-1 w-40 rotate-[-12deg] rounded-full bg-slate-300/70" />

                <div className="absolute bottom-[18%] left-[18%] h-1 w-28 rotate-[26deg] rounded-full bg-slate-300/60" />

                {/* Map location card */}
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Anand IT Consultancy & GST Services on Google Maps"
                  className="group absolute left-1/2 top-1/2 block w-[calc(100%-40px)] max-w-md -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                >
                  <div className="rounded-2xl border border-white/80 bg-white/95 p-5 shadow-[0_18px_50px_rgba(15,35,70,0.16)] backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_rgba(15,35,70,0.20)] sm:p-6">
                    <div className="flex items-start gap-4">
                      {/* Pin */}
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-anand-blue text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-transform duration-300 group-hover:scale-105">
                        <MapPin size={23} strokeWidth={1.9} />

                        <span className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-anand-blue" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-poppins text-base font-semibold text-anand-navy">
                            Anand IT Consultancy & GST Services
                          </p>

                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.8}
                            className="mt-0.5 shrink-0 text-slate-300 transition-colors duration-200 group-hover:text-anand-blue"
                          />
                        </div>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          Business, digital & government services under one
                          roof.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2">
                        <Globe2
                          size={16}
                          strokeWidth={1.8}
                          className="text-anand-blue"
                        />

                        <span className="text-xs font-medium text-slate-500">
                          Available locally and online
                        </span>
                      </div>

                      <span className="hidden text-xs font-semibold text-anand-blue sm:block">
                        View on Maps
                      </span>
                    </div>
                  </div>
                </a>

                {/* Decorative map pins */}
                <div className="absolute left-[16%] top-[25%] h-3 w-3 rounded-full bg-blue-300 ring-4 ring-white/70" />

                <div className="absolute right-[18%] top-[29%] h-3 w-3 rounded-full bg-blue-300 ring-4 ring-white/70" />

                <div className="absolute bottom-[20%] right-[27%] h-2.5 w-2.5 rounded-full bg-anand-gold ring-4 ring-white/70" />

                {/* Bottom map label */}
                <div className="absolute bottom-4 left-4 rounded-lg border border-white/70 bg-white/85 px-3 py-2 shadow-sm backdrop-blur-sm">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">
                    Local presence
                  </p>
                </div>
              </div>

              {/* Bottom trust strip */}
              <div className="grid grid-cols-2 divide-x divide-slate-100 border-t border-slate-100">
                <div className="px-5 py-4 sm:px-6">
                  <p className="font-poppins text-xs font-semibold text-anand-navy">
                    Google Business
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Find us and get directions
                  </p>
                </div>

                <div className="px-5 py-4 sm:px-6">
                  <p className="font-poppins text-xs font-semibold text-anand-navy">
                    Online Services
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Connect without visiting
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 left-5 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(15,35,70,0.10)] sm:left-8">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-anand-blue">
                <CheckCircle2 size={16} strokeWidth={1.9} />
              </div>

              <div>
                <p className="font-poppins text-xs font-semibold text-anand-navy">
                  Easy to find
                </p>

                <p className="text-[10px] text-slate-400">
                  Local & online
                </p>
              </div>
            </div>

            {/* Floating arrow */}
            <div className="absolute -right-3 -top-3 hidden h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white text-anand-blue shadow-[0_10px_25px_rgba(15,35,70,0.10)] sm:flex">
              <ArrowUpRight size={19} strokeWidth={1.8} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}