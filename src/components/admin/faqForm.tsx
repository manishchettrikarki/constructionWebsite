"use client";

import { AdminForm, Field, inputClass } from "@/components/admin/formShell";
import type { FaqRow } from "@/types/database";

export function FaqForm({
  faq,
  action,
  submitLabel,
}: {
  faq?: FaqRow;
  action: (formData: FormData) => void;
  submitLabel: string;
}) {
  return (
    <AdminForm action={action} submitLabel={submitLabel}>
      <Field label="Question" required>
        <input
          name="question"
          required
          defaultValue={faq?.question}
          className={inputClass}
          placeholder="e.g. What engineering services does Kallisto provide?"
        />
      </Field>

      <Field
        label="Answer"
        required
        hint="Shown when a visitor opens this question on the home page."
      >
        <textarea
          name="answer"
          required
          rows={5}
          defaultValue={faq?.answer}
          className={`${inputClass} resize-none`}
          placeholder="Keep it to a short paragraph."
        />
      </Field>

      <Field label="Sort order" hint="Lower numbers appear first.">
        <input
          type="number"
          name="sort_order"
          defaultValue={faq?.sort_order ?? 0}
          className={inputClass}
        />
      </Field>
    </AdminForm>
  );
}
