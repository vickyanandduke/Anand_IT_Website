'use client';

import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';

const GOOGLE_MAPS_URL =
  'https://maps.app.goo.gl/vGFTZr1qEY1pxPj77';

const GET_DIRECTIONS_URL =
  'https://maps.app.goo.gl/772BYZ4ZfK4QZMp39';

const BUSINESS_ADDRESS =
  'NH 107, East of, Chandani Chowk Rd, near MP Collage, Bhadol, Bhdol Budhma, Bihar 852114';

const services = [
  'Website Design',
  'Business Applications',
  'Digital Solutions',
  'IT Support',
  'GST Registration',
  'GST Returns',
  'Income Tax',
  'Compliance Support',
  'CSC Services',
  'Online Applications',
  'Citizen Services',
  'Printing & Documentation',
  'Other',
];

const contactDetails = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 80048 79928',
    href: 'tel:+918004879928',
    description: 'Speak directly with us',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'contact@anandconsultancy.co.in',
    href: 'mailto:contact@anandconsultancy.co.in',
    description: 'Send us your requirements',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Bhdol Budhma, Bihar',
    href: '#location',
    description: 'Our local service point',
  },
];

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setSubmitted(false);
    setErrorMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitted(false);
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      /*
       * First send the enquiry to our Next.js API.
       * The API then sends the email through Resend.
       */
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Unable to send your enquiry right now.'
        );
      }

      /*
       * Email was successfully sent.
       * Now prepare the same enquiry for WhatsApp.
       */
      const whatsappMessage = [
        'Hello Anand IT Consultancy & GST Services,',
        '',
        `Name: ${formData.name}`,
        `Phone: ${formData.phone}`,
        formData.email ? `Email: ${formData.email}` : '',
        `Service Required: ${formData.service || 'Not specified'}`,
        '',
        'Requirement:',
        formData.message,
      ]
        .filter(Boolean)
        .join('\n');

      const whatsappUrl = `https://wa.me/918004879928?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      setSubmitted(true);

      /*
       * Open WhatsApp after the email has been successfully sent.
       */
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      /*
       * Reset the form after successful submission.
       */
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('Contact form submission error:', error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Contact Hero */}
      <section className="relative overflow-hidden bg-slate-50">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-blue-100/60 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-amber-50 blur-3xl"
        />

        <div className="anand-container relative">
          <div className="max-w-4xl py-20 sm:py-24 lg:py-28">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-anand-gold" />

              <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                Contact Anand
              </span>
            </div>

            <h1 className="mt-5 max-w-4xl font-poppins text-4xl font-semibold leading-[1.08] tracking-[-0.035em] text-anand-navy sm:text-5xl lg:text-[60px]">
              Stuck somewhere?
              <br />
              <span className="text-anand-blue">Come here.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Tell us what you are trying to get done. Whether it is business
              technology, GST & Income Tax, government services or everyday
              digital work, Anand can help you find the right way forward.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="anand-button anand-button-primary min-h-[52px] px-6"
              >
                Send an Enquiry
                <ArrowRight size={18} strokeWidth={2} />
              </a>

              <a
                href="https://wa.me/918004879928"
                target="_blank"
                rel="noopener noreferrer"
                className="anand-button anand-button-secondary min-h-[52px] px-6"
              >
                <MessageCircle size={18} strokeWidth={2} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="anand-container">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {contactDetails.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(15,35,70,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,35,70,0.08)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-anand-blue transition-colors duration-200 group-hover:bg-anand-blue group-hover:text-white">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <p className="font-poppins text-sm font-semibold text-anand-navy">
                        {item.title}
                      </p>

                      <p className="mt-1 break-words text-sm font-medium text-slate-700">
                        {item.value}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form + Side Information */}
      <section
        id="contact-form"
        className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl"
        />

        <div className="anand-container relative">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Form */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_12px_40px_rgba(15,35,70,0.05)] sm:p-8 lg:p-10">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-anand-gold" />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                  Send an Enquiry
                </span>
              </div>

              <h2 className="mt-4 font-poppins text-3xl font-semibold leading-tight tracking-[-0.03em] text-anand-navy sm:text-4xl">
                Tell us what you need.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Share a few details and we will help you understand the next
                steps. Your enquiry will be sent to our email and can also be
                continued directly on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {/* Name + Phone */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="font-poppins text-sm font-semibold text-anand-navy"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-anand-navy outline-none transition-all placeholder:text-slate-400 focus:border-anand-blue focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="font-poppins text-sm font-semibold text-anand-navy"
                    >
                      Mobile Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter mobile number"
                      className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-anand-navy outline-none transition-all placeholder:text-slate-400 focus:border-anand-blue focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="font-poppins text-sm font-semibold text-anand-navy"
                  >
                    Email Address
                    <span className="ml-1 font-normal text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-anand-navy outline-none transition-all placeholder:text-slate-400 focus:border-anand-blue focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="font-poppins text-sm font-semibold text-anand-navy"
                  >
                    What do you need help with?
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="mt-2 h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 text-sm text-anand-navy outline-none transition-all focus:border-anand-blue focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="">Select a service</option>

                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="font-poppins text-sm font-semibold text-anand-navy"
                  >
                    Tell us about your requirement
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe what you are trying to get done..."
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-anand-navy outline-none transition-all placeholder:text-slate-400 focus:border-anand-blue focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="anand-button anand-button-primary min-h-[52px] w-full px-6 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                >
                  <Send
                    size={17}
                    strokeWidth={2}
                    className={isSubmitting ? 'animate-pulse' : ''}
                  />

                  {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                </button>

                {/* Success Message */}
                {submitted && (
                  <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                    <CheckCircle2
                      size={19}
                      strokeWidth={1.8}
                      className="mt-0.5 shrink-0 text-emerald-600"
                    />

                    <div>
                      <p className="text-sm font-semibold text-emerald-700">
                        Enquiry sent successfully.
                      </p>

                      <p className="mt-1 text-sm leading-6 text-emerald-700">
                        We have received your enquiry by email. WhatsApp should
                        also have opened in a new tab/window.
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {errorMessage && (
                  <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-4">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                      !
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-red-700">
                        Unable to send enquiry
                      </p>

                      <p className="mt-1 text-sm leading-6 text-red-600">
                        {errorMessage}
                      </p>
                    </div>
                  </div>
                )}

                <p className="text-xs leading-5 text-slate-400">
                  Your enquiry is sent securely to Anand Consultancy. We will
                  use the details you provide only to respond to your request.
                </p>
              </form>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-anand-gold" />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                  Why Contact Anand?
                </span>
              </div>

              <h2 className="mt-4 max-w-xl font-poppins text-3xl font-semibold leading-[1.15] tracking-[-0.03em] text-anand-navy sm:text-4xl lg:text-[44px]">
                One conversation can save you a lot of running around.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
                You do not always need to know exactly which service you need.
                Tell us the problem, requirement or task — we can help you
                identify the right service and what to do next.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-3">
                {[
                  'Multiple services under one roof',
                  'Practical support for businesses and individuals',
                  'Technology, GST, tax and government services',
                  'One convenient point of contact',
                ].map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-anand-blue">
                      <CheckCircle2 size={18} strokeWidth={1.8} />
                    </div>

                    <p className="text-sm font-medium text-slate-700">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>

              {/* Response Card */}
              <div className="mt-6 rounded-2xl bg-anand-navy p-5 text-white sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                    <Clock3 size={20} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="font-poppins text-sm font-semibold">
                      Need a quick response?
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      WhatsApp us directly and tell us what you are trying to
                      get done.
                    </p>

                    <a
                      href="https://wa.me/918004879928"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-white"
                    >
                      Start a WhatsApp chat
                      <ArrowUpRight size={16} strokeWidth={2} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Visit */}
      <section id="location" className="bg-white py-20 sm:py-24">
        <div className="anand-container">
          <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Location Details */}
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="flex items-center gap-2">
                <span className="h-[2px] w-6 bg-anand-gold" />

                <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-anand-blue">
                  Visit Anand
                </span>
              </div>

              <h2 className="mt-4 font-poppins text-3xl font-semibold leading-tight tracking-[-0.03em] text-anand-navy sm:text-4xl">
                Prefer to talk in person?
              </h2>

              <p className="mt-4 max-w-lg text-base leading-7 text-slate-500">
                If you are nearby, you can visit our service point in Bhdol
                Budhma. For directions or to confirm availability, contact us
                before visiting.
              </p>

              <div className="mt-7 flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-anand-blue shadow-sm ring-1 ring-slate-200">
                  <MapPin size={21} strokeWidth={1.8} />
                </div>

                <div>
                  <p className="font-poppins text-sm font-semibold text-anand-navy">
                    Anand IT Consultancy & GST Services
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    {BUSINESS_ADDRESS}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={GET_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anand-button anand-button-primary min-h-[48px] px-5"
                >
                  <MapPin size={17} strokeWidth={2} />
                  Get Directions
                  <ArrowUpRight size={15} strokeWidth={2} />
                </a>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anand-button anand-button-secondary min-h-[48px] px-5"
                >
                  <MapPin size={17} strokeWidth={2} />
                  View on Google Maps
                  <ArrowUpRight size={15} strokeWidth={2} />
                </a>
              </div>

              <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                <a
                  href="tel:+918004879928"
                  className="anand-button anand-button-primary min-h-[48px] px-5"
                >
                  <Phone size={17} strokeWidth={2} />
                  Call Us
                </a>

                <a
                  href="https://wa.me/918004879928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anand-button anand-button-secondary min-h-[48px] px-5"
                >
                  <MessageCircle size={17} strokeWidth={2} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative min-h-[320px] overflow-hidden bg-anand-navy lg:min-h-full">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                  backgroundSize: '42px 42px',
                }}
              />

              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
              />

              <div
                aria-hidden="true"
                className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
              />

              <div className="relative flex h-full min-h-[320px] items-center justify-center p-8">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Anand IT Consultancy & GST Services on Google Maps"
                  className="group block w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.10] hover:shadow-[0_20px_60px_rgba(0,0,0,0.20)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 transition-colors duration-200 group-hover:bg-blue-500/25">
                    <MapPin size={23} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-5 font-poppins text-xl font-semibold text-white">
                    Bhdol Budhma, Bihar
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Anand IT Consultancy & GST Services
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    {BUSINESS_ADDRESS}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors group-hover:text-white">
                    Open in Google Maps
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="anand-container">
          <div className="relative overflow-hidden rounded-[28px] bg-anand-navy px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="h-[2px] w-6 bg-anand-gold" />

                  <span className="font-poppins text-xs font-semibold uppercase tracking-[0.16em] text-blue-300">
                    Let&apos;s Get Started
                  </span>
                </div>

                <h2 className="mt-4 font-poppins text-3xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-4xl">
                  Have something you need to get done?
                </h2>

                <p className="mt-4 text-base leading-7 text-slate-300">
                  Tell Anand what you need. We will help you figure out the
                  right service and the next step.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <a
                  href="https://wa.me/918004879928"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="anand-button min-h-[50px] bg-white px-5 font-poppins text-sm font-semibold text-anand-navy transition-all duration-200 hover:bg-blue-50"
                >
                  <MessageCircle size={17} strokeWidth={2} />
                  WhatsApp Us
                </a>

                <a
                  href="tel:+918004879928"
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-5 font-poppins text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10"
                >
                  <Phone size={17} strokeWidth={2} />
                  Call Anand
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}