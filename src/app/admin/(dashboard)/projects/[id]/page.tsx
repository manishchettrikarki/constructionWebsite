import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProjectForm } from "@/components/admin/projectForm";
import { updateProject } from "../actions";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!project) notFound();

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">
        Edit Project
      </h1>
      <p className="text-gray-500 text-sm mb-8">{project.title}</p>
      <ProjectForm
        project={project}
        action={updateProject.bind(null, id)}
        submitLabel="Save Changes"
      />
    </div>
  );
}
