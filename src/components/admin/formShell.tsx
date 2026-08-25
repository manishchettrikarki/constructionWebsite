"use client";

import { useState, type ReactNode } from "react";

export const inputClass =
  "w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-[#1a1a2e] placeholder-gray-400 focus:outline-none focus:border-[#ffc631] transition-colors bg-white";

const labelClass =
  "text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5 block";

/**
 * redirect() inside a Server Action works by throwing a special error that
 * Next.js has to catch itself — rethrow it instead of showing it to the
 * admin as a failed save.
 */
function isRedirectError(err: unknown): boolean {
  return (
    !!err &&
    typeof err === "object" &&
    "digest" in err &&
    typeof (err as { digest?: unknown }).digest === "string" &&
    (err as { digest: string }).digest.startsWith("NEXT_REDIRECT")
  );
}

/** Labelled wrapper around a single input. */
export function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label className={labelClass}>
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-gray-400 mt-1.5">{hint}</p>}
    </div>
  );
}

/**
 * Shared shell for every admin create/edit form: submits to a Server
 * Action, shows the error it threw, and disables the button while saving.
 * Callers supply only the fields.
 */
export function AdminForm({
  action,
  submitLabel,
  children,
}: {
  action: (formData: FormData) => void | Promise<void>;
  submitLabel: string;
  children: ReactNode;
}) {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setError(null);
    setPending(true);
    try {
      await action(formData);
    } catch (err) {
      if (isRedirectError(err)) throw err;
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

      {children}

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
