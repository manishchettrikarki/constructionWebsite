"use client";

import { useState } from "react";
import { Subtitle } from "@/components/reusable/subtitle";

export function ServicesContactSection() {
  const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ name: "", tel: "", email: "", message: "" });
  };

  const inputClass =
    "border border-gray-200 rounded-lg px-4 py-3.5 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#ffc631] transition-colors";

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <Subtitle>Contact us</Subtitle>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a2e] mb-8">
              Do You Have any <span className="text-[#ffc631]">Questions?</span>
            </h2>
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
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8">
            <h3 className="text-xl font-bold text-[#1a1a2e]">
              Are You Going to Implement a Project?
            </h3>

            <ul className="flex flex-col gap-6">
              {[
                {
                  label: "Address",
                  content: "2047 Cyrus Viaduct East Jadynchester",
                },
                {
                  label: "Email",
                  content: (
                    <div className="flex flex-col gap-1">
                      <a
                        href="mailto:info@construct.com"
                        className="text-[#1a1a2e] hover:text-[#ffc631] transition-colors"
                      >
                        info@construct.com
                      </a>
                      <a
                        href="mailto:support@construct.com"
                        className="text-[#1a1a2e] hover:text-[#ffc631] transition-colors"
                      >
                        support@construct.com
                      </a>
                    </div>
                  ),
                },
                {
                  label: "Phone",
                  content: (
                    <div className="flex flex-col gap-1">
                      <a
                        href="tel:+13136453395"
                        className="text-[#1a1a2e] hover:text-[#ffc631] transition-colors"
                      >
                        1 - 313 - 645 - 3395
                      </a>
                      <a
                        href="tel:+14699702609"
                        className="text-[#1a1a2e] hover:text-[#ffc631] transition-colors"
                      >
                        1 - 469 - 970 - 2609
                      </a>
                    </div>
                  ),
                },
              ].map(({ label, content }) => (
                <li key={label} className="flex gap-4 text-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 w-16 shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="text-[#1a1a2e]">{content}</span>
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="flex gap-3">
              {["Facebook", "Instagram", "Twitter", "WhatsApp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-[#ffc631] hover:border-[#ffc631] transition-colors duration-200"
                >
                  <svg
                    className="w-4 h-4"
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
