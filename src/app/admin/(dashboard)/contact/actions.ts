"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function updateContactDetails(formData: FormData) {
  const supabase = await createClient();

  const values = {
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    address: String(formData.get("address") ?? "").trim(),
  };

  // Single-row table: update the existing row if one exists,
  // otherwise insert the first one.
  const { data: existing } = await supabase
    .from("contact_details")
    .select("id")
    .limit(1)
    .maybeSingle();

  const { error } = existing
    ? await supabase
        .from("contact_details")
        .update(values)
        .eq("id", existing.id)
    : await supabase.from("contact_details").insert(values);

  if (error) throw new Error(error.message);

  revalidatePath("/admin/contact");
  revalidatePath("/contact");
  revalidatePath("/");
  // No redirect here — this form saves in place so the admin sees a
  // confirmation instead of bouncing back to a list page.
}