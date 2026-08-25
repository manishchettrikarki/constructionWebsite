import { createClient } from "@/lib/supabase/server";
import { ConfirmSubmitButton } from "@/components/admin/confirmSubmitButton";
import { deleteMessage, markMessageRead } from "./actions";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminMessagesPage() {
  const supabase = await createClient();
  const { data: messages, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  const unread = messages?.filter((m) => !m.is_read).length ?? 0;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-[#1a1a2e]">Messages</h1>
        <p className="text-gray-500 text-sm mt-1">
          Enquiries sent through the contact form.
          {unread > 0 && (
            <span className="ml-1.5 font-semibold text-[#1a1a2e]">
              {unread} unread.
            </span>
          )}
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-6">
          Couldn&apos;t load messages: {error.message}
        </div>
      )}

      <div className="flex flex-col gap-4">
        {messages?.map((m) => (
          <article
            key={m.id}
            className={`bg-white border rounded-2xl p-6 ${
              m.is_read ? "border-gray-100" : "border-[#ffc631]/60 shadow-sm"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <p className="font-bold text-[#1a1a2e] flex items-center gap-2">
                  {m.name}
                  {!m.is_read && (
                    <span className="bg-[#ffc631] text-[#1a1a2e] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                      New
                    </span>
                  )}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {formatDate(m.created_at)}
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <a
                  href={`mailto:${m.email}?subject=Re: your enquiry`}
                  className="text-[#1a1a2e] font-semibold hover:text-[#ffc631] transition-colors"
                >
                  Reply
                </a>
                <form action={markMessageRead.bind(null, m.id, !m.is_read)}>
                  <button
                    type="submit"
                    className="text-gray-400 font-semibold hover:text-[#1a1a2e] transition-colors"
                  >
                    Mark {m.is_read ? "unread" : "read"}
                  </button>
                </form>
                <form action={deleteMessage.bind(null, m.id)}>
                  <ConfirmSubmitButton
                    confirmMessage={`Delete the message from ${m.name}? This can't be undone.`}
                    className="text-red-500 font-semibold hover:text-red-700 transition-colors"
                  >
                    Delete
                  </ConfirmSubmitButton>
                </form>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-gray-500 mb-4">
              <span>{m.email}</span>
              {m.phone && <span>{m.phone}</span>}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
              {m.message}
            </p>
          </article>
        ))}

        {messages?.length === 0 && (
          <div className="bg-white border border-gray-100 rounded-2xl px-5 py-12 text-center text-gray-400">
            No messages yet.
          </div>
        )}
      </div>
    </div>
  );
}
