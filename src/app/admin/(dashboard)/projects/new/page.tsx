import { ProjectForm } from "@/components/admin/projectForm";
import { createProject } from "../actions";

export default function NewProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">
        Add Project
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        This will appear immediately on the public Projects page.
      </p>
      <ProjectForm action={createProject} submitLabel="Create Project" />
    </div>
  );
}
