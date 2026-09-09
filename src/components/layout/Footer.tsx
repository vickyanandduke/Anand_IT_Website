import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react';

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