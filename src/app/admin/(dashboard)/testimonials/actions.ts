"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminClient } from "@/lib/supabase/auth";

function readTestimonialForm(formData: FormData) {
  const rating = Number(formData.get("rating") ?? 5);

  return {
    name: String(formData.get("name") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    quote: String(formData.get("quote") ?? "").trim(),
    // The column has a 1-5 check constraint; clamp rather than let a
    // hand-crafted POST fail with a raw Postgres error.
    rating: Number.isFinite(rating) ? Math.min(5, Math.max(1, Math.round(rating))) : 5,
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

function revalidateTestimonialPages() {
  revalidatePath("/admin/testimonials");
  revalidatePath("/about");
}

export async function createTestimonial(formData: FormData) {
  const supabase = await requireAdminClient();
  const values = readTestimonialForm(formData);

  if (!values.name) throw new Error("Client name is required.");
  if (!values.quote) throw new Error("Testimonial text is required.");

  const { error } = await supabase.from("testimonials").insert(values);
  if (error) throw new Error(error.message);

  revalidateTestimonialPages();
  redirect("/admin/testimonials");
}

export async function updateTestimonial(id: string, formData: FormData) {
  const supabase = await requireAdminClient();
  const values = readTestimonialForm(formData);

  if (!values.name) throw new Error("Client name is required.");
  if (!values.quote) throw new Error("Testimonial text is required.");

  const { error } = await supabase
    .from("testimonials")
    .update(values)
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidateTestimonialPages();
  redirect("/admin/testimonials");
}

export async function deleteTestimonial(id: string) {
  const supabase = await requireAdminClient();

  const { error } = await supabase.from("testimonials").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidateTestimonialPages();
}
