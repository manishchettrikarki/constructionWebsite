import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ServiceForm } from "@/components/admin/serviceForm";
import { updateService } from "../actions";

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: service } = await supabase
    .from("services")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!service) notFound();

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">
        Edit Service
      </h1>
      <p className="text-gray-500 text-sm mb-8">{service.title}</p>
      <ServiceForm
        service={service}
        action={updateService.bind(null, id)}
        submitLabel="Save Changes"
      />
    </div>
  );
}
