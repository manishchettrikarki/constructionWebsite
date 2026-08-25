"use client";

import { AdminForm, Field, inputClass } from "@/components/admin/formShell";
import type { TestimonialRow } from "@/types/database";

export function TestimonialForm({
  testimonial,
  action,
  submitLabel,
}: {
  testimonial?: TestimonialRow;
  action: (formData: FormData) => void;
  submitLabel: string;
}) {
  return (
    <AdminForm action={action} submitLabel={submitLabel}>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Client name" required>
          <input
            name="name"
            required
            defaultValue={testimonial?.name}
            className={inputClass}
            placeholder="e.g. Department of Roads"
          />
        </Field>

        <Field label="Role or organisation">
          <input
            name="role"
            defaultValue={testimonial?.role}
            className={inputClass}
            placeholder="e.g. Government of Nepal"
          />
        </Field>
      </div>

      <Field label="Testimonial" required>
        <textarea
          name="quote"
          required
          rows={5}
          defaultValue={testimonial?.quote}
          className={`${inputClass} resize-none`}
          placeholder="What the client said about working with Kallisto."
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Rating">
          <select
            name="rating"
            defaultValue={String(testimonial?.rating ?? 5)}
            className={inputClass}
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n} star{n === 1 ? "" : "s"}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Sort order" hint="Lower numbers appear first.">
          <input
            type="number"
            name="sort_order"
            defaultValue={testimonial?.sort_order ?? 0}
            className={inputClass}
          />
        </Field>
      </div>
    </AdminForm>
  );
}
