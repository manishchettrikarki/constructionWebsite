import { createClient } from "@/lib/supabase/server";
import { ContactDetailsForm } from "./contactDetailsForm";
import { updateContactDetails } from "./actions";

export default async function AdminContactPage() {
  const supabase = await createClient();
  const { data: details } = await supabase
    .from("contact_details")
    .select("*")
    .limit(1)
    .maybeSingle();

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">
        Contact Details
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Shown in the site footer, the Contact page, and structured data (SEO)
        used by search engines.
      </p>
      <ContactDetailsForm details={details ?? null} action={updateContactDetails} />
    </div>
  );
}
