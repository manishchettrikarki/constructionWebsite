"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminClient } from "@/lib/supabase/auth";

function readTeamMemberForm(formData: FormData) {
  return {
    name: String(formData.get("name") ?? "").trim(),
    position: String(formData.get("position") ?? "").trim(),
    qualification: String(formData.get("qualification") ?? "").trim(),
    experience: String(formData.get("experience") ?? "").trim(),
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

function revalidateTeamPages() {
  revalidatePath("/admin/team");
  revalidatePath("/about");
}

export async function createTeamMember(formData: FormData) {
  const supabase = await requireAdminClient();
  const values = readTeamMemberForm(formData);

  if (!values.name) throw new Error("Name is required.");

  const { error } = await supabase.from("team_members").insert(values);
  if (error) throw new Error(error.message);

  revalidateTeamPages();
  redirect("/admin/team");
}

export async function updateTeamMember(id: string, formData: FormData) {
  const supabase = await requireAdminClient();
  const values = readTeamMemberForm(formData);

  if (!values.name) throw new Error("Name is required.");

  const { error } = await supabase
    .from("team_members")
    .update(values)
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidateTeamPages();
  redirect("/admin/team");
}

export async function deleteTeamMember(id: string) {
  const supabase = await requireAdminClient();

  const { error } = await supabase.from("team_members").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidateTeamPages();
}
