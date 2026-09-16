import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  MapPin,
  MessageCircle,
} from 'lucide-react';

const ARTICLE_URL =
  'https://anandconsultancy.co.in/blog/why-every-business-in-madhepura-needs-an-online-presence';

export const metadata: Metadata = {
  title:
    'Why Every Business in Madhepura, Bihar Needs an Online Presence | Anand Consultancy',
  description:
    'A practical guide for businesses in Madhepura and Bihar on websites, business email, digital identity, IT solutions, GST support and building a professional online presence.',
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'Why Every Business in Madhepura, Bihar Needs an Online Presence',
    description:
      'From a local business to a business customers can find online — a practical guide for businesses in Madhepura and Bihar.',
    url: ARTICLE_URL,
    type: 'article',
    siteName: 'Anand IT Consultancy & GST Services',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Why Every Business in Madhepura, Bihar Needs an Online Presence',
    description:
      'A practical guide for businesses in Madhepura and Bihar on building a professional online presence.',
  },
};

const businessWebsiteItems = [
  'Business name and introduction',
  'Main products or services',
  'Address and service area',
  'Phone/WhatsApp or enquiry details',
  'Business email',
  'Working hours, where relevant',
  'Basic company/business information',
  'Relevant registrations or credentials, where appropriate',
  'Frequently requested information',
  'A simple enquiry/contact section',
];

const websiteWhatsAppRows = [
  {
    website: 'Public business information can be organised in one place.',
    whatsapp: 'Primarily a communication channel.',
  },
  {
    website: 'Business profile, services, location and contact information can remain available.',
    whatsapp: 'Information can become scattered across chats.',
  },
  {
    website: 'Can be accessed without first having a personal conversation.',
    whatsapp: 'Usually depends on a message or contact being initiated.',
  },
  {
    website: 'Can support a formal business identity.',
    whatsapp:
      'Excellent for direct customer communication, but not always sufficient as the business’s only digital identity.',
  },
];

const businessProblemRows = [
  {
    problem: 'Customers cannot find reliable business information.',
    solution: 'Professional website with clear business details.',
  },
  {
    problem: 'Business communication looks inconsistent.',
    solution: 'Domain-based business email.',
  },
  {
    problem: 'Information is scattered across messages and documents.',
    solution: 'Suitable business application or organised digital workflow.',
  },
  {
    problem: 'Business documentation is difficult to manage.',
    solution: 'Structured documentation and compliance support.',
  },
  {
    problem: 'Business wants to respond to tenders/opportunities.',
    solution: 'Organised records and tender/documentation support.',
  },
];

const serviceStages = [
  {
    stage: '1',
    need: 'Digital Identity',
    businessNeed:
      'Business needs an official online identity.',
    help: 'Domain and professional website setup.',
  },
  {
    stage: '2',
    need: 'Business Communication',
    businessNeed: 'Business needs formal communication.',
    help: 'Business email setup and digital communication foundation.',
  },
  {
    stage: '3',
    need: 'Information',
    businessNeed: 'Customers and partners need clear information.',
    help: 'Website structure, business profile, services/products and contact information.',
  },
  {
    stage: '4',
    need: 'Operations',
    businessNeed: 'Business needs suitable technology.',
    help: 'Business applications and IT solutions based on actual requirements.',
  },
  {
    stage: '5',
    need: 'Business Foundation',
    businessNeed: 'Business needs organised documentation and statutory support.',
    help: 'Relevant GST, business documentation and compliance support.',
  },
  {
    stage: '6',
    need: 'Growth Readiness',
    businessNeed: 'Business wants to respond to opportunities.',
    help: 'Support with relevant business documentation and tender-related processes.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Why Every Business in Madhepura, Bihar Needs an Online Presence',
  description:
    'A practical guide for new and existing businesses in Madhepura and Bihar.',
  url: ARTICLE_URL,
  datePublished: '2026-09-16',
  dateModified: '2026-09-16',
  author: {
    '@type': 'Organization',
    name: 'Anand IT Consultancy & GST Services',
    url: 'https://anandconsultancy.co.in',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Anand IT Consultancy & GST Services',
    url: 'https://anandconsultancy.co.in',
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': ARTICLE_URL,
  },
};

export default function MadhepuraOnlinePresenceArticle() {
  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      {/* Article Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-slate-50/70">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/4 h-80 w-80 rounded-full bg-amber-100/40 blur-3xl"
        />

        <div className="anand-container relative py-16 sm:py-20 lg:py-24">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-poppins text-sm font-medium text-slate-500 transition-colors hover:text-anand-blue"
          >
            <ArrowLeft size={16} strokeWidth={1.8} />
            Back to Blog
          </Link>

          <div className="mt-10 max-w-4xl">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                Anand Insights • Business
              </span>
            </div>

            <h1 className="mt-5 font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-anand-navy sm:text-5xl lg:text-[60px]">
              Why Every Business in Madhepura, Bihar Needs an Online Presence
            </h1>

            <p className="mt-6 max-w-3xl font-poppins text-lg font-medium leading-8 text-slate-600 sm:text-xl">
              From a Local Business to a Business Customers Can Find Online
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              A practical guide for new and existing businesses in Madhepura
              and Bihar.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-400">
              <span>Published September 16, 2026</span>
              <span className="hidden sm:inline">•</span>
              <span>Business</span>
              <span className="hidden sm:inline">•</span>
              <span>8–10 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article */}
      <article className="anand-container py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Introduction */}
          <section>
            <p className="text-lg leading-8 text-slate-600 sm:text-xl">
              A business can have a good product, reasonable pricing and years
              of local experience, but if customers cannot easily find
              reliable information about it online, the business can miss
              opportunities. This is increasingly relevant in Madhepura and
              across Bihar, where internet access and digital use have
              expanded significantly.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Having an online presence does not mean that every business needs
              to become a digital-marketing company or spend heavily on online
              advertising. For many businesses, the first step is much simpler:
              create a professional digital identity, make important business
              information available online, and use suitable technology to
              make the business easier to understand, contact and operate.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              This is where Anand Consultancy can help. Our focus is on the
              practical business foundation behind an online presence—website
              development, domain and business email setup, business
              applications and IT solutions, along with relevant business,
              GST, documentation and compliance support.
            </p>
          </section>

          {/* 1 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading number="1" title="The Numbers Tell the Story" />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              India&apos;s digital market is no longer limited to large cities.
              According to DataReportal&apos;s Digital 2025 India report, India
              had about 806 million internet users at the beginning of 2025,
              representing 55.3% internet penetration. The same report
              estimated that 62.9% of India&apos;s population lived in rural
              areas.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Government data also shows the scale of connectivity outside
              major urban centres. The Press Information Bureau reported
              969.10 million internet subscribers in India in March 2025,
              including 407.69 million rural internet subscribers.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              For younger users in rural India, digital access is particularly
              significant. The Government&apos;s Comprehensive Modular Survey:
              Telecom 2025 reported that 92.7% of rural people aged 15–29 had
              used the internet at least once during the previous three months.
            </p>

            <InfoBox>
              These figures do not mean that every internet user is looking for
              every type of business online. They do show something important
              for a local entrepreneur: the customer base is increasingly
              connected, and a business should not assume that being known
              locally is enough for every future customer.
            </InfoBox>
          </section>

          {/* 2 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="2"
              title="Madhepura Is Not Outside the Digital Economy"
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Madhepura already has a broad base of small businesses and
              entrepreneurs. A Government of India MSME dashboard lists 7,602
              Udyog Aadhaar registrations for Madhepura in the relevant
              district-wise dataset.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Recent Bihar government entrepreneurship programme records also
              show the variety of businesses being established in the district,
              including IT/business centres, flour and spice manufacturing,
              bakery products, notebook and file manufacturing, furniture,
              restaurants, hotels and dhabas, LED products, feed businesses
              and makhana-related activities.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              This matters because online presence is not only for restaurants,
              e-commerce companies or technology startups. A manufacturer,
              coaching centre, local shop, professional, service provider or
              traditional family business can all benefit from having accurate
              business information available online.
            </p>
          </section>

          {/* 3 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="3"
              title="What Happens When Two Similar Businesses Are Compared?"
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Consider two businesses in Madhepura offering similar products.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-2 bg-slate-50">
                <div className="border-r border-slate-200 p-4 font-poppins text-sm font-semibold text-anand-navy sm:p-5">
                  Business A – Offline Only
                </div>
                <div className="p-4 font-poppins text-sm font-semibold text-anand-navy sm:p-5">
                  Business B – Physical + Digital Foundation
                </div>
              </div>

              {[
                [
                  'Customers mainly depend on local knowledge and referrals.',
                  'Customers can find basic business information online as well as locally.',
                ],
                [
                  'Business information may be available only during working hours.',
                  'Website can provide basic information 24/7.',
                ],
                [
                  'Customers may need to call to ask location, services or contact details.',
                  'Website can clearly display location, services, contact details and enquiry options.',
                ],
                [
                  'A new customer may have difficulty judging whether the business is established.',
                  'A professional website and business email can create a more structured first impression.',
                ],
                [
                  'Expansion outside the immediate locality may be harder to support digitally.',
                  'Digital identity gives the business a foundation for serving customers beyond its immediate area.',
                ],
              ].map(([offline, digital], index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 border-t border-slate-200"
                >
                  <div className="border-r border-slate-200 p-4 text-sm leading-6 text-slate-600 sm:p-5">
                    {offline}
                  </div>
                  <div className="p-4 text-sm leading-6 text-slate-600 sm:p-5">
                    {digital}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              The comparison is not a promise that Business B will
              automatically get more sales. It illustrates a difference in
              accessibility. A digital presence can reduce the effort required
              for a potential customer, supplier or business partner to
              understand and contact the business.
            </p>
          </section>

          {/* 4 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="4"
              title="Practical Examples for Madhepura Businesses"
            />

            <Example
              title="Example 1: A Traditional Shop"
              paragraphs={[
                'Suppose a long-established electrical or hardware shop in Madhepura has a strong local reputation. A customer from another part of the district hears about the shop but wants to check its location, product categories and contact number before travelling.',
                'Without an online presence, the customer may depend on someone else’s phone number or recommendation. With a basic website, the business can present its name, address, phone number, working hours, product categories and enquiry details in one place.',
                'Anand Consultancy can help create this basic digital business identity without turning the shop into an unnecessary complex technology project.',
              ]}
            />

            <Example
              title="Example 2: A New Coaching Institute"
              paragraphs={[
                'A newly established coaching institute needs to explain its courses, batches, faculty information, location, admission enquiry process and contact details. A website gives parents and students one official place to check this information.',
                'Instead of depending entirely on individual messages, printed notices or forwarded information, the institute can maintain a central source of current information. The website can also be updated when courses, schedules or contact details change.',
              ]}
            />

            <Example
              title="Example 3: A Manufacturer"
              paragraphs={[
                'Consider a small manufacturer producing spices, bakery products, furniture, paper products or another locally made product. Its immediate customers may be local, but potential buyers, distributors or suppliers can come from outside Madhepura.',
                'A professional website can show the business profile, product categories, manufacturing capabilities, location and contact details. This does not replace sales staff or business development, but it provides a credible digital reference when someone wants to learn more about the company.',
              ]}
            />

            <Example
              title="Example 4: A Professional or Consultant"
              paragraphs={[
                'For a consultant or professional service provider, trust and clarity are especially important. A website can explain the services offered, professional background, office/contact information and enquiry process.',
                'A business email using the firm’s domain can also present a more formal business identity than relying on a personal email address.',
              ]}
            />
          </section>

          {/* 5 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="5"
              title="Why a Website Is Different From WhatsApp"
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              WhatsApp is useful for communication, but it is not a complete
              replacement for a business website. A message is normally sent
              to a specific person or group, while a website can act as a
              central public information point.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-2 bg-slate-50">
                <div className="border-r border-slate-200 p-4 font-poppins text-sm font-semibold text-anand-navy sm:p-5">
                  Website
                </div>
                <div className="p-4 font-poppins text-sm font-semibold text-anand-navy sm:p-5">
                  WhatsApp
                </div>
              </div>

              {websiteWhatsAppRows.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 border-t border-slate-200"
                >
                  <div className="border-r border-slate-200 p-4 text-sm leading-6 text-slate-600 sm:p-5">
                    {row.website}
                  </div>
                  <div className="p-4 text-sm leading-6 text-slate-600 sm:p-5">
                    {row.whatsapp}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="6"
              title="Why a Website Is Different From Social Media"
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Social media can be useful for communication and public updates,
              but a business should not depend entirely on a third-party
              platform for its core identity. A website is a business-owned
              digital asset under the business&apos;s own domain.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              For a local business, the practical approach can be simple: use
              the website as the official information point and use other
              communication channels where they are genuinely useful. There is
              no requirement to become highly active on every social platform.
            </p>
          </section>

          {/* 7 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="7"
              title="What Anand Consultancy Actually Does"
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Anand Consultancy focuses on building the practical business and
              digital foundation that a local enterprise needs. The exact
              requirement depends on the business; not every client needs
              every service.
            </p>

            <ServiceBlock
              title="Website Development"
              paragraphs={[
                'We help businesses establish a professional website that can present essential information such as:',
              ]}
              list={[
                'Business profile and introduction',
                'Products or services',
                'Address and contact information',
                'Enquiry/contact options',
                'Business-related documents or information where appropriate',
                'Basic information that customers, suppliers or partners may need',
              ]}
              footer="The objective is not to build a complicated website simply because technology is available. The objective is to build a useful online reference for the business."
            />

            <ServiceBlock
              title="Domain Setup and Business Email"
              paragraphs={[
                'A domain gives a business a dedicated web identity. A domain-based business email can make communication look more structured and professional.',
                'For example, instead of depending only on a generic personal email address, a business can use an address connected to its own domain. This can be particularly useful for quotations, vendor communication, formal enquiries and business documentation.',
              ]}
            />

            <ServiceBlock
              title="Business Applications and IT Solutions"
              paragraphs={[
                'Different businesses have different operational problems. A shop may need better record management; a service provider may need an organised enquiry or client workflow; another business may need a customised business application.',
                'We can help identify the practical technology requirement and support the business in implementing an appropriate IT solution rather than recommending technology without a business purpose.',
              ]}
            />

            <ServiceBlock
              title="GST and Business-Related Support"
              paragraphs={[
                'A digital presence should not be separated from the underlying business structure. Businesses may also need support relating to GST and other business documentation or government processes.',
                'Anand Consultancy can assist with relevant business and GST-related requirements so that the digital identity is connected to a properly organised business foundation.',
              ]}
            />

            <ServiceBlock
              title="Business Documentation and Compliance Support"
              paragraphs={[
                'As a business grows, documentation becomes increasingly important. Depending on the nature of the enterprise, this can include business records, agreements, applications and compliance-related documentation.',
                'Our role is to help the business organise these requirements in a practical way and reduce avoidable confusion in routine business processes.',
              ]}
            />

            <ServiceBlock
              title="Contract and Agreement Support"
              paragraphs={[
                'Businesses regularly deal with customers, suppliers, service providers, employees, partners and other organisations. Written agreements can help clearly define responsibilities, payment terms, scope of work and other commercial conditions.',
                'Where contract or agreement support is required, Anand Consultancy can assist with appropriate business documentation and coordination.',
              ]}
            />

            <ServiceBlock
              title="Tender and Business Opportunity Support"
              paragraphs={[
                'For businesses interested in government or private tender opportunities, proper documentation and timely submission can be important. A business that has organised digital records, documents and basic business information is better positioned to respond when an opportunity arises.',
              ]}
            />
          </section>

          {/* 8 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="8"
              title="How These Services Work Together"
            />

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <div className="hidden grid-cols-[80px_1fr_1.3fr_1.3fr] bg-slate-50 text-sm font-semibold text-anand-navy md:grid">
                <div className="border-r border-slate-200 p-4">Stage</div>
                <div className="border-r border-slate-200 p-4">
                  Business Need
                </div>
                <div className="border-r border-slate-200 p-4">
                  Business Requirement
                </div>
                <div className="p-4">How We Can Help</div>
              </div>

              {serviceStages.map((item) => (
                <div
                  key={item.stage}
                  className="border-t border-slate-200 md:grid md:grid-cols-[80px_1fr_1.3fr_1.3fr]"
                >
                  <div className="border-b border-slate-200 bg-slate-50/60 p-4 font-poppins text-sm font-semibold text-anand-blue md:border-b-0 md:border-r">
                    Stage {item.stage}
                  </div>

                  <div className="border-b border-slate-200 p-4 md:border-b-0 md:border-r">
                    <p className="font-poppins text-sm font-semibold text-anand-navy">
                      {item.need}
                    </p>
                  </div>

                  <div className="border-b border-slate-200 p-4 text-sm leading-6 text-slate-600 md:border-b-0 md:border-r">
                    {item.businessNeed}
                  </div>

                  <div className="p-4 text-sm leading-6 text-slate-600">
                    {item.help}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="9"
              title="A Practical Cost-Benefit Illustration"
            />

            <div className="mt-7 rounded-3xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-anand-blue shadow-sm">
                  <FileText size={21} strokeWidth={1.8} />
                </div>

                <p className="text-base leading-7 text-slate-700 sm:text-lg">
                  Suppose a business invests ₹10,000 in a basic professional
                  website and related digital setup and uses it for five years.
                  Ignoring hosting renewals, future changes and other costs,
                  the initial investment works out to approximately ₹2,000 per
                  year, or about ₹167 per month.
                </p>
              </div>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              This is only an illustration—not a quotation from Anand
              Consultancy and not a promise of sales or return on investment.
              The point is to look at a website as a long-term business asset
              rather than only as a one-time expense.
            </p>
          </section>

          {/* 10 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="10"
              title="Online Presence Is Also About Trust"
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              When a person hears about an unfamiliar business, they often
              want basic answers before making contact: What does the business
              do? Where is it located? How can I contact it? What products or
              services does it offer? Is the information clear and consistent?
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              A professional website cannot guarantee trust or sales, but it
              can make the business easier to evaluate. Accurate information,
              clear contact details and a consistent business identity can
              support a more professional first impression.
            </p>
          </section>

          {/* 11 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="11"
              title="What Should a Madhepura Business Put on Its Website?"
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              A local business does not necessarily need a large website. A
              practical starting structure can include:
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {businessWebsiteItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-anand-blue"
                  />

                  <span className="text-sm leading-6 text-slate-600">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
              The content should be accurate, easy to understand and regularly
              updated. A small useful website is better than a large website
              containing outdated information.
            </p>
          </section>

          {/* 12 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="12"
              title="Start With the Problem, Not the Technology"
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              One of the biggest mistakes small businesses can make is buying
              technology first and deciding later what to do with it. The
              better approach is to start with the business problem.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-2 bg-slate-50">
                <div className="border-r border-slate-200 p-4 font-poppins text-sm font-semibold text-anand-navy sm:p-5">
                  Business Problem
                </div>
                <div className="p-4 font-poppins text-sm font-semibold text-anand-navy sm:p-5">
                  Possible Practical Solution
                </div>
              </div>

              {businessProblemRows.map((row) => (
                <div
                  key={row.problem}
                  className="grid grid-cols-2 border-t border-slate-200"
                >
                  <div className="border-r border-slate-200 p-4 text-sm leading-6 text-slate-600 sm:p-5">
                    {row.problem}
                  </div>
                  <div className="p-4 text-sm leading-6 text-slate-600 sm:p-5">
                    {row.solution}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 13 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="13"
              title="A Simple Digital Journey for a Madhepura Business"
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              A business does not have to digitise everything at once. A
              practical sequence can be:
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              {[
                'Physical Business',
                'Digital Identity',
                'Website + Domain',
                'Business Email',
                'Useful Business Applications',
                'Organised Documentation',
                'Expansion When Required',
              ].map((item, index, items) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="rounded-xl bg-white px-4 py-3 text-center font-poppins text-xs font-semibold text-anand-navy shadow-sm sm:text-sm">
                    {item}
                  </span>

                  {index < items.length - 1 && (
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      className="text-anand-gold"
                    />
                  )}
                </div>
              ))}
            </div>

            <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
              This approach allows a small business to start with the
              essentials and add technology as its needs grow.
            </p>
          </section>

          {/* 14 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading number="14" title="The Bigger Picture for Bihar" />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              The direction of India&apos;s MSME ecosystem is also becoming more
              digital. The Government reported in March 2026 that it is
              monitoring MSME digital adoption across areas including
              e-commerce, digital accounting, supply-chain digitisation, GeM
              and ONDC. As of December 31, 2025, around 206,000 merchants had
              recorded at least one ONDC transaction, while approximately six
              lakh service providers were available on the network.
            </p>

            <InfoBox>
              This does not mean every Madhepura business must immediately join
              every digital platform. It means businesses should increasingly
              think about digital readiness as part of ordinary business
              planning.
            </InfoBox>
          </section>

          {/* 15 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading number="15" title="Why Anand Consultancy?" />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Anand Consultancy takes a practical, business-first approach. We
              do not believe that every business needs an expensive website,
              complicated software or unnecessary technology.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Our aim is to understand the business, identify the actual
              requirement and then help establish the appropriate digital and
              business foundation. For a small local enterprise, that may
              begin with a website and business email. For another business, it
              may involve a website plus business applications, documentation,
              GST-related support or other business processes.
            </p>

            <div className="mt-7 rounded-3xl bg-anand-navy p-7 sm:p-9">
              <p className="font-poppins text-xl font-semibold leading-8 text-white sm:text-2xl">
                The focus is simple: technology should solve a business
                problem, not create another one.
              </p>
            </div>
          </section>

          {/* 16 */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <SectionHeading
              number="16"
              title="Your Business Has Already Built Its Reputation. Now Build Its Digital Identity."
            />

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              Madhepura has businesses that have been serving local customers
              for years, as well as new entrepreneurs entering manufacturing,
              services, education, retail, hospitality and other sectors. The
              next step for many of these businesses is not necessarily
              aggressive online advertising. It is simply making the business
              professionally visible and digitally accessible.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
              A website, domain, business email and suitable IT tools can form
              the foundation. GST, documentation, compliance and
              business-process support can help strengthen the foundation
              behind it.
            </p>
          </section>

          {/* Final Thought */}
          <section className="mt-16 border-t border-slate-200 pt-14 sm:mt-20">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-10">
              <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                Final Thought
              </p>

              <p className="mt-5 text-xl font-medium leading-9 text-anand-navy sm:text-2xl">
                The question for a business today is not whether it should
                become a technology company. The better question is:
              </p>

              <p className="mt-5 font-poppins text-2xl font-semibold leading-9 tracking-[-0.02em] text-anand-navy sm:text-3xl">
                Can a customer, supplier or potential business partner easily
                find accurate information about us and understand how to
                contact or work with us?
              </p>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                For many businesses in Madhepura and Bihar, the answer can
                begin with a simple and professional online presence supported
                by the right business services.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-14 overflow-hidden rounded-3xl bg-anand-navy">
            <div className="relative p-7 sm:p-10 lg:p-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl"
              />

              <div className="relative">
                <p className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-gold">
                  Need help building your digital identity?
                </p>

                <h2 className="mt-3 max-w-2xl font-poppins text-3xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-4xl">
                  Let&apos;s build the right digital foundation for your
                  business.
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Tell us what your business needs. We&apos;ll help you identify
                  the practical next step.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="anand-button anand-button-primary"
                  >
                    Get a Consultation
                    <ArrowUpRight size={17} strokeWidth={2} />
                  </Link>

                  <a
                    href="https://wa.me/918004879928"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-poppins text-sm font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/15"
                  >
                    <MessageCircle size={17} strokeWidth={1.8} />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sources */}
          <section className="mt-14 border-t border-slate-200 pt-10">
            <div className="flex items-center gap-2">
              <MapPin
                size={17}
                strokeWidth={1.8}
                className="text-anand-gold"
              />

              <h2 className="font-poppins text-sm font-semibold text-anand-navy">
                Data Sources
              </h2>
            </div>

            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-500">
              <li>
                • DataReportal, Digital 2025: India — internet users and
                penetration data.
              </li>
              <li>
                • Press Information Bureau, Government of India — internet
                subscriber and rural subscriber data, July 2025.
              </li>
              <li>
                • Press Information Bureau, Government of India —
                Comprehensive Modular Survey: Telecom 2025, May 2025.
              </li>
              <li>
                • Ministry of MSME dashboard — district-wise Udyog Aadhaar
                registration data.
              </li>
              <li>
                • Bihar Department of Industries — CM EBC Udyami Yojana
                FY 2025–26 provisional project list.
              </li>
              <li>
                • Press Information Bureau, Government of India — MSME digital
                adoption / ONDC update, March 2026.
              </li>
            </ul>

            <p className="mt-6 text-xs leading-5 text-slate-400">
              Information and figures in this article are presented for
              general informational purposes. Government datasets and
              programme figures may relate to specific reporting periods or
              provisional datasets.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-anand-navy font-poppins text-xs font-semibold text-white">
          {number}
        </span>

        <span className="h-[2px] w-6 bg-anand-gold" />
      </div>

      <h2 className="mt-5 font-poppins text-2xl font-semibold leading-[1.2] tracking-[-0.025em] text-anand-navy sm:text-3xl lg:text-[38px]">
        {title}
      </h2>
    </div>
  );
}

function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50/60 p-5 sm:p-6">
      <p className="text-sm leading-7 text-slate-600 sm:text-base">
        {children}
      </p>
    </div>
  );
}

function Example({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="mt-9">
      <h3 className="font-poppins text-lg font-semibold text-anand-navy sm:text-xl">
        {title}
      </h3>

      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-4 text-base leading-8 text-slate-600 sm:text-lg"
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function ServiceBlock({
  title,
  paragraphs,
  list,
  footer,
}: {
  title: string;
  paragraphs: string[];
  list?: string[];
  footer?: string;
}) {
  return (
    <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
      <h3 className="font-poppins text-xl font-semibold tracking-[-0.02em] text-anand-navy">
        {title}
      </h3>

      {paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-4 text-base leading-8 text-slate-600 sm:text-lg"
        >
          {paragraph}
        </p>
      ))}

      {list && (
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {list.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2
                size={18}
                strokeWidth={1.8}
                className="mt-1 shrink-0 text-anand-blue"
              />

              <span className="text-sm leading-6 text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {footer && (
        <p className="mt-5 border-t border-slate-100 pt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {footer}
        </p>
      )}
    </div>
  );
}