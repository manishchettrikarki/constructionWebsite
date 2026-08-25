/**
 * Emails a contact-form submission to the site owner via Resend.
 *
 * Resend is used over its plain HTTP API rather than the SDK so the
 * project picks up no new dependency. The free tier covers 3,000 emails
 * a month / 100 a day, which is far more than this form will ever need.
 *
 * Sending is best-effort: the submission is already stored in Supabase by
 * the time this runs, so a failure here is logged and swallowed rather
 * than shown to the visitor as a failed send.
 */

export interface ContactNotification {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/** Prevents a submitted name or message from injecting markup into the email. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function sendContactNotification(
  submission: ContactNotification,
): Promise<{ sent: boolean; reason?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_NOTIFICATION_EMAIL;

  // Not configured yet — the message is still saved and visible in the
  // admin inbox, so this is a soft skip rather than an error.
  if (!apiKey) return { sent: false, reason: "RESEND_API_KEY is not set" };
  if (!to) return { sent: false, reason: "CONTACT_NOTIFICATION_EMAIL is not set" };

  const from =
    process.env.CONTACT_NOTIFICATION_FROM ??
    "Kallisto Website <onboarding@resend.dev>";

  const name = escapeHtml(submission.name);
  const email = escapeHtml(submission.email);
  const phone = escapeHtml(submission.phone || "—");
  const message = escapeHtml(submission.message).replace(/\n/g, "<br />");

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:600px">
      <h2 style="color:#1a1a2e;margin:0 0 4px">New enquiry from the website</h2>
      <p style="color:#6b7280;font-size:13px;margin:0 0 20px">
        Sent from the contact form on kallistoengineering.com
      </p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 0;color:#6b7280;width:90px">Name</td><td style="padding:8px 0;color:#1a1a2e;font-weight:600">${name}</td></tr>
        <tr><td style="padding:8px 0;color:#6b7280">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#1a1a2e">${email}</a></td></tr>
        <tr><td style="padding:8px 0;color:#6b7280">Phone</td><td style="padding:8px 0;color:#1a1a2e">${phone}</td></tr>
      </table>
      <div style="margin-top:20px;padding:16px;background:#f9fafb;border-left:3px solid #ffc631;border-radius:6px">
        <p style="margin:0;color:#374151;line-height:1.6;font-size:14px">${message}</p>
      </div>
      <p style="color:#9ca3af;font-size:12px;margin-top:24px">
        Reply directly to this email to answer ${name}.
      </p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        // Hitting reply in the inbox answers the visitor, not Resend.
        reply_to: submission.email,
        subject: `New enquiry from ${submission.name}`,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[contact] Resend rejected the email:", response.status, detail);
      return { sent: false, reason: `Resend returned ${response.status}` };
    }

    return { sent: true };
  } catch (err) {
    console.error("[contact] Could not reach Resend:", err);
    return { sent: false, reason: "Network error contacting Resend" };
  }
}
