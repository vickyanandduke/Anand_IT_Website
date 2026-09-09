import {
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Gavel,
  MonitorSmartphone,
  ReceiptText,
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
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />

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
              href="#topics"
              className="anand-button anand-button-primary"
            >
              Explore Topics
              <ArrowUpRight size={17} strokeWidth={2} />
            </a>

            <a
              href="/contact"
              className="anand-button anand-button-secondary"
            >
              Talk to Anand
            </a>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section id="topics" className="bg-white py-20 sm:py-24 lg:py-28">
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
              complexity.
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

                    <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors group-hover:text-anand-blue">
                      Coming soon
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-slate-50 py-20 sm:py-24 lg:py-28">
        <div className="anand-container">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_rgba(15,35,70,0.05)]">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-amber-100/40 blur-3xl" />

            <div className="relative flex flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-anand-navy text-white shadow-sm">
                <Sparkles size={25} strokeWidth={1.8} />
              </div>

              <div className="mt-7 flex items-center gap-2">
                <FileText
                  size={17}
                  strokeWidth={1.8}
                  className="text-anand-gold"
                />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                  First Articles Coming Soon
                </span>
              </div>

              <h2 className="mt-4 max-w-2xl font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[44px]">
                We are getting our first insights ready.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
                Anand is a growing business, and this space will grow with it.
                We will regularly share practical information, useful
                explanations and lessons that can help you get things done
                better.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/contact"
                  className="anand-button anand-button-primary"
                >
                  Talk to Anand
                  <ArrowUpRight size={17} strokeWidth={2} />
                </a>

                <a
                  href="https://wa.me/918004879928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anand-button anand-button-secondary"
                >
                  WhatsApp Us
                </a>
              </div>
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
                Don&apos;t wait for the next article.
                <br className="hidden sm:block" /> Talk to Anand today.
              </h2>
            </div>

            <a
              href="/contact"
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-poppins text-sm font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-anand-navy"
            >
              Get in Touch
              <ArrowUpRight size={17} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}