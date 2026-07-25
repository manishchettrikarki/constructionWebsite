"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function readServiceForm(formData: FormData) {
  return {
    number: String(formData.get("number") ?? "").trim(),
    title: String(formData.get("title") ?? "").trim(),
    description: String(formData.get("description") ?? "").trim(),
    href: String(formData.get("href") ?? "").trim() || "#",
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

export async function createService(formData: FormData) {
  const supabase = await createClient();
  const values = readServiceForm(formData);

  if (!values.title) throw new Error("Title is required.");

  const { error } = await supabase.from("services").insert(values);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
  redirect("/admin/services");
}

export async function updateService(id: string, formData: FormData) {
  const supabase = await createClient();
  const values = readServiceForm(formData);

  if (!values.title) throw new Error("Title is required.");

  const { error } = await supabase
    .from("services")
    .update(values)
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
  redirect("/admin/services");
}

export async function deleteService(id: string, _formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.from("services").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/services");
  revalidatePath("/services");
  revalidatePath("/");
}
