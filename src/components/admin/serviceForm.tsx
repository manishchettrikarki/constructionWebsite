"use client";

import { AdminForm, Field, inputClass } from "@/components/admin/formShell";
import type { ServiceRow } from "@/types/database";

export function ServiceForm({
  service,
  action,
  submitLabel,
}: {
  service?: ServiceRow;
  action: (formData: FormData) => void;
  submitLabel: string;
}) {
  return (
    <AdminForm action={action} submitLabel={submitLabel}>
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

      <Field label="Sort order" hint="Lower numbers appear first.">
        <input
          type="number"
          name="sort_order"
          defaultValue={service?.sort_order ?? 0}
          className={inputClass}
        />
      </Field>
    </AdminForm>
  );
}
