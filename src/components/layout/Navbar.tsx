'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navigation = [
  { label: 'Services', href: '/services' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="anand-container">
        <div className="flex h-[76px] items-center justify-between">
          {/* Brand Lockup */}
          <Link
            href="/"
            aria-label="Anand IT Consultancy & GST Services - Home"
            className="flex min-w-0 shrink-0 items-center"
            onClick={closeMobileMenu}
          >
            {/* Anand Logo */}
            <Image
              src="/logos/anand-logo.svg"
              alt="Anand"
              width={170}
              height={51}
              priority
              className="h-auto w-[145px] sm:w-[155px] lg:w-[165px]"
            />

            {/* Business Name */}
            <span
              className="
                -ml-2
                border-l border-slate-200
                pl-2
                font-poppins
                text-[12px]
                font-semibold
                leading-[1.15]
                tracking-[-0.01em]
                text-anand-navy

                sm:-ml-2
                sm:pl-2.5
                sm:text-[13px]

                lg:-ml-2.5
                lg:pl-2.5
                lg:text-[15px]
                lg:leading-none
              "
            >
              {/* Desktop: one line */}
              <span className="hidden lg:inline">
                IT Consultancy &amp; GST Services
              </span>

              {/* Mobile / Tablet: two lines */}
              <span className="block lg:hidden">
                IT Consultancy &amp;
              </span>
              <span className="block lg:hidden">
                GST Services
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative py-2 font-poppins text-[14px] font-medium text-slate-700 transition-colors duration-200 hover:text-anand-blue"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/contact"
              className="anand-button anand-button-primary ml-2 min-h-[44px] px-5"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={
              mobileMenuOpen
                ? 'Close navigation menu'
                : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-anand-navy transition-colors duration-200 hover:border-anand-blue hover:text-anand-blue lg:hidden"
          >
            {mobileMenuOpen ? (
              <X size={23} strokeWidth={2} />
            ) : (
              <Menu size={23} strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 py-5 lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="border-b border-slate-100 py-4 font-poppins text-[15px] font-medium text-slate-700 transition-colors duration-200 hover:text-anand-blue"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="anand-button anand-button-primary mt-5 w-full"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}