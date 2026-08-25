"use client";

import { AdminForm, Field, inputClass } from "@/components/admin/formShell";
import { ImageUploadField } from "@/components/admin/imageUploadField";
import type { ProjectRow } from "@/types/database";

const CATEGORY_SUGGESTIONS = [
  "Environmental Studies",
  "Roads & Bridges",
  "Water Resources",
  "GIS Mapping",
  "Buildings & Infrastructure",
  "International Projects",
];

export function ProjectForm({
  project,
  action,
  submitLabel,
}: {
  project?: ProjectRow;
  action: (formData: FormData) => void;
  submitLabel: string;
}) {
  return (
    <AdminForm action={action} submitLabel={submitLabel}>
      <Field label="Title" required>
        <input
          name="title"
          required
          defaultValue={project?.title}
          className={inputClass}
          placeholder="e.g. Dudhuwa Khola Bridge (70m)"
        />
      </Field>

      <Field label="Location">
        <input
          name="location"
          defaultValue={project?.location}
          className={inputClass}
          placeholder="e.g. Dudhuvu Rural Municipality, Nepal"
        />
      </Field>

      <Field label="Excerpt">
        <textarea
          name="excerpt"
          rows={4}
          defaultValue={project?.excerpt}
          className={`${inputClass} resize-none`}
          placeholder="Short description shown on the project card"
        />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Category">
          <input
            name="category"
            list="category-suggestions"
            defaultValue={project?.category ?? CATEGORY_SUGGESTIONS[0]}
            className={inputClass}
          />
          <datalist id="category-suggestions">
            {CATEGORY_SUGGESTIONS.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </Field>

        <Field label="Status">
          <select
            name="status"
            defaultValue={project?.status ?? "Completed"}
            className={inputClass}
          >
            <option value="Completed">Completed</option>
            <option value="Ongoing">Ongoing</option>
          </select>
        </Field>
      </div>

      <Field label="Project photo">
        <ImageUploadField defaultValue={project?.image ?? ""} />
      </Field>

      <Field label="Sort order" hint="Lower numbers appear first.">
        <input
          type="number"
          name="sort_order"
          defaultValue={project?.sort_order ?? 0}
          className={inputClass}
        />
      </Field>
    </AdminForm>
  );
}
