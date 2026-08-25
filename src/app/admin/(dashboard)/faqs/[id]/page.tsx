import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { FaqForm } from "@/components/admin/faqForm";
import { updateFaq } from "../actions";

export default async function EditFaqPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: faq } = await supabase
    .from("faqs")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!faq) notFound();

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">Edit FAQ</h1>
      <p className="text-gray-500 text-sm mb-8">{faq.question}</p>
      <FaqForm
        faq={faq}
        action={updateFaq.bind(null, id)}
        submitLabel="Save Changes"
      />
    </div>
  );
}
