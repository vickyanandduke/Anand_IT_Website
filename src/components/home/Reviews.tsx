import Image from 'next/image';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  MessageSquareQuote,
  Star,
} from 'lucide-react';

const GOOGLE_REVIEWS_URL =
  'https://maps.app.goo.gl/vGFTZr1qEY1pxPj77';

const WRITE_REVIEW_URL =
  'https://g.page/r/CRljlN9_E-1nEBM/review';

const GOOGLE_RATING = '5.0';
const GOOGLE_REVIEW_COUNT = '1';

function StarRating({
  size = 18,
}: {
  size?: number;
}) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          strokeWidth={1.7}
          className="fill-anand-gold text-anand-gold"
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="anand-container">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="h-[2px] w-6 bg-anand-gold" />

            <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
              Customer Reviews
            </span>

            <span className="h-[2px] w-6 bg-anand-gold" />
          </div>

          <h2 className="mt-4 font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.035em] text-anand-navy sm:text-4xl lg:text-[46px]">
            Trusted by customers.
            <br />
            <span className="text-anand-blue">
              Built on real experiences.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            See what customers have shared about their experience with Anand
            across our business, digital and government services.
          </p>
        </div>

        {/* Main review panel */}
        <div className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-[0_20px_60px_rgba(15,35,70,0.06)] sm:mt-16">
          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="relative grid lg:grid-cols-[0.85fr_1.15fr]">
            {/* Left — Google reputation */}
            <div className="border-b border-slate-200 p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-anand-blue">
                <MessageSquareQuote size={23} strokeWidth={1.8} />
              </div>

              <h3 className="mt-6 font-poppins text-2xl font-semibold tracking-[-0.025em] text-anand-navy">
                Your experience matters.
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Trust is built through the work we do and the experiences our
                customers choose to share.
              </p>

              {/* Google rating */}
              <div className="mt-7 flex items-center gap-4">
                <div>
                  <p className="font-poppins text-4xl font-semibold leading-none tracking-[-0.04em] text-anand-navy">
                    {GOOGLE_RATING}
                  </p>

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    Google rating
                  </p>
                </div>

                <div className="border-l border-slate-200 pl-4">
                  <StarRating size={18} />

                  <p className="mt-1 text-xs font-medium text-slate-500">
                    {GOOGLE_REVIEW_COUNT}{' '}
                    {GOOGLE_REVIEW_COUNT === '1'
                      ? 'customer review'
                      : 'customer reviews'}
                  </p>
                </div>
              </div>

              {/* Verified label */}
              <div className="mt-5 flex items-center gap-2">
                <CheckCircle2
                  size={16}
                  strokeWidth={1.9}
                  className="text-anand-blue"
                />

                <span className="text-xs font-medium text-slate-500">
                  Verified on Google
                </span>
              </div>

              {/* Read reviews */}
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-anand-blue px-5 py-3.5 font-poppins text-sm font-semibold text-white shadow-[0_10px_25px_rgba(37,99,235,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                Read all Google Reviews
                <ExternalLink size={16} strokeWidth={1.8} />
              </a>
            </div>

            {/* Right — Real review + review request */}
            <div className="p-7 sm:p-9 lg:p-10">
              {/* Real Google review */}
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <StarRating size={15} />

                  <span className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-400">
                    <CheckCircle2
                      size={12}
                      strokeWidth={1.9}
                      className="text-anand-blue"
                    />
                    Google
                  </span>
                </div>

                <div className="mt-5 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-anand-blue font-poppins text-sm font-semibold text-white">
                    A
                  </div>

                  <div className="min-w-0">
                    <p className="font-poppins text-sm font-semibold text-anand-navy">
                      Anjali Anand
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Google customer review
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  “An exact place that i was looking for in such small town for
                  my business to go online and reach to targeted customer. Also
                  I need not worry about my GST and TAX, a stop solution to your
                  business related problems.”
                </p>

                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 font-poppins text-xs font-semibold text-anand-blue transition-colors hover:text-blue-700"
                >
                  View on Google
                  <ArrowUpRight size={14} strokeWidth={1.8} />
                </a>
              </div>

              {/* Review request card */}
              <div className="mt-4 overflow-hidden rounded-2xl border border-blue-100 bg-blue-50/60">
                <div className="flex flex-col gap-6 p-5 sm:flex-row sm:items-center sm:p-6">
                  {/* QR */}
                  <div className="flex shrink-0 justify-center sm:justify-start">
                    <div className="rounded-xl bg-white p-2 shadow-sm ring-1 ring-blue-100">
                      <Image
                        src="/images/google-review-qr.png"
                        alt="QR code to leave a Google review for Anand IT Consultancy & GST Services"
                        width={130}
                        height={130}
                        className="h-[130px] w-[130px]"
                      />
                    </div>
                  </div>

                  {/* Review CTA */}
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-anand-blue shadow-sm">
                        <MessageSquareQuote
                          size={17}
                          strokeWidth={1.8}
                        />
                      </div>

                      <p className="font-poppins text-base font-semibold text-anand-navy">
                        Enjoyed working with Anand?
                      </p>
                    </div>

                    <p className="mt-3 text-xs leading-5 text-slate-500">
                      Your feedback helps us build trust and serve our
                      customers better.
                    </p>

                    <a
                      href={WRITE_REVIEW_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-xl bg-anand-blue px-4 py-3 font-poppins text-xs font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,0.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
                    >
                      Write a Google Review
                      <ExternalLink size={14} strokeWidth={1.8} />
                    </a>

                    <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-400">
                      Scan the QR code or use the button
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom contact message */}
              <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                <div>
                  <p className="font-poppins text-sm font-semibold text-anand-navy">
                    Have a requirement?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Talk to Anand directly about your requirement.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-anand-blue transition-transform duration-200 hover:-translate-y-0.5"
                  aria-label="Contact Anand"
                >
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Review CTA */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:gap-4">
          <span className="text-sm text-slate-500">
            Already worked with Anand?
          </span>

          <a
            href={WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-poppins text-sm font-semibold text-anand-blue transition-colors hover:text-blue-700"
          >
            Share your experience
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}