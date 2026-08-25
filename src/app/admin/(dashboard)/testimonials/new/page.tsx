import { TestimonialForm } from "@/components/admin/testimonialForm";
import { createTestimonial } from "../actions";

export default function NewTestimonialPage() {
  return (
    <div>
      <h1 className="text-2xl font-extrabold text-[#1a1a2e] mb-1">
        Add Testimonial
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        This will appear immediately in the testimonials section of the About
        page.
      </p>
      <TestimonialForm
        action={createTestimonial}
        submitLabel="Create Testimonial"
      />
    </div>
  );
}
