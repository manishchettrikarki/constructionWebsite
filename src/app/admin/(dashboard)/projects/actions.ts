"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { ProjectStatus } from "@/types/database";

function readProjectForm(formData: FormData) {
  return {
    title: String(formData.get("title") ?? "").trim(),
    location: String(formData.get("location") ?? "").trim(),
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    image:
      String(formData.get("image") ?? "").trim() ||
      "/images/projects/placeholder.jpg",
    href: String(formData.get("href") ?? "").trim() || "/projects",
    category: String(formData.get("category") ?? "").trim(),
    status: (String(formData.get("status") ?? "Completed") as ProjectStatus),
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

export async function createProject(formData: FormData) {
  const supabase = await createClient();
  const values = readProjectForm(formData);

  if (!values.title) throw new Error("Title is required.");

  const { error } = await supabase.from("projects").insert(values);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await createClient();
  const values = readProjectForm(formData);

  if (!values.title) throw new Error("Title is required.");

  const { error } = await supabase
    .from("projects")
    .update(values)
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
  redirect("/admin/projects");
}

export async function deleteProject(id: string, _formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}
