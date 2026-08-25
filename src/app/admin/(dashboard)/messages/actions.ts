"use server";

import { revalidatePath } from "next/cache";
import { requireAdminClient } from "@/lib/supabase/auth";

export async function markMessageRead(id: string, isRead: boolean) {
  const supabase = await requireAdminClient();

  const { error } = await supabase
    .from("contact_messages")
    .update({ is_read: isRead })
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/messages");
}

export async function deleteMessage(id: string) {
  const supabase = await requireAdminClient();

  const { error } = await supabase
    .from("contact_messages")
    .delete()
    .eq("id", id);
  if (error) throw new Error(error.message);

  revalidatePath("/admin/messages");
}
