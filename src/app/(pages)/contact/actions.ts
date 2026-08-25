"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { sendContactNotification } from "@/lib/email/contactNotification";
import type { ContactFormState } from "@/app/(pages)/contact/formState";

const MAX = { name: 120, email: 200, phone: 40, message: 4000 };
const MIN_MESSAGE = 10;

// Deliberately loose: the point is to catch typos, not to police the
// long tail of what RFC 5322 permits.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function fail(message: string): ContactFormState {
  return { status: "error", message };
}

/**
 * Handles a public contact-form submission.
 *
 * The message is written to Supabase first — that is the durable record
 * the admin inbox reads — and only then emailed. If the email step is
 * unconfigured or fails, the visitor still gets a success response,
 * because their message really has been received.
 */
export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: a real person never sees or fills this field.
  if (String(formData.get("company") ?? "").trim() !== "") {
    return { status: "success", message: "Message sent! We'll be in touch shortly." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name) return fail("Please enter your name.");
  if (!email) return fail("Please enter your email address.");
  if (!EMAIL_PATTERN.test(email)) return fail("That email address doesn't look right.");
  if (!message) return fail("Please enter a message.");
  if (message.length < MIN_MESSAGE) {
    return fail("Please tell us a little more — at least 10 characters.");
  }
  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    phone.length > MAX.phone ||
    message.length > MAX.message
  ) {
    return fail("That message is too long. Please shorten it and try again.");
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase
      .from("contact_messages")
      .insert({ name, email, phone, message });

    if (error) {
      console.error("[contact] Could not save the message:", error.message);
      return fail(
        "Sorry — we couldn't send that just now. Please try again, or email us directly.",
      );
    }
  } catch (err) {
    console.error("[contact] Unexpected error saving the message:", err);
    return fail(
      "Sorry — we couldn't send that just now. Please try again, or email us directly.",
    );
  }

  // Stored successfully; the notification is a bonus, not a requirement.
  const notified = await sendContactNotification({ name, email, phone, message });
  if (!notified.sent) {
    console.warn("[contact] Saved but not emailed:", notified.reason);
  }

  revalidatePath("/admin/messages");

  return {
    status: "success",
    message: "Message sent! We'll be in touch shortly.",
  };
}
