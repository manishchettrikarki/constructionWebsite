"use client";

import { useState } from "react";
import type { ContactDetailsRow } from "@/types/database";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#ffc631] transition-colors bg-white";
const labelClass =
  "text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block";

export function ContactDetailsForm({
  details,
  action,
}: {
  details: ContactDetailsRow | null;
  action: (formData: FormData) => Promise<void>;
}) {
  const [error, setError] = useState<string | null>(null);
  const [saved, setSaved] = useState(false);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setSaved(false);
    setPending(true);
    try {
      await action(formData);
      setSaved(true);
      setTimeout(() => setSaved(false), 4000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setPending(false);
    }
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-5 max-w-xl">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}
      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg px-4 py-3">
          Contact details saved — live on the site now.
        </div>
      )}

      <div>
        <label className={labelClass}>Phone number(s) — one per line</label>
        <textarea
          name="phones"
          rows={3}
          defaultValue={details?.phone}
          className={`${inputClass} resize-none`}
          placeholder={"+977-9841666927"}
        />
      </div>

      <div>
        <label className={labelClass}>Email</label>
        <input
          type="email"
          name="email"
          defaultValue={details?.email}
          className={inputClass}
          placeholder="kallistoengineering@gmail.com"
        />
      </div>

      <div>
        <label className={labelClass}>Address — one line per row</label>
        <textarea
          name="address"
          rows={3}
          defaultValue={details?.address}
          className={`${inputClass} resize-none`}
          placeholder={"Ghattekulo, Maitidevi\nKathmandu, Nepal"}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="self-start bg-[#1a1a2e] hover:bg-[#ffc631] hover:text-[#1a1a2e] text-white font-bold px-8 py-3 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Saving…" : "Save Contact Details"}
      </button>
    </form>
  );
}
