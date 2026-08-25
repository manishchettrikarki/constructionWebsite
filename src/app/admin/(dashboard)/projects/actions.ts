"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminClient } from "@/lib/supabase/auth";
import {
  PROJECT_IMAGE_BUCKET,
  storagePathFromPublicUrl,
} from "@/lib/supabase/storage";
import type { ProjectStatus } from "@/types/database";

type AdminClient = Awaited<ReturnType<typeof requireAdminClient>>;

function readProjectForm(formData: FormData) {
  return {
    title: String(formData.get("title") ?? "").trim(),
    location: String(formData.get("location") ?? "").trim(),
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    image:
      String(formData.get("image") ?? "").trim() ||
      "/images/projects/placeholder.jpg",
    category: String(formData.get("category") ?? "").trim(),
    status: (String(formData.get("status") ?? "Completed") as ProjectStatus),
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

/**
 * Removes an uploaded photo from Storage once nothing points at it any
 * more. Static /images/... paths and third-party URLs return null from
 * storagePathFromPublicUrl and are left alone. Failures here are not
 * worth failing the whole request over — worst case a file is orphaned.
 */
async function removeUploadedImage(
  supabase: AdminClient,
  imageValue: string | null | undefined,
) {
  if (!imageValue) return;

  const objectPath = storagePathFromPublicUrl(imageValue);
  if (!objectPath) return;

  await supabase.storage.from(PROJECT_IMAGE_BUCKET).remove([objectPath]);
}

function revalidateProjectPages() {
  revalidatePath("/admin/projects");
  revalidatePath("/projects");
}

export async function createProject(formData: FormData) {
  const supabase = await requireAdminClient();
  const values = readProjectForm(formData);

  if (!values.title) throw new Error("Title is required.");

  // The per-project detail link is not editable in the admin UI yet, so
  // new projects all point at the directory page.
  const { error } = await supabase
    .from("projects")
    .insert({ ...values, href: "/projects" });
  if (error) throw new Error(error.message);

  revalidateProjectPages();
  redirect("/admin/projects");
}

export async function updateProject(id: string, formData: FormData) {
  const supabase = await requireAdminClient();
  const values = readProjectForm(formData);

  if (!values.title) throw new Error("Title is required.");

  // Read the current photo first so a replaced upload can be cleaned up.
  // `href` is deliberately absent from `values` so it survives the update.
  const { data: existing } = await supabase
    .from("projects")
    .select("image")
    .eq("id", id)
    .maybeSingle();

  const { error } = await supabase
    .from("projects")
    .update(values)
    .eq("id", id);
  if (error) throw new Error(error.message);

  if (existing?.image && existing.image !== values.image) {
    await removeUploadedImage(supabase, existing.image);
  }

  revalidateProjectPages();
  redirect("/admin/projects");
}

export async function deleteProject(id: string) {
  const supabase = await requireAdminClient();

  const { data: existing } = await supabase
    .from("projects")
    .select("image")
    .eq("id", id)
    .maybeSingle();

  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw new Error(error.message);

  await removeUploadedImage(supabase, existing?.image);

  revalidateProjectPages();
}
