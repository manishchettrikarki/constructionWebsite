"use client";

import { AdminForm, Field, inputClass } from "@/components/admin/formShell";
import type { TeamMemberRow } from "@/types/database";

export function TeamMemberForm({
  member,
  action,
  submitLabel,
}: {
  member?: TeamMemberRow;
  action: (formData: FormData) => void;
  submitLabel: string;
}) {
  return (
    <AdminForm action={action} submitLabel={submitLabel}>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Name" required>
          <input
            name="name"
            required
            defaultValue={member?.name}
            className={inputClass}
            placeholder="e.g. Mr. Dipesh Aryal"
          />
        </Field>

        <Field label="Position">
          <input
            name="position"
            defaultValue={member?.position}
            className={inputClass}
            placeholder="e.g. Sr. Engineer"
          />
        </Field>
      </div>

      <Field label="Qualification">
        <input
          name="qualification"
          defaultValue={member?.qualification}
          className={inputClass}
          placeholder="e.g. M.Sc. Environmental Science"
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="Experience"
          hint='Free text — the card adds the word "experience" after it.'
        >
          <input
            name="experience"
            defaultValue={member?.experience}
            className={inputClass}
            placeholder="e.g. 11 Years"
          />
        </Field>

        <Field label="Sort order" hint="Lower numbers appear first.">
          <input
            type="number"
            name="sort_order"
            defaultValue={member?.sort_order ?? 0}
            className={inputClass}
          />
        </Field>
      </div>
    </AdminForm>
  );
}
