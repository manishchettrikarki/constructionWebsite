import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { deleteTestimonial } from "./actions";
import { ConfirmSubmitButton } from "@/components/admin/confirmSubmitButton";

export default async function AdminTestimonialsPage() {
  const supabase = await createClient();
  const { data: testimonials, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("sort_order", { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-[#1a1a2e]">
            Testimonials
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage the client testimonials carousel on the About page.
          </p>
        </div>
        <Link
          href="/admin/testimonials/new"
          className="bg-[#ffc631] hover:bg-[#1a1a2e] hover:text-white text-[#1a1a2e] font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
        >
          + Add Testimonial
        </Link>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-6">
          Couldn&apos;t load testimonials: {error.message}
        </div>
      )}

      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left px-5 py-3 font-semibold">Client</th>
              <th className="text-left px-5 py-3 font-semibold">Testimonial</th>
              <th className="text-left px-5 py-3 font-semibold">Rating</th>
              <th className="text-left px-5 py-3 font-semibold">Order</th>
              <th className="text-right px-5 py-3 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {testimonials?.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50 align-top">
                <td className="px-5 py-3.5">
                  <p className="font-semibold text-[#1a1a2e]">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.role}</p>
                </td>
                <td className="px-5 py-3.5 text-gray-500 max-w-md">
                  <span className="line-clamp-2">{t.quote}</span>
                </td>
                <td className="px-5 py-3.5 text-[#ffc631] whitespace-nowrap">
                  {"★".repeat(t.rating)}
                  <span className="text-gray-200">
                    {"★".repeat(5 - t.rating)}
                  </span>
                </td>
                <td className="px-5 py-3.5 text-gray-400">{t.sort_order}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center justify-end gap-4">
                    <Link
                      href={`/admin/testimonials/${t.id}`}
                      className="text-[#1a1a2e] font-semibold hover:text-[#ffc631] transition-colors"
                    >
                      Edit
                    </Link>
                    <form action={deleteTestimonial.bind(null, t.id)}>
                      <ConfirmSubmitButton
                        confirmMessage={`Delete the testimonial from ${t.name}? This can't be undone.`}
                        className="text-red-500 font-semibold hover:text-red-700 transition-colors"
                      >
                        Delete
                      </ConfirmSubmitButton>
                    </form>
                  </div>
                </td>
              </tr>
            ))}

            {testimonials?.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-10 text-center text-gray-400">
                  No testimonials yet — click &ldquo;Add Testimonial&rdquo; to
                  create one.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
