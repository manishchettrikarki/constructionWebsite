import { createClient } from "@/lib/supabase/server";
import { PublicContactDetails } from "@/types/public";
import { COMPANY_INFO } from "@/utils/constant";

// export interface PublicContactDetails {
//   phones: string[];
//   email: string;
//   address: string[];
// }

const STATIC_FALLBACK: PublicContactDetails = {
  phone: COMPANY_INFO.phone,
  email: COMPANY_INFO.email,
  address: COMPANY_INFO.registeredAddress,
};

/**
 * Reads the single contact_details row from Supabase. Falls back to
 * COMPANY_INFO in utils/constant.ts if Supabase isn't configured yet,
 * no row exists, or the request fails for any reason.
 */
export async function getContactDetails(): Promise<PublicContactDetails> {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("contact_details")
      .select("*")
      .limit(1)
      .maybeSingle();

    if (error || !data) return STATIC_FALLBACK;

    return {
      phone: data.phone || STATIC_FALLBACK.phone,
      email: data.email || STATIC_FALLBACK.email,
      address: data.address || STATIC_FALLBACK.address,
    };
  } catch {
    return STATIC_FALLBACK;
  }
}
