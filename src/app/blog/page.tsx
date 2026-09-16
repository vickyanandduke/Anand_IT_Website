import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  Clock3,
  ReceiptText,
  MonitorSmartphone,
  Gavel,
  Sparkles,
} from 'lucide-react';

const topics = [
  {
    icon: BriefcaseBusiness,
    title: 'Business',
    description:
      'Practical ideas for starting, managing and growing a business.',
    accent: 'blue',
  },
  {
    icon: ReceiptText,
    title: 'GST & Tax',
    description:
      'Simple explanations and useful guidance around GST, Income Tax and compliance.',
    accent: 'gold',
  },
  {
    icon: MonitorSmartphone,
    title: 'Technology',
    description:
      'Websites, business applications and digital solutions explained simply.',
    accent: 'blue',
  },
  {
    icon: Gavel,
    title: 'Legal & Compliance',
    description:
      'Useful information to help businesses understand important compliance requirements.',
    accent: 'gold',
  },
  {
    icon: Sparkles,
    title: 'Others',
    description:
      'Other useful insights, updates and practical topics worth sharing.',
    accent: 'gold',
  },
];

export default function BlogPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50/60">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl"
        />

        <div className="anand-container relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                Anand Insights
              </span>
            </div>

            <h1 className="mt-5 font-poppins text-4xl font-semibold leading-[1.1] tracking-[-0.035em] text-anand-navy sm:text-5xl lg:text-[58px]">
              Practical knowledge for
              <br className="hidden sm:block" /> business and beyond.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
              Useful insights on business, GST &amp; Income Tax, technology,
              digital solutions and everyday compliance — explained in a
              simple and practical way.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#articles"
              className="anand-button anand-button-primary"
            >
              Read Articles
              <ArrowUpRight size={17} strokeWidth={2} />
            </a>

            <Link
              href="/contact"
              className="anand-button anand-button-secondary"
            >
              Talk to Anand
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section id="articles" className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-anand-gold" />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                  Latest Article
                </span>
              </div>

              <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[46px]">
                Ideas that help local businesses move forward.
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                Our first article looks at why businesses in Madhepura and
                Bihar should think about their digital identity — and where to
                start.
              </p>
            </div>
          </div>

          <article className="group relative mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,35,70,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_50px_rgba(15,35,70,0.09)] lg:mt-14">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              {/* Visual */}
              <div className="relative min-h-[280px] overflow-hidden bg-anand-navy sm:min-h-[340px] lg:min-h-full">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl"
                />

                <div className="relative flex h-full flex-col justify-between p-7 sm:p-9 lg:p-10">
                  <div>
                    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1.5 font-poppins text-xs font-semibold uppercase tracking-[0.12em] text-slate-200">
                      Business
                    </span>
                  </div>

                  <div className="mt-12">
                    <p className="font-poppins text-sm font-medium uppercase tracking-[0.12em] text-anand-gold">
                      Madhepura • Bihar
                    </p>

                    <p className="mt-3 max-w-sm font-poppins text-2xl font-semibold leading-8 text-white sm:text-3xl">
                      From a local business to a business customers can find
                      online.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-slate-400">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} strokeWidth={1.8} />
                      September 16, 2026
                    </span>

                    <span className="inline-flex items-center gap-1.5">
                      <Clock3 size={14} strokeWidth={1.8} />
                      8–10 min read
                    </span>
                  </div>

                  <h3 className="mt-5 font-poppins text-2xl font-semibold leading-[1.2] tracking-[-0.025em] text-anand-navy sm:text-3xl">
                    Why Every Business in Madhepura, Bihar Needs an Online
                    Presence
                  </h3>

                  <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg sm:leading-8">
                    A practical guide for new and existing businesses in
                    Madhepura and Bihar covering websites, business email,
                    digital identity, IT solutions, GST support and the
                    practical steps behind becoming easier to find online.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      'Online Presence',
                      'Business',
                      'Madhepura',
                      'Digital Identity',
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    href="/blog/why-every-business-in-madhepura-needs-an-online-presence"
                    className="inline-flex items-center gap-2 font-poppins text-sm font-semibold text-anand-blue transition-colors hover:text-anand-navy"
                  >
                    Read the full article
                    <ArrowRight
                      size={17}
                      strokeWidth={1.8}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Topics */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                What We Write About
              </span>
            </div>

            <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[46px]">
              Knowledge that helps you
              <br className="hidden sm:block" /> make better decisions.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              We will cover the topics that matter to individuals,
              entrepreneurs and growing businesses.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {topics.map((topic) => {
              const Icon = topic.icon;
              const isGold = topic.accent === 'gold';

              return (
                <article
                  key={topic.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,35,70,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,35,70,0.08)] sm:p-7"
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full blur-3xl ${
                      isGold ? 'bg-amber-100/50' : 'bg-blue-100/60'
                    }`}
                  />

                  <div className="relative">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                        isGold
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-blue-50 text-anand-blue'
                      }`}
                    >
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <h3 className="mt-6 font-poppins text-lg font-semibold tracking-[-0.02em] text-anand-navy">
                      {topic.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {topic.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Articles */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,35,70,0.05)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/50 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-amber-100/40 blur-3xl"
            />

            <div className="relative flex flex-col items-center px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-16 lg:py-16">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-anand-navy text-white shadow-sm">
                <Sparkles size={25} strokeWidth={1.8} />
              </div>

              <h2 className="mt-6 max-w-2xl font-poppins text-2xl font-semibold leading-[1.2] tracking-[-0.025em] text-anand-navy sm:text-3xl">
                More practical insights are on the way.
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                We&apos;ll continue adding useful articles covering business,
                GST &amp; tax, technology, legal &amp; compliance and other
                practical topics.
              </p>

              <Link
                href="/contact"
                className="anand-button anand-button-secondary mt-7"
              >
                Suggest a Topic
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-anand-navy py-16 sm:py-20">
        <div className="anand-container">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-gold">
                Need help now?
              </p>

              <h2 className="mt-3 font-poppins text-3xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-4xl">
                Don&apos;t just read about digital growth.
                <br className="hidden sm:block" /> Start building it.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-poppins text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-anand-navy"
            >
              Get in Touch
              <ArrowUpRight size={17} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}