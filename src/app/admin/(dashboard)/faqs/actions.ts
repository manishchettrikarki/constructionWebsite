"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdminClient } from "@/lib/supabase/auth";

function readFaqForm(formData: FormData) {
  return {
    question: String(formData.get("question") ?? "").trim(),
    answer: String(formData.get("answer") ?? "").trim(),
    sort_order: Number(formData.get("sort_order") ?? 0) || 0,
  };
}

// The FAQ accordion and its FAQPage structured data both live on the home page.
function revalidateFaqPages() {
  revalidatePath("/admin/faqs");
  revalidatePath("/");
}

export async function createFaq(formData: FormData) {
  const supabase = await requireAdminClient();
  const values = readFaqForm(formData);

  if (!values.question) throw new Error("Question is required.");
  if (!values.answer) throw new Error("Answer is required.");

  const { error } = await supabase.from("faqs").insert(values);
  if (error) throw new Error(error.message);

  revalidateFaqPages();
  redirect("/admin/faqs");
}

export async function updateFaq(id: string, formData: FormData) {
  const supabase = await requireAdminClient();
  const values = readFaqForm(formData);

  if (!values.question) throw new Error("Question is required.");
  if (!values.answer) throw new Error("Answer is required.");

  const { error } = await supabase.from("faqs").update(values).eq("id", id);
  if (error) throw new Error(error.message);

  revalidateFaqPages();
  redirect("/admin/faqs");
}

export async function deleteFaq(id: string) {
  const supabase = await requireAdminClient();

  const { error } = await supabase.from("faqs").delete().eq("id", id);
  if (error) throw new Error(error.message);

  revalidateFaqPages();
}
