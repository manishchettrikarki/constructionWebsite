// components/contact/ContactInfoSection.tsx
"use client";

import { useState } from "react";
import { Subtitle } from "@/components/reusable/subtitle";
import { CheckIcon, SocialIcon } from "@/icons";
import { CONTACT_CONTENT, CONTACT_INFO, SOCIAL_LINKS } from "@/contents/contact";
import type { ContactCard } from "@/contents/contact";


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
        {/* Top: info header + 3 cards */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16 items-start">
          {/* Left: heading - takes 2 columns */}
          <div className="lg:col-span-2">
            <Subtitle>{CONTACT_CONTENT.subtitle}</Subtitle>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e]">
              <span className="text-[#ffc631]">{CONTACT_CONTENT.highlight}</span>{" "}
              {CONTACT_CONTENT.title}
            </h2>
          </div>

          {/* Right: 3 info cards - takes 3 columns */}
          <div className="lg:col-span-3 grid sm:grid-cols-3 gap-4">
            {CONTACT_INFO.map((card: ContactCard) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-3 hover:border-[#ffc631]/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#ffc631]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[#ffc631]" />
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
                      {card.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          className="text-sm text-gray-500 hover:text-[#ffc631] transition-colors hover:underline"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Full Width Map */}
        <div className="w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 relative mb-12">
          <div className="w-full h-96">
            <iframe
              title={CONTACT_CONTENT.mapTitle}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.770742313285!2d85.3473017!3d27.7243639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19fdac58fbb5%3A0x2d81bd028f50e33e!2sKallisto%20Engineering%20Consultancy%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1784014244984!5m2!1sen!2snp"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[#ffc631] rounded-l-2xl pointer-events-none" />
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a2e]">
              {CONTACT_CONTENT.formTitle}
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              {CONTACT_CONTENT.formDescription}
            </p>
          </div>

          {sent && (
            <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-4 text-sm font-medium mb-6">
              <CheckIcon className="w-5 h-5 shrink-0" />
              {CONTACT_CONTENT.successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder={CONTACT_CONTENT.placeholderName}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder={CONTACT_CONTENT.placeholderPhone}
                value={form.tel}
                onChange={(e) => setForm({ ...form, tel: e.target.value })}
                className={inputClass}
              />
            </div>
            <input
              type="email"
              required
              placeholder={CONTACT_CONTENT.placeholderEmail}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            <textarea
              required
              rows={5}
              placeholder={CONTACT_CONTENT.placeholderMessage}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              className="self-center sm:self-start bg-[#1a1a2e] hover:bg-[#ffc631] hover:text-[#1a1a2e] text-white font-bold px-10 py-4 rounded-lg transition-colors duration-200"
            >
              {CONTACT_CONTENT.submitButton}
            </button>
          </form>

          {/* Social links */}
          {/* <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 mt-6 border-t border-gray-100">
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              {CONTACT_CONTENT.followUs}
            </span>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#ffc631] hover:border-[#ffc631] transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

