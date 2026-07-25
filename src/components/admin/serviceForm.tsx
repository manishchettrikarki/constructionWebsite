"use client";

import { useState, type ReactNode } from "react";
import type { ServiceRow } from "@/types/database";

const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#ffc631] transition-colors bg-white";
const labelClass = "text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block";

export function ServiceForm({
  service,
  action,
  submitLabel,
}: {
  service?: ServiceRow;
  action: (formData: FormData) => void;
  submitLabel: string;
}) {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setPending(true);
    try {
      await action(formData);
    } catch (err) {
      if (
        err &&
        typeof err === "object" &&
        "digest" in err &&
        typeof (err as { digest?: unknown }).digest === "string" &&
        (err as { digest: string }).digest.startsWith("NEXT_REDIRECT")
      ) {
        throw err;
      }
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setPending(false);
    }
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-5 max-w-2xl">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <div className="grid sm:grid-cols-[100px_1fr] gap-5">
        <Field label="Number">
          <input
            name="number"
            defaultValue={service?.number}
            className={inputClass}
            placeholder="01"
          />
        </Field>

        <Field label="Title" required>
          <input
            name="title"
            required
            defaultValue={service?.title}
            className={inputClass}
            placeholder="e.g. Transportation Engineering"
          />
        </Field>
      </div>

      <Field label="Description">
        <textarea
          name="description"
          rows={4}
          defaultValue={service?.description}
          className={`${inputClass} resize-none`}
          placeholder="Short description shown on the service card"
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* <Field label="Link (href)">
          <input
            name="href"
            defaultValue={service?.href ?? "/services"}
            className={inputClass}
          />
        </Field> */}

        <Field label="Sort order">
          <input
            type="number"
            name="sort_order"
            defaultValue={service?.sort_order ?? 0}
            className={inputClass}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="self-start bg-[#1a1a2e] hover:bg-[#ffc631] hover:text-[#1a1a2e] text-white font-bold px-8 py-3 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}
