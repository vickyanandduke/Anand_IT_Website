import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ananditconsultancy/',
    label: 'Follow Anand IT Consultancy on Instagram',
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61594327269268',
    label: 'Follow Anand IT Consultancy on Facebook',
  },
  {
    name: 'X',
    href: 'https://x.com/AnandITConsult',
    label: 'Follow Anand IT Consultancy on X',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/143890658/',
    label: 'Follow Anand IT Consultancy on LinkedIn',
  },
];

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M13.5 21v-8h2.75l.5-3h-3.25V8.05c0-.87.29-1.55 1.59-1.55h1.71V3.82c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.22 1.53-4.22 4.35V10H7.25v3H10v8h3.5Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[17px] w-[17px]"
      fill="currentColor"
    >
      <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.38L6.49 22H3.38l7.24-8.28L3 2h6.4l4.42 5.85L18.9 2Zm-1.1 17.88h1.73L8.48 4H6.62L17.8 19.88Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      fill="currentColor"
    >
      <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.35 9.3h3.7V21h-3.7V9.3ZM9.35 9.3h3.55v1.6h.05c.5-.95 1.75-1.95 3.6-1.95 3.85 0 4.55 2.53 4.55 5.82V21h-3.7v-5.52c0-1.32-.03-3.02-1.84-3.02-1.85 0-2.13 1.44-2.13 2.92V21h-3.7V9.3Z" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'Instagram') {
    return <InstagramIcon />;
  }

  if (name === 'Facebook') {
    return <FacebookIcon />;
  }

  if (name === 'X') {
    return <XIcon />;
  }

  return <LinkedInIcon />;
}

export default function Footer() {
  return (
    <footer className="bg-anand-navy text-white">
      <div className="anand-container">
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.25fr_0.7fr_0.7fr_0.7fr_1fr] lg:gap-8 lg:py-20">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <Image
                src="/logos/anand-logo-white.svg"
                alt="Anand IT Consultancy & GST Services"
                width={150}
                height={47}
                className="h-auto w-[150px]"
              />
            </Link>

            <p className="mt-6 text-sm leading-6 text-blue-100/70">
              Business, digital and government services under one roof.
              Practical solutions, clear communication and local support.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-blue-200/60">
              <span className="h-[2px] w-5 bg-anand-gold" />
              Business • Digital • Government
            </div>

            {/* Social Media */}
            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-200/60">
                Follow us
              </p>

              <div className="mt-3 flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-100/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-anand-gold/50 hover:bg-white/10 hover:text-white"
                  >
                    <SocialIcon name={social.name} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-poppins text-sm font-semibold text-white">
              Explore
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/services"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/solutions"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                Solutions
              </Link>

              <Link
                href="/about"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/blog"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins text-sm font-semibold text-white">
              Services
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/services"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                Digital Solutions
              </Link>

              <Link
                href="/services"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                GST &amp; Tax
              </Link>

              <Link
                href="/services"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                Government Services
              </Link>

              <Link
                href="/solutions"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                Business Solutions
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-poppins text-sm font-semibold text-white">
              Legal
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              <Link
                href="/privacy"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                Terms &amp; Conditions
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins text-sm font-semibold text-white">
              Get in touch
            </h3>

            <div className="mt-5 flex flex-col gap-4">
              <Link
                href="/contact"
                className="group flex items-start gap-3 text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                <MapPin
                  size={17}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-anand-gold"
                />

                <span>Visit Anand or connect with us online.</span>
              </Link>

              <a
                href="tel:+918004879928"
                className="group flex items-center gap-3 text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                <Phone
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-anand-gold"
                />

                <span>+91 80048 79928</span>
              </a>

              <a
                href="mailto:contact@anandconsultancy.co.in"
                className="group flex items-center gap-3 text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-anand-gold"
                />

                <span>contact@anandconsultancy.co.in</span>
              </a>

              <a
                href="https://wa.me/918004879928"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-blue-100/70 transition-colors duration-200 hover:text-white"
              >
                <MessageCircle
                  size={17}
                  strokeWidth={1.8}
                  className="shrink-0 text-anand-gold"
                />

                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-blue-100/50">
            © {new Date().getFullYear()} Anand IT Consultancy &amp; GST
            Services. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/contact"
              className="flex items-center gap-1 text-xs text-blue-100/50 transition-colors duration-200 hover:text-white"
            >
              Contact
              <ArrowUpRight size={13} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}