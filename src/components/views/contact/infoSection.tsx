"use client";

import { useState } from "react";
import { Subtitle } from "@/components/reusable/subtitle";
import { CheckIcon } from "@/icons";
import { CONTACT_CONTENT, CONTACT_INFO } from "@/contents/contact";
import type { ContactCard } from "@/contents/contact";
import type { PublicContactDetails } from "@/types/public";

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/**
 * Merges the live contact details (from Supabase, via the page) into
 * the card shapes/icons defined in contents/contact.ts — icons and
 * card titles stay as authored there, only the displayed content/links
 * become dynamic.
 */
function buildCards(contact: PublicContactDetails): ContactCard[] {
  return CONTACT_INFO.map((card) => {
    if (card.title === "Address") {
      return { ...card, content: contact.address || null };
    }
    if (card.title === "Email") {
      return {
        ...card,
        content: null,
        links: contact.email
          ? [{ label: contact.email, href: `mailto:${contact.email}` }]
          : [],
      };
    }
    if (card.title === "Phone") {
      return {
        ...card,
        content: null,
        links: contact.phone
          ? [{ label: contact.phone, href: telHref(contact.phone) }]
          : [],
      };
    }
    return card;
  });
}

export function ContactInfoSection({
  contact,
}: {
  contact: PublicContactDetails;
}) {
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

  const cards = buildCards(contact);

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
            {cards.map((card) => {
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
              src="https://maps.google.com/maps?q=27.700623,85.334009&z=18&output=embed"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              allowFullScreen
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
        </div>
      </div>
    </section>
  );
}