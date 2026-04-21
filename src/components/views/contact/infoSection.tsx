"use client";

import { useState } from "react";
import { Subtitle } from "@/components/reusable/subtitle";

const infoCards = [
  {
    title: "Address",
    content: "2047 Cyrus Viaduct East Jadynchester",
    icon: (
      <svg
        className="w-6 h-6 text-[#ffc631]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    links: null,
  },
  {
    title: "Email",
    content: null,
    icon: (
      <svg
        className="w-6 h-6 text-[#ffc631]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    links: [
      { label: "info@construct.com", href: "mailto:info@construct.com" },
      { label: "support@construct.com", href: "mailto:support@construct.com" },
    ],
  },
  {
    title: "Phone",
    content: null,
    icon: (
      <svg
        className="w-6 h-6 text-[#ffc631]"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    links: [
      { label: "1 - 313 - 645 - 3395", href: "tel:+13136453395" },
      { label: "1 - 469 - 970 - 2609", href: "tel:+14699702609" },
    ],
  },
];

export function ContactInfoSection() {
  const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", tel: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#ffc631] transition-colors bg-white";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top: info header + 3 cards ── */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left: heading */}
          <div>
            <Subtitle>Contact us</Subtitle>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
              <span className="text-[#ffc631]">Contacts</span> Information
            </h2>
          </div>

          {/* Right: 3 info cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#ffc631]/30 hover:shadow-sm transition-all duration-200"
              >
                {/* Icon circle */}
                <div className="w-12 h-12 rounded-xl bg-[#ffc631]/10 flex items-center justify-center shrink-0">
                  {card.icon}
                </div>

                <h4 className="font-bold text-[#1a1a2e] text-sm">
                  {card.title}
                </h4>

                {card.content && (
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {card.content}
                  </p>
                )}

                {card.links && (
                  <div className="flex flex-col gap-1">
                    {card.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="text-sm text-gray-500 hover:text-[#ffc631] transition-colors"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Map + form ── */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map embed */}
          <div className="w-full h-120 rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative">
            <iframe
              title="Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059445135!2d-74.25986548248685!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 grayscale"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Gold overlay corner accent */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ffc631] rounded-l-2xl pointer-events-none" />
          </div>

          {/* Contact form */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl font-extrabold text-[#1a1a2e]">
                Send Us a Message
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            {sent && (
              <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-4 text-sm font-medium">
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Message sent! We&apos;ll be in touch shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={form.tel}
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  className={inputClass}
                />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              <textarea
                required
                rows={5}
                placeholder="Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="self-start bg-[#1a1a2e] hover:bg-[#ffc631] hover:text-[#1a1a2e] text-white font-bold px-8 py-3.5 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                Follow us
              </span>
              {["Facebook", "Instagram", "Twitter", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#ffc631] hover:border-[#ffc631] transition-colors duration-200"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
