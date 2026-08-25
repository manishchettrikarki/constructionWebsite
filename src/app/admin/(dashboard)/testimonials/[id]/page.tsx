import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { TestimonialForm } from "@/components/admin/testimonialForm";
import { updateTestimonial } from "../actions";

export default async function EditTestimonialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: testimonial } = await supabase
    .from("testimonials")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (!testimonial) notFound();

  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">
        Edit Testimonial
      </h1>
      <p className="text-gray-500 text-sm mb-8">{testimonial.name}</p>
      <TestimonialForm
        testimonial={testimonial}
        action={updateTestimonial.bind(null, id)}
        submitLabel="Save Changes"
      />
    </div>
  );
}
